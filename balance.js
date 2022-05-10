var container = document.createElement('div');
container.classList.add("container", "p-5"); //,"p-5" el padding del container
var rowWrapper = document.createElement('div'); //revisar nombre
rowWrapper.classList.add("row"); //,"row-cols-3","g-2","justify-content-center""row-cols-2"borrar el rowrapper si no se usa
container.appendChild(rowWrapper);
main.appendChild(container);
var cardBalance = document.createElement('div');
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card-balance", "card", "p-3"); //, "mt-2", "col-4"
var balanceTitle = document.createElement('h2');
balanceTitle.appendChild(document.createTextNode("Balance"));
balanceTitle.classList.add("fw-bold", "mb-5", "text-dark", "text-opacity-75");
cardBalance.appendChild(balanceTitle);
var tableBalance = document.createElement('table');
tableBalance.classList.add("table", "table-borderless");
cardBalance.appendChild(tableBalance);
var tbody = document.createElement('tbody');
tableBalance.appendChild(tbody);
var trProfits = document.createElement('tr');
tbody.appendChild(trProfits);
var tdProfits = document.createElement('td');
trProfits.appendChild(tdProfits);
tdProfits.appendChild(document.createTextNode("Ganancias"));
tdProfits.classList.add("fs-5");
var tdNumberProfits = document.createElement('td');
trProfits.appendChild(tdNumberProfits);
var spanProfit = document.createElement('span');
spanProfit.appendChild(document.createTextNode("+$0"));
spanProfit.classList.add("text-success");
tdNumberProfits.appendChild(spanProfit);
var trBills = document.createElement('tr');
tbody.appendChild(trBills);
var tdBills = document.createElement('td');
trBills.appendChild(tdBills);
tdBills.appendChild(document.createTextNode("Gastos"));
tdBills.classList.add("fs-5");
var tdNumberBills = document.createElement('td');
var spanBills = document.createElement('span');
spanBills.appendChild(document.createTextNode("-$0"));
spanBills.classList.add("text-danger");
trBills.appendChild(tdNumberBills);
tdNumberBills.appendChild(spanBills);
var trSum = document.createElement('tr');
tbody.appendChild(trSum);
var tdSum = document.createElement('td');
trSum.appendChild(tdSum);
tdSum.appendChild(document.createTextNode("Total"));
tdSum.classList.add("fs-4");
var tdNumberSum = document.createElement('td');
trSum.appendChild(tdNumberSum);
var spanSum = document.createElement('span');
spanSum.appendChild(document.createTextNode(" $0"));
spanSum.classList.add("fw-bold");
tdNumberSum.appendChild(spanSum);
var cardFilters = document.createElement('div');
cardFilters.classList.add("card-filters", "card", "p-3", "mt-3"); //"d-inline-flex","col-4"
var cardTitle = document.createElement('h3');
cardTitle.appendChild(document.createTextNode("Filtros"));
cardTitle.classList.add("fw-bolder", "text-dark", "text-opacity-75");
cardFilters.appendChild(cardTitle);
var hideFilters = document.createElement('a');
hideFilters.setAttribute('role', "button");
hideFilters.appendChild(document.createTextNode("Ocultar filtros"));
hideFilters.classList.add("btn", "btn-link", "ms-3", "mt-1");
var boxTitleLink = document.createElement('div');
boxTitleLink.classList.add("d-flex");
boxTitleLink.appendChild(cardTitle);
boxTitleLink.appendChild(hideFilters);
cardFilters.appendChild(boxTitleLink);
var column = document.createElement('div');
column.classList.add("col-4", "gx-5");
column.appendChild(cardBalance);
column.appendChild(cardFilters);
rowWrapper.appendChild(column);
var cardOperation = document.createElement('div');
cardOperation.classList.add("card-operation", "card", "p-3", "col-7");
var titleOperation = document.createElement('h3');
titleOperation.appendChild(document.createTextNode("Operaciones"));
titleOperation.classList.add("fw-bold", "text-dark", "fs-4");
cardOperation.appendChild(titleOperation);
var btnBox = document.createElement('div');
btnBox.classList.add("d-flex", "justify-content-end");
var btnNewOperation = document.createElement('button');
btnNewOperation.appendChild(document.createTextNode("+ Nueva operación"));
btnNewOperation.classList.add("btn", "btn-success");
btnNewOperation.setAttribute('type', "button");
btnBox.appendChild(btnNewOperation);
cardOperation.appendChild(btnBox);
var imgOperation = document.createElement('img');
imgOperation.setAttribute('src', "./assets/undraw_discount_d4bd.png");
imgOperation.setAttribute('alt', "illustracion");
cardOperation.appendChild(imgOperation);
var textNoResults = document.createElement('p');
textNoResults.appendChild(document.createTextNode("Sin resultados"));
textNoResults.classList.add("fs-5", "text-center", "fw-bold", "text-secondary");
cardOperation.appendChild(textNoResults);
var textAddOperations = document.createElement('p');
textAddOperations.appendChild(document.createTextNode("Cambía los filtros o agregá operaciones"));
textAddOperations.classList.add("text-center");
cardOperation.appendChild(textAddOperations);
rowWrapper.appendChild(cardOperation);
// type Filters ={
//     title:string[],
//     type:string[],
//     category:string[],
//     sortBy: string[]
// }
// const filters ={
//     title: [],
//     type : [],
//     category :[],
//     sortBy :[]
// }
// const titleSelect = ["Tipo","Categoría","Desde","Ordenar por"];
// const typeSelect = ["Todos","Gasto","Ganancias"];
// const categorySelect = ["Todas"];
// const sortSelect = ["Mas reciente","Menos reciente","Mayor monto","Menor monto","A/Z","Z/A"];
// const createForm =(array: Filters)=>{
//     const form = document.createElement('form');
//     cardFilters.appendChild(form);
//     for (let i = 0; i < filters.title.length; i++) {
//         const element = array[i];
//         const select = document.createElement('select');
//         select.classList.add("form-select");
//         const option = document.createAttribute('option');
//         const label = document.createElement('label');
//         label.setAttribute('for',element[filters.title]);
//         // // option.appendChild(document.createTextNode(filters.tipo))
//         // option.value = filters.tipo.toString();
//         form.appendChild(select);
//     }
// }
