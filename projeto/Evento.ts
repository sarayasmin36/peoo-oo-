import { Evento } from './interfaces';

export class EventoManager {
    eventos: Evento[] = [];

    adicionarEvento(event: Event) {
        event.preventDefault();
      
        const nomeEvento = (document.getElementById('evento-nome') as HTMLInputElement).value;
        const organizadorNome = (document.getElementById('evento-organizador') as HTMLInputElement).value;
        const eventoData = (document.getElementById('evento-data') as HTMLInputElement).value;
        const eventoLocal = (document.getElementById('evento-local') as HTMLInputElement).value;
      
        const novoEvento: Evento = {
          nome: nomeEvento,
          data: eventoData,
          local: { nome: eventoLocal },
          organizador: { nome: organizadorNome }
        };
      
        eventos.push(novoEvento);
        this.atualizarEventos();
        this.atualizarEventosNoSelect();
    }

    atualizarEventos() {
        const tbody = eventosTabela.querySelector('tbody')!;
        tbody.innerHTML = '';
      
        eventos.forEach(evento => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${evento.nome}</td>
            <td>${evento.organizador.nome}</td>
            <td>${evento.data}</td>
            <td>${evento.local.nome}</td>
          `;
          tbody.appendChild(tr);
        });
    }

    atualizarEventosNoSelect() {
        eventoSelecionado.innerHTML = '<option value="" disabled selected>Selecione um evento:</option>';
        
        eventos.forEach(evento => {
          const option = document.createElement('option');
          option.value = evento.nome;
          option.textContent = evento.nome;
          eventoSelecionado.appendChild(option);
        });
    }
}
