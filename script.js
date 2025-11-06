var jogador ="X"

function jogar(espaco){
    if(espaco.innerHTML == ""){
        espaco.innerHTML = jogador;
            if(jogador == "X"){
                jogador = "O"
            }else{
                jogador = "X"
            }
    }
}
