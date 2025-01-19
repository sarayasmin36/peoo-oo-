import { Participante, Evento } from './interfaces';

export class ParticipanteManager {
    participantes: Participante[] = [];

    inscreverParticipante(nome: string, email: string, evento: Evento): void {
        const participante: Participante = { nome, email, evento };
        this.participantes.push(participante);
    }

    listarParticipantes(): Participante[] {
        return this.participantes;
    }
}
