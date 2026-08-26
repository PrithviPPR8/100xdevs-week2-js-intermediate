// Nested object destructuring

let obj = { user: { profile: { name: "Alice", age: 25 }}};

const {
    user: {
        profile: {
            name,
            age
        }
    }
} = obj;

console.log(name, age);



