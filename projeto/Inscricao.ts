import { Participante } from './PArticipante';
import { Evento } from './Evento';

export class Inscricao {
  participante: Participante;
  evento: Evento;

  constructor(participante: Participante, evento: Evento) {
    this.participante = participante;
    this.evento = evento;
  }
}
