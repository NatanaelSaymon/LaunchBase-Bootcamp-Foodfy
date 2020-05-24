const recipes = require('../data')

exports.index = function(req, res){
  return res.render('receitas/index', { recipes })
}

exports.id = function(req, res){
  const recipeId = req.params.id;
  return res.render('receitas/recipe', { recipes: recipes[recipeId] })
}