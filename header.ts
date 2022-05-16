const nav = document.createElement('nav');
nav.classList.add("p-4","navbar","bg-success","text-white", "container-fluid");
const boxBrand = document.createElement('div');
nav.appendChild(boxBrand);
const homeLink = document.createElement('a');
homeLink.classList.add("btn-link","text-white","text-decoration-none");
homeLink.setAttribute('href',"./index.html");
homeLink.setAttribute('role', "button");
boxBrand.appendChild(homeLink);
const iconWallet = document.createElement('i');
iconWallet.classList.add("fa-solid", "fa-wallet","me-3");
const pageTitle = document.createElement('h1');
pageTitle.appendChild(iconWallet);
pageTitle.appendChild(document.createTextNode("AhorrADAs"));
homeLink.appendChild(pageTitle);

const boxNav = document.createElement('div');
nav.appendChild(boxNav);
const listNav = document.createElement('ul');

const iconBalance = document.createElement('i');
iconBalance.classList.add("fa-solid","fa-chart-column","me-1");
const iconCategory = document.createElement('i');
iconCategory.classList.add("fa-solid","fa-tag","me-1");
const iconReport = document.createElement('i');
iconReport.classList.add("fa-solid","fa-chart-pie","me-1");

const aBalance = document.createElement('a');
aBalance.classList.add("btn","btn-success");
aBalance.setAttribute('href',"./balance.html");
aBalance.appendChild(iconBalance);
aBalance.appendChild(document.createTextNode('Balance'));
boxNav.appendChild(aBalance);

const aCategory = document.createElement('a');
aCategory.classList.add("ms-3","btn" ,"btn-success");
aCategory.setAttribute('href',"./categories.html");
aCategory.appendChild(iconCategory);
aCategory.appendChild(document.createTextNode('Categorias'));
boxNav.appendChild(aCategory);

const aReport = document.createElement('a');
aReport.classList.add("ms-3","btn" ,"btn-success");
aReport.setAttribute('href',"./reports.html");
aReport.appendChild(iconReport);
aReport.appendChild(document.createTextNode('Reportes'));
boxNav.appendChild(aReport);

header.appendChild(nav);