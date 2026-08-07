/*
localStorage:
localStorage is a built-in Web API object provided by the browser. It lets you store data in the browser so that it remains even after the page is refreshed or the browser is closed.
It stores data as key-value pairs, and both keys and values are stored as strings.
*/

const student = {
    name: "Ibad",
    age: 21
};

localStorage.setItem("student", JSON.stringify(student));

console.log("Data Stored!");