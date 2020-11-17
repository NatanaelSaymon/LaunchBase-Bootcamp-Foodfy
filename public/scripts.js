const cards = document.querySelectorAll('.receitas-mais-acessadas__card')

for(let card of cards){
    card.addEventListener("click", function(){
        const id = card.getAttribute("id")
        window.location.href = `/receitas/${id}`
    })
}


//Function para adicionar mais ingredientes
document.querySelector('.add-ingrediente').addEventListener("click", function(addIngredient){
    const ingredients = document.querySelector('#ingredientes')
    const fieldContainer = document.querySelectorAll('.ingrediente')

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    // Não adiciona um novo input se o último tem um valor vazio
    if(newField.children[0].value == ""){
        return false
    }

    // Deixa o valor do input vazio
    newField.children[0].value = ""
    ingredients.appendChild(newField)
})


//Function para adicionar mais passos
document.querySelector('.add-preparo').addEventListener("click", function(addNovoPasso){
    const novoPasso = document.querySelector('#modoPreparo')
    const fieldContainer = document.querySelectorAll('.novoPreparo')
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    if(newField.children[0].value == ""){
        return false
    }

    newField.children[0].value = ""
    novoPasso.appendChild(newField)
})








