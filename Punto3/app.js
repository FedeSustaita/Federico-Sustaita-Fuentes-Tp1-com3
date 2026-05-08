const datos = () => {

    // Creamos el objeto Producto
    const producto = {
        nombre: document.getElementById('nombre').value,
        marca: document.getElementById('marca').value,
        descripcion: document.getElementById('descripcion').value,
        precio: parseFloat(document.getElementById('precio').value),
        porcDescuento: parseFloat(document.getElementById('descuento').value),

        // ✅ Método para calcular descuento
        calcularDescuento: function () {
            return this.precio - (this.precio * this.porcDescuento / 100);
        }
    };

    // Mostramos los datos
    document.getElementById('salida').innerHTML = `
    <div class="card shadow p-3">
        <h2 class="text-center">Datos del Producto</h2>
        <h3>Nombre: ${producto.nombre}</h3>
        <h3>Marca: ${producto.marca}</h3>
        <h3>Descripción: ${producto.descripcion}</h3>
        <h3>Precio original: $${producto.precio}</h3>
        <h3>Descuento: ${producto.porcDescuento}%</h3>

        <!-- ✅ Resultado final -->
        <h3 class="text-success">
            Precio con descuento: $${producto.calcularDescuento()}
        </h3>
    </div>
    `;
};