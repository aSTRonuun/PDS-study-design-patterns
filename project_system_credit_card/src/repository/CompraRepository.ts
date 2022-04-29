import { Compra } from "../model/Compra";
import { Parcela } from "../model/Parcela";

export class CompraRepository {
    private _compras: Compra[] = [];
    private _parcelas: Parcela[] = [];

    public salvar(compra: Compra): void {
        this._compras.push(compra);
        for (let parcela of compra.getParcelas()) {
            this._parcelas.push(parcela);
        }
    }

    public buscaPorComprasEntreDatas(cartao: string, data1: string, data2: string): Parcela[] {
        let parcelaCartao: Parcela[] = [];
    }
}