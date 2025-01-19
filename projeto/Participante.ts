// Participante.ts
import { Evento } from './Evento';

export class Participante {
  nome: string;
  email: string;
  evento: Evento;

  constructor(nome: string, email: string, evento: Evento) {
    this.nome = nome;
    this.email = email;
    this.evento = evento;
  }
}
