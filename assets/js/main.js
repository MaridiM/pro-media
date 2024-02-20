
const checkSplide = document.querySelector('.splide')

const splide = checkSplide && new Splide( '.splide', {
    // Loop
    type: 'loop',
    speed: 1500,

    // Autoplay
    autoplay: true,
    interval: 10000,
    pauseOnHover: true,

    pagination: false,
    arrows: false
}).mount();


const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    const header = document.querySelector('.header')
    header.classList.toggle('header-burger')
})
