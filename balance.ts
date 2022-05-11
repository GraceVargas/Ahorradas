const container = document.createElement('div');
container.classList.add("container","p-5"); 
const rowWrapper = document.createElement('div');
rowWrapper.classList.add("row");
container.appendChild(rowWrapper);
main.appendChild(container);

//Card Balance

const cardBalance = document.createElement('div');
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card-balance","card","p-3"); //, "mt-2", "col-4"

const balanceTitle = document.createElement('h2');
balanceTitle.appendChild(document.createTextNode("Balance"));
balanceTitle.classList.add("fw-bold","mb-5", "text-dark","text-opacity-75");
cardBalance.appendChild(balanceTitle);

const tableBalance = document.createElement('table');
tableBalance.classList.add("table","table-borderless");
cardBalance.appendChild(tableBalance);
const tbody = document.createElement('tbody');
tableBalance.appendChild(tbody);

const trProfits = document.createElement('tr');
tbody.appendChild(trProfits);
const tdProfits = document.createElement('td');
trProfits.appendChild(tdProfits);
tdProfits.appendChild(document.createTextNode("Ganancias"));
tdProfits.classList.add("fs-5");
const tdNumberProfits = document.createElement('td');
trProfits.appendChild(tdNumberProfits);
const spanProfit = document.createElement('span');
spanProfit.appendChild(document.createTextNode("+$0"));
spanProfit.classList.add("text-success");
tdNumberProfits.appendChild(spanProfit);

const trBills = document.createElement('tr');
tbody.appendChild(trBills);
const tdBills = document.createElement('td');
trBills.appendChild(tdBills);
tdBills.appendChild(document.createTextNode("Gastos"))
tdBills.classList.add("fs-5");
const tdNumberBills = document.createElement('td');
const spanBills = document.createElement('span');
spanBills.appendChild(document.createTextNode("-$0"));
spanBills.classList.add("text-danger");
trBills.appendChild(tdNumberBills);
tdNumberBills.appendChild(spanBills);

const trSum = document.createElement('tr');
tbody.appendChild(trSum);
const tdSum = document.createElement('td');
trSum.appendChild(tdSum);
tdSum.appendChild(document.createTextNode("Total"));
tdSum.classList.add("fs-4");
const tdNumberSum = document.createElement('td');
trSum.appendChild(tdNumberSum);
const spanSum = document.createElement('span');
spanSum.appendChild(document.createTextNode(" $0"));
spanSum.classList.add("fw-bold");
tdNumberSum.appendChild(spanSum);

//Card Filters

const cardFilters=document.createElement('div');
cardFilters.classList.add("card-filters","card","p-3","mt-3");

const cardTitle = document.createElement('h3');
cardTitle.appendChild(document.createTextNode("Filtros"));
cardTitle.classList.add("fw-bolder","text-dark","text-opacity-75");
cardFilters.appendChild(cardTitle);

const hideFilters = document.createElement('a'); 
hideFilters.setAttribute('role', "button");
hideFilters.appendChild(document.createTextNode("Ocultar filtros"));
hideFilters.classList.add("btn","btn-link","ms-5","mt-1");

const boxTitleLink = document.createElement('div');
boxTitleLink.classList.add("d-flex");
boxTitleLink.appendChild(cardTitle);
boxTitleLink.appendChild(hideFilters);
cardFilters.appendChild(boxTitleLink);

const column = document.createElement('div');
column.classList.add("col-4","gx-5");
column.appendChild(cardBalance);
column.appendChild(cardFilters);
rowWrapper.appendChild(column);

//Card Operation

const cardOperation = document.createElement('div');
cardOperation.classList.add("card-operation","card","p-3","col-7");
const boxTitleBtn= document.createElement('div');
boxTitleBtn.classList.add("d-flex","justify-content-between");

const titleOperation = document.createElement('h3');
titleOperation.appendChild(document.createTextNode("Operaciones"));
titleOperation.classList.add("fw-bold", "text-dark","fs-4","text-opacity-75");
boxTitleBtn.appendChild(titleOperation);

const btnNewOperation = document.createElement('button');
btnNewOperation.appendChild(document.createTextNode("+ Nueva operación"));
btnNewOperation.classList.add("btn", "btn-success");
btnNewOperation.setAttribute('type', "button");
boxTitleBtn.appendChild(btnNewOperation);
cardOperation.appendChild(boxTitleBtn);

const imgOperation = document.createElement('img');
imgOperation.setAttribute('src',"./assets/undraw_discount_d4bd.png");
imgOperation.setAttribute('alt', "illustracion");
cardOperation.appendChild(imgOperation);

const textNoResults = document.createElement('p');
textNoResults.appendChild(document.createTextNode("Sin resultados"));
textNoResults.classList.add("fs-5","text-center","fw-bold","text-secondary");
cardOperation.appendChild(textNoResults);

const textAddOperations = document.createElement('p');
textAddOperations.appendChild(document.createTextNode("Cambía los filtros o agregá operaciones"));
textAddOperations.classList.add("text-center");
cardOperation.appendChild(textAddOperations);
rowWrapper.appendChild(cardOperation);



type Filters ={
    title:string[],
    type:string[],
    category:string[],
    sortBy: string[]
}
const filters ={
    title: ["Tipo","Categoría","Desde","Ordenar por"],
    type : ["Todos","Gasto","Ganancias"],
    category :["Todas"],
    sortBy :["Mas reciente","Menos reciente","Mayor monto","Menor monto","A/Z","Z/A"]
}


const createForm =(array: Filters)=>{
    const form = document.createElement('form');
    cardFilters.appendChild(form);
    filters.title.forEach((elem)=>{
        if (elem != "Desde"){
            const label = document.createElement('label');
            label.classList.add("fw-bold","mb-2");
            label.setAttribute('for',elem);
            label.appendChild(document.createTextNode(elem));
            form.appendChild(label);
            const select = document.createElement('select');
            select.classList.add("form-select","mb-3");
            switch (elem) {
                case "Tipo":
                    filters.type.forEach((type)=>{
                        const option = document.createElement('option');
                        option.appendChild(document.createTextNode(type));
                        option.value = type;
                        select.appendChild(option);
            
                    })
                    
                    break;
                case "Categoría":
                    filters.category.forEach((category)=>{
                        const option = document.createElement('option');
                        option.appendChild(document.createTextNode(category));
                        option.value = category;
                        select.appendChild(option);
            
                    });
                    break;
                case "Ordenar por":
                    filters.sortBy.forEach((order)=>{
                        const option = document.createElement('option');
                        option.appendChild(document.createTextNode(order));
                        option.value = order;
                        select.appendChild(option);
            
                    }); break;  
            
                default:
                    break;
            }
            form.appendChild(select);
        }
        else if (elem === "Desde"){
           const input = document.createElement('input');
           input.classList.add("form-control","mb-3");
            input.setAttribute('type', "date");
            input.value = Date.now().toString(); 
            const label = document.createElement('label');
            label.classList.add("fw-bold","mb-2");
            label.setAttribute('for',elem);
            label.appendChild(document.createTextNode(elem));
            form.appendChild(label);
            form.appendChild(input);
        }       

    })
    


}

createForm(filters);








