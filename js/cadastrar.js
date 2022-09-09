function validarCampo(){
    // Campo Nome
    let nome = document.querySelector("#inputNome");

    let msgErroNome = document.getElementById("msgErroNome");
    msgErroNome.innerHTML = "";

    if (nome.value.trim() == ""){
        msgErroNome.innerHTML = "Favor preencher o campo nome <br>";
        nome.focus();
        return false
    }
    if(nome.value.length < 3){
        msgErroNome.innerHTML = "Favor preencher o campo nome <br>";
        nome.focus();
        return false
    }

    //Campo Email -> ele esta pegando as validações de ponto do html padrão

    let email = document.querySelector("#inputEmail");


    let msgErroEmail = document.getElementById("msgErroEmail");
    msgErroEmail.innerHTML = "";

    if (email.value.trim() == ""){
        msgErroEmail.innerHTML = "Favor preencher o campo Email <br>";
        email.focus();
        return false
    }

    //Campo Telefone

    let tel = document.querySelector("#inputTel");


    let msgErroTel = document.getElementById("msgErroTel");
    msgErroTel.innerHTML = "";

    if (tel.value.trim() == ""){
        msgErroTel.innerHTML = "Favor preencher o campo Telefone <br>";
        tel.focus();
        return false
    }

    //Campo CPF

    let CPF = document.querySelector("#inputCPF");


    let msgErroCPF = document.getElementById("msgErroCPF");
    msgErroCPF.innerHTML = "";

    if (CPF.value.trim() == ""){
        msgErroCPF.innerHTML = "Favor preencher o campo CPF <br>";
        CPF.focus();
        return false
    }
    if(CPF.value.length < 11){
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