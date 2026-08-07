/*
An object is a data type that stores related data as key-value pairs.
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