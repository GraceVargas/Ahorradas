var storage = JSON.parse(localStorage.getItem('storedData'));
// Container
var containerReports = document.createElement('div');
containerReports.classList.add("container-xl", "p-5", "d-flex", "justify-content-center");
main.appendChild(containerReports);
// Card 
var reportsCard = document.createElement('div');
reportsCard.classList.add("centralCard", "card", "p-3", "shadow", "border");
reportsCard.setAttribute("id", "reports");
reportsCard.style.minHeight = "90vh";
containerReports.appendChild(reportsCard);
// Card Title
var reportsTitle = document.createElement('h2');
reportsTitle.appendChild(document.createTextNode("Reportes"));
reportsCard.appendChild(reportsTitle);
reportsTitle.classList.add("cardTitle"); // para sumar el style del h2 de categorias y reportes
// Image 
var imgWrapper = document.createElement('div');
imgWrapper.classList.add("mx-auto");
reportsCard.appendChild(imgWrapper);
imgWrapper.style.maxWidth = "60%";
imgWrapper.style.minHeight = "43%";
var reportImg = document.createElement('img');
reportImg.setAttribute('src', './assets/report-img.svg');
reportImg.setAttribute('alt', "Image of Empty Reports");
reportImg.classList.add("img-fluid");
imgWrapper.classList.add("my-5");
imgWrapper.appendChild(reportImg);
// Card text
var operationsTitle = document.createElement('h3');
reportsCard.appendChild(operationsTitle);
operationsTitle.appendChild(document.createTextNode("Operaciones insuficientes"));
operationsTitle.classList.add("text-center");
var operationsText = document.createElement('p');
reportsCard.appendChild(operationsText);
operationsText.appendChild(document.createTextNode("Prueba agregando más operaciones"));
operationsText.classList.add("text-center");
// // Summary Table
var summaryCard = document.createElement('div');
reportsCard.appendChild(summaryCard);
summaryCard.classList.add("container");
summaryCard.classList.add("display-none");
var operationsTable = document.createElement('table');
operationsTable.classList.add("table", "table-borderless");
summaryCard.appendChild(operationsTable);
var opTableBody = document.createElement('tbody');
operationsTable.appendChild(opTableBody);
operationsTable.classList.add("mt-5");
var operationsTableTitle = document.createElement('caption');
operationsTableTitle.appendChild(document.createTextNode("Resumen"));
operationsTableTitle.classList.add("caption-top");
operationsTable.appendChild(operationsTableTitle);
var maxProfitCat;
var maxBillsCat;
var setTotals = function () {
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var maxProfitCat_1 = category;
        var maxBillsCat_1 = category;
        if (category.totalProfits > maxProfitCat_1.totalProfits) {
            maxProfitCat_1.totalProfits = category.totalProfits;
            maxProfitCat_1.name = category.name;
        }
        if (category.totalBills > maxBillsCat_1.total) {
            maxBillsCat_1 = category;
        }
    }
    ;
};
setTotals();
console.log(maxBillsCat, maxProfitCat);
var itemsSummit = ["Categoría con mayor ganancia", "Categoría con mayor gasto", "Categoría con mayor balance", "Mes con mayor ganancia", "Mes con mayor gasto"];
var createSummitTable = function (items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var tRow = document.createElement('tr');
        opTableBody.appendChild(tRow);
        // Items list
        var tDataItem = document.createElement('td');
        tDataItem.appendChild(document.createTextNode(item));
        tRow.appendChild(tDataItem);
        var tDataCat = document.createElement('td');
        var tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode('Comida')); // linkear con categorias
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan');
        tRow.appendChild(tDataCat);
        var totalAmount = document.createElement('td');
        totalAmount.appendChild(document.createTextNode('$100000')); // linkear con totales
        tRow.appendChild(totalAmount);
    }
};
createSummitTable(itemsSummit);
// Sum Total Categories Table
var totalCatCard = document.createElement('div');
reportsCard.appendChild(totalCatCard);
totalCatCard.classList.add("container");
var tableHeads = ["Ganancias", "Gastos", "Balance"];
var createTotalCatsTable = function (total, tableHeads) {
    var totTable = document.createElement('table');
    totTable.classList.add("table", "table-borderless");
    totalCatCard.appendChild(totTable);
    var totTableTitle = document.createElement('caption');
    totTableTitle.appendChild(document.createTextNode("Totales por ".concat(total)));
    totTable.appendChild(totTableTitle);
    totTableTitle.classList.add("caption-top");
    var tableHead = document.createElement('thead');
    totTable.appendChild(tableHead);
    var titleHeader = document.createElement('th');
    titleHeader.appendChild(document.createTextNode(total));
    tableHead.appendChild(titleHeader);
    for (var _i = 0, tableHeads_1 = tableHeads; _i < tableHeads_1.length; _i++) {
        var head = tableHeads_1[_i];
        var titleHeader_1 = document.createElement('th');
        titleHeader_1.appendChild(document.createTextNode(head));
        tableHead.appendChild(titleHeader_1);
    }
    var totTableBody = document.createElement('tbody');
    totTable.appendChild(totTableBody);
    totTable.classList.add("mt-5");
    for (var _a = 0, _b = storage.categories; _a < _b.length; _a++) {
        var category = _b[_a];
        if (category.totalProfits > 0 || category.totalBills > 0) {
            var tRow = document.createElement('tr');
            totTable.appendChild(tRow);
            var tdCat = document.createElement('td');
            tdCat.appendChild(document.createTextNode(category.name));
            tRow.appendChild(tdCat);
            var tdProfits = document.createElement('td');
            tdProfits.appendChild(document.createTextNode(category.totalProfits));
            tRow.appendChild(tdProfits);
            var tdBills = document.createElement('td');
            tdBills.appendChild(document.createTextNode(category.totalBills));
            tRow.appendChild(tdBills);
            var totalAmount = document.createElement('td');
            totalAmount.appendChild(document.createTextNode("".concat(category.totalProfits - category.totalBills)));
            tRow.appendChild(totalAmount);
        }
    }
    ;
};
var totalDates = [];
storage.operations.forEach(function (operation) {
    var newPeriod = {
        period: "",
        bills: 0,
        profits: 0
    };
    var date = operation.date.slice(0, 7);
    newPeriod.period = date;
    totalDates.push(newPeriod);
});
storage.operations.forEach(function (operation) {
    var date = operation.date.slice(0, 7);
    for (var _i = 0, totalDates_1 = totalDates; _i < totalDates_1.length; _i++) {
        var totalDate = totalDates_1[_i];
        if (totalDate.period === date) {
            switch (operation.type) {
                case "Ganancias":
                    totalDate.profits += operation.amount;
                    break;
                case "Gasto":
                    totalDate.bills += -operation.amount;
                    break;
            }
        }
    }
});
// const unicos: TotalDate[] = [];
// totalDates.forEach(totalDate => {
//     if (!unicos.includes(totalDate)) {            // Eliminar fechas duplicadas
//         unicos.push(totalDate);
//     }   
// }) 
// console.log(unicos);
var createTotalMonthTable = function (total, tableHeads) {
    var totTable = document.createElement('table');
    totTable.classList.add("table", "table-borderless");
    totalCatCard.appendChild(totTable);
    var totTableTitle = document.createElement('caption');
    totTableTitle.appendChild(document.createTextNode("Totales por ".concat(total)));
    totTable.appendChild(totTableTitle);
    totTableTitle.classList.add("caption-top");
    var tableHead = document.createElement('thead');
    totTable.appendChild(tableHead);
    var titleHeader = document.createElement('th');
    titleHeader.appendChild(document.createTextNode(total));
    tableHead.appendChild(titleHeader);
    for (var _i = 0, tableHeads_2 = tableHeads; _i < tableHeads_2.length; _i++) {
        var head = tableHeads_2[_i];
        var titleHeader_2 = document.createElement('th');
        titleHeader_2.appendChild(document.createTextNode(head));
        tableHead.appendChild(titleHeader_2);
    }
    var totTableBody = document.createElement('tbody');
    totTable.appendChild(totTableBody);
    totTable.classList.add("mt-5");
    for (var _a = 0, totalDates_2 = totalDates; _a < totalDates_2.length; _a++) {
        var totalDate = totalDates_2[_a];
        var tRow = document.createElement('tr');
        totTable.appendChild(tRow);
        var tdCat = document.createElement('td');
        tdCat.appendChild(document.createTextNode(totalDate.period));
        tRow.appendChild(tdCat);
        var tdProfits = document.createElement('td');
        tdProfits.appendChild(document.createTextNode("".concat(totalDate.profits)));
        tRow.appendChild(tdProfits);
        var tdBills = document.createElement('td');
        tdBills.appendChild(document.createTextNode("".concat(totalDate.bills)));
        tRow.appendChild(tdBills);
        var totalAmount = document.createElement('td');
        totalAmount.appendChild(document.createTextNode("".concat(totalDate.profits - totalDate.bills)));
        tRow.appendChild(totalAmount);
    }
    ;
};
var setReport = function () {
    if (storage.totalBills && storage.totalProfits) {
        imgWrapper.style.display = "none";
        operationsTitle.style.display = "none";
        operationsText.style.display = "none";
        summaryCard.classList.remove("display-none");
        createTotalCatsTable("Categoria", tableHeads);
        createTotalMonthTable("Mes", tableHeads);
    }
};
setReport();
