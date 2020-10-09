export default () => {
  const contactContent = document.createElement('div');
  contactContent.id = "contact-content";

  const addressHeader = document.createElement('h2');
  addressHeader.innerText = "Address";
  const addressText = document.createElement('p');
  addressText.innerText = "You know where to find us.";

  const address = document.createElement('div');
  address.appendChild(addressHeader);
  address.appendChild(addressText);

  const phoneHeader = document.createElement('h2');
  phoneHeader.innerText = "Phone";
  const phoneText = document.createElement('p');
  phoneText.innerText = "+58 424 121212121";

  const phone = document.createElement('div');
  phone.appendChild(phoneHeader);
  phone.appendChild(phoneText);

  contactContent.appendChild(address);
  contactContent.appendChild(phone);

  //append to #content
  document.getElementById('content').appendChild(contactContent);
};