/*
Hoisting is JavaScript's behavior of moving declarations to the top of their scope before the code runs.
*/

//Function
greet();

function greet() {
    console.log("Hello!");
}

/* 
It is treated like this:
function greet() {
    console.log("Hello!");
}

greet();
*/

// Expresstion

console.log(addTwo)
const addTwo = function(num1, num2){
    return num1 + num2
}

// Variable and expresstin can't be use like this