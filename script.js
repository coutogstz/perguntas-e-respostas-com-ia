const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enunciado principaldescubra o esporte adequado pra  você",
        alternativas: [
            {
                texto: "você prefere jogar com a mão",
                afirmacao: "então podemos dizer que você tem uma maior afinidade com as mãos "
            },
            {
                texto: "você prefere jogar com as maõs e pés",
                afirmacao: "então podemos dizer que você tem uma maior afinidade com os pés"
            }
        ]
    },
    {
        enunciado: "Enunciado 2",
        alternativas: [
            {
                texto: " você prefere esportes individuais",
                afirmacao: "então subentendemos  que você tem maior facilidade  sozinho"
            },
            {
                texto: "você prefere esportes em equipe",
                afirmacao: "então podemos concluir que você e mais socialvel e comunicativo e gosta de coletividade"
            }
        ]
    },
    {
        enunciado: "Enunciado 3",
        alternativas: [
            {
                texto: "você gosta de esportes intelectuais",
                afirmacao: "então podemos concluir que você e uma pessoa inteligente e tem pensamentos rápidos"
            },
            {
                texto: "você gosta de esportes mais fisicos",
                afirmacao: "então concluimos que você e uma pessoa com  melhores traços e habilidades físicas"
            }
        ]
    },
    {
        enunciado: "Enunciado 4",
        alternativas: [
            {
                texto: "você prefere jogar com cartas",
                afirmacao: "os esportes mais combativeis com você são jogos de carta como pôquer,xadres ou damas"
            },
            {
                texto: "você prefere jogar com bolas",
                afirmacao: "os esportes mais combativeis com você são futebol,voleibol, basquete, futsal ou futebol americano"
            }
        ]
    },
    {
        enunciado: "Enunciado 5",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
