import { Participante, Evento } from './interfaces';

export class ParticipanteManager {
    participantes: Participante[] = [];

    inscreverParticipante(event: Event) {
        event.preventDefault();
      
        const nomeParticipante = (document.getElementById('participante-nome') as HTMLInputElement).value;
        const emailParticipante = (document.getElementById('participante-email') as HTMLInputElement).value;
        const eventoEscolhido = eventoSelecionado.value;
      
        const eventoInscrito = eventos.find(evento => evento.nome === eventoEscolhido);
      
        if (eventoInscrito) {
          const participante: Participante = {
            nome: nomeParticipante,
            email: emailParticipante,
            evento: eventoInscrito
          };
      
          participantes.push(participante);
          this.atualizarParticipantes();
        } else {
          alert('Por favor, selecione um evento válido.');
        }
    }

    atualizarParticipantes() {
        const tbody = participanteTabela.querySelector('tbody')!;
        tbody.innerHTML = '';
      
        participantes.forEach(participante => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${participante.nome}</td>
            <td>${participante.email}</td>
            <td>${participante.evento.nome}</td>
            <td><button onclick="gerarCertificado('${participante.nome}', '${participante.email}', '${participante.evento.nome}', '${participante.evento.organizador.nome}', '${participante.evento.data}', '${participante.evento.local.nome}')">Gerar Certificado</button></td>
          `;
          tbody.appendChild(tr);
        });
    }
}
