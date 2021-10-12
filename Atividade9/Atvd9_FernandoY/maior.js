
var botaoCalcular = document.querySelector("#botao-iniciarMaior");
botaoCalcular.addEventListener("click", addmaior)

function addmaior(){
    event.preventDefault();

    var form = document.querySelector("#add-maior")

    var linhaResult = obtemValFormMaior(form);

    var resultTr = montaTr(linhaResult);

    var tabela = document.querySelector("#tabela-result-maior");
    tabela.appendChild(resultTr);

    form.reset();
}

function obtemValFormMaior(form){
    var linhaResult = {
        num1: form.num1Maior.value,
        num2: form.num2Maior.value,
        num3: form.num3Maior.value,
        result: verificaMaior(form.num1Maior.value, form.num2Maior.value, form.num3Maior.value)
    }

    return(linhaResult);   
}

function montaTr(linhaResult){
    var resultTr = document.createElement("tr");
    resultTr.classList.add("linha");

    var num1Td = montaTd(linhaResult.num1, "info-num1");
    var num2Td = montaTd(linhaResult.num2, "info-num2");
    var num3Td = montaTd(linhaResult.num3, "info-num3");
    var resultTd = montaTd(linhaResult.result, "info-result");
    

    resultTr.appendChild(num1Td);
    resultTr.appendChild(num2Td);
    resultTr.appendChild(num3Td);
    resultTr.appendChild(resultTd);

    return(resultTr);
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return(td);
}

function verificaMaior(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return(num1);
    }
    else if(num2 > num1 && num2 > num3){
        return(num2);
    }
    else if(num3 > num1 && num3 > num2){
        return(num3);
    }
}

