const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//config
    //Template Engine - Aqui temos que dizer para o express qual template engine estamos utilizando.
    app.engine('handlebars', handlebars.engine({defaultLayout: "main"}));
    app.set('view engine','handlebars');

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

//rotas

    app.get('/', (req,res)=>{
        Post.findAll().then(function(postagens){
            console.log(postagens)
            res.render('home', {postagens: postagens})
        })
    });

    app.get('/cad', (req,res) => {
        res.render('formulario')
    });

    //aqui estou redirecionando para a pagina home, depois que o formulario é preenchido.
    app.post('/postagem', (req,res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Houve um erro: ' + erro)
        })
    });

app.listen(9050, function(){
    console.log('Servidor rodando :D')
});



