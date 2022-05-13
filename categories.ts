
// Container

const container = document.createElement('div');
container.classList.add("container-xl", "px-4", "d-flex", "justify-content-center");
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
categoriesTitle.classList.add("cardTitle");   // para sumar el style del h2 de categorias y reportes

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
label.classList.add("fs-6", "fw-bold", "mt-4");
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
categoriesTable.classList.add("mt-5");

const categories:string[] = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"];

localStorage.setItem('storedCategories', JSON.stringify(categories));

const createCategoryList = () => {
    
    tableBody.innerHTML = "";

    const categories = JSON.parse(localStorage.getItem('storedCategories'));
    

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
                
                createCategoryList()
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
                
                localStorage.setItem('storedCategories', JSON.stringify(categories));

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
            localStorage.setItem('storedCategories', JSON.stringify(categories));
            // aca debo borrar ese elemento del local storage
            createCategoryList();
        })

    }

    localStorage.setItem('storedCategories', JSON.stringify(categories));


}

createCategoryList();

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const categories = JSON.parse(localStorage.getItem('storedCategories'));
    categories.push(formInput.value);
    localStorage.setItem('storedCategories', JSON.stringify(categories));
    
    createCategoryList()
})



