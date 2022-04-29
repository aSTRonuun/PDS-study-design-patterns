import { Esbalecimento } from "../model/Estabelecimento";

class EsbalecimentoRepository {

    private _esbalecimentos: Esbalecimento[] = [];

    public salvar(esbalecimento: Esbalecimento): void {
        this._esbalecimentos.push(esbalecimento);
    }

    public buscaPorId(id: number): Esbalecimento | null {
            
        let esbalecimento = this._esbalecimentos.find(esbalecimento => esbalecimento.getId() === id);
        if(esbalecimento) {
            return esbalecimento;
        }
        return null;
    }
}