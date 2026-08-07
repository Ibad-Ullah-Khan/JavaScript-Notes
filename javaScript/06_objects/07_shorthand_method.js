/*
Shorthand Method:
A shorthand method is a shorter way to define a function inside an object.
*/

// Without shorthand
const studentt = {
    name: "Ibad",

    greet: function () {
        console.log("Hello!");
    }
};

// Shorthand method
const student = {
    name: "Ibad",

    greet() {
        console.log("Hello!");
    }
};
student.greet();