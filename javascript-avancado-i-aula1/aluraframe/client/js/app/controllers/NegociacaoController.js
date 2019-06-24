class NegociacaoController {

    constructor() {

        //bind mantém a associação do querySelector com o document
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(...this._inputData.value
            .split('-')
            .map(function(item, indice) {
                return item - indice  % 2;
            })
        );
        console.log(data);

    }
}