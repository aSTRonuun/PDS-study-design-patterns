export class Parcela {

    private static _ultimoId : number = 0;
    private _id : number;
    private idCompra: number;
    private valor: number;
    private dataVencimento: string;

    constructor(idCompra: number, valor: number, dataVencimento: string) {
        this.idCompra = idCompra;
        this.valor = valor;
        this.dataVencimento = dataVencimento;
        this._id = Parcela._ultimoId++;
    }

    public getId(): number {
        return this._id;
    }
    
}