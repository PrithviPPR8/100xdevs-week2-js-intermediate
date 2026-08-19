// Build index of ids grouped by category

let arr = [
    { id: 1, category: "fruit" },
    { id: 2, category: "veggie" },
    { id: 3, category: "fruit" }
]

let result = {};


for(let i=0; i<arr.length; i++) {
    // console.log(arr[i]);
    // console.log(arr[i].category);
    // console.log(arr[i].id);
    if(!result[arr[i].category]) {
        result[arr[i].category] = [];
    }

    result[arr[i].category].push(arr[i].id);
}

console.log(result);