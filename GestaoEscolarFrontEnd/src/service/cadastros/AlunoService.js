import Axios from "axios";

export class AlunoService {
    url = process.env.REACT_APP_URI_API + "/aluno/";

    listarTodos() {
        return Axios.get(this.url);
    }

    inserir(objeto) {
        return Axios.post(this.url, objeto);
    }

    alterar(objeto) {
        return Axios.put(this.url, objeto);
    }

    excluir(id) {
        return Axios.delete(this.url + id);
    }
}
