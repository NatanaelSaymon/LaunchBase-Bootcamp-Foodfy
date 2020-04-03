const express = require ('express')
const server = express()
const nunjucks = require('nunjucks')

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
  return res.render('index.njk')
})
server.get("/sobre", function(req, res){
  return res.render('sobre.njk')
})
server.get("/receitas", function(req, res){
  return res.render('receitas.njk')
})

server.get("/recipes", function(req, res){
  return res.send("Loading...")
})

// SERVIDOR
server.listen(3000, function(){
  console.log(' ==> Server is Runnign <==')
})