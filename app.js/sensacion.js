const contenedorSensacion = document.getElementById("sensacion") 
export function sensacion (humedad,air){
    let contenido = `
            <div>
                <i class="fa-solid fa-droplet"></i>
                <p>${humedad}</p>
            </div>
            <div>
                <i class="fa-solid fa-wind"></i>
                <p>${air}</p>
            </div>
    `
contenedorSensacion.innerHTML = contenido
}