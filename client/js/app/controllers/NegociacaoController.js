class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._listaNegociacoes = new ListaNegociacoes();
        this._negoaciacoesView = new NegociacoesView($("#negociacoesView"));
        this._negoaciacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }
     
    adiciona(event) {
        event.preventDefault();
    
        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);
        this._negoaciacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._mensagemView.update(this._mensagem);
        
        this._reiniciaFormulario();
    }

    _criaNegociacao() {
        let data = DataHelper.textoParaData(this._inputData.value);
        let quantidade = this._inputQuantidade.value;
        let valor = this._inputValor.value;
        return new Negociacao(data, quantidade, valor);
    }

    _reiniciaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}