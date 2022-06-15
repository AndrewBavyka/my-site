"use strict";

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import "../scss/style.scss";

// изменение цвета темы
import "./files/toggleTheme.js";

// включение/выключение меню
import "./files/toggleMenu.js";

// анимация для кнопки включения меню
import "./files/animationBtnOpenMenu.js";

// Переключение экранов
import "./files/toggleTabs.js";

import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();


var swiper = new Swiper(".js-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



