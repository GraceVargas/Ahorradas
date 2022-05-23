
let storage = JSON.parse(localStorage.getItem('storedData'));

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
reportsTitle.classList.add("cardTitle");   // para sumar el style del h2 de categorias y reportes

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

type Category = {
    id?: number,
    name: string,
    totalBills?: number,
    totalProfits?: number,
};

let maxProfitCat: Category[];
let maxBillsCat: Category[];

const setTotals = () => {

    for (let category of storage.categories) {
        
        let maxProfitCat = category;
        let maxBillsCat = category;

        if (category.totalProfits > maxProfitCat.totalProfits) { 
            maxProfitCat.totalProfits = category.totalProfits; 
            maxProfitCat.name = category.name;
        }

        if (category.totalBills > maxBillsCat.total) { maxBillsCat = category; }
    };
}

setTotals();
console.log(maxBillsCat, maxProfitCat);



const itemsSummit = ["Categoría con mayor ganancia", "Categoría con mayor gasto", "Categoría con mayor balance", "Mes con mayor ganancia", "Mes con mayor gasto"];

const createSummitTable = (items: string[]) => {


    for (let item of items) {

        let tRow = document.createElement('tr');
        opTableBody.appendChild(tRow);

        // Items list

        let tDataItem = document.createElement('td');
        tDataItem.appendChild(document.createTextNode(item));
        tRow.appendChild(tDataItem);
        let tDataCat = document.createElement('td');
        let tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode('Comida'))  // linkear con categorias
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan')
        tRow.appendChild(tDataCat);

        let totalAmount = document.createElement('td');
        totalAmount.appendChild(document.createTextNode('$100000')); // linkear con totales
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

    for (let category of storage.categories) {
        if (category.totalProfits > 0 || category.totalBills > 0) {
            let tRow = document.createElement('tr');
            totTable.appendChild(tRow);

            let tdCat = document.createElement('td');
            tdCat.appendChild(document.createTextNode(category.name));
            tRow.appendChild(tdCat);

            let tdProfits = document.createElement('td');  
            tdProfits.appendChild(document.createTextNode(category.totalProfits));  
            tRow.appendChild(tdProfits);

            let tdBills = document.createElement('td');  
            tdBills.appendChild(document.createTextNode(category.totalBills));  
            tRow.appendChild(tdBills);

            let totalAmount = document.createElement('td');
            totalAmount.appendChild(document.createTextNode(`${category.totalProfits - category.totalBills}`)); 
            tRow.appendChild(totalAmount);
        }
    };
}

// Sum Total Month Table

type TotalDate = {
    period: string,
    bills: number,
    profits: number,
}

const totalDates: TotalDate[] = [];

storage.operations.forEach(operation => {

    let newPeriod: TotalDate = {
        period: "",
        bills: 0,
        profits: 0,
    };
    let date = operation.date.slice(0, 7);
    newPeriod.period = date;
    totalDates.push(newPeriod);
});


storage.operations.forEach(operation => {
    let date = operation.date.slice(0, 7);
    for (let totalDate of totalDates) {
        if (totalDate.period === date) {
            switch (operation.type) {
                case "Ganancias": totalDate.profits += operation.amount;
                break;
                case "Gasto": totalDate.bills += -operation.amount;
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

  

    for (let totalDate of totalDates) {
        
        let tRow = document.createElement('tr');
        totTable.appendChild(tRow);

        let tdCat = document.createElement('td');
        tdCat.appendChild(document.createTextNode(totalDate.period));
        tRow.appendChild(tdCat);

        let tdProfits = document.createElement('td');  
        tdProfits.appendChild(document.createTextNode(`${totalDate.profits}`));  
        tRow.appendChild(tdProfits);

        let tdBills = document.createElement('td');  
        tdBills.appendChild(document.createTextNode(`${totalDate.bills}`));  
        tRow.appendChild(tdBills);

        let totalAmount = document.createElement('td');
        totalAmount.appendChild(document.createTextNode(`${totalDate.profits - totalDate.bills}`)); 
        tRow.appendChild(totalAmount);
    };
}



const setReport = () => {
    if (storage.totalBills && storage.totalProfits) {
        imgWrapper.style.display = "none";
        operationsTitle.style.display = "none";
        operationsText.style.display = "none";
        summaryCard.classList.remove("display-none");
        
        
        createTotalCatsTable("Categoria", tableHeads); 
        createTotalMonthTable("Mes", tableHeads); 
    }
}

setReport();
