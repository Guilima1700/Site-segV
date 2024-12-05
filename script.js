
function lerMais(){
    document.getElementById('mais-texto').style.display = 'block';
    document.getElementById('botao-ler-mais').style.display = 'none';
    document.getElementById('botao-ler-menos').style.display = 'block';
}

function lerMenos(){
    document.getElementById('mais-texto').style.display = 'none';
    document.getElementById('botao-ler-menos').style.display = 'none';
    document.getElementById('botao-ler-mais').style.display = 'block';
}

document.addEventListener('scroll', function () {
    const menu = document.getElementById('cabecalho');
    const itensMenu = document.getElementById('menu-cabecalho');

    if (window.scrollY > 50) { 
        menu.classList.add('cabecalho-sticky');
        itensMenu.classList.remove('menu-cabecalho');
        itensMenu.classList.add('menu-cabecalho-sticky');
    } else {
        menu.classList.remove('cabecalho-sticky');
        itensMenu.classList.add('menu-cabecalho');
        itensMenu.classList.remove('menu-cabecalho-sticky');
    }
});
