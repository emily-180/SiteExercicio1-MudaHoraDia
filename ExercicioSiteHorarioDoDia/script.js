function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`

    if (hora >= 7 && hora < 12) {
        imagem.src="imagens/faculdade.jpg"
        document.body.style.background = '#87CEEB'; 
        mensagem.innerHTML += "<br>Estou na faculdade.";
    } else if (hora >= 12 && hora < 16) {
        imagem.src="imagens/academia.jpg"
        document.body.style.background = '#FFD700'; 
        mensagem.innerHTML += "<br>Estou na academia.";
    } else if (hora >= 16 && hora < 19) {
        imagem.src="imagens/casa.jpg"
        document.body.style.background = '#FFBF00';
        mensagem.innerHTML += "<br>Estou em casa.";
    } else if (hora >= 19 && hora < 21) {
        imagem.src="imagens/danca.jpg"
        document.body.style.background = '#00008B'; 
        mensagem.innerHTML += "<br>Estou  na aula de dança.";
    } else if (hora >= 21 || hora < 5) {
        imagem.src="imagens/dormindo.jpg"
        document.body.style.background = '#000066';
        mensagem.innerHTML += "<br>Estou dormindo.";
    } else if (hora >= 5 && hora < 7) {
        imagem.src="imagens/trajeto.jpeg"
        document.body.style.background = '#ADD8E6'; 
        mensagem.innerHTML += "<br>Estou no trajeto para a faculdade.";
    }
}
