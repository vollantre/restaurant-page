export default () => {
  const homeContent = document.createElement('div');
  homeContent.id = "home-content";

  const p = document.createElement('p');
  p.innerText = "Are you Venezuelan and do you want to feel at home? come and delight yourself with our best dishes. Welcome to Pataconia restaurant, a restaurant that offers the tastiest Venezuelan🇻🇪 dishes (patacones, arepas, cachapas, etc) in the city. ";
  homeContent.appendChild(p);

  //insert images
  const pataconesImg = document.createElement('img');
  pataconesImg.src = '../public/patacones.jpg';

  const cachapaImg = document.createElement('img');
  cachapaImg.src = '../public/cachapa1.jpg';

  const tequenosImg = document.createElement('img');
  tequenosImg.src = '../public/tequenos.jpg';

  const imgRow = document.createElement('div');
  imgRow.id = "image-row";

  imgRow.appendChild(pataconesImg);
  imgRow.appendChild(cachapaImg);
  imgRow.appendChild(tequenosImg);

  homeContent.appendChild(imgRow);

  //append to #content
  document.getElementById('content').appendChild(homeContent);
};