import { EventoClass } from './Evento';

export class ParticipanteClass {
  nome: string;
  email: string;
  evento: EventoClass;

  constructor(nome: string, email: string, evento: EventoClass) {
    this.nome = nome;
    this.email = email;
    this.evento = evento;
  }
}
