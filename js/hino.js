const botao = document.getElementById('botaoPlay');
const audio = document.getElementById('meuAudio');
const disco = document.getElementById('img-disco');
const icone = document.getElementById('play-icon');

botao.addEventListener('click', function () {

    if (audio.paused) {
        audio.play();
        disco.classList.add('girando');

        icone.classList.remove('fa-play');
        icone.classList.add('fa-pause');

    } else {
        audio.pause();
        disco.classList.remove('girando');

        icone.classList.remove('fa-pause');
        icone.classList.add('fa-play');
    }

});