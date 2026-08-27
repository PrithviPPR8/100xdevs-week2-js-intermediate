// Sort array of objects by name and then age

const arr = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 22 }
]

const result = arr.sort((a,b) => {
    const nameComparison = a.name.localeCompare(b.name);

    if(nameComparison !== 0) {
        return nameComparison;
    }

    return a.age - b.age;
})

console.log(result);