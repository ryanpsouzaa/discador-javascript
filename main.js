function digitacao(tipoBotao, barraDigitar) {
    barraDigitar.value = barraDigitacao.value + tipoBotao.value;
}

const listaBotoes = document.querySelectorAll('input[type=button]');
const barraDigitacao = document.querySelector('input[type=tel]');

for(let contador = 0; contador < listaBotoes.length; contador++){

    let botao = listaBotoes[contador];

    botao.onclick = function(){
        digitacao(botao, barraDigitacao);
    }
}