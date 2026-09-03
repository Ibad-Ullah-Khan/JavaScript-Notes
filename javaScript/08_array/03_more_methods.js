// push one array into other
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
array1.push(array2);
console.log(array1);

// Accesing element
console.log(array1[3][1])

// concat() is an array method used to combine two or more arrays.
let array3 = [1, 2, 3];
let array4 = [4, 5, 6];
const newArray = array3.concat(array4);
console.log(newArray);

// lat() is an array method used to flatten nested arrays — in simple words, it removes one or more levels of nested arrays.

let numbers = [1, 2, [3, 4,[5, 6]], 7];
let result = numbers.flat(2);
console.log(result);

// Checking array and then converting into array
console.log(Array.isArray("IbadUllahKhan"))
console.log(Array.from("IbadUllahKhan"))

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3))