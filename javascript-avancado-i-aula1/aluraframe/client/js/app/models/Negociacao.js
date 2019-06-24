class Negociacao {
 
    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        // O _ significa uma convenção que estas propiedades só pode ser acessadas
        // pelos próprios métodos da classe e por ninguém de fora;  
    }

    getVolume() {

        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}