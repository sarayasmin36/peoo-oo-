import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {

    private bonus: number;

    constructor(nome: string, salario: number, cargo: string, bonus: number) {
        super(nome, salario, cargo);
        this.bonus = bonus
    }

    calcularSalarioTotal() : number {
        if (this.bonus >= 0) {
            return this.salario += this.bonus
            } else {
            console.log('Sem bônus!');
            return this.salario;
        }
    }

    descricao(): string {
        return `Gerente: ${this.nome}, Salário base: R$ ${this.salario.toFixed(2)}, Bônus: R$ ${this.bonus.toFixed(2)}, Salário Total: R$${this.calcularSalarioTotal().toFixed(2)}`;
    }
}