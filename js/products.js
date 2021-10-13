const CAROUSEL_TAZAS_CONTENEDOR = document.getElementById('carousel-tazas')
const CANT_FOTOS_TAZAS = 15


const ARRAY_PRODUCTS = Array.from({ length: CANT_FOTOS_TAZAS }, (_, i) => i + 1)

for (const product of ARRAY_PRODUCTS) {
    CAROUSEL_TAZAS_CONTENEDOR.appendChild(carouselItemBuilder(product, 'Tazas'))
}

function carouselItemBuilder(number, category) {
    const IMAGE_CONTAINER = document.createElement('div')
    IMAGE_CONTAINER.className = 'producto'
    const IMAGE = document.createElement('img')
    IMAGE.src = `../images/Productos/${category}/Seleccionadas/${number}.jpg`
    IMAGE.alt = 'foto-taza'
    IMAGE_CONTAINER.appendChild(IMAGE)
    return IMAGE_CONTAINER
}

const FILA_TAZAS = document.querySelector('.contenedor-carousel-tazas');
const PRODUCTO_TAZAS = document.querySelectorAll('.producto');

const FLECHA_IZQ = document.getElementById('flecha-izquierda-tazas');
const FLECHA_DER = document.getElementById('flecha-derecha-tazas');

FLECHA_DER.addEventListener('click', () => {
    FILA_TAZAS.scrollLeft += FILA_TAZAS.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

FLECHA_IZQ.addEventListener('click', () => {
    FILA_TAZAS.scrollLeft -= FILA_TAZAS.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

const NUM_PAGINAS_TAZAS_WEB = Math.ceil(PRODUCTO_TAZAS.length / 5);
const NUM_PAGINAS_TAZAS_TABLET = Math.ceil(PRODUCTO_TAZAS.length / 4);
const NUM_PAGINAS_TAZAS_MOBIL = Math.ceil(PRODUCTO_TAZAS.length / 2);

function calculoIndicadores() {

    const INDICADORES = document.querySelector('#indicadores-tazas');
    INDICADORES.innerHTML = ''
    if (window.innerWidth < 576) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_MOBIL; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA_TAZAS, i)
        }
    } else if (window.innerWidth < 768) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_TABLET; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA_TAZAS, i)
        }
    } else {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_WEB; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA_TAZAS, i)
        }
    };
}

function indicadorActivo(indicador, fila, i) {
    if (i === 0) {
        indicador.classList.add('activo');
    }
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

calculoIndicadores()
window.addEventListener('resize', () => { calculoIndicadores() })