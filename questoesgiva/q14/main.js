"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Bicicleta_1 = require("./Bicicleta");
function moverVeiculos(veiculos) {
    veiculos.forEach((veiculo) => {
        veiculo.mover();
    });
}
const carro = new Carro_1.Carro();
const bicicleta = new Bicicleta_1.Bicicleta();
const veiculos = [carro, bicicleta];
moverVeiculos(veiculos);
