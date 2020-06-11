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
    const sobre = {
        imagemPerfil:"https://avatars0.githubusercontent.com/u/62801078?s=460&u=d4420dac3fa9e7a3cd184ca5f1a4831f78aa5b89&v=4",
        nome:"Paulo R C Trindade",
        atividade:"Estudante de Programação",
        descricao:'"Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Quem manda na minha terra sou euzis! A ordem dos tratores não altera o pão duris."',
        links:[
            {nome:"Git Hub", url:"https://github.com/PauloRCTrindade"},
            {nome:"twitter", url:"https://github.com/PauloRCTrindade"},
            {nome:"Instagran", url:"https://github.com/PauloRCTrindade"}
        ]
    }
    return res.render('sobre',{sobre})
})

server.get('/videos',function(req,res){
    return res.render('videos',{itens:videos})
})

server.listen(5000,function(){
    console.log('Server rodando')
})

