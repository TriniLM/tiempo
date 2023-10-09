import {consultaCiudades } from "./consultas.js";
import { mostrarTiempo, painTemp} from "./tiempo.js";
import { sensacion } from "./sensacion.js";
export const location = document.getElementById("ubicacion")

const busquedaPais = document.getElementById("busquedaPais");
const listaResultado = document.getElementById("searchResultado");
const contenTiempo = document.getElementById("Tiempo");

const solisitud = await (await fetch("https://raw.githubusercontent.com/TriniLM/tiempo/main/data/city.list.json")).json()
const paisIso = await (await fetch("https://raw.githubusercontent.com/TriniLM/tiempo/main/data/paises.json")).json()


// buscar el nombre del pais
function returnPais(callback, iso){
  let pais = ""
  callback.forEach(element =>{
    if(element.iso2.includes(iso)){
      pais = element.name
    }
  })
  return pais
}

const crearLista = (valor, id, parent, callback)=>{
  let nombrePais = callback
  let div = document.createElement("div")
  div.classList.add("resultado__item")
  let contenido = `<div class="filto-click resultado__item-click" id=${id}></div><p>${valor}</p> <span>${nombrePais}</span>`
  div.innerHTML = contenido
  parent.appendChild(div);
}

async function searchCountry (search, response, parent) {
    parent.innerText = ""
    let nuevoArray = await response.filter(el => el.name.toLowerCase().includes(search.value.toLowerCase())).slice(0,20)
    nuevoArray.forEach(element => {
     crearLista(element.name, element.id, parent, returnPais(paisIso, element.country))
   });
  
}
 //busqueda mientras el usuario escirbe
document.addEventListener("input", (e)=>{
  if(e.target.value != ""){
    searchCountry(busquedaPais, solisitud, listaResultado)
    listaResultado.classList.remove("hiden")

  }else{
    listaResultado.classList.add("hiden")
  }
 })

 //evento click para buscar en la api

document.addEventListener("click",(e)=>{
 
   if(e.target.matches(".filto-click")){
    const idPais = e.target.getAttribute("id");
    mostrarTiempo(idPais, consultaCiudades, contenTiempo)
    busquedaPais.value =""
    listaResultado.innerHTML = ''
    
    }
   }
   )


   export async function buscarLl (lon, lat){
    const apiKey = "79783bc2a3e5cd9664167b0eeb578444";
     return  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es`)
     .then(ress => ress.json())
     .catch(err => console.log(err))
 }
 
 if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(correcto, error)
  function correcto(posicion){
    console.log(posicion)
     let lat = posicion.coords.latitude.toFixed(2)
     let long = posicion.coords.longitude.toFixed(2)
     buscarLl(long, lat).then(datos =>{
      let temp = datos.main.temp;
      let icon = datos.weather[0].icon;
      let name = datos.name;
      let tempMax = datos.main.temp_max;
      let tempMin = datos.main.temp_min;
      let description = datos.weather[0].description
      let iso = datos.sys.country
      let air = Math.floor(datos.wind.speed * 3.6)
      let humedad = datos.main.humidity + '%'

      painTemp(temp, icon, contenTiempo, name,tempMax,tempMin, description,iso,location)
      sensacion(humedad,air)
     })
  }
  function error (err){
    console.log(err)
  }
 }