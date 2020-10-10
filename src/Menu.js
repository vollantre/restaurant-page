export default () => {
  const menuContent = document.createElement('div');
  menuContent.id = "menu-content";

  const menu = [
    {
      name: "patacon",
      price: "2$",
      filename: "patacones.jpg",
    },
    {
      name: "arepa",
      price: "0.5$",
      filename: "arepas.jpg",
    },
    {
      name: "cachapa",
      price: "2$",
      filename: "cachapa.jpg"
    },
    {
      name: "tequeños",
      price: "1$",
      filename: "tequenos.jpg"
    },
  ];

  const menuList = document.createElement('div');
  menuList.id = "menu-list";

  //insert images
  menu.forEach(dish => {
    const img = document.createElement('img');
    img.src = `./public/${dish.filename}`;

    const item = document.createElement('div');
    item.setAttribute("class", "menu-item");
    item.appendChild(img);

    const h3 = document.createElement('h3');
    h3.innerText = dish.name;

    const div = document.createElement('div');
    const price = document.createElement('p');
    price.setAttribute("class", "price");
    price.innerText = dish.price;

    div.appendChild(h3);
    div.appendChild(price);
    item.appendChild(div);

    //append dish to menuList
    menuList.appendChild(item);
  });

  menuContent.appendChild(menuList);
  
  //append to #content
  document.getElementById('content').appendChild(menuContent);
};