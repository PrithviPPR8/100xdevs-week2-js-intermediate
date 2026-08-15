// Check for permissions from roles

let roles = {
    admin: ["read", "write"],
    user: ["read"],
    staff: ["write"]
}

let checkRole = "user";
let action = "write";

// console.log(checkRole);

// for(key in roles) {
//     if(key === checkRole) {
//         if(roles[key].includes(action)) {
//             console.log(true);
//         }
//         else {
//             console.log(false);
//         }
//     }
// }

// if(roles[checkRole].includes(action)) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

console.log(roles[checkRole].includes(action));