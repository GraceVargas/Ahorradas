var filters = {
    title: ["Tipo", "Categoría", "Desde", "Ordenar por"],
    type: ["Todos", "Gasto", "Ganancias"],
    category: ["Todas"],
    sortBy: ["Mas reciente", "Menos reciente", "Mayor monto", "Menor monto", "A/Z", "Z/A"]
};
var container = document.createElement('div');
container.classList.add("container", "p-5");
var rowWrapper = document.createElement('div');
rowWrapper.classList.add("row");
container.appendChild(rowWrapper);
main.appendChild(container);
//Card Balance
var cardBalance = document.createElement('div');
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card-balance", "card", "p-3", "shadow");
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
tdNumberProfits.classList.add("ps-5");
trProfits.appendChild(tdNumberProfits);
var spanProfit = document.createElement('span');
spanProfit.appendChild(document.createTextNode("+$0"));
spanProfit.classList.add("text-success", "ms-5");
tdNumberProfits.appendChild(spanProfit);
var trBills = document.createElement('tr');
tbody.appendChild(trBills);
var tdBills = document.createElement('td');
trBills.appendChild(tdBills);
tdBills.appendChild(document.createTextNode("Gastos"));
tdBills.classList.add("fs-5");
var tdNumberBills = document.createElement('td');
tdNumberBills.classList.add("ps-5");
var spanBills = document.createElement('span');
spanBills.appendChild(document.createTextNode("-$0"));
spanBills.classList.add("text-danger", "ms-5");
trBills.appendChild(tdNumberBills);
tdNumberBills.appendChild(spanBills);
var trSum = document.createElement('tr');
tbody.appendChild(trSum);
var tdSum = document.createElement('td');
trSum.appendChild(tdSum);
tdSum.appendChild(document.createTextNode("Total"));
tdSum.classList.add("fs-4");
var tdNumberSum = document.createElement('td');
tdNumberSum.classList.add("ps-5", "pt-3");
trSum.appendChild(tdNumberSum);
var spanSum = document.createElement('span');
spanSum.appendChild(document.createTextNode("$0"));
spanSum.classList.add("fw-bold", "ms-5");
tdNumberSum.appendChild(spanSum);
//Card Filters
var cardFilters = document.createElement('div');
cardFilters.classList.add("card-filters", "card", "p-3", "mt-3", "shadow");
var cardTitle = document.createElement('h3');
cardTitle.appendChild(document.createTextNode("Filtros"));
cardTitle.classList.add("fw-bolder", "text-dark", "text-opacity-75");
cardFilters.appendChild(cardTitle);
var hideFilters = document.createElement('a');
hideFilters.setAttribute('role', "button");
hideFilters.appendChild(document.createTextNode("Ocultar filtros"));
hideFilters.classList.add("btn", "btn-link", "ms-5", "mt-1");
var btnShowFilters = document.createElement('a');
btnShowFilters.setAttribute('role', "button");
btnShowFilters.appendChild(document.createTextNode("Mostrar filtros"));
btnShowFilters.classList.add("btn", "btn-link", "ms-5", "mt-1", "display-none");
var boxTitleLink = document.createElement('div');
boxTitleLink.classList.add("d-flex");
boxTitleLink.appendChild(cardTitle);
boxTitleLink.appendChild(hideFilters);
boxTitleLink.appendChild(btnShowFilters);
cardFilters.appendChild(boxTitleLink);
var column = document.createElement('div');
column.classList.add("col-4", "gx-5");
column.appendChild(cardBalance);
column.appendChild(cardFilters);
rowWrapper.appendChild(column);
var form = document.createElement('form');
cardFilters.appendChild(form);
var createSelect = function (array) {
    filters.title.forEach(function (elem) {
        if (elem != "Desde") {
            var label = document.createElement('label');
            label.classList.add("fw-bold", "mb-2");
            label.setAttribute('for', elem);
            label.appendChild(document.createTextNode(elem));
            form.appendChild(label);
            var select_1 = document.createElement('select');
            select_1.classList.add("form-select", "mb-3");
            switch (elem) {
                case "Tipo":
                    filters.type.forEach(function (type) {
                        var option = document.createElement('option');
                        option.appendChild(document.createTextNode(type));
                        option.value = type;
                        select_1.appendChild(option);
                    });
                    break;
                case "Categoría":
                    filters.category.forEach(function (category) {
                        var option = document.createElement('option');
                        option.appendChild(document.createTextNode(category));
                        option.value = category;
                        select_1.appendChild(option);
                    });
                    break;
                case "Ordenar por":
                    filters.sortBy.forEach(function (order) {
                        var option = document.createElement('option');
                        option.appendChild(document.createTextNode(order));
                        option.value = order;
                        select_1.appendChild(option);
                    });
                    break;
                default:
                    break;
            }
            form.appendChild(select_1);
        }
        else if (elem === "Desde") {
            var input = document.createElement('input');
            input.classList.add("form-control", "mb-3");
            input.setAttribute('type', "date");
            var date = new Date;
            input.defaultValue = date.getDate().toString();
            var label = document.createElement('label');
            label.classList.add("fw-bold", "mb-2");
            label.setAttribute('for', elem);
            label.appendChild(document.createTextNode(elem));
            form.appendChild(label);
            form.appendChild(input);
        }
    });
};
createSelect(filters);
hideFilters.addEventListener('click', function () {
    form.classList.add("display-none");
    cardFilters.classList.add("card-hide");
    hideFilters.classList.add("display-none");
    btnShowFilters.classList.add("d-flex");
});
btnShowFilters.addEventListener('click', function () {
    form.classList.remove("display-none");
    cardFilters.classList.remove("card-hide");
    btnShowFilters.classList.remove("d-flex");
    hideFilters.classList.remove("display-none");
});
//Card Operation
var columnOperation = document.createElement('div');
columnOperation.classList.add("col-7");
var cardOperation = document.createElement('div');
columnOperation.appendChild(cardOperation);
cardOperation.classList.add("card-operation", "card", "p-3", "shadow");
var boxTitleBtn = document.createElement('div');
boxTitleBtn.classList.add("d-flex", "justify-content-between");
var titleOperation = document.createElement('h3');
titleOperation.appendChild(document.createTextNode("Operaciones"));
titleOperation.classList.add("fw-bold", "text-dark", "fs-4", "text-opacity-75");
boxTitleBtn.appendChild(titleOperation);
var btnNewOperation = document.createElement('button');
btnNewOperation.appendChild(document.createTextNode("+ Nueva operación"));
btnNewOperation.classList.add("btn", "btn-success");
btnNewOperation.setAttribute('type', "button");
boxTitleBtn.appendChild(btnNewOperation);
cardOperation.appendChild(boxTitleBtn);
var imgOperation = document.createElement('img');
imgOperation.setAttribute('src', "./assets/undraw_discount_d4bd.png");
imgOperation.setAttribute('alt', "illustracion");
cardOperation.appendChild(imgOperation);
var textNoResults = document.createElement('p');
textNoResults.appendChild(document.createTextNode("Sin resultados"));
textNoResults.classList.add("fs-4", "text-center", "text-dark", "fw-bold", "text-opacity-75");
cardOperation.appendChild(textNoResults);
var textAddOperations = document.createElement('p');
textAddOperations.appendChild(document.createTextNode("Cambía los filtros o agregá operaciones"));
textAddOperations.classList.add("text-center");
cardOperation.appendChild(textAddOperations);
rowWrapper.appendChild(columnOperation);
btnNewOperation.addEventListener('click', function (e) {
    e.preventDefault();
    cardNewOperation.classList.remove("display-none");
    rowWrapper.classList.add("display-none");
    wrapperNewOp.classList.add("d-flex", "justify-content-center");
});
//Card Nueva operación
var wrapperNewOp = document.createElement('div');
var cardNewOperation = document.createElement('div');
cardNewOperation.classList.add("display-none", "card-newOp", "card", "p-3", "mt-3", "shadow");
var titleNewOp = document.createElement('h2');
titleNewOp.appendChild(document.createTextNode("Nueva operación"));
titleNewOp.classList.add("fw-bolder", "fs-1");
var boxButton = document.createElement('div');
boxButton.classList.add("d-flex", "justify-content-end", "mt-5");
var btnCancel = document.createElement('button');
btnCancel.classList.add("btn", "btn-light", "me-2");
btnCancel.appendChild(document.createTextNode("Cancelar"));
var btnAdd = document.createElement('button');
btnAdd.classList.add("btn");
btnAdd.appendChild(document.createTextNode("Agregar"));
btnAdd.classList.add("btn", "btn-success");
cardNewOperation.appendChild(titleNewOp);
wrapperNewOp.appendChild(cardNewOperation);
container.appendChild(wrapperNewOp);
var formNewOp = document.createElement('form');
cardNewOperation.appendChild(formNewOp);
var wrapperFormNewOp = document.createElement('div');
wrapperFormNewOp.classList.add("p-1", "mb-2", "mt-4");
wrapperFormNewOp.appendChild(formNewOp);
cardNewOperation.appendChild(wrapperFormNewOp);
boxButton.appendChild(btnCancel);
boxButton.appendChild(btnAdd);
cardNewOperation.appendChild(boxButton);
btnAdd.addEventListener('click', function () {
    imgOperation.classList.add("display-none");
    textNoResults.classList.add("display-none");
    textAddOperations.classList.add("display-none");
    rowWrapper.classList.remove("display-none");
    cardNewOperation.classList.add("display-none");
    cardOperation.style.minHeight = "213px";
});
btnCancel.addEventListener('click', function () {
    cardNewOperation.classList.add("display-none");
    rowWrapper.classList.remove("display-none");
});
var formControls = [{
        "label": "Descripción",
        "type": "text"
    },
    {
        "label": "Monto",
        "type": "number"
    }, {
        "label": "Tipo",
        "type": "select"
    }, {
        "label": "Categoria",
        "type": "select"
    }, {
        "label": "Fecha",
        "type": "date"
    }
];
formControls.forEach(function (formControl) {
    var title = document.createElement('label');
    title.appendChild(document.createTextNode(formControl.label));
    title.classList.add("fw-bold", "mb-2", "mt-1");
    title.setAttribute('for', formControl.label);
    formNewOp.appendChild(title);
    if (formControl.type === "select") {
        var select_2 = document.createElement('select');
        select_2.classList.add("form-select");
        formNewOp.appendChild(select_2);
        if (formControl.label === "Tipo") {
            filters.type.shift();
            filters.type.forEach(function (type) {
                var option = document.createElement('option');
                option.appendChild(document.createTextNode(type));
                option.value = type;
                select_2.appendChild(option);
            });
        }
    }
    else {
        var controlType = document.createElement('input');
        controlType.classList.add("form-control");
        controlType.setAttribute('type', formControl.type);
        formNewOp.appendChild(controlType);
    }
});
