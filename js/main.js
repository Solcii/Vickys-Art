const MENUBTN = document.querySelector('.menu-btn');
const NAVMENU = document.querySelector('.nav-menu')
MENUBTN.addEventListener('click', () => {
    NAVMENU.classList.toggle('nav-menu_visible')
    MENUBTN.classList.toggle('open')
});

const PORTADABTN = document.getElementById('boton-portada')
PORTADABTN.addEventListener('click', () => {
    const ELEMENT = document.querySelector('#categoria-productos')
    const TOP = ELEMENT.getBoundingClientRect().TOP - 80
    window.scrollTo({
        TOP,
        behavior: 'smooth'
    })
});