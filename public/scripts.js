/* === Script Menu ativo === */
const cards = document.querySelectorAll('.receitas-mais-acessadas__card')

for(let card of cards){
    card.addEventListener("click", function(){
        const id = card.getAttribute("id")
        window.location.href = `/receitas/${id}`
    })
}

const currentPage = location.pathname
const menuItens = document.querySelectorAll("header .header__nav-item a")

for(item of menuItens){
    if(currentPage == item.getAttribute("href")){
        console.log(item)
        item.classList.add('activeMenu')
    }
}

/* === End Script Menu ativo === */


/* === Function Para adicionar novo campos em ingredientes === */
function addIngrediente(){
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
}


/* === Function Para adicionar novo campos em Preparo === */
function addPreparo(){
    const novoPasso = document.querySelector('#modoPreparo')
    const fieldContainer = document.querySelectorAll('.novoPreparo')
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    if(newField.children[0].value == ""){
        return false
    }

    newField.children[0].value = ""
    novoPasso.appendChild(newField)
}








