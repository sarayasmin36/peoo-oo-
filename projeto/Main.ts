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
function atualizarEventos() {
    const tbody = eventosTabela.querySelector('tbody')!;
    tbody.innerHTML = '';

    eventoManager.listarEventos().forEach(evento => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${evento.nome}</td>
            <td>${evento.organizador.nome}</td>
            <td>${evento.data}</td>
            <td>${evento.local.nome}</td>
        `;
        tbody.appendChild(tr);
    });

    atualizarEventosNoSelect();
}

// Função para atualizar eventos no `<select>`
function atualizarEventosNoSelect() {
    eventoSelecionado.innerHTML = '<option value="" disabled selected>Selecione um evento:</option>';
    eventoManager.listarEventos().forEach(evento => {
        const option = document.createElement('option');
        option.value = evento.nome;
        option.textContent = evento.nome;
        eventoSelecionado.appendChild(option);
    });
}

// Função para atualizar participantes no HTML
function atualizarParticipantes() {
    const tbody = participanteTabela.querySelector('tbody')!;
    tbody.innerHTML = '';

    participanteManager.listarParticipantes().forEach(participante => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${participante.nome}</td>
            <td>${participante.email}</td>
            <td>${participante.evento.nome}</td>
            <td>
                <button onclick="gerarCertificado('${participante.nome}')">Gerar Certificado</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para atualizar certificados no HTML
function atualizarCertificados() {
    const tbody = certificadoTabela.querySelector('tbody')!;
    tbody.innerHTML = '';

    certificadoManager.listarCertificados().forEach(certificado => {
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

// Event listeners para formulários
eventoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = (document.getElementById('evento-nome') as HTMLInputElement).value;
    const data = (document.getElementById('evento-data') as HTMLInputElement).value;
    const local = (document.getElementById('evento-local') as HTMLInputElement).value;
    const organizador = (document.getElementById('evento-organizador') as HTMLInputElement).value;

    eventoManager.adicionarEvento(nome, data, local, organizador);
    atualizarEventos();
});

participanteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = (document.getElementById('participante-nome') as HTMLInputElement).value;
    const email = (document.getElementById('participante-email') as HTMLInputElement).value;
    const eventoNome = eventoSelecionado.value;

    const evento = eventoManager.listarEventos().find(e => e.nome === eventoNome);
    if (evento) {
        participanteManager.inscreverParticipante(nome, email, evento);
        atualizarParticipantes();
    } else {
        alert('Evento não encontrado.');
    }
});

// Inicializa o sistema
atualizarEventos();
