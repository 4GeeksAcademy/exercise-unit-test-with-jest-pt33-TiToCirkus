let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

let oneDollarIs = {
    "JPY": 149.69, // japan yen
    "EURO": 0.92, // us dollar
    "GBP": 0.78, // british pound
};

let oneYenIs = {
    "EURO": 0.0062, // japan yen
    "USD": 0.0067, // us dollar
    "GBP": 0.0052, // british pound
};

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
};

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * oneDollarIs.JPY;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * oneYenIs.GBP;
    return valueInPound; 
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs, oneDollarIs, oneYenIs};