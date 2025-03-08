const express = require('express');
const mysql = require('mysql2');
const { engine } = require('express-handlebars');

// App
const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração de body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conexão com o banco de dados
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projeto',
});

conexao.connect((erro) => {
  if (erro) {
    throw erro;
  }
  console.log('Conectado ao BD...');
});

// Rota para exibir o formulário
app.get('/', function (req, res) {
  res.render('formulario'); // Renderiza o formulário
});

// Rota para cadastrar o evento
app.post('/cadastrar', function (req, res) {
  let nome = req.body.nome;
  let organizador = req.body.organizador;
  let data = req.body.data;
  let lugar = req.body.lugar;

  // Inserir dados no banco de dados
  const sql = 'INSERT INTO eventos (nome, organizador, datas, lugar) VALUES (?, ?, ?, ?)';
  conexao.query(sql, [nome, organizador, data, lugar], function (erro, resultado) {
    if (erro) {
      console.error('Erro ao inserir evento: ', erro);
      res.status(500).send('Erro ao cadastrar evento');
    } else {
      console.log('Evento cadastrado com sucesso!', resultado);
      res.redirect('/organizador');
    }
  });
});

// Rota para exibir os eventos na outra página
app.get('/outra-pagina', function (req, res) {
  const sql = 'SELECT * FROM eventos'; // Consulta todos os eventos
  conexao.query(sql, function (erro, eventos) {
    if (erro) {
      console.error('Erro ao buscar eventos: ', erro);
      return res.status(500).send('Erro ao carregar eventos');
    }

    console.log('Eventos encontrados:', eventos); // Aqui, loga os dados retornados do banco
    res.render('outra-pagina', { eventos: eventos });
  });
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});