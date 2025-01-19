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
// Adicionando os event listeners para os formulários
eventoForm.addEventListener('submit', adicionarEvento);
participanteForm.addEventListener('submit', inscreverParticipante);
// Inicializando a lista de eventos no select
eventoManager.atualizarEventosNoSelect();
