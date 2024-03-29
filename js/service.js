
// Agregar listeners a los enlaces de servicios
document.getElementById('servicio1').addEventListener('click', mostrarServicios);
document.getElementById('servicio2').addEventListener('click', mostrarServicios);
document.getElementById('servicio3').addEventListener('click', mostrarServicios);

// Función para mostrar los servicios según el enlace seleccionado
async function mostrarServicios(event) {
    const idServicio = event.target.id;
    const response = await fetch("/db/db.json");
    const data = await response.json();

    const contenedor = document.getElementById('cajaServicios');
    contenedor.innerHTML = ''; // Limpiar el contenido anterior

    let serviciosMostrar = [];

    // Filtrar los servicios según el enlace seleccionado
    if (idServicio === 'servicio1') {
        serviciosMostrar = data.datosServicios.filter(servicio => servicio.id === '1' || servicio.id === '2');
    } else if (idServicio === 'servicio2') {
        serviciosMostrar = data.datosServicios.filter(servicio => servicio.id === '3' || servicio.id === '4' || servicio.id === '5');
    } else if (idServicio === 'servicio3') {
        serviciosMostrar = data.datosServicios.filter(servicio => servicio.id === '6');
    }

    // Crear y mostrar las tarjetas para los servicios filtrados
    serviciosMostrar.forEach(servicio => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'mb-3');
        tarjeta.innerHTML = `
            <div class="card-body">
                <h1 class="card-title">${servicio.titulo}</h1>
                <img src="${servicio.imagen}" alt="${servicio.titulo}" class="card-img-top">
                <p class="card-text">${servicio.descripcion1}</p>
                <p class="card-text">${servicio.descripcion2}</p>
                <p class="card-text">${servicio.descripcion3}</p>
                <p class="card-text">${servicio.descripcion4}</p>

                <button type="submit" id="btnAgregar" class="btn btn-outline-success">Obtener Servicio</button>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}


// Obtener referencia al botón de búsqueda
const btnBuscar = document.getElementById('btnBuscar');

// Agregar evento de escucha al botón de búsqueda
btnBuscar.addEventListener('click', async function() {
    // Obtener el valor del input de búsqueda
    const filtro = inputBuscar.value.trim().toLowerCase();

    // Obtener los datos del archivo JSON
    const response = await fetch("/db/db.json");
    const data = await response.json();

    // Filtrar los servicios que coincidan con el término de búsqueda
    const serviciosFiltrados = data.datosServicios.filter(servicio =>
        servicio.titulo.toLowerCase().includes(filtro) ||
        servicio.descripcion1.toLowerCase().includes(filtro) ||
        servicio.descripcion2.toLowerCase().includes(filtro) ||
        servicio.descripcion3.toLowerCase().includes(filtro) ||
        servicio.descripcion4.toLowerCase().includes(filtro)
    );

    // Obtener el contenedor donde se mostrarán las tarjetas
    const contenedor = document.getElementById('cajaServicios');
    contenedor.innerHTML = ''; // Limpiar el contenido anterior

    // Crear y mostrar las tarjetas para los servicios filtrados
    serviciosFiltrados.forEach(servicio => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'mb-3');
        tarjeta.innerHTML = `
            <div class="card-body">
                <h1 class="card-title">${servicio.titulo}</h1>
                <img src="${servicio.imagen}" alt="${servicio.titulo}" class="card-img-top">
                <p class="card-text">${servicio.descripcion1}</p>
                <p class="card-text">${servicio.descripcion2}</p>
                <p class="card-text">${servicio.descripcion3}</p>
                <p class="card-text">${servicio.descripcion4}</p>

                <button type="submit" id="btnAgregar" class="btn btn-outline-success">Obtener Servicio</button>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
});
