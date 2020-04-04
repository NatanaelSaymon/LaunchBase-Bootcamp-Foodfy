/* Modal */
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const cardId = card.getAttribute('id') /*pega o atributo id*/
        const title = card.querySelector('p').innerHTML
        const autor = card.querySelector('span').innerHTML
        modalOverlay.classList.add('active') /*adicionando a classe active*/
        modalOverlay.querySelector('img').src=`/image/${cardId}.png`
        modalOverlay.querySelector('p').innerHTML = `${title}`
        modalOverlay.querySelector('span').innerHTML = `${autor}`
    })
}

/*function de fechar modal*/
document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src=""
})


