document.getElementById("botaoenviar").addEventListener("click",validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome-da-usuaria").value != "" && 
        document.getElementById("email-usuaria").value !="" && 
        document.getElementById("telefone").value != ""){
        alert("Prontinho! você reberá as novidades por email.") 
    } else {
        alert("Por favor, preencha os campos de nome e email!")
    }
}

