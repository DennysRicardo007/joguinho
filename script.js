let aventura = 0;
let relax = 0;

let pergunta1Respondida = false;
let pergunta2Respondida = false;


function responder(tipo, pergunta, botao) {

    if (pergunta === 1 && pergunta1Respondida === false) {

        if (tipo === "aventura") {
            aventura++;
        } else {
            relax++;
        }

        pergunta1Respondida = true;

        botao.classList.add("selecionado");
    }


    if (pergunta === 2 && pergunta2Respondida === false) {

        if (tipo === "aventura") {
            aventura++;
        } else {
            relax++;
        }

        pergunta2Respondida = true;

        botao.classList.add("selecionado");
    }


    if (pergunta1Respondida === true &&
        pergunta2Respondida === true) {

        const resultado =
            document.getElementById("resultado");

        if (aventura > relax) {

            resultado.textContent =
                "Você é um viajante aventureiro!";

        } else if (relax > aventura) {

            resultado.textContent =
                "Você é um viajante que gosta de relaxar!";

        } else {

            resultado.textContent =
                "Você gosta tanto de aventura quanto de relaxar!";

        }

    }

}
