// Remove duplicate objects by id

let arr = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" },
]

let result = [];
let ids = [];

for(let obj of arr) {         //note that it's obj of, not obj in. obj of gives value, obj in gives index
    // console.log(obj);
    // console.log(obj.id);
    if(!ids.includes(obj.id)) {
        result.push(obj);
        ids.push(obj.id);
    }
}

console.log(result);