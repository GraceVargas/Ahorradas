
// Container

const container = document.createElement('div');
container.classList.add("container-md", "px-4", "d-flex", "justify-content-center");
document.body.appendChild(container); // borrar
// main.appendChild(container)


// Card 

const categoriesCard = document.createElement('div');
categoriesCard.classList.add("border");
categoriesCard.classList.add("centralCard");
categoriesCard.setAttribute("id", "categories");
categoriesCard.style.padding = "10px";
container.appendChild(categoriesCard); // borrar
// main.appendChild(categoriesCard)


// Card Title

const categoriesTitle = document.createElement('h2');
categoriesTitle.appendChild(document.createTextNode("Categorías"));
categoriesCard.appendChild(categoriesTitle);

const categoriesRow = document.createElement('div');
categoriesRow.classList.add("row");
categoriesCard.appendChild(categoriesRow);


// Form

const form = document.createElement('form');
form.classList.add("row", "gx-5", "align-items-center");
categoriesRow.appendChild(form);

const label = document.createElement('label');
label.classList.add("form-label");
label.setAttribute("name", "formLabel")
label.appendChild(document.createTextNode("Nombre"));
form.appendChild(label);

const formColText = document.createElement('div');
formColText.classList.add("col-10");
form.appendChild(formColText);

const formInput =  document.createElement('input');
formInput.classList.add("form-control");
formInput.setAttribute("name", "formInput")
formInput.setAttribute("type", "text");
formColText.appendChild(formInput);

const formColSubmit = document.createElement('div');
formColSubmit.classList.add("col-2");
form.appendChild(formColSubmit);

const formSubmit = document.createElement('button');
formSubmit.appendChild(document.createTextNode("Agregar"));
formSubmit.classList.add("btn", "btn-primary", "btn-success");
formSubmit.setAttribute("type", "submit");
formColSubmit.appendChild(formSubmit);


// Table

const categoriesTable = document.createElement('table');
categoriesTable.classList.add("table", "table-borderless");
categoriesCard.appendChild(categoriesTable);
const tableBody = document.createElement('tbody');
categoriesTable.appendChild(tableBody);


const categories:string[] = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"];

// const categoriesTable = createTable(6, 1);
categoriesCard.appendChild(categoriesTable)
categoriesTable.classList.add("table", "table-borderless");

const createCategoryList = (categories: string[]) => {
    
    tableBody.innerHTML = "";

    for (let category of categories) {

        let tRow = document.createElement('tr');
        tableBody.appendChild(tRow);

        // category list

        let tDataCat = document.createElement('td');
        let tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode(category))
        tDataCat.style.width = "470px";
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan')
        tRow.appendChild(tDataCat);

        //Edit Button

        let tDataEdit = document.createElement('td');
        tRow.appendChild(tDataEdit);    
        const editBtn = document.createElement('button');
        editBtn.classList.add("btn", "btn-link");
        editBtn.style.textDecoration = "none";
        editBtn.appendChild(document.createTextNode("Editar"));
        tDataEdit.appendChild(editBtn);


        editBtn.addEventListener('click', () => {
            categoriesTitle.innerText = "Editar categoría";
            formInput.value = category;
            tableBody.innerHTML = "";
            formSubmit.classList.add("display-none");

            const cancelSubmit = document.createElement('button');
            cancelSubmit.appendChild(document.createTextNode("Cancelar"));
            categoriesTable.appendChild(cancelSubmit);
            cancelSubmit.classList.add("btn", "btn-primary", "btn-light");
            cancelSubmit.setAttribute("type", "button");

            cancelSubmit.addEventListener("click", () => {
                categoriesTitle.innerText = "Categorías";
                formInput.value = "";
                formSubmit.classList.remove("display-none");
                cancelSubmit.classList.add("display-none");
                editSubmit.classList.add("display-none");
                
                createCategoryList(categories)
            })


            const editSubmit = document.createElement('button');
            editSubmit.appendChild(document.createTextNode("Editar"));
            categoriesTable.appendChild(editSubmit);
            categoriesTable.classList.add("d-grid", "gap-2", "d-md-flex", "justify-content-md-end");
            editSubmit.classList.add("btn", "btn-primary", "btn-success");
            editSubmit.setAttribute("type", "button");

            editSubmit.addEventListener("click", () => {
                let index = categories.indexOf(category);
                categories.splice(index, 1, formInput.value);
                return categories;
            })
        })


        //Delete Button

        let tDataDel = document.createElement('td');
        tRow.appendChild(tDataDel);
        const delBtn = document.createElement('button');
        delBtn.classList.add("btn", "btn-link");
        delBtn.style.textDecoration = "none";
        delBtn.appendChild(document.createTextNode("Eliminar"));
        tDataDel.appendChild(delBtn);


        delBtn.addEventListener('click', () => {
            let index = categories.indexOf(category);
            categories.splice(index, 1);
            createCategoryList(categories);
        })

    }



}

createCategoryList(categories);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    categories.push(formInput.value);
    createCategoryList(categories)
})





