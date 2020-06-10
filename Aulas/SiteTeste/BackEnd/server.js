const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine','html')

nunjucks.configure('views',{
   express: server
})

server.get('/sobre',function(req, res){
    return res.render('sobre')
})

server.get('/videos',function(req,res){
    return res.render('videos')
})

server.listen(5000,function(){
    console.log('Server rodando')
})
