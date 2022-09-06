

export default function aboutUs() {
  const aboutUsCon = document.createElement("div");
  aboutUsCon.classList.add('section')


  aboutUsCon.innerHTML = `<h2 class="about--header">About us</h2>
 
  <p class="about--text">We are a restuarant in downtown 
  Kano serving the best healthy food made with the best locally sourced ingredients</p><p class="about--text">Not only is our food healthy, its also chef made to your taste and diet and its made with alot of love❤️</pt>`;
  return aboutUsCon;
}

//  <div class="about--img--container">
  // <img src="${abtusimg2}" alt='food image'class="about--img"></img>
  // <img src="${abtusimg1}" alt='food image' class="about--img"></img>
  // </div>
