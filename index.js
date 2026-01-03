const botao = document.getElementById("clique-para-falar");

function dizerOla()
{
    botao.addEventListener("click", () => 
    {
        alert("Olá! Eu sou o Gato Falante!");
    });

}

function mudarImagem()
{
    let imagem = document.getElementById("primeira-imagem");
    imagem.src = './imagens/segundaParte.webp';
    imagem.id = 'segunda-imagem';
    imagem.alt = 'segunda imagem do gato';
}
function seApresentar()
{
    botao.addEventListener("click", () => 
    {
        let h2 = document.createElement("h2");
        let main = document.querySelector("main");

        let sonGato = new Audio("./audio/gato-38924.mp3");
        sonGato.play();

        h2.textContent = "Olá, tudo bem! Eu sou o Gato Falante!";

        main.append(h2);
        main.style.gap = "15px";
        main.style.marginTop = "30px";
        main.style.marginBottom = "70px";

        h2.style.textAlign = "end";
        h2.style.color = "black";
        h2.style.border = "2px solid black";
        h2.style.padding = "15px";
        h2.style.borderRadius = "30px";
        h2.style.borderColor = "yellow";
        h2.style.backgroundColor = "lightgray";

        botao.remove();
    });
}
seApresentar();