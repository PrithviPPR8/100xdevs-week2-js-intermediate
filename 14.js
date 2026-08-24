//Find intersection of all arrays in object

let obj = {
    a: [1,2,3],
    b: [2,3,4],
    c: [3,4,5]
}

const arrays = Object.values(obj);

// console.log(arrays);

const result = arrays[0].filter(num => {
    return arrays.every(arr => arr.includes(num));
});

console.log(result);