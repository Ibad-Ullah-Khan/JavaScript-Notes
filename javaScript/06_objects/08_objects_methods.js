// Object.freeze() → locks an object so its properties cannot be changed, added, or deleted.

const student = {
    name: "Ibad Ullah Khan",
    age: 21,
    class: 'Ai'
}

Object.freeze(student)
student.age = 22
console.log(student)

// Object.assign() is used to copy properties from one or more objects into another object.

const obj1 = {a:1, b:2, c:3, d:4}
const obj2 = {e:5, f:6, g:7, h:8}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

// Second method of combining obje1 and obj2

const obj4 = {...obj1, ...obj2}
console.log(obj4)

// hasOwnProperty() checks whether an object directly contains a specific property
console.log(student.hasOwnProperty("name"));