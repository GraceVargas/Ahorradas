var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var storage = JSON.parse(localStorage.getItem('storedData'));
var categories = storage.categories;
var params = new URLSearchParams(window.location.search);
var id = parseInt(params.get("id"));
var category = categories.find(function (item) { return item.id === id; });
var categoryName = category.name;
// Container
var container = document.createElement('div');
container.classList.add("container-xl", "px-4", "d-flex", "justify-content-center");
document.body.appendChild(container); // borrar
// main.appendChild(container)
// Card 
var editCategoriesCard = document.createElement('div');
editCategoriesCard.classList.add("border");
editCategoriesCard.classList.add("centralCard");
editCategoriesCard.setAttribute("id", "editCategories");
container.appendChild(editCategoriesCard); // borrar
// main.appendChild(categoriesCard)
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
formInput.value = categoryName;
// Edit Button
var editSubmit = document.createElement('button');
editSubmit.appendChild(document.createTextNode("Editar"));
editSubmit.classList.add("btn", "btn-primary", "btn-success");
editSubmit.setAttribute("type", "button");
btnRow.appendChild(editSubmit);
editSubmit.addEventListener("click", function () {
    category.name = formInput.value;
    // {id: id, name: formInput.value}
    storage = __assign({ categories: categories }, storage.operations);
    console.log(storage);
    localStorage.setItem('storedData', JSON.stringify(storage));
    // createCategoryList();
});
// let index = categories.indexOf(category);
// categories.splice(index, 1, formInput.value);
// localStorage.setItem('storedCategories', JSON.stringify(categories));
// formInput.value = category;
// Cancel Button
var cancelSubmit = document.createElement('a');
cancelSubmit.appendChild(document.createTextNode("Cancelar"));
cancelSubmit.classList.add("btn", "btn-primary", "btn-light");
cancelSubmit.setAttribute("type", "button");
cancelSubmit.setAttribute("href", "./categories.html");
btnRow.appendChild(cancelSubmit);
