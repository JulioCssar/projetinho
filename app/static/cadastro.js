  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginButton = document.getElementById('loginbutton');

  // Função de validação do formulário de login
  function validateLoginForm(event) {
    event.preventDefault(); // Impede o envio do formulário se a validação falhar

    // Obtém os valores dos campos de input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica as credenciais de login
    if (username === "admin" && password === "senha123") {
      Swal.fire({
        title: "Login realizado com sucesso!",
        text: "Bem-vindo, " + username + "!",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        // Redirecionar para outra página após o login bem-sucedido
        window.location.href = "../pagina";

      });
    } else {
      Swal.fire({
        title: "Login inválido",
        text: "Por favor, verifique suas credenciais.",
        icon: "error",
        confirmButtonText: "OK"
      });
      // Limpar os campos de input ou executar ação para lidar com o login inválido
    }
    loginForm.reset();
  }

  loginForm.addEventListener('submit', validateLoginForm);
  signupForm.addEventListener('submit', validateSignupForm);

