var nav = document.createElement('nav');
nav.classList.add("p-4");
var boxBrand = document.createElement('div');
var homeLink = document.createElement('a');
var pageTitle = document.createElement('h1');
var iconWallet = document.createElement('i');
iconWallet.classList.add("fa-solid", "fa-wallet", "me-3");
var boxNav = document.createElement('div');
var listNav = document.createElement('ul');
var navBalance = document.createElement('li');
var navCategories = document.createElement('li');
var navReports = document.createElement('li');
var aBalance = document.createElement('a');
aBalance.setAttribute('href', "./balance.html");
var aCategory = document.createElement('a');
aCategory.setAttribute('href', "./categories.html");
var aReport = document.createElement('a');
aReport.setAttribute('href', "./reports.html");
var iconBalance = document.createElement('i');
var iconCategory = document.createElement('i');
var iconReport = document.createElement('i');
aBalance.appendChild(iconBalance);
aCategory.appendChild(iconCategory);
aReport.appendChild(iconReport);
aBalance.appendChild(document.createTextNode('Balance'));
aCategory.appendChild(document.createTextNode('Categorias'));
aReport.appendChild(document.createTextNode('Reportes'));
listNav.appendChild(navBalance);
listNav.appendChild(navCategories);
listNav.appendChild(navReports);
boxNav.appendChild(listNav);
navBalance.appendChild(aBalance);
navCategories.appendChild(aCategory);
navReports.appendChild(aReport);
pageTitle.appendChild(iconWallet);
pageTitle.appendChild(document.createTextNode("AhorrADAs"));
homeLink.appendChild(pageTitle);
boxBrand.appendChild(homeLink);
nav.appendChild(boxBrand);
nav.appendChild(boxNav);
header.appendChild(nav);
//class
nav.classList.add("navbar", "bg-success", "text-white", "container-fluid"); // ,"position-fixed"
// boxNav.classList.add("container");
listNav.classList.add("navbar-nav", "me-auto", "mb-lg-0", "list-group-horizontal");
aBalance.classList.add("ms-3", "btn", "btn-success");
aCategory.classList.add("ms-3", "btn", "btn-success");
aReport.classList.add("ms-3", "btn", "btn-success");
// aBalance.classList.add("nav-link");
// aReport.classList.add("nav-link");
// aCategory.classList.add("nav-link");
iconBalance.classList.add("fa-solid", "fa-chart-column", "me-1");
iconCategory.classList.add("fa-solid", "fa-tag", "me-1");
iconReport.classList.add("fa-solid", "fa-chart-pie", "me-1");
