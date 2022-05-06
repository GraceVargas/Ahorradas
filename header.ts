
const nav = document.createElement('nav');
nav.classList.add("p-4");
const boxBrand = document.createElement('div');
const homeLink = document.createElement('a');
const pageTitle = document.createElement('h1');
const iconWallet = document.createElement('i');
iconWallet.classList.add("fa-solid", "fa-wallet","me-3");

const boxNav = document.createElement('div');
const listNav = document.createElement('ul');
const balance = document.createElement('li');
const categories = document.createElement('li');
const reports = document.createElement('li');

const aBalance = document.createElement('a');
const aCategory = document.createElement('a');
const aReport = document.createElement('a');
const iconBalance = document.createElement('i');
const iconCategory = document.createElement('i');
const iconReport = document.createElement('i');

aBalance.appendChild(iconBalance);
aCategory.appendChild(iconCategory);
aReport.appendChild(iconReport);
aBalance.appendChild(document.createTextNode('Balance'));
aCategory.appendChild(document.createTextNode('Categorias'));
aReport.appendChild(document.createTextNode('Reportes'));


listNav.appendChild(balance);
listNav.appendChild(categories);
listNav.appendChild(reports);
boxNav.appendChild(listNav);
balance.appendChild(aBalance);
categories.appendChild(aCategory);
reports.appendChild(aReport);

pageTitle.appendChild(iconWallet);
pageTitle.appendChild(document.createTextNode("AhorrADAs"));
homeLink.appendChild(pageTitle);
boxBrand.appendChild(homeLink);
nav.appendChild(boxBrand);
nav.appendChild(boxNav);
header.appendChild(nav);


//class
nav.classList.add("navbar","bg-success","bg-gradient","text-white", "container-fluid"); // ,"position-fixed"
// boxNav.classList.add("container");
listNav.classList.add("navbar-nav", "me-auto","mb-2","mb-lg-0","list-group-horizontal")
balance.classList.add("nav-item","ms-3");
categories.classList.add("nav-item","ms-3");
reports.classList.add("nav-item","ms-3");
// aBalance.classList.add("nav-link");
// aReport.classList.add("nav-link");
// aCategory.classList.add("nav-link");
iconBalance.classList.add("fa-solid","fa-chart-column","me-1");
iconCategory.classList.add("fa-solid","fa-tag","me-1");
iconReport.classList.add("fa-solid","fa-chart-pie","me-1");