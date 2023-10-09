/*import { listaPaises, listaCiudades } from "./consultas.js";

const paises = document.getElementById('paises');
const temperatura = document.getElementById('temperatura')
const ciudades = document.getElementById('ciudades')

var nuevaLista = []
function crearPais (pais, padre, iso){
  var option = document.createElement("option")
  option.textContent = pais
  option.value = iso
  padre.appendChild(option)
}

listaCiudades().then(data =>{
    data.map(element => {
        crearPais(element.nombre, paises, element.iso2)
    })
})

paises.addEventListener("change",()=>{
    var listaCiudades = [];
    ciudades.innerText = "";
    listaPaises()
    .then(data => {
        data.filter(element=> {
            if(element.country == paises.value){
                listaCiudades.push({"name":element.name,"id":element.id})
            }
        })

        listaCiudades.forEach(element =>{
            crearPais(element.name, ciudades, element.id )
        })
    })
})

ciudades.addEventListener("change", ()=>{
const apiKey = "79783bc2a3e5cd9664167b0eeb578444";
const id ="6355390"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${ciudades.value}&appid=${apiKey}
`;
    fetch(apiUrl)
.then(ress =>{{
    console.log(ress)
    ress.json().then(data =>{
        console.log(ciudades.value)
        console.log(data.main.temp)
        temperatura.textContent = Math.round(data.main.temp - 273.15) + " °C"
    })
}})
})*/