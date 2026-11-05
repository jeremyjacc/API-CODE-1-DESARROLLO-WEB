// URL de la API 
const API_URL = "http://localhost:5000/clientes";

// Referencias a los elementos del DOM
const contenedorLista = document.getElementById("lista-clientes");
const contenedorEstado = document.getElementById("estado");
const btnRecargar = document.getElementById("btnRecargar");

// Evento que se ejecuta al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    obtenerClientes();
});

// Evento para el botón de recargar
btnRecargar.addEventListener("click", () => {
    obtenerClientes();
});

/**
 * Función que se usa para consumir la API usando Fetch API
 */
async function obtenerClientes() {
    // Mostrar mensaje de carga
    mostrarEstado("Cargando clientes...", "cargando");
    contenedorLista.innerHTML = "";

    try {
        // Petición GET a la API con Fetch
        const respuesta = await fetch(API_URL);

        // Validar si la respuesta HTTP es exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
        }

        // Convertir la respuesta a formato JSON
        const clientes = await respuesta.json();

        limpiarEstado();
        mostrarClientes(clientes);

    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        mostrarEstado(
            "No se pudo conectar con el servidor o la base de datos. Asegúrate de que el servidor en el puerto 5000 y MongoDB estén activos.",
            "error"
        );
    }
}

/**
 * Función para renderizar los clientes obtenidos en el DOM
 * @param {Array} clientes - Lista de clientes desde la API
 */
function mostrarClientes(clientes) {
    // Validar si no hay clientes registrados
    if (!clientes || clientes.length === 0) {
        mostrarEstado("No hay clientes registrados en la base de datos.", "vacio");
        return;
    }

    // Limpiar el contenedor antes de insertar
    contenedorLista.innerHTML = "";

    // crea cada elemento en formato de lista
    clientes.forEach(cliente => {
        const clienteCard = document.createElement("article");
        clienteCard.className = "cliente-card";

        clienteCard.innerHTML = `
            <div class="cliente-info">
                <h2>${cliente.nombre || ""} ${cliente.apellido || ""}</h2>
                <div class="cliente-detalles">
                    <span>Email: ${cliente.email || "Sin email"}</span>
                    <span>Teléfono: ${cliente.telefono || "Sin teléfono"}</span>
                </div>
            </div>
            <div class="cliente-meta">
                <span class="empresa-badge">${cliente.empresa || "Particular"}</span>
            </div>
        `;

        contenedorLista.appendChild(clienteCard);
    });
}

/**
 * Funciones auxiliares para mostrar estados en la interfaz
 */
function mostrarEstado(mensaje, tipo) {
    contenedorEstado.textContent = mensaje;
    contenedorEstado.className = `estado ${tipo}`;
}

function limpiarEstado() {
    contenedorEstado.textContent = "";
    contenedorEstado.className = "estado";
}
