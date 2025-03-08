let express = require('express');
const db = require('../../projeto bd/utils/db');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sara na rede' });
});

router.get('/sobre', function(req, res) {
  res.send("<h2> teste </h2>");
});

router.get('/ola/:nome', function(req, res, next) {
  res.send("<h2>Olá, " + req.params.nome + "</h2>");
});

router.get('/imc', function(req, res, next) {
  let peso = req.query.peso;
  let estatura = req.query.estatura

  let imc = peso / Math.pow(estatura, 2);
  let msg = "<h3> Seu IMC é " + imc.toFixed(2) +  "</h3>";
  res.send(msg);    
});

let autores = ["Miriam Leitão", "Ana Beatriz Silva Barbosa", "Coisinha"];
router.use(express.urlencoded({ extended: true }));

router.get('/autores', function(req, res) {
  res.json(autores);
});

router.get('/autores/consulta/:id', function(req, res) {
  let id = req.params.id;
  res.json(autores[id]);
});

router.post('/autores/inclui', function(req, res) {
  let nome = req.body.nome;
  autores.push(nome);
  res.json(autores);
});

router.put('/autores/altera/:id', function(req, res) {
  let id = req.params.id;
  let nome = req.body.nome;

  autores[id] = nome;
  res.json(autores);
});

router.delete('/autores/exclui/:id', function(req, res) {
  let id = req.params.id;

  autores.splice(id, 1)
  res.json(autores);
});

router.get('/autores/listar', function(req, res) {
  db.query('select * from TbAutor', [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.send(listagem);
  });
});

module.exports = router;