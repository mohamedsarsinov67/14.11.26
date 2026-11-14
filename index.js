
const product = {
    title: "Блокнот",
    price: 150,
    stock: 4
}
function sell(quantity) {
    if (product.stock > quantity) {
        const Price = quantity * product.price
        product.stock = product.stock - quantity
        console.log("232323")
    }
    else {
        console.log("продажа откланена у нас недостаточно товара недостаточно")
    }
}
sell(3)
sell(2)

const expenses = [{ title: "lunch", category: "food", amount: 350 },
{ title: "bus", category: "transport", amount: 45 },
{ title: "bread", category: "food", amount: 80 }]

let summ = 0

expenses.forEach((el) => {
    if (el.category === "food") {
        summ = summ + el.amount
    }
});
console.log(summ)
