let numeroSecreto = 20;
let tentativas = 1;

//essa função é pra exibir natela do html
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
    //esse codigo habilita aúdio na aplicação
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número Secreto ');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}
//chama essa função na primeira vez que lê
exibirMensagemInicial();
//Arrow function
const verificarChute = () =>{
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' :'tentativa';
        let mensagemTentativas = `Parabéns,você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        //desabilitar o botão para eriniciar o jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        //função para limpar o input
        limparCampo();
    }

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
 //função para limpar o input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''; 
}
//função para reiniciar o jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
