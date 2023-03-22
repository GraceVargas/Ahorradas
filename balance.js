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
container.classList.add("p-5", "container", "container-sm");
var rowWrapper = document.createElement("div");
rowWrapper.classList.add("row");
container.appendChild(rowWrapper);
main.appendChild(container);
//Card Balance
var cardBalance = document.createElement("div");
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card-balance", "card", "p-3", "shadow"); //,"col-md-8","order-md-1"
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
tdNumberProfits.classList.add("ps-3", "text-end");
trProfits.appendChild(tdNumberProfits);
var spanProfit = document.createElement("span");
spanProfit.appendChild(document.createTextNode("+$".concat(new Intl.NumberFormat('de-DE').format(storage.totalProfits))));
spanProfit.classList.add("text-success", "ms-5");
tdNumberProfits.appendChild(spanProfit);
var trBills = document.createElement("tr");
tbody.appendChild(trBills);
var tdBills = document.createElement("td");
trBills.appendChild(tdBills);
tdBills.appendChild(document.createTextNode("Gastos"));
tdBills.classList.add("fs-5");
var tdNumberBills = document.createElement("td");
tdNumberBills.classList.add("ps-3", "text-end");
var spanBills = document.createElement("span");
spanBills.appendChild(document.createTextNode("-$".concat(new Intl.NumberFormat('de-DE').format(storage.totalBills))));
spanBills.classList.add("text-danger", "ms-5");
trBills.appendChild(tdNumberBills);
tdNumberBills.appendChild(spanBills);
var trSum = document.createElement("tr");
tbody.appendChild(trSum);
var tdSum = document.createElement("td");
trSum.appendChild(tdSum);
tdSum.appendChild(document.createTextNode("Total"));
tdSum.classList.add("fs-4", "text-wrap");
var tdNumberSum = document.createElement("td");
tdNumberSum.classList.add("ps-3", "pt-3", "text-end");
trSum.appendChild(tdNumberSum);
var spanSum = document.createElement("span");
spanSum.appendChild(document.createTextNode("$".concat(new Intl.NumberFormat('de-DE').format(storage.totalProfits - storage.totalBills))));
spanSum.classList.add("fw-bold", "ms-5");
tdNumberSum.appendChild(spanSum);
//Card Filters
var cardFilters = document.createElement("div");
cardFilters.classList.add("card-filters", "card", "p-3", "mt-3", "shadow", "col-lg-12", "order-md-2");
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
column.classList.add("col-md-4", "col-sm-12", "gx-5");
column.appendChild(cardBalance);
column.appendChild(cardFilters);
rowWrapper.appendChild(column);
var form = document.createElement("form");
cardFilters.appendChild(form);
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
        select_1.setAttribute('name', elem);
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
                filters.category.forEach(function (category) {
                    var option = document.createElement("option");
                    option.appendChild(document.createTextNode(category));
                    option.value = category;
                    select_1.appendChild(option);
                });
                break;
            // case "Ordenar por":
            //   filters.sortBy.forEach((order) => {
            //     const option = document.createElement("option")
            //     option.appendChild(document.createTextNode(order))
            //     option.value = order;
            //     select.appendChild(option)
            //   });
            //   break;
            default:
                break;
        }
        form.appendChild(select_1);
        if (elem == "Ordenar por") {
            label.style.display = "none";
        }
    }
    // else if (elem === "Desde") {
    //   const input = document.createElement("input") as HTMLInputElement;
    //   input.classList.add("form-control", "mb-3");
    //   input.setAttribute("type", "date");
    //   input.setAttribute('id', 'date');
    //   const date = new Date();  
    //   input.value = date.toString();
    //   const label = document.createElement("label")
    //   label.classList.add("fw-bold", "mb-2")
    //   label.setAttribute("for", elem)
    //   label.appendChild(document.createTextNode(elem))
    //   form.appendChild(label)
    //   form.appendChild(input)
    // }  
});
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
var filterType = document.getElementById('Tipo');
var filterCategory = document.getElementById('Categoría');
var checkFilters = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var selectedType = urlParams.get('type');
    var selectedCategory = urlParams.get('category');
    if (selectedType) {
        filterType.value = selectedType;
    }
    if (selectedCategory) {
        filterCategory.value = selectedCategory;
    }
};
filterType.addEventListener('change', function (e) {
    var url = new URL(window.location.href);
    var params = url.searchParams;
    if (e.target.value === "Todos") {
        params["delete"]('type');
        var nueva_url = url.toString();
        window.location.href = nueva_url;
    }
    else {
        params.set('type', e.target.value);
        window.location.href = window.location.pathname + '?' + params.toString();
    }
});
filterCategory.addEventListener('change', function (e) {
    var url = new URL(window.location.href);
    var params = url.searchParams;
    if (e.target.value === "Todas") {
        params["delete"]('category');
        var nueva_url = url.toString();
        window.location.href = nueva_url;
    }
    else {
        params.set('category', e.target.value);
        window.location.href = window.location.pathname + '?' + params.toString();
    }
});
checkFilters();
var orderBy = document.getElementById('Ordenar por');
orderBy.style.display = "none";
//   orderBy.addEventListener('change', (e) => {
//   const params = new URLSearchParams(window.location.search);
//   params.set('date', e.target.value);
//   window.location.href = window.location.pathname + '?' + params.toString(); 
// })
//Card Operation
var columnOperation = document.createElement("div");
columnOperation.classList.add("col-lg-7");
var cardOperation = document.createElement("div");
columnOperation.appendChild(cardOperation);
cardOperation.classList.add("card-operation", "card", "p-3", "shadow", "order-md-3");
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
btnNewOperation.setAttribute("id", "btnNewOperation");
boxTitleBtn.appendChild(btnNewOperation);
cardOperation.appendChild(boxTitleBtn);
var btnNewOp_responsive = document.createElement("button");
btnNewOp_responsive.appendChild(document.createTextNode("+"));
btnNewOp_responsive.classList.add("btn", "btn-success");
btnNewOp_responsive.setAttribute("type", "button");
btnNewOp_responsive.setAttribute("id", "btnNewOp_responsive");
btnNewOp_responsive.style.display = "none";
boxTitleBtn.appendChild(btnNewOp_responsive);
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
        date: Date,
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
];
var containerTable = document.createElement("div");
containerTable.classList.add("table-responsive");
cardOperation.appendChild(containerTable);
var operationTable = document.createElement("table");
operationTable.setAttribute('id', 'operationTable');
var operationTb = document.createElement("tbody");
operationTb.setAttribute('id', 'operationTBody');
operationTable.classList.add("table", "table-borderless", "mt-5");
var createOperationTable = function (tableHeads) {
    containerTable.appendChild(operationTable);
    operationTable.appendChild(operationTb);
    var tRow = document.createElement("tr");
    operationTable.appendChild(tRow);
    var tableHead = document.createElement("thead");
    operationTable.appendChild(tableHead);
    operationLabels.forEach(function (tablehead) {
        var titleHeader = document.createElement("th");
        titleHeader.appendChild(document.createTextNode(tablehead));
        tableHead.appendChild(titleHeader);
    });
    operationTable.innerHTML = "";
    var storage = JSON.parse(localStorage.getItem("storedData"));
    var operations = storage.operations;
    var params = new URLSearchParams(window.location.search);
    var typeParams = params.get('type');
    var categoryParams = params.get('category');
    if (typeParams && !categoryParams) {
        operations = operations.filter(function (op) { return op.type === typeParams; });
    }
    else if (categoryParams && !typeParams) {
        operations = operations.filter(function (op) { return op.category === categoryParams; });
    }
    else if (typeParams && categoryParams) {
        operations = operations.filter(function (op) { return op.type === typeParams && op.category === categoryParams; });
    }
    operations.forEach(function (operation) {
        var tRow = document.createElement("tr");
        tRow.setAttribute('class', 'tRow');
        var tdCat = document.createElement("td");
        tdCat.appendChild(document.createTextNode(operation.description));
        tdCat.classList.add("text-secondary", "fw-bold");
        tRow.appendChild(tdCat);
        var tdProfits = document.createElement("td");
        tdProfits.appendChild(document.createTextNode(operation.category));
        tdProfits.classList.add("categorySpan");
        tdProfits.style.backgroundColor = "white";
        tRow.appendChild(tdProfits);
        var tdBills = document.createElement("td");
        tdBills.appendChild(document.createTextNode(operation.date));
        tdBills.style.whiteSpace = "nowrap";
        tRow.appendChild(tdBills);
        var totalAmount = document.createElement("td");
        totalAmount.classList.add("text-end");
        totalAmount.appendChild(document.createTextNode("$".concat(new Intl.NumberFormat('de-DE').format(operation.amount))));
        tRow.appendChild(totalAmount);
        operationTable.appendChild(tRow);
        if (operationLabels[4] === "Acciones") {
            var tdAction = document.createElement("td");
            tdAction.classList.add("text-center");
            tRow.appendChild(tdAction);
            var boxBtn = document.createElement("div");
            boxBtn.classList.add("btn-group-vertical");
            tdAction.appendChild(boxBtn);
            var delOp = document.createElement("button");
            delOp.setAttribute("id", "delBtn");
            delOp.classList.add("btn", "btn-link");
            delOp.style.fontSize = "12px";
            delOp.appendChild(document.createTextNode("Eliminar"));
            boxBtn.appendChild(delOp);
            delOp.addEventListener('click', function () {
                var index = operations.indexOf(operation);
                storage.operations.splice(index, 1);
                if (operation.type === "Gasto") {
                    storage.totalBills += parseInt(operation.amount);
                    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
                        var category = _a[_i];
                        if (operation.category === category.name) {
                            category.totalBills += parseInt(operation.amount);
                        }
                    }
                }
                else {
                    storage.totalProfits -= parseInt(operation.amount);
                    for (var _b = 0, _c = storage.categories; _b < _c.length; _b++) {
                        var category = _c[_b];
                        if (operation.category === category.name) {
                            category.totalProfits -= parseInt(operation.amount);
                        }
                    }
                }
                localStorage.setItem('storedData', JSON.stringify(storage));
                location.reload();
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
btnNewOp_responsive.addEventListener("click", function (e) {
    e.preventDefault();
    cardNewOperation.classList.remove("display-none");
    rowWrapper.classList.add("display-none");
    wrapperNewOp.classList.add("d-flex", "justify-content-center");
    cardNewOperation.appendChild(boxButton);
    createForm();
});
