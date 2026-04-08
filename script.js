const mainCard = document.getElementById('main-card');
const secretMessage = document.getElementById('secret-message');
const instruction = document.getElementById('click-instruction');

// Función para abrir la tarjeta
mainCard.addEventListener('click', function() {
    secretMessage.classList.remove('hidden');
    instruction.classList.add('hidden');
    mainCard.style.cursor = 'default';
});

// Función de los corazones (la misma de antes)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);
