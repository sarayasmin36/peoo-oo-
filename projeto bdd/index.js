const express = require('express');
const mysql = require('mysql2');
const { engine } = require('express-handlebars');

// App
const app = express();

// Bootstrap
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

// Configuração
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projetobd',
});

conexao.connect((erro) => {
  if (erro) {
    throw erro;
  }
  console.log('Conectado ao BD...');
});

// Rota para exibir o formulário
app.get('/', function (req, res) {
  res.render('formulario'); // renderiza o formulário
});

// Rota para exibir a página do organizador
app.get('/organizador', function (req, res) {
  res.render('organizador');
});

// Rota para cadastrar o evento
app.post('/cadastrar', function (req, res) {
  let nome = req.body.nome
  let organizador = req.body.organizador
  let data = req.body.data
  let local = req.body.local

  // Aqui você pode inserir os dados no banco de dados
  const sql = `INSERT INTO eventos (nome, organizador, data, local) VALUES ('${nome}', '${organizador}', ${data}, '${local}')`;
  conexao.query(sql, function(erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(500).send('Erro ao cadastrar o evento');
    } else {
      console.log('Evento cadastrado com sucesso:', resultado);
      res.redirect('/'); // Redireciona para a página inicial após o cadastro
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
