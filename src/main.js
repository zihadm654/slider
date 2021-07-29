const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelector('.dots');

let slideWidth = slides[0].clientWidth;
let slideNumber = slides.length;
let currentSlide = 0;

const init = () => {
  slides.forEach((div, index) => {
    div.style.left = index * 100 + '%';
  });
  slides[0].classList.add('active');
};
init();

const createDots = () => {
  for (let i = 0; i < slides.length; i++) {
    const circle = document.createElement('div');
    circle.classList.add('dot');
    dots.appendChild(circle);

    circle.addEventListener('click', () => {
      goToSlide(i);
    });
  }
  dots.children[0].classList.add('active');
};
createDots();

nextBtn.addEventListener('click', () => {
  if (currentSlide >= slideNumber - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener('click', () => {
  if (currentSlide <= 0) {
    goToSlide(slideNumber - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
  slider.style.transform = 'translateX(-' + slideWidth * slideNumber + 'px)';

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide Image

  let currentActive = document.querySelector('.slide.active');
  currentActive.classList.remove('active');
  slides[currentSlide].classList.add('active');

  //   set active class for navigation dots

  let currentDot = document.querySelector('.dot.active');
  currentDot.classList.remove('active');
  dots.children[currentSlide].classList.add('active');
}
