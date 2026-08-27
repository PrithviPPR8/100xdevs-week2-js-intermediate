// Find top N keys by value

let obj = { a:10, b:50, c:30, d:40 };
const N=2;

const result = Object.entries(obj)
    .sort((a,b) => b[1] - a[1])
    .slice(0,N)
    .map((item) => item[0]);

console.log(result);