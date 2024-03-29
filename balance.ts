
let storage = JSON.parse(localStorage.getItem("storedData"));
let categoryNames = ["Todas"];
storage.categories.forEach((category) => {
  categoryNames.push(category.name)
});


type Filters = {
  title: string[];
  type: string[];
  category: string[];
  sortBy: string[];
};
const filters = {
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
  ],
};

const container = document.createElement("div")
container.classList.add("p-5","container","container-sm")
const rowWrapper = document.createElement("div")
rowWrapper.classList.add("row");
container.appendChild(rowWrapper);
main.appendChild(container);

//Card Balance

const cardBalance = document.createElement("div")
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card-balance", "card", "p-3", "shadow")//,"col-md-8","order-md-1"

const balanceTitle = document.createElement("h2")
balanceTitle.appendChild(document.createTextNode("Balance"));


balanceTitle.classList.add("fw-bold", "mb-5", "text-dark", "text-opacity-75");
cardBalance.appendChild(balanceTitle);

const tableBalance = document.createElement("table");
tableBalance.classList.add("table", "table-borderless");
cardBalance.appendChild(tableBalance);
const tbody = document.createElement("tbody");
tableBalance.appendChild(tbody);

const trProfits = document.createElement("tr");
tbody.appendChild(trProfits);
const tdProfits = document.createElement("td");
trProfits.appendChild(tdProfits);
tdProfits.appendChild(document.createTextNode("Ganancias"));
tdProfits.classList.add("fs-5");
const tdNumberProfits = document.createElement("td");
tdNumberProfits.classList.add("ps-3", "text-end");
trProfits.appendChild(tdNumberProfits);
const spanProfit = document.createElement("span");
spanProfit.appendChild(document.createTextNode(`+$${new Intl.NumberFormat('de-DE').format(storage.totalProfits)}`));
spanProfit.classList.add("text-success", "ms-5");
tdNumberProfits.appendChild(spanProfit);

const trBills = document.createElement("tr");
tbody.appendChild(trBills);
const tdBills = document.createElement("td");
trBills.appendChild(tdBills);
tdBills.appendChild(document.createTextNode("Gastos"));
tdBills.classList.add("fs-5");
const tdNumberBills = document.createElement("td");
tdNumberBills.classList.add("ps-3", "text-end");
const spanBills = document.createElement("span");
spanBills.appendChild(document.createTextNode(`-$${new Intl.NumberFormat('de-DE').format(storage.totalBills)}`));
spanBills.classList.add("text-danger", "ms-5");
trBills.appendChild(tdNumberBills);
tdNumberBills.appendChild(spanBills);



const trSum = document.createElement("tr");
tbody.appendChild(trSum);
const tdSum = document.createElement("td");
trSum.appendChild(tdSum);
tdSum.appendChild(document.createTextNode("Total"));
tdSum.classList.add("fs-4","text-wrap");
const tdNumberSum = document.createElement("td");
tdNumberSum.classList.add("ps-3", "pt-3", "text-end");
trSum.appendChild(tdNumberSum);
const spanSum = document.createElement("span");
spanSum.appendChild(document.createTextNode(`$${new Intl.NumberFormat('de-DE').format(storage.totalProfits - storage.totalBills)}`)); 
spanSum.classList.add("fw-bold", "ms-5");
tdNumberSum.appendChild(spanSum);

//Card Filters

const cardFilters = document.createElement("div");
cardFilters.classList.add("card-filters", "card", "p-3", "mt-3", "shadow","col-lg-12","order-md-2");

const cardTitle = document.createElement("h3");
cardTitle.appendChild(document.createTextNode("Filtros"));
cardTitle.classList.add("fw-bolder", "text-dark", "text-opacity-75");
cardFilters.appendChild(cardTitle);

const hideFilters = document.createElement("a");
hideFilters.setAttribute("role", "button");
hideFilters.appendChild(document.createTextNode("Ocultar filtros"));
hideFilters.classList.add("btn", "btn-link", "ms-5", "mt-1");
const btnShowFilters = document.createElement("a");
btnShowFilters.setAttribute("role", "button");
btnShowFilters.appendChild(document.createTextNode("Mostrar filtros"));
btnShowFilters.classList.add("btn", "btn-link", "ms-5", "mt-1", "display-none");

const boxTitleLink = document.createElement("div");
boxTitleLink.classList.add("d-flex");
boxTitleLink.appendChild(cardTitle);
boxTitleLink.appendChild(hideFilters);
boxTitleLink.appendChild(btnShowFilters);
cardFilters.appendChild(boxTitleLink);

const column = document.createElement("div");
column.classList.add("col-md-4", "col-sm-12","gx-5");
column.appendChild(cardBalance);
column.appendChild(cardFilters);
rowWrapper.appendChild(column);
const form = document.createElement("form");
cardFilters.appendChild(form);



filters.title.forEach((elem) => {
  if (elem != "Desde") {
    const label = document.createElement("label")
    label.classList.add("fw-bold", "mb-2")
    label.setAttribute("for", elem);


    label.appendChild(document.createTextNode(elem));
    form.appendChild(label);
    const select = document.createElement("select");
    select.classList.add("form-select", "mb-3");
    select.setAttribute('id', elem);
    select.setAttribute('name', elem);

    switch (elem) {
      case "Tipo":
        filters.type.forEach((type) => {
          const option = document.createElement("option");
          option.appendChild(document.createTextNode(type));
          option.value = type;  
          select.appendChild(option);
        });

        break;
      case "Categoría":
        filters.category.forEach((category) => {
          const option = document.createElement("option")
          option.appendChild(document.createTextNode(category))
          option.value = category;
          select.appendChild(option)
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
    form.appendChild(select);

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

hideFilters.addEventListener("click", () => {
  form.classList.add("display-none")
  cardFilters.classList.add("card-hide")
  hideFilters.classList.add("display-none")
  btnShowFilters.classList.add("d-flex")
});
btnShowFilters.addEventListener("click", () => {
  form.classList.remove("display-none")
  cardFilters.classList.remove("card-hide")
  btnShowFilters.classList.remove("d-flex")
  hideFilters.classList.remove("display-none")
});


// Filters events for Table

const filterType = document.getElementById('Tipo') as HTMLSelectElement;
const filterCategory = document.getElementById('Categoría') as HTMLSelectElement;

const checkFilters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  let selectedType = urlParams.get('type');
  let selectedCategory = urlParams.get('category');

  if (selectedType) {
    filterType.value = selectedType;
  }

   if (selectedCategory) {
    filterCategory.value = selectedCategory;
  }
}

filterType.addEventListener('change', (e) => {

  const url = new URL(window.location.href);
  let params = url.searchParams;

  if (e.target.value === "Todos") {
    params.delete('type')
    let nueva_url = url.toString();
    window.location.href = nueva_url
    
  } else {
    params.set('type', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString();
  }
})


filterCategory.addEventListener('change', (e) => {
  const url = new URL(window.location.href);
  let params = url.searchParams;

   if (e.target.value === "Todas") {
    params.delete('category')
    let nueva_url = url.toString();
    window.location.href = nueva_url
  } else {
  params.set('category', e.target.value);
  window.location.href = window.location.pathname + '?' + params.toString();
  }
})

  checkFilters()

 const orderBy = document.getElementById('Ordenar por') as HTMLSelectElement;
 orderBy.style.display = "none";
//   orderBy.addEventListener('change', (e) => {
//   const params = new URLSearchParams(window.location.search);
//   params.set('date', e.target.value);
//   window.location.href = window.location.pathname + '?' + params.toString(); 
// })


//Card Operation

const columnOperation = document.createElement("div");
columnOperation.classList.add("col-lg-7");
const cardOperation = document.createElement("div");
columnOperation.appendChild(cardOperation);
cardOperation.classList.add("card-operation", "card", "p-3", "shadow","order-md-3");
const boxTitleBtn = document.createElement("div");
boxTitleBtn.classList.add("d-flex", "justify-content-between");

const titleOperation = document.createElement("h3");
titleOperation.appendChild(document.createTextNode("Operaciones"));
titleOperation.classList.add("fw-bold", "text-dark", "fs-4", "text-opacity-75");
boxTitleBtn.appendChild(titleOperation);

const btnNewOperation = document.createElement("button");
btnNewOperation.appendChild(document.createTextNode("+ Nueva operación"));
btnNewOperation.classList.add("btn", "btn-success");
btnNewOperation.setAttribute("type", "button");
btnNewOperation.setAttribute("id", "btnNewOperation");
boxTitleBtn.appendChild(btnNewOperation);
cardOperation.appendChild(boxTitleBtn);

const btnNewOp_responsive = document.createElement("button");
btnNewOp_responsive.appendChild(document.createTextNode("+"));
btnNewOp_responsive.classList.add("btn", "btn-success");
btnNewOp_responsive.setAttribute("type", "button");
btnNewOp_responsive.setAttribute("id", "btnNewOp_responsive");
btnNewOp_responsive.style.display = "none";
boxTitleBtn.appendChild(btnNewOp_responsive);
cardOperation.appendChild(boxTitleBtn);


const imgOperation = document.createElement("img");
imgOperation.setAttribute("src", "./assets/undraw_discount_d4bd.png");
imgOperation.setAttribute("alt", "illustracion");
cardOperation.appendChild(imgOperation);

const textNoResults = document.createElement("p");
textNoResults.appendChild(document.createTextNode("Sin resultados"));
textNoResults.classList.add(
  "fs-4",
  "text-center",
  "text-dark",
  "fw-bold",
  "text-opacity-75"
);
cardOperation.appendChild(textNoResults);

const textAddOperations = document.createElement("p");
textAddOperations.appendChild(
  document.createTextNode("Cambiá los filtros o agregá operaciones")
);
textAddOperations.classList.add("text-center")
cardOperation.appendChild(textAddOperations)
rowWrapper.appendChild(columnOperation)

//Card Nueva operación

const wrapperNewOp = document.createElement("div");
const cardNewOperation = document.createElement("div");
cardNewOperation.classList.add( "display-none","card-newOp","card","p-3","mt-3","shadow");
wrapperNewOp.appendChild(cardNewOperation);
container.appendChild(wrapperNewOp);

// Title

const titleNewOp = document.createElement("h2");
titleNewOp.appendChild(document.createTextNode("Nueva operación"));
titleNewOp.classList.add("fw-bolder", "fs-1");
cardNewOperation.appendChild(titleNewOp);


// Form 
const wrapperFormNewOp = document.createElement("div");
wrapperFormNewOp.classList.add("p-1", "mb-2", "mt-4");
cardNewOperation.appendChild(wrapperFormNewOp);
const boxButton = document.createElement("div");
boxButton.classList.add("d-flex", "justify-content-end", "mt-5");


// Function to create Form

type FormControls = {
  label: string,
  type: string,
  id: string,
}

const formControls: FormControls[] = [
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

type NewOp = {
  description: string,
  type: string,
  category: string,
  date : any,  
  amount: number,
}


  const formNewOp = document.createElement("form");
  filters.type.shift();
  const createForm = () => {
    formNewOp.innerHTML = "";
    wrapperFormNewOp.appendChild(formNewOp);

    formControls.forEach((formControl) => {
      const title = document.createElement("label");
      title.appendChild(document.createTextNode(formControl.label));
      title.classList.add("fw-bold", "mb-2", "mt-1");
      title.setAttribute("for", formControl.label);
      formNewOp.appendChild(title);

      if (formControl.type === "select") {
        const select = document.createElement("select");

        select.classList.add("form-select");
        formNewOp.appendChild(select);
      
        if (formControl.label === "Tipo") {
          
          filters.type.forEach((type) => {
          
            const option = document.createElement("option");
            option.appendChild(document.createTextNode(type));
            select.setAttribute('name', 'tipo');
            select.setAttribute('id', formControl.id);
            // option.value = type;
            select.appendChild(option);
          });
        } else if (formControl.label === "Categoria") {

          select.setAttribute('name', 'categories');
          select.setAttribute('id', formControl.id);
          for (const prop of categoryNames) {
            const option = document.createElement("option");
            option.appendChild(document.createTextNode(prop));
            select.appendChild(option);
          }
        }
      } else {
        const controlType = document.createElement("input");
        formControl.type === "number" ? controlType.value = 0 : controlType.value = "";
        controlType.classList.add("form-control");
        controlType.setAttribute("type", formControl.type);
        controlType.setAttribute("id", formControl.id);
        formNewOp.appendChild(controlType);

      }
    });
  }

  const btnCancel = document.createElement("button");
  btnCancel.classList.add("btn", "btn-light", "me-2");
  btnCancel.appendChild(document.createTextNode("Cancelar"));
  const btnAdd = document.createElement("button");
  btnAdd.classList.add("btn");
  btnAdd.setAttribute('type', 'submit');
  btnAdd.appendChild(document.createTextNode("Agregar"));
  btnAdd.classList.add("btn", "btn-success");
  boxButton.appendChild(btnCancel);
  boxButton.appendChild(btnAdd);



  btnAdd.addEventListener("click", () => {
    const newOp: NewOp = {
      description: "",
      type: "",
      category: "",
      date: Date,
      amount: 0,
    };

    imgOperation.classList.add("display-none");
    textNoResults.classList.add("display-none");
    textAddOperations.classList.add("display-none");
    rowWrapper.classList.remove("display-none");
    cardNewOperation.classList.add("display-none");
    cardOperation.style.minHeight = "213px";
  

    const description = document.getElementById('description-select') as HTMLSelectElement;
    newOp.description = description.value;
      
    const selectType = document.getElementById('type-select') as HTMLSelectElement;
    newOp.type = selectType.options[selectType.selectedIndex].value;

    const selectCategory = document.getElementById('category-select') as HTMLSelectElement;
    newOp.category = selectCategory.options[selectCategory.selectedIndex].value;

    const amount = document.getElementById('amount-select') as HTMLInputElement;
    if (newOp.type === "Gasto") {
      newOp.amount = parseInt(`-${amount.value}`);
      storage.totalBills += parseInt(amount.value); 
 
      for (let category of storage.categories) {        
        if (newOp.category === category.name) {                 
          category.totalBills += parseInt(amount.value);
        }
      }
      
      spanBills.innerText = `-${storage.totalBills}`;
      spanSum.innerText = `${storage.totalProfits - storage.totalBills}`;
    } else {
      newOp.amount = parseInt(`+${amount.value}`);
      storage.totalProfits += parseInt(amount.value); 

      for (let category of storage.categories) {
      if (newOp.category === category.name) {
        category.totalProfits += parseInt(amount.value);
      }
    }

      spanProfit.innerText = `+${storage.totalProfits}`;
      spanSum.innerText = `${storage.totalProfits - storage.totalBills}`;
    }

    const date = document.getElementById('date-select') as HTMLInputElement;
    newOp.date = date.value; //formatDate

    storage.operations.push(newOp);
    
    localStorage.setItem('storedData', JSON.stringify(storage));
    
    createOperationTable(operationLabels);
  });
  
  
  btnCancel.addEventListener("click", () => {
    cardNewOperation.classList.add("display-none");
    rowWrapper.classList.remove("display-none");
  });

  


// Function to create table with Operations

const operationLabels = [
  "Descripción",
  "Categoria",
  "Fecha",
  "Monto",
  "Acciones",
]; 

const containerTable = document.createElement("div"); 
containerTable.classList.add("table-responsive");
cardOperation.appendChild(containerTable);
const operationTable = document.createElement("table");
operationTable.setAttribute('id', 'operationTable');
const operationTb = document.createElement("tbody");
operationTb.setAttribute('id', 'operationTBody');
operationTable.classList.add("table", "table-borderless","mt-5");

 
const createOperationTable = (tableHeads: string[]) => {


    containerTable.appendChild(operationTable);
    operationTable.appendChild(operationTb);

    let tRow = document.createElement("tr");
    operationTable.appendChild(tRow);
    
    const tableHead = document.createElement("thead")
    operationTable.appendChild(tableHead);

    operationLabels.forEach(tablehead => {
        const titleHeader = document.createElement("th");
        titleHeader.appendChild(document.createTextNode(tablehead));
        tableHead.appendChild(titleHeader);
    })
    

    operationTable.innerHTML = "";

    let storage = JSON.parse(localStorage.getItem("storedData"));
    let operations = storage.operations;

    const params = new URLSearchParams(window.location.search);
    let typeParams = params.get('type');
    let categoryParams = params.get('category');
    

    if (typeParams && !categoryParams) {
      operations = operations.filter(op => op.type === typeParams);
    } else if (categoryParams && !typeParams) {
      operations = operations.filter(op => op.category === categoryParams);
    } else if (typeParams && categoryParams) {
      operations = operations.filter(op => op.type === typeParams && op.category === categoryParams);
    }


   operations.forEach(operation => {
     
    let tRow = document.createElement("tr");
    tRow.setAttribute('class', 'tRow');
    let tdCat = document.createElement("td");
    tdCat.appendChild(document.createTextNode(operation.description));
    tdCat.classList.add("text-secondary","fw-bold") 
    tRow.appendChild(tdCat);
    let tdProfits = document.createElement("td");
    tdProfits.appendChild(document.createTextNode(operation.category));
    tdProfits.classList.add("categorySpan") 
    tdProfits.style.backgroundColor= "white"
    tRow.appendChild(tdProfits);
    let tdBills = document.createElement("td");
    tdBills.appendChild(document.createTextNode(operation.date)); 
    tdBills.style.whiteSpace = "nowrap";
    tRow.appendChild(tdBills);
    let totalAmount = document.createElement("td");
    totalAmount.classList.add("text-end");
    totalAmount.appendChild(document.createTextNode(`$${new Intl.NumberFormat('de-DE').format(operation.amount)}`)); 
    tRow.appendChild(totalAmount);
    operationTable.appendChild(tRow);

    if (operationLabels[4] === "Acciones") {
      let tdAction = document.createElement("td");
      tdAction.classList.add("text-center");
      tRow.appendChild(tdAction);
      const boxBtn = document.createElement("div");
      boxBtn.classList.add("btn-group-vertical");
      tdAction.appendChild(boxBtn);
      const delOp = document.createElement("button")
      delOp.setAttribute("id", "delBtn")
      delOp.classList.add("btn", "btn-link")
      delOp.style.fontSize = "12px"
      delOp.appendChild(document.createTextNode("Eliminar"))
      boxBtn.appendChild(delOp);


      delOp.addEventListener('click', () => {
           
        let index = operations.indexOf(operation);
        storage.operations.splice(index, 1);

        if (operation.type === "Gasto") {
          storage.totalBills += parseInt(operation.amount); 
     
          for (let category of storage.categories) {        
            if (operation.category === category.name) {                 
              category.totalBills += parseInt(operation.amount);
            }
          }

        } else {
          storage.totalProfits -= parseInt(operation.amount); 
    
          for (let category of storage.categories) {
            if (operation.category === category.name) {
              category.totalProfits -= parseInt(operation.amount);
            }
          }
        }


        localStorage.setItem('storedData', JSON.stringify(storage));
        location.reload();
    })

    }
  })
}

const setTable = () => {
  let storage = JSON.parse(localStorage.getItem('storedData'));

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
}
setTable();

// Events

btnNewOperation.addEventListener("click", (e) => {
  e.preventDefault();
  cardNewOperation.classList.remove("display-none");
  rowWrapper.classList.add("display-none");
  wrapperNewOp.classList.add("d-flex", "justify-content-center");
  cardNewOperation.appendChild(boxButton);
  createForm();
})

btnNewOp_responsive.addEventListener("click", (e) => {
  e.preventDefault();
  cardNewOperation.classList.remove("display-none");
  rowWrapper.classList.add("display-none");
  wrapperNewOp.classList.add("d-flex", "justify-content-center");
  cardNewOperation.appendChild(boxButton);
  createForm();
})


