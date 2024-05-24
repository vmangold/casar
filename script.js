// script.js
function responderSim() {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Te amoooooo!';
    mensagem.style.color = 'green';
}

function moverBotao() {
    const botaoNao = document.getElementById('nao');
    const container = document.querySelector('.container');
    
    const maxX = container.clientWidth - botaoNao.clientWidth;
    const maxY = container.clientHeight - botaoNao.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${randomX}px`;
    botaoNao.style.top = `${randomY}px`;
}
