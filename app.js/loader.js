const loader = document.getElementById("cargando")

export function hidenLoader (){
  loader.style.display = "none";

}

export function showLoader (){
  loader.style.display = "flex";
}

console.log(loader)
document.addEventListener("load", (e)=>{
  hidenLoader()
})