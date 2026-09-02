const balance = 100

// toString() is a method used to convert a value into a string.
console.log(balance.toString())

// toFixed() is a JavaScript number method used to control how many digits appear after the decimal point.
console.log(balance.toFixed(2))

// toPrecision() is a JavaScript number method that controls the total number of significant digits in a number.
const data = 23.866
console.log(data.toPrecision(3))

// toLocaleString() is a JavaScript method used to format a number according to a country's/region's formatting style.
const hundred = 100000000000
console.log(hundred.toLocaleString())