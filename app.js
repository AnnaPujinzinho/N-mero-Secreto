let listaSorte = [];
let limite = 10;
let numeroSecreto = numeroRandom();
let tentativas = 1;

function exibirText (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial() {
    exibirText('h1', 'Jogo da Anna');
    exibirText('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirText('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirText('p', mTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirText('p', 'O número é menor');
        }else {
            exibirText('p', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function numeroRandom() {
   let numeroEscolhido = parseInt(Math.random() * limite + 1);
   let quantidadeNumeros = listaSorte.length;

    if(quantidadeNumeros == limite){
        listaSorte = [];
    }

   if(listaSorte.includes(numeroEscolhido)) {
    return numeroRandom();
   }else {
    listaSorte.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroRandom();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}