import { perguntas } from "./perguntas.js";

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

const perguntaElemento = document.getElementById("pergunta");
const respostasElemento = document.getElementById("respostas");
const resultado = document.getElementById("resultado");
const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const barra = document.getElementById("barraProgresso");
const contador = document.getElementById("contador");
const btnReiniciar = document.getElementById("btnReiniciar");

function carregarPergunta() {
    respondeu = false;

    const pergunta = perguntas[perguntaAtual];
    perguntaElemento.textContent = pergunta.pergunta;
    respostasElemento.innerHTML = "";

    contador.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    barra.style.width =
        ((perguntaAtual) / perguntas.length) * 100 + "%";

    pergunta.respostas.forEach((resposta, index) => {
        const botao = document.createElement("button");
        botao.textContent = resposta;
        botao.onclick = () => verificarResposta(index, botao);
        respostasElemento.appendChild(botao);
    });
}

function verificarResposta(index, botaoClicado) {

    if (respondeu) return;
    respondeu = true;

    const botoes = respostasElemento.querySelectorAll("button");
    const corretaIndex = perguntas[perguntaAtual].correta;

    botoes.forEach((botao, i) => {
        if (i === corretaIndex) {
            botao.classList.add("correta");
        } else if (i === index) {
            botao.classList.add("errada");
        }
        botao.disabled = true;
    });

    if (index === corretaIndex) {
        pontuacao++;
    }

    setTimeout(() => {
        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
        }
    }, 1000);
}

function mostrarResultado() {
    document.getElementById("quiz").classList.add("hidden");
    resultado.classList.remove("hidden");
    barra.style.width = "100%";

    pontuacaoFinal.textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    resultado.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    barra.style.width = "0%";
    carregarPergunta();
}

btnReiniciar.addEventListener("click", reiniciarQuiz);

carregarPergunta();