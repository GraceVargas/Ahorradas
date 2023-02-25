var nav = document.createElement('nav');
nav.classList.add("p-4", "navbar", "bg-success", "text-white", "navbar-expand-lg", "justify-content-between"); //"container-fluid","pos-f-t"
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
boxNav.classList.add("d-none", "d-lg-block", "collapse", "navbar-collapse"); //"collapse",
var boxCollapse = document.createElement('div');
boxCollapse.setAttribute('id', "navbarToggleExternalContent");
boxCollapse.classList.add("pos-f-t");
nav.appendChild(boxCollapse);
boxCollapse.appendChild(boxNav);
var listNav = document.createElement('ul');
listNav.classList.add("nav");
var liNav1 = document.createElement('li');
listNav.appendChild(liNav1);
var liNav2 = document.createElement('li');
listNav.appendChild(liNav2);
var liNav3 = document.createElement('li');
listNav.appendChild(liNav3);
boxNav.appendChild(listNav);
//Responsive
var btnCollapse = document.createElement('button');
btnCollapse.classList.add("navbar-toggler", "d-block", "d-lg-none");
btnCollapse.setAttribute('data-toggle', "collapse");
btnCollapse.setAttribute("data-target", "#navbarToggleExternalContent");
btnCollapse.setAttribute('aria-controls', "navbarToggleExternalContent");
btnCollapse.setAttribute('aria-expanded', "false");
btnCollapse.setAttribute('aria-label', "Toggle navigation");
var spanToggler = document.createElement('span');
spanToggler.classList.add("fa-solid", "fa-bars", "text-white");
btnCollapse.appendChild(spanToggler);
boxCollapse.appendChild(btnCollapse);
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
// btnCollapse.addEventListener('click',()=>{
// })
header.appendChild(nav);
