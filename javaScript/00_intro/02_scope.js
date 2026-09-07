/*
Scope:
Scope determines where a variable can be accessed in your code.

There are 3 main types of scope.
*/

/*
1. Global Scope

A variable declared outside any function or block is in the global scope.
*/

let name = "Ibad";
function greet() {
    console.log(name);
}

greet();
console.log(name);

/*
2. Block Scope

A variable declared with let or const inside {} is only available inside that block.
*/

let a = 300;
function num(num1){
    let a = 10;
    console.log('Inner: ',a)
}
num()
console.log('Outer: ',a)

/*
3. Function Scope

A variable declared inside a function can only be used inside that function.
*/

function greet() {
    let message = "Hello";

    console.log(message);
}

greet();

// console.log(message);  Error