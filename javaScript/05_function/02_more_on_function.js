function addCartPrice(...num1){ // Rest operator

    return num1
}
console.log(addCartPrice(100,200, 300))

// More

function cartPrice(val1, val2, ...num1){

    return num1
}

console.log(cartPrice(199, 999, 299, 300))

// Passing Objects

const user = {
    name: 'Ibad Ullah Khan',
    age: 22

}

function handleObject(anyObject){
    console.log(`User Name: ${anyObject.name} and its age is ${anyObject.age}`)
}
handleObject(user)

// Passing Arrays

const arr = [1,2,3,4,5,6]
function getArray(arr){
    return arr[1]
}
console.log(getArray(arr))
