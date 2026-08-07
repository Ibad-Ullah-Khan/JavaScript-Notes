/*
Built-in objects are objects that JavaScript provides by default. You don't have to create them—they are already available.
We will learn two built-in objects
*/

/*
1: JSON 
stands for JavaScript Object Notation.
It is a text format(syntax) used to store and exchange data between applications.
It is same as oject but support duble qoutes and not support functions
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

// Let's convert it into JSON
console.log(JSON.stringify(student));

// Let's store it in variable
jason_object = JSON.stringify(student);

// The result it give is string
console.log(typeof jason_object);

// Converting back from JSON into object
console.log(JSON.parse(jason_object));

// Printing the type
console.log(typeof JSON.parse(jason_object))
