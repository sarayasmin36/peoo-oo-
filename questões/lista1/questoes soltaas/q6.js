"use strict";
class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        if (valor >= 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log('Valor de depósito inválido.');
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log('Valor de saque inválido.');
        }
    }
    mostrarSaldo() {
        return this.saldo;
    }
}
const minhaConta = new Conta('João Silva', 500);
console.log(`Saldo atual: R$ ${minhaConta.mostrarSaldo().toFixed(2)}`);
minhaConta.depositar(-5);
minhaConta.sacar(100);
console.log(`Saldo atual: R$ ${minhaConta.mostrarSaldo().toFixed(2)}`);
