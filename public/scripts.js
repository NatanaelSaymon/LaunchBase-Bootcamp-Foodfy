//Ao clicar no card, leva para page RECIPE
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const recipeId = card.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`
    })
}

//Function para mostrar o conteudo de recipes
function mostra(id){
    if(document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none'
        document.getElementById('mostra' + id).value = 'mostrar'
    }
    else{
        document.getElementById(id).style.display = 'block'
        document.getElementById('mostra' + id).value = 'esconder'
    }
}





