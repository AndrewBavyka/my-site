const sidebarElement = document.querySelector('.sidebar');
const btnSidebar = document.querySelector('.btn-sidebar-toggler');
const aside = document.querySelector('aside');
const btnCloseSidebar = document.querySelector('.sidebar-close-js');
//  const test = document.querySelector('main');

btnSidebar.addEventListener('click', () => {
  aside.style.opacity = 0;
  // sidebarElement.style.display = 'block';
  // test.style.transition = "all .4s";
  // test.style.marginLeft = "250px";
  sidebarElement.classList.add('open-js')
});

btnCloseSidebar.addEventListener('click', () => {
  aside.style.opacity = 1;
  // test.style.marginLeft = "0px";
  // sidebarElement.style.display = 'none';
  sidebarElement.classList.remove('open-js')
});