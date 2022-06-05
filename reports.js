var storage = JSON.parse(localStorage.getItem('storedData'));
// Function to set total for Category and Month
var maxProfit = 0;
var maxProfitCat = "";
var maxBills = 0;
var maxBillsCat = "";
var maxBalanceCat = "";
var maxBalance = 0;
var maxBillsAmountMonth = 0;
var maxBillsMonth = 0;
var maxProfitsAmountMonth = 0;
var maxProfitsMonth = 0;
var opByMonths = {
    jan: [],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
};
var operations = storage.operations;
operations.forEach(function (op) {
    var opDate = new Date(op.date);
    switch (opDate.getMonth()) {
        case 0:
            opByMonths.jan.push(op);
            break;
        case 1:
            opByMonths.feb.push(op);
            break;
        case 2:
            opByMonths.mar.push(op);
            break;
        case 3:
            opByMonths.apr.push(op);
            break;
        case 4:
            opByMonths.may.push(op);
            break;
        case 5:
            opByMonths.jun.push(op);
            break;
        case 6:
            opByMonths.jul.push(op);
            break;
        case 7:
            opByMonths.aug.push(op);
            break;
        case 8:
            opByMonths.sep.push(op);
            break;
        case 9:
            opByMonths.oct.push(op);
            break;
        case 10:
            opByMonths.nov.push(op);
            break;
        case 11:
            opByMonths.dec.push(op);
            break;
        default: return null;
    }
});
var setTotals = function () {
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        if (category.totalProfits > maxProfit) {
            maxProfit = category.totalProfits;
            maxProfitCat = category.name;
        }
        if (category.totalBills > maxBills) {
            maxBills = category.totalBills;
            maxBillsCat = category.name;
        }
        if (category.totalProfits - category.totalBills > maxBalance) {
            maxBalance = category.totalProfits - category.totalBills;
            maxBalanceCat = category.name;
        }
    }
};
setTotals();
var searchMaxAmounts = function (opByMonths) {
    var totBills = 0;
    var totProfits = 0;
    for (var months in opByMonths) {
        var operations_2 = opByMonths[months];
        for (var _i = 0, operations_1 = operations_2; _i < operations_1.length; _i++) {
            var operation = operations_1[_i];
            var opDate = new Date(operation.date);
            if (operation.type === "Gasto") {
                totBills -= operation.amount;
                if (totBills > maxBillsAmountMonth) {
                    maxBillsAmountMonth = totBills;
                    maxBillsMonth = opDate.getMonth() + 1;
                }
            }
            else if (operation.type === "Ganancias") {
                totProfits += operation.amount;
                if (totProfits > maxProfitsAmountMonth) {
                    maxProfitsAmountMonth = totProfits;
                    maxProfitsMonth = opDate.getMonth() + 1;
                }
            }
        }
    }
    return { maxBillsAmountMonth: maxBillsAmountMonth, maxBillsMonth: maxBillsMonth, maxProfitsAmountMonth: maxProfitsAmountMonth, maxProfitsMonth: maxProfitsMonth };
};
// const searchMaxAmounts = opByMonths => {
//     let totBills = 0;
//     let totProfits = 0;
//     for (const months in opByMonths) {        
//         const operations = opByMonths[months];
//         console.log(operations);
//         operations.forEach(op => {
//             if (op.type === "Gasto") {
//                 totBills -= op.amount; 
//                 opByMonths[months].push(`totBills: ${totBills}`);         
//             } else if (op.type === "Ganancias") {
//                 totProfits += op.amount;
//                 opByMonths[months].push(`totProfits: ${totProfits}`); 
//             }         
//         });         
//     }
//     return {maxBillsAmountMonth, maxBillsMonth, maxProfitsAmountMonth, maxProfitsMonth};
// }
searchMaxAmounts(opByMonths);
// console.log(opByMonths); 
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
reportsTitle.classList.add("cardTitle");
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
        var totalAmount = document.createElement('td');
        switch (item) {
            case "Categoría con mayor ganancia":
                tDataText.appendChild(document.createTextNode(maxProfitCat));
                totalAmount.appendChild(document.createTextNode(maxProfit.toString()));
                break;
            case "Categoría con mayor gasto":
                tDataText.appendChild(document.createTextNode(maxBillsCat));
                totalAmount.appendChild(document.createTextNode(maxBills.toString()));
                break;
            case "Categoría con mayor balance":
                tDataText.appendChild(document.createTextNode(maxBalanceCat));
                totalAmount.appendChild(document.createTextNode(maxBalance.toString()));
                break;
            case "Mes con mayor ganancia":
                tDataText.appendChild(document.createTextNode(maxProfitsMonth.toString()));
                totalAmount.appendChild(document.createTextNode(maxProfitsAmountMonth.toString()));
                break;
            case "Mes con mayor gasto":
                tDataText.appendChild(document.createTextNode(maxBillsMonth.toString()));
                totalAmount.appendChild(document.createTextNode(maxBillsAmountMonth.toString()));
                break;
        }
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan');
        tRow.appendChild(tDataCat);
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
// Sum Total Month Table
// storage.operations.forEach(operation => {
//     let date = operation.date.slice(0, 7);
//     for (let totalDate of totalDates) {
//         if (totalDate.period === date) {
//             switch (operation.type) {
//                 case "Ganancias": totalDate.profits += operation.amount;
//                 break;
//                 case "Gasto": totalDate.bills += -operation.amount;
//                 break;
//             } 
//         }
//     }
// });
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
    // for (let totalDate of totalDates) {
    //     let tRow = document.createElement('tr');
    //     totTable.appendChild(tRow);
    //     let tdCat = document.createElement('td');
    //     tdCat.appendChild(document.createTextNode(totalDate.period));
    //     tRow.appendChild(tdCat);
    //     let tdProfits = document.createElement('td');  
    //     tdProfits.appendChild(document.createTextNode(`${totalDate.profits}`));  
    //     tRow.appendChild(tdProfits);
    //     let tdBills = document.createElement('td');  
    //     tdBills.appendChild(document.createTextNode(`${totalDate.bills}`));  
    //     tRow.appendChild(tdBills);
    //     let totalAmount = document.createElement('td');
    //     totalAmount.appendChild(document.createTextNode(`${totalDate.profits - totalDate.bills}`)); 
    //     tRow.appendChild(totalAmount);
    // };
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
