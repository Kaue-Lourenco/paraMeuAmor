import rotacao from "./script/numero_aleatorio.js"; 
import gerarData from "./script/tempo.js";
import addFoto from "./script/addFoto.js";

const titulo = document.getElementsByTagName('title')[0]
if (titulo.textContent == 'Nos') {
    addFoto('./img/nos/th.jpeg')
    addFoto("./img/nos/th (1).jpeg")
    addFoto("./img/nos/casal-feliz.jpg")
    addFoto("./img/nos/foto-de-casal-2.jpg")
    addFoto('./img/nos/ideias-fotos-casal-casais-tumblr-21.jpeg')
    addFoto('./img/nos/fotos-de-casal-65-imagens-que-vao-despertar-seu-coracao-66-1024x682.jpg')
    addFoto('./img/nos/25e30ac963e6c9f8f95e17de64fb3bae.jpg')
    addFoto('./img/nos/casal-feliz.jpg')
    addFoto('./img/nos/e4030bc97a74b4dc2fb0fd657114281b.jpg')
    addFoto('./img/nos/fec5e4d4edf338bb7f2d05f0d1f08675.jpg')

    gerarData()
    setInterval(() => {gerarData()}, 1000);

    styleImage(10)
}

if (titulo.textContent == 'Galeria') {
    addFoto("./img/galeria/pngtree-couples-hugging-to-show-love-picture-image_2664901.jpg")
    addFoto("./img/galeria/2b4ukoor59j6xdz5vfmidxyjn.jpg")
    addFoto("./img/galeria/4367dea53daf8835ad2ed7de277ab506.jpg")
    addFoto("./img/galeria/E75_0321.jpg")

    styleImage(4)
}

for (let i = 0; i <= 3; i++) {
    console.log(i)
    const notacao = document.getElementsByClassName('categorias')[i];
    notacao.style.transform = 'rotate(' + rotacao(10, -5) + 'deg)';
    
}

function styleImage(numero) {
    let w = 0;
    let h = 0;
    for (let c = 0; c < numero; c++) {
        const alfinet = document.createElement('img');
        alfinet.className = 'alfinet'
        alfinet.src = 'img/alfinete.png';
    
        const imagemLista = document.getElementsByClassName('itme_imagem')[c];
        
        const imagem = document.getElementsByClassName('foto')[c];
    
        imagemLista.style.transform = 'rotate(' + rotacao(10, -5) + 'deg)';
    
        imagemLista.appendChild(alfinet);
       
        imagem.addEventListener('load', () => {
            h = imagem.offsetHeight;
            w = imagem.offsetWidth;

            if (w > h) {
                imagemLista.style.width = 40 + '%';
            } else {
                imagemLista.style.width = 20 + '%';
            } 

            h = imagem.offsetHeight;
            imagemLista.style.height = h + 'px';
        })

           

       
    }
}
