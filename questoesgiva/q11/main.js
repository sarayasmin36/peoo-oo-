"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Violao_1 = require("./Violao");
const Piano_1 = require("./Piano");
function tocarInstrumentos(instrumentos) {
    instrumentos.forEach((instrumento) => {
        instrumento.tocar();
    });
}
const violao = new Violao_1.Violao();
const piano = new Piano_1.Piano();
const instrumentos = [violao, piano];
tocarInstrumentos(instrumentos);
