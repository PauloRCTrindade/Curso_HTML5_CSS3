const express = require('express')
const nanjuckd = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine','html')

nanjuckd.configure('views',{
    express: server
})

server.get('/',function(req, res){
    return res.render('index')
})

server.get('/videos',function(req,res){
    return res.render('videos')
})

server.listen(5000,function(){
    console.log('Server rodando')
})

