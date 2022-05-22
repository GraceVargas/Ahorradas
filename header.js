var nav = document.createElement('nav');
nav.classList.add("p-4", "navbar", "bg-success", "text-white", "navbar-expand-lg", "justify-content-sm-between"); //"container-fluid"
var boxBrand = document.createElement('div');
nav.appendChild(boxBrand);
var homeLink = document.createElement('a');
homeLink.classList.add("btn-link", "text-white", "text-decoration-none");
homeLink.setAttribute('href', "./index.html");
homeLink.setAttribute('role', "button");
boxBrand.appendChild(homeLink);
var iconWallet = document.createElement('i');
iconWallet.classList.add("fa-solid", "fa-wallet", "me-3");
var pageTitle = document.createElement('h1');
pageTitle.appendChild(iconWallet);
pageTitle.appendChild(document.createTextNode("AhorrADAs"));
homeLink.appendChild(pageTitle);
var boxNav = document.createElement('div');
boxNav.classList.add("d-lg-block", "d-none", "d-sm-block", "d-md-block", "d-lg-block", "d-md-none", "d-sm-none");
boxNav.setAttribute('id', "navbarToggleExternalContent");
nav.appendChild(boxNav);
var listNav = document.createElement('ul');
listNav.classList.add("nav");
var liNav1 = document.createElement('li');
listNav.appendChild(liNav1);
var liNav2 = document.createElement('li');
listNav.appendChild(liNav2);
var liNav3 = document.createElement('li');
listNav.appendChild(liNav3);
boxNav.appendChild(listNav);
var btnCollapse = document.createElement('button');
btnCollapse.classList.add("navbar-toggler");
btnCollapse.setAttribute('data-bs-toggle', "collapse");
btnCollapse.setAttribute("data-bs-target", "#navbarToggleExternalContent");
var spanToggler = document.createElement('span');
spanToggler.classList.add("navbar-toggler-icon");
btnCollapse.appendChild(spanToggler);
boxNav.appendChild(btnCollapse);
var iconBalance = document.createElement('i');
iconBalance.classList.add("fa-solid", "fa-chart-column", "me-1");
var iconCategory = document.createElement('i');
iconCategory.classList.add("fa-solid", "fa-tag", "me-1");
var iconReport = document.createElement('i');
iconReport.classList.add("fa-solid", "fa-chart-pie", "me-1");
var aBalance = document.createElement('a');
aBalance.setAttribute("role", "button");
aBalance.classList.add("btn", "btn-success");
aBalance.setAttribute('href', "./balance.html");
aBalance.appendChild(iconBalance);
aBalance.appendChild(document.createTextNode('Balance'));
liNav1.appendChild(aBalance);
var aCategory = document.createElement('a');
aCategory.setAttribute("role", "button");
aCategory.classList.add("btn", "btn-success");
aCategory.setAttribute('href', "./categories.html");
aCategory.appendChild(iconCategory);
aCategory.appendChild(document.createTextNode('Categorias'));
liNav2.appendChild(aCategory);
var aReport = document.createElement('a');
aReport.setAttribute("role", "button");
aReport.classList.add("btn", "btn-success");
aReport.setAttribute('href', "./reports.html");
aReport.appendChild(iconReport);
aReport.appendChild(document.createTextNode('Reportes'));
liNav3.appendChild(aReport);
// const boxNavBar = document.createElement('div')
// boxNavBar.classList.add("pos-f-t", "d-sm-none")
// const navCollapse = document.createElement('div')
// navCollapse.classList.add("collapse")
// navCollapse.setAttribute('id',"navbarToggleExternalContent")
// boxNavBar.appendChild(navCollapse);
// navCollapse.appendChild(btnCollapse)
header.appendChild(nav);
