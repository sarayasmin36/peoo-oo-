var Conta = /** @class */ (function () {
    function Conta(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor >= 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$ ".concat(valor.toFixed(2), " realizado com sucesso."));
        }
        else {
            console.log('Valor de depósito inválido.');
        }
    };
    Conta.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$ ".concat(valor.toFixed(2), " realizado com sucesso."));
        }
        else {
            console.log('Valor de saque inválido.');
        }
    };
    Conta.prototype.mostrarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
var minhaConta = new Conta('João Silva', 500);
console.log("Saldo atual: R$ ".concat(minhaConta.mostrarSaldo().toFixed(2)));
minhaConta.depositar(-5);
minhaConta.sacar(100);
console.log("Saldo atual: R$ ".concat(minhaConta.mostrarSaldo().toFixed(2)));
