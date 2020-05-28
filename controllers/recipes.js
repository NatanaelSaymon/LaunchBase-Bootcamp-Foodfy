const recipes = require('../data')
const fs = require('fs')
const data = require('../data.json')

//INDEX
exports.index = function(req, res){
  return res.render('receitas/index', { recipes })
}

//CREATE
exports.create = function(req, res){
  return res.render('receitas/create')
}

exports.id = function(req, res){
  const recipeId = req.params.id;
  return res.render('receitas/recipe', { recipes: recipes[recipeId] })
}

//POST
exports.post = function(req, res){
  const keys = Object.keys(req.body)

  //Validação dos campos
  for(key of keys){
    if(req.body[key] == ""){
      return res.send("Por favor, preencha todos os campos!")
    }
  }

  let {imagem_receita, ingredientes, modo_preparo, info_adicionais} = req.body

  const id = Number(data.recipes.length + 1)

  data.recipes.push({id, imagem_receita, ingredientes, modo_preparo, info_adicionais})

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err){
      return res.send("Escrita errada!")
    }
  })

  return res.redirect('/receitas')
}

//SHOW
exports.show = function(req, res){
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipes){
    return recipes.id == id
  })

  if(!foundRecipe){
    return res.send('Receita não encontrada, tente novamente!')
  }

  // return res.send(foundRecipe)
  return res.render('receitas/show', {recipes: foundRecipe})
}