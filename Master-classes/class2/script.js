const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slidesCount = slides.length;
let index = 0;

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide() {
  index = (index - 1 + slidesCount) % slidesCount;
  updateSlider();
}

function nextSlide() {
  index = (index + 1) % slidesCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  })
}

updateSlider();