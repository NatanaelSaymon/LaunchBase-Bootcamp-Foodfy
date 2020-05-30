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

  let { imagem_receita, nome, autor, ingredientes, modo_preparo, info_adicionais } = req.body

  const id = Number(data.recipes.length + 1)

  data.recipes.push({ id, imagem_receita, nome, autor, ingredientes, modo_preparo, info_adicionais })

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

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  if(!foundRecipe){
    return res.send('Receita não encontrada, tente novamente!')
  }

  // return res.send(foundRecipe)
  return res.render('receitas/show', { recipe: foundRecipe })
}

//EDIT
exports.edit = function(req, res){
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  if(!foundRecipe){
    return res.send('Receita não encontrada, tente novamente!')
  }
  return res.render('receitas/edit', { recipe: foundRecipe })
}

//PUT
exports.put = function(req, res){
  const { id } = req.body

  let index = 0
  
  const foundRecipe = data.recipes.find(function(recipe, foundRecipe){
    if(id == recipe.id){
      index = foundRecipe
      return true
    }
  })

  if(!foundRecipe){
    return res.send('Receita não encontrada, tente novamente!')
  }

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id)
  }

  data.recipes[index] = recipe

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err){
      return res.send("Escrita errada!")
    }
    return res.redirect(`/receitas/${id}`)
  })
}