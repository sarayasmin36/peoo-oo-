import { EventoManager } from './evento';
import { ParticipanteManager } from './participante';
import { CertificadoManager } from './certificado';

// Referências aos elementos HTML
const eventoForm = document.getElementById('evento-form') as HTMLFormElement;
const participanteForm = document.getElementById('participante-form') as HTMLFormElement;
const eventosTabela = document.getElementById('eventos-tabela') as HTMLTableElement;
const participanteTabela = document.getElementById('participante-tabela') as HTMLTableElement;
const eventoSelecionado = document.getElementById('evento-selecionado') as HTMLSelectElement;
const certificadoTabela = document.getElementById('certificado-tabela') as HTMLTableElement;

// Instâncias dos managers
const eventoManager = new EventoManager();
const participanteManager = new ParticipanteManager();
const certificadoManager = new CertificadoManager();

// Função para atualizar eventos no HTML
// Adicionando os event listeners para os formulários
eventoForm.addEventListener('submit', adicionarEvento);
participanteForm.addEventListener('submit', inscreverParticipante);

// Inicializando a lista de eventos no select
eventoManager.atualizarEventosNoSelect();
