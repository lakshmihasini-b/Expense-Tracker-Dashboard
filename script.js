const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

const form = document.getElementById("expense-form");
const list = document.getElementById("transaction-list");

let transactions = [];

form.addEventListener("submit", function(e){

    e.preventDefault();

    const description = document.getElementById("description").value;

    const amount = Number(document.getElementById("amount").value);

    const type = document.getElementById("type").value;

    const transaction = {
        description,
        amount,
        type
    };

    transactions.push(transaction);

    updateUI();

    form.reset();

});

function updateUI(){

    list.innerHTML="";

    let totalIncome=0;
    let totalExpense=0;

    transactions.forEach((t,index)=>{

        const li=document.createElement("li");

        li.classList.add(t.type);

        li.innerHTML=`
        ${t.description}
        <span>₹${t.amount}</span>
        `;

        list.appendChild(li);

        if(t.type==="income")
            totalIncome+=t.amount;
        else
            totalExpense+=t.amount;

    });

    income.innerText=`₹${totalIncome}`;

    expense.innerText=`₹${totalExpense}`;

    balance.innerText=`₹${totalIncome-totalExpense}`;
}