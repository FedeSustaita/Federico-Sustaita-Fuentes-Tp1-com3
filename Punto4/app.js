// Función que se ejecuta al hacer click
const mostrarEmpleado = () => {

    // Creamos el objeto Empleado con datos del formulario
    const empleado = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        dni: document.getElementById('dni').value,
        direccion: document.getElementById('direccion').value,
        salarioxMes: parseFloat(document.getElementById('salario').value)
    };

    // Mostramos los datos en pantalla
    document.getElementById('salida').innerHTML = `
    <div class="card shadow p-3">
        <h2 class="text-center mb-3">Datos del Empleado</h2>
        <h3>Nombre: ${empleado.nombre}</h3>
        <h3>Apellido: ${empleado.apellido}</h3>
        <h3>DNI: ${empleado.dni}</h3>
        <h3>Dirección: ${empleado.direccion}</h3>
        <h3 class="text-success">Salario mensual: $${empleado.salarioxMes}</h3>
    </div>
    `;
};