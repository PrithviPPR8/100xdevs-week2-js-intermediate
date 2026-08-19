// Remove deeply nested key from object

let obj = { a: { b: { c: 1, d: 2 } } };

// for(let key in obj) {    //This solution is correct for given input, but doesn't work for depth
//     // console.log(key);
//     // console.log(obj[key]);
//     for(innerKey in obj[key]) {
//         // console.log(innerKey);
//         // console.log(obj[key][innerKey]);
//         delete(obj[key][innerKey].c);
//     }
// }

// console.log(obj);

function removeKey(obj, keyToRemove) {
    for(let key in obj) {
        if(key === keyToRemove) {
            delete obj[key];
        } 
        else if(typeof obj[key] === "object") {
            removeKey(obj[key], keyToRemove);
        }
    }
}

removeKey(obj, "c");

console.log(obj);