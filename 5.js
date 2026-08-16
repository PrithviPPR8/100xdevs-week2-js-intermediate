//Transform array of orders into revenue per category

let orders = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 }
]

let finalOrder = {};

for(let i=0; i<orders.length; i++) {
    // console.log(orders[i])
    // console.log(orders[i].category);
    // console.log(orders[i].price);
    // console.log(Object.keys(orders[i]));

    if(!finalOrder[orders[i].category]) {
        finalOrder[orders[i].category] = orders[i].price;
    }
    else {
        finalOrder[orders[i].category] += orders[i].price;
    }
}

console.log(finalOrder);

