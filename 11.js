//Check if objects are deeply equal

let obj1 = {a: { x:1, y:2 }};
let obj2 = {a: { x:1, y:2 }};

function deepEqual(obj1, obj2) {
    for(let key in obj1) {
        if(typeof obj1[key] === "object") {
            if(!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        else {
            if(obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }

    return true;
}

console.log(deepEqual(obj1, obj2));