// Reconcile two lists (missing + extra items) 

const data = {
    expected: ["a", "b", "c"],
    actual: ["b", "c", "d"]
};

const missing = data.expected.filter(item => !data.actual.includes(item));

const extra = data.actual.filter(item => !data.expected.includes(item));

const result = {
    missing,
    extra
};

console.log(result);

