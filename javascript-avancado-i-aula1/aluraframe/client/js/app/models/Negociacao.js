class Negociacao {
 
    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //Congela o atributo impedindo de alterar

        // O _ significa uma convenção que estas propiedades só pode ser acessadas
        // pelos próprios métodos da classe e por ninguém de fora;  
    }

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}