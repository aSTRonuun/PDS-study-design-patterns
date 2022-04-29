import { Client } from "../model/Client";

export class ClienteRepository {

    private _clientes: Client[] = [];

    public salvar(cliente: Client): void {
        this._clientes.push(cliente);
    }

    public buscaPorCpf(cpf: string): Client | null {

        let client = this._clientes.find(cliente => cliente.cpf === cpf);
        if(client) {
            return client;
        }
        return null;
    }

    public buscaPorCartao(cartao: string): Client | null {
        let client = this._clientes.find(cliente => cliente.numCartao === cartao);
        if(client) {
            return client;
        }
        return null;
    }
}