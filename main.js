const imagens = [
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/ippo.png'},
    {'id': '4', 'url': './img/tenchi.jpg'},
    {'id': '5', 'url': './img/tenjhotenge.jpg'},
    {'id': '6', 'url': './img/yuyuhakusho.jpg'},
    {'id': '7', 'url': './img/dragonball.jpg'},
    {'id': '8', 'url': './img/cavaleiros.jpg'},
    {'id': '9', 'url': './img/akamegakill.jpg'},
    {'id': '10', 'url': './img/naruto.jpg'},
    {'id': '11', 'url': './img/onepiece.jpg'},
    {'id': '12', 'url': './img/Jujutsu.jpg'},
]

const containerItem = document.querySelector('#containerItem');

const loadImagens = (imagens, container) =>{
    imagens.forEach(imagem => {
        container.innerHTML +=
        `<div class="item">
            <img src="${imagem.url}"> 
        </div>`
    })
}

loadImagens(imagens, containerItem);

let items = document.querySelectorAll('.item');

const anterior = () => {
    containerItem.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const proximo = () => {
    const lastItem = items[items.length - 1]
    containerItem.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item');
}


document.querySelector('#anterior').addEventListener('click', anterior);
document.querySelector('#proximo').addEventListener('click', proximo);