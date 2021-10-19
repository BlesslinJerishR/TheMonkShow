// Changeable Delay
const delay = 3000; 

const pictures = document.querySelector(".pictures");
const picturesCount = pictures.childElementCount;
const maxLeft = (picturesCount - 1) * 100 * -1;

let current = 0;

// Changing Images Logic

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  pictures.style.left = current + "%";
}

// Auto Loop || Extra Feature 1
let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Arrows Event listener Module

// Right Arrow Module
document.querySelector(".right_arrow").addEventListener("click", function() {
  changeSlide();
  restart();
});

// Left Arrow Module
document.querySelector(".left_arrow").addEventListener("click", function() {
  changeSlide(false);
  restart();
});
