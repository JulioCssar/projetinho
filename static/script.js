const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const sobrenomeInput = document.querySelector("#sobrenome");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //verifica se o nome está vazio
  if (nameInput.value === "") {
    showError("Por favor, preencha o seu nome");
    return;
  }

  //verifica se o sobrenome está vazio
  if (sobrenomeInput.value === "") {
    showError("Por favor, preencha o seu sobrenome");
    return;
  }

  //Verifica se o e-mail está preenchido e está válido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    showError("Por favor, preencha o seu e-mail");
    return;
  }

  //Verifica se a senha está preenchida
  if (!validatePassword(passwordInput.value, 8)) {
    showError("A senha precisa ter pelo menos 8 dígitos");
    return;
  }

  //Pop-up de sucesso
  showSuccess();
});

//Função que valida e-mail
function isEmailValid(email) {
  //cria uma regex para validar email
  const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

//Função que valida senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    //Senha valida
    return true;
  }

  //Senha inválida
  return false;
}

// Mensagem de erro usando SweetAlert2
function showError(message) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  });
}

// Pop-up de sucesso usando SweetAlert2
function showSuccess() {
  Swal.fire({
    icon: 'success',
    title: 'Cadastro realizado!',
    text: 'Seu cadastro foi realizado com sucesso.',
  });
}
