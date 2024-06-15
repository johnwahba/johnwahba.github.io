const exampleHistoricalCSV = `Date,Open,High,Low,Close,Adj Close,Volume
2023-06-15,436.329987,443.899994,436.230011,442.600006,436.282166,110303100
2023-06-16,443.019989,443.609985,438.970001,439.459991,434.796082,114121300
2023-06-20,437.450012,438.369995,435.029999,437.179993,432.540283,76160400
2023-06-21,436.160004,436.989990,434.329987,434.940002,430.324036,76982300
2023-06-22,433.950012,436.619995,433.600006,436.510010,431.877380,70637200
2023-06-23,432.929993,435.059998,432.470001,433.209991,428.612396,92074500
2023-06-26,432.619995,434.609985,431.190002,431.440002,426.861206,72823600
2023-06-27,432.350006,436.809998,431.880005,436.170013,431.541016,72813700
2023-06-28,435.049988,437.440002,434.410004,436.390015,431.758667,75636000
2023-06-29,435.959991,438.279999,435.540009,438.109985,433.460419,67882300
2023-06-30,441.440002,444.299988,441.109985,443.279999,438.575531,104921500
2023-07-03,442.920013,444.079987,442.630005,443.790009,439.080139,32793400
2023-07-05,441.910004,443.890015,441.899994,443.130005,438.427124,58418400
2023-07-06,439.420013,440.100006,437.059998,439.660004,434.993958,80658300
2023-07-07,438.630005,442.640015,438.299988,438.549988,433.895721,86076100
2023-07-10,438.179993,439.839996,437.589996,439.660004,434.993958,62443500
2023-07-11,440.450012,442.970001,439.440002,442.459991,437.764221,64463800
2023-07-12,446.390015,447.480011,444.910004,446.019989,441.286469,91924500
2023-07-13,447.899994,450.380005,447.450012,449.559998,444.788879,72425200
2023-07-14,450.480011,451.359985,448.489990,449.279999,444.511841,69761800
2023-07-17,449.130005,451.929993,449.079987,450.839996,446.055298,52680200
2023-07-18,450.500000,454.859985,450.049988,454.190002,449.369720,80744400
2023-07-19,455.010010,456.429993,454.109985,455.200012,450.369019,65891700
2023-07-20,454.170013,455.100006,451.440002,452.179993,447.381042,70591600
2023-07-21,453.959991,454.170013,452.170013,452.179993,447.381042,71245400
2023-07-24,453.369995,455.040009,452.299988,454.200012,449.379639,54023400
2023-07-25,453.920013,456.739990,453.869995,455.440002,450.606506,55191200
2023-07-26,454.470001,456.989990,453.380005,455.510010,450.675781,71052900
2023-07-27,459.019989,459.440002,451.549988,452.489990,447.687805,92194400
2023-07-28,455.880005,457.779999,452.489990,456.920013,452.070770,80011800
2023-07-31,457.410004,458.160004,456.049988,457.790009,452.931549,62040400
2023-08-01,456.269989,457.250000,455.489990,456.480011,451.635468,55291500
2023-08-02,453.250000,453.519989,449.350006,450.130005,445.352875,93933400
2023-08-03,448.040009,450.790009,447.369995,448.839996,444.076508,64276100
2023-08-04,450.720001,452.899994,446.269989,446.809998,442.068085,100052300
2023-08-07,448.709991,450.869995,447.989990,450.709991,445.926666,58357500
2023-08-08,448.079987,450.700012,445.269989,448.750000,443.987488,71361300
2023-08-09,449.029999,449.200012,444.959991,445.750000,441.019318,78789600
2023-08-10,448.190002,451.700012,444.700012,445.910004,441.177612,93005500
2023-08-11,443.970001,446.700012,443.350006,445.649994,440.920380,68664600
2023-08-14,444.700012,448.109985,444.380005,448.109985,443.354279,47867400
2023-08-15,446.269989,446.640015,442.299988,442.890015,438.189667,75707500
2023-08-16,442.459991,444.179993,439.529999,439.640015,434.974182,80107200
2023-08-17,441.160004,441.429993,435.750000,436.290009,431.659729,95711300
2023-08-18,433.369995,437.570007,433.010010,436.500000,431.867493,98758400
2023-08-21,437.549988,440.109985,435.320007,439.339996,434.677368,68719000
2023-08-22,441.179993,441.179993,437.570007,438.149994,433.499939,65062900
2023-08-23,439.250000,443.670013,439.100006,443.029999,438.328186,68441000
2023-08-24,444.690002,445.220001,436.859985,436.890015,432.253357,88517300
2023-08-25,438.679993,441.299988,435.000000,439.970001,435.300659,102325100
2023-08-28,442.239990,443.399994,439.970001,442.760010,438.061066,61595400
2023-08-29,442.649994,449.450012,442.459991,449.160004,444.393127,83081900
2023-08-30,449.510010,451.670013,448.779999,451.010010,446.223511,69053900
2023-08-31,451.649994,452.829987,450.160004,450.350006,445.570496,66084600
2023-09-01,453.170013,453.670013,449.679993,451.190002,446.401581,58875700
2023-09-05,450.730011,451.059998,449.170013,449.239990,444.472290,55166200
2023-09-06,448.399994,448.510010,443.809998,446.220001,441.484344,70758500
2023-09-07,443.109985,445.549988,442.750000,444.850006,440.128876,70355400
2023-09-08,444.899994,447.109985,444.529999,445.519989,440.791748,61659700
2023-09-11,448.239990,448.769989,446.470001,448.450012,443.690704,60180100
2023-09-12,446.950012,448.529999,445.390015,445.989990,441.256775,67565400
2023-09-13,446.220001,447.709991,445.079987,446.510010,441.771271,60199300
2023-09-14,449.070007,451.079987,447.720001,450.359985,445.580353,83430800
2023-09-15,447.140015,447.480011,442.920013,443.369995,440.211914,111761400
2023-09-18,443.049988,444.970001,442.559998,443.630005,440.470032,55752200
2023-09-19,442.679993,443.290009,439.940002,442.709991,439.556610,66514600
2023-09-20,444.010010,444.440002,438.429993,438.640015,435.515625,82562600
2023-09-21,435.700012,435.970001,431.230011,431.390015,428.317261,103976100
2023-09-22,432.450012,434.100006,429.989990,430.420013,427.354156,100829700
2023-09-25,429.170013,432.269989,428.720001,432.230011,429.151245,70874500
2023-09-26,429.089996,429.820007,425.019989,425.880005,422.846497,96168400
2023-09-27,427.089996,427.670013,422.290009,426.049988,423.015259,104705800
2023-09-28,425.480011,430.250000,424.869995,428.519989,425.467682,92258300
2023-09-29,431.670013,431.850006,425.910004,427.480011,424.435089,115078500
2023-10-02,426.619995,428.600006,424.459991,427.309998,424.266296,83798600
2023-10-03,425.059998,427.369995,420.179993,421.589996,418.587036,103760600
2023-10-04,422.070007,425.429993,420.559998,424.660004,421.635193,87453000
2023-10-05,424.359985,425.369995,421.170013,424.500000,421.476318,70142700
2023-10-06,421.970001,431.130005,420.600006,429.540009,426.480408,113202700
2023-10-09,427.579987,432.880005,427.010010,432.290009,429.210815,80374400
2023-10-10,432.940002,437.220001,432.529999,434.540009,431.444794,78607300
2023-10-11,435.640015,436.579987,433.179993,436.320007,433.212128,62451700
2023-10-12,436.950012,437.339996,431.230011,433.660004,430.571075,81154200
2023-10-13,435.209991,436.450012,429.880005,431.500000,428.426422,95143100
2023-10-16,433.820007,437.140015,433.570007,436.040009,432.934143,75433200
2023-10-17,432.809998,438.140015,432.450012,436.019989,432.914246,75324700
2023-10-18,434.190002,435.179993,429.089996,430.209991,427.145630,93559800
2023-10-19,430.950012,432.820007,425.730011,426.429993,423.392548,121323000
2023-10-20,425.980011,426.540009,421.079987,421.190002,418.189880,123845800
2023-10-23,419.609985,424.450012,417.799988,420.459991,417.465088,92035100
2023-10-24,422.649994,424.820007,420.739990,423.630005,420.612518,78564200
2023-10-25,421.890015,421.920013,417.019989,417.549988,414.575806,94223200
2023-10-26,416.450012,417.329987,411.600006,412.549988,409.611420,115156800
2023-10-27,414.190002,414.600006,409.209991,410.679993,407.754761,107367700
2023-10-30,413.559998,416.679993,412.220001,415.589996,412.629761,86562700
2023-10-31,416.179993,418.529999,414.209991,418.200012,415.221191,79665200
2023-11-01,419.200012,423.500000,418.649994,422.660004,419.649445,98068100
2023-11-02,426.579987,430.920013,426.559998,430.760010,427.691742,94938900
2023-11-03,433.140015,436.290009,433.010010,434.690002,431.593750,100110800
2023-11-06,435.470001,436.149994,433.679993,435.690002,432.586609,67831700
2023-11-07,435.690002,437.589996,434.510010,436.929993,433.817749,64256100
2023-11-08,437.549988,438.089996,434.869995,437.250000,434.135498,61746000
2023-11-09,438.429993,438.470001,433.399994,433.839996,430.749786,83174400
2023-11-10,435.980011,440.929993,433.829987,440.609985,437.471558,89462200
2023-11-13,439.230011,441.329987,438.420013,440.190002,437.054535,52236100
2023-11-14,446.320007,450.059998,446.089996,448.730011,445.533752,97176900
2023-11-15,450.109985,451.380005,448.799988,449.679993,446.476929,77327600
2023-11-16,449.220001,450.559998,448.119995,450.230011,447.023041,66665800
2023-11-17,450.239990,451.420013,449.290009,450.790009,447.579071,83133200
2023-11-20,450.529999,455.130005,450.519989,454.260010,451.024323,69936200
2023-11-21,453.179993,454.130005,451.959991,453.269989,450.041382,49244600
2023-11-22,454.980011,456.380005,453.890015,455.019989,451.778900,59394900
2023-11-24,455.070007,455.500000,454.730011,455.299988,452.056915,29737400
2023-11-27,454.649994,455.489990,454.079987,454.480011,451.242767,50506000
2023-11-28,454.079987,456.269989,453.500000,454.929993,451.689545,62115000
2023-11-29,457.149994,458.320007,454.200012,454.609985,451.371826,63146000
2023-11-30,455.480011,456.760010,453.339996,456.399994,453.149078,79752700
2023-12-01,455.769989,459.649994,455.160004,459.100006,455.829865,89097900
2023-12-04,455.600006,459.119995,454.339996,456.690002,453.437042,72430900
2023-12-05,455.260010,457.589996,454.869995,456.600006,453.347687,69793500
2023-12-06,458.809998,458.839996,454.309998,454.760010,451.520782,69124700
2023-12-07,456.910004,458.899994,456.290009,458.230011,454.966064,66995400
2023-12-08,457.459991,460.750000,457.209991,460.200012,456.922028,83080900
2023-12-11,459.690002,462.170013,459.470001,461.989990,458.699280,65002200
2023-12-12,461.630005,464.200012,460.600006,464.100006,460.794250,68327600
2023-12-13,464.489990,470.760010,464.119995,470.500000,467.148651,93278000
2023-12-14,472.500000,473.730011,469.250000,472.010010,468.647919,119026000
2023-12-15,469.489990,470.700012,467.429993,469.329987,467.876282,141319300
2023-12-18,470.980011,472.980011,469.890015,471.970001,470.508118,70375300
2023-12-19,472.529999,474.920013,472.450012,474.839996,473.369232,55761800
2023-12-20,473.959991,475.899994,467.820007,468.260010,466.809601,102921000
2023-12-21,471.329987,472.980011,468.839996,472.700012,471.235870,86667500
2023-12-22,473.859985,475.380005,471.700012,473.649994,472.182892,67126600
2023-12-26,474.070007,476.579987,473.989990,475.649994,474.176697,55387000
2023-12-27,475.440002,476.660004,474.890015,476.510010,475.034058,68000300
2023-12-28,476.880005,477.549988,476.260010,476.690002,475.213501,77158100
2023-12-29,476.489990,477.029999,473.299988,475.309998,473.837769,122234100
2024-01-02,472.160004,473.670013,470.489990,472.649994,471.186005,123623700
2024-01-03,470.429993,471.190002,468.170013,468.790009,467.337982,103585900
2024-01-04,468.299988,470.959991,467.049988,467.279999,465.832642,84232200
2024-01-05,467.489990,470.440002,466.429993,467.920013,466.470673,86060800
2024-01-08,468.429993,474.750000,468.299988,474.600006,473.129974,74879100
2024-01-09,471.869995,474.929993,471.350006,473.880005,472.412201,65931400
2024-01-10,474.160004,477.450012,473.869995,476.559998,475.083893,67310600
2024-01-11,477.589996,478.119995,472.260010,476.350006,474.874542,77940700
2024-01-12,477.839996,478.600006,475.230011,476.679993,475.203522,57944000
2024-01-16,475.260010,476.609985,473.059998,474.929993,473.458923,85014900
2024-01-17,471.820007,472.790009,469.869995,472.290009,470.827118,68843900
2024-01-18,474.010010,477.059998,472.420013,476.489990,475.014099,91856200
2024-01-19,477.649994,482.720001,476.540009,482.429993,480.935699,110733300
2024-01-22,484.010010,485.220001,482.779999,483.450012,481.952576,75844900
2024-01-23,484.010010,485.109985,482.890015,484.859985,483.358185,49945300
2024-01-24,487.809998,488.769989,484.880005,485.390015,483.886566,81765000
2024-01-25,487.579987,488.309998,485.390015,488.029999,486.518372,72525000
2024-01-26,487.589996,489.119995,486.540009,487.410004,485.900299,76641600
2024-01-29,487.730011,491.420013,487.170013,491.269989,489.748322,61322800
2024-01-30,490.559998,491.619995,490.109985,490.890015,489.369537,58618400
2024-01-31,488.619995,489.079987,482.859985,482.880005,481.384338,126011100
2024-02-01,484.630005,489.230011,483.799988,489.200012,487.684753,91891600
2024-02-02,489.649994,496.049988,489.299988,494.350006,492.818787,99147700
2024-02-05,493.700012,494.380005,490.230011,492.549988,491.024353,75757100
2024-02-06,493.519989,494.320007,492.049988,493.980011,492.449951,55918600
2024-02-07,496.290009,498.529999,495.359985,498.100006,496.557190,70556500
2024-02-08,498.100006,498.709991,497.260010,498.320007,496.776489,52343600
2024-02-09,498.839996,501.649994,498.489990,501.200012,499.647583,63979400
2024-02-12,501.170013,503.500000,500.239990,500.980011,499.428253,56502300
2024-02-13,494.529999,497.089996,490.720001,494.079987,492.549622,113099200
2024-02-14,496.790009,499.070007,494.399994,498.570007,497.025726,68387800
2024-02-15,499.290009,502.200012,498.799988,502.010010,500.455078,61683000
2024-02-16,501.700012,502.869995,498.750000,499.510010,497.962830,75461200
2024-02-20,497.720001,498.410004,494.450012,496.760010,495.221344,71736700
2024-02-21,495.420013,497.369995,493.559998,497.209991,495.669922,59603800
2024-02-22,504.010010,508.489990,503.019989,507.500000,505.928070,76402500
2024-02-23,509.269989,510.130005,507.100006,507.850006,506.276978,61321800
2024-02-26,508.299988,508.750000,505.859985,505.989990,504.422729,50386700
2024-02-27,506.700012,507.160004,504.750000,506.929993,505.359833,48854500
2024-02-28,505.329987,506.859985,504.959991,506.260010,504.691925,56506600
2024-02-29,508.070007,509.739990,505.350006,508.079987,506.506256,83924800
2024-03-01,508.980011,513.289978,508.559998,512.849976,511.261475,76805900
2024-03-04,512.030029,514.200012,512.000000,512.299988,510.713196,49799300
2024-03-05,510.239990,510.700012,504.910004,507.179993,505.609039,72855600
2024-03-06,510.549988,512.070007,508.420013,509.750000,508.171082,68382400
2024-03-07,513.140015,515.890015,509.809998,514.809998,513.215393,58652100
2024-03-08,515.460022,518.219971,511.130005,511.720001,510.134979,86425500
2024-03-11,510.480011,511.880005,508.500000,511.279999,509.696350,62557200
2024-03-12,513.450012,517.380005,510.859985,516.780029,515.179321,73114400
2024-03-13,517.109985,517.289978,514.489990,515.969971,514.371826,55104100
2024-03-14,516.969971,517.130005,511.820007,514.950012,513.354980,110171800
2024-03-15,510.209991,511.700012,508.119995,509.829987,509.829987,107585800
2024-03-18,514.000000,515.479980,512.440002,512.859985,512.859985,88893300
2024-03-19,512.150024,516.000000,511.119995,515.710022,515.710022,60755300
2024-03-20,515.770020,520.619995,515.080017,520.479980,520.479980,69594600
2024-03-21,523.390015,524.109985,521.909973,522.200012,522.200012,60256100
2024-03-22,522.109985,522.609985,520.969971,521.210022,521.210022,79023000
2024-03-25,519.799988,520.950012,519.609985,519.770020,519.770020,48512100
2024-03-26,521.229980,521.580017,518.400024,518.809998,518.809998,65463700
2024-03-27,521.710022,523.210022,519.489990,523.169983,523.169983,82999800
2024-03-28,523.210022,524.609985,522.780029,523.070007,523.070007,96294900
2024-04-01,523.830017,524.380005,520.969971,522.159973,522.159973,62477500
2024-04-02,518.239990,518.979980,516.479980,518.840027,518.840027,74230300
2024-04-03,517.719971,520.950012,517.669983,519.409973,519.409973,59155800
2024-04-04,523.520020,523.869995,512.760010,513.070007,513.070007,96858100
2024-04-05,514.460022,520.440002,514.010010,518.429993,518.429993,74482100
2024-04-08,519.150024,520.179993,517.890015,518.719971,518.719971,48401800
2024-04-09,520.500000,520.750000,514.349976,519.320007,519.320007,68124400
2024-04-10,513.479980,516.159973,512.090027,514.119995,514.119995,82652800
2024-04-11,515.679993,519.479980,512.080017,518.000000,518.000000,70099000
2024-04-12,514.369995,515.820007,509.079987,510.850006,510.850006,92469100
2024-04-15,515.130005,515.299988,503.579987,504.450012,504.450012,92101400
2024-04-16,504.940002,506.500000,502.209991,503.529999,503.529999,73484000
2024-04-17,506.049988,506.220001,499.119995,500.549988,500.549988,75910300
2024-04-18,501.980011,504.130005,498.559998,499.519989,499.519989,74548100
2024-04-19,499.440002,500.459991,493.859985,495.160004,495.160004,102129100
2024-04-22,497.829987,502.380005,495.429993,499.720001,499.720001,67961000
2024-04-23,501.779999,506.089996,499.529999,505.649994,505.649994,64633600
2024-04-24,506.559998,507.369995,503.130005,505.410004,505.410004,55928100
2024-04-25,499.179993,504.269989,497.489990,503.489990,503.489990,69122400
2024-04-26,506.350006,509.880005,505.700012,508.260010,508.260010,64306100
2024-04-29,510.089996,510.750000,507.250000,510.059998,510.059998,46415400
2024-04-30,508.559998,509.559998,501.980011,501.980011,501.980011,77483600
2024-05-01,501.380005,508.190002,499.869995,500.350006,500.350006,80242800
2024-05-02,504.149994,505.890015,499.549988,505.029999,505.029999,62550200
2024-05-03,511.160004,512.549988,508.559998,511.290009,511.290009,72756700
2024-05-06,513.750000,516.609985,513.299988,516.570007,516.570007,47264700
2024-05-07,517.559998,518.570007,516.450012,517.140015,517.140015,52561300
2024-05-08,515.260010,517.739990,515.140015,517.190002,517.190002,42047200
2024-05-09,517.380005,520.210022,516.710022,520.169983,520.169983,43643700
2024-05-10,521.809998,522.640015,519.590027,520.840027,520.840027,52233200
2024-05-13,522.559998,522.669983,519.739990,520.909973,520.909973,36716400
2024-05-14,521.109985,523.830017,520.559998,523.299988,523.299988,57535900
2024-05-15,525.830017,530.080017,525.179993,529.780029,529.780029,59504900
2024-05-16,529.880005,531.520020,528.539978,528.690002,528.690002,50244800
2024-05-17,528.809998,529.520020,527.320007,529.450012,529.450012,59187600
2024-05-20,529.570007,531.559998,529.169983,530.059998,530.059998,37764200
2024-05-21,529.280029,531.520020,529.070007,531.359985,531.359985,33437000
2024-05-22,530.650024,531.380005,527.599976,529.830017,529.830017,48390000
2024-05-23,532.960022,533.070007,524.719971,525.960022,525.960022,57211200
2024-05-24,527.849976,530.270020,526.880005,529.440002,529.440002,41258400
2024-05-28,530.270020,530.510010,527.109985,529.809998,529.809998,36269600
2024-05-29,525.679993,527.309998,525.369995,526.099976,526.099976,45190300
2024-05-30,524.520020,525.200012,521.330017,522.609985,522.609985,46468500
2024-05-31,523.590027,527.500000,518.359985,527.369995,527.369995,90785800
2024-06-03,529.020020,529.309998,522.599976,527.799988,527.799988,46835700
2024-06-04,526.460022,529.150024,524.960022,528.390015,528.390015,34632700
2024-06-05,530.770020,534.690002,528.729980,534.669983,534.669983,47610400
2024-06-06,534.979980,535.419983,532.679993,534.659973,534.659973,30808500
2024-06-07,533.659973,536.890015,532.539978,534.010010,534.010010,43224500
2024-06-10,533.179993,535.989990,532.570007,535.659973,535.659973,35729300
2024-06-11,534.070007,537.010010,532.049988,536.950012,536.950012,36383400
2024-06-12,541.630005,544.119995,540.299988,541.359985,541.359985,63251300
2024-06-13,543.150024,543.330017,539.590027,542.450012,542.450012,44760900
2024-06-14,540.880005,542.809998,539.849976,542.780029,542.780029,40032000`

const exampleOptionDataCSV = `
SPDR S&P 500 ETF Trust,Last: 542.85,Change:  0.33
"Date: June 15, 2024 at 1:07 PM EDT",Bid: 542.82,Ask: 542.87,Size: 1*2,"Volume: 40,055,563"
Expiration Date,Calls,Last Sale,Net,Bid,Ask,Volume,IV,Delta,Gamma,Open Interest,Strike,Puts,Last Sale,Net,Bid,Ask,Volume,IV,Delta,Gamma,Open Interest
Fri Jun 14 2024,SPY240614C00540000,2.55,-0.71,2.28,3.06,80083,0.8578,0.9868,0.0305,12148,540.00,SPY240614P00540000,0.01,-0.325,0,0.01,417078,0.383,-0.0132,0.0305,32850
Fri Jun 14 2024,SPY240614C00541000,1.5,-0.955,1.41,1.53,270838,0.2734,0.9804,0.067,12956,541.00,SPY240614P00541000,0.01,-0.515,0,0.01,405797,0.2445,-0.0196,0.067,19767
Fri Jun 14 2024,SPY240614C00542000,0.47,-1.275,0.47,0.54,508243,0.168,0.874,0.5151,17819,542.00,SPY240614P00542000,0.02,-0.795,0.02,0.03,204986,0.1384,-0.126,0.5151,17010
Fri Jun 14 2024,SPY240614C00543000,0.01,-1.145,0.01,0.02,303934,0.135,0.084,0.3941,22327,543.00,SPY240614P00543000,0.5,-0.725,0.5,0.61,50642,0.135,-0.916,0.3941,10025
Fri Jun 14 2024,SPY240614C00544000,0.01,-0.685,0,0.01,179704,0.2552,0.0189,0.0623,16976,544.00,SPY240614P00544000,1.45,-0.315,1.25,2.13,7536,0.5606,-0.9811,0.0623,5913
Fri Jun 14 2024,SPY240614C00545000,0.01,-0.375,0,0.01,125637,0.3919,0.0129,0.0293,21748,545.00,SPY240614P00545000,2.45,-0.015,2.37,3.18,3532,0.9,-0.9871,0.0293,4067
Mon Jun 17 2024,SPY240617C00540000,2.96,-0.69,2.91,2.99,22223,0.0662,0.7767,0.0889,3340,540.00,SPY240617P00540000,0.44,-0.195,0.43,0.44,111891,0.0681,-0.2262,0.0904,5363
Mon Jun 17 2024,SPY240617C00541000,2.19,-0.71,2.17,2.2,65872,0.0644,0.6859,0.1105,2240,541.00,SPY240617P00541000,0.66,-0.225,0.65,0.66,167609,0.0649,-0.319,0.1127,8335
Mon Jun 17 2024,SPY240617C00542000,1.52,-0.71,1.51,1.52,134331,0.0622,0.5717,0.1277,3341,542.00,SPY240617P00542000,0.98,-0.23,0.98,0.99,98165,0.0624,-0.4359,0.1303,3856
Mon Jun 17 2024,SPY240617C00543000,0.97,-0.67,0.95,0.96,98789,0.0593,0.4405,0.1337,3859,543.00,SPY240617P00543000,1.44,-0.18,1.43,1.44,18663,0.0596,-0.5704,0.136,4089
Mon Jun 17 2024,SPY240617C00544000,0.55,-0.605,0.55,0.56,56304,0.0577,0.3068,0.1233,3487,544.00,SPY240617P00544000,2.04,-0.095,2.01,2.06,3962,0.0573,-0.7065,0.1243,2775
Mon Jun 17 2024,SPY240617C00545000,0.29,-0.475,0.28,0.3,41489,0.0568,0.1897,0.0979,5011,545.00,SPY240617P00545000,2.74,-0.02,2.73,2.82,4631,0.055,-0.8241,0.0967,677
Tue Jun 18 2024,SPY240618C00540000,3.5,-0.565,3.46,3.52,6421,0.0798,0.7252,0.0726,1798,540.00,SPY240618P00540000,0.8,-0.085,0.79,0.8,29204,0.0806,-0.2839,0.0755,3602
Tue Jun 18 2024,SPY240618C00541000,2.76,-0.57,2.74,2.77,11692,0.0775,0.6531,0.0832,3365,541.00,SPY240618P00541000,1.05,-0.105,1.05,1.07,20867,0.0775,-0.3595,0.0869,1480
Tue Jun 18 2024,SPY240618C00542000,2.12,-0.56,2.08,2.1,17495,0.0749,0.5692,0.0917,4250,542.00,SPY240618P00542000,1.41,-0.09,1.39,1.42,22136,0.075,-0.4479,0.0959,2492
Tue Jun 18 2024,SPY240618C00543000,1.54,-0.55,1.51,1.53,13494,0.0727,0.4758,0.0961,3220,543.00,SPY240618P00543000,1.82,-0.1,1.83,1.85,7231,0.0718,-0.5464,0.1003,2650
Tue Jun 18 2024,SPY240618C00544000,1.06,-0.52,1.05,1.06,16270,0.0709,0.3778,0.0949,5253,544.00,SPY240618P00544000,2.39,-0.04,2.36,2.4,596,0.0692,-0.6493,0.0981,3777
Tue Jun 18 2024,SPY240618C00545000,0.69,-0.47,0.67,0.69,9399,0.0685,0.2818,0.0869,3151,545.00,SPY240618P00545000,3.02,0.005,2.99,3.06,1075,0.0659,-0.7487,0.0881,686
Thu Jun 20 2024,SPY240620C00540000,3.96,-0.485,3.95,4,3037,0.0833,0.6866,0.0608,3258,540.00,SPY240620P00540000,1.19,0.005,1.17,1.2,4654,0.0832,-0.3192,0.0626,3648
Thu Jun 20 2024,SPY240620C00541000,3.24,-0.5,3.24,3.28,5443,0.0807,0.6268,0.0669,2687,541.00,SPY240620P00541000,1.5,0.02,1.46,1.5,6264,0.081,-0.3812,0.0692,3292
Thu Jun 20 2024,SPY240620C00542000,2.62,-0.475,2.59,2.63,7521,0.0789,0.5599,0.0716,2542,542.00,SPY240620P00542000,1.82,-0.02,1.82,1.86,6241,0.0786,-0.4512,0.0747,5325
Thu Jun 20 2024,SPY240620C00544000,1.54,-0.46,1.53,1.55,6519,0.0749,0.4119,0.0745,1606,544.00,SPY240620P00544000,2.85,0.08,2.74,2.83,792,0.0744,-0.6083,0.0789,851
Thu Jun 20 2024,SPY240620C00545000,1.13,-0.425,1.1,1.13,2855,0.0728,0.3359,0.0716,2106,545.00,SPY240620P00545000,3.37,0.03,3.32,3.44,1319,0.072,-0.6899,0.0761,1150
Thu Jun 20 2024,SPY240620C00546000,0.79,-0.39,0.77,0.79,1245,0.0711,0.2629,0.0656,683,546.00,SPY240620P00546000,4.09,0.11,3.99,4.13,40,0.0688,-0.7681,0.0693,1173
Fri Jun 21 2024,SPY240621C00540000,4.04,-0.485,4.01,4.06,15787,0.0847,0.6743,0.0584,33603,540.00,SPY240621P00540000,2.07,0.065,2.07,2.08,30883,0.0862,-0.4357,0.0617,11183
Fri Jun 21 2024,SPY240621C00541000,3.32,-0.51,3.32,3.35,34924,0.0825,0.617,0.0636,7764,541.00,SPY240621P00541000,2.47,0.08,2.47,2.49,20619,0.0839,-0.498,0.0644,5473
Fri Jun 21 2024,SPY240621C00542000,2.7,-0.495,2.69,2.72,20398,0.0808,0.5535,0.0677,15764,542.00,SPY240621P00542000,2.92,0.065,2.93,2.95,16294,0.0814,-0.5638,0.0654,6368
Fri Jun 21 2024,SPY240621C00543000,2.16,-0.46,2.13,2.16,14012,0.0792,0.4851,0.0701,9573,543.00,SPY240621P00543000,3.47,0.11,3.45,3.48,2941,0.0787,-0.6312,0.0644,6463
Fri Jun 21 2024,SPY240621C00544000,1.65,-0.46,1.65,1.67,8063,0.0778,0.4138,0.0702,12280,544.00,SPY240621P00544000,4,0.055,3.98,4.12,1011,0.0755,-0.6975,0.061,1341
Fri Jun 21 2024,SPY240621C00545000,1.23,-0.44,1.22,1.25,18831,0.076,0.3425,0.0676,45938,545.00,SPY240621P00545000,4.74,0.16,4.64,4.78,1859,0.0722,-0.7602,0.0556,1067
Mon Jun 24 2024,SPY240624C00540000,4.18,-0.46,4.15,4.2,793,0.0814,0.6631,0.0573,245,540.00,SPY240624P00540000,2.35,0.11,2.34,2.37,2441,0.0824,-0.435,0.055,1214
Mon Jun 24 2024,SPY240624C00541000,3.48,-0.475,3.47,3.52,1271,0.0801,0.6068,0.0615,404,541.00,SPY240624P00541000,2.77,0.13,2.75,2.77,1160,0.0805,-0.4904,0.0572,1240
Mon Jun 24 2024,SPY240624C00542000,2.89,-0.44,2.86,2.89,1230,0.0788,0.5455,0.0645,435,542.00,SPY240624P00542000,3.22,0.13,3.2,3.23,762,0.0787,-0.5485,0.0582,739
Mon Jun 24 2024,SPY240624C00543000,2.34,-0.42,2.31,2.33,801,0.0773,0.4812,0.0656,288,543.00,SPY240624P00543000,3.65,0.05,3.64,3.76,611,0.0758,-0.6081,0.058,861
Mon Jun 24 2024,SPY240624C00544000,1.84,-0.415,1.81,1.84,565,0.0755,0.4154,0.065,326,544.00,SPY240624P00544000,4.61,0.44,4.21,4.34,94,0.0737,-0.6676,0.0562,151
Mon Jun 24 2024,SPY240624C00545000,1.42,-0.39,1.39,1.42,1860,0.0744,0.3499,0.0624,758,545.00,SPY240624P00545000,4.94,0.155,4.86,5.01,34,0.0718,-0.7254,0.0529,206
Tue Jun 25 2024,SPY240625C00540000,4.2,-0.575,4.31,4.37,466,0.0842,0.6481,0.0543,77,540.00,SPY240625P00540000,2.55,0.115,2.57,2.6,804,0.0851,-0.4388,0.0509,496
Tue Jun 25 2024,SPY240625C00541000,3.67,-0.435,3.65,3.69,470,0.0827,0.595,0.0576,277,541.00,SPY240625P00541000,2.8,-0.035,2.97,3,624,0.0832,-0.4901,0.0528,226
Tue Jun 25 2024,SPY240625C00542000,3.09,-0.395,3.05,3.08,987,0.0816,0.5376,0.0599,273,542.00,SPY240625P00542000,3.43,0.15,3.43,3.45,337,0.0813,-0.5438,0.0539,142
Tue Jun 25 2024,SPY240625C00543000,2.56,-0.365,2.49,2.53,496,0.0799,0.4782,0.0606,351,543.00,SPY240625P00543000,3.74,-0.05,3.84,3.98,117,0.0785,-0.5988,0.0539,62
Tue Jun 25 2024,SPY240625C00544000,2.04,-0.375,2.01,2.04,189,0.0787,0.4174,0.0599,73,544.00,SPY240625P00544000,4.47,0.11,4.43,4.57,18,0.0773,-0.6541,0.0526,166
Tue Jun 25 2024,SPY240625C00545000,1.55,-0.43,1.59,1.62,420,0.0776,0.3571,0.0576,955,545.00,SPY240625P00545000,4.89,-0.095,5.03,5.2,45,0.0749,-0.7079,0.0501,11
Wed Jun 26 2024,SPY240626C00540000,4.54,-0.4,4.51,4.56,109,0.0871,0.6337,0.0509,199,540.00,SPY240626P00540000,2.68,0.04,2.8,2.83,404,0.0881,-0.4414,0.0471,197
Wed Jun 26 2024,SPY240626C00541000,3.96,-0.325,3.86,3.9,746,0.0857,0.5838,0.0534,71,541.00,SPY240626P00541000,3.03,-0.01,3.2,3.23,325,0.0863,-0.4887,0.0488,85
Wed Jun 26 2024,SPY240626C00542000,3.36,-0.315,3.26,3.3,742,0.0843,0.5312,0.055,672,542.00,SPY240626P00542000,3.68,0.195,3.65,3.68,1200,0.0845,-0.5383,0.0498,228
Wed Jun 26 2024,SPY240626C00543000,2.79,-0.33,2.72,2.75,595,0.0833,0.476,0.0556,1916,543.00,SPY240626P00543000,3.95,-0.03,4.06,4.2,27,0.0817,-0.5894,0.05,535
Wed Jun 26 2024,SPY240626C00544000,2.29,-0.33,2.24,2.27,513,0.082,0.4204,0.0548,208,544.00,SPY240626P00544000,4.58,0.035,4.61,4.75,18,0.0797,-0.6409,0.0493,57
Wed Jun 26 2024,SPY240626C00545000,1.84,-0.34,1.81,1.84,378,0.0808,0.3655,0.0529,40,545.00,SPY240626P00545000,5.1,-0.04,5.22,5.39,27,0.0782,-0.6913,0.0476,2
Thu Jun 27 2024,SPY240627C00540000,4.84,-0.28,4.72,4.76,75,0.0898,0.622,0.0481,36,540.00,SPY240627P00540000,2.86,0.03,3.01,3.05,353,0.0906,-0.443,0.0443,122
Thu Jun 27 2024,SPY240627C00541000,4.19,-0.275,4.08,4.12,347,0.0884,0.5749,0.05,97,541.00,SPY240627P00541000,3.45,0.225,3.41,3.45,230,0.0887,-0.4876,0.0459,87
Thu Jun 27 2024,SPY240627C00542000,3.58,-0.285,3.48,3.53,298,0.0872,0.5257,0.0512,182,542.00,SPY240627P00542000,3.74,0.07,3.86,3.89,206,0.0871,-0.534,0.0468,179
Thu Jun 27 2024,SPY240627C00543000,2.99,-0.325,2.94,2.99,135,0.0861,0.4741,0.0514,352,543.00,SPY240627P00543000,4.18,0.015,4.32,4.39,34,0.0848,-0.582,0.0471,30
Thu Jun 27 2024,SPY240627C00544000,2.53,-0.29,2.46,2.5,290,0.0848,0.4232,0.0506,50,544.00,SPY240627P00544000,5.15,0.435,4.8,4.95,6,0.0825,-0.6301,0.0465,1
Thu Jun 27 2024,SPY240627C00545000,2.07,-0.31,2.04,2.07,635,0.0839,0.3724,0.049,64,545.00,SPY240627P00545000,6.47,1.13,5.4,5.58,1,0.0812,-0.6775,0.0452,11
Fri Jun 28 2024,SPY240628C00540000,5.18,-0.28,5.15,5.19,2670,0.096,0.6057,0.0425,39689,540.00,SPY240628P00540000,3.35,0.26,3.33,3.36,10032,0.0963,-0.4424,0.0397,5317
Fri Jun 28 2024,SPY240628C00541000,4.61,-0.22,4.53,4.56,1796,0.0947,0.5642,0.0438,6439,541.00,SPY240628P00541000,3.74,0.255,3.72,3.76,3996,0.0946,-0.4821,0.0409,2735
Fri Jun 28 2024,SPY240628C00542000,3.96,-0.27,3.94,3.98,3464,0.0936,0.5208,0.0445,16178,542.00,SPY240628P00542000,4.19,0.26,4.16,4.2,3193,0.0929,-0.5234,0.0415,1738
Fri Jun 28 2024,SPY240628C00543000,3.42,-0.27,3.41,3.44,2470,0.0924,0.4764,0.0446,4586,543.00,SPY240628P00543000,4.65,0.23,4.65,4.69,521,0.0915,-0.5654,0.0417,1102
Fri Jun 28 2024,SPY240628C00544000,2.92,-0.28,2.91,2.95,8794,0.0913,0.4319,0.0441,5101,544.00,SPY240628P00544000,5.4,0.465,5.18,5.27,148,0.0905,-0.6079,0.0413,641
Fri Jun 28 2024,SPY240628C00545000,2.51,-0.24,2.47,2.5,10401,0.0901,0.3874,0.0429,9731,545.00,SPY240628P00545000,5.75,0.22,5.67,5.85,1068,0.0879,-0.6498,0.0404,1286`

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
                updateUI(optionsData, distanceFromMoney, timeToExpiry, quoteDate, quotePrice, historicalData);
            };
            readerOptions.readAsText(optionsFile);
        };
        readerHistorical.readAsText(historicalFile);
    }
});



function updateUI(optionsData, distanceFromMoney, timeToExpiry, quoteDate, quotePrice, historicalData) {
    const selectedOption = selectClosestOption(optionsData, distanceFromMoney, timeToExpiry, quoteDate, quotePrice);
    const premiumEstimate = calculatePremium(selectedOption);
    displayPremiumEstimate(premiumEstimate, selectedOption, quotePrice);
    const results = backtest(historicalData, selectedOption, distanceFromMoney, timeToExpiry, quoteDate);
    displayResults(results);
}


const exampleOptionData = parseOptionsData(exampleOptionDataCSV)
const exampleHistoricalData = parseCSV(exampleHistoricalCSV)
const distanceFromMoney = parseFloat(document.getElementById('distanceFromMoney').value) / 100;
const timeToExpiry = parseInt(document.getElementById('timeToExpiry').value);
updateUI(exampleOptionData.optionsData, distanceFromMoney, timeToExpiry, exampleOptionData.quoteDate, exampleOptionData.quotePrice, exampleHistoricalData)


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
        if (row === '') {
            return
        }
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
