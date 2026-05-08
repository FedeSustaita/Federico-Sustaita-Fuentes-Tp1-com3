const datos =()=>{
    const coche = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        anio: document.getElementById('anio').value,
        color: document.getElementById('color').value,
        estado: document.getElementById('estado').value,
        precio: document.getElementById('precio').value
    }
    document.getElementById('salida').innerHTML=`
    <div class="card shadow">
    <h2>Datos del coche</h2>
        <h3>Marca: ${coche.marca}</h3>
        <h3>Modelo:${coche.modelo}</h3>
        <h3>Año: ${coche.anio}</h3>
        <h3>Color: ${coche.color}</h3>
        <h3>Estado: ${coche.estado}</h3>
        <h3>Precio: ${coche.precio}</h3>
    </div>
    `
}


