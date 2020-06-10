const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'html')

server.use(express.static('public'))

nunjucks.configure('views',{
    express: server
})

server.get('/sobre',function(req,res){
    return res.render('sobre')
})

server.get('/videos',function(req,res){
    return res.render('videos')
})
server.listen(3333,function(){
    console.log('server rodando liso')
})