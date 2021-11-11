
function retangulo(altura, largura){
    this.altura = altura;
    this.largura = largura;

    var result = (altura * largura);

    this.getResult = function(){
        return(result);
    }
}

function criaObjt(altura, largura){
    var retanguloObj = new retangulo(altura, largura);

    return(retanguloObj);
}

function resultado(){
    event.preventDefault();

    var form = document.querySelector("#retanguloForm")

    var altura = form.altura.value;
    var largura = form.largura.value;

    var obj = criaObjt(altura, largura);

    var result = document.querySelector("#numResult");
    result.textContent = obj.getResult();

    form.reset();
}



