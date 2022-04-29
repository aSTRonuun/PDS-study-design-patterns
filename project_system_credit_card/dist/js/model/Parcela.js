"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parcela = void 0;
class Parcela {
    constructor(idCompra, valor, dataVencimento) {
        this.idCompra = idCompra;
        this.valor = valor;
        this.dataVencimento = dataVencimento;
        this._id = Parcela._ultimoId++;
    }
    getId() {
        return this._id;
    }
}
exports.Parcela = Parcela;
Parcela._ultimoId = 0;
