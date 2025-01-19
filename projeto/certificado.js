"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificadoManager = void 0;
var CertificadoManager = /** @class */ (function () {
    function CertificadoManager() {
        this.certificados = [];
    }
    CertificadoManager.prototype.gerarCertificado = function (participante) {
        this.certificados.push(participante);
    };
    CertificadoManager.prototype.listarCertificados = function () {
        return this.certificados;
    };
    return CertificadoManager;
}());
exports.CertificadoManager = CertificadoManager;
