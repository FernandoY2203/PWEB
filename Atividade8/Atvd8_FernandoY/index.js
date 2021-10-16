var tam = 45;
var idade = [];
var sexo = [];
var opiniao = [];

for(var cont = 0; cont < tam; cont++){
    idade[cont] = parseFloat(prompt("Digite a Idade da Pessoa"));
    sexo[cont] = prompt("Digite o Sexo da Pessoa, F para Feminino e M para Masculino");
    opiniao[cont] = prompt("Digite o Numero Referente a Opiniao da Pessoa, 1 - Pessimo / 2 - Regular / 3 - Bom / 4 - Otimo");
}


function mediaIdade(idade){
    var aux = 0;

    for(var cont = 0; cont < tam; cont++){ 
        aux += idade[cont];
    }

    return(aux/tam);
}

function maisVelha(idade){
    var aux = 0;

    for(var cont = 0; cont < tam; cont++){
        if(idade[cont] > aux){
            aux = idade[cont];
        }
    }

    return(aux);
}

function maisNova(idade){
    var aux = 1000;

    for(var cont = 0; cont < tam; cont++){
        if(idade[cont] < aux){
            aux = idade[cont];
        }
    }

    if(aux == 1000){
        return("Sem Informaçao")
    }
    else{
        return(aux);
    }
}

function qtdPessimo(opiniao){
    var aux = 0;

    for(var cont = 0; cont < tam; cont++){
        if(opiniao[cont] == 1){
            aux++;
        }
    }

    return(aux);
}

function prcOtimoBom(opiniao){
    var aux = 0;
    
    for(var cont = 0; cont < tam; cont++){
        if(opiniao[cont] == 4 || opiniao[cont] == 3){
            aux++;
        }
    }

    var porcentagem = (100 * aux) / tam;

    return(porcentagem);
}

function numMulher(sexo){
    var mulher = 0;

    for(var cont = 0; cont < tam; cont++){
        if(sexo[cont] == "f" || sexo[cont] == "F"){
            mulher++;
        }
    }

    return(mulher);
}

function numHomem(sexo){
    var homem = 0;

    for(var cont = 0; cont < tam; cont++){
        if(sexo[cont] == "m" || sexo[cont] == "M"){
            homem++;
        }
    }

    return(homem);
}


document.write('<p class="documentW">Media das Idades: ' + mediaIdade(idade) + '</p>');
document.write('<p class="documentW">Idade da Pessoa Mais Velha: ' + maisVelha(idade) + '</p>');
document.write('<p class="documentW">Idade da Pessoa Mais Nova: ' + maisNova(idade) + '</p>');
document.write('<p class="documentW">Qtd de Pessoas que Responderam Pessimo: ' + qtdPessimo(opiniao) + '</p>');
document.write('<p class="documentW">Porcentagens de Pessoas que Responderam Otimo ou Bom: ' + prcOtimoBom(opiniao) + '%</p>');
document.write('<p class="documentW">Numero de Mulheres: ' + numMulher(sexo) + '</p>');
document.write('<p class="documentW">Numero de Homens: ' + numHomem(sexo) + '</p>');
