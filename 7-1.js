// Find the longest string among object values

let obj = { a: "apple", b: "banana", c: "kiwi" };

// for(const [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
// }

let longestString = "";
let lengthOfLongestString = 0;

for(const [key, value] of Object.entries(obj)) {
    // console.log(`${key}: ${value}`);
    if(value.length > lengthOfLongestString) {
        lengthOfLongestString = value.length;
        longestString = value;
    }
}

console.log(lengthOfLongestString);
console.log(longestString);


// let obj = { a: "apple", b: "banana", c: "kiwi" };

// let longestStringObj = {};
// let lengthOfLongestString = 0;

// for (const [key, value] of Object.entries(obj)) {
//     if (value.length > lengthOfLongestString) {
//         lengthOfLongestString = value.length;
//         longestStringObj = { [key]: value };
//     }
// }

// console.log(longestStringObj);
// console.log(Object.values(longestStringObj)[0]);