export class Esbalecimento {

    static ultimoId: number = 0;
    private _id: number;
    private nome: string;
    private maxParcelas: number;

    constructor(nome: string, maxParcelas: number) {
        this.nome = nome;
        this.maxParcelas = maxParcelas;
        this._id = Esbalecimento.ultimoId++;
    }

    public getId(): number {
        return this._id;
    }

    public setId(id: number): void {
        this._id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getMaxParcelas(): number {
        return this.maxParcelas;
    }

    public setMaxParcelas(maxParcelas: number): void {
        this.maxParcelas = maxParcelas;
    }
}