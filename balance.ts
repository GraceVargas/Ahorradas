const container = document.createElement('div');
container.classList.add("container");

const cardBalance = document.createElement('div');
container.appendChild(cardBalance);
// cardBalance.classList.add("card");
const balanceTitle = document.createElement('h2');
balanceTitle.appendChild(document.createTextNode("Balance"));
cardBalance.appendChild(balanceTitle);
const boxProfits = document.createElement('div');
boxProfits.appendChild(document.createTextNode("Ganancias"));


const cardFilters=document.createElement('div');
container.appendChild(cardFilters);

const cardOperation = document.createElement('div');
container.appendChild(cardOperation);


main.appendChild(container);

