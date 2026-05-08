
//  USUARIOS
const usuarios = [
    {
        nombreUsuario: "admin",
        contraseña: "1234",
        fechaCreacion: "2026-01-01"
    }
];


// LOGIN
const login = () => {

    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("pass").value;

    // Buscar usuario
    const encontrado = usuarios.find(u => 
        u.nombreUsuario === user && u.contraseña === pass
    );

    if (encontrado) {
        // Redirige a agenda
        window.location.href = "agenda.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
};

// CONTACTOS 
const contactos = [
    {
        nomyApe: "Juan Pérez",
        telefono: "381123456",
        direccion: "Tucumán",
        email: "juan@mail.com"
    },
    {
        nomyApe: "Ana Gómez",
        telefono: "381654321",
        direccion: "Yerba Buena",
        email: "ana@mail.com"
    }
];

// MOSTRAR CONTACTOS
const mostrarContactos = () => {

    const tabla = document.getElementById("tabla");

    if (!tabla) return; // evita error en login

    tabla.innerHTML = "";

    contactos.forEach(c => {
        tabla.innerHTML += `
        <tr>
            <td>${c.nomyApe}</td>
            <td>${c.telefono}</td>
            <td>${c.direccion}</td>
            <td>${c.email}</td>
        </tr>
        `;
    });
};

// AGREGAR CONTACTO
const agregarContacto = () => {

    const nuevo = {
        nomyApe: document.getElementById("nomyApe").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        email: document.getElementById("email").value
    };

    contactos.push(nuevo);

    mostrarContactos();

    console.log(contactos);
};

// AUTOLOAD
window.onload = mostrarContactos;