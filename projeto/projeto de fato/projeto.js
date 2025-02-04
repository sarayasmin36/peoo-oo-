var eventos = [];
var participantes = [];
var certificados = []; // Lista para armazenar os certificados gerados
// Referências aos elementos HTML
var eventoForm = document.getElementById('evento-form');
var participanteForm = document.getElementById('participante-form');
var eventosTabela = document.getElementById('eventos-tabela');
var participanteTabela = document.getElementById('participante-tabela');
var eventoSelecionado = document.getElementById('evento-selecionado');
var certificadoTabela = document.getElementById('certificado-tabela');
// Função para adicionar um novo evento
function adicionarEvento(event) {
    event.preventDefault();
    var nomeEvento = document.getElementById('evento-nome').value;
    var organizadorNome = document.getElementById('evento-organizador').value;
    var eventoData = document.getElementById('evento-data').value;
    var eventoLocal = document.getElementById('evento-local').value;
    var novoEvento = {
        nome: nomeEvento,
        data: eventoData,
        local: { nome: eventoLocal },
        organizador: { nome: organizadorNome }
    };
    eventos.push(novoEvento);
    atualizarEventos();
    atualizarEventosNoSelect();
}
// Função para exibir os eventos na tabela
function atualizarEventos() {
    var tbody = eventosTabela.querySelector('tbody');
    tbody.innerHTML = '';
    eventos.forEach(function (evento) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(evento.nome, "</td>\n        <td>").concat(evento.organizador.nome, "</td>\n        <td>").concat(evento.data, "</td>\n        <td>").concat(evento.local.nome, "</td>\n      ");
        tbody.appendChild(tr);
    });
}
// Função para atualizar a lista de eventos no select (para inscrição de participantes)
function atualizarEventosNoSelect() {
    eventoSelecionado.innerHTML = '<option value="" disabled selected>Selecione um evento:</option>';
    eventos.forEach(function (evento) {
        var option = document.createElement('option');
        option.value = evento.nome;
        option.textContent = evento.nome;
        eventoSelecionado.appendChild(option);
    });
}
// Função para inscrever um participante
function inscreverParticipante(event) {
    event.preventDefault();
    var nomeParticipante = document.getElementById('participante-nome').value;
    var emailParticipante = document.getElementById('participante-email').value;
    var eventoEscolhido = eventoSelecionado.value;
    var eventoInscrito = eventos.find(function (evento) { return evento.nome === eventoEscolhido; });
    if (eventoInscrito) {
        var participante = {
            nome: nomeParticipante,
            email: emailParticipante,
            evento: eventoInscrito
        };
        participantes.push(participante);
        atualizarParticipantes();
    }
    else {
        alert('Por favor, selecione um evento válido.');
    }
}
// Função para exibir os participantes cadastrados
function atualizarParticipantes() {
    var tbody = participanteTabela.querySelector('tbody');
    tbody.innerHTML = '';
    participantes.forEach(function (participante) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(participante.nome, "</td>\n        <td>").concat(participante.email, "</td>\n        <td>").concat(participante.evento.nome, "</td>\n        <td><button onclick=\"gerarCertificado('").concat(participante.nome, "', '").concat(participante.email, "', '").concat(participante.evento.nome, "', '").concat(participante.evento.organizador.nome, "', '").concat(participante.evento.data, "', '").concat(participante.evento.local.nome, "')\">Gerar Certificado</button></td>\n      ");
        tbody.appendChild(tr);
    });
}
// Função para gerar o certificado
function gerarCertificado(nome, email, eventoNome, organizadorNome, data, local) {
    var certificado = {
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
    atualizarCertificados();
}
// Função para exibir os certificados
function atualizarCertificados() {
    var tbody = certificadoTabela.querySelector('tbody');
    tbody.innerHTML = '';
    certificados.forEach(function (certificado) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(certificado.nome, "</td>\n        <td>").concat(certificado.email, "</td>\n        <td>").concat(certificado.evento.nome, "</td>\n        <td>").concat(certificado.evento.organizador.nome, "</td>\n        <td>").concat(certificado.evento.data, "</td>\n        <td>").concat(certificado.evento.local.nome, "</td>\n      ");
        tbody.appendChild(tr);
    });
}
// Adicionando os event listeners para os formulários
eventoForm.addEventListener('submit', adicionarEvento);
participanteForm.addEventListener('submit', inscreverParticipante);
// Inicializando a lista de eventos no select
atualizarEventosNoSelect();
