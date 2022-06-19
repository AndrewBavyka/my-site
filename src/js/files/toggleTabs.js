const tabs = document.querySelectorAll('.js-page');
const btnToggleTabs = document.querySelectorAll('.js-btn-tab');
const btnTabsImg = document.querySelectorAll('.js-btn-tab img');

const root = document.documentElement;

(function verifyTabs() {
  if (sessionStorage.getItem('active-page') == null) {
    sessionStorage.setItem('active-page', 0);
    toggleTabs(sessionStorage.getItem('active-page'));
  } else {
    toggleTabs(sessionStorage.getItem('active-page'));
  }
}())


btnToggleTabs.forEach((item, id) => {
  item.addEventListener('click', () => {
    sessionStorage.setItem('active-page', id);
    toggleTabs(sessionStorage.getItem('active-page'));
  })
})


function toggleTabs(id) {

  btnTabsImg.forEach(item => {
    // черный цвет иконки
    item.style.filter = 'invert(0%) sepia(97%) saturate(0%) hue-rotate(188deg) brightness(99%) contrast(104%)';
  });
  // белый цвет иконки
  btnTabsImg[id].style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(323deg) brightness(106%) contrast(103%)';
  
  btnToggleTabs.forEach(item => {
    // серый цвет кнопки
    item.style.backgroundColor = 'var(--lightGray)';
  });
  // фиолетовый цвет кнопки
  btnToggleTabs[id].style.backgroundColor = 'var(--violet)';
  

  tabs.forEach(item => {
    item.style.display = 'none';
  });
  tabs[id].style.display = 'flex';
}