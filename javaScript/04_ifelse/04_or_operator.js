/*
The OR operator (||) returns the first truthy value. If none are truthy, it returns the last value.
Syntax
value1 || value2
If value1 is truthy, return value1.
Otherwise, return value2.
*/
let username = "";
let name = username || "Guest";
console.log(name);