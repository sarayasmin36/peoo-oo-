"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Violao = void 0;
const InstrumentoMusical_1 = require("./InstrumentoMusical");
class Violao extends InstrumentoMusical_1.InstrumentoMusical {
    constructor(nome = 'Violão') {
        super(nome);
    }
    tocar() {
        console.log('Tocando violão');
    }
}
exports.Violao = Violao;
