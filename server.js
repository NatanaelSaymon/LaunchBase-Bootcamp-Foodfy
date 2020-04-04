const express = require ('express')
const server = express()
const nunjucks = require('nunjucks')
const recipes = require('./data')

// CONFIG ARQUIVOS ESTATICOS
server.use(express.static('public'))

// CONFIGURANDO NUNJUCKS
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.set("view engine", "njk")

// ROTAS
server.get("/", function(req, res){
  return res.render('index', { recipes })
})
server.get("/sobre", function(req, res){
  return res.render('sobre')
})
server.get("/receitas", function(req, res){
  return res.render('receitas', { recipes })
})

server.get("/recipes", function(req, res){
  return res.send("Loading...")
})

server.use(function(req, res){
  return res.status(404).render('not-found')
})

// SERVIDOR
server.listen(3000, function(){
  console.log(' ==> Server is Runnign <==')
})