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

// Rota para exibir o formulário inicial
app.get('/', (req, res) => {
  res.render('formulario');
});

app.get('/organizador', (req, res) => {
  res.render('organizador');
});

// ✅ Rota para gerar o certificado de um participante
app.get('/certificado', (req, res) => {
  const participanteId = req.query.id;  // Pegando o ID da URL

  if (!participanteId) {
    return res.status(400).send('ID do participante não informado.');
  }

  const sql = `
    SELECT p.nome AS participante_nome, p.email, 
           e.nome AS evento_nome, e.organizador, e.datas, e.lugar 
    FROM participantes p
    JOIN eventos e ON p.evento_id = e.codigo
    WHERE p.id = ?
  `;

  conexao.query(sql, [participanteId], (err, resultado) => {
    if (err) {
      console.error('Erro ao buscar certificado:', err);
      return res.status(500).send('Erro no servidor');
    }

    if (resultado.length > 0) {
      res.render('certificado', { participante: resultado[0] });
    } else {
      res.status(404).send('Participante não encontrado.');
    }
  });
});

// ✅ Rota para exibir a lista de participantes
app.get('/participantes', (req, res) => {
  const sql = `
    SELECT participantes.id, participantes.nome, participantes.email, 
           eventos.nome AS evento_nome 
    FROM participantes 
    INNER JOIN eventos ON participantes.evento_id = eventos.codigo
  `;

  conexao.query(sql, (erro, participantes) => {
    if (erro) {
      console.error('Erro ao buscar participantes:', erro.sqlMessage || erro);
      return res.status(500).send('Erro ao carregar participantes.');
    }

    console.log('Participantes encontrados:', participantes);
    res.render('participantes', { participantes });
  });
});

// ✅ Rota para cadastrar o evento
app.post('/cadastrar', (req, res) => {
  const { nome, organizador, data, lugar } = req.body;

  if (!nome || !organizador || !data || !lugar) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  const sql = 'INSERT INTO eventos (nome, organizador, datas, lugar) VALUES (?, ?, ?, ?)';
  conexao.query(sql, [nome, organizador, data, lugar], (erro) => {
    if (erro) {
      console.error('Erro ao inserir evento:', erro);
      return res.status(500).send('Erro ao cadastrar evento');
    }
    console.log('Evento cadastrado com sucesso!');
    res.redirect('/organizador');
  });
});

// ✅ Rota para inscrever um participante
app.post('/participar', (req, res) => {
  console.log('📩 Requisição recebida em /participar');

  const { nome, email, evento_id } = req.body;
  console.log('📥 Dados recebidos:', { nome, email, evento_id });

  const evento_id_numero = parseInt(evento_id, 10);
  if (isNaN(evento_id_numero)) {
    console.error('❌ Erro: ID do evento inválido:', evento_id);
    return res.status(400).send('Erro: ID do evento inválido');
  }

  const sql = 'INSERT INTO participantes (nome, email, evento_id) VALUES (?, ?, ?)';

  conexao.query(sql, [nome, email, evento_id_numero], (erro) => {
    if (erro) {
      console.error('❌ Erro ao inscrever participante:', erro);
      return res.status(500).send('Erro ao inscrever participante.');
    }
    console.log('✅ Participante inscrito com sucesso!');
    res.redirect('/participantes');
  });
});

// ✅ Rota para exibir os eventos
app.get('/outra-pagina', (req, res) => {
  const sql = 'SELECT * FROM eventos';
  conexao.query(sql, (erro, eventos) => {
    if (erro) {
      console.error('Erro ao buscar eventos:', erro);
      return res.status(500).send('Erro ao carregar eventos');
    }

    console.log('Eventos encontrados:', eventos);
    res.render('outra-pagina', { eventos });
  });
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
