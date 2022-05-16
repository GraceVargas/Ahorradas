
// Container

const containerReports = document.createElement('div');
containerReports.classList.add("container-xl", "px-4", "d-flex", "justify-content-center");
document.body.appendChild(containerReports); // borrar
// main.appendChild(container)


// Card 

const reportsCard = document.createElement('div');
reportsCard.classList.add("border");
reportsCard.classList.add("centralCard");
reportsCard.setAttribute("id", "reports");
reportsCard.style.minHeight = "90vh";
containerReports.appendChild(reportsCard); // borrar
// main.appendChild(categoriesCard)


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


// Report Summit

// Si hay una operacion ingreso y una operacion gasto


imgWrapper.style.display = "none";
operationsTitle.style.display = "none";
operationsText.style.display = "none";

const operationsTable = document.createElement('table');
operationsTable.classList.add("table", "table-borderless");
reportsCard.appendChild(operationsTable);
const tableBody = document.createElement('tbody');
operationsTable.appendChild(tableBody);
operationsTable.classList.add("mt-5");

const categories = JSON.parse(localStorage.getItem('storedCategories'));

const itemsSummit = ["Categoría con mayor ganancia", "Categoría con mayor gasto", "Categoría con mayor balance", "Mes con mayor ganancia", "Mes con mayor gasto"];



const createSummitTable = (items) => {

    for (let item of items) {

        let tRow = document.createElement('tr');
        tableBody.appendChild(tRow);

        // Items list

        let tDataItem = document.createElement('td');
        tDataItem.appendChild(document.createTextNode(item));
        tableBody.appendChild(tDataItem);
        let tDataCat = document.createElement('td');
        let tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode('Comida'))  // linkear con categorias
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan')
        tRow.appendChild(tDataCat);
    }
}

createSummitTable(itemsSummit);
