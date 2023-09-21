const images = document.querySelectorAll(".img-wrapper > img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let counter = 0;

nextBtn.addEventListener("click", function nextSlide() {
  images[counter].style.animation = "next1 0.5s ease-out";
  if (counter == images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  images[counter].style.animation = "next2 0.5s ease-out forwards";
});

prevBtn.addEventListener("click", function prevSlide() {
  images[counter].style.animation = "prev1 0.5s ease-out";
  if (counter == 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }
  images[counter].style.animation = "prev2 0.5s ease-out forwards";
});
