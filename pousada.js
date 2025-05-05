const botao = document.querySelector('.btn-mobile');

function toggleMenu(){
    const menu = document.getElementById("menu");
    menu.classList.toggle('active');
}

botao.addEventListener('click', toggleMenu);