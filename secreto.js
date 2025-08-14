function obterNomeUsuario() {
    let nome = prompt("Digite seu nome:").trim();
    if (nome.length > 0) {
        document.getElementById("mensagemBoasVindas").innerText = `Bem-vindo, ${nome}!`;
    } else {
        document.getElementById("mensagemBoasVindas").innerText = "Bem-vindo, Visitante!";
    }
}