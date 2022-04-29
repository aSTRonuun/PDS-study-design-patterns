export class Client {

    nome: string;
    cpf: string;
    numCartao: string;	
    limiteCeditoMax: number;
    limiteCeditoAtual: number;

    constructor(nome: string, cpf: string, numCartao: string, limiteCeditoMax: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.numCartao = numCartao;
        this.limiteCeditoMax = limiteCeditoMax;
        this.limiteCeditoAtual = limiteCeditoMax;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getNumCartao(): string {
        return this.numCartao;
    }

    public setNumCartao(numCartao: string): void {
        this.numCartao = numCartao;
    }

    public getLimiteCeditoMax(): number {
        return this.limiteCeditoMax;
    }

    public setLimiteCeditoMax(limiteCeditoMax: number): void {
        this.limiteCeditoMax = limiteCeditoMax;
    }

    public getLimiteCeditoAtual(): number {
        return this.limiteCeditoAtual;
    }

    public debitarDoLimite(valor: number): void {
        this.limiteCeditoAtual -= valor;
    }

}