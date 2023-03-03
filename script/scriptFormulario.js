//Função para o botão

function guardaFormulario(){

    var formsCliente = new Object();


    formsCliente.nome = document.getElementById("nome").value;
    formsCliente.sobrenome = document.getElementById("sobrenome").value;
    formsCliente.cpf = document.getElementById("cpf").value;
    formsCliente.profissao = document.getElementById("profissao").value;
    formsCliente.tipo = document.getElementById("tipo").value;
    formsCliente.cor = document.getElementById("cor").value;
    formsCliente.data = document.getElementById("data").value;
    formsCliente.decoracao = document.getElementById("decoracao").value;
   
   


// Converter para String Json


var jsonForm = JSON.stringify(formsCliente);


//Exibir

console.log(formsCliente.valueOf());

document.getElementById("nome2").innerHTML = "Nome: " + formsCliente.nome;
document.getElementById("sobrenome2").innerHTML = "Sobrenome: "  + formsCliente.sobrenome;
document.getElementById("cpf2").innerHTML = "CPF: " + formsCliente.cpf;
document.getElementById("profissao2").innerHTML = "Profissão: " + formsCliente.profissao;
document.getElementById("tipo2").innerHTML = "Flores preferidas: " + formsCliente.tipo;
document.getElementById("cor2").innerHTML = "Cor preferida: " + formsCliente.cor;
document.getElementById("data2").innerHTML = "Data especial: " + formsCliente.data;
document.getElementById("decoracao2").innerHTML = "Decoração: " + formsCliente.decoracao;


 window.print();

// document.getElementById("nome2").innerHTML = formsCliente.nome;

}