import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Empresa } from "./Empresa";


const empresa = new Empresa("TechCorp");

// Criando funcionários
const funcionario1 = new Funcionario("Ana", 3000, "Desenvolvedora");
const funcionario2 = new Funcionario("Carlos", 4500, "Analista");
const funcionario3 = new Funcionario("Mariana", 5000, "Gerente");

// Adicionando funcionários à empresa
empresa.adicionarFuncionario(funcionario1);
empresa.adicionarFuncionario(funcionario2);
empresa.adicionarFuncionario(funcionario3);

// Listando funcionários
empresa.listarFuncionarios();
