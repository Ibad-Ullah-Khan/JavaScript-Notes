/*
console.log() is used to display output in the browser's console.
*/

console.log("Hello World");

/*
Variables = Data Containers
JavaScript variables are containers for data.
*/

// Variable Decleration

/*
1: var: Can be decleared and updated, Global scope
*/

var age = 21;
var age = 22;
console.log(age);

/*
2: let: cannot be redecleared, but can be updated, block scope
*/

let name = "ibad";
name = "ibad ullah khan";
console.log("Name: ",name);

/*
Not Possible: 

let name = "ibad"
let name = "ibad ullah khan"
console.log("Name: ",name) --> It will give error b/c redecleration is not allowed
*/

/*
3: const: Cannot be redecleared or updated, block scope variable
*/

const pi = 3.14;
console.log(pi);

/*
Not Possible: 

const pi = 3.14;
pi = 6.28;
console.log(pi) It will give error b/c redecleration or update is not allowed
*/

/*
typeof:  is a JavaScript operator used to find the data type of a value or variable.
*/

fullName = "ibad Ullah Khan";
console.log(typeof fullName)


/*
undefined:

A variable has been declared, but no value has been assigned to it yet.
*/

let university;
console.log(university,"\nType: ",typeof university);


/*
null:

The programmer intentionally assigned "no value".
*/

let job = null
console.log(job,"\nType: ",typeof job)

/*
Primitive Data Types

Primitive data types store a single simple value.
call by value
Stack memory

String
Number
Boolean
Undefined
Null
BigInt
Symbol
*/

/*
Non-Primitive Data Types(Reference)

Non-primitive data types can store multiple values or more complex data.
Arrays and functions are special kinds of objects.
Heap Memory
*/

// Object
const student = {
    Name : "ibad",
    Age : 22,
    cgpa : 3.52,
    isPass: ture
}

console.log(student, typeof student)
