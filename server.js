const express = require('express');
const app = express();


app.use('/styles', express.static(__dirname + '/styles'));
app.use('/imgs', express.static(__dirname + '/imgs'));
app.use('/js', express.static(__dirname + '/js'));

app.listen(3000, function(){
    console.log('Servidor ta Rodando na porta 3000');
});

app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html');
})

app.get('/historia', function(req, res){
    res.sendFile(__dirname + '/pages/historia.html');
})

app.get('/funcionamento', function(req, res){
    res.sendFile(__dirname + '/pages/funcionamento.html');
})

app.get('/quemSomos', function(req, res){
    res.sendFile(__dirname + '/pages/quemSomos.html');
})

app.get('/cadastrar',function(req, res){
    res.sendFile(__dirname + '/pages/cadastrar.html');
});