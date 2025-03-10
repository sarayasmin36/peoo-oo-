// Importação dos módulos necessários
const express = require('express'); // Framework para criar o servidor web
const mysql = require('mysql2'); // Módulo para conectar e interagir com o banco de dados MySQL
const { engine } = require('express-handlebars'); // Template engine para renderizar HTML dinâmico

// Inicialização do app Express
const app = express();

// ===============================
// Configuração do Handlebars
// ===============================
app.engine('handlebars', engine()); // Define o Handlebars como engine de visualização
app.set('view engine', 'handlebars'); // Define o Handlebars como o motor de views padrão
app.set('views', './views'); // Define o diretório onde as views estão localizadas

// ===============================
// Configuração do Body Parser
// ===============================
app.use(express.json()); // Permite que o servidor receba dados em JSON
app.use(express.urlencoded({ extended: false })); // Permite receber dados de formulários via URL-encoded

// ===============================
// Conexão com o Banco de Dados MySQL
// ===============================
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projeto',
});

// Conecta ao banco e exibe mensagem de sucesso ou erro
conexao.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro.sqlMessage || erro);
    process.exit(1); // Encerra o servidor de forma controlada
  }
  console.log('✅ Conectado ao banco de dados!');
});

// Middleware para lidar com erros globais
app.use((err, req, res, next) => {
  console.error('Erro inesperado:', err);
  res.status(500).send('Erro interno do servidor.');
});

// ===============================
// Rotas de Exibição Simples
// ===============================

// Página inicial com um formulário
app.get('/', (req, res) => {
  // Buscar dados no banco e enviar como resposta
  res.render('formulario');
});

// Página do organizador
app.get('/organizador', (req, res) => {
  res.render('organizador');
});

// ===============================
// Rotas de Eventos
// ===============================

// Exibe a lista de eventos
app.get('/outra-pagina', (req, res) => {
  const sql = `
    SELECT codigo, nome, organizador, 
           DATE_FORMAT(datas, '%d/%m/%y') AS datas_formatada, lugar 
    FROM eventos
  `;

  conexao.query(sql, (erro, eventos) => {
    if (erro) {
      console.error('Erro ao buscar eventos:', erro.sqlMessage || erro);
      return res.status(500).send('Erro ao carregar eventos');
    }

    console.log('Eventos encontrados:', eventos);
    res.render('outra-pagina', { eventos });
  });
});

// Cadastra um novo evento
app.post('/cadastrar', (req, res) => {
  const { nome, organizador, data, lugar } = req.body;
  // Salvar no banco de dados
  if (!nome || !organizador || !data || !lugar) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  const sql = 'INSERT INTO eventos (nome, organizador, datas, lugar) VALUES (?, ?, ?, ?)';
  conexao.query(sql, [nome, organizador, data, lugar], (erro) => {
    if (erro) {
      console.error('Erro ao inserir evento:', erro.sqlMessage || erro);
      return res.status(500).send('Erro ao cadastrar evento');
    }
    console.log('Evento cadastrado com sucesso!');
    res.redirect('/organizador');
  });
});

// Exibe o formulário para editar um evento
app.get('/eventos/:id/editar', (req, res) => {
  const eventoId = req.params.id;
  
  const sql = 'SELECT * FROM eventos WHERE codigo = ?';
  conexao.query(sql, [eventoId], (erro, resultados) => {
    if (erro) {
      console.error('Erro ao buscar evento:', erro.sqlMessage || erro);
      return res.status(500).send('Erro ao buscar evento para edição.');
    }

    if (resultados.length === 0) {
      return res.status(404).send('Evento não encontrado.');
    }

    res.render('editar-evento', { evento: resultados[0] });
  });
});

// Processa a edição de um evento
app.post('/eventos/:id/editar', (req, res) => {
  const eventoId = req.params.id;
  const { nome, organizador, data, lugar } = req.body;

  if (!nome || !organizador || !data || !lugar || isNaN(eventoId)) {
    return res.status(400).send('Dados inválidos para atualização.');
  }

  const sql = 'UPDATE eventos SET nome = ?, organizador = ?, datas = ?, lugar = ? WHERE codigo = ?';
  conexao.query(sql, [nome, organizador, data, lugar, eventoId], (erro) => {
    if (erro) {
      console.error('Erro ao atualizar evento:', erro.sqlMessage || erro);
      return res.status(500).send('Erro ao atualizar evento.');
    }
    console.log('Evento atualizado com sucesso!');
    res.redirect('/outra-pagina');
  });
});

// Exclui um evento
app.post('/eventos/:id/excluir', (req, res) => {
  const { id } = req.params;
  // Excluir o evento do banco
  const sql = 'DELETE FROM eventos WHERE codigo = ?';

  conexao.query(sql, [id], (erro) => { 
    if (erro) {
      console.error('Erro ao excluir evento:', erro.sqlMessage || erro);
      return res.status(500).send('Erro ao excluir evento.');
    }
    res.redirect('/outra-pagina');
  });
});

// ===============================
// Rotas de Participantes
// ===============================

// Inscreve um participante em um evento
app.post('/participar', (req, res) => {
  const { nome, email, evento_id } = req.body;

  const evento_id_numero = parseInt(evento_id, 10);
  if (isNaN(evento_id_numero)) {
    console.error('Erro: ID do evento inválido:', evento_id);
    return res.status(400).send('Erro: ID do evento inválido');
  }

  const sql = 'INSERT INTO participantes (nome, email, evento_id) VALUES (?, ?, ?)';
  conexao.query(sql, [nome, email, evento_id_numero], (erro) => {
    if (erro) {
      console.error('Erro ao inscrever participante:', erro);
      return res.status(500).send('Erro ao inscrever participante.');
    }
    res.redirect('/participantes');
  });
});

// Edita informações de um participante
app.post('/participantes/:id/editar', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  const sql = 'UPDATE participantes SET nome = ?, email = ? WHERE id = ?';
  conexao.query(sql, [nome, email, id], (erro) => {
    if (erro) {
      console.error('Erro ao atualizar participante:', erro);
      return res.status(500).send('Erro ao atualizar participante');
    }
    res.redirect('/participantes');
  });
});

// Exibe o formulário para editar um participante
app.get('/participantes/:id/editar', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM participantes WHERE id = ?';

  conexao.query(sql, [id], (erro, resultado) => {
    if (erro) {
      console.error('Erro ao buscar participante:', erro);
      return res.status(500).send('Erro ao buscar participante');
    }

    if (resultado.length > 0) {
      res.render('editar-participante', { participante: resultado[0] });
    } else {
      res.status(404).send('Participante não encontrado.');
    }
  });
});

// Exclui um participante
app.post('/participantes/:id/excluir', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM participantes WHERE id = ?';

  conexao.query(sql, [id], (erro) => {
    if (erro) {
      console.error('Erro ao excluir participante:', erro);
      return res.status(500).send('Erro ao excluir participante');
    }
    res.redirect('/participantes');
  });
});

// Lista todos os participantes e o evento associado
app.get('/participantes', (req, res) => {
  const sql = `
    SELECT participantes.id, participantes.nome, participantes.email, 
           eventos.nome AS evento_nome,
           DATE_FORMAT(eventos.datas, '%d/%m/%y') AS datas_formatada
    FROM participantes 
    INNER JOIN eventos ON participantes.evento_id = eventos.codigo
  `;

  conexao.query(sql, (erro, participantes) => {
    if (erro) {
      console.error('Erro ao buscar participantes:', erro.sqlMessage || erro);
      return res.status(500).send('Erro ao carregar participantes.');
    }
    res.render('participantes', { participantes });
  });
});

// ===============================
// Rota de Certificados
// ===============================
app.get('/certificado', (req, res) => {
  const participanteId = req.query.id;

  const sql = `
    SELECT p.nome AS participante_nome, p.email, 
           e.nome AS evento_nome, e.organizador, 
           DATE_FORMAT(e.datas, '%d/%m/%y') AS datas_formatada, e.lugar 
    FROM participantes p
    JOIN eventos e ON p.evento_id = e.codigo
    WHERE p.id = ?
  `;

  conexao.query(sql, [participanteId], (err, resultado) => {
    if (resultado.length > 0) {
      res.render('certificado', { participante: resultado[0] });
    } else {
      res.status(404).send('Participante não encontrado.');
    }
  });
});


// Middleware de rota não encontrada
app.use((req, res) => {
  res.status(404).send('Rota não encontrada.');
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})