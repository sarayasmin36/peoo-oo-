"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(saldoInicial = 0) {
        this._saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${this._saldo.toFixed(2)}`);
        }
        else {
            console.log('Valor de depósito deve ser maior que zero.');
        }
    }
    consultarSaldo() {
        console.log(`Saldo atual: R$ ${this._saldo.toFixed(2)}`);
    }
}
exports.Conta = Conta;
