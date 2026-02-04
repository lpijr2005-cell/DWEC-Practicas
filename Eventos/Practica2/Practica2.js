const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const btnEnviar = document.getElementById("btnEnviar");

    let emailValido = false;
    let passwordValido = false;

    function validarEmail() {
      if (!emailInput.value.includes("@")) {
        emailError.textContent = "El email debe contener un @";
        emailValido = false;
      } else {
        emailError.textContent = "";
        emailValido = true;
      }
      validarFormulario();
    }

    function validarPassword() {
      const longitud = passwordInput.value.length;
      if (longitud < 8 || longitud > 10) {
        passwordError.textContent = "La contraseña debe tener entre 8 y 10 caracteres";
        passwordValido = false;
      } else {
        passwordError.textContent = "";
        passwordValido = true;
      }
      validarFormulario();
    }

    function validarFormulario() {
      btnEnviar.disabled = !(emailValido && passwordValido);
    }

    emailInput.addEventListener("blur", validarEmail);
    passwordInput.addEventListener("blur", validarPassword);

    emailInput.addEventListener("focus", () => {
      emailError.textContent = "";
    });

    passwordInput.addEventListener("focus", () => {
      passwordError.textContent = "";
    });

    document.getElementById("formulario").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Formulario enviado correctamente");
    });