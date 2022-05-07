const container = document.createElement('div');
container.classList.add("container");

const cardBalance = document.createElement('div');
container.appendChild(cardBalance);
// cardBalance.classList.add("card");
const balanceTitle = document.createElement('h2');
balanceTitle.appendChild(document.createTextNode("Balance"));
cardBalance.appendChild(balanceTitle);
const boxProfits = document.createElement('div');
boxProfits.appendChild(document.createTextNode("Ganancias"));
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
const spanSum = document.createElement('span');
spanSum.appendChild(document.createTextNode(" $0"));
tdNumberSum.appendChild(spanSum);


const cardFilters=document.createElement('div');
container.appendChild(cardFilters);

const cardOperation = document.createElement('div');
container.appendChild(cardOperation);


main.appendChild(container);

