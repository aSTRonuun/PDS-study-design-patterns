"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
const Parcela_1 = require("./Parcela");
class Compra {
    constructor(idEstabelecimento, cartaoCliente, valorTotal, dataDeRealizacao, numParcelas) {
        this.idEstabelecimento = idEstabelecimento;
        this.cartaoCliente = cartaoCliente;
        this.valorTotal = valorTotal;
        this.dataDeRealizacao = dataDeRealizacao;
        this.numParcelas = numParcelas;
        this._id = Compra.ultimoId++;
        this.parcelas = [];
        for (let i = 0; i < numParcelas; i++) {
            this.parcelas.push(new Parcela_1.Parcela(this._id, this.valorTotal / numParcelas, this.dataDeRealizacao + " " + (i + 1)));
        }
    }
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
    }
    getIdEstabelecimento() {
        return this.idEstabelecimento;
    }
    setIdEstabelecimento(idEstabelecimento) {
        this.idEstabelecimento = idEstabelecimento;
    }
    getCartaoCliente() {
        return this.cartaoCliente;
    }
    setCartaoCliente(cartaoCliente) {
        this.cartaoCliente = cartaoCliente;
    }
    getValorTotal() {
        return this.valorTotal;
    }
    setValorTotal(valorTotal) {
        this.valorTotal = valorTotal;
    }
    getDataDeRealizacao() {
        return this.dataDeRealizacao;
    }
    setDataDeRealizacao(dataDeRealizacao) {
        this.dataDeRealizacao = dataDeRealizacao;
    }
    getNumParcelas() {
        return this.numParcelas;
    }
    setNumParcelas(numParcelas) {
        this.numParcelas = numParcelas;
    }
    getParcelas() {
        return this.parcelas;
    }
}
exports.Compra = Compra;
Compra.ultimoId = 0;
