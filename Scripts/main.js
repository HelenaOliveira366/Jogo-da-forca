const teclas = document.querySelectorAll('.tecla');
let palavra = document.querySelector('#insercao-letras p');

const sessaoApresentacao = document.querySelector('#apresentacao');
const botaoComecar = document.querySelector('.botaoComecar');
const sessaoCapturaPalavra = document.querySelector('#capturaPalavra');
const botaoAdivinhar = document.querySelector('.botaoAdivinhar');
const sessaoAdivinhacao = document.querySelector('#adivinhacao');

botaoComecar.addEventListener('click', function(){
    sessaoApresentacao.classList.add('hidden');
    sessaoCapturaPalavra.classList.remove('hidden')
});

botaoAdivinhar.addEventListener('click', function(){
    sessaoCapturaPalavra.classList.add('hidden');
    sessaoAdivinhacao.classList.remove('hidden');
});

teclas.forEach(function(tecla){
    tecla.addEventListener('click', function(){
        let valorTecla = tecla.value;
        palavra.innerHTML = valorTecla;
    });
});