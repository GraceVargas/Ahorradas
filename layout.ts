const header = document.createElement('header');
const main = document.createElement('main');
document.body.appendChild(header);
document.body.appendChild(main);
main.classList.add("bg-secondary","bg-opacity-10");


const defaultStorage = {
    categories: [
        {
            'id': 0,
            'name': "Comida",
        },
        {
            'id': 1,
            'name': "Servicios",
        },
        {
            'id': 2,
            'name': "Salidas",   
        },
        {
            'id': 3,
            'name': "Educación",  
        },
        {
            'id': 4,
            'name': "Transporte", 
        },
        {
            'id': 5,
            'name': "Trabajo",  
        }
    ],
    operations: [],
    totalBills: 0,
    totalProfits: 0,
};


const setStorage = () => {
    let storage = JSON.parse(localStorage.getItem('storedData'));

    if (!storage) localStorage.setItem('storedData', JSON.stringify(defaultStorage));
}


setStorage();