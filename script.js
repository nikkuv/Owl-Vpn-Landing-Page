const hamburger = document.querySelector(".navbar__hamburger");
const links = document.querySelector(".navbar__links");

let clicked = false;
hamburger.addEventListener("click", () => {
  if (!clicked) {
    hamburger.src = "images/icon-close.svg";
    links.classList.add("show");
    clicked = true;
  } else {
    hamburger.src = "images/icon-hamburger.svg";
    links.classList.remove("show");
    clicked = false;
  }
});

//carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//  image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("review__content");
  var dots = document.getElementsByClassName("review__dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

const banner = document.querySelector(".feature-1");
const cross = document.querySelector(".cross");

const d = new Date();
let time = d.getHours();

const greet = document.querySelector(".greet");

if (time < 12) {
  greet.textContent = "Good Morning";
} else if (time < 18) {
  greet.textContent = "Good Afternoon ";
} else {
  greet.textContent = "Good night";
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    banner.style.display = "none";
  }, 10000);
});

cross.addEventListener("click", () => {
  banner.style.display = "none";
});

//function to check for valid hex Color
function validHexColor(color){
  return color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
}

const color = document.querySelector("input");

color.addEventListener("change", () => {
  if(validHexColor(color.value)){
    document.documentElement.style.backgroundColor = color.value;
  }
});

