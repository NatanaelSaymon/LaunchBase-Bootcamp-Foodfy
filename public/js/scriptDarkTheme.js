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
    bgFooter: "#333333",
    bgFooterText: ""
}

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty("--color-bg", "#333333")    
    )
}


checkbox.addEventListener("change", ({ target }) => {
    if(target.checked){
        changeColors(darkMode)
    }
    else{
        changeColors(initialMode)
    }
})