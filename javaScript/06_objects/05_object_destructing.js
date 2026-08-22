/*
Object Destructuring
Destructuring: taking values from an object and storing them directly in variables.
*/

// Without destructing
const student = {
    name: "Ibad",
    age: 21,
    city: "Mardan"
};

const namee = student.name;
const agee = student.age;
const cityy = student.city;

console.log(name);
console.log(age);
console.log(city);

// With destructing

const studentt = {
    name: "Ibad",
    age: 21,
    city: "Mardan"
};

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);