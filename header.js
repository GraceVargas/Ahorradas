var header = document.createElement('header');
var nav = document.createElement('nav');
nav.classList.add("p-4");
var boxBrand = document.createElement('div');
var homeLink = document.createElement('a');
var pageTitle = document.createElement('h1');
var iconWallet = document.createElement('i');
iconWallet.classList.add("fa-solid", "fa-wallet", "me-3");
var boxNav = document.createElement('div');
var listNav = document.createElement('ul');
var balance = document.createElement('li');
var categories = document.createElement('li');
var reports = document.createElement('li');
var aBalance = document.createElement('a');
var aCategory = document.createElement('a');
var aReport = document.createElement('a');
var iconBalance = document.createElement('i');
var iconCategory = document.createElement('i');
var iconReport = document.createElement('i');
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
document.body.appendChild(header);
//class
nav.classList.add("navbar", "bg-success", "bg-gradient", "text-white", "container-fluid", "position-fixed");
// boxNav.classList.add("container");
listNav.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0", "list-group-horizontal");
balance.classList.add("nav-item", "ms-3");
categories.classList.add("nav-item", "ms-3");
reports.classList.add("nav-item", "ms-3");
// aBalance.classList.add("nav-link");
// aReport.classList.add("nav-link");
// aCategory.classList.add("nav-link");
iconBalance.classList.add("fa-solid", "fa-chart-column", "me-1");
iconCategory.classList.add("fa-solid", "fa-tag", "me-1");
iconReport.classList.add("fa-solid", "fa-chart-pie", "me-1");
