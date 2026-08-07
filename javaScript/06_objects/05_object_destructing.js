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

const name = student.name;
const age = student.age;
const city = student.city;

console.log(name);
console.log(age);
console.log(city);

// With destructing

const student = {
    name: "Ibad",
    age: 21,
    city: "Mardan"
};

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);