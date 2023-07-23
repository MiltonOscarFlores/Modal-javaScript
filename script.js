'use strict';

// REFERENCIAS HTML 
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsShowModal = document.querySelectorAll(".show-modal") // devuelve un array con los botones



// FUNCIONES 
const mostrarQuitarModal = (e) => {
    e.preventDefault()

    modal.classList.toggle("hidden")
    overlay.classList.toggle("hidden")
}


// EVENTOS 

for (const boton of btnsShowModal) {
    boton.addEventListener("click", mostrarQuitarModal)
}

btnCloseModal.addEventListener("click", mostrarQuitarModal)

overlay.addEventListener("click", mostrarQuitarModal)

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }
})