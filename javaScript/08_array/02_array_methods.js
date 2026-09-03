const myArray = [1,2,3,4,5]

// push() is an array method used to add one or more elements to the end of an array.
myArray.push(6)
console.log(myArray)

// pop() used to remove the last element of array
myArray.pop()
console.log(myArray)

// unshift() is an array method used to add one or more elements to the beginning of an array.
myArray.unshift(11)
console.log(myArray)

// shift() is an array method used to remove the first element from an array.
myArray.shift()
console.log(myArray)

// includes() is an array method used to check whether an array contains a specific element.
console.log(myArray.includes('ibad'))

// indexOf() is an array method used to find the index (position) of a specific element.
console.log(myArray.indexOf(3))

// join() is an array method used to combine all elements of an array into one string.
const newArray = myArray.join()
console.log(newArray, typeof(newArray))

//slice() is an array method used to extract a portion of an array without changing the original array.
const nA1 = myArray.slice(1,4) // mean include index 1 but not index 4
console.log(nA1)

//splice() is an array method used to add, remove, or replace elements in an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];
fruitesSlice = fruits.splice(0, 2);
console.log("Orignal Array become:", fruits);
console.log("Splice Array:", fruitesSlice)