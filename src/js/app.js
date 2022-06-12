import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";

const btnToggleTheme = document.querySelector('.btn-toggle-theme')

const root = document.documentElement;
const backgroundDarkTheme = document.querySelector('.dark-theme');

const colorWhite = '#fff';
const colorBlack = '#222329';

if (window.localStorage.getItem('theme') === null) {
  window.localStorage.setItem('theme', 1);
}

document.addEventListener("DOMContentLoaded", () => {

  flsFunctions.isWebp();


  // import "./files/sliders.js";

  toggleTheme();

  btnToggleTheme.addEventListener('click', () => {
    if (window.localStorage.getItem('theme') == 1) {
      window.localStorage.setItem('theme', 0);
    } else {
      window.localStorage.setItem('theme', 1);
    }
    toggleTheme();
  });

  function toggleTheme() {
    if (window.localStorage.getItem('theme') == 1) {
      root.style.setProperty('--colorFonts', colorBlack);
      backgroundDarkTheme.style.opacity = 0;
    } else {
      root.style.setProperty('--colorFonts', colorWhite);
      backgroundDarkTheme.style.opacity = 1;
    }

  };



});

