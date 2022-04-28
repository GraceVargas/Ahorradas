var categories = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"];
var colCategories = document.getElementById('col-categories');
var createCategoryList = function (categories) {
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        var div = document.createElement('div');
        colCategories.appendChild(div);
        var categoyItem = document.createElement('p');
        var p = document.createTextNode(category);
        categoyItem.appendChild(p);
        colCategories.appendChild(categoyItem);
    }
};
createCategoryList(categories);
