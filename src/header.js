

export default function header() {
  const header = document.createElement("header");
  header.innerHTML = ` 
  <div class="logo">foods</div>
  <ul class="menu--container">
  <li class="menu--item home">Home</li>
  <li class="menu--item menu">Menu</li>
  <li class="menu--item contact">Contact</li>
  </ul>` ;
header.classList.add('header')

  
  return header;
}
