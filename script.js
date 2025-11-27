var jogador = "X";
var jogoAcabou = false;
var vitoriasX = 0;
var vitoriasO = 0;


const combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]           
];

function jogar(espaco) {
    if (jogoAcabou || espaco.innerHTML !== "") {
        return;
    }

    espaco.innerHTML = jogador;


    verificarVitoria();

   
    if (!jogoAcabou) {
        if (jogador == "X") {
            jogador = "O";
        } else {
            jogador = "X";
        }
      
        document.getElementById("mensagem-vez").innerText = "Vez do jogador: " + jogador;
    }
}

function verificarVitoria() {
 
    var quadrados = document.getElementsByClassName("square");

    for (var i = 0; i < combinacoesVitoria.length; i++) {
        var [a, b, c] = combinacoesVitoria[i];

   
        if (quadrados[a].innerHTML !== "" &&
            quadrados[a].innerHTML === quadrados[b].innerHTML &&
            quadrados[a].innerHTML === quadrados[c].innerHTML) {

          
            jogoAcabou = true;
            document.getElementById("mensagem-vez").innerText = "O Jogador " + jogador + " VENCEU!";

            
            quadrados[a].classList.add("vencedor");
            quadrados[b].classList.add("vencedor");
            quadrados[c].classList.add("vencedor");

           
            atualizarPlacar(jogador);
            return;
        }
    }

   
    var todosPreenchidos = true;
    for (var i = 0; i < quadrados.length; i++) {
        if (quadrados[i].innerHTML === "") {
            todosPreenchidos = false;
            break;
        }
    }

    if (todosPreenchidos && !jogoAcabou) {
        jogoAcabou = true;
        document.getElementById("mensagem-vez").innerText = "Deu Velha! (Empate)";
    }
}

function atualizarPlacar(ganhador) {
    if (ganhador === "X") {
        vitoriasX++;
        document.getElementById("scoreX").innerText = vitoriasX;
    } else {
        vitoriasO++;
        document.getElementById("scoreO").innerText = vitoriasO;
    }
}

function reiniciarJogo() {
    
    var quadrados = document.getElementsByClassName("square");
    for (var i = 0; i < quadrados.length; i++) {
        quadrados[i].innerHTML = "";
        quadrados[i].classList.remove("vencedor");
    }

 
    jogoAcabou = false;
    jogador = "X";
    document.getElementById("mensagem-vez").innerText = "Vez do jogador: X";
}