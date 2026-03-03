const itensTimeline = document.querySelectorAll(".timeline li");

function elementoEstaVisivel(elemento) {
    const posicao = elemento.getBoundingClientRect();
    return (
        posicao.top >= 0 &&
        posicao.bottom <= window.innerHeight
    );
}

function ativarAnimacao() {
    for (let i = 0; i < itensTimeline.length; i++) {
        if (elementoEstaVisivel(itensTimeline[i])) {
            itensTimeline[i].classList.add("in-view");
        }
    }
}

window.addEventListener("load", ativarAnimacao);
window.addEventListener("scroll", ativarAnimacao);
window.addEventListener("resize", ativarAnimacao);