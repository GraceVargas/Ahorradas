
const storage = JSON.parse(localStorage.getItem('storedData'));

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


// Report Summary

// Si hay una operacion ingreso y una operacion gasto


// imgWrapper.style.display = "none";
// operationsTitle.style.display = "none";
// operationsText.style.display = "none";

// // Summary Table

// const summaryCard = document.createElement('div');
// reportsCard.appendChild(summaryCard);
// summaryCard.classList.add("container");

// const operationsTable = document.createElement('table');
// operationsTable.classList.add("table", "table-borderless");
// summaryCard.appendChild(operationsTable);


// const opTableBody = document.createElement('tbody');
// operationsTable.appendChild(opTableBody);
// operationsTable.classList.add("mt-5");

// const operationsTableTitle = document.createElement('caption');
// operationsTableTitle.appendChild(document.createTextNode("Resumen"));
// operationsTableTitle.classList.add("caption-top");
// operationsTable.appendChild(operationsTableTitle);


// const itemsSummit = ["Categoría con mayor ganancia", "Categoría con mayor gasto", "Categoría con mayor balance", "Mes con mayor ganancia", "Mes con mayor gasto"];

// const createSummitTable = (items: string[]) => {


//     for (let item of items) {

//         let tRow = document.createElement('tr');
//         opTableBody.appendChild(tRow);

//         // Items list

//         let tDataItem = document.createElement('td');
//         tDataItem.appendChild(document.createTextNode(item));
//         tRow.appendChild(tDataItem);
//         let tDataCat = document.createElement('td');
//         let tDataText = document.createElement('span');
//         tDataText.appendChild(document.createTextNode('Comida'))  // linkear con categorias
//         tDataCat.appendChild(tDataText);
//         tDataText.classList.add('categorySpan')
//         tRow.appendChild(tDataCat);

//         let totalAmount = document.createElement('td');
//         totalAmount.appendChild(document.createTextNode('$100000')); // linkear con totales
//         tRow.appendChild(totalAmount);
//     }
// }

// createSummitTable(itemsSummit);

// // Sum Total Categories Table

// const totalCatCard = document.createElement('div');
// reportsCard.appendChild(totalCatCard);
// totalCatCard.classList.add("container");



// const tableHeads = ["Ganancias", "Gastos", "Balance"];

// const createTotalTable = (total: string, tableHeads: string[]) => {

//     const totTable = document.createElement('table');
//     totTable.classList.add("table", "table-borderless");
//     totalCatCard.appendChild(totTable);

//     const totTableBody = document.createElement('tbody');
//     totTable.appendChild(totTableBody);
//     totTable.classList.add("mt-5");

//     const totTableTitle = document.createElement('caption');
//     totTableTitle.appendChild(document.createTextNode(`Totales por ${total}`));
//     totTable.appendChild(totTableTitle);
//     totTableTitle.classList.add("caption-top");

//     let tRow = document.createElement('tr');
//     totTable.appendChild(tRow);
//     const tableHead = document.createElement('thead');
//     totTable.appendChild(tableHead);
//     const titleHeader = document.createElement('th');
//     titleHeader.appendChild(document.createTextNode(total));
//     tableHead.appendChild(titleHeader);

//     for (let head of tableHeads) {
//         const titleHeader = document.createElement('th');
//         titleHeader.appendChild(document.createTextNode(head));
//         tableHead.appendChild(titleHeader);

//     }

//         // hacer dinamico con categorias cargadas
//         let tdCat = document.createElement('td');
//         tdCat.appendChild(document.createTextNode("Educacion")); // linkear con categorias y mes
//         tRow.appendChild(tdCat);

//         let tdProfits = document.createElement('td');  
//         tdProfits.appendChild(document.createTextNode('100000'))  // linkear con operaciones
//         tRow.appendChild(tdProfits);
  
//         let tdBills = document.createElement('td');  
//         tdBills.appendChild(document.createTextNode('50000'))  // linkear con operaciones
//         tRow.appendChild(tdBills);

//         let totalAmount = document.createElement('td');
//         totalAmount.appendChild(document.createTextNode('$100000')); // linkear con totales
//         tRow.appendChild(totalAmount);

   
// }

// createTotalTable("Categoria", tableHeads); // invocar si hay un gasto y una ganancia cargada 


// createTotalTable("Mes", tableHeads); // invocar si hay un gasto y una ganancia cargada 

