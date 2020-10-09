export default () => {
  const homeContent = document.createElement('div');
  homeContent.id = "home-content";

  const p = document.createElement('p');
  p.innerText = "Are you Venezuelan and do you want to feel at home? come and delight yourself with our best dishes. Welcome to Pataconia restaurant, a restaurant that offers the tastiest Venezuelan🇻🇪 dishes in the city. Now with delivery!";
  homeContent.appendChild(p);

  //append to #content
  document.getElementById('content').appendChild(homeContent);
};