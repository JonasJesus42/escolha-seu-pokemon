const btn = document.getElementsByTagName('button')
const cardPokemon = document.getElementsByClassName('card')
let pokemon = document.getElementsByClassName('componente')
let aperto = false

for(let i =0; i < pokemon.length; i++){
    pokemon[i].addEventListener("click", () =>{
        if( pokemon[i].classList.contains("esconder")){
            pokemon[i].classList.remove('esconder')
            pokemon[i].classList.add('mostrar')
        }else{
            pokemon[i].classList.remove('mostrar')
            pokemon[i].classList.add('esconder')
        }    
    })   
}

for(let i =0; i < cardPokemon.length; i++){
    btn[i].addEventListener("click", () =>{
            cardPokemon[i].classList.add('expandir')
    })
}