"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Desenvolvedor_1 = require("./Desenvolvedor");
const devJunior = new Desenvolvedor_1.Desenvolvedor('Alice Costa', 3000, 'Junior');
console.log(`- ${devJunior.nome} # Salário atual: R$ ${devJunior.salario.toFixed(2)}`);
devJunior.promover();
const devPleno = new Desenvolvedor_1.Desenvolvedor('Bruno Souza', 5000, 'Pleno');
console.log(`- ${devPleno.nome} # Salário atual: R$ ${devPleno.salario.toFixed(2)}`);
devPleno.promover();
const devSenior = new Desenvolvedor_1.Desenvolvedor('Joana Teles', 8000, 'Senior');
console.log(`- ${devSenior.nome} # Salário atual: R$${devSenior.salario.toFixed(2)}`);
devSenior.promover();
