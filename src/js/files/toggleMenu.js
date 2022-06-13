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