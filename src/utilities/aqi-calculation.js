module.exports = {
    calculatePM25,
    calculateCO,
    calculateNO2,
    calculateO3
}

function calculatePM25(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 12) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 12.0
        brpt_low = 0.0
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
        brpt_high = 12.0
        brpt_low = 0.0
    } else if (cctt >= 4.5 && cctt <= 9.4) {
        AQI_high = 100
        AQI_low = 50
        brpt_high = 35.4
        brpt_low = 12.1
    } else if (cctt >= 9.5 && cctt <= 12.4) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 55.4
        brpt_low = 35.5
    } else if (cctt >= 12.5 && cctt <= 15.4) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 150.4
        brpt_low = 55.5
    } else if (cctt >= 15.5 && cctt <= 30.4) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 250.4
        brpt_low = 150.5
    } else if (cctt >= 30.5 && cctt <= 40.4) {
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

function calculateNO2(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 53) {
        AQI_high = 50
        AQI_low = 0
        brpt_high = 12.0
        brpt_low = 0.0
    } else if (cctt >= 54 && cctt <= 100) {
        AQI_high = 100
        AQI_low = 50
        brpt_high = 35.4
        brpt_low = 12.1
    } else if (cctt >= 101 && cctt <= 360) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 55.4
        brpt_low = 35.5
    } else if (cctt >= 361 && cctt <= 649) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 150.4
        brpt_low = 55.5
    } else if (cctt >= 650 && cctt <= 1249) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 250.4
        brpt_low = 150.5
    } else if (cctt >= 1250 && cctt <= 1649) {
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

function calculateO3(cctt) {
    let AQI_high = 0
    let AQI_low = 0
    let brpt_high = 0
    let brpt_low = 0

    if (cctt >= 0 && cctt <= 0.054) {
        AQI_high = 150
        AQI_low = 101
        brpt_high = 55.4
        brpt_low = 35.5
    } else if (cctt >= 0.055 && cctt <= 0.070) {
        AQI_high = 200
        AQI_low = 151
        brpt_high = 150.4
        brpt_low = 55.5
    } else if (cctt >= 0.071 && cctt <= 0.085) {
        AQI_high = 300
        AQI_low = 201
        brpt_high = 250.4
        brpt_low = 150.5
    } else if (cctt >= 0.086 && cctt <= 0.105) {
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

function calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt) {
    const AQI_up = AQI_high - AQI_low
    const brpt_down = brpt_high - brpt_low
    const result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low
    return Math.round(result)
}