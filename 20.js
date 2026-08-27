// Merge two objects (no sum, override second)
let obj1 = {a:10, b:20}
let obj2 = {a:5, c:15}

const result = {
    ...obj1,
    ...obj2
};

console.log(result);