//Find the most repeated word across categories

let obj = {
    fruits: ["apple", "apple", "banana"],
    drinks: ["apple", "tea"]
}

let frequency = {};

for(let category in obj) {
    for(let word of obj[category]) {
        if(frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }
}

// console.log(frequency);

let mostRepeatedWord = "";
let maxCount = 0;

for(let word in frequency) {
    if(frequency[word] > maxCount) {
        maxCount = frequency[word];
        mostRepeatedWord = word;
    }
}

console.log(mostRepeatedWord);