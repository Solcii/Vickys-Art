const PORTADA_BTN = document.getElementById('boton-portada')
const ELEMENT = document.querySelector('#categoria-productos')
PORTADA_BTN.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    const TOP_ANCHOR = ELEMENT.getBoundingClientRect().top - 80
    window.scrollTo({
        top: TOP_ANCHOR,
        behavior: 'smooth',
    })
});