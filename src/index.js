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
    tabLabel: "Home",
    renderContent: renderHomePage
  },
  {
    tabLabel: "Menu",
    renderContent: renderMenuPage
  },
  {
    tabLabel: "Contact",
    renderContent: renderContactPage
  }
];
pages.forEach((page) => {
  //create li
  const li = document.createElement('li');
  li.setAttribute("class", "tabs-item");
  li.addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    page.renderContent();
  });

  //create anchor
  const a = document.createElement('a');
  a.setAttribute("href", "#");
  a.setAttribute("class", "tabs-link");
  a.innerText = page.tabLabel;

  //append
  li.appendChild(a);
  tabs.appendChild(li);
})

//create image
const image = document.createElement('img')
image.src = '../public/patacones.jpg';

//append elements to body
document.body.insertBefore(tabs, document.body.childNodes[0]);
document.body.insertBefore(header, document.body.childNodes[0]);

const content = document.querySelector('#content');
content.appendChild(image);