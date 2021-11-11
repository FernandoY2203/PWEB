
function conta(){
    var nome;
    var banco;
    var numConta;
    var saldo;

    this.getNome = function(){
        return nome;
    }
    this.setNome = function(value){
        nome = value;
    }

    this.getBanco = function(){
        return banco;
    }
    this.setBanco = function(value){
        banco = value;
    }

    this.getNumConta = function(){
        return numConta;
    }
    this.setNumConta = function(value){
        numConta = value;
    }

    this.getSaldo = function(){
        return saldo;
    }
    this.setSaldo = function(value){
        saldo = value;
    }
}

function corrente(){
    var saldoEspecial;

    this.getSaldoEspecial = function(){
        return saldoEspecial;
    }
    this.setSaldoEspecial = function(value){
        saldoEspecial = value;
    }
}

function poupanca(){
    var juros;

    this.getJuros = function(){
        return juros
    }
    this.setJuros = function(value){
        juros = value;
    }
}

function criaObjtCorrente(){
    corrente.prototype = new conta();

    objCorrente = new corrente();

    return(objCorrente);
}

function criaObjtPoupanca(){
    poupanca.prototype = new conta();

    objPoupanca = new poupanca();  

    return(objPoupanca);
}

function addContaCorrente(){
    event.preventDefault();

    var form = document.querySelector("#addConta")

    var obj = criaObjtCorrente();

    obj.setNome(form.nome.value);
    obj.setBanco(form.banco.value);
    obj.setNumConta(form.numConta.value);
    obj.setSaldo(form.saldo.value);
    obj.setSaldoEspecial(form.saldoEspecial.value);

    var resultTr = montaTrCorrente(obj);

    var tabela = document.querySelector("#tbCorrente")
    tabela.appendChild(resultTr);

    form.reset();
}

function montaTrCorrente(obj){
    var resultTr = document.createElement("tr");
    resultTr.classList.add("linha");

    var nomeTd = montaTd(obj.getNome(), "info-nome");
    var bancoTd = montaTd(obj.getBanco(), "info-banco");
    var numContaTd = montaTd(obj.getNumConta(), "info-numConta");
    var saldoTd = montaTd(obj.getSaldo(), "info-saldo");
    var saldoEspecialTd = montaTd(obj.getSaldoEspecial(), "info-saldoEspecial");
    

    resultTr.appendChild(nomeTd);
    resultTr.appendChild(bancoTd);
    resultTr.appendChild(numContaTd);
    resultTr.appendChild(saldoTd);
    resultTr.appendChild(saldoEspecialTd);

    return(resultTr);
}

function addContaPoupanca(){
    event.preventDefault();

    var form = document.querySelector("#addConta")

    var obj = criaObjtPoupanca();

    obj.setNome(form.nome.value);
    obj.setBanco(form.banco.value);
    obj.setNumConta(form.numConta.value);
    obj.setSaldo(form.saldo.value);
    obj.setJuros(form.juros.value);

    var resultTr = montaTrPoupanca(obj);

    var tabela = document.querySelector("#tbPoupanca")
    tabela.appendChild(resultTr);

    form.reset();
}

function montaTrPoupanca(obj){
    var resultTr = document.createElement("tr");
    resultTr.classList.add("linha");

    var nomeTd = montaTd(obj.getNome(), "info-nome");
    var bancoTd = montaTd(obj.getBanco(), "info-banco");
    var numContaTd = montaTd(obj.getNumConta(), "info-numConta");
    var saldoTd = montaTd(obj.getSaldo(), "info-saldo");
    var jurosTd = montaTd(obj.getJuros(), "info-juros");
    

    resultTr.appendChild(nomeTd);
    resultTr.appendChild(bancoTd);
    resultTr.appendChild(numContaTd);
    resultTr.appendChild(saldoTd);
    resultTr.appendChild(jurosTd);

    return(resultTr);
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return(td);
}

