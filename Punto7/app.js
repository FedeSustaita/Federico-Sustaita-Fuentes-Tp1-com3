// objetos
const japanCitys = [
    {
        nombre: "Tokio",
        poblacion: "33,412,000",
        area: "5,148 km²",
        altitud: "40 m",
        clima: "Templado húmedo",
        imagen: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
    },
    {
        nombre: "Osaka",
        poblacion: "12,964,000",
        area: "2,229 km²",
        altitud: "15 m",
        clima: "Subtropical húmedo",
        imagen: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26"
    },
    {
        nombre: "Kyoto",
        poblacion: "1,460,000",
        area: "827 km²",
        altitud: "50 m",
        clima: "Templado",
        imagen: "https://images.unsplash.com/photo-1526481280690-906c4f4a8d2b"
    },
    {
        nombre: "Nagoya",
        poblacion: "2,300,000",
        area: "326 km²",
        altitud: "10 m",
        clima: "Templado húmedo",
        imagen: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c"
    },
    {
        nombre: "Sapporo",
        poblacion: "1,960,000",
        area: "1,121 km²",
        altitud: "26 m",
        clima: "Frío continental",
        imagen: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2"
    },
    {
        nombre: "Fukuoka",
        poblacion: "1,600,000",
        area: "340 km²",
        altitud: "10 m",
        clima: "Subtropical húmedo",
        imagen: "https://images.unsplash.com/photo-1558981403-c5f9891f92b5"
    }
];

// mostrar las cards
const mostrarCiudades = () => {

    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    japanCitys.forEach(ciudad => {
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">

                <img src="${ciudad.imagen}" class="card-img-top">

                <div class="card-body">
                    <h5 class="card-title">${ciudad.nombre}</h5>

                    <p><strong>Población:</strong> ${ciudad.poblacion}</p>
                    <p><strong>Área:</strong> ${ciudad.area}</p>
                    <p><strong>Altitud:</strong> ${ciudad.altitud}</p>
                    <p><strong>Clima:</strong> ${ciudad.clima}</p>
                </div>

            </div>
        </div>
        `;
    });
};