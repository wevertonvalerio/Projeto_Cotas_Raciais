const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.set('views', __dirname + '/view')
app.set('view engine','pug')

app.listen(3000, function(){
    console.log('Servidor ta Rodando na porta 3000');
});

const pool = require('./dao/_conexao');

app.get('/',function(req, res){
    res.render('index');
})

app.get('/historia', function(req, res){
    res.render('historia');
})

app.get('/funcionamento', function(req, res){
    res.render('funcionamento');
})

app.get('/cadastrar',function(req, res){
    res.render('cadastrar');
});

app.post('/inserir',function(req, res){

    console.log(`
    req.body.nome = ${req.body.nome}
    req.body.email = ${req.body.email}
    req.body.telWhats = ${req.body.telWhats}
    req.body.cpf = ${req.body.cpf}
    req.body.mensagem = ${req.body.mensagem}
    `);

    pool.query(`INSERT INTO tbCadastro 
    (nome, email, telwhats, cpf, mensagem) 
    VALUES 
    ($1, $2, $3, $4, $5)`, 
    [req.body.nome, req.body.email, req.body.telWhats, 
        req.body.cpf, req.body.mensagem])
    .then(resposta => console.log('ok'))
    .catch(err => console.log('erro: ' + err));
    res.end();
});

app.get('/listar',function(req, res){
    
    pool.query(`SELECT codigo, nome, email, telwhats, cpf, mensagem
                FROM tbCadastro ORDER BY codigo ASC`)
                .then(function(resultado){
                   resultado.rows.forEach( function(row){
                       console.log(`
                                   codigo: ${row.codigo},
                                   Nome: ${row.nome},
                                   E-mail: ${row.email},
                                   Contato: ${row.telwhats},
                                   CPF: ${row.cpf},
                                   Mensagem: ${row.mensagem}`)
                 })            
                 let listaCompleta = resultado.rows
                 res.render('listar',{listaCompleta})
               })
               .catch(function(erro){
                   console.log(erro.stack)
               })

});

app.get('/excluir/:codigo',function(req, res){
    const { codigo } = req.params;
    pool.query(`
                DELETE FROM tbCadastro WHERE codigo = ${codigo}`)
                .then(function(retorno){
                    console.log("Registro excluído com sucesso!")
                    res.redirect('/listar')
                })
                .catch(function(erro){
                    console.log('Apresentou erro: ' + erro);
                    res.redirect('/listar')
                })
});

app.get('/solicita-editar/:codigo',function(req, res){
    const { codigo } = req.params;
    pool.query(`SELECT codigo, nome, email, telwhats, cpf, mensagem FROM tbCadastro WHERE codigo = ${codigo}`)
                 .then(function(resultado){
                    let estudante = resultado.rows[0]
                    //console.log(user)
                    res.render('editar',{estudante})
                })
                .catch(function(erro){
                    console.log(erro.stack)
                    //res.render('lista');
                })
});

app.post('/editar/:codigo',function(req, res){
    const { codigo } = req.params;
    console.log(req.body)
    pool.query(`
                UPDATE tbCadastro SET
		            nome = '${req.body.nome}',
                    email = '${req.body.email}',
                    telwhats = '${req.body.telWhats}',                
                    cpf = '${req.body.cpf}',
                    mensagem = '${req.body.mensagem}'WHERE codigo = ${codigo}`)

                .then(function(retorno){

                    console.log("Alteração realizada com sucesso!")
                    //throw "erro"
                    res.redirect('/listar')
                })
                //TRATAR ERROS NA CAMADA VISUAL
                .catch(function(erro){
                    console.log('Apresentou erro: ' + erro);
                    res.redirect(`/solicita-editar/${codigo}`)
                })
});