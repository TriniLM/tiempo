const loader = document.querySelector(".loader-container");

export function showLoader (){
    loader.style.display = "flex";
}
export function hidenLoader (){
    loader.style.display = "none";
}
showLoader()

window.addEventListener("load", ()=>{
  hidenLoader()
})