export interface Local {
    nome: string;
}

export interface Organizador {
    nome: string;
}

export interface Evento {
    nome: string;
    data: string;
    local: Local;
    organizador: Organizador;
}

export interface Participante {
    nome: string;
    email: string;
    evento: Evento;
}
