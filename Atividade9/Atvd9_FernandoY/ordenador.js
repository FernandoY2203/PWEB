
var botaoCalcular = document.querySelector("#botao-iniciarOrdena");
botaoCalcular.addEventListener("click", addOrdenado)

function addOrdenado(){
    event.preventDefault();

    var form = document.querySelector("#add-ordenado")

    var linhaResult = obtemValFormOrdena(form);

    var resultTr = montaTr(linhaResult);

    var tabela = document.querySelector("#tabela-result-ordenar");
    tabela.appendChild(resultTr);

    form.reset();
}

function obtemValFormOrdena(form){
    var linhaResult = {
        num1: form.num1Ordena.value,
        num2: form.num2Ordena.value,
        num3: form.num3Ordena.value,
        result: ordenar(form.num1Ordena.value, form.num2Ordena.value, form.num3Ordena.value)
    }

    return(linhaResult);   
}


function ordenar(num1, num2, num3){
    const numMat = [num1, num2, num3];

    numOrdenado = numMat.sort(sortfunction)

    return(numOrdenado);
}

function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }