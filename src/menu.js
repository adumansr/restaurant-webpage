
const menuSection = function(foodImgSrc, Name, price){
  function menuCard(foodImgSrc, Name, price) {
    const card = document.createElement('div')
    card.innerHTML = `<img src="${foodImgSrc}"></img><p>${Name}</p><p>${price}</p>`
    card.classList.add('food--card')
  
    return card
  }
  const menuSection = document.createElement('div')
  menuSection.appendChild(menuCard(foodImgSrc, Name, price))
  menuSection.classList.add('menu--section')
  return menuSection


}

export default menuSection