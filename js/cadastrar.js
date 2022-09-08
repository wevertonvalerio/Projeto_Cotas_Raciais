function validarCampo(){
    let nome = document.querySelector("#InputNome");

    let msgErro = document.getElementById("msgErro");
    msgErro.innerHTML = "";

    if (nome.value.trim() == ""){
        msgErro.innerHTML = "Favor preencher o campo nome <br>";
        nome.focus();
        return false
    }
}