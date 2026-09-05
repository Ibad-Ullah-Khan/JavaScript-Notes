/*
An object is a data type that stores related data as key-value pairs.
*/

// There are two methods to create objects

/*1: An object literal is a way to create an object by writing its properties and methods directly inside curly braces {}. It is the most common way to create objects in JavaScript.
*/
const student = {
    name : 'ibad',
    age : 21,
};

// Printing overall object
console.log(student);
// Accessing single element
console.log(student.name);
// Chaning the value
student.name = 'ibad ullah khan'
console.log(student.name)
// Adding value
student.class = 'Ai'
console.log(student)
// Deleting value
delete student.class
console.log(student)
// Other method to access the item
console.log(student['name'])
// Adding methods to dictionary
student.greeting = function(){
    console.log("Hello Everyone")
}
// Acessing functino

student.greeting()

// Printing all the keys.
console.log(Object.keys(student))
// Accessing all the values
console.log(Object.values(student))