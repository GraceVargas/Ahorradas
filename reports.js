// Container
var containerReports = document.createElement('div');
containerReports.classList.add("container-xl", "px-4", "d-flex", "justify-content-center");
document.body.appendChild(containerReports); // borrar
// main.appendChild(container)
// Card 
var reportsCard = document.createElement('div');
reportsCard.classList.add("border");
reportsCard.classList.add("centralCard");
reportsCard.setAttribute("id", "reports");
reportsCard.style.minHeight = "90vh";
containerReports.appendChild(reportsCard); // borrar
// main.appendChild(categoriesCard)
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
// Report Summit
// Si hay una operacion ingreso y una operacion gasto
imgWrapper.style.display = "none";
operationsTitle.style.display = "none";
operationsText.style.display = "none";
var operationsTable = document.createElement('table');
operationsTable.classList.add("table", "table-borderless");
reportsCard.appendChild(operationsTable);
var tableBody = document.createElement('tbody');
operationsTable.appendChild(tableBody);
operationsTable.classList.add("mt-5");
var categories = JSON.parse(localStorage.getItem('storedCategories'));
var itemsSummit = ["Categoría con mayor ganancia", "Categoría con mayor gasto", "Categoría con mayor balance", "Mes con mayor ganancia", "Mes con mayor gasto"];
var createSummitTable = function (items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var tRow = document.createElement('tr');
        tableBody.appendChild(tRow);
        // Items list
        var tDataItem = document.createElement('td');
        tDataItem.appendChild(document.createTextNode(item));
        tableBody.appendChild(tDataItem);
        var tDataCat = document.createElement('td');
        var tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode('Comida')); // linkear con categorias
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan');
        tRow.appendChild(tDataCat);
    }
};
createSummitTable(itemsSummit);
