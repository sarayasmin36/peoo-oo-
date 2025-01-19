import { Participante } from './interfaces';

export class CertificadoManager {
    certificados: Participante[] = [];

    gerarCertificado(participante: Participante): void {
        this.certificados.push(participante);
    }

    listarCertificados(): Participante[] {
        return this.certificados;
    }
}
