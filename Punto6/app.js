// Array donde guardamos los libros
const librosTotales = [];

// Función para agregar libro
const agregarLibro = () => {

    // Creamos el objeto Libro
    const libro = {
        titulo: document.getElementById('titulo').value,
        autor: document.getElementById('autor').value,
        genero: document.getElementById('genero').value,
        anioPublicacion: document.getElementById('anio').value
    };

    // Guardamos en el array
    librosTotales.push(libro);

    // Limpiamos la lista antes de volver a cargarla
    document.getElementById('listaLibros').innerHTML = "";

    // Recorremos el array y mostramos todos los libros
    librosTotales.forEach((lib, index) => {
        document.getElementById('listaLibros').innerHTML += `
        <li class="list-group-item bg-dark text-white mb-2">
            <strong>Libro ${index + 1}</strong><br>
            Título: ${lib.titulo}<br>
            Autor: ${lib.autor}<br>
            Género: ${lib.genero}<br>
            Año: ${lib.anioPublicacion}
        </li>
        `;
    });

    // Mostrar en consola
    console.log(librosTotales);
};