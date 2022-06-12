// кнопка переключения темы
const btnToggleTheme = document.querySelector('.btn-toggle-theme');

// иконка луны
const moonIcon = document.querySelector('.btn-toggle-theme img');

// в основном для обращения к переменным внутри root
const root = document.documentElement;

// блок с градиентом от темной темы, при нажатии на кнопку, опасити 1 становится
const backgroundDarkTheme = document.querySelector('.dark-theme');

// белый цвет
const colorWhite = '#fff';
// черный цвет
const colorBlack = '#222329';


// ставим белую тему по умолчанию
// 1 -- белая тема
// 2 -- темная тема
if (window.localStorage.getItem('theme') === null) {
  window.localStorage.setItem('theme', 1);
}

// запускаем функцию, чтобы установить нужную тему при запуске сайта
toggleTheme();

// обработчик событий на кнопку переключения темы
btnToggleTheme.addEventListener('click', () => {
  if (window.localStorage.getItem('theme') == 1) {
    window.localStorage.setItem('theme', 0);
  } else {
    window.localStorage.setItem('theme', 1);
  }
  toggleTheme();
});

// основной  функционал переключения темы
function toggleTheme() {

  // Светлая тема
  if (window.localStorage.getItem('theme') == 1) {

    moonIcon.style.filter = 'none';
    root.style.setProperty('--colorFonts', colorBlack);
    backgroundDarkTheme.style.opacity = 0;

  }

  // Темная тема
  else {

    moonIcon.style.filter = 'invert(100%) sepia(13%) saturate(0%) hue-rotate(51deg) brightness(101%) contrast(104%)';
    root.style.setProperty('--colorFonts', colorWhite);
    backgroundDarkTheme.style.opacity = 1;
    
  }

};