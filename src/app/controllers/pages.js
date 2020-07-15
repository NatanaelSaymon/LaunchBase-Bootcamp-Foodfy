const data = require('../../../data.json')

exports.index = function(req, res){
  const lastRecipes = []
  for(recipe of data.recipes){
    
    if(lastRecipes.length < 6){
      lastRecipes.push(recipe)
    }
  }

  return res.render('index', { recipes: lastRecipes })
}

exports.about = function(req, res){
  return res.render('sobre')
}

exports.status = function(req, res){
  return res.status(404).render('not-found')
}