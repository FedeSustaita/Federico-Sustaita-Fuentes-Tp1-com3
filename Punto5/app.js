// Array vacío para guardar empleados
const empleados = [];

// Función para agregar empleado
const agregarEmpleado = () => {

    const empleado = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        dni: document.getElementById('dni').value,
        direccion: document.getElementById('direccion').value,

        // NUEVAS PROPIEDADES
        sueldoPorHs: parseFloat(document.getElementById('precioHora').value),
        horasTrabajadas: parseFloat(document.getElementById('horas').value),

        // MÉTODO para calcular salario mensual
        salarioxMes: function () {
            return this.sueldoPorHs * this.horasTrabajadas;
        }
    };

    // Guardamos el empleado en el array
    empleados.push(empleado);

    // Mostramos último empleado en pantalla
    document.getElementById('salida').innerHTML = `
    <div class="card shadow p-3">
        <h2 class="text-center">Empleado agregado</h2>

        <h3>Nombre: ${empleado.nombre} ${empleado.apellido}</h3>
        <h3>DNI: ${empleado.dni}</h3>
        <h3>Dirección: ${empleado.direccion}</h3>
        <h3>Horas trabajadas: ${empleado.horasTrabajadas}</h3>
        <h3>Pago por hora: $${empleado.sueldoPorHs}</h3>

        <h3 class="text-success">
            Salario mensual: $${empleado.salarioxMes()}
        </h3>
    </div>
    `;

    // Mostrar todos los empleados en consola
    console.log("Lista de empleados:");
    console.log(empleados);
};