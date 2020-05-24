const recipes = require('../data')

exports.index = function(req, res){
  return res.render('index', { recipes })
}

exports.about = function(req, res){
  return res.render('sobre')
}

exports.status = function(req, res){
  return res.status(404).render('not-found')
}