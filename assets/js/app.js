const modal = document.querySelector('.modal')
const btn = document.querySelector('#contato')
const fechar = document.querySelector('.cancelar')
const fade = document.querySelector('.hide')

// btn.onclick = function(){
//     modal.style.display = "block"
// }

btn.onclick = function(){
    modal.style.display = "block"
    fade.style.display = "block"
}



fechar.onclick = function(){
    modal.style.display = "none"
    fade.style.display = "none"

}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
}
// const btn = document.querySelector('#like')

// btn.addEventListener('click',()=>{
//     style.backgroundColor = red
// })