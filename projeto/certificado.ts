import { Participante } from './interfaces';

export class CertificadoManager {
    certificados: Participante[] = [];

    gerarCertificado(nome: string, email: string, eventoNome: string, organizadorNome: string, data: string, local: string) {
        const certificado: Participante = {
            nome: nome,
            email: email,
            evento: {
                nome: eventoNome,
                data: data,
                local: { nome: local },
                organizador: { nome: organizadorNome }
            }
        };
      
        certificados.push(certificado);
        this.atualizarCertificados();
    }

    atualizarCertificados() {
        const tbody = certificadoTabela.querySelector('tbody')!;
        tbody.innerHTML = '';
      
        certificados.forEach(certificado => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${certificado.nome}</td>
            <td>${certificado.email}</td>
            <td>${certificado.evento.nome}</td>
            <td>${certificado.evento.organizador.nome}</td>
            <td>${certificado.evento.data}</td>
            <td>${certificado.evento.local.nome}</td>
          `;
          tbody.appendChild(tr);
        });
    }
}
