const formEmail = document.getElementById("form-email");

formEmail.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/enviar-email-autenticacao");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ email }));

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      alert("E-mail enviado com sucesso!");
    } else {
      console.error(xhr.responseText);
      alert("Houve um erro ao enviar o e-mail.");
    }
  };
});
