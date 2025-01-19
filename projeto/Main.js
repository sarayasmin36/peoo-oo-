"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evento_1 = require("./Evento");
var Local_1 = require("./Local");
var Organizador_1 = require("./Organizador");
var PArticipante_1 = require("./PArticipante");
// Listas globais
var eventos = [];
var participantes = [];
// Referências aos elementos HTML
var eventoForm = document.getElementById('evento-form');
var participanteForm = document.getElementById('participante-form');
var eventosTabela = document.getElementById('eventos-tabela');
var participanteTabela = document.getElementById('participante-tabela');
var eventoSelecionado = document.getElementById('evento-selecionado');
// Função para adicionar um novo evento
function adicionarEvento(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit
    var nomeEvento = document.getElementById('evento-nome').value;
    var organizadorNome = document.getElementById('evento-organizador').value;
    var eventoData = document.getElementById('evento-data').value;
    var eventoLocal = document.getElementById('evento-local').value;
    // Criação de um novo evento
    var novoEvento = new Evento_1.EventoClass(nomeEvento, eventoData, new Local_1.LocalClass(eventoLocal), new Organizador_1.OrganizadorClass(organizadorNome));
    // Adiciona o evento à lista e atualiza a tabela
    eventos.push(novoEvento);
    atualizarEventos();
    atualizarEventosNoSelect();
}
// Função para exibir os eventos na tabela
function atualizarEventos() {
    var tbody = eventosTabela.querySelector('tbody');
    tbody.innerHTML = '';
    eventos.forEach(function (evento) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n      <td>".concat(evento.nome, "</td>\n      <td>").concat(evento.organizador.nome, "</td>\n      <td>").concat(evento.data, "</td>\n      <td>").concat(evento.local.nome, "</td>\n    ");
        tbody.appendChild(tr);
    });
}
// Função para atualizar a lista de eventos no select (para inscrição de participantes)
function atualizarEventosNoSelect() {
    eventoSelecionado.innerHTML = '<option value="" disabled selected>Selecione um evento:</option>';
    eventos.forEach(function (evento) {
        var option = document.createElement('option');
        option.value = evento.nome;
        option.textContent = evento.nome;
        eventoSelecionado.appendChild(option);
    });
}
// Função para inscrever um participante
function inscreverParticipante(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit
    var nomeParticipante = document.getElementById('participante-nome').value;
    var emailParticipante = document.getElementById('participante-email').value;
    var eventoEscolhido = eventoSelecionado.value;
    var eventoInscrito = eventos.find(function (evento) { return evento.nome === eventoEscolhido; });
    if (eventoInscrito) {
        var participante = new PArticipante_1.ParticipanteClass(nomeParticipante, emailParticipante, eventoInscrito);
        participantes.push(participante);
        atualizarParticipantes();
    }
    else {
        alert('Por favor, selecione um evento válido.');
    }
}
// Função para exibir os participantes cadastrados
function atualizarParticipantes() {
    var tbody = participanteTabela.querySelector('tbody');
    tbody.innerHTML = '';
    participantes.forEach(function (participante) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n      <td>".concat(participante.nome, "</td>\n      <td>").concat(participante.email, "</td>\n      <td>").concat(participante.evento.nome, "</td>\n    ");
        tbody.appendChild(tr);
    });
}
// Adicionando os event listeners para os formulários
eventoForm.addEventListener('submit', adicionarEvento);
participanteForm.addEventListener('submit', inscreverParticipante);
// Inicializando a lista de eventos no select
atualizarEventosNoSelect();
