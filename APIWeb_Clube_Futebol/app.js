const express = require('express');
const path = require('path');//criado para receber page static

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static('public'));

//rota #
app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");

});

app.get("/home", function(req, res){

    res.sendFile(__dirname + "/public/index.html");

})

app.get("/minhaconta", function(req, res){

    res.sendFile(__dirname + "/public/conta.html");

})

app.get("/favoritos", function(req, res){

    res.sendFile(__dirname + "/public/favorito.html");

})


//#listen()
app.listen(8081, function(){
    console.log("Servidor Ativado!");
});