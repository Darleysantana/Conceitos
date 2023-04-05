
function consultarAPI(event) {
    event.preventDefault(); // Evita o redirecionamento para a página da API

    const url = "https://sheetdb.io/api/v1/794ia1vlpykqo";

    fetch(url, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        document.getElementById("mensagem").innerHTML = "Sucesso!";
    })
    .catch(error => {
        console.error(error);
        document.getElementById("mensagem").innerHTML = "Houve um erro entre em contato conosco!";
    });
}
document.getElementById("meuBotao").addEventListener("click", consultarAPI);