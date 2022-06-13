import anime from 'animejs/lib/anime.es.js';

const btnOpenMenu = document.querySelector('.btn-sidebar-toggler');

const x1 = btnOpenMenu.getBoundingClientRect().left;
const x2 = btnOpenMenu.getBoundingClientRect().right;
const y1 = btnOpenMenu.getBoundingClientRect().top;
const y2 = btnOpenMenu.getBoundingClientRect().bottom;

let stopAnim = 0;

let settingAnimOM = anime.timeline({
  easing: 'easeOutExpo',
  autoplay: false,
  loop: true,
  duration: 400
});

settingAnimOM.
add({
  targets: '.btn-sidebar-toggler span',
  scale: [1, 1.2],
  delay: anime.stagger(100),
});
settingAnimOM.
add({
  targets: '.btn-sidebar-toggler span',
  scale: [1.2, 1],
  delay: anime.stagger(100),
});


function pos(e){

  if (e.pageX >= x1 && e.pageX <= x2 && e.pageY >= y1 && e.pageY <= y2) {
    if (stopAnim == 0) {
      settingAnimOM.play();
    }
  } else {
    settingAnimOM.pause();
  }
}

addEventListener('mousemove', pos, false);
