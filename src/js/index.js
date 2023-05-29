// aspas dupla: ""


const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");

        if(modoEscuroEstaAtivo){
            imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png");
        } else{
            imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");
        }
});








