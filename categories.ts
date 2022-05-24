

// Container

const container = document.createElement('div');
container.classList.add("container-xl", "px-5", "d-flex", "justify-content-center");
main.appendChild(container);



// Card 

const categoriesCard = document.createElement('div');
categoriesCard.classList.add("centralCard", "card","p-3","shadow", "border");
categoriesCard.setAttribute("id", "categories");
categoriesCard.classList.add("my-5");
container.appendChild(categoriesCard);



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





const createCategoryList = () => {
    
    tableBody.innerHTML = "";
    let stored = JSON.parse(localStorage.getItem('storedData'));
    const categories = stored.categories;
    

    stored.categories.forEach(category => {
       
                
        let tRow = document.createElement('tr');
        tableBody.appendChild(tRow);

        // category list

        let tDataCat = document.createElement('td');
        let tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode(category.name))
        tDataCat.style.width = "470px";
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan')
        tRow.appendChild(tDataCat);

        //Edit Button

        let tDataEdit = document.createElement('td');
        tRow.appendChild(tDataEdit);    
        const editBtn = document.createElement('a');
        editBtn.setAttribute('href', `./edit.html?id=${category.id}`);
        editBtn.classList.add("btn", "btn-link");
        editBtn.style.textDecoration = "none";
        editBtn.appendChild(document.createTextNode("Editar"));
        tDataEdit.appendChild(editBtn);


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
            stored.categories.splice(index, 1);
            console.log(stored.categories);

            localStorage.setItem('storedData', JSON.stringify(stored));
            createCategoryList();
        })


    })
}


createCategoryList();

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let stored = JSON.parse(localStorage.getItem('storedData'));

    stored.categories.push({id: stored.categories.length, name: formInput.value});


    localStorage.setItem('storedData', JSON.stringify(stored));
    
    createCategoryList();
})



