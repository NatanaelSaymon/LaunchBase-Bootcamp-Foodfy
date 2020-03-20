const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const cardId = card.getAttribute('id') /*pega o atributo id*/
        // const autor = card.querySelector('#receita-autor')
        modalOverlay.classList.add('active') /*adicionando a classe active*/
        modalOverlay.querySelector('img').src=`./assets/imagens/${cardId}.png`
    })
}


/*function de fechar modal*/
document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    // modalOverlay.querySelector('iframe').src=""
})


