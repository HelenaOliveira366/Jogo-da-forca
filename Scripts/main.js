const teclas = document.querySelectorAll('.tecla');
let palavra = document.querySelector('#insercao-letras p');

const sessaoApresentacao = document.querySelector('#apresentacao');
const botaoComecar = document.querySelector('.botaoComecar');
const sessaoCapturaPalavra = document.querySelector('#capturaPalavra');
const botaoAdivinhar = document.querySelector('.botaoAdivinhar');
const sessaoAdivinhacao = document.querySelector('#adivinhacao');
const paragrafoSessaoAdivinhacao = document.querySelector('#adivinhacao p');

const formulario = document.querySelector('#formulario');
const receberPalavra = document.querySelector('#palavra');
const receberCategoria = document.querySelector('#categoria');

botaoComecar.addEventListener('click', function(){
    sessaoApresentacao.classList.add('hidden');
    sessaoCapturaPalavra.classList.remove('hidden')
});

/*Se esse elemento for ocultado antes da validação do cmampo, ocorrerá o erro "An invalid form control with name='palavra' is not focusable.​" por conta do atributo "required" na tag input
botaoAdivinhar.addEventListener('click', function(){
    
});
*/

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const valorPalavra = receberPalavra.value;
    const valorCategoria = receberCategoria.value;

    //validação
    if(valorPalavra === "" || valorCategoria === ""){
        alert("Preencha o(s) campo(s) em branco");
    }
    else{
        sessaoCapturaPalavra.classList.add('hidden');
        sessaoAdivinhacao.classList.remove('hidden');
    }

    //Escreve o valor das entradas na tela
    palavra.textContent = valorPalavra.toUpperCase();
    paragrafoSessaoAdivinhacao.textContent = `Categoria: ${valorCategoria.toUpperCase()}`;
});

teclas.forEach(function(tecla){
    tecla.addEventListener('click', function(){
        let valorTecla = tecla.value;
        palavra.innerHTML = valorTecla;
    });
});