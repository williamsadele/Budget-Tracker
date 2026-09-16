const balance = document.getElementById("balance");
const moneyIncome = document.getElementById("money-plus");
const moneyExpense = document.getElementById("money-minus");
const inputText = document.getElementById("text");
const inputAmount = document.getElementById("amount");
const addBtn = document.getElementById("btn");
let transactions = []

function addTransaction() {
    event.preventDefault
    if(inputText.value.trim() === "" || inputAmount.value.trim() === ""){
        alert = "Please input both name and amount, idiot"
        return ""
    }
    let transaction = {
        id: Date.now,
        text: inputText.value.trim(),
        amount: Number(inputAmount.value.trim())
    }
    transactions.push(transaction)
}
addBtn.addEventListener("submit", addTransaction)