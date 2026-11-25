// RUTAS LIMPIAS DE LORA'S COFFE

const rutas = {
    inicio: null,
    productos: "productos",
    sucursales: "sucursales",
    opiniones: "opiniones"
};

// Detectar la ruta actual
function obtenerRuta() {
    const partes = window.location.pathname
        .split("/")
        .filter(Boolean);

    const ultima = partes[partes.length - 1];

    return rutas[ultima] !== undefined ? ultima : "inicio";
}

// Mostrar el apartado correspondiente
function mostrarRuta() {
    const ruta = obtenerRuta();

    if (ruta === "inicio") {
        window.scrollTo(0, 0);
        return;
    }

    const seccion = document.getElementById(rutas[ruta]);

    if (seccion) {
        seccion.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarRuta();
});