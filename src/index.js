import './style.css'
import menuSection from './menu'
import contactSection from './contactUs'
import aboutUs from './aboutUs'
import header from './header'
import abtusimg1 from './img/abtusimg1.jpg'
import abtusimg2 from './img/abtusimg2.jpg'
const main = document.querySelector('.container')
main.appendChild(header())
main.appendChild(aboutUs())
function addAndRemoveSections(){
  let nav = main.querySelector('.header').querySelectorAll('.menu--item')
  nav = Array.from(nav)
  nav.forEach(item => {
    item.addEventListener('click', function(e){
     let allChilds =  document.querySelector('.container').childNodes
     allChilds = Array.from(allChilds)
     if(e.target.textContent === 'Menu'){
      main.removeChild(allChilds[1])
      main.appendChild(menuSection(abtusimg1, 'peppered chicken', '$44.99'))

     }else if(e.target.textContent === 'Contact'){
      main.removeChild(allChilds[1])
      main.appendChild(contactSection())
     }
     else if(e.target.textContent === 'Home'){
      main.removeChild(allChilds[1])
      main.appendChild(aboutUs())
     }
  
     





    })
    
  });

}

addAndRemoveSections()

