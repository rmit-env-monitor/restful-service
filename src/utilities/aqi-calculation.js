module.exports = {
    calculatePM25,
    calculateCO,
    calculateNO2,
    calculateO3,
    calculatePM10,
    calculateSO2,
    getMaxAQIName
}

function calculatePM25(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 12) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 12
        brpt_low = 0
    } else if (cctt >= 12.1 && cctt <= 35.4) {
        AQI_high = 100
        AQI_low = 50
        brpt_high = 35.4
        brpt_low = 12.1
    } else if (cctt >= 35.5 && cctt <= 55.4) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 55.4
        brpt_low = 35.5
    } else if (cctt >= 55.5 && cctt <= 150.4) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 150.4
        brpt_low = 55.5
    } else if (cctt >= 150.5 && cctt <= 250.4) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 250.4
        brpt_low = 150.5
    } else if (cctt >= 250.5 && cctt <= 350.4) {
        AQI_high = 400
        AQI_low = 301
        brpt_high = 350.4
        brpt_low = 250.5
    } else {
        AQI_high = 500
        AQI_low = 401
        brpt_high = 500.4
        brpt_low = 350.5
    }

    return calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt)
}

function calculateCO(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 4.4) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 4.4
        brpt_low = 0
    } else if (cctt >= 4.5 && cctt <= 9.4) {
        AQI_high = 100
        AQI_low = 50
        brpt_high = 9.4
        brpt_low = 4.5
    } else if (cctt >= 9.5 && cctt <= 12.4) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 12.4
        brpt_low = 9.5
    } else if (cctt >= 12.5 && cctt <= 15.4) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 15.4
        brpt_low = 12.5
    } else if (cctt >= 15.5 && cctt <= 30.4) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 30.4
        brpt_low = 15.5
    } else if (cctt >= 30.5 && cctt <= 40.4) {
        AQI_high = 400
        AQI_low = 301
        brpt_high = 40.4
        brpt_low = 30.5
    } else {
        AQI_high = 500
        AQI_low = 401
        brpt_high = 50.4
        brpt_low = 40.5
    }

    return calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt)
}

function calculateNO2(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 53) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 53
        brpt_low = 0
    } else if (cctt >= 54 && cctt <= 100) {
        AQI_high = 100
        AQI_low = 50
        brpt_high = 100
        brpt_low = 54
    } else if (cctt >= 101 && cctt <= 360) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 360
        brpt_low = 101
    } else if (cctt >= 361 && cctt <= 649) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 649
        brpt_low = 361
    } else if (cctt >= 650 && cctt <= 1249) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 1249
        brpt_low = 650
    } else if (cctt >= 1250 && cctt <= 1649) {
        AQI_high = 400
        AQI_low = 301
        brpt_high = 1649
        brpt_low = 1250
    } else {
        AQI_high = 500
        AQI_low = 401
        brpt_high = 2049
        brpt_low = 1650
    }

    return calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt)
}

function calculateO3(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 0.054) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 0.054
        brpt_low = 0
    } else if (cctt >= 0.055 && cctt <= 0.070) {
        AQI_high = 100
        AQI_low = 51
        brpt_high = 0.07
        brpt_low = 0.055
    } else if (cctt >= 0.071 && cctt <= 0.085) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 0.085
        brpt_low = 0.071
    } else if (cctt >= 0.086 && cctt <= 0.105) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 0.105
        brpt_low = 0.086
    } else {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 0.2
        brpt_low = 0.106
    }

    return calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt)
}

function calculatePM10(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 54) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 54
        brpt_low = 0
    } else if (cctt >= 55 && cctt <= 154) {
        AQI_high = 100
        AQI_low = 50
        brpt_high = 154
        brpt_low = 55
    } else if (cctt >= 155 && cctt <= 254) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 254
        brpt_low = 155
    } else if (cctt >= 255 && cctt <= 354) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 354
        brpt_low = 255
    } else if (cctt >= 355 && cctt <= 424) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 424
        brpt_low = 355
    } else if (cctt >= 425 && cctt <= 504) {
        AQI_high = 400
        AQI_low = 301
        brpt_high = 504
        brpt_low = 425
    } else {
        AQI_high = 500
        AQI_low = 401
        brpt_high = 604
        brpt_low = 505
    }

    return calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt)
}

function calculateSO2(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 35) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 35
        brpt_low = 0
    } else if (cctt >= 36 && cctt <= 75) {
        AQI_high = 100
        AQI_low = 50
        brpt_high = 75
        brpt_low = 36
    } else if (cctt >= 76 && cctt <= 185) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 185
        brpt_low = 76
    } else if (cctt >= 186 && cctt <= 304) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 304
        brpt_low = 186
    } else if (cctt >= 305 && cctt <= 604) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 604
        brpt_low = 305
    } else if (cctt >= 605 && cctt <= 804) {
        AQI_high = 400
        AQI_low = 301
        brpt_high = 804
        brpt_low = 605
    } else {
        AQI_high = 500
        AQI_low = 401
        brpt_high = 1004
        brpt_low = 805
    }

    return calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt)
}

function calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt) {
    const AQI_up = AQI_high - AQI_low
    const brpt_down = brpt_high - brpt_low
    const result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low
    return Math.round(result)
}

function getMaxAQIName(maxAQI, aqiValues) {
    const sensorIndex = aqiValues.indexOf(maxAQI)
    if (sensorIndex === 0)
        return 'CO'
    else if (sensorIndex === 1)
        return 'NO2'
    else if (sensorIndex === 2)
        return 'O3'
    else
        return 'PM2.5'
}