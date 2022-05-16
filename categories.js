// type DefaultStorage = {
//     categories: [],
//     operations: [],
// }
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
var defaultStorage = {
    categories: [
        {
            'id': 0,
            'name': "Comida"
        },
        {
            'id': 1,
            'name': "Servicios"
        },
        {
            'id': 2,
            'name': "Salidas"
        },
        {
            'id': 3,
            'name': "Educación"
        },
        {
            'id': 4,
            'name': "Transporte"
        },
        {
            'id': 5,
            'name': "Trabajo"
        }
    ],
    operations: []
};
var setStorage = function () {
    var storage = JSON.parse(localStorage.getItem('storedData'));
    if (!storage)
        localStorage.setItem('storedData', JSON.stringify(defaultStorage));
};
setStorage();
// Container
var container = document.createElement('div');
container.classList.add("container-xl", "px-4", "d-flex", "justify-content-center");
document.body.appendChild(container); // borrar
// main.appendChild(container)
// Card 
var categoriesCard = document.createElement('div');
categoriesCard.classList.add("border");
categoriesCard.classList.add("centralCard");
categoriesCard.setAttribute("id", "categories");
container.appendChild(categoriesCard); // borrar
// main.appendChild(categoriesCard)
// Card Title
var categoriesTitle = document.createElement('h2');
categoriesTitle.appendChild(document.createTextNode("Categorías"));
categoriesCard.appendChild(categoriesTitle);
categoriesTitle.classList.add("cardTitle"); // para sumar el style del h2 de categorias y reportes
var categoriesRow = document.createElement('div');
categoriesRow.classList.add("row");
categoriesCard.appendChild(categoriesRow);
// Form
var form = document.createElement('form');
form.classList.add("row", "gx-5", "align-items-center");
categoriesRow.appendChild(form);
var label = document.createElement('label');
label.classList.add("form-label");
label.setAttribute("name", "formLabel");
label.appendChild(document.createTextNode("Nombre"));
label.classList.add("fs-6", "fw-bold", "mt-4");
form.appendChild(label);
var formColText = document.createElement('div');
formColText.classList.add("col-10");
form.appendChild(formColText);
var formInput = document.createElement('input');
formInput.classList.add("form-control");
formInput.setAttribute("name", "formInput");
formInput.setAttribute("type", "text");
formColText.appendChild(formInput);
var formColSubmit = document.createElement('div');
formColSubmit.classList.add("col-2");
form.appendChild(formColSubmit);
var formSubmit = document.createElement('button');
formSubmit.appendChild(document.createTextNode("Agregar"));
formSubmit.classList.add("btn", "btn-primary", "btn-success");
formSubmit.setAttribute("type", "submit");
formColSubmit.appendChild(formSubmit);
// Table
var categoriesTable = document.createElement('table');
categoriesTable.classList.add("table", "table-borderless");
categoriesCard.appendChild(categoriesTable);
var tableBody = document.createElement('tbody');
categoriesTable.appendChild(tableBody);
categoriesTable.classList.add("mt-5");
var createCategoryList = function () {
    tableBody.innerHTML = "";
    var stored = JSON.parse(localStorage.getItem('storedData'));
    var categories = stored.categories;
    categories.forEach(function (category) {
        var tRow = document.createElement('tr');
        tableBody.appendChild(tRow);
        // category list
        var tDataCat = document.createElement('td');
        var tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode(category.name));
        tDataCat.style.width = "470px";
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan');
        tRow.appendChild(tDataCat);
        //Edit Button
        var tDataEdit = document.createElement('td');
        tRow.appendChild(tDataEdit);
        var editBtn = document.createElement('a');
        editBtn.setAttribute('href', "./edit.html?id=".concat(category.id));
        editBtn.classList.add("btn", "btn-link");
        editBtn.style.textDecoration = "none";
        editBtn.appendChild(document.createTextNode("Editar"));
        tDataEdit.appendChild(editBtn);
        //Delete Button
        var tDataDel = document.createElement('td');
        tRow.appendChild(tDataDel);
        var delBtn = document.createElement('button');
        delBtn.classList.add("btn", "btn-link");
        delBtn.style.textDecoration = "none";
        delBtn.appendChild(document.createTextNode("Eliminar"));
        tDataDel.appendChild(delBtn);
        delBtn.addEventListener('click', function () {
            var index = categories.indexOf(category);
            categories.splice(index, 1);
            stored = __assign({ categories: categories }, stored.operations);
            localStorage.setItem('storedData', JSON.stringify(stored));
            createCategoryList();
        });
    });
};
createCategoryList();
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var stored = JSON.parse(localStorage.getItem('storedData'));
    var categories = stored.categories;
    categories.push({ id: categories.length, name: formInput.value });
    stored = __assign({ categories: categories }, stored.operations);
    localStorage.setItem('storedData', JSON.stringify(stored));
    createCategoryList();
});
