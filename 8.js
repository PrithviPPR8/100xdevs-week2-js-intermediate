// Convert the object where languages are the top-level keys, 
// and inside each are translation strings by key into an object 
// where translation keys are the top-level keys, and inside each 
// you store values per language [HARD**]

let obj = {
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au Revoir"},
    es: { hello: "Hola" }
};

let result = {};

for(let language in obj) {
    // console.log(language);
    // console.log(obj[language]);
    for(let key in obj[language]) {
        // console.log(key);
        // console.log(obj[language][key]);
        if(!result[key]) {
            result[key] = {};
        }

        result[key][language] = obj[language][key];
    }
}

console.log(result);

