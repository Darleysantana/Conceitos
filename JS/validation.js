function autenticarDados(event) {
    event.preventDefault(); // Evita o redirecionamento para a página da API

    // Pega os valores dos campos de email e CPF
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;

    // Faz a requisição para a API que valida o email e CPF
    const url = "https://sua-api.com/validar-dados"; // Substitua pela URL da sua API
    const data = { email: email, cpf: cpf }; // Substitua "email" e "cpf" pelos nomes dos campos na sua API

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            // A autenticação foi bem-sucedida
            document.getElementById("email").classList.remove("erro");
            document.getElementById("cpf").classList.remove("erro");
            document.getElementById("mensagem").innerHTML = "Autenticação bem-sucedida!";
        } else {
            // A autenticação falhou
            document.getElementById("email").classList.add("erro");
            document.getElementById("cpf").classList.add("erro");
            document.getElementById("mensagem").innerHTML = "Autenticação falhou!";
        }
    })
    .catch(error => {
        console.error(error);
        document.getElementById("mensagem").innerHTML = "Erro ao autenticar dados!";
    });
}
