/* Funciones */

function createArray(cantFotos, carouselContenedor, category, classname, description) {
    const ARRAY_PRODUCTS = Array.from({ length: cantFotos }, (_, i) => i + 1)
    for (const product of ARRAY_PRODUCTS) {
        carouselContenedor.appendChild(carouselItemBuilder(product, category, classname, description))
    }
}

function carouselItemBuilder(number, category, classname, description) {
    const IMAGE_CONTAINER = document.createElement('div')
    IMAGE_CONTAINER.className = `producto ${classname}`
    const IMAGE = document.createElement('img')
    IMAGE.src = `../images/Productos/${category}/Seleccionadas/${number}.jpg`
    IMAGE.alt = `${description}`
    IMAGE_CONTAINER.appendChild(IMAGE)
    return IMAGE_CONTAINER
}

function createCarouselArrow(selectorFila, selectorFlechaIzq, selectorFlechaDer, selectorIndicador) {
    const FILA = document.querySelector(selectorFila);

    const FLECHA_IZQ = document.getElementById(selectorFlechaIzq);
    const FLECHA_DER = document.getElementById(selectorFlechaDer);

    FLECHA_DER.addEventListener('click', () => {
        FILA.scrollLeft += FILA.offsetWidth;
        const indicadorActivo = document.querySelector(`${selectorIndicador} .activo`);
        if (indicadorActivo.nextSibling) {
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    FLECHA_IZQ.addEventListener('click', () => {
        FILA.scrollLeft -= FILA.offsetWidth;
        const indicadorActivo = document.querySelector(`${selectorIndicador} .activo`);
        if (indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
}

function calculoIndicadores(selectorIndicador, selectorFila, selectorProduct) {
    const FILA = document.querySelector(selectorFila);
    const PRODUCTO = document.querySelectorAll(selectorProduct);
    const NUM_PAGINAS_TAZAS_WEB = Math.ceil(PRODUCTO.length / 5);
    const NUM_PAGINAS_TAZAS_TABLET = Math.ceil(PRODUCTO.length / 4);
    const NUM_PAGINAS_TAZAS_MOBIL = Math.ceil(PRODUCTO.length / 2);

    const INDICADORES = document.querySelector(selectorIndicador);
    INDICADORES.innerHTML = ''
    if (window.innerWidth < 576) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_MOBIL; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    } else if (window.innerWidth < 768) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_TABLET; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    } else {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_WEB; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    };
}

function indicadorActivo(indicador, fila, i, selectorIndicador) {
    if (i === 0) {
        indicador.classList.add('activo');
    }
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector(`${selectorIndicador} .activo`).classList.remove('activo');
        e.target.classList.add('activo');
    });
}


/* Funcion para crear Carousel productos por categoria */

function createCarouselByCategory(selectorCarousel, category, classname, descriptionImg, selectorContenedorCarousel, selectorFlechaIzq, selectorFlechaDer, selectorIndicadores, selectorProduct) {
    const CAROUSEL_TAZAS_CONTENEDOR = document.getElementById(selectorCarousel);
    const CANT_FOTOS_TAZAS = 15;
    const ARRAY_TAZAS = createArray(CANT_FOTOS_TAZAS, CAROUSEL_TAZAS_CONTENEDOR, category, classname, descriptionImg);
    const CAROUSEL_ARROW_TAZAS = createCarouselArrow(selectorContenedorCarousel, selectorFlechaIzq, selectorFlechaDer, selectorIndicadores);
    const INDICADORES_TAZAS = calculoIndicadores(selectorIndicadores, selectorContenedorCarousel, selectorProduct);
    window.addEventListener('resize', () => { calculoIndicadores(selectorIndicadores, selectorContenedorCarousel, selectorProduct) });

}


/* Creacion carouseles por categoria de producto */
/* Tazas */

const CREATE_CAROUSEL_TAZAS = createCarouselByCategory('carousel-tazas', 'Tazas', 'producto-tazas', 'foto taza', '.contenedor-carousel-tazas', 'flecha-izquierda-tazas', 'flecha-derecha-tazas', '#indicadores-tazas', '.producto-tazas');

/* Platos, bandejas y bowls */
const CREATE_CAROUSEL_PLATOS = createCarouselByCategory('carousel-platos', 'Platos bandejas bowls', 'producto-platos', 'foto plato, producto o bowl', '.contenedor-carousel-platos', 'flecha-izquierda-platos', 'flecha-derecha-platos', '#indicadores-platos', '.producto-platos');