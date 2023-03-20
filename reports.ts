
let storage = JSON.parse(localStorage.getItem('storedData'));


 // Function to set total for Category and Month

 let maxProfit = 0;
 let maxProfitCat = "";
 let maxBills = 0; 
 let maxBillsCat = "";
 let maxBalanceCat = "";
 let maxBalance = 0;
 let maxBillsAmountMonth = 0;
 let maxBillsMonth = 0;
 let maxProfitsAmountMonth = 0;
 let maxProfitsMonth = 0;

const opByMonths = {
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
    dec: [],
}

const operations = storage.operations;

operations.forEach(op => {
    const opDate = new Date(op.date);

  
    switch (opDate.getMonth()) {
        case 0: opByMonths.jan.push(op); break;
        case 1: opByMonths.feb.push(op); break;
        case 2: opByMonths.mar.push(op); break;
        case 3: opByMonths.apr.push(op); break;
        case 4: opByMonths.may.push(op); break;
        case 5: opByMonths.jun.push(op); break;
        case 6: opByMonths.jul.push(op); break;
        case 7: opByMonths.aug.push(op); break;
        case 8: opByMonths.sep.push(op); break;
        case 9: opByMonths.oct.push(op); break;
        case 10: opByMonths.nov.push(op); break;
        case 11: opByMonths.dec.push(op); break;
        default: return null;
    }

})



 
const setTotals = () => {
     for (let category of storage.categories) {
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
 
 }
 
 setTotals();

 
const searchMaxAmounts = opByMonths => {
    let totBills = 0;
    let totProfits = 0;

    for (const months in opByMonths) {
        const operations = opByMonths[months];
        
        for (let operation of operations) {
            const opDate = new Date(operation.date);
            if (operation.type === "Gasto") {
                totBills -= operation.amount;
                                
                if (totBills > maxBillsAmountMonth) {
                    maxBillsAmountMonth = totBills;
                    maxBillsMonth = opDate.getMonth() + 1;                                                                            
                } 
            } else if (operation.type === "Ganancias") {
                totProfits += operation.amount;
                if (totProfits > maxProfitsAmountMonth) {
                    maxProfitsAmountMonth = totProfits;
                    maxProfitsMonth = opDate.getMonth() + 1;
                } 
            }      
        }   
    }
    return {maxBillsAmountMonth, maxBillsMonth, maxProfitsAmountMonth, maxProfitsMonth};
}

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

const containerReports = document.createElement('div');
containerReports.classList.add("container-xl","p-5", "d-flex", "justify-content-center");
main.appendChild(containerReports);


// Card 

const reportsCard = document.createElement('div');
reportsCard.classList.add("centralCard", "card","p-3","shadow", "border");
reportsCard.setAttribute("id", "reports");
reportsCard.style.minHeight = "90vh";
containerReports.appendChild(reportsCard); 



// Card Title

const reportsTitle = document.createElement('h2');
reportsTitle.appendChild(document.createTextNode("Reportes"));
reportsCard.appendChild(reportsTitle);
reportsTitle.classList.add("cardTitle");   

// Image 

const imgWrapper = document.createElement('div');
imgWrapper.classList.add("mx-auto");
reportsCard.appendChild(imgWrapper);
imgWrapper.style.maxWidth = "60%";
imgWrapper.style.minHeight = "43%";

const reportImg = document.createElement('img');
reportImg.setAttribute('src', './assets/report-img.svg');
reportImg.setAttribute('alt', "Image of Empty Reports");
reportImg.classList.add("img-fluid");
imgWrapper.classList.add("my-5");
imgWrapper.appendChild(reportImg);

// Card text

const operationsTitle = document.createElement('h3');
reportsCard.appendChild(operationsTitle);
operationsTitle.appendChild(document.createTextNode("Operaciones insuficientes"));
operationsTitle.classList.add("text-center");

const operationsText = document.createElement('p');
reportsCard.appendChild(operationsText);
operationsText.appendChild(document.createTextNode("Prueba agregando más operaciones"));
operationsText.classList.add("text-center");

// // Summary Table

const summaryCard = document.createElement('div');
reportsCard.appendChild(summaryCard);
summaryCard.classList.add("container");
summaryCard.classList.add("display-none");

const operationsTable = document.createElement('table');
operationsTable.classList.add("table", "table-borderless");
summaryCard.appendChild(operationsTable);


const opTableBody = document.createElement('tbody');
operationsTable.appendChild(opTableBody);
operationsTable.classList.add("mt-5");

const operationsTableTitle = document.createElement('caption');
operationsTableTitle.appendChild(document.createTextNode("Resumen"));
operationsTableTitle.classList.add("caption-top");
operationsTable.appendChild(operationsTableTitle);

const itemsSummit = ["Categoría con mayor ganancia", "Categoría con mayor gasto", "Categoría con mayor balance"];

const createSummitTable = (items: string[]) => {

    for (let item of items) {

        let tRow = document.createElement('tr');
        tRow.classList.add('responsive_font')
        opTableBody.appendChild(tRow);

        // Items list

        let tDataItem = document.createElement('td');
        tDataItem.appendChild(document.createTextNode(item));
        tRow.appendChild(tDataItem);
        let tDataCat = document.createElement('td');
        let tDataText = document.createElement('span');
        let totalAmount = document.createElement('td');

        switch(item) {
            case "Categoría con mayor ganancia": 
                tDataText.appendChild(document.createTextNode(maxProfitCat));
                totalAmount.appendChild(document.createTextNode(`+$${new Intl.NumberFormat('de-DE').format(maxProfit.toString())}`)); 
                totalAmount.classList.add("text-success", "ms-5", "text-end"); break;
            case "Categoría con mayor gasto":
                tDataText.appendChild(document.createTextNode(maxBillsCat));
                totalAmount.appendChild(document.createTextNode(`-$${new Intl.NumberFormat('de-DE').format(maxBills.toString())}`)); 
                totalAmount.classList.add("text-danger", "ms-5", "text-end"); break;
            case "Categoría con mayor balance":
                tDataText.appendChild(document.createTextNode(maxBalanceCat));
                totalAmount.appendChild(document.createTextNode(`$${new Intl.NumberFormat('de-DE').format(maxBalance.toString())}`)); 
                if (maxBalance > 0) {
                    totalAmount.classList.add("text-success", "ms-5", "text-end");
                } else if (maxBalance < 0) {
                    totalAmount.classList.add("text-danger", "ms-5", "text-end");
                }
                break;  
        }
        
        
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan')
        tRow.appendChild(tDataCat);
        tRow.appendChild(totalAmount);
    }
}

createSummitTable(itemsSummit);


// Sum Total Categories Table

const totalCatCard = document.createElement('div');
reportsCard.appendChild(totalCatCard);
totalCatCard.classList.add("container");



const tableHeads = ["Ganancias", "Gastos", "Balance"];

const createTotalCatsTable = (total: string, tableHeads: string[]) => {

    const totTable = document.createElement('table');
    totTable.classList.add("table", "table-borderless");
    totTable.classList.add('responsive_font')
    totalCatCard.appendChild(totTable);

    const totTableTitle = document.createElement('caption');
    totTableTitle.appendChild(document.createTextNode(`Totales por ${total}`));
    totTable.appendChild(totTableTitle);
    totTableTitle.classList.add("caption-top");

    const tableHead = document.createElement('thead');
    totTable.appendChild(tableHead);
    const titleHeader = document.createElement('th');
    titleHeader.appendChild(document.createTextNode(total));
    tableHead.appendChild(titleHeader);

    for (let head of tableHeads) {
        const titleHeader = document.createElement('th');
        titleHeader.appendChild(document.createTextNode(head));
        titleHeader.classList.add("text-end");
        tableHead.appendChild(titleHeader);
    }

    const totTableBody = document.createElement('tbody');
    totTable.appendChild(totTableBody);
    totTable.classList.add("mt-5");

    for (let category of storage.categories) {
        if (category.totalProfits > 0 || category.totalBills > 0) {
            let tRow = document.createElement('tr');
            totTable.appendChild(tRow);

            let tdCat = document.createElement('td');
            tdCat.appendChild(document.createTextNode(category.name));
            tRow.appendChild(tdCat);

            let tdProfits = document.createElement('td');  
            tdProfits.appendChild(document.createTextNode(`$${new Intl.NumberFormat('de-DE').format(category.totalProfits)}`));  
            tdProfits.classList.add("text-success", "ms-5", "text-end");
            tRow.appendChild(tdProfits);

            let tdBills = document.createElement('td');  
            tdBills.appendChild(document.createTextNode(`$${new Intl.NumberFormat('de-DE').format(category.totalBills)}`));  
            tdBills.classList.add("text-danger", "ms-5", "text-end");
            tRow.appendChild(tdBills);

            let totalAmount = document.createElement('td');
            totalAmount.appendChild(document.createTextNode(`$${new Intl.NumberFormat('de-DE').format(category.totalProfits - category.totalBills)}`)); 
            totalAmount.classList.add("text-end");
            tRow.appendChild(totalAmount);
        }
    };
}

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


const createTotalMonthTable = (total: string, tableHeads: string[]) => {

    const totTable = document.createElement('table');
    totTable.classList.add("table", "table-borderless");
    totalCatCard.appendChild(totTable);

    const totTableTitle = document.createElement('caption');
    totTableTitle.appendChild(document.createTextNode(`Totales por ${total}`));
    totTable.appendChild(totTableTitle);
    totTableTitle.classList.add("caption-top");

    const tableHead = document.createElement('thead');
    totTable.appendChild(tableHead);
    const titleHeader = document.createElement('th');
    titleHeader.appendChild(document.createTextNode(total));
    tableHead.appendChild(titleHeader);

    for (let head of tableHeads) {
        const titleHeader = document.createElement('th');
        titleHeader.appendChild(document.createTextNode(head));
        tableHead.appendChild(titleHeader);
    }

    const totTableBody = document.createElement('tbody');
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
}



const setReport = () => {
    if (storage.totalBills && storage.totalProfits) {
        imgWrapper.style.display = "none";
        operationsTitle.style.display = "none";
        operationsText.style.display = "none";
        summaryCard.classList.remove("display-none");
        
        
        createTotalCatsTable("Categoría", tableHeads); 
    }
}

setReport();
