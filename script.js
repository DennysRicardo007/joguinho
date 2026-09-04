let ofensivo = 0;
let tatico = 0;
const perguntasRespondidas = new Set();
const respostas = [];
const clubes = [
    { nome: "Flamengo", imagem: "imagens/Flamengo.png" },
    { nome: "Real Madrid", imagem: "imagens/Real Madrid.png" },
    { nome: "Sport", imagem: "imagens/Sport.png" },
    { nome: "Arsenal", imagem: "imagens/Arsenal.png" },
    { nome: "Manchester City", imagem: "imagens/Manchester City.png" },
    { nome: "Milan", imagem: "imagens/Milan.png" },
    { nome: "Bahia", imagem: "imagens/Bahia.png" },
    { nome: "Cruzeiro", imagem: "imagens/Cruzeiro.png" },
    { nome: "Corinthians", imagem: "imagens/Corinthians.png" },
    { nome: "Bayern de Munique", imagem: "imagens/Bayern de Munique.png" }
];


function responder(tipo, pergunta, botao) {

    if (perguntasRespondidas.has(pergunta)) {
        return;
    }

    if (tipo === "ofensivo") {
        ofensivo++;
    } else {
        tatico++;
    }

    perguntasRespondidas.add(pergunta);
    respostas[pergunta - 1] = tipo === "ofensivo" ? 1 : 0;
    botao.classList.add("selecionado");

    if (perguntasRespondidas.size === 7) {

        const resultado =
            document.getElementById("resultado");
        const indiceClube = respostas.reduce(
            (total, resposta, indice) => total + resposta * (indice + 1),
            0
        ) % clubes.length;
        const clube = clubes[indiceClube];
        let explicacao;

        if (ofensivo > tatico) {
            explicacao = "Suas escolhas mostram ousadia, energia e vontade de ser protagonista.";
        } else if (tatico > ofensivo) {
            explicacao = "Suas escolhas mostram liderança, disciplina e inteligência tática.";
        } else {
            explicacao = "Suas escolhas equilibram criatividade, raça e estratégia.";
        }

        resultado.classList.add("visivel");
        resultado.innerHTML = `
            <span>Você jogaria no</span>
            <img src="${clube.imagem}" alt="Escudo do ${clube.nome}" class="logo-clube">
            <strong>${clube.nome}!</strong>
            <small>${explicacao}</small>
        `;

    }

}
