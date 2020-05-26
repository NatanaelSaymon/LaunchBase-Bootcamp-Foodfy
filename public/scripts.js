//Ao clicar no card, leva para page RECIPE
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const recipeId = card.getAttribute("id")
        window.location.href = `/recipe/${recipeId}`
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

//Function para adicionar mais ingredientes
document.querySelector('.add-ingrediente').addEventListener("click", addIngredient)

function addIngredient(){
    const ingredients = document.querySelector('#ingredientes')
    const fieldContainer = document.querySelectorAll('.ingrediente')
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if(newField.children[0].value == ""){
        return false
    }

    newField.children[0].value = ""
    ingredients.appendChild(newField)
}







