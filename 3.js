// Remove falsy values from the object

let obj = {
    a: 0,
    b: null,
    c: "hello",
    d: undefined,
    e: 5
}

for(key in obj) {
    // console.log(key);
    // if(obj[key] === null || obj[key] === undefined || obj[key] === 0) {
    if(!obj[key]) {
        delete obj[key];
    }
}

console.log(obj);

//JavaScript has 6 falsy values - fale, 0, "", null, undefined, NAN