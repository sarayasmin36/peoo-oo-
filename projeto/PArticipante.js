"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteManager = void 0;
var ParticipanteManager = /** @class */ (function () {
    function ParticipanteManager() {
        this.participantes = [];
    }
    ParticipanteManager.prototype.inscreverParticipante = function (event) {
        event.preventDefault();
        var nomeParticipante = document.getElementById('participante-nome').value;
        var emailParticipante = document.getElementById('participante-email').value;
        var eventoEscolhido = eventoSelecionado.value;
        var eventoInscrito = eventos.find(function (evento) { return evento.nome === eventoEscolhido; });
        if (eventoInscrito) {
            var participante = {
                nome: nomeParticipante,
                email: emailParticipante,
                evento: eventoInscrito
            };
            participantes.push(participante);
            this.atualizarParticipantes();
        }
        else {
            alert('Por favor, selecione um evento válido.');
        }
    };
    ParticipanteManager.prototype.atualizarParticipantes = function () {
        var tbody = participanteTabela.querySelector('tbody');
        tbody.innerHTML = '';
        participantes.forEach(function (participante) {
            var tr = document.createElement('tr');
            tr.innerHTML = "\n            <td>".concat(participante.nome, "</td>\n            <td>").concat(participante.email, "</td>\n            <td>").concat(participante.evento.nome, "</td>\n            <td><button onclick=\"gerarCertificado('").concat(participante.nome, "', '").concat(participante.email, "', '").concat(participante.evento.nome, "', '").concat(participante.evento.organizador.nome, "', '").concat(participante.evento.data, "', '").concat(participante.evento.local.nome, "')\">Gerar Certificado</button></td>\n          ");
            tbody.appendChild(tr);
        });
    };
    return ParticipanteManager;
}());
exports.ParticipanteManager = ParticipanteManager;
