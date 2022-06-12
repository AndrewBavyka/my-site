"use strict";
import "../scss/style.scss";

// изменение цвета темы
import "./files/toggleTheme.js";

// import "./files/sliders.js";
import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();

const sidebarElement = document.querySelector('.sidebar-active');
const btnSidebar = document.querySelector('.btn-sidebar-toggler');
const aside = document.querySelector('aside');
const btnCloseSidebar = document.querySelector('.sidebar-active__container-close');

btnSidebar.addEventListener('click', () => {
  aside.style.opacity = 0;
  sidebarElement.style.display = 'block';
});

btnCloseSidebar.addEventListener('click', () => {
  aside.style.opacity = 1;
  sidebarElement.style.display = 'none';
});


