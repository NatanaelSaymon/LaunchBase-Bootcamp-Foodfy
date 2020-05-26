const recipes = require('../data')

exports.index = function(req, res){
  return res.render('receitas/index', { recipes })
}

exports.create = function(req, res){
  return res.render('receitas/create')
}

exports.id = function(req, res){
  const recipeId = req.params.id;
  return res.render('receitas/recipe', { recipes: recipes[recipeId] })
}

exports.post = function(req, res){
  const keys = Object.keys(req.body)

  for(key of keys){
    if(req.body[key] == ""){
      return res.send("Por favor, preencha todos os dados!")
    }
  }
  return res.send(req.body)
}