const container = document.createElement('div');
container.classList.add("container"); //,"d-flex"
main.appendChild(container);

const cardBalance = document.createElement('div');
container.appendChild(cardBalance);
cardBalance.classList.add("card","p-3", "mt-2"); //, "mt-2"
const balanceTitle = document.createElement('h2');
balanceTitle.appendChild(document.createTextNode("Balance"));
balanceTitle.classList.add("fw-bold","mb-5");
cardBalance.appendChild(balanceTitle);
const tableBalance = document.createElement('table');
cardBalance.appendChild(tableBalance);
const tbody = document.createElement('tbody');
tableBalance.appendChild(tbody);

const trProfits = document.createElement('tr');
tbody.appendChild(trProfits);
const tdProfits = document.createElement('td');
trProfits.appendChild(tdProfits);
tdProfits.appendChild(document.createTextNode("Ganancias"));
tdProfits.classList.add("fs-5");
const tdNumberProfits = document.createElement('td');
trProfits.appendChild(tdNumberProfits);
const spanProfit = document.createElement('span');
spanProfit.appendChild(document.createTextNode("+$0"));
tdNumberProfits.appendChild(spanProfit);

const trBills = document.createElement('tr');
tbody.appendChild(trBills);
const tdBills = document.createElement('td');
trBills.appendChild(tdBills);
tdBills.appendChild(document.createTextNode("Gastos"))
tdBills.classList.add("fs-5");
const tdNumberBills = document.createElement('td');
const spanBills = document.createElement('span');
spanBills.appendChild(document.createTextNode("-$0"));
trBills.appendChild(tdNumberBills);
tdNumberBills.appendChild(spanBills);

const trSum = document.createElement('tr');
tbody.appendChild(trSum);
const tdSum = document.createElement('td');
trSum.appendChild(tdSum);
tdSum.appendChild(document.createTextNode("Total"));
tdSum.classList.add("fs-4");
const tdNumberSum = document.createElement('td');
trSum.appendChild(tdNumberSum);
const spaSum = document.createElement('span');
tdNumberSum.appendChild(spaSum);


// const cardFilters=document.createElement('div');
// container.appendChild(cardFilters);

// const cardOperation = document.createElement('div');
// container.appendChild(cardOperation);





