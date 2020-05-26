const express = require('express')
const routes = express.Router()
const receitas = require('./controllers/recipes')
const pages = require('./controllers/pages')

// ROTAS INDEX/SOBRE/STATUS
routes.get("/", pages.index)
routes.get("/sobre", pages.about)


//ROTAS RECEITAS
routes.get("/receitas", receitas.index)
routes.get("/recipe/:id", receitas.id)
routes.get("/receitas/create", receitas.create)

routes.post("/receitas", receitas.post)

//ROTA 404
routes.use(pages.status)

module.exports = routes