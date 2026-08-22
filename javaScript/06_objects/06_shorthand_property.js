/*
Shorthand property is a shorter way to write an object property when the property name and variable name are the same.
*/

// Without shorthand property

const name = "Ibad";
const age = 21;

const student = {
    name: name,
    age: age
};

console.log(student);

// with shorthand property

const namee = "Ibad";
const agee = 21;

const studentt = {
    namee,
    agee
};

console.log(studentt);