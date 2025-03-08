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
  res.render('formulario'); // renderiza o formulário
});

app.get('/outra-pagina', function (req, res) {
  const sql = 'SELECT * FROM eventos';
  conexao.query(sql, function (erro, eventos) {
    if (erro) {
      console.error('Erro ao buscar eventos: ', erro);
      return res.status(500).send('Erro ao carregar eventos');
    }
    console.log('Eventos encontrados:', eventos);  // Adicione este log
    res.render('outra-pagina', { eventos: eventos });
  });
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
  let lugar = req.body.lugar

  // Aqui você pode inserir os dados no banco de dados
  const sql = 'INSERT INTO eventos (nome, organizador, datas, lugar) VALUES (?, ?, ?, ?)';
conexao.query(sql, [nome, organizador, data, lugar], function (erro, resultado) {
  if (erro) {
    console.error('Erro ao inserir evento: ', erro);
    res.status(500).send('Erro ao cadastrar evento');
  } else {
    console.log('Evento cadastrado com sucesso!', resultado);
    res.redirect('/');
  }
});
});



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
