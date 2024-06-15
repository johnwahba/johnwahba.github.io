document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const historicalFile = document.getElementById('historicalPrices').files[0];
    const optionsFile = document.getElementById('optionsPrices').files[0];
    const distanceFromMoney = parseFloat(document.getElementById('distanceFromMoney').value) / 100;
    const timeToExpiry = parseInt(document.getElementById('timeToExpiry').value);

    if (historicalFile && optionsFile) {
        const readerHistorical = new FileReader();
        const readerOptions = new FileReader();

        readerHistorical.onload = function (event) {
            const historicalData = parseCSV(event.target.result);
            readerOptions.onload = function (event) {
                const { optionsData, quoteDate, quotePrice } = parseOptionsData(event.target.result);
                const selectedOption = selectClosestOption(optionsData, distanceFromMoney, timeToExpiry, quoteDate, quotePrice);
                const premiumEstimate = calculatePremium(selectedOption);
                displayPremiumEstimate(premiumEstimate, selectedOption, quotePrice);
                const results = backtest(historicalData, selectedOption, distanceFromMoney, timeToExpiry, quoteDate);
                displayResults(results);
            };
            readerOptions.readAsText(optionsFile);
        };
        readerHistorical.readAsText(historicalFile);
    }
});

function parseCSV(data) {
    const rows = data.split('\n');
    const headers = rows[0].split(',');
    const result = rows.slice(1).map(row => {
        const values = row.split(',');
        return headers.reduce((obj, header, index) => {
            obj[header.trim()] = isNaN(values[index].trim()) ? values[index].trim() : parseFloat(values[index].trim());
            return obj;
        }, {});
    });
    return result;
}

function parseOptionsData(data) {
    const rows = data.split('\n');
    const quoteDateMatch = rows[2].match(/Date: ([A-Za-z]+ \d+, \d+)/);
    const quotePriceMatch = rows[1].match(/Last: (\d+\.?\d*)/);
    const quoteDate = quoteDateMatch ? new Date(quoteDateMatch[1]) : new Date();
    const quotePrice = quotePriceMatch ? parseFloat(quotePriceMatch[1]) : 0;
    const headers = [
        'Expiration Date', 'Calls', 'Last Sale', 'Net', 'Bid', 'Ask', 'Volume', 'IV', 'Delta', 'Gamma',
        'Open Interest', 'Strike'
    ];
    const result = [];
    rows.slice(4).forEach(row => {
        const values = row.split(',');
        if (values.length >= headers.length) {
            const parsedRow = headers.reduce((obj, header, index) => {
                obj[header.trim()] = isNaN(values[index].trim()) ? values[index].trim() : parseFloat(values[index].trim());
                return obj;
            }, {});
            result.push(parsedRow);
        }
    });
    return { optionsData: result, quoteDate, quotePrice };
}

function selectClosestOption(optionsData, distanceFromMoney, timeToExpiry, quoteDate, quotePrice) {
    let closestOptionsByExpiry = [];
    let closestExpiryDistance = Number.MAX_VALUE;

    // First pass: select the closest expiry date
    optionsData.forEach(option => {
        const optionDate = new Date(option['Expiration Date']);
        const daysToExpiry = (optionDate - quoteDate) / (1000 * 60 * 60 * 24);
        const expiryDistance = Math.abs(daysToExpiry - timeToExpiry);

        if (expiryDistance < closestExpiryDistance) {
            closestExpiryDistance = expiryDistance;
            closestOptionsByExpiry = [option];
        } else if (expiryDistance === closestExpiryDistance) {
            closestOptionsByExpiry.push(option);
        }
    });

    // Second pass: select the closest strike price among the options with the closest expiry date
    let closestOption = null;
    let closestPriceDistance = Number.MAX_VALUE;

    closestOptionsByExpiry.forEach(option => {
        const distance = Math.abs((option['Strike'] - quotePrice) / quotePrice - distanceFromMoney);

        if (distance < closestPriceDistance) {
            closestPriceDistance = distance;
            closestOption = { ...option, distanceFromMoney: distanceFromMoney, timeToExpiry: closestExpiryDistance };
        }
    });

    return closestOption;
}

function calculatePremium(selectedOption) {
    if (!selectedOption) {
        return 0;
    }
    return parseFloat(selectedOption['Last Sale']);
}

function syntheticOption(baseDate, timeToExpiry, strikePrice, distanceFromMoney, selectedOption) {
    const expiryDate = new Date(baseDate);
    expiryDate.setDate(expiryDate.getDate() + timeToExpiry);
    const strikeDistance = distanceFromMoney * strikePrice;
    return {
        'Expiration Date': expiryDate.toISOString().split('T')[0],
        'Strike': strikePrice + strikeDistance,
        'Last Sale': (selectedOption['Last Sale'] / selectedOption['Strike']) * strikePrice,
        // Additional fields as necessary
    };
}

function backtest(historicalData, selectedOption, distanceFromMoney, timeToExpiry, quoteDate) {
    const results = [];
    const initialPortfolioValue = 10000;
    let buyHoldPortfolioValue = initialPortfolioValue;
    let coveredCallPortfolioValue = initialPortfolioValue;
    let currentPrice = historicalData[0]['Close'];
    const buyAndHoldShares = initialPortfolioValue / currentPrice;
    let optionExpiryDate;
    let currentOption;
    let stockOwned = true;
    let coveredCallPortfolioShares = initialPortfolioValue / currentPrice;

    historicalData.forEach((row, index) => {
        const date = new Date(row['Date']);
        const price = row['Close'];
        const buyHoldReturn = buyAndHoldShares * price;

        let event = '';

        if (!optionExpiryDate) {
            if (!stockOwned) {
                coveredCallPortfolioShares = coveredCallPortfolioValue / price;
            }
            // Sell a new call option
            currentOption = syntheticOption(date, timeToExpiry, price, distanceFromMoney, selectedOption);
            optionExpiryDate = new Date(date);
            optionExpiryDate.setDate(optionExpiryDate.getDate() + timeToExpiry);
            event = 'option sold';
            if (!stockOwned) {
                stockOwned = true;
                event += ' and stock rebought';
            }
            coveredCallPortfolioValue = (price + calculatePremium(currentOption)) * coveredCallPortfolioShares;
        } else if (date >= optionExpiryDate) {
            if (price >= currentOption['Strike']) {
                event = 'exercised';
                stockOwned = false;
                coveredCallPortfolioValue = (currentOption['Strike'] + calculatePremium(currentOption)) * coveredCallPortfolioShares;
            } else {
                event = 'expired';
                coveredCallPortfolioValue = (price + calculatePremium(currentOption)) * coveredCallPortfolioShares;
            }
            optionExpiryDate = null;
        } else {
            coveredCallPortfolioValue = (price + calculatePremium(currentOption)) * coveredCallPortfolioShares;
        }
    

        results.push({
            Date: row['Date'],
            Price: price,
            'Buy & Hold Portfolio Value': buyHoldReturn.toFixed(2),
            'Covered Call Portfolio Value': coveredCallPortfolioValue.toFixed(2),
            Event: event
        });

        buyHoldPortfolioValue = buyHoldReturn;
        currentPrice = price;
    });

    return results;
}

function displayPremiumEstimate(premium, selectedOption, quotePrice) {
    const premiumEstimateDiv = document.getElementById('premiumEstimate');
    if (selectedOption) {
        const expiryDate = new Date(selectedOption['Expiration Date']).toLocaleDateString();
        const premiumPercentage = (premium / quotePrice) * 100;
        premiumEstimateDiv.innerHTML = `
            Estimated Premium Received: $${premium.toFixed(2)} (${premiumPercentage.toFixed(2)}%)<br>
            Selected Option - Distance from Money: ${(selectedOption.distanceFromMoney * 100).toFixed(2)}%, Expiry: ${expiryDate}
        `;
    } else {
        premiumEstimateDiv.innerHTML = `Estimated Premium Received: $${premium.toFixed(2)}`;
    }
}

function displayResults(results) {
    const tableBody = document.querySelector('#resultsTable tbody');
    const tableHeader = `
        <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Buy & Hold Portfolio Value</th>
            <th>Covered Call Portfolio Value</th>
            <th>Event</th>
        </tr>
    `;
    document.querySelector('#resultsTable thead').innerHTML = tableHeader;
    tableBody.innerHTML = '';

    results.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.Date}</td><td>${row.Price}</td><td>${row['Buy & Hold Portfolio Value']}</td><td>${row['Covered Call Portfolio Value']}</td><td>${row.Event}</td>`;
        tableBody.appendChild(tr);
    });

    document.getElementById('resultsContainer').style.display = 'block';
}
