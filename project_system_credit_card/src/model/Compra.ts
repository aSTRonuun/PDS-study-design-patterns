import { Parcela } from "./Parcela";

export class Compra {

    static ultimoId: number = 0;
    private parcelas : Parcela[];
    private _id: number;
    private idEstabelecimento: number;
    private cartaoCliente: string;
    private valorTotal: number;
    private dataDeRealizacao: string;
    private numParcelas: number;

    constructor(idEstabelecimento: number, cartaoCliente: string, valorTotal: number, dataDeRealizacao: string, numParcelas: number) {
        this.idEstabelecimento = idEstabelecimento;
        this.cartaoCliente = cartaoCliente;
        this.valorTotal = valorTotal;
        this.dataDeRealizacao = dataDeRealizacao;
        this.numParcelas = numParcelas;
        this._id = Compra.ultimoId++;
        this.parcelas = [];
        for(let i = 0; i < numParcelas; i++) {
            this.parcelas.push(new Parcela(this._id, this.valorTotal / numParcelas, this.dataDeRealizacao + " " + (i + 1)));
        }
    }

    public getId(): number {
        return this._id;
    }

    public setId(id: number): void {
        this._id = id;
    }

    public getIdEstabelecimento(): number {
        return this.idEstabelecimento;
    }

    public setIdEstabelecimento(idEstabelecimento: number): void {
        this.idEstabelecimento = idEstabelecimento;
    }

    public getCartaoCliente(): string {
        return this.cartaoCliente;
    }

    public setCartaoCliente(cartaoCliente: string): void {
        this.cartaoCliente = cartaoCliente;
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }

    public getDataDeRealizacao(): string {
        return this.dataDeRealizacao;
    }

    public setDataDeRealizacao(dataDeRealizacao: string): void {
        this.dataDeRealizacao = dataDeRealizacao;
    }

    public getNumParcelas(): number {
        return this.numParcelas;
    }

    public setNumParcelas(numParcelas: number): void {
        this.numParcelas = numParcelas;
    }

    public getParcelas(): Parcela[] {
        return this.parcelas;
    }
}