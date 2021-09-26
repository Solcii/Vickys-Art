const menuBtn = document.querySelector('.menu-btn');
const NavMenu = document.querySelector('.nav-menu')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    NavMenu.classList.toggle('nav-menu_visible')
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const portadaBtn = document.getElementById('boton-portada')
portadaBtn.addEventListener('click', () => {
    const element = document.querySelector('#categoria-productos')
    const top = element.getBoundingClientRect().top - 80
    window.scrollTo({
        top,
        behavior: 'smooth'
    })
});