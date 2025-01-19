"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoManager = void 0;
var CertificadoManager = /** @class */ (function () {
    function CertificadoManager() {
        this.certificados = [];
    }
    CertificadoManager.prototype.gerarCertificado = function (nome, email, eventoNome, organizadorNome, data, local) {
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
        this.atualizarCertificados();
    };
    CertificadoManager.prototype.atualizarCertificados = function () {
        var tbody = certificadoTabela.querySelector('tbody');
        tbody.innerHTML = '';
        certificados.forEach(function (certificado) {
            var tr = document.createElement('tr');
            tr.innerHTML = "\n            <td>".concat(certificado.nome, "</td>\n            <td>").concat(certificado.email, "</td>\n            <td>").concat(certificado.evento.nome, "</td>\n            <td>").concat(certificado.evento.organizador.nome, "</td>\n            <td>").concat(certificado.evento.data, "</td>\n            <td>").concat(certificado.evento.local.nome, "</td>\n          ");
            tbody.appendChild(tr);
        });
    };
    return CertificadoManager;
}());
exports.CertificadoManager = CertificadoManager;
