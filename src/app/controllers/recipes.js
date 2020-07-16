const recipes = require('../../../data.json')
const fs = require('fs')
const data = require('../../../data.json')

//INDEX
exports.index = function(req, res){
  return res.render('receitas/index', { recipes: data.recipes })
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

  let { url_imagem, titulo, autor, ingredientes, modo_preparo, info_adicionais } = req.body

  //Retirando os valores nulos e vazios dos campos abaixo
  ingredientes = ingredientes.filter(item => item)
  modo_preparo = modo_preparo.filter(item => item)

  let id = 1
  const lastId = data.recipes[data.recipes.length - 1]

  if(lastId){
    id = lastId.id + 1
  }

  data.recipes.push({ id, url_imagem, titulo, autor, ingredientes, modo_preparo, info_adicionais })

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
  let { ingredientes } = req.body
  let { modo_preparo } = req.body

  //Retirando os valores nulos e vazios dos campos abaixo
  ingredientes = ingredientes.filter(item => item)
  modo_preparo = modo_preparo.filter(item => item)

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
    ingredientes,
    modo_preparo,
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

//DELETE
exports.delete = function(req, res){
  const { id } = req.body

  const filterRecipes = data.recipes.filter(function(recipe){
    return recipe.id != id
  })

  data.recipes = filterRecipes

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err){
      return res.send("Escrita errada!")
    }
    return res.redirect(`/receitas`)
  })
}