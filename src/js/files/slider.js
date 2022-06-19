import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper(".js-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});