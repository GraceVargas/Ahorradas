let storage = JSON.parse(localStorage.getItem("storedData"))
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
container.classList.add("p-5","container")
const rowWrapper = document.createElement("div")
rowWrapper.classList.add("row");
container.appendChild(rowWrapper);
main.appendChild(container);

//Card Balance

const cardBalance = document.createElement("div")
rowWrapper.appendChild(cardBalance);
cardBalance.classList.add("card-balance", "card", "p-3", "shadow")

const balanceTitle = document.createElement("h2")
balanceTitle.appendChild(document.createTextNode("Balance"));
balanceTitle.classList.add("fw-bold", "mb-5", "text-dark", "text-opacity-75")
cardBalance.appendChild(balanceTitle)

const tableBalance = document.createElement("table")
tableBalance.classList.add("table", "table-borderless")
cardBalance.appendChild(tableBalance)
const tbody = document.createElement("tbody")
tableBalance.appendChild(tbody)

const trProfits = document.createElement("tr")
tbody.appendChild(trProfits)
const tdProfits = document.createElement("td")
trProfits.appendChild(tdProfits)
tdProfits.appendChild(document.createTextNode("Ganancias"))
tdProfits.classList.add("fs-5")
const tdNumberProfits = document.createElement("td")
tdNumberProfits.classList.add("ps-5")
trProfits.appendChild(tdNumberProfits)
const spanProfit = document.createElement("span")
spanProfit.appendChild(document.createTextNode("+$0"))
spanProfit.classList.add("text-success", "ms-5")
tdNumberProfits.appendChild(spanProfit)

const trBills = document.createElement("tr")
tbody.appendChild(trBills)
const tdBills = document.createElement("td")
trBills.appendChild(tdBills)
tdBills.appendChild(document.createTextNode("Gastos"))
tdBills.classList.add("fs-5")
const tdNumberBills = document.createElement("td")
tdNumberBills.classList.add("ps-5")
const spanBills = document.createElement("span")
spanBills.appendChild(document.createTextNode("-$0"))
spanBills.classList.add("text-danger", "ms-5")
trBills.appendChild(tdNumberBills)
tdNumberBills.appendChild(spanBills)

const trSum = document.createElement("tr")
tbody.appendChild(trSum)
const tdSum = document.createElement("td")
trSum.appendChild(tdSum)
tdSum.appendChild(document.createTextNode("Total"))
tdSum.classList.add("fs-4")
const tdNumberSum = document.createElement("td")
tdNumberSum.classList.add("ps-5", "pt-3")
trSum.appendChild(tdNumberSum)
const spanSum = document.createElement("span")
spanSum.appendChild(document.createTextNode("$0"))
spanSum.classList.add("fw-bold", "ms-5")
tdNumberSum.appendChild(spanSum)

//Card Filters

const cardFilters = document.createElement("div")
cardFilters.classList.add("card-filters", "card", "p-3", "mt-3", "shadow")

const cardTitle = document.createElement("h3")
cardTitle.appendChild(document.createTextNode("Filtros"))
cardTitle.classList.add("fw-bolder", "text-dark", "text-opacity-75")
cardFilters.appendChild(cardTitle)

const hideFilters = document.createElement("a")
hideFilters.setAttribute("role", "button")
hideFilters.appendChild(document.createTextNode("Ocultar filtros"))
hideFilters.classList.add("btn", "btn-link", "ms-5", "mt-1")
const btnShowFilters = document.createElement("a")
btnShowFilters.setAttribute("role", "button")
btnShowFilters.appendChild(document.createTextNode("Mostrar filtros"))
btnShowFilters.classList.add("btn", "btn-link", "ms-5", "mt-1", "display-none")

const boxTitleLink = document.createElement("div")
boxTitleLink.classList.add("d-flex")
boxTitleLink.appendChild(cardTitle)
boxTitleLink.appendChild(hideFilters)
boxTitleLink.appendChild(btnShowFilters)
cardFilters.appendChild(boxTitleLink)

const column = document.createElement("div")
column.classList.add("col-sm-4", "gx-5")
column.appendChild(cardBalance)
column.appendChild(cardFilters)
rowWrapper.appendChild(column)
const form = document.createElement("form")
cardFilters.appendChild(form)
const createSelect = (array: Filters) => {
  filters.title.forEach((elem) => {
    if (elem != "Desde") {
      const label = document.createElement("label")
      label.classList.add("fw-bold", "mb-2")
      label.setAttribute("for", elem);
      label.appendChild(document.createTextNode(elem))
      form.appendChild(label)
      const select = document.createElement("select")
      select.classList.add("form-select", "mb-3")
      switch (elem) {
        case "Tipo":
          filters.type.forEach((type) => {
            const option = document.createElement("option")
            option.appendChild(document.createTextNode(type))
            option.value = type;
            select.appendChild(option)
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
        case "Ordenar por":
          filters.sortBy.forEach((order) => {
            const option = document.createElement("option")
            option.appendChild(document.createTextNode(order))
            option.value = order;
            select.appendChild(option)
          });
          break;
        default: //podriamos poner el "desde" en el defalut??
          break;
      }
      form.appendChild(select);
    } else if (elem === "Desde") {
      const input = document.createElement("input") as HTMLInputElement;
      input.classList.add("form-control", "mb-3")
      input.setAttribute("type", "date")
      const date = new Date();
      input.defaultValue = date.getDate().toString();
      const label = document.createElement("label")
      label.classList.add("fw-bold", "mb-2")
      label.setAttribute("for", elem)
      label.appendChild(document.createTextNode(elem))
      form.appendChild(label)
      form.appendChild(input)
    }
  });
};

createSelect(filters)

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

//Card Operation
const columnOperation = document.createElement("div")
columnOperation.classList.add("col-7")
const cardOperation = document.createElement("div")
columnOperation.appendChild(cardOperation)
cardOperation.classList.add("card-operation", "card", "p-3", "shadow","d-sm-flex") 
const boxTitleBtn = document.createElement("div")
boxTitleBtn.classList.add("d-flex", "justify-content-between")

const titleOperation = document.createElement("h3")
titleOperation.appendChild(document.createTextNode("Operaciones"))
titleOperation.classList.add("fw-bold", "text-dark", "fs-4", "text-opacity-75")
boxTitleBtn.appendChild(titleOperation)

const btnNewOperation = document.createElement("button")
btnNewOperation.appendChild(document.createTextNode("+ Nueva operación"))
btnNewOperation.classList.add("btn", "btn-success")
btnNewOperation.setAttribute("type", "button")
boxTitleBtn.appendChild(btnNewOperation)
cardOperation.appendChild(boxTitleBtn)

const imgOperation = document.createElement("img")
imgOperation.setAttribute("src", "./assets/undraw_discount_d4bd.png")
imgOperation.setAttribute("alt", "illustracion")
cardOperation.appendChild(imgOperation)

const textNoResults = document.createElement("p")
textNoResults.appendChild(document.createTextNode("Sin resultados"))
textNoResults.classList.add("fs-4","text-center","text-dark","fw-bold", "text-opacity-75")
cardOperation.appendChild(textNoResults)

const textAddOperations = document.createElement("p")
textAddOperations.appendChild(
  document.createTextNode("Cambía los filtros o agregá operaciones")
);
textAddOperations.classList.add("text-center")
cardOperation.appendChild(textAddOperations)
rowWrapper.appendChild(columnOperation)

btnNewOperation.addEventListener("click", (e) => {
  e.preventDefault();
  cardNewOperation.classList.remove("display-none")
  rowWrapper.classList.add("display-none")
  wrapperNewOp.classList.add("d-flex", "justify-content-center")
});

//Card Nueva operación

const wrapperNewOp = document.createElement("div")
const cardNewOperation = document.createElement("div")
cardNewOperation.classList.add("display-none","card-newOp", "card","p-3","mt-3","shadow")
const titleNewOp = document.createElement("h2");
titleNewOp.appendChild(document.createTextNode("Nueva operación"));
titleNewOp.classList.add("fw-bolder", "fs-1");
const boxButton = document.createElement("div");
boxButton.classList.add("d-flex", "justify-content-end", "mt-5");
const btnCancel = document.createElement("button");
btnCancel.classList.add("btn", "btn-light", "me-2");
btnCancel.appendChild(document.createTextNode("Cancelar"));
const btnAdd = document.createElement("button");
btnAdd.classList.add("btn");
btnAdd.appendChild(document.createTextNode("Agregar"));
btnAdd.classList.add("btn", "btn-success");

cardNewOperation.appendChild(titleNewOp);
wrapperNewOp.appendChild(cardNewOperation);
container.appendChild(wrapperNewOp);
const formNewOp = document.createElement("form");
cardNewOperation.appendChild(formNewOp);
const wrapperFormNewOp = document.createElement("div");
wrapperFormNewOp.classList.add("p-1", "mb-2", "mt-4");
wrapperFormNewOp.appendChild(formNewOp);
cardNewOperation.appendChild(wrapperFormNewOp);
boxButton.appendChild(btnCancel);
boxButton.appendChild(btnAdd);
cardNewOperation.appendChild(boxButton);

const operationLabels = [
  "Descripción",
  "Categoria",
  "Fecha",
  "Monto",
  "Acciones",
]; // hacer un objeto con descripcion : "value" para poder capturar 

btnAdd.addEventListener("click", () => {
  imgOperation.classList.add("display-none");
  textNoResults.classList.add("display-none");
  textAddOperations.classList.add("display-none");
  rowWrapper.classList.remove("display-none");
  cardNewOperation.classList.add("display-none");
  cardOperation.style.minHeight = "213px";

  const createOperationTable = (tableHeads) => {
    const operationTable = document.createElement("table");
    operationTable.classList.add("table", "table-borderless", "mt-5");
    cardOperation.appendChild(operationTable);

    const operationTb = document.createElement("tbody");
    operationTable.appendChild(operationTb);

    let tRow = document.createElement("tr");
    operationTable.appendChild(tRow);
    // tRow.style.width = "30px"
    const tableHead = document.createElement("thead")
    operationTable.appendChild(tableHead);

    // hacer dinamico con categorias cargadas
    let tdDescription = document.createElement("td")
    let pDescription = document.createElement("p")
    pDescription.style.fontSize ="15px"
    pDescription.appendChild(document.createTextNode("Educacion"))
    tdDescription.appendChild(pDescription); // linkear con categorias y mes
    pDescription.classList.add("fw-bold","text-secondary") // la clase del color es card-subtitle

    tRow.appendChild(tdDescription);

    let tdCat = document.createElement("td")

    let pCategory = document.createElement('p')
    pCategory.classList.add("categorySpan")
    pCategory.appendChild(document.createTextNode("1000")) // linkear con operaciones
    tdCat.appendChild(pCategory)
    tRow.appendChild(tdCat);

    let tdDate = document.createElement("td")
    // tdDate.classList.add("tdStyle")
    let pDate = document.createElement('p')
    pDate.classList.add("tdStyle")
    pDate.appendChild(document.createTextNode("50000")) // linkear con operacione
    tdDate.appendChild(pDate)
    tRow.appendChild(tdDate);

    let totalAmount = document.createElement("td");
    let pAmount = document.createElement('p');
    pAmount.classList.add("text-danger", "fw-bold")
    pAmount.appendChild(document.createTextNode("$10")) // linkear con totales
    totalAmount.appendChild(pAmount)
    tRow.appendChild(totalAmount)

    operationLabels.forEach((tablehead) => {
      const titleHeader = document.createElement("th");
      titleHeader.appendChild(document.createTextNode(tablehead));
      tableHead.appendChild(titleHeader);
    });
    if (operationLabels[4] === "Acciones") {
      let tdAction = document.createElement("td");
      tRow.appendChild(tdAction);
      const boxBtn = document.createElement("div");
      boxBtn.classList.add("btn-group-vertical");
      tdAction.appendChild(boxBtn);
      let editBtn = document.createElement("button");
      editBtn.setAttribute("id", "editBtn");
      editBtn.classList.add("btn", "btn-link");
      editBtn.style.fontSize = "12px"
      editBtn.appendChild(document.createTextNode("Editar"))
      boxBtn.appendChild(editBtn)
      const delOp = document.createElement("button")
      delOp.setAttribute("id", "delBtn")
      delOp.classList.add("btn", "btn-link")
      delOp.style.fontSize = "12px"
      delOp.appendChild(document.createTextNode("Eliminar"))
      boxBtn.appendChild(delOp);

      // delOp.addEventListener('click', () => {
      //  // let valuess =
      //  // let index = tableHeads.indexOf(tableHead);
      //  // tRow.splice(index, 1);

      // }
    }
  };

  createOperationTable(operationLabels);
});

btnCancel.addEventListener("click", () => {
  cardNewOperation.classList.add("display-none");
  rowWrapper.classList.remove("display-none");
});

type FormControls = {
  label: string;
  type: string;
}[];

const formControls = [
  {
    label: "Descripción",
    type: "text",
  },
  {
    label: "Monto",
    type: "number",
  },
  {
    label: "Tipo",
    type: "select",
  },
  {
    label: "Categoria",
    type: "select",
  },
  {
    label: "Fecha",
    type: "date",
  }, //{
  //   inputValues: []//si no lo uso brrar
  // }
];

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
      filters.type.shift();
      filters.type.forEach((type) => {
        const option = document.createElement("option");
        option.appendChild(document.createTextNode(type));
        option.value = type;
        select.appendChild(option);
      });
    } else if (formControl.label === "Categoria") {
      for (const prop of categoryNames) {
        const option = document.createElement("option");
        option.appendChild(document.createTextNode(prop));
        option.value = prop;
        select.appendChild(option);
      }
    }
  } else {
    const controlType = document.createElement("input");
    controlType.classList.add("form-control");
    controlType.setAttribute("type", formControl.type);
    formNewOp.appendChild(controlType);
    // let guardar = controlType.value;
    // formControl.inputValues.push(guardar)// revisar!!!!!
    // console.log(formControl.inputValues.push(guardar))
  }
});
