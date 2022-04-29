"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(nome, cpf, numCartao, limiteCeditoMax) {
        this.nome = nome;
        this.cpf = cpf;
        this.numCartao = numCartao;
        this.limiteCeditoMax = limiteCeditoMax;
        this.limiteCeditoAtual = limiteCeditoMax;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getNumCartao() {
        return this.numCartao;
    }
    setNumCartao(numCartao) {
        this.numCartao = numCartao;
    }
    getLimiteCeditoMax() {
        return this.limiteCeditoMax;
    }
    setLimiteCeditoMax(limiteCeditoMax) {
        this.limiteCeditoMax = limiteCeditoMax;
    }
    getLimiteCeditoAtual() {
        return this.limiteCeditoAtual;
    }
    debitarDoLimite(valor) {
        this.limiteCeditoAtual -= valor;
    }
}
exports.Client = Client;
