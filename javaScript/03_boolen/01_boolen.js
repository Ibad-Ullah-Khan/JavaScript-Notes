/*
A Boolean is a data type that can have only two values, true or false
*/

console.log(2>6)
console.log(2<6)

// ==
console.log(5 == '5.00')
/*
== operator is called the loose equality operator.
Before comparing, JavaScript automatically converts the string '5.00' into the number 5.
it look liske 5 ==5 which is ture
== → Compares value only (performs type conversion if needed).
*/

console.log(5 === '5.00')
/*
=== → Compares value and data type (no type conversion).
*/