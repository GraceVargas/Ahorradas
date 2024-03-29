const nav = document.createElement('nav');
nav.classList.add("p-4","navbar","bg-success","text-white","navbar-expand-lg","justify-content-between"); //"container-fluid","pos-f-t"
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
boxNav.setAttribute('id',"navbarSupportedContent") 
boxNav.classList.add("collapse","navbar-collapse") 
const boxCollapse = document.createElement('div')
boxCollapse.classList.add("pos-f-t")
nav.appendChild(boxCollapse);


const btnCollapse = document.createElement('button')
btnCollapse.classList.add("navbar-toggler", "collapsed") 
btnCollapse.setAttribute('data-toggle',"collapse")
btnCollapse.setAttribute('type',"button")
btnCollapse.setAttribute('data-bs-toggle',"collapse")
btnCollapse.setAttribute('data-bs-target',"navbarSupportedContent")
btnCollapse.setAttribute("data-target", "#navbarSupportedContent") 
btnCollapse.setAttribute('aria-controls', "navbarSupportedContent")  
btnCollapse.setAttribute('aria-expanded',"false")
btnCollapse.setAttribute('aria-label',"Toggle navigation")
btnCollapse.setAttribute('onclick', "toggleMenu()")
const spanToggler = document.createElement('span')
spanToggler.classList.add("fa-solid", "fa-bars","text-white")
btnCollapse.appendChild(spanToggler)
boxCollapse.appendChild(btnCollapse)
boxCollapse.appendChild(boxNav)

const listNav = document.createElement('ul')
listNav.classList.add("navbar-nav", "nav", "mr-auto") 
const liNav1= document.createElement('li')
liNav1.classList.add("nav-item", "active") 
listNav.appendChild(liNav1)
const liNav2 = document.createElement('li')
liNav2.classList.add("nav-item", "active") 
listNav.appendChild(liNav2)
const liNav3 = document.createElement('li')
liNav3.classList.add("nav-item", "active") 
listNav.appendChild(liNav3)
boxNav.appendChild(listNav)



//Responsive

const iconBalance = document.createElement('i');
iconBalance.classList.add("fa-solid","fa-chart-column","me-1");
const iconCategory = document.createElement('i');
iconCategory.classList.add("fa-solid","fa-tag","me-1");
const iconReport = document.createElement('i');
iconReport.classList.add("fa-solid","fa-chart-pie","me-1");

const aBalance = document.createElement('a');
aBalance.setAttribute("role", "button")
aBalance.classList.add("btn-success", "btn") 
aBalance.setAttribute('href',"./balance.html")
aBalance.appendChild(iconBalance);
aBalance.appendChild(document.createTextNode('Balance'))
liNav1.appendChild(aBalance);

const aCategory = document.createElement('a');
aCategory.setAttribute("role", "button")
aCategory.classList.add("btn","btn-success") 
aCategory.setAttribute('href',"./categories.html");
aCategory.appendChild(iconCategory);
aCategory.appendChild(document.createTextNode('Categorias'));
liNav2.appendChild(aCategory);

const aReport = document.createElement('a');
aReport.setAttribute("role", "button")
aReport.classList.add("btn","btn-success"); 
aReport.setAttribute('href',"./reports.html");
aReport.appendChild(iconReport);
aReport.appendChild(document.createTextNode('Reportes'));
liNav3.appendChild(aReport);

header.appendChild(nav);

  
let isOpen: boolean = false;

function toggleMenu() {
    isOpen = !isOpen;
  
    const navbarCollapse = document.querySelector(".navbar-collapse") as HTMLDivElement;
    if (isOpen) {
      navbarCollapse.classList.add("show");
      boxNav.classList.add("navbarSupportedContent_responsive");
    } else {
      navbarCollapse.classList.remove("show");
      boxNav.classList.remove("navbarSupportedContent_responsive");
    }
  }