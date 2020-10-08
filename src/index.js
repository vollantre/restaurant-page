import renderHomePage from './Home';
import renderMenuPage from './Menu';
import renderContactPage from './Contact'

//create header element
const header = document.createElement('header');
header.setAttribute("id", "header");

//create h1 element for header
const h1 = document.createElement('h1');
h1.innerText = 'Patacon!';

//append h1 to header
header.appendChild(h1);

//create tab list
const tabs = document.createElement('ul');
tabs.setAttribute("class", "tabs primary-nav")

const pages = [
  {
    label: "Home",
    renderContent: renderHomePage
  },
  {
    label: "Menu",
    renderContent: renderMenuPage
  },
  {
    label: "Contact",
    renderContent: renderContactPage
  }
];

pages.forEach((page) => {
  //create li
  const li = document.createElement('li');
  li.setAttribute("class", "tabs-item");
  li.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const pageTitle = document.createElement('h1');
    pageTitle.innerText = page.label;

    content.appendChild(pageTitle);
    page.renderContent();
  });

  //create anchor
  const a = document.createElement('a');
  a.setAttribute("href", "#");
  a.setAttribute("class", "tabs-link");
  a.innerText = page.label;

  //append
  li.appendChild(a);
  tabs.appendChild(li);
})

//append elements to body
document.body.insertBefore(tabs, document.body.childNodes[0]);
document.body.insertBefore(header, document.body.childNodes[0]);

const content = document.querySelector('#content');