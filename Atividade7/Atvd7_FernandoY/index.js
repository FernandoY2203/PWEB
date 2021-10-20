
var contPlayer = 0;
var contCPU = 0;

function addJogo(escolha){
    event.preventDefault();

    var escolhaCPU = cpu();

    var resultTr = montaTr(escolha, escolhaCPU);

    contador(ganhador(escolha, escolhaCPU));

    var tabela = document.querySelector("#historico");
    tabela.appendChild(resultTr);

    var pontos = document.querySelector("#pontos");
    pontos.querySelector(".pontos-player").textContent = contPlayer;
    pontos.querySelector(".pontos-cpu").textContent = contCPU;
}

function montaTr(escolhaPlayer, escolhaCPU){
    var resultTr = document.createElement("tr");
    resultTr.classList.add("linha");

    var escolhaPlayerTd = montaTd(escolhaPlayer, "info-escolhaPlayer");
    var escolhaCPUTd = montaTd(escolhaCPU, "info-escolhaCPU");
    var resultTd = montaTd(ganhador(escolhaPlayer, escolhaCPU), "info-result");
    

    resultTr.appendChild(escolhaPlayerTd);
    resultTr.appendChild(escolhaCPUTd);
    resultTr.appendChild(resultTd);

    return(resultTr);
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return(td);
}

function cpu(){
    var numCPU = Math.random();

    if((numCPU > 0 && numCPU <= 0.165) || (numCPU > 0.495 && numCPU <= 0.66)){
        return("Tesoura");
    }
    else if((numCPU > 0.165 && numCPU <= 0.33) || (numCPU > 0.66 && numCPU <= 0.825)){
        return("Pedra");
    }
    else if((numCPU > 0.33 && numCPU <= 0.495) || (numCPU > 0.825 && numCPU <= 0.99)){
        return("Papel");
    }
}

function ganhador(escolhaPlayer, escolhaCPU){
    if((escolhaPlayer == "Pedra" && escolhaCPU == "Pedra") || (escolhaPlayer == "Papel" && escolhaCPU == "Papel") || (escolhaPlayer == "Tesoura" && escolhaCPU == "Tesoura")){
        return("Empate");
    }
    else if((escolhaPlayer == "Pedra" && escolhaCPU == "Tesoura") || (escolhaPlayer == "Tesoura" && escolhaCPU == "Papel") || (escolhaPlayer == "Papel" && escolhaCPU == "Pedra")){
        return("Player Win")
    }
    else if((escolhaCPU == "Pedra" && escolhaPlayer == "Tesoura") || (escolhaCPU == "Tesoura" && escolhaPlayer == "Papel") || (escolhaCPU == "Papel" && escolhaPlayer == "Pedra")){
        return("CPU Win");
    }
}

function contador(ganhador){
    if(ganhador == "Player Win"){
        contPlayer++;
    }
    else if(ganhador == "CPU Win"){
        contCPU++;
    }
}