//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
//    where the animation is coming from
    duration: 1000,
//    ms
    distance: '25rem',
//    how far it's travelling from
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
//    where the animation is coming from
    duration: 1000,
//    ms
    distance: '25rem',
//    how far it's travelling from
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
//    where the animation is coming from
    duration: 1000,
//    ms
    distance: '25rem',
//    how far it's travelling from
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
//    where the animation is coming from
    duration: 1000,
//    ms
    distance: '25rem',
//    how far it's travelling from
    delay: 600
});
