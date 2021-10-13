const CAROUSEL_TAZAS_CONTENEDOR = document.getElementById('carousel-tazas')
const CANT_FOTOS_TAZAS = 59


const ARRAY_PRODUCTS = Array.from({ length: CANT_FOTOS_TAZAS }, (_, i) => i + 1)

for (const product of ARRAY_PRODUCTS) {
    CAROUSEL_TAZAS_CONTENEDOR.appendChild(carouselItemBuilder(product, 'Tazas'))
}

function carouselItemBuilder(number, category) {
    const IMAGE_CONTAINER = document.createElement('div')
    IMAGE_CONTAINER.className = 'producto'
    const IMAGE = document.createElement('img')
    IMAGE.src = `../images/Productos/${category}/${number}.jpg`
    IMAGE.alt = 'foto-taza'
    IMAGE_CONTAINER.appendChild(IMAGE)
    return IMAGE_CONTAINER
}

const FILA_TAZAS = document.querySelector('.contenedor-carousel-tazas');
const PRODUCTO_TAZAS = document.querySelector('.producto');

const FLECHA_IZQ = document.getElementById('flecha-izquierda-tazas');
const FLECHA_DER = document.getElementById('flecha-derecha-tazas');

FLECHA_DER.addEventListener('click', () => {
    FILA_TAZAS.scrollLeft += FILA_TAZAS.offsetWidth;
});

FLECHA_IZQ.addEventListener('click', () => {
    FILA_TAZAS.scrollLeft -= FILA_TAZAS.offsetWidth;
});