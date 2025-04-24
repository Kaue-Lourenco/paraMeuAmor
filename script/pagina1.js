const p1Texto = document.getElementsByClassName('p1_texto')[0];
const p2Texto = document.getElementsByClassName('p2_texto')[0];
const botaoProximo = document.getElementsByClassName('botao_proximo')[0];
const proximaPagina = document.getElementsByClassName('proxima_pagina')[0];
const p1 = document.getElementsByClassName('p1')[0];
let x = 0;

botaoProximo.addEventListener('click', () => {
    p1.style.opacity = 0;
    x = 0
    p1Texto.style.display = 'none'
    p2Texto.style.display = 'block' 
    botaoProximo.style.display = 'none'
    proximaPagina.style.display = 'block'

})

const pausa = 40

setInterval(() => {
    if (x >= 1) {
        pausa = clearInterval()
    }
    x += 1
    p1.style.opacity = x ;
}, pausa);