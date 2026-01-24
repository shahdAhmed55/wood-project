let types = [
  {
    title: "PREMIUM QUALITY",
    description: "FULL-GRAIN LEATHER",
  },
  {
    title: "HAND CRAFTED",
    description: "MADE WITH CARE",
  },
  {
    title: "DESIGN FOCUSED",
    description: "MODERN TEXTURES",
  },
];

function makeContent(t, d) {
  let content = `
   
        <div class="box">
           <div class= "stars">
                <img src="../images/star.png" alt="">
                <img src="../images/star.png" alt="">
                <img src="../images/star.png" alt="">
                <img src="../images/star.png" alt="">
                <img src="../images/star.png" alt="">
             </div>
            <h2>${t}</h2>
            <p>${d}</p>
        </div>
    
        `;
  return content;
}

let midlleContainer = document.querySelector(".mid");

for (let t of types) {
  midlleContainer.innerHTML += makeContent(t.title, t.description);
}

let images = [
  "../../images/about/Modern-Leather-Armchair.webp",
  "../../images/about/Modern-Leather-Chair-e1764684309550.webp",
];

let slidesContainer = document.querySelectorAll(".slide");
let m = 0;
setInterval(() => {
  m = (m + 1) % images.length;
  let content = `<img class="slide" src="${images[m]}" alt="">`;
  slidesContainer.forEach((right) => {
      right.innerHTML = content;
  });
}, 3000);
