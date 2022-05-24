var storage = JSON.parse(localStorage.getItem("storedData"));
var categoryNames = ["Todas"];
storage.categories.forEach(function (category) {
    categoryNames.push(category.name);
});
var filters = {
    title: ["Tipo", "Categoría", "Desde", "Ordenar por"],
    type: ["Todos", "Gasto", "Ganancias"],
    category: categoryNames,
    sortBy: [
        "Mas reciente",
        "Menos reciente",
        "Mayor monto",
        "Menor monto",
        "A/Z",
        "Z/A",
    ]
};
var container = document.createElement("div");
container.classList.add("p-5", "container");
var rowWrapper = document.createElement("div");
rowWrapper.classList.add("row");
container.appendChild(rowWrapper);
main.appendChild(container);
//Card Balance
var cardBalance = document.createElement("div");
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card-balance", "card", "p-3", "shadow");
var balanceTitle = document.createElement("h2");
balanceTitle.appendChild(document.createTextNode("Balance"));
balanceTitle.classList.add("fw-bold", "mb-5", "text-dark", "text-opacity-75");
cardBalance.appendChild(balanceTitle);
var tableBalance = document.createElement("table");
tableBalance.classList.add("table", "table-borderless");
cardBalance.appendChild(tableBalance);
var tbody = document.createElement("tbody");
tableBalance.appendChild(tbody);
var trProfits = document.createElement("tr");
tbody.appendChild(trProfits);
var tdProfits = document.createElement("td");
trProfits.appendChild(tdProfits);
tdProfits.appendChild(document.createTextNode("Ganancias"));
tdProfits.classList.add("fs-5");
var tdNumberProfits = document.createElement("td");
tdNumberProfits.classList.add("ps-5");
trProfits.appendChild(tdNumberProfits);
var spanProfit = document.createElement("span");
spanProfit.appendChild(document.createTextNode("+$".concat(storage.totalProfits)));
spanProfit.classList.add("text-success", "ms-5");
tdNumberProfits.appendChild(spanProfit);
var trBills = document.createElement("tr");
tbody.appendChild(trBills);
var tdBills = document.createElement("td");
trBills.appendChild(tdBills);
tdBills.appendChild(document.createTextNode("Gastos"));
tdBills.classList.add("fs-5");
var tdNumberBills = document.createElement("td");
tdNumberBills.classList.add("ps-5");
var spanBills = document.createElement("span");
spanBills.appendChild(document.createTextNode("-$".concat(storage.totalBills)));
spanBills.classList.add("text-danger", "ms-5");
trBills.appendChild(tdNumberBills);
tdNumberBills.appendChild(spanBills);
var trSum = document.createElement("tr");
tbody.appendChild(trSum);
var tdSum = document.createElement("td");
trSum.appendChild(tdSum);
tdSum.appendChild(document.createTextNode("Total"));
tdSum.classList.add("fs-4");
var tdNumberSum = document.createElement("td");
tdNumberSum.classList.add("ps-5", "pt-3");
trSum.appendChild(tdNumberSum);
var spanSum = document.createElement("span");
spanSum.appendChild(document.createTextNode("".concat(storage.totalProfits - storage.totalBills))); // darle estilo
spanSum.classList.add("fw-bold", "ms-5");
tdNumberSum.appendChild(spanSum);
//Card Filters
var cardFilters = document.createElement("div");
cardFilters.classList.add("card-filters", "card", "p-3", "mt-3", "shadow");
var cardTitle = document.createElement("h3");
cardTitle.appendChild(document.createTextNode("Filtros"));
cardTitle.classList.add("fw-bolder", "text-dark", "text-opacity-75");
cardFilters.appendChild(cardTitle);
var hideFilters = document.createElement("a");
hideFilters.setAttribute("role", "button");
hideFilters.appendChild(document.createTextNode("Ocultar filtros"));
hideFilters.classList.add("btn", "btn-link", "ms-5", "mt-1");
var btnShowFilters = document.createElement("a");
btnShowFilters.setAttribute("role", "button");
btnShowFilters.appendChild(document.createTextNode("Mostrar filtros"));
btnShowFilters.classList.add("btn", "btn-link", "ms-5", "mt-1", "display-none");
var boxTitleLink = document.createElement("div");
boxTitleLink.classList.add("d-flex");
boxTitleLink.appendChild(cardTitle);
boxTitleLink.appendChild(hideFilters);
boxTitleLink.appendChild(btnShowFilters);
cardFilters.appendChild(boxTitleLink);
var column = document.createElement("div");
column.classList.add("col-4", "gx-5");
column.appendChild(cardBalance);
column.appendChild(cardFilters);
rowWrapper.appendChild(column);
var form = document.createElement("form");
cardFilters.appendChild(form);
var createSelect = function (array) {
    filters.title.forEach(function (elem) {
        if (elem != "Desde") {
            var label = document.createElement("label");
            label.classList.add("fw-bold", "mb-2");
            label.setAttribute("for", elem);
            label.appendChild(document.createTextNode(elem));
            form.appendChild(label);
            var select_1 = document.createElement("select");
            select_1.classList.add("form-select", "mb-3");
            select_1.setAttribute('id', elem);
            switch (elem) {
                case "Tipo":
                    filters.type.forEach(function (type) {
                        var option = document.createElement("option");
                        option.appendChild(document.createTextNode(type));
                        option.value = type;
                        select_1.appendChild(option);
                    });
                    break;
                case "Categoría":
                    categoryNames.shift();
                    filters.category.forEach(function (category) {
                        var option = document.createElement("option");
                        option.appendChild(document.createTextNode(category));
                        // option.setAttribute('id', category.id)
                        option.value = category;
                        select_1.appendChild(option);
                    });
                    break;
                case "Ordenar por":
                    filters.sortBy.forEach(function (order) {
                        var option = document.createElement("option");
                        option.appendChild(document.createTextNode(order));
                        option.value = order;
                        select_1.appendChild(option);
                    });
                    break;
                default: //podriamos poner el "desde" en el defalut??
                    break;
            }
            form.appendChild(select_1);
        }
        else if (elem === "Desde") {
            var input = document.createElement("input");
            input.classList.add("form-control", "mb-3");
            input.setAttribute("type", "date");
            input.setAttribute('id', elem);
            var date = new Date(); //formatDate
            input.defaultValue = date.toString();
            var label = document.createElement("label");
            label.classList.add("fw-bold", "mb-2");
            label.setAttribute("for", elem);
            label.appendChild(document.createTextNode(elem));
            form.appendChild(label);
            form.appendChild(input);
        }
    });
};
createSelect(filters);
// Events Filters
hideFilters.addEventListener("click", function () {
    form.classList.add("display-none");
    cardFilters.classList.add("card-hide");
    hideFilters.classList.add("display-none");
    btnShowFilters.classList.add("d-flex");
});
btnShowFilters.addEventListener("click", function () {
    form.classList.remove("display-none");
    cardFilters.classList.remove("card-hide");
    btnShowFilters.classList.remove("d-flex");
    hideFilters.classList.remove("display-none");
});
// Filters events for Table
var filterOption = "";
var filterCat = "";
var orderOption = "";
var filterType = document.getElementById('Tipo');
filterType.addEventListener('change', function (e) {
    window.location.href = window.location.pathname + "?type = " + e.target.value;
    filterOption = e.target.value;
});
var filterCategory = document.getElementById('Categoría');
filterCategory.addEventListener('change', function (e) {
    filterCat = e.target.value;
});
var orderBy = document.getElementById('Ordenar por');
orderBy.addEventListener('change', function (e) {
    orderOption = e.target.value;
});
///// To filter the table
// const operationTabletoFilter = document.getElementById('operationTable') as HTMLTableElement;
// // const tBodyToFilter = document.getElementById('operationTBody') as HTMLTableElement;
// let row: HTMLTableRowElement;
// row = operationTabletoFilter.rows;
// console.log(row);
// // const tRow = document.getElementsByClassName('tRow');
// function doSearch() {
//   var tableReg = document.getElementById('operationTBody') as HTMLTableElement;
//   var searchText = filterCat;
//   for (var i = 1; i < tableReg.rows.length; i++) {
//     console.log(tableReg.rows.length);
//       var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
//       var found = false;
//       for (var j = 0; j < cellsOfRow.length && !found; j++) {
//           var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
//           if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
//               found = true;
//           }
//       }
//       if (found) {
//           tableReg.rows[i].style.display = '';
//       } else {
//           tableReg.rows[i].style.display = 'none';
//       }
//   }
// }
// doSearch()
////////////
//Card Operation
var columnOperation = document.createElement("div");
columnOperation.classList.add("col-7");
var cardOperation = document.createElement("div");
columnOperation.appendChild(cardOperation);
cardOperation.classList.add("card-operation", "card", "p-3", "shadow");
var boxTitleBtn = document.createElement("div");
boxTitleBtn.classList.add("d-flex", "justify-content-between");
var titleOperation = document.createElement("h3");
titleOperation.appendChild(document.createTextNode("Operaciones"));
titleOperation.classList.add("fw-bold", "text-dark", "fs-4", "text-opacity-75");
boxTitleBtn.appendChild(titleOperation);
var btnNewOperation = document.createElement("button");
btnNewOperation.appendChild(document.createTextNode("+ Nueva operación"));
btnNewOperation.classList.add("btn", "btn-success");
btnNewOperation.setAttribute("type", "button");
boxTitleBtn.appendChild(btnNewOperation);
cardOperation.appendChild(boxTitleBtn);
var imgOperation = document.createElement("img");
imgOperation.setAttribute("src", "./assets/undraw_discount_d4bd.png");
imgOperation.setAttribute("alt", "illustracion");
cardOperation.appendChild(imgOperation);
var textNoResults = document.createElement("p");
textNoResults.appendChild(document.createTextNode("Sin resultados"));
textNoResults.classList.add("fs-4", "text-center", "text-dark", "fw-bold", "text-opacity-75");
cardOperation.appendChild(textNoResults);
var textAddOperations = document.createElement("p");
textAddOperations.appendChild(document.createTextNode("Cambiá los filtros o agregá operaciones"));
textAddOperations.classList.add("text-center");
cardOperation.appendChild(textAddOperations);
rowWrapper.appendChild(columnOperation);
//Card Nueva operación
var wrapperNewOp = document.createElement("div");
var cardNewOperation = document.createElement("div");
cardNewOperation.classList.add("display-none", "card-newOp", "card", "p-3", "mt-3", "shadow");
wrapperNewOp.appendChild(cardNewOperation);
container.appendChild(wrapperNewOp);
// Title
var titleNewOp = document.createElement("h2");
titleNewOp.appendChild(document.createTextNode("Nueva operación"));
titleNewOp.classList.add("fw-bolder", "fs-1");
cardNewOperation.appendChild(titleNewOp);
// Form 
var wrapperFormNewOp = document.createElement("div");
wrapperFormNewOp.classList.add("p-1", "mb-2", "mt-4");
cardNewOperation.appendChild(wrapperFormNewOp);
var boxButton = document.createElement("div");
boxButton.classList.add("d-flex", "justify-content-end", "mt-5");
var formControls = [
    {
        label: "Descripción",
        type: "text",
        id: "description-select"
    },
    {
        label: "Monto",
        type: "number",
        id: "amount-select"
    },
    {
        label: "Tipo",
        type: "select",
        id: "type-select"
    },
    {
        label: "Categoria",
        type: "select",
        id: "category-select"
    },
    {
        label: "Fecha",
        type: "date",
        id: "date-select"
    }
];
var formNewOp = document.createElement("form");
filters.type.shift();
var createForm = function () {
    formNewOp.innerHTML = "";
    wrapperFormNewOp.appendChild(formNewOp);
    formControls.forEach(function (formControl) {
        var title = document.createElement("label");
        title.appendChild(document.createTextNode(formControl.label));
        title.classList.add("fw-bold", "mb-2", "mt-1");
        title.setAttribute("for", formControl.label);
        formNewOp.appendChild(title);
        if (formControl.type === "select") {
            var select_2 = document.createElement("select");
            select_2.classList.add("form-select");
            formNewOp.appendChild(select_2);
            if (formControl.label === "Tipo") {
                filters.type.forEach(function (type) {
                    var option = document.createElement("option");
                    option.appendChild(document.createTextNode(type));
                    select_2.setAttribute('name', 'tipo');
                    select_2.setAttribute('id', formControl.id);
                    // option.value = type;
                    select_2.appendChild(option);
                });
            }
            else if (formControl.label === "Categoria") {
                select_2.setAttribute('name', 'categories');
                select_2.setAttribute('id', formControl.id);
                for (var _i = 0, categoryNames_1 = categoryNames; _i < categoryNames_1.length; _i++) {
                    var prop = categoryNames_1[_i];
                    var option = document.createElement("option");
                    option.appendChild(document.createTextNode(prop));
                    select_2.appendChild(option);
                }
            }
        }
        else {
            var controlType = document.createElement("input");
            formControl.type === "number" ? controlType.value = 0 : controlType.value = "";
            controlType.classList.add("form-control");
            controlType.setAttribute("type", formControl.type);
            controlType.setAttribute("id", formControl.id);
            formNewOp.appendChild(controlType);
        }
    });
};
var btnCancel = document.createElement("button");
btnCancel.classList.add("btn", "btn-light", "me-2");
btnCancel.appendChild(document.createTextNode("Cancelar"));
var btnAdd = document.createElement("button");
btnAdd.classList.add("btn");
btnAdd.setAttribute('type', 'submit');
btnAdd.appendChild(document.createTextNode("Agregar"));
btnAdd.classList.add("btn", "btn-success");
boxButton.appendChild(btnCancel);
boxButton.appendChild(btnAdd);
btnAdd.addEventListener("click", function () {
    var newOp = {
        description: "",
        type: "",
        category: "",
        date: "",
        amount: 0
    };
    imgOperation.classList.add("display-none");
    textNoResults.classList.add("display-none");
    textAddOperations.classList.add("display-none");
    rowWrapper.classList.remove("display-none");
    cardNewOperation.classList.add("display-none");
    cardOperation.style.minHeight = "213px";
    var description = document.getElementById('description-select');
    newOp.description = description.value;
    var selectType = document.getElementById('type-select');
    newOp.type = selectType.options[selectType.selectedIndex].value;
    var selectCategory = document.getElementById('category-select');
    newOp.category = selectCategory.options[selectCategory.selectedIndex].value;
    var amount = document.getElementById('amount-select');
    if (newOp.type === "Gasto") {
        newOp.amount = parseInt("-".concat(amount.value));
        storage.totalBills += parseInt(amount.value);
        for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (newOp.category === category.name) {
                category.totalBills += parseInt(amount.value);
            }
        }
        spanBills.innerText = "-".concat(storage.totalBills);
        spanSum.innerText = "".concat(storage.totalProfits - storage.totalBills);
    }
    else {
        newOp.amount = parseInt("+".concat(amount.value));
        storage.totalProfits += parseInt(amount.value);
        for (var _b = 0, _c = storage.categories; _b < _c.length; _b++) {
            var category = _c[_b];
            if (newOp.category === category.name) {
                category.totalProfits += parseInt(amount.value);
            }
        }
        spanProfit.innerText = "+".concat(storage.totalProfits);
        spanSum.innerText = "".concat(storage.totalProfits - storage.totalBills);
    }
    var date = document.getElementById('date-select');
    newOp.date = date.value; //formatDate
    storage.operations.push(newOp);
    localStorage.setItem('storedData', JSON.stringify(storage));
    createOperationTable(operationLabels);
});
btnCancel.addEventListener("click", function () {
    cardNewOperation.classList.add("display-none");
    rowWrapper.classList.remove("display-none");
});
// Function to create table with Operations
var operationLabels = [
    "Descripción",
    "Categoria",
    "Fecha",
    "Monto",
    "Acciones",
]; // hacer un objeto con descripcion : "value" para poder capturar 
var containerTable = document.createElement("div");
cardOperation.appendChild(containerTable);
var operationTable = document.createElement("table");
operationTable.setAttribute('id', 'operationTable');
var operationTb = document.createElement("tbody");
operationTb.setAttribute('id', 'operationTBody');
var createOperationTable = function (tableHeads) {
    operationTable.innerHTML = "";
    operationTable.classList.add("table", "table-borderless", "mt-5");
    containerTable.appendChild(operationTable);
    operationTable.appendChild(operationTb);
    var tRow = document.createElement("tr");
    operationTable.appendChild(tRow);
    // tRow.style.width = "30px"
    var tableHead = document.createElement("thead");
    operationTable.appendChild(tableHead);
    operationLabels.forEach(function (tablehead) {
        var titleHeader = document.createElement("th");
        titleHeader.appendChild(document.createTextNode(tablehead));
        tableHead.appendChild(titleHeader);
    });
    var storage = JSON.parse(localStorage.getItem("storedData"));
    var operations = storage.operations;
    operations.forEach(function (operation) {
        var tRow = document.createElement("tr");
        tRow.setAttribute('class', 'tRow');
        var tdDescription = document.createElement("td");
        var pDescription = document.createElement('p');
        pDescription.classList.add("fw-bold");
        pDescription.style.color = "#777C7C";
        pDescription.appendChild(document.createTextNode(operation.description));
        tdDescription.appendChild(pDescription);
        tRow.appendChild(tdDescription);
        var tdCat = document.createElement("td");
        var pCat = document.createElement('p');
        pCat.classList.add("categorySpan");
        pCat.appendChild(document.createTextNode(operation.category));
        tdCat.appendChild(pCat);
        tRow.appendChild(tdCat);
        var tdDate = document.createElement("td");
        var pDate = document.createElement('p');
        pDate.appendChild(document.createTextNode(operation.date));
        tdDate.appendChild(pDate);
        tRow.appendChild(tdDate);
        var tdAmount = document.createElement("td");
        var pAmount = document.createElement('p');
        pAmount.appendChild(document.createTextNode("$".concat(operation.amount))); // sumar + o - si es gasto o profit
        tdAmount.appendChild(pAmount);
        operation.amount === "Gasto" ? pAmount.classList.add("fw-bold", "text-danger") : pAmount.classList.add("fw-bold", "text-success");
        tRow.appendChild(tdAmount);
        operationTable.appendChild(tRow);
        if (operationLabels[4] === "Acciones") {
            var tdAction = document.createElement("td");
            tRow.appendChild(tdAction);
            var boxBtn = document.createElement("div");
            boxBtn.classList.add("btn-group-vertical");
            tdAction.appendChild(boxBtn);
            var editBtn = document.createElement("button");
            editBtn.setAttribute("id", "editBtn");
            editBtn.classList.add("btn", "btn-link");
            editBtn.style.fontSize = "12px";
            editBtn.appendChild(document.createTextNode("Editar"));
            boxBtn.appendChild(editBtn);
            var delOp = document.createElement("button");
            delOp.setAttribute("id", "delBtn");
            delOp.classList.add("btn", "btn-link");
            delOp.style.fontSize = "12px";
            delOp.appendChild(document.createTextNode("Eliminar"));
            boxBtn.appendChild(delOp);
            delOp.addEventListener('click', function () {
                var index = operations.indexOf(operation);
                operations.splice(index, 1);
                operationTable.removeChild(tRow);
                localStorage.setItem('storedData', JSON.stringify(storage));
            });
            editBtn.addEventListener('click', function () {
                imgOperation.classList.add("display-none");
                textNoResults.classList.add("display-none");
                textAddOperations.classList.add("display-none");
                rowWrapper.classList.remove("display-none");
                cardNewOperation.classList.add("display-none");
                var description = document.getElementById('description-select');
                var selectType = document.getElementById('type-select');
                var selectCategory = document.getElementById('category-select');
                var amount = document.getElementById('amount-select');
                var date = document.getElementById('date-select');
                description.value = operation.descripcion;
                localStorage.setItem('storedData', JSON.stringify(storage));
            });
        }
    });
};
var setTable = function () {
    var storage = JSON.parse(localStorage.getItem('storedData'));
    if (storage.operations.length != 0) {
        imgOperation.classList.add("display-none");
        textNoResults.classList.add("display-none");
        textAddOperations.classList.add("display-none");
        createOperationTable(operationLabels);
    }
    else {
        imgOperation.classList.remove("display-none");
        textNoResults.classList.remove("display-none");
        textAddOperations.classList.remove("display-none");
    }
};
setTable();
// Events
btnNewOperation.addEventListener("click", function (e) {
    e.preventDefault();
    cardNewOperation.classList.remove("display-none");
    rowWrapper.classList.add("display-none");
    wrapperNewOp.classList.add("d-flex", "justify-content-center");
    cardNewOperation.appendChild(boxButton);
    createForm();
});
