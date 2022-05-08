const container = document.createElement('div');
container.classList.add("container","p-5"); //,"p-5" el padding del container
const rowWrapper = document.createElement('div'); //revisar nombre
rowWrapper.classList.add("row");//,"justify-content-center" borrar el rowrapper si no se usa
container.appendChild(rowWrapper);


main.appendChild(container);

const cardBalance = document.createElement('div');
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card","p-3", "col"); //, "mt-2"

const balanceTitle = document.createElement('h2');
balanceTitle.appendChild(document.createTextNode("Balance"));
balanceTitle.classList.add("fw-bold","mb-5", "text-dark","text-opacity-75");
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
spanProfit.classList.add("text-success");
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
spanBills.classList.add("text-danger");
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
spanSum.classList.add("fw-bold");
tdNumberSum.appendChild(spanSum);


const cardOperation = document.createElement('div');
cardOperation.classList.add("card-operation","card","p-3");
const titleOperation = document.createElement('h3');
titleOperation.appendChild(document.createTextNode("Operaciones"));
titleOperation.classList.add("fw-bold", "text-dark","fs-4");
cardOperation.appendChild(titleOperation);
const btnNewOperation = document.createElement('button');
btnNewOperation.appendChild(document.createTextNode("+ Nueva operación"));
btnNewOperation.classList.add("btn", "btn-success");
btnNewOperation.setAttribute('type', "button");
cardOperation.appendChild(btnNewOperation);
const imgOperation = document.createElement('img');
imgOperation.setAttribute('src',"./assets/undraw_discount_d4bd.png");
imgOperation.setAttribute('alt', "illustracion");
cardOperation.appendChild(imgOperation);
const textNoResults = document.createElement('p');
textNoResults.appendChild(document.createTextNode("Sin resultados"));
cardOperation.appendChild(textNoResults);
const textAddOperations = document.createElement('p');
textAddOperations.appendChild(document.createTextNode("Cambía los filtros o agrega operaciones"));
cardOperation.appendChild(textAddOperations);

rowWrapper.appendChild(cardOperation);

// const cardFilters=document.createElement('div');
// cardFilters.classList.add("card-filters","card","col");
// rowWrapper.appendChild(cardFilters);







