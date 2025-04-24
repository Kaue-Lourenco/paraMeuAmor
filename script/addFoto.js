const ul = document.getElementsByClassName('lista_imagem')[0]

function addFoto(foto) {
    const ultimoItem = ul.lastElementChild;
    const img = document.createElement('img')
    img.className = 'foto';
    img.src = foto;

    const li = document.createElement('li')
    li.className = 'itme_imagem';

    li.appendChild(img)
    ul.insertBefore(li, ultimoItem)
}

export default addFoto;
