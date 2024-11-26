export class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
    }

    descricao() : string {
        return `Funcionário: ${this.nome}, Salário: R$ ${this.salario.toFixed(2)}`;
    }
}