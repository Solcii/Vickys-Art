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