import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
//   loop: true, безперервна прокрутка
  initialSlide: 0,
  spaceBetween: 32,
  slidesPerView: "auto",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.getElementById('btn-next').addEventListener('click', () => {
  swiper.slideNext();
});

document.getElementById('btn-prev').addEventListener('click', () => {
  swiper.slidePrev();
});
