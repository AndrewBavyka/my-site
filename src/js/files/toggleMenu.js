const sidebarElement = document.querySelector('.sidebar');
const btnSidebar = document.querySelector('.btn-sidebar-toggler');
const aside = document.querySelector('aside');
const btnCloseSidebar = document.querySelector('.sidebar-close-js');

btnSidebar.addEventListener('click', () => {
  aside.style.opacity = 0;
  sidebarElement.style.display = 'block';
});

btnCloseSidebar.addEventListener('click', () => {
  aside.style.opacity = 1;
  sidebarElement.style.display = 'none';
});