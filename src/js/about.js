import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
const aboutBtnRefs = document.querySelector('#about-btn-js');
const aboutRefs = document.querySelector('#swiper-about');

const aboutAccordion = new Accordion('.accordion-container');
aboutAccordion.open(0);

const aboutSwiper = new Swiper('#swiper-about', {
  direction: 'horizontal',
  loop: true,
  initialSlide: 0,
  spaceBetween: 0,
  allowSlidePrev: false,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

const observAbout = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    aboutBtnRefs.addEventListener('click', slideNext);
    document.addEventListener('keydown', nextSwap);
  } else {
    aboutBtnRefs.removeEventListener('click', slideNext);
    document.removeEventListener('keydown', nextSwap);
  }
});

observAbout.observe(aboutRefs);

function slideNext() {
  aboutSwiper.slideNext();
}

function nextSwap(event) {
  event.preventDefault();
  if (event.key === 'ArrowRight' || event.key === 'Tab') {
    slideNext();
  }
}
