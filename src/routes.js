const express = require('express')
const routes = express.Router()
const receitas = require('./app/controllers/recipes')
const pages = require('./app/controllers/pages')

// ROTAS INDEX/SOBRE
routes.get("/", pages.index)
routes.get("/sobre", pages.about)


//ROTAS RECEITAS
routes.get("/receitas", receitas.index)
routes.get("/receitas/create", receitas.create)
routes.get("/receitas/:id", receitas.show)
routes.get("/receitas/:id/edit", receitas.edit)
routes.put("/receitas", receitas.put)
routes.delete("/receitas", receitas.delete)

routes.post("/receitas", receitas.post)

//ROTA 404
routes.use(pages.status)

module.exports = routes