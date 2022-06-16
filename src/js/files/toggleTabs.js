const tabs = document.querySelectorAll('.js-page');
const btnToggleTabs = document.querySelectorAll('.js-btn-tab');

(function verifyTabs() {
  if (sessionStorage.getItem('active-page') == null) {
    sessionStorage.setItem('active-page', 0);
    toggleTabs(0);
  } else {
    toggleTabs(sessionStorage.getItem('active-page'));
  }
}())


btnToggleTabs.forEach((item, id) => {
  item.addEventListener('click', () => {
    toggleTabs(id)
    sessionStorage.setItem('active-page', id);
  })
})


function toggleTabs(id) {
  tabs.forEach(item => {
    item.style.display = 'none';
  });
  tabs[id].style.display = 'flex';
}