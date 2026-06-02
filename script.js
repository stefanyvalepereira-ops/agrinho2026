// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btn-conhecer");
    const secaoInfo = document.getElementById("info-extra");

    botao.addEventListener("click", () => {
        // Remove a classe que esconde a seção
        if (secaoInfo.classList.contains("hidden")) {
            secaoInfo.classList.remove("hidden");
            // Rola a tela suavemente até o novo conteúdo
            secaoInfo.scrollIntoView({ behavior: "smooth" });
            botao.innerText = "Mostrando Informações";
            botao.style.opacity = "0.7";
            botao.disabled = true;
        }
    });
});
