/*
Nested Objects, Methods, and Properties
*/

const student = {
    name: "Ibad Khan",
    age: 21,
    university: "AWKUM",

    // Nested Object
    address: {
        city: "Mardan",
        country: "Pakistan"
    },

    // Method (Function)
    introduce: function () {
        console.log(`Hi, my name is ${this.name}.`);
    }
};

// Accessing properties
console.log(student.name);
console.log(student.age);

// Accessing nested object
console.log(student.address.city);
console.log(student.address.country);

// Calling the method
student.introduce();