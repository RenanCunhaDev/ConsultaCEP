function consultarCEP() {
    const cep = document.getElementById("cep").value.replace("-", "");
    const resultadoDiv = document.getElementById("resultado");

    if (!cep || cep.length !== 8) {
        alert("Digite um CEP válido.");
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
                resultadoDiv.style.display = "none";
            } else {
                document.getElementById("logradouro").textContent = `Logradouro: ${data.logradouro}`;
                document.getElementById("bairro").textContent = `Bairro: ${data.bairro}`;
                document.getElementById("cidade").textContent = `Cidade: ${data.localidade}`;
                document.getElementById("estado").textContent = `Estado: ${data.uf}`;
                resultadoDiv.style.display = "block";
            }
        })
        .catch(error => {
            console.error("Erro na consulta do CEP:", error);
            alert("Erro ao consultar o CEP.");
        });
}