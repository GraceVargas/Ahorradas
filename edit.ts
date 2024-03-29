let storage = JSON.parse(localStorage.getItem('storedData'));

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const category = storage.categories.find(item => item.id === id);



// Container

const container = document.createElement('div');
container.classList.add("container-xl", "px-4", "d-flex", "justify-content-center");
main.appendChild(container)
main.style.height = "83vh";


// Card 

const editCategoriesCard = document.createElement('div');
editCategoriesCard.classList.add("border", "centralCard", "card","p-3", "shadow", "border", "my-5");
editCategoriesCard.setAttribute("id", "editCategories");
container.appendChild(editCategoriesCard); 




// Card Title

const editCategoriesTitle = document.createElement('h2');
editCategoriesTitle.appendChild(document.createTextNode("Editar categoría"));
editCategoriesCard.appendChild(editCategoriesTitle);
editCategoriesTitle.classList.add("cardTitle");   // para sumar el style del h2 de categorias y reportes


// Form

const inputRow = document.createElement('div');
inputRow.classList.add("row");
editCategoriesCard.appendChild(inputRow);

const btnRow = document.createElement('div');
btnRow.classList.add("d-flex", "flex-row-reverse", "m-4");
editCategoriesCard.appendChild(btnRow);

const form = document.createElement('form');
form.classList.add("row", "gx-5", "align-items-center");
inputRow.appendChild(form);


const label = document.createElement('label');
label.classList.add("form-label");
label.setAttribute("name", "formLabel")
label.appendChild(document.createTextNode("Nombre"));
label.classList.add("fs-6", "fw-bold", "mt-4");
form.appendChild(label);

const formColText = document.createElement('div');
form.appendChild(formColText);

const formInput =  document.createElement('input');
formInput.classList.add("form-control");
formInput.setAttribute("name", "formInput")
formInput.setAttribute("type", "text");
formColText.appendChild(formInput);
formInput.value = category.name;


// Edit Button

const editSubmit = document.createElement('button');
editSubmit.appendChild(document.createTextNode("Editar"));
editSubmit.classList.add("btn", "btn-primary", "btn-success");
editSubmit.setAttribute("type", "button");
btnRow.appendChild(editSubmit);


editSubmit.addEventListener("click", () => {
    category.name = formInput.value;
    localStorage.setItem('storedData', JSON.stringify(storage));
    window.location.href = "https://gracevargas.github.io/Ahorradas/categories.html";
});


// Cancel Button

const cancelSubmit = document.createElement('a');
cancelSubmit.appendChild(document.createTextNode("Cancelar"));
cancelSubmit.classList.add("btn", "btn-primary", "btn-light");
cancelSubmit.setAttribute("type", "button");
cancelSubmit.setAttribute("href", "./categories.html");
btnRow.appendChild(cancelSubmit);
           