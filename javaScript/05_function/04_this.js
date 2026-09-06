// this is a keyword that refers to the object that is currently executing the code.
// It's refering to the current context

const student = {
    name: "Ibad",
    age: 21,

    greet() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.greet();

// We cannot use this in simple function, it will give us error
