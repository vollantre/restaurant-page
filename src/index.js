import renderHomePage from './Home';
import renderMenuPage from './Menu';
import renderContactPage from './Contact';

//render page funtion
const renderPage = (page) => {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const pageTitle = document.createElement('h1');
  pageTitle.innerText = page.label;

  content.appendChild(pageTitle);
  page.renderContent();
};


//Create tab list for body
const tabs = document.createElement('ul');
tabs.setAttribute("class", "tabs primary-nav");

const pages = [
  {
    label: "home",
    renderContent: renderHomePage
  },
  {
    label: "menu",
    renderContent: renderMenuPage
  },
  {
    label: "contact",
    renderContent: renderContactPage
  }
];

pages.forEach((page) => {
  //create li
  const li = document.createElement('li');
  li.setAttribute("class", "tabs-item");
  li.id = `${page.label}-tab`;
  li.addEventListener('click', () => renderPage(page));

  //create anchor
  const a = document.createElement('a');
  a.setAttribute("href", "#");
  a.setAttribute("class", "tabs-link");
  a.innerText = page.label;

  //append
  li.appendChild(a);
  tabs.appendChild(li);
});


//Create header element for body
const header = document.createElement('header');
header.setAttribute("id", "header");

//create h1 element for header
const logo = document.createElement('img');
logo.src = './public/pataconia.png';
logo.style.height = "200px";

//append h1 to header
header.appendChild(logo);


//Create footer element for body
const footer = document.createElement("footer");
const h6 = document.createElement("h6");
h6.innerText = "© Created by Vollantre.";

footer.appendChild(h6);


//append elements to body
document.body.insertBefore(header, document.body.childNodes[0]);
document.body.insertBefore(tabs, document.body.childNodes[0]);
document.body.appendChild(footer);

//render Home page
renderPage(pages[0]);