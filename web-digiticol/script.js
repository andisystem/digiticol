// Selecciona elementos de menú
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const navList = document.getElementById("nav-list");

// Abre el menú en clic
hamburger.addEventListener("click", () => {
    navList.classList.add("active");
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
});

// Cierra el menú en clic
closeBtn.addEventListener("click", () => {
    navList.classList.remove("active");
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
});

//Botón desplegable
function toggleContenido() {
    const contenidoExpandido = document.getElementById("contenidoExpandido");
    contenidoExpandido.style.display = contenidoExpandido.style.display === "none" ? "block" : "none";
    contenidoExpandido.style.maxHeight = contenidoExpandido.style.maxHeight === "0px" ? "1000px" : "0px";
    contenidoExpandido.style.opacity = contenidoExpandido.style.opacity === "0" ? "1" : "0";
}
