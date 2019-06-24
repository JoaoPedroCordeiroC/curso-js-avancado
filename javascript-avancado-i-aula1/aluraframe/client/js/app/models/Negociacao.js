class Negociacao {
 
    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
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
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}