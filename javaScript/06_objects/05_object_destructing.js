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

console.log(namee);
console.log(agee);
console.log(cityy);

// With destructing

const studentt = {
    name: "Ibad",
    age: 21,
    city: "Mardan"
};

const { name: myNmae, age, city } = student;

console.log(myNmae);
console.log(age);
console.log(city);