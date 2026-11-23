
function abrirCofre() {
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (senha === "") {
        mensagem.innerHTML = "Digite uma senha!";
        mensagem.style.color = "red";
    }

    else if (Number(senha) < 1 || Number(senha) > 50) {
        mensagem.innerHTML = "Escolha um número entre 1 e 50!";
        mensagem.style.color = "red";
    }

    else if (Number(senha) === 17) {
        mensagem.innerHTML = "🔓 COFRE ABERTO! Você descobriu o segredo.";
        mensagem.style.color = "#d4af37";
    }

    else if (Number(senha) < 17) {
        mensagem.innerHTML = " A senha é MAIOR que esse número!";
        mensagem.style.color = "#ffcc66";
    }

    else {
        mensagem.innerHTML = " A senha é MENOR que esse número!";
        mensagem.style.color = "#ffcc66";
    }
}
