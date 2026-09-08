// for of loop

//Looping through array
const myArr = [1,22,33,44,55,66]
for (const num of myArr) {
    console.log(num)
}

//Looping through strings

const greeting = "hello everyone"
for (const char of greeting){
    console.log(char)
}

// printing in a single line

for (const char of greeting){
    process.stdout.write(char+' ');
};