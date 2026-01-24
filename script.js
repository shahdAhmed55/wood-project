let sections = [
  {
    title: "ALL PRODUCTS",
    img: "./images/homePage/Elegant-Wooden-Chair-1.webp",
    textInBtn: {
      name: "TEXTURE",
      url: "./projectPages/texture.html",
    },
    color: "red",
  },
  {
    title: "LEARN ABOUT US",
    img: "./images/homePage/Modern-Chair-Against-Textured-Background-2.webp",
    textInBtn: {
      name: "ABOUT US",
      url: "./projectPages/aboutUs.html",
    },
  },
  {
    title: "GET A QOUTE",
    img: "./images/homePage/Modern-Minimalist-Chair.webp",
    textInBtn:{
      name: "CONTACT",
      url: "./projectPages/contactUs.html",
    },
  },
];

let homePageContainer = document.querySelector(".home-page .right-section");

function sectionContent(t, b) {
  let content = `
    <div class="box">
    <h4>${t}</h4>
    <div class="btns">
    <a class="see-more-btn" href="">SEE MORE</a>
    <button>${b.name}</button>
    </div>
    </div>
    `;
  return content;
}
addSectionsToHomePage();

function addSectionsToHomePage() {
    for (let s of sections) {
      homePageContainer.innerHTML += sectionContent(s.title, s.textInBtn);
    }
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((box, i) => {
    box.style.backgroundImage = `url("${sections[i].img}")`;
    box.addEventListener("mouseenter", () => {
        box.style.padding = "20px";
        box.style.transition = "1s";
    })
       box.addEventListener("mouseleave", () => {
           box.style.padding = "30px";
           box.style.transition = ".5s";
       });
    let btn = box.querySelector("button")
    btn.addEventListener("click", () => {
        window.location.href = `${sections[i].textInBtn.url}`
    })
});


