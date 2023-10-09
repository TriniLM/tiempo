
export async function consultaCiudades (id){
   const apiKey = "79783bc2a3e5cd9664167b0eeb578444";
 return  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&lang=es`)
    .then(ress => ress.json())
    .catch(err => console.log(err))
}

export const listaCiudades = () =>{
    return fetch('../data/paises.json').then(data => data.json())   
   
}

export function recorerCiudades (){
    fetch("../data/city.list.json").then (data => data.json())
}

consultaCiudades("2885688")