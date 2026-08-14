// Transform API response to object (id->name)

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
]

let obj = {};

for(let i=0; i<users.length; i++) {
    // console.log(users[i].id);
    // console.log(users[i].name);
    obj[users[i].id] = users[i].name;
}

console.log(obj);