import { Funcionario } from "./Funcionario";

export class Empresa {
    nomeEmpresa: string
    private funcionarios = Funcionario[] = [];

    constructor(nomeEmpresa: string, ) {
        this.nomeEmpresa = nomeEmpresa;
    
}
    adicionarFuncionario(funcionario: Funcionario) : void {
        this.funcionarios.push(funcionario);
            console.log("Funcionario adicionado");
        

    }

    listarFuncionarios() : void {
        console.log("LISTAGEM DOS LIVROS:");
        this.funcionarios.forEach(funcionario => {
            console.log("- " + funcionario.descricao());
        });
    }

    aplicarAumento(percentual : number) {
        if (this.percentual >= 0) {
        return this.salario += this.percentual
        } else {
        console.log('Sem percentual de aumento');
        return this.salario;
    }
}
    
}