import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Empresa } from "./Empresa";


const funcionario1 = new Funcionario('Ana Rosa', 3000, 'ajudante');
const funcionario2 = new Funcionario('Ana', 3030, 'ajudante da ajudante');
const funcionario3 = new Funcionario('Rosa', 3500, 'ajudante que ajuda');
const gerente1 = new Gerente('Julia', 5000, 'Gerente', 10);
const gerente2 = new Gerente('Santana', 5500, 'Gerente', 10);

let vetor2 : Gerente[] = [gerente1, gerente2];
let empresa = new Empresa(vetor2);

empresa.listarFuncionarios();