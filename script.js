
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