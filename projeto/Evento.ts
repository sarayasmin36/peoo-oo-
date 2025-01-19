import { Evento } from './interfaces';

export class EventoManager {
    eventos: Evento[] = [];

    adicionarEvento(nome: string, data: string, local: string, organizador: string): void {
        const novoEvento: Evento = {
            nome,
            data,
            local: { nome: local },
            organizador: { nome: organizador },
        };
        this.eventos.push(novoEvento);
    }

    listarEventos(): Evento[] {
        return this.eventos;
    }
}
