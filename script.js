const balance = document.getElementById("balance");
const moneyIncome = document.getElementById("money-plus");
const moneyExpense = document.getElementById("money-minus");
const inputText = document.getElementById("text");
const inputAmount = document.getElementById("amount");
const form = document.getElementById("form");
const hitsoryEl = document.getElementById("list");
let transactions = []

form.addEventListener("submit", addTransaction)
function addTransaction(event) {
    event.preventDefault();
    if(inputText.value.trim() === "" || inputAmount.value.trim() === ""){
        alert("Please input both name and amount, idiot")
        return ""
    }
    let transaction = {
        id: Date.now(),
        text: inputText.value.trim(),
        amount: Number(inputAmount.value.trim())
    }
    transactions.push(transaction)
    render()
    inputText = ""; inputAmount = ""
}
function render () {
    let entry = ""
    for(let i = 0; i<transactions.length; i++){
        const sign = transactions[i].amount > 0 ? "+" : "-"
        const itemClass = transactions[i].amount > 0 ? "plus" : "minus"
     entry += `<li class="${itemClass}>
    ${transactions[i].text}
    <span>${sign}$${Math.abs(transactions[i].amount)}</span>
    </li>`
    }
    historyEl.innerHTML = entry
}