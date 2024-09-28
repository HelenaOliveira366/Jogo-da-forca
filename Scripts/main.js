let teclas = document.querySelectorAll('.tecla');
let palavra = document.querySelector('#insercao-letras p');

teclas.forEach(function(tecla){
    tecla.addEventListener('click', function(){
        let valorTecla = tecla.value;
        palavra.innerHTML = valorTecla;
    });
});