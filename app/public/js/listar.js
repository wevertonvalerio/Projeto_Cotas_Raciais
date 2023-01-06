function confirmarExclusao(codigo){
    if (confirm("Você realmente deseja excluir o registro?")){
        window.location.href = "/excluir/"+codigo;
    }
}
