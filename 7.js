//Chunk object entries into groups of size

let obj = { a:1, b:2, c:3, d:4 };
let size = 2;

let result = [];

let entries = Object.entries(obj);

// console.log(entries);

for(let i=0; i<entries.length; i+=size) {
    result.push(entries.slice(i, i+size));
}

console.log(result);

