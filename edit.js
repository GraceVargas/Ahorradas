var storage = JSON.parse(localStorage.getItem('storedData'));
var params = new URLSearchParams(window.location.search);
var id = parseInt(params.get("id"));
var category = storage.categories.find(function (item) { return item.id === id; });
// Container
var container = document.createElement('div');
container.classList.add("container-xl", "px-4", "d-flex", "justify-content-center");
main.appendChild(container);
main.style.height = "83vh";
// Card 
var editCategoriesCard = document.createElement('div');
editCategoriesCard.classList.add("border", "centralCard", "card", "p-3", "shadow", "border", "my-5");
editCategoriesCard.setAttribute("id", "editCategories");
container.appendChild(editCategoriesCard);
// Card Title
var editCategoriesTitle = document.createElement('h2');
editCategoriesTitle.appendChild(document.createTextNode("Editar categoría"));
editCategoriesCard.appendChild(editCategoriesTitle);
editCategoriesTitle.classList.add("cardTitle"); // para sumar el style del h2 de categorias y reportes
// Form
var inputRow = document.createElement('div');
inputRow.classList.add("row");
editCategoriesCard.appendChild(inputRow);
var btnRow = document.createElement('div');
btnRow.classList.add("d-flex", "flex-row-reverse", "m-4");
editCategoriesCard.appendChild(btnRow);
var form = document.createElement('form');
form.classList.add("row", "gx-5", "align-items-center");
inputRow.appendChild(form);
var label = document.createElement('label');
label.classList.add("form-label");
label.setAttribute("name", "formLabel");
label.appendChild(document.createTextNode("Nombre"));
label.classList.add("fs-6", "fw-bold", "mt-4");
form.appendChild(label);
var formColText = document.createElement('div');
form.appendChild(formColText);
var formInput = document.createElement('input');
formInput.classList.add("form-control");
formInput.setAttribute("name", "formInput");
formInput.setAttribute("type", "text");
formColText.appendChild(formInput);
formInput.value = category.name;
// Edit Button
var editSubmit = document.createElement('button');
editSubmit.appendChild(document.createTextNode("Editar"));
editSubmit.classList.add("btn", "btn-primary", "btn-success");
editSubmit.setAttribute("type", "button");
btnRow.appendChild(editSubmit);
editSubmit.addEventListener("click", function () {
    category.name = formInput.value;
    localStorage.setItem('storedData', JSON.stringify(storage));
    window.location.href = "https://gracevargas.github.io/Ahorradas/categories.html";
});
// Cancel Button
var cancelSubmit = document.createElement('a');
cancelSubmit.appendChild(document.createTextNode("Cancelar"));
cancelSubmit.classList.add("btn", "btn-primary", "btn-light");
cancelSubmit.setAttribute("type", "button");
cancelSubmit.setAttribute("href", "./categories.html");
btnRow.appendChild(cancelSubmit);
