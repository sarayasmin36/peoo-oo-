"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = require("./Conta");
class ContaPoupanca extends Conta_1.Conta {
    constructor(saldoInicial = 0, taxaRendimento = 0.01) {
        super(saldoInicial);
        this._taxaRendimento = taxaRendimento;
    }
    get taxaRendimento() {
        return this._taxaRendimento;
    }
    set taxaRendimento(taxaRendimento) {
        this._taxaRendimento = taxaRendimento;
    }
    depositar(valor) {
        if (valor > 0) {
            const valorComRendimento = valor + (valor * this._taxaRendimento);
            this._saldo += valorComRendimento;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso com rendimento aplicado. Saldo atual: R$ ${this._saldo.toFixed(2)}`);
        }
        else {
            console.log('Valor de depósito deve ser maior que zero.');
        }
    }
}
exports.ContaPoupanca = ContaPoupanca;
