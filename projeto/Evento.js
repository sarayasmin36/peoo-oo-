"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoManager = void 0;
var EventoManager = /** @class */ (function () {
    function EventoManager() {
        this.eventos = [];
    }
    EventoManager.prototype.adicionarEvento = function (nome, data, local, organizador) {
        var novoEvento = {
            nome: nome,
            data: data,
            local: { nome: local },
            organizador: { nome: organizador },
        };
        this.eventos.push(novoEvento);
    };
    EventoManager.prototype.listarEventos = function () {
        return this.eventos;
    };
    return EventoManager;
}());
exports.EventoManager = EventoManager;
