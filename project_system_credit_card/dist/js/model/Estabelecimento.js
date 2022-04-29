"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Esbalecimento = void 0;
class Esbalecimento {
    constructor(nome, maxParcelas) {
        this.nome = nome;
        this.maxParcelas = maxParcelas;
        this._id = Esbalecimento.ultimoId++;
    }
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMaxParcelas() {
        return this.maxParcelas;
    }
    setMaxParcelas(maxParcelas) {
        this.maxParcelas = maxParcelas;
    }
}
exports.Esbalecimento = Esbalecimento;
Esbalecimento.ultimoId = 0;
