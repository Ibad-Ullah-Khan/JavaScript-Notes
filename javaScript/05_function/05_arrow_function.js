/*
Arrow Function (=>)

An arrow function is a shorter way to write a function in JavaScript.
*/

const intro = () => {
    let name = 'Ibad'
    console.log(name)
}

intro()

// Implicet return 

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(10, 5))