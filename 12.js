//Deep flatten nested arrays inside object

let obj = {
    a: [1, [2, [3]]], b: [4, [5]]
}

let result = {};

for(let key in obj) {
    result[key] = obj[key].flat(Infinity);
}

console.log(result);