const express = require ('express')
const routes = require('./routes')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})


// SERVIDOR
server.listen(3000, function(){
  console.log(' ==> Server is Runnign <== ')
})