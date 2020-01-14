var campoData = document.querySelector("#data");
var campoQuantidade = document.querySelector("#quantidade");
var campoValor = document.querySelector("#valor");

var campos = [campoData, campoQuantidade, campoValor];
var tabela = document.querySelector("table tbody");

console.log(campos);

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();
    var tr = document.createElement("tr");

    campos.forEach(function(campo) {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    colunaVolume = document.createElement("td");
    colunaVolume.textContent = campoQuantidade.value * campoValor.value;
    tr.appendChild(colunaVolume);

    tabela.appendChild(tr);

    campoData.value = "";
    campoQuantidade = 1;
    campoValor = 0;

    campoData.focus();
});