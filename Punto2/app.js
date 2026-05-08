const datos = () => {

    const coche = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        anio: parseInt(document.getElementById('anio').value),
        color: document.getElementById('color').value,
        estado: document.getElementById('estado').value,
        precio: document.getElementById('precio').value,

        // ✅ Método para calcular la edad del coche
        calcEdad: function () {
            const anioActual = new Date().getFullYear();
            return anioActual - this.anio;
        }
    };

    // Mostrar datos + edad
    document.getElementById('salida').innerHTML = `
    <div class="card shadow p-3">
        <h2 class="text-center">Datos del coche</h2>
        <h3>Marca: ${coche.marca}</h3>
        <h3>Modelo: ${coche.modelo}</h3>
        <h3>Año: ${coche.anio}</h3>
        <h3>Color: ${coche.color}</h3>
        <h3>Estado: ${coche.estado}</h3>
        <h3>Precio: $${coche.precio}</h3>
        <h3 class="text-warning">Edad del coche: ${coche.calcEdad()} años</h3>
    </div>
    `;
};