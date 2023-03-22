var header = document.createElement('header');
var main = document.createElement('main');
document.body.appendChild(header);
document.body.appendChild(main);
main.classList.add("bg-opacity-10");
var defaultStorage = {
    categories: [
        {
            'id': 0,
            'name': "Comida",
            'totalBills': 0,
            'totalProfits': 0
        },
        {
            'id': 1,
            'name': "Servicios",
            'totalBills': 0,
            'totalProfits': 0
        },
        {
            'id': 2,
            'name': "Salidas",
            'totalBills': 0,
            'totalProfits': 0
        },
        {
            'id': 3,
            'name': "Educación",
            'totalBills': 0,
            'totalProfits': 0
        },
        {
            'id': 4,
            'name': "Transporte",
            'totalBills': 0,
            'totalProfits': 0
        },
        {
            'id': 5,
            'name': "Trabajo",
            'totalBills': 0,
            'totalProfits': 0
        }
    ],
    operations: [],
    totalBills: 0,
    totalProfits: 0
};
var setStorage = function () {
    var storage = JSON.parse(localStorage.getItem('storedData'));
    if (!storage)
        localStorage.setItem('storedData', JSON.stringify(defaultStorage));
};
setStorage();
