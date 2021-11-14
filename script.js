const sqrirel = document.getElementById("compSquirtle")
const bulba = document.getElementById("compBulbasours")
const char = document.getElementById('compCharmander')
const dados = document.getElementById('dados')

sqrirel.addEventListener("click", () =>{
   if( sqrirel.classList.contains("esconder")){
       sqrirel.classList.remove('esconder')
       sqrirel.classList.add('mostrar')
   }else{
    sqrirel.classList.remove('mostrar')
    sqrirel.classList.add('esconder')
   }
})
bulba.addEventListener("click", () =>{
    if( bulba.classList.contains("esconder")){
        bulba.classList.remove('esconder')
        bulba.classList.add('mostrar')
    }else{
     bulba.classList.remove('mostar')
     bulba.classList.add('esconder')
    }
 })
 char.addEventListener("click", () =>{
    if( char.classList.contains("esconder")){
        char.classList.remove('esconder')
        char.classList.add('mostrar')
    }else{
     char.classList.remove('mostar')
     char.classList.add('esconder')
    }
 })