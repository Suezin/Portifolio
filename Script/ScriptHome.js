const textos = [
    "Desenvolvedor Front-end",
    "Desenvolvedor Back-end"
];

const span = document.querySelector(".escrita");

let textnum = 0;
let letranum = 0;
let estaDeletando = false;

function efeitoEscrita() {
    const textoAtual = textos[textnum];

    if (!estaDeletando) {
        span.textContent = textoAtual.substring(0, letranum + 1);
        letranum++;

        if (letranum === textoAtual.length) {
            setTimeout(() => estaDeletando = true, 1500);
        }

    } else {
        span.textContent = textoAtual.substring(0, letranum - 1);
        letranum--;

        if (letranum === 0) {
            estaDeletando = false;
            textnum = (textnum + 1) % textos.length;
        }
    }

    setTimeout(efeitoEscrita, estaDeletando ? 60 : 100);
}

efeitoEscrita();


