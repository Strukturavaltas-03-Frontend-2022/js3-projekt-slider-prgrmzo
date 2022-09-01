import { images } from "./images.js";

const slideContainer = document.querySelector(".mySlides");
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");
const slideCounter = document.querySelector(".numbertext");
const slideCaption = document.querySelector(".text");
const mainSlide = document.querySelector(".mainSlide");
const dotContainer = document.querySelector(".dot-container");

// Itt állíthatod át az automatikus slideolás sebességét! (Ne legyen kisebb, mint 1500!)
const autoSlider = 5000;

let slideNum = 0;

const dotTemplate = `<span class="dot"></span>`;

for (let i = 0; i < images.length; i++) {
  dotContainer.innerHTML += dotTemplate;
}

const dots = Array.from(document.querySelectorAll(".dot"));

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    moveSlide(i);
  });
});

nextSlide.addEventListener("click", () => {
  slideNum === images.length - 1 ? (slideNum = 0) : slideNum++;
  moveSlide(slideNum);
});

prevSlide.addEventListener("click", () => {
  slideNum === 0 ? (slideNum = images.length - 1) : slideNum--;
  moveSlide(slideNum);
});

const moveSlide = (slideNum) => {
  dots.forEach((dot) => (dot.style.backgroundColor = "#bbb"));
  slideContainer.classList.add("fade");

  slideCounter.innerHTML = `${images[slideNum].id + 1}/${images.length}`;
  slideCaption.innerHTML = `${images[slideNum].capt}`;
  dots[slideNum].style.backgroundColor = images[slideNum].color;

  setTimeout(() => {
    mainSlide.setAttribute("src", `${images[slideNum].source}`);
  }, 750);

  setTimeout(() => {
    slideContainer.classList.remove("fade");
  }, 1500);
};

setInterval(() => {
  slideNum === images.length - 1 ? (slideNum = 0) : slideNum++;
  moveSlide(slideNum);
}, autoSlider);
