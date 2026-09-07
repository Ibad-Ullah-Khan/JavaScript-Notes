/*
IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs immediately after it is created.
Instead of writing a function and calling it later, you define it and execute it at the same time.
*/
(function (){
    console.log('Hello my name is Ibad')
})(); // If you did't put the semicolon(;) it will show you the error for arrow function

// IIFE as arrow function

( () => {
    console.log('My age is 21')
})();

// Writing named IIFE

(function greeting(){
    console.log('Hello')
})();

// passing parameters

let uni = 'AWKUM';
(function myUni(uni){
    console.log(`My uni is ${uni}`)
})(uni);