const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const id = card.getAttribute("id")
        window.location.href = `/receitas/${id}`
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
// document.querySelector('.add-ingrediente').addEventListener("click", function(addIngredient){
//     const ingredients = document.querySelector('#ingredientes')
//     const fieldContainer = document.querySelectorAll('.ingrediente')

//      // Realiza um clone do último ingrediente adicionado
//     const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

//     // Não adiciona um novo input se o último tem um valor vazio
//     if(newField.children[0].value == ""){
//         return false
//     }

//     // Deixa o valor do input vazio
//     newField.children[0].value = ""
//     ingredients.appendChild(newField)
// })

//Function para adicionar mais passos
// document.querySelector('.add-preparo').addEventListener("click", function(addNovoPasso){
//     const novoPasso = document.querySelector('#modoPreparo')
//     const fieldContainer = document.querySelectorAll('.novoPreparo')
    
//     const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

//     if(newField.children[0].value == ""){
//         return false
//     }

//     newField.children[0].value = ""
//     novoPasso.appendChild(newField)
// })

//Dark-theme
const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style) //pegando os valores do html

const initialMode = {
    bg: getStyle(html, "--color-bg"),
    bgPanel: getStyle(html, "--color-bg-panel"),
    bgPrincipal: getStyle(html, "--color-principal"),
    bgSecundaria: getStyle(html, "--color-secundaria"),
    bgSpan: getStyle(html, "--color-span"),
    bgHeader: getStyle(html, "--color-header"),
    bgHeadings: getStyle(html, "--color-headings"),
    bgFooter: getStyle(html, "--color-bg-footer"),
    bgFooterText: getStyle(html, "--color-footer-text")
}

const darkMode = {
    bg: "#333333",
    bgPanel: "",
    bgPrincipal: "#B5B5B5",
    bgSecundaria: "",
    bgSpan: "",
    bgHeader: "",
    bgHeadings: "#3664ff",
    bgFooter: "",
    bgFooterText: ""
}

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty("--color-bg", "#333333")    
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialMode)
    // if(target.checked){
    //     changeColors(darkMode)
    // }
    // else{
    //     changeColors(initialMode)
    // }
})







