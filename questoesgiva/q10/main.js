"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const carro1 = new Carro_1.Carro('Toyota', 'Corolla', 2021);
console.log(`Carro 1: Marca: ${carro1.marca}, Modelo: ${carro1.modelo}, Ano: ${carro1.ano}`);
const carro2 = new Carro_1.Carro('Honda', 'Civic');
console.log(`Carro 2: Marca: ${carro2.marca}, Modelo: ${carro2.modelo}, Ano: ${carro2.ano}`);
