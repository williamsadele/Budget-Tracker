const balance = document.getElementById("balance");
const moneyIncome = document.getElementById("money-plus");
const moneyExpense = document.getElementById("money-minus");
const inputText = document.getElementById("text");
const inputAmount = document.getElementById("amount");
const form = document.getElementById("form");
const historyEl = document.getElementById("list");
let transactions = []


function addTransaction(event) {
    event.preventDefault();
    if(inputText.value.trim() === "" || inputAmount.value.trim() === ""){
        alert("Please input both name and amount, idiot")
        return;
    }
    let transaction = {
        id: Date.now(),
        text: inputText.value.trim(),
        amount: Number(inputAmount.value.trim())
    }
    transactions.push(transaction)
    render(transactions, historyEl)
    calculateBalance()
    inputText.value = ""
    inputAmount.value = ""
}
form.addEventListener("submit", addTransaction)
function render (array, hist) {
    let entry = ""
    for(let i=0; i<array.length; i++){
        const sign = array[i].amount > 0 ? "+" : "-"
        const itemClass = array[i].amount > 0 ? "plus" : "minus"
     entry += `<li class="${itemClass}">
    ${array[i].text}
    <span>${sign}$${Math.abs(array[i].amount)}</span>
    </li>`
    }
    hist.innerHTML = entry
}
function calculateBalance() {
    const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0)

    const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0)

    const total = transactions.reduce((acc, item) => acc + item.amount, 0)

    moneyIncome.textContent = `$${income}`
    moneyExpense.textContent = `$${expense}`
    balance.textContent = `$${total}`
}