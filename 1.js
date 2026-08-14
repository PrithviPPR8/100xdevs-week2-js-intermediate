// Sum all transactions per user

let users = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 }
]

let sumAmounts = {};

for(let i=0; i<users.length; i++) {
    // console.log(users[i]);
    // console.log(users[i].user)
    if(!sumAmounts[users[i].user]) {
        sumAmounts[users[i].user] = users[i].amount;
    } else {
        sumAmounts[users[i].user] += users[i].amount;
    }
}

console.log(sumAmounts);