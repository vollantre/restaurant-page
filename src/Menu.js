export default () => {
  const menuContent = document.createElement('div');
  menuContent.id = "menu-content";

  const menu = [
    {
      name: "patacon",
      price: "2$",
      filename: "patacones.jpg"
    },
    {
      name: "arepa",
      price: "0.5$",
      filename: "arepas.jpg"
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
    //{
    //  name: "",
    //  filename: ""
    //}
  ];

  const menuList = document.createElement('div');
  menuList.id = "menu-list";

  //insert images
  menu.forEach(dish => {
    const img = document.createElement('img');
    img.src = `../public/${dish.filename}`;

    const div = document.createElement('div');
    div.setAttribute("class", "menu-item");
    div.appendChild(img);

    //append dish to im
    menuList.appendChild(div);
  });

  menuContent.appendChild(menuList);
  
  //append to #content
  document.getElementById('content').appendChild(menuContent);
};