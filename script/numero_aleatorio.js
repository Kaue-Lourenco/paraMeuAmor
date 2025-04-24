
function rotacao(max, min) {
    let rotacao = 0;
    let numeroAleatorio = 0
    const numeroMaximo = max;
    const numeroMinimo = min;

    return numeroAleatorio = numeroMinimo + parseInt(Math.random() * numeroMaximo + 1);
}

export default rotacao;