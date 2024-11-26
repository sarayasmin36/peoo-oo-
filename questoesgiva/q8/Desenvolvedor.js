"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desenvolvedor = void 0;
const Funcionario_1 = require("./Funcionario");
class Desenvolvedor extends Funcionario_1.Funcionario {
    constructor(nome, salario, nivel) {
        super(nome, salario);
        this._nivel = nivel;
    }
    get nivel() {
        return this._nivel;
    }
    set nivel(nivel) {
        if (nivel === 'Junior' || nivel === 'Pleno' || nivel === 'Senior')
            this._nivel = nivel;
        else
            console.log('Nível inválido. Deve ser Junior, Pleno ou Senior');
    }
    promover() {
        let aumento;
        switch (this._nivel) {
            case 'Junior':
                aumento = 0.1; // 10% de aumento
                break;
            case 'Pleno':
                aumento = 0.2; // 20% de aumento
                break;
            case 'Senior':
                aumento = 0.3; // 30% de aumento
                break;
            default:
                throw new Error('Nível inválido para promoção');
        }
        this._salario += this._salario * aumento;
        console.log(`Desenvolvedor ${this.nome} promovido. Novo salário: R$ ${this._salario.toFixed(2)}`);
    }
}
exports.Desenvolvedor = Desenvolvedor;
