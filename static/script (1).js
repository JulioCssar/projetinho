const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const sobrenomeInput = document.querySelector("#sobrenome")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //verifica se o nome está vazio
  if(nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }

  //verifica se o sobrenome está vazio
  if(sobrenomeInput.value === "") {
    alert("Por favor, preencha o seu sobrenome");
    return;
  }

  //Verifica se o e-mail está preenchido e está válido
  if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu e-mail");
    return;
  }


  //Verifica se a senha está preenchida
  if(!validatePassword(passwordInput.value, 8)){
    alert("A senha precisa ser no mínimo 8 dígitos");
    return;
  }


  //se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();
});

//Função que valida e-mail
function isEmailValid(email) {
     //cria uma regex para validar email
     const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
     );

     if(emailRegex.test(email)) {
        return true;
     }

     return false;
    }

     //Função que valida senha
     function validatePassword(password, minDigits) {
        if(password.length >= minDigits){
        //Senha valida
        return true
     }

     //Senha inválida
     return false

}