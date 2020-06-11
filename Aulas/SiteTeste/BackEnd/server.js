const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")
server.use(express.static('public'))

server.set('view engine','njk')

nunjucks.configure('views',{
   express: server
})

server.get('/',function(req, res){
    return res.render('sobre')
})

server.get('/videos',function(req,res){
    return res.render('videos',{itens:videos})
})

server.listen(5000,function(){
    console.log('Server rodando')
})

