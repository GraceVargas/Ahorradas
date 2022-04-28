
const categories = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"];

const colCategories = document.getElementById('col-categories');

const createCategoryList = (categories: string[]) => {
    for (let category of categories) {

        let div = document.createElement('div');
        colCategories.appendChild(div);

        let categoyItem = document.createElement('p');
        let p = document.createTextNode(category)
        categoyItem.appendChild(p)
        colCategories.appendChild(categoyItem)
    }
}

createCategoryList(categories)