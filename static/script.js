// ==========================
// REFERENCIAS DOM
// ==========================

// Welcome
const welcome = document.getElementById("welcome");

// Botones menú
const btnSobreMi = document.getElementById("btn-sobre-mi");
const btnProyectos = document.getElementById("btn-proyectos");
const btnContacto = document.getElementById("btn-contacto");
const btnExperiencia = document.getElementById("btn-experiencia");

// Secciones
const sectionSobreMi = document.getElementById("sobre-mi");
const sectionProyectos = document.getElementById("proyectos");
const sectionContacto = document.getElementById("contacto");
const sectionExperiencia = document.getElementById("experiencia");

// Todos los botones
const botonesMenu = document.querySelectorAll(".menu-item");


// ==========================
// FUNCIONES
// ==========================

function ocultarTodo() {
    welcome.style.display = "none";
    sectionSobreMi.style.display = "none";
    sectionProyectos.style.display = "none";
    sectionContacto.style.display = "none";
    sectionExperiencia.style.display = "none";
}

function mostrar(seccion) {
    ocultarTodo();
    seccion.style.display = "block";
}

function activarBoton(botonActivo) {
    botonesMenu.forEach(boton => boton.classList.remove("active"));
    botonActivo.classList.add("active");
}


// ==========================
// EVENTOS MENÚ
// ==========================

btnSobreMi.addEventListener("click", () => {
    mostrar(sectionSobreMi);
    activarBoton(btnSobreMi);
});

btnProyectos.addEventListener("click", () => {
    mostrar(sectionProyectos);
    activarBoton(btnProyectos);
});

btnExperiencia.addEventListener("click", () => {
    mostrar(sectionExperiencia);
    activarBoton(btnExperiencia);
});

btnContacto.addEventListener("click", () => {
    mostrar(sectionContacto);
    activarBoton(btnContacto);
});


// ==========================
// EFECTO CURSOR
// ==========================

document.addEventListener("mousemove", (e) => {
    const shadow = document.getElementById("cursor-shadow");
    const x = e.clientX;
    const y = e.clientY;

    shadow.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255, 255, 255, 0.10),
            rgba(0, 0, 0, 0.80) 5%
        )
    `;
});


// ==========================
// ESTADO INICIAL
// ==========================

ocultarTodo();
welcome.style.display = "block";
