// 1. Get the current date and time
const naw = new Date();
console.log(naw);

// 2. Get specific part
const now = new Date();

console.log(now.getFullYear()); // 2026
console.log(now.getMonth());    // 8
console.log(now.getDate());     // 2
console.log(now.getDay());      // 3
console.log(now.getHours());    // 21
console.log(now.getMinutes());  // 30
console.log(now.getSeconds());  // 0

// 3. Create Date
const date = new Date(2026, 8, 3);
console.log(date);