let transaction = [
    {
        id: 1,
        date: "14-01-2026",
        amount: -440,
        status: "Success",
        type: "expense",
    },
    
    {
        id: 1,
        date: "10-01-2026",
        amount: -440,
        status: "Success",
        type: "expense",
    },
    
    {
        id: 1,
        date: "8-01-2026",
        amount: -440,
        status: "Success",
        type: "expense",
    },
];

let monthlyIncome = 2645;
let monthlyExpenses = 1895;

const today = new Date().toISOString().split('T')[0];
document.getElementById('incomeDate').value = today;
document.getElementById('expenseDate').value = today;

function openIncomeModel() {
    document.getElementById('incomeModel').style.display = 'block';
    document.body.style.overflow = 'hidden'
}

function openExpenseModel() {
    document.getElementById('expenseModel').style.display = 'block';
    document.body.style.overflow = 'hidden'
}

function closeModel(modelId) {
    const modal = document.getElementById(modelId);

    modal.classList.add("closing");

    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("closing");
        document.body.style.overflow = "auto";

        if (modelId === "incomeModel") {
            document.getElementById("incomeForm").reset();
            document.getElementById("incomeDate").value = today;
        } else {
            document.getElementById("expenseForm").reset();
            document.getElementById("expenseDate").value = today;
        }
    }, 300);

    
}

window.onclick = function (event) {
    const incomeModel = document.getElementById('incomeModel');
    const expenseModel = document.getElementById('expenseModel');

    if (event.target === incomeModel) {
        closeModel('incomeModel')
    }

    if (event.target === expenseModel) {
        closeModel('expenseModel')
    }
}

function addIncome() {
    const amount = parseFloat(document.getElementById('incomeAmount').value)
    const category = document.getElementById('incomeCategory').value
}