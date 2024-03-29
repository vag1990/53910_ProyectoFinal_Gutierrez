

// DATOS DE SERVICIOS

const datosServicios = {
    servicio1: {
        titulo: "Legal Assets Standard",
        imagen: "/img/imgservicio1.jpg",
        descripcion1: "Descripción del servicio 1",
        descripcion2: "Descripción del servicio 2",
        descripcion3: "Descripción del servicio 3",
        descripcion4: "Descripción del servicio 4"
    },
    servicio2: {
        titulo: "Legal Assets Premium",
        imagen: "/img/imgservicio2.jpg",
        descripcion1: "Descripción del servicio 1",
        descripcion2: "Descripción del servicio 2",
        descripcion3: "Descripción del servicio 3",
        descripcion4: "Descripción del servicio 4"
    },
    servicio3: {
        titulo: "AI-ProJ Online Express",
        imagen: "/img/imgservicio3.jpg",
        descripcion1: "Descripción del servicio 1",
        descripcion2: "Descripción del servicio 2",
        descripcion3: "Descripción del servicio 3",
        descripcion4: "Descripción del servicio 4",
    },
    servicio4: {
        titulo: "AI-ProJ Online Standard",
        imagen: "/img/imgservicio4.jpg",
        descripcion1: "Descripción del servicio 1",
        descripcion2: "Descripción del servicio 2",
        descripcion3: "Descripción del servicio 3",
        descripcion4: "Descripción del servicio 4",
    },
    servicio5: {
        titulo: "AI-ProJ Online Full",
        imagen: "/img/imgservicio5.jpg",
        descripcion1: "Descripción del servicio 1",
        descripcion2: "Descripción del servicio 2",
        descripcion3: "Descripción del servicio 3",
        descripcion4: "Descripción del servicio 4",
    },
    servicio6: {
        titulo: "G_AIJ-Partnership",
        imagen: "/img/imgservicio6.jpg",
        descripcion1: "Descripción del servicio 1",
        descripcion2: "Descripción del servicio 2",
        descripcion3: "Descripción del servicio 3",
        descripcion4: "Descripción del servicio 4"
    }
};

// CONSTRUCTORA DE TARJETAS DE SERVICIOS
function crearTarjetaServicioConImagen(titulo, imagenSrc, descripcion1, descripcion2, descripcion3, descripcion4) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card', 'mb-3');
    tarjeta.innerHTML = `
        <img src="${imagenSrc}" class="card-img-top" alt="${titulo}">
        <div class="card-body">
            <h1 class="card-title">${titulo}</h1>
            <p class="card-text">${descripcion1}</p>
            <p class="card-text">${descripcion2}</p>
            <p class="card-text">${descripcion3}</p>
            <p class="card-text">${descripcion4}</p>

            <button type="submit" id="btnAgregar" class="btn btn-outline-success">Obtener Servicio</button> 
        </div>
    `;
    return tarjeta;
}

// Función para manejar el clic en los enlaces de servicios
function manejarClicServicio(event) {
    event.preventDefault(); // Evitar que el enlace realice la acción predeterminada

    const idServicio = event.target.id; // Obtener el ID del enlace
    const contenedor = document.getElementById('cajaServicios');
    contenedor.innerHTML = ''; // Limpiar el contenido anterior

    // Filtrar los servicios según el botón presionado
    const serviciosFiltrados = Object.values(datosServicios).filter(servicio => {
        if (idServicio === 'servicio1') {
            return servicio.titulo.includes("Legal Assets");
        } else if (idServicio === 'servicio2') {
            return servicio.titulo.includes("AI-Pro");
        } else if (idServicio === 'servicio3') {
            return servicio.titulo.includes("Partnership");
        }
    });

    // Crear tarjetas con imágenes para cada servicio filtrado y agregarlas al contenedor
    serviciosFiltrados.forEach(servicio => {
        const tarjeta = crearTarjetaServicioConImagen(servicio.titulo, servicio.imagen, servicio.descripcion1, servicio.descripcion2, servicio.descripcion3, servicio.descripcion4);
        contenedor.appendChild(tarjeta);
    });
}

// Agregar manejadores de eventos a los enlaces de servicios
document.getElementById('servicio1').addEventListener('click', manejarClicServicio);
document.getElementById('servicio2').addEventListener('click', manejarClicServicio);
document.getElementById('servicio3').addEventListener('click', manejarClicServicio);



/* ACA ARRANCA BUSCADOR DE SERVICIOS */



// Función para buscar y filtrar servicios
function buscarServicios() {
    const inputBusqueda = document.getElementById('inputBuscar');
    const filtro = inputBusqueda.value.toLowerCase(); // Convertir la entrada a minúsculas
    const contenedorServicios = document.getElementById('cajaServicios');
    
    // Limpiar el contenedor antes de agregar resultados de búsqueda
    contenedorServicios.innerHTML = '';

    // Filtrar servicios que coincidan con el término de búsqueda
    const serviciosFiltrados = Object.values(datosServicios).filter(servicio => {
        return servicio.titulo.toLowerCase().includes(filtro);
    });

    // Crear tarjetas para los servicios filtrados
    serviciosFiltrados.forEach(servicio => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'mb-3');
        tarjeta.innerHTML = `
            <div class="card-body">
                <h1 class="card-title">${servicio.titulo}</h1>
                <p class="card-text">${servicio.descripcion1}</p>
                <p class="card-text">${servicio.descripcion2}</p>
                <p class="card-text">${servicio.descripcion3}</p>
                <p class="card-text">${servicio.descripcion4}</p>

                <button type="submit" id="btnAgregar" class="btn btn-outline-success">+ info</button>
            </div>
        `;
        contenedorServicios.appendChild(tarjeta);
    });
}

// Evento para activar la búsqueda cuando se presiona Enter en el campo de búsqueda
document.getElementById('inputBuscar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar la recarga de la página
        buscarServicios();
    }
});

// Evento para activar la búsqueda cuando se hace clic en el botón de búsqueda
document.getElementById('btnBuscar').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar la recarga de la página
    buscarServicios();
});