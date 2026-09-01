/*
Type Conversion) means changing a value from one data type to another.
*/

//1. String → Number

let age = '22';
let ageNumber = Number(age)

console.log(typeof(age))
console.log(typeof(ageNumber))

//2. Number → String

let date = 21;
let stringdate = String(date);

console.log(typeof(date));
console.log(typeof(stringdate));

//3. Number → Boolean

console.log(Boolean(1));
console.log(Boolean(0));

//4. String → Boolean

console.log(Boolean("Hello"));
console.log(Boolean(""));

//5. Boolean → Number

console.log(Number(true));
console.log(Number(false));

//6. Boolean → String

console.log(String(true));
console.log(String(false));

// Conversion of '33abc' into number => NaN but type will be number


