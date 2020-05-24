const express = require('express')
const routes = express.Router()
const recipes = require('./data') //Variavel que contem as receitas

// ROTAS
routes.get("/", function(req, res){
  return res.render('index', { recipes })
})
routes.get("/sobre", function(req, res){
  return res.render('sobre')
})
routes.get("/receitas", function(req, res){
  return res.render('receitas/index', { recipes })
})
routes.get("/recipe/:id", function (req, res) {
  const recipeId = req.params.id;
  return res.render('receitas/recipe', { recipes: recipes[recipeId] })
})
routes.use(function(req, res){
  return res.status(404).render('not-found')
})

module.exports = routes