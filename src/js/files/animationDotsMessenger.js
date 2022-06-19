import anime from 'animejs/lib/anime.es.js';

const dotsMessenger = document.querySelector('.typing-anim');
const receivingMessage = document.querySelectorAll('.message-container');


//Анимация для точек в мессенджере
let animDots = anime.timeline({
    easing: 'easeInOutQuad',
    autoplay: true,
    loop: true,
    duration: 300,
    direction: 'alternate',
});

animDots.add({
    targets: '.typing-anim span',
    scale: [1, 1.3],
    delay: (el, i) => {
        return 300 * i;
    },
});

//Анимация для сообщений в мессенджере
let animMessage = anime.timeline({
    easing: 'easeOutSine',
    duration: 1000,
    delay: (el, i) => {
        return 1000 * i;
    },
});

animMessage.add({
    targets: receivingMessage,
    translateX: [-1000, 50],
});