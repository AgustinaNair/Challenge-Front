const serviciosConteiner = document.querySelector(".servicios-container")
async function cargarServicios(){
    const respuesta = await fetch("./servicios.json")
    const servicios = await respuesta.json()
    mostrarServicios(servicios)
}
// data-aos="zoom-out"
function mostrarServicios(array){
    array.forEach(servicio => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="card-body"  >
                <div class="containerIcono"><span class="servIcon white">${servicio.icono}</span></div>                
                <h5 class="servNombre" >${servicio.nombre}</h5>
                <p class="servDescription">${servicio.descripcion}</p>
                <button class="servLearnMore">Learn more</button>
            </div>
        `;
        serviciosConteiner.appendChild(card)
    
    })
}
cargarServicios()

