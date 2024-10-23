function validadeForm(){
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let errorMessage= document.getElementById("errorMessage").value;
}
if(name === "") {
    errorMessage.textContent = "O campo de nome é obrigatório." 
    return false;
}




if(password.length <6) {
    errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres."
    return false;
}
errorMessage.textContent= "";
alert("Cadastro realizado com sucesso!");
return true;
}