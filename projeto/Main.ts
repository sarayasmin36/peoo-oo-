// main.ts
import { Evento } from './Evento';
import { Local } from './Local';
import { Organizador } from './Organizador';
import { Participante } from './PArticipante';

// Referências aos elementos HTML
const eventoForm = document.getElementById('evento-form') as HTMLFormElement;
const participanteForm = document.getElementById('participante-form') as HTMLFormElement;
const eventosTabela = document.getElementById('eventos-tabela') as HTMLTableElement;
const participanteTabela = document.getElementById('participante-tabela') as HTMLTableElement;
const eventoSelecionado = document.getElementById('evento-selecionado') as HTMLSelectElement;

let eventos: Evento[] = [];
let participantes: Participante[] = [];

// Função para adicionar um novo evento
function adicionarEvento(event: Event) {
  event.preventDefault();

  const nomeEvento = (document.getElementById('evento-nome') as HTMLInputElement).value;
  const organizadorNome = (document.getElementById('evento-organizador') as HTMLInputElement).value;
  const eventoData = (document.getElementById('evento-data') as HTMLInputElement).value;
  const eventoLocal = (document.getElementById('evento-local') as HTMLInputElement).value;

  const novoEvento = new Evento(
    nomeEvento,
    eventoData,
    new Local(eventoLocal),
    new Organizador(organizadorNome)
  );

  eventos.push(novoEvento);
  atualizarEventos();
  atualizarEventosNoSelect();
}

// Função para exibir os eventos na tabela
function atualizarEventos() {
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

// Função para atualizar a lista de eventos no select (para inscrição de participantes)
function atualizarEventosNoSelect() {
  eventoSelecionado.innerHTML = '<option value="" disabled selected>Selecione um evento:</option>';

  eventos.forEach(evento => {
    const option = document.createElement('option');
    option.value = evento.nome;
    option.textContent = evento.nome;
    eventoSelecionado.appendChild(option);
  });
}

// Função para inscrever um participante
function inscreverParticipante(event: Event) {
  event.preventDefault();

  const nomeParticipante = (document.getElementById('participante-nome') as HTMLInputElement).value;
  const emailParticipante = (document.getElementById('participante-email') as HTMLInputElement).value;
  const eventoEscolhido = eventoSelecionado.value;

  const eventoInscrito = eventos.find(evento => evento.nome === eventoEscolhido);

  if (eventoInscrito) {
    const participante = new Participante(nomeParticipante, emailParticipante, eventoInscrito);
    participantes.push(participante);
    atualizarParticipantes();
  } else {
    alert('Por favor, selecione um evento válido.');
  }
}

// Função para exibir os participantes cadastrados
function atualizarParticipantes() {
  const tbody = participanteTabela.querySelector('tbody')!;
  tbody.innerHTML = '';

  participantes.forEach(participante => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${participante.nome}</td>
      <td>${participante.email}</td>
      <td>${participante.evento.nome}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Adicionando os event listeners para os formulários
eventoForm.addEventListener('submit', adicionarEvento);
participanteForm.addEventListener('submit', inscreverParticipante);

// Inicializando a lista de eventos no select
atualizarEventosNoSelect();
