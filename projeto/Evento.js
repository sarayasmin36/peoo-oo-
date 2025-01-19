"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoManager = void 0;
var EventoManager = /** @class */ (function () {
    function EventoManager() {
        this.eventos = [];
    }
    EventoManager.prototype.adicionarEvento = function (event) {
        event.preventDefault();
        var nomeEvento = document.getElementById('evento-nome').value;
        var organizadorNome = document.getElementById('evento-organizador').value;
        var eventoData = document.getElementById('evento-data').value;
        var eventoLocal = document.getElementById('evento-local').value;
        var novoEvento = {
            nome: nomeEvento,
            data: eventoData,
            local: { nome: eventoLocal },
            organizador: { nome: organizadorNome }
        };
        eventos.push(novoEvento);
        this.atualizarEventos();
        this.atualizarEventosNoSelect();
    };
    EventoManager.prototype.atualizarEventos = function () {
        var tbody = eventosTabela.querySelector('tbody');
        tbody.innerHTML = '';
        eventos.forEach(function (evento) {
            var tr = document.createElement('tr');
            tr.innerHTML = "\n            <td>".concat(evento.nome, "</td>\n            <td>").concat(evento.organizador.nome, "</td>\n            <td>").concat(evento.data, "</td>\n            <td>").concat(evento.local.nome, "</td>\n          ");
            tbody.appendChild(tr);
        });
    };
    EventoManager.prototype.atualizarEventosNoSelect = function () {
        eventoSelecionado.innerHTML = '<option value="" disabled selected>Selecione um evento:</option>';
        eventos.forEach(function (evento) {
            var option = document.createElement('option');
            option.value = evento.nome;
            option.textContent = evento.nome;
            eventoSelecionado.appendChild(option);
        });
    };
    return EventoManager;
}());
exports.EventoManager = EventoManager;
