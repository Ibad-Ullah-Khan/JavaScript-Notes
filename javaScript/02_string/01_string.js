/*
There are three ways to create a string,
1: Using single qoutes(recommended)
2: Using double qoutes
3: Using backticks(`)
*/

/*
There are two ways to work with string and numbers
*/

/*
1: Concatenation means joining two or more strings together.
*/

price = 'items('+(1+1)+') price: $' + (2894 + 289)/100
console.log(price)

/*
2): Interpolation: inserting variables or expressions into a string.(Recommended)
In JavaScript, interpolation is done using template literals (backticks `) and ${}.
*/

price = `items(${1+1}) price: $${(2894 + 289)/100}`
console.log(price)