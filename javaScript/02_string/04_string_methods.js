// 1: lenght: To find the length of the string

let myName = 'Ibad Ullah Khan'
console.log(myName.length)

// 2: toUpperCase: To convert all the text into uppercase

console.log(myName.toUpperCase())

// 3: toLowerCase: To convert all the text into lowercase

console.log(myName.toLowerCase())

// 4: charAt() is a String method used to get the character at a specific index (position) in a string.

console.log(myName.charAt(3))

// 5: indexOf() is a String method used to find the position (index) of the first occurrence of a character or substring.
console.log(myName.indexOf('U'))

// substring(): Use for slicing
console.log(myName.substring(0,4))

// slice(): Use for negative slicing
console.log(myName.slice(-10, -4))

//trim(): Use to remove extra white spaces at the begining and end
console.log('      Ibad   Khan    '.trim())

// replace(): Use to replace it will new value
console.log(myName.replace('Ibad', '-'))

// includes() is a String method used to check whether a string contains a specific character or substring.
console.log(myName.includes('Ullah'))

// split() is a String method that splits a string into an array.
console.log(myName.split(' '))