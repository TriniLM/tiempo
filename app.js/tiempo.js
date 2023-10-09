import { location } from "./busquedaPais.js"
import { sensacion } from "./sensacion.js"
export function painTemp (temp, imgCod,parent,ubicacion,tempMax, tempMin, clima,iso,location){
let zona = `<div class="temperatura-ubicacion">
                       <p>${ubicacion} ${iso}</p>
                       <i class="fa-solid fa-location-dot"></i>
                       </div>`

let contenido = `
      <div class="contenClima">
                <h2 class="main__tiempo-grados" id="temperatura">${Math.round(temp - 273.15)} °C</h2>
                    <img src=" https://openweathermap.org/img/wn/${imgCod}@2x.png" alt="" class="main__tiempo-icono">
      </div>
     <div class="clima-description">
      <p>max ${Math.round(tempMax - 273.15)} °C / min ${Math.round(tempMin-273.15)} °C </p>
      <span>${clima}</span>
      </div>
 `
parent.innerHTML = contenido
location.innerHTML = zona
}
export async function mostrarTiempo(id, callback, parent){
    await  callback(id).then(ress => {
        console.log(ress)
        let temp = ress.main.temp;
        let icon = ress.weather[0].icon;
        let name = ress.name;
        let tempMax = ress.main.temp_max;
        let tempMin = ress.main.temp_min;
        let description = ress.weather[0].description
        let iso = ress.sys.country
        let air = Math.floor(ress.wind.speed * 3.6)
        let humedad = ress.main.humidity + '%'

        painTemp(temp,icon,parent,name, tempMax,tempMin , description, iso,location)
        sensacion(humedad,air)
    })

} 
