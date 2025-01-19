"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evento_1 = require("./evento");
var participante_1 = require("./participante");
var certificado_1 = require("./certificado");
// Referências aos elementos HTML
var eventoForm = document.getElementById('evento-form');
var participanteForm = document.getElementById('participante-form');
var eventosTabela = document.getElementById('eventos-tabela');
var participanteTabela = document.getElementById('participante-tabela');
var eventoSelecionado = document.getElementById('evento-selecionado');
var certificadoTabela = document.getElementById('certificado-tabela');
// Instâncias dos managers
var eventoManager = new evento_1.EventoManager();
var participanteManager = new participante_1.ParticipanteManager();
var certificadoManager = new certificado_1.CertificadoManager();
// Função para atualizar eventos no HTML
function atualizarEventos() {
    var tbody = eventosTabela.querySelector('tbody');
    tbody.innerHTML = '';
    eventoManager.listarEventos().forEach(function (evento) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n            <td>".concat(evento.nome, "</td>\n            <td>").concat(evento.organizador.nome, "</td>\n            <td>").concat(evento.data, "</td>\n            <td>").concat(evento.local.nome, "</td>\n        ");
        tbody.appendChild(tr);
    });
    atualizarEventosNoSelect();
}
// Função para atualizar eventos no `<select>`
function atualizarEventosNoSelect() {
    eventoSelecionado.innerHTML = '<option value="" disabled selected>Selecione um evento:</option>';
    eventoManager.listarEventos().forEach(function (evento) {
        var option = document.createElement('option');
        option.value = evento.nome;
        option.textContent = evento.nome;
        eventoSelecionado.appendChild(option);
    });
}
// Função para atualizar participantes no HTML
function atualizarParticipantes() {
    var tbody = participanteTabela.querySelector('tbody');
    tbody.innerHTML = '';
    participanteManager.listarParticipantes().forEach(function (participante) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n            <td>".concat(participante.nome, "</td>\n            <td>").concat(participante.email, "</td>\n            <td>").concat(participante.evento.nome, "</td>\n            <td>\n                <button onclick=\"gerarCertificado('").concat(participante.nome, "')\">Gerar Certificado</button>\n            </td>\n        ");
        tbody.appendChild(tr);
    });
}
// Função para atualizar certificados no HTML
function atualizarCertificados() {
    var tbody = certificadoTabela.querySelector('tbody');
    tbody.innerHTML = '';
    certificadoManager.listarCertificados().forEach(function (certificado) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n            <td>".concat(certificado.nome, "</td>\n            <td>").concat(certificado.email, "</td>\n            <td>").concat(certificado.evento.nome, "</td>\n            <td>").concat(certificado.evento.organizador.nome, "</td>\n            <td>").concat(certificado.evento.data, "</td>\n            <td>").concat(certificado.evento.local.nome, "</td>\n        ");
        tbody.appendChild(tr);
    });
}
// Event listeners para formulários
eventoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('evento-nome').value;
    var data = document.getElementById('evento-data').value;
    var local = document.getElementById('evento-local').value;
    var organizador = document.getElementById('evento-organizador').value;
    eventoManager.adicionarEvento(nome, data, local, organizador);
    atualizarEventos();
});
participanteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('participante-nome').value;
    var email = document.getElementById('participante-email').value;
    var eventoNome = eventoSelecionado.value;
    var evento = eventoManager.listarEventos().find(function (e) { return e.nome === eventoNome; });
    if (evento) {
        participanteManager.inscreverParticipante(nome, email, evento);
        atualizarParticipantes();
    }
    else {
        alert('Evento não encontrado.');
    }
});
// Inicializa o sistema
atualizarEventos();
