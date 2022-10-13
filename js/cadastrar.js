$(function() {
    $("#inputTel").mask('(00) 00000-0000');
    $("#inputCPF").mask('000.000.000-00');
});

function validarCampo(){
    // Campo Nome
    let nome = document.querySelector("#inputNome");

    let msgErroNome = document.getElementById("msgErroNome");
    msgErroNome.innerHTML = "";

    if (nome.value.trim() == ""){
        msgErroNome.innerHTML = "O campo nome está vazio :(<br>";
        nome.focus();
        return false
    }
    if(nome.value.length < 3){
        msgErroNome.innerHTML = "Favor preencher o campo nome <br>";
        nome.focus();
        return false
    }

    //Campo Email

    let email = document.querySelector("#inputEmail");


    let msgErroEmail = document.getElementById("msgErroEmail");
    msgErroEmail.innerHTML = "";

    if (email.value.trim() == ""){
        msgErroEmail.innerHTML = "O campo Email está vazio :( <br>";
        email.focus();
        return false
    }
    if(!email.value.includes('@')){
        msgErroEmail.innerHTML = "Esse email não tem o @ <br>";
        email.focus();
        return false
    }
    if(!email.value.includes('.com')){
        msgErroEmail.innerHTML = "Esse email não tem .com  <br>";
        email.focus();
        return false
    }

    //Campo Telefone

    let tel = document.querySelector("#inputTel");


    let msgErroTel = document.getElementById("msgErroTel");
    msgErroTel.innerHTML = "";

    if (tel.value.trim() == ""){
        msgErroTel.innerHTML = "O campo Telefone está vazio :( <br>";
        tel.focus();
        return false
    }

    //Campo CPF

    let CPF = document.querySelector("#inputCPF");


    let msgErroCPF = document.getElementById("msgErroCPF");
    msgErroCPF.innerHTML = "";

    if (CPF.value.trim() == ""){
        msgErroCPF.style.border = '3px solid red';
        msgErroCPF.innerHTML = "O campo CPF está vazio :( <br>";
        CPF.focus();
        return false
    }
    if(CPF.value.length < 14){
        msgErroCPF.innerHTML = "Favor preencher o campo CPF <br>";
        CPF.focus();
        return false
    }

    //Campo Mensagem


    let Mensagem = document.querySelector("#inputSms");


    let msgErroSms = document.getElementById("msgErroSms");
    msgErroSms.innerHTML = "";

    if (Mensagem.value.trim() == ""){
        msgErroSms.innerHTML = "Por favor coloque uma mensagem :) <br>";
        Mensagem.focus();
        return false
    }
    if(Mensagem.value.length < 3){
        msgErroSms.innerHTML = "Favor preencher o campo nome <br>";
        Mensagem.focus();
        return false
    }
}