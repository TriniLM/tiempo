import { hidenLoader,showLoader } from "./loader.js";


export async function consultaCiudades (id){
    showLoader()
   const apiKey = "79783bc2a3e5cd9664167b0eeb578444";
 return  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&lang=es`)
    .then(ress => {
     hidenLoader()
     return   ress.json()
    })
    .catch(err => console.log(err))
}

export const listaCiudades = () =>{
    return fetch('https://raw.githubusercontent.com/TriniLM/tiempo/main/data/paises.json').then(data => data.json())   
   
}

export function recorerCiudades (){
    fetch("https://raw.githubusercontent.com/TriniLM/tiempo/main/data/city.list.json").then (data => data.json())
}

consultaCiudades("2885688")