// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYenes= valueInDollar * 151.29;
    // Retornamos el valor en yenes
    return valueInYenes;
}
const fromYenToPound= function(valueInYenes) {
    // Convertimos el valor a  pound
    let valueInPounds= valueInYenes * 0.0053;
    // Retornamos el valor en pounds
    return valueInPounds;
}













module.exports = { sum, fromEuroToDollar , fromDollarToYen , fromYenToPound};

