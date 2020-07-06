export async function getCoordinates(address) {
    address = encodeURIComponent(address);
    const url = 'http://api.geonames.org/geoCodeAddressJSON?q=' + address + '&username=timelord';

    let response = await fetch(url);


    try {
        let data = await response.json();
        return data;

    } catch(e) {
        console.log(e);
    }
}





// {
//     "data": [{
//         "moonrise_ts": 1593997973,
//         "wind_cdir": "ESE",
//         "rh": 76,
//         "pres": 1004.76,
//         "high_temp": 33.3,
//         "sunset_ts": 1593995246,
//         "ozone": 301.681,
//         "moon_phase": 0.980676,
//         "wind_gust_spd": 8.7,
//         "snow_depth": 0,
//         "clouds": 51,
//         "ts": 1593921660,
//         "sunrise_ts": 1593943297,
//         "app_min_temp": 23.4,
//         "wind_spd": 2.14922,
//         "pop": 0,
//         "wind_cdir_full": "east-southeast",
//         "slp": 1014.59,
//         "moon_phase_lunation": 0.5,
//         "valid_date": "2020-07-05",
//         "app_max_temp": 36.9,
//         "vis": 22.9857,
//         "dewpt": 22,
//         "snow": 0,
//         "uv": 5.27292,
//         "weather": {
//             "icon": "c03d",
//             "code": 803,
//             "description": "Broken clouds"
//         },
//         "wind_dir": 105,
//         "max_dhi": null,
//         "clouds_hi": 39,
//         "precip": 0,
//         "low_temp": 23.8,
//         "max_temp": 33.3,
//         "moonset_ts": 1593947745,
//         "datetime": "2020-07-05",
//         "temp": 27.4,
//         "min_temp": 22.5,
//         "clouds_mid": 3,
//         "clouds_low": 27
//     }, {
//         "moonrise_ts": 1594087193,
//         "wind_cdir": "S",
//         "rh": 70,
//         "pres": 1006.72,
//         "high_temp": 32.6,
//         "sunset_ts": 1594081632,
//         "ozone": 296.997,
//         "moon_phase": 0.939254,
//         "wind_gust_spd": 8,
//         "snow_depth": 0,
//         "clouds": 47,
//         "ts": 1594008060,
//         "sunrise_ts": 1594029728,
//         "app_min_temp": 24.6,
//         "wind_spd": 2.82214,
//         "pop": 0,
//         "wind_cdir_full": "south",
//         "slp": 1016.57,
//         "moon_phase_lunation": 0.54,
//         "valid_date": "2020-07-06",
//         "app_max_temp": 34.4,
//         "vis": 24.1,
//         "dewpt": 20.9,
//         "snow": 0,
//         "uv": 8.93478,
//         "weather": {
//             "icon": "c03d",
//             "code": 803,
//             "description": "Broken clouds"
//         },
//         "wind_dir": 169,
//         "max_dhi": null,
//         "clouds_hi": 23,
//         "precip": 0,
//         "low_temp": 22.5,
//         "max_temp": 32.6,
//         "moonset_ts": 1594037862,
//         "datetime": "2020-07-06",
//         "temp": 27.8,
//         "min_temp": 23.7,
//         "clouds_mid": 1,
//         "clouds_low": 34
//     }, {
//         "moonrise_ts": 1594173593,
//         "wind_cdir": "SSW",
//         "rh": 71,
//         "pres": 1002.63,
//         "high_temp": 31.2,
//         "sunset_ts": 1594168016,
//         "ozone": 293.066,
//         "moon_phase": 0.878702,
//         "wind_gust_spd": 6.93501,
//         "snow_depth": 0,
//         "clouds": 92,
//         "ts": 1594094460,
//         "sunrise_ts": 1594116160,
//         "app_min_temp": 23.1,
//         "wind_spd": 2.94676,
//         "pop": 50,
//         "wind_cdir_full": "south-southwest",
//         "slp": 1016.01,
//         "moon_phase_lunation": 0.57,
//         "valid_date": "2020-07-07",
//         "app_max_temp": 33.6,
//         "vis": 22.7803,
//         "dewpt": 20.6,
//         "snow": 0,
//         "uv": 3.32891,
//         "weather": {
//             "icon": "c04d",
//             "code": 804,
//             "description": "Overcast clouds"
//         },
//         "wind_dir": 192,
//         "max_dhi": null,
//         "clouds_hi": 92,
//         "precip": 3.125,
//         "low_temp": 23.3,
//         "max_temp": 31.6,
//         "moonset_ts": 1594127928,
//         "datetime": "2020-07-07",
//         "temp": 26.7,
//         "min_temp": 22.6,
//         "clouds_mid": 13,
//         "clouds_low": 1
//     }, {
//         "moonrise_ts": 1594262398,
//         "wind_cdir": "SSE",
//         "rh": 69,
//         "pres": 999.357,
//         "high_temp": 33.3,
//         "sunset_ts": 1594254399,
//         "ozone": 287.361,
//         "moon_phase": 0.803239,
//         "wind_gust_spd": 6.40892,
//         "snow_depth": 0,
//         "clouds": 70,
//         "ts": 1594180860,
//         "sunrise_ts": 1594202593,
//         "app_min_temp": 24,
//         "wind_spd": 2.48388,
//         "pop": 45,
//         "wind_cdir_full": "south-southeast",
//         "slp": 1012.78,
//         "moon_phase_lunation": 0.6,
//         "valid_date": "2020-07-08",
//         "app_max_temp": 35.1,
//         "vis": 23.5864,
//         "dewpt": 20.9,
//         "snow": 0,
//         "uv": 5.64741,
//         "weather": {
//             "icon": "c03d",
//             "code": 803,
//             "description": "Broken clouds"
//         },
//         "wind_dir": 149,
//         "max_dhi": null,
//         "clouds_hi": 57,
//         "precip": 2.375,
//         "low_temp": 23,
//         "max_temp": 33.4,
//         "moonset_ts": 1594217882,
//         "datetime": "2020-07-08",
//         "temp": 27.7,
//         "min_temp": 23.3,
//         "clouds_mid": 42,
//         "clouds_low": 8
//     }, {
//         "moonrise_ts": 1594350869,
//         "wind_cdir": "NE",
//         "rh": 77,
//         "pres": 997.536,
//         "high_temp": 33.7,
//         "sunset_ts": 1594340779,
//         "ozone": 283.374,
//         "moon_phase": 0.716959,
//         "wind_gust_spd": 8.41333,
//         "snow_depth": 0,
//         "clouds": 43,
//         "ts": 1594267260,
//         "sunrise_ts": 1594289027,
//         "app_min_temp": 23.7,
//         "wind_spd": 3.17419,
//         "pop": 45,
//         "wind_cdir_full": "northeast",
//         "slp": 1010.91,
//         "moon_phase_lunation": 0.64,
//         "valid_date": "2020-07-09",
//         "app_max_temp": 35.5,
//         "vis": 23.8019,
//         "dewpt": 21.6,
//         "snow": 0,
//         "uv": 5.15778,
//         "weather": {
//             "icon": "c03d",
//             "code": 803,
//             "description": "Broken clouds"
//         },
//         "wind_dir": 54,
//         "max_dhi": null,
//         "clouds_hi": 19,
//         "precip": 2.25,
//         "low_temp": 23.3,
//         "max_temp": 33.4,
//         "moonset_ts": 1594307716,
//         "datetime": "2020-07-09",
//         "temp": 26.3,
//         "min_temp": 22.9,
//         "clouds_mid": 0,
//         "clouds_low": 30
//     }, {
//         "moonrise_ts": 1594439098,
//         "wind_cdir": "E",
//         "rh": 69,
//         "pres": 996.274,
//         "high_temp": 35.9,
//         "sunset_ts": 1594427159,
//         "ozone": 283.136,
//         "moon_phase": 0.623554,
//         "wind_gust_spd": 6.93615,
//         "snow_depth": 0,
//         "clouds": 52,
//         "ts": 1594353660,
//         "sunrise_ts": 1594375462,
//         "app_min_temp": 24.3,
//         "wind_spd": 3.10595,
//         "pop": 10,
//         "wind_cdir_full": "east",
//         "slp": 1009.59,
//         "moon_phase_lunation": 0.67,
//         "valid_date": "2020-07-10",
//         "app_max_temp": 36.7,
//         "vis": 24.135,
//         "dewpt": 21.6,
//         "snow": 0,
//         "uv": 4.64534,
//         "weather": {
//             "icon": "c03d",
//             "code": 803,
//             "description": "Broken clouds"
//         },
//         "wind_dir": 82,
//         "max_dhi": null,
//         "clouds_hi": 26,
//         "precip": 0.375,
//         "low_temp": 24.9,
//         "max_temp": 34,
//         "moonset_ts": 1594397459,
//         "datetime": "2020-07-10",
//         "temp": 28.3,
//         "min_temp": 23.1,
//         "clouds_mid": 0,
//         "clouds_low": 44
//     }, {
//         "moonrise_ts": 1594440770,
//         "wind_cdir": "NW",
//         "rh": 56,
//         "pres": 995.431,
//         "high_temp": 39.2,
//         "sunset_ts": 1594513536,
//         "ozone": 286.83,
//         "moon_phase": 0.526269,
//         "wind_gust_spd": 7.56217,
//         "snow_depth": 0,
//         "clouds": 21,
//         "ts": 1594440060,
//         "sunrise_ts": 1594461898,
//         "app_min_temp": 25.6,
//         "wind_spd": 2.78426,
//         "pop": 15,
//         "wind_cdir_full": "northwest",
//         "slp": 1008.69,
//         "moon_phase_lunation": 0.71,
//         "valid_date": "2020-07-11",
//         "app_max_temp": 37,
//         "vis": 24.1324,
//         "dewpt": 19.8,
//         "snow": 0,
//         "uv": 10.5045,
//         "weather": {
//             "icon": "c02d",
//             "code": 802,
//             "description": "Scattered clouds"
//         },
//         "wind_dir": 308,
//         "max_dhi": null,
//         "clouds_hi": 9,
//         "precip": 0.4375,
//         "low_temp": 26.2,
//         "max_temp": 36.2,
//         "moonset_ts": 1594487157,
//         "datetime": "2020-07-11",
//         "temp": 30.4,
//         "min_temp": 24.6,
//         "clouds_mid": 0,
//         "clouds_low": 11
//     }, {
//         "moonrise_ts": 1594528762,
//         "wind_cdir": "SE",
//         "rh": 44,
//         "pres": 998.241,
//         "high_temp": 39.9,
//         "sunset_ts": 1594599912,
//         "ozone": 294.95,
//         "moon_phase": 0.428053,
//         "wind_gust_spd": 4.40106,
//         "snow_depth": 0,
//         "clouds": 24,
//         "ts": 1594526460,
//         "sunrise_ts": 1594548334,
//         "app_min_temp": 26.4,
//         "wind_spd": 1.67299,
//         "pop": 20,
//         "wind_cdir_full": "southeast",
//         "slp": 1011.45,
//         "moon_phase_lunation": 0.74,
//         "valid_date": "2020-07-12",
//         "app_max_temp": 40.2,
//         "vis": 24.135,
//         "dewpt": 17.5,
//         "snow": 0,
//         "uv": 9.17175,
//         "weather": {
//             "icon": "c02d",
//             "code": 802,
//             "description": "Scattered clouds"
//         },
//         "wind_dir": 129,
//         "max_dhi": null,
//         "clouds_hi": 11,
//         "precip": 0.125,
//         "low_temp": 26.6,
//         "max_temp": 39.8,
//         "moonset_ts": 1594576864,
//         "datetime": "2020-07-12",
//         "temp": 31.8,
//         "min_temp": 25.3,
//         "clouds_mid": 0,
//         "clouds_low": 12
//     }, {
//         "moonrise_ts": 1594616745,
//         "wind_cdir": "SW",
//         "rh": 53,
//         "pres": 1001.57,
//         "high_temp": 36.4,
//         "sunset_ts": 1594686286,
//         "ozone": 299.677,
//         "moon_phase": 0.331802,
//         "wind_gust_spd": 9.22157,
//         "snow_depth": 0,
//         "clouds": 30,
//         "ts": 1594612860,
//         "sunrise_ts": 1594634771,
//         "app_min_temp": 27,
//         "wind_spd": 2.41462,
//         "pop": 0,
//         "wind_cdir_full": "southwest",
//         "slp": 1015,
//         "moon_phase_lunation": 0.77,
//         "valid_date": "2020-07-13",
//         "app_max_temp": 42.5,
//         "vis": 24.135,
//         "dewpt": 20,
//         "snow": 0,
//         "uv": 10.4468,
//         "weather": {
//             "icon": "c02d",
//             "code": 802,
//             "description": "Scattered clouds"
//         },
//         "wind_dir": 219,
//         "max_dhi": null,
//         "clouds_hi": 0,
//         "precip": 0,
//         "low_temp": 25.3,
//         "max_temp": 40,
//         "moonset_ts": 1594666626,
//         "datetime": "2020-07-13",
//         "temp": 31.5,
//         "min_temp": 25.9,
//         "clouds_mid": 0,
//         "clouds_low": 30
//     }, {
//         "moonrise_ts": 1594704790,
//         "wind_cdir": "SSW",
//         "rh": 59,
//         "pres": 1004.28,
//         "high_temp": 35.7,
//         "sunset_ts": 1594772659,
//         "ozone": 311.491,
//         "moon_phase": 0.240667,
//         "wind_gust_spd": 7.00642,
//         "snow_depth": 0,
//         "clouds": 1,
//         "ts": 1594699260,
//         "sunrise_ts": 1594721209,
//         "app_min_temp": 25.9,
//         "wind_spd": 2.2847,
//         "pop": 0,
//         "wind_cdir_full": "south-southwest",
//         "slp": 1017.67,
//         "moon_phase_lunation": 0.81,
//         "valid_date": "2020-07-14",
//         "app_max_temp": 37.5,
//         "vis": 24.1351,
//         "dewpt": 20.2,
//         "snow": 0,
//         "uv": 10.2516,
//         "weather": {
//             "icon": "c01d",
//             "code": 800,
//             "description": "Clear Sky"
//         },
//         "wind_dir": 199,
//         "max_dhi": null,
//         "clouds_hi": 0,
//         "precip": 0,
//         "low_temp": 24.4,
//         "max_temp": 36.6,
//         "moonset_ts": 1594756480,
//         "datetime": "2020-07-14",
//         "temp": 29.9,
//         "min_temp": 24.8,
//         "clouds_mid": 0,
//         "clouds_low": 1
//     }, {
//         "moonrise_ts": 1594792969,
//         "wind_cdir": "SW",
//         "rh": 56,
//         "pres": 1002.6,
//         "high_temp": 31.1,
//         "sunset_ts": 1594859030,
//         "ozone": 321.783,
//         "moon_phase": 0.158281,
//         "wind_gust_spd": 8.31448,
//         "snow_depth": 0,
//         "clouds": 0,
//         "ts": 1594785660,
//         "sunrise_ts": 1594807648,
//         "app_min_temp": 25.9,
//         "wind_spd": 3.51557,
//         "pop": 0,
//         "wind_cdir_full": "southwest",
//         "slp": 1016.01,
//         "moon_phase_lunation": 0.84,
//         "valid_date": "2020-07-15",
//         "app_max_temp": 38.5,
//         "vis": 24.1352,
//         "dewpt": 20,
//         "snow": 0,
//         "uv": 10.3707,
//         "weather": {
//             "icon": "c01d",
//             "code": 800,
//             "description": "Clear Sky"
//         },
//         "wind_dir": 221,
//         "max_dhi": null,
//         "clouds_hi": 0,
//         "precip": 0,
//         "low_temp": 24.6,
//         "max_temp": 36.5,
//         "moonset_ts": 1594846427,
//         "datetime": "2020-07-15",
//         "temp": 30.9,
//         "min_temp": 24.4,
//         "clouds_mid": 0,
//         "clouds_low": 0
//     }, {
//         "moonrise_ts": 1594881365,
//         "wind_cdir": "SW",
//         "rh": 61,
//         "pres": 1004.12,
//         "high_temp": 35.3,
//         "sunset_ts": 1594945399,
//         "ozone": 297.546,
//         "moon_phase": 0.0888356,
//         "wind_gust_spd": 10.1156,
//         "snow_depth": 0,
//         "clouds": 32,
//         "ts": 1594872060,
//         "sunrise_ts": 1594894087,
//         "app_min_temp": 25,
//         "wind_spd": 3.52375,
//         "pop": 35,
//         "wind_cdir_full": "southwest",
//         "slp": 1017.36,
//         "moon_phase_lunation": 0.88,
//         "valid_date": "2020-07-16",
//         "app_max_temp": 38.3,
//         "vis": 24.135,
//         "dewpt": 20.5,
//         "snow": 0,
//         "uv": 5.96542,
//         "weather": {
//             "icon": "c02d",
//             "code": 802,
//             "description": "Scattered clouds"
//         },
//         "wind_dir": 222,
//         "max_dhi": null,
//         "clouds_hi": 32,
//         "precip": 1.5,
//         "low_temp": 24.7,
//         "max_temp": 35.7,
//         "moonset_ts": 1594936429,
//         "datetime": "2020-07-16",
//         "temp": 30,
//         "min_temp": 24.4,
//         "clouds_mid": 0,
//         "clouds_low": 0
//     }, {
//         "moonrise_ts": 1594970066,
//         "wind_cdir": "SSW",
//         "rh": 58,
//         "pres": 1006.05,
//         "high_temp": 29.4,
//         "sunset_ts": 1595031767,
//         "ozone": 290.226,
//         "moon_phase": 0.0368658,
//         "wind_gust_spd": 7.81507,
//         "snow_depth": 0,
//         "clouds": 70,
//         "ts": 1594958460,
//         "sunrise_ts": 1594980527,
//         "app_min_temp": 26.4,
//         "wind_spd": 3.47551,
//         "pop": 20,
//         "wind_cdir_full": "south-southwest",
//         "slp": 1019.45,
//         "moon_phase_lunation": 0.91,
//         "valid_date": "2020-07-17",
//         "app_max_temp": 37.7,
//         "vis": 24.1352,
//         "dewpt": 20.4,
//         "snow": 0,
//         "uv": 4.0872,
//         "weather": {
//             "icon": "c04d",
//             "code": 804,
//             "description": "Overcast clouds"
//         },
//         "wind_dir": 211,
//         "max_dhi": null,
//         "clouds_hi": 28,
//         "precip": 0.1875,
//         "low_temp": 24.8,
//         "max_temp": 35.3,
//         "moonset_ts": 1595026390,
//         "datetime": "2020-07-17",
//         "temp": 30.5,
//         "min_temp": 24.8,
//         "clouds_mid": 62,
//         "clouds_low": 0
//     }, {
//         "moonrise_ts": 1595059153,
//         "wind_cdir": "SW",
//         "rh": 63,
//         "pres": 1005.27,
//         "high_temp": 31.2,
//         "sunset_ts": 1595118133,
//         "ozone": 287.936,
//         "moon_phase": 0.00671176,
//         "wind_gust_spd": 4.02678,
//         "snow_depth": 0,
//         "clouds": 91,
//         "ts": 1595044860,
//         "sunrise_ts": 1595066968,
//         "app_min_temp": 25.5,
//         "wind_spd": 2.40905,
//         "pop": 0,
//         "wind_cdir_full": "southwest",
//         "slp": 1018.45,
//         "moon_phase_lunation": 0.94,
//         "valid_date": "2020-07-18",
//         "app_max_temp": 33.5,
//         "vis": 24.135,
//         "dewpt": 20.2,
//         "snow": 0,
//         "uv": 3.43916,
//         "weather": {
//             "icon": "c04d",
//             "code": 804,
//             "description": "Overcast clouds"
//         },
//         "wind_dir": 231,
//         "max_dhi": null,
//         "clouds_hi": 42,
//         "precip": 0,
//         "low_temp": 24.2,
//         "max_temp": 31.2,
//         "moonset_ts": 1595116186,
//         "datetime": "2020-07-18",
//         "temp": 28.1,
//         "min_temp": 24.2,
//         "clouds_mid": 62,
//         "clouds_low": 0
//     }, {
//         "moonrise_ts": 1595148680,
//         "wind_cdir": "SW",
//         "rh": 62,
//         "pres": 1003.89,
//         "high_temp": 35.2,
//         "sunset_ts": 1595204497,
//         "ozone": 284.437,
//         "moon_phase": 0.00178147,
//         "wind_gust_spd": 8.01799,
//         "snow_depth": 0,
//         "clouds": 22,
//         "ts": 1595131260,
//         "sunrise_ts": 1595153409,
//         "app_min_temp": 25.2,
//         "wind_spd": 3.28658,
//         "pop": 25,
//         "wind_cdir_full": "southwest",
//         "slp": 1017.33,
//         "moon_phase_lunation": 0.98,
//         "valid_date": "2020-07-19",
//         "app_max_temp": 37.9,
//         "vis": 24.1349,
//         "dewpt": 20.7,
//         "snow": 0,
//         "uv": 9.24012,
//         "weather": {
//             "icon": "c02d",
//             "code": 802,
//             "description": "Scattered clouds"
//         },
//         "wind_dir": 225,
//         "max_dhi": null,
//         "clouds_hi": 22,
//         "precip": 1,
//         "low_temp": 24.4,
//         "max_temp": 35.3,
//         "moonset_ts": 1595205704,
//         "datetime": "2020-07-19",
//         "temp": 29.9,
//         "min_temp": 24.4,
//         "clouds_mid": 0,
//         "clouds_low": 0
//     }, {
//         "moonrise_ts": 1595238635,
//         "wind_cdir": "SW",
//         "rh": 76,
//         "pres": 1006.61,
//         "high_temp": 30.3,
//         "sunset_ts": 1595290860,
//         "ozone": 289.434,
//         "moon_phase": 0.0238637,
//         "wind_gust_spd": 6.30647,
//         "snow_depth": 0,
//         "clouds": 89,
//         "ts": 1595217660,
//         "sunrise_ts": 1595239850,
//         "app_min_temp": 25.4,
//         "wind_spd": 2.33482,
//         "pop": 85,
//         "wind_cdir_full": "southwest",
//         "slp": 1019.89,
//         "moon_phase_lunation": 0.01,
//         "valid_date": "2020-07-20",
//         "app_max_temp": 32.8,
//         "vis": 24.1291,
//         "dewpt": 22.1,
//         "snow": 0,
//         "uv": 3.20923,
//         "weather": {
//             "icon": "r02d",
//             "code": 501,
//             "description": "Moderate rain"
//         },
//         "wind_dir": 214,
//         "max_dhi": null,
//         "clouds_hi": 89,
//         "precip": 14.875,
//         "low_temp": 25.1,
//         "max_temp": 30.3,
//         "moonset_ts": 1595294888,
//         "datetime": "2020-07-20",
//         "temp": 27,
//         "min_temp": 24.7,
//         "clouds_mid": 56,
//         "clouds_low": 0
//     }],
//     "city_name": "Raleigh",
//     "lon": "-78.63861",
//     "timezone": "America\/New_York",
//     "lat": "35.7721",
//     "country_code": "US",
//     "state_code": "NC"
// }