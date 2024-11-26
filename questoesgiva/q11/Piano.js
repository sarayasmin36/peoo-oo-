"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piano = void 0;
const InstrumentoMusical_1 = require("./InstrumentoMusical");
class Piano extends InstrumentoMusical_1.InstrumentoMusical {
    constructor(nome = 'Piano') {
        super(nome);
    }
    tocar() {
        console.log('Tocando piano');
    }
}
exports.Piano = Piano;
