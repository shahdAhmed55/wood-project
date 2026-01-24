let infos = {
  BrownLeather: [
    {
      name: "Soft Grain",
      description:
        "A warm, naturally textured leather with gentle movement in the grain. Ideal for chairs that need both comfort and a refined, handcrafted feel.",
      price: "$350",
      img: "../images/texture/2.webp",
    },
    {
      name: "Deep Cracked",
      description:
        "A rich, pronounced leather with deep creases and strong character. Perfect for bold statement pieces that should age beautifully over time.",
      price: "$339",
      img: "../images/texture/3.webp",
    },
    {
      name: "Distressed Vintage",
      description:
        "A rugged, weathered surface with organic patterns that make every piece unique. Great for vintage-inspired designs and industrial interiors.",
      price: "$320",
      img: "../images/texture/5.webp",
    },
    {
      name: "Smooth Classic",
      description:
        "A fine, even grain with a clean and elegant expression. Works well for modern, minimalistic spaces and high-end furniture.",
      price: "$329",
      img: "../images/texture/Black-White-Simple-Minimal-Classic-Circular-Typographic-Fashion-Brand-Chaos-Logo.webp",
    },
  ],
  DarkLeather: [
    {
      name: "Pebbled Dark",
      description:
        "A durable, deep-toned leather with a natural pebbled surface. Ideal for high-end chairs that need both structure and long-lasting elegance.",
      price: "$350",
      img: "../images/texture/9.webp",
    },
    {
      name: "Scaled Embossed",
      description:
        "A bold, textured leather with a striking, scale-like pattern. Perfect for statement furniture pieces that demand attention and character.",
      price: "$339",
      img: "../images/texture/11.webp",
    },
    {
      name: "Soft Fold",
      description:
        "A smooth, premium leather with gentle folds that create a sophisticated, fluid look. Works beautifully on lounge chairs and soft seating.",
      price: "$320",
      img: "../images/texture/10.webp",
    },
    {
      name: "Croc Embossed",
      description:
        "A rich, crocodile-patterned leather that adds luxury and depth to any piece. Often used for accent chairs and exclusive interior designs.",
      price: "$329",
      img: "../images/texture/12.webp",
    },
    {
      name: "Matte Deep Grain",
      description:
        "A dark, refined leather with a subtle matte finish and visible natural grain. Ideal for modern interiors where atmosphere and texture matter.",
      price: "$329",
      img: "../images/texture/14.webp",
    },
    {
      name: "Dragon Bon",
      description:
        "A bold, textured leather with a striking, scale-like pattern. Perfect for statement furniture pieces that demand attention and character.",
      price: "$250",
      img: "../images/texture/9.webp",
    },
  ],
  VintageLeather: [
    {
      name: "Aged Patina",
      description:
        "A naturally worn, character-rich surface with deep markings and warm undertones. Perfect for furniture that should feel timeless and full of history.",
      price: "$350",
      img: "../images/texture/2.webp",
    },
    {
      name: "Weathered Classic",
      description:
        "Soft, gently faded texture with organic transitions in tone. A great choice for pieces that need an authentic, well-loved expression.",
      price: "$339",
      img: "../images/texture/3.webp",
    },
    {
      name: "Antique Fold",
      description:
        "Smooth, flexible material with subtle folds and a vintage sheen. Ideal for lounge seating and designs inspired by old-world craftsmanship.",
      price: "$320",
      img: "../images/texture/12.webp",
    },
    {
      name: "Sun-Kissed Grain",
      description:
        "A light, warm texture with soft grain movement and gentle aging. Works beautifully in bright interiors and classic Scandinavian spaces.",
      price: "$329",
      img: "../images/texture/11.webp",
    },
    {
      name: "Heritage Texture",
      description:
        "A distinct, cracked pattern with natural variation across the surface. Adds depth, storytelling, and an artisan feel to any piece.",
      price: "$339",
      img: "../images/texture/5.webp",
    },
  ],
};

function makeContent(k) {
  let content = `
     <div class="big-box" id="${k}">
     <h1>${k}</h1>
         <div class="boxes"></div>
     </div>
    `;
  return content;
}

function makecotentOfSmallbox(n, i, p, d) {
  let content = `
 
        <div class="box">
            <div class="img">
                <img src="${i}" alt="">
            </div>
            <div class="content">
                <div class="up">
                    <h4>${n}</h4>
                    <span>${p}</span>
                </div>
                <p>${d}</p>
            </div>
        </div>
    `;
  return content;
}

let container = document.querySelector(".right-section .container");
Object.keys(infos).forEach((key) => {
  container.innerHTML += makeContent(key);
  fillBigBoxeswithCotent(infos[key], key);
  scrollToSection(key);
});

function fillBigBoxeswithCotent(items, key) {
  let bigBoxContainer = document.querySelectorAll(
    ".right-section .container .big-box .boxes",
  );
  bigBoxContainer.forEach((box) => {
    items.forEach((item) => {
      if (box.parentElement.getAttribute("id") == key) {
        box.innerHTML += makecotentOfSmallbox(
          item.name,
          item.img,
          item.price,
          item.description,
        );
      }
    });
  });
}

function scrollToSection(k) {
  let links = document.querySelectorAll(".right-section ul li a");
  links.forEach((link) => {
    link.innerHTML == k ? link.setAttribute("href", `#${k}`) : null;
  });
}
