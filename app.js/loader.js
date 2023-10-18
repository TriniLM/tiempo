const loader = document.getElementById("cargando")

export function hidenLoader (){
  loader.style.visibility = "hidden";

}

export function showLoader (){
  loader.style.visibility = "visible";
}

console.log(loader)
document.addEventListener("load", (e)=>{
  setTimeout(hidenLoader,3000)
})