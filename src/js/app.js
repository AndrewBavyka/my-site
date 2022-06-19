"use strict";

import "../scss/style.scss";

// изменение цвета темы
import "./files/toggleTheme.js";

// включение/выключение меню
import "./files/toggleMenu.js";

// анимация для кнопки включения меню
import "./files/animationBtnOpenMenu.js";
// анимация точек в мессенджере (Обо мне)
import "./files/animationDotsMessenger.js";
// Переключение экранов
import "./files/toggleTabs.js";

import "./files/slider.js";

import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();





let Progress = function (selector) {
  if (!selector) return false;

  this.element = document.querySelector(selector);
  this.path = this.element.querySelector('.path');
  this.text = this.element.querySelector('.text');
  this.length = this.path.r.baseVal.value * 2 * Math.PI;

  this.path.style.strokeDasharray = this.length + ' ' + this.length;
}

Progress.prototype.value = function (val) {
  if (val && typeof val !== undefined) {
    this.path.style.strokeDashoffset = this.length * (val / 100) - this.length;
    this.text.textContent = Math.round(val) + '%';
  }
  else {
    return this.lenght / this.path.style.strokeDashoffset;
  }
}

// document.querySelector('.swiper-button-next').addEventListener('click', () => {
//   var progress1 = new Progress('.item-html');
//   progress1.value(90);
// });

let progress1 = new Progress('.item-html');
progress1.value(90);

let progress2 = new Progress('.item-css');
progress2.value(80);

let progress3 = new Progress('.item-js');
progress3.value(75);
