// Deep merge two nested objects

function deepMerge(obj1, obj2) {
    let result = {};

    // Copy obj1
    for(let key in obj1) {
        result[key] = obj1[key];
    }

    // Merge obj2
    for(let key in obj2) {
        if(
            typeof result[key] === "object" &&
            typeof obj2[key] === "object"
        ) {
            result[key] = deepMerge(result[key], obj2[key]);
        } else {
            result[key] = obj2[key];
        }
    }

    return result;
}

let obj1 = { a: { x:1, y:2 }};
let obj2 = { a: { y:3, z:4 }};

console.log(deepMerge(obj1, obj2));