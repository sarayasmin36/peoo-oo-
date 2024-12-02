import { Funcionario } from "./Funcionario";

export class Empresa {
    nomeEmpresa: string
    private funcionarios: Funcionario[] = [];


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

    aplicarAumento(percentual: number): void {
        if (percentual > 0) {
            this.funcionarios.forEach((funcionario) => {
                funcionario._salario = funcionario.salario + (funcionario.salario * (percentual / 100));
            });
            console.log(`Aumento de ${percentual}% aplicado com sucesso.`);
        } else {
            console.log("Percentual inválido. O aumento não foi aplicado.");
        }
    }
    

}
    

