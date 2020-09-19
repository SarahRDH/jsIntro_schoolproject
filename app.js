// The forcast in kelvin
const kelvin = 295;
//celsius converted from kelvin is C-273
const celsius = kelvin - 273;
//the fahrenheit conv calculation is below
let fahrenheit = celsius * (9 / 5) + 32;
//reassigning variable to round answer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
