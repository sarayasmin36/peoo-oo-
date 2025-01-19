"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteManager = void 0;
var ParticipanteManager = /** @class */ (function () {
    function ParticipanteManager() {
        this.participantes = [];
    }
    ParticipanteManager.prototype.inscreverParticipante = function (nome, email, evento) {
        var participante = { nome: nome, email: email, evento: evento };
        this.participantes.push(participante);
    };
    ParticipanteManager.prototype.listarParticipantes = function () {
        return this.participantes;
    };
    return ParticipanteManager;
}());
exports.ParticipanteManager = ParticipanteManager;
