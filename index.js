const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/elevacao/:number', function (req, res) {
    const number = req.params.number * req.params.number;
    res.status(200).send(`${number}`);
});


app.get('/', function(req, res) {
    res.status(200).send('Serviço funcionando corretamente: Consulte a rota /elevacao/:number');
});


app.get('/perfil', function(req, res) {
    res.status(200).send({
        apelido: 'claudio',
        nome: 'rener',
        assinante: true,
        foto: "http://enderecoDeUmaImagemMtoLoca.com"
    });
});


app.post('/login', (req, res) => {
    console.log(req.body);

    let login = req.body.nome;

    if (login === 'rener') {
        res.status(200).send('Login bem-sucedido!');
    } 
    
    else {
        res.status(401).send('Login inválido. Por favor, verifique suas credenciais.');
    }
});


app.listen(port, () => {
    console.log(`O servidor está ouvindo na porta ${port}`);
});
