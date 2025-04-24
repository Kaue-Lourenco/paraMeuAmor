let diaAtual = 0
let mesAtual = 0
let anoAtual = 0
let horaAtual = 0
let minutoAtual = 0
let segundoAtual = 0

let diasDoMesAnterior = 0
let mesAnterior = 0

let anoComeco = 2006
let mesComeco = 11
let diaComeco = 17

let ano = 0
let mes = 0
let dia = 0

let anoNome = 0
let mesNome = 0
let diaNome = 0
let horaNome = 0
let minutoNome = 0
let segundoNome = 0

const divYear = document.getElementsByClassName('data')[0];
let dataP = document.createElement('p')
function gerarData() {
    const dataAtual = new Date();
    diaAtual = dataAtual.getDate();
    mesAtual = dataAtual.getMonth();
    anoAtual = dataAtual.getFullYear();
    horaAtual = dataAtual.getHours();
    minutoAtual = dataAtual.getMinutes();
    segundoAtual = dataAtual.getSeconds();

    diasDoMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate()

    ano = anoAtual - anoComeco

    if (diaAtual > diaComeco) {
        dia = diaAtual - diaComeco
    }
    else {
        dia = diaAtual + (diasDoMesAnterior - diaComeco);
    }

    if (mesAtual > mesComeco) {
        mes = mesAtual - mesComeco;
    }
    else {
        mes = mesAtual + (12 - mesComeco - 1);
    }

    if (mesAtual < mesComeco) {
        ano -= 1;
    } else if (mesAtual == mesComeco) {
        if (diaAtual >= diaComeco) {
            dia = diaAtual - diaComeco;
            mes = mesAtual - mesComeco;
        }
        if (diaAtual < diaComeco) {
            ano -= 1;
        }
    }

    anoNome = ano == 1 ? ' ano ' : ' anos '
    mesNome = mes == 1 ? ' mês ' : ' mêses '
    diaNome = dia == 1 ? ' dia ' : ' dias '
    horaNome = horaAtual == 1 ? ' hora ' : ' horas '
    minutoNome = minutoAtual == 1 ? ' minuto ' : ' minutos '
    segundoNome = segundoAtual == 1 ? ' segundo ' : ' segundos '

    dataP.textContent = ano + anoNome + mes + mesNome + dia + diaNome + horaAtual + horaNome + minutoAtual + minutoNome + 'e ' + segundoAtual + segundoNome

    divYear.appendChild(dataP)
}

export default gerarData;