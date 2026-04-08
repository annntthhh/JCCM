// Reloj Contador (5 de Abril, 5:00 PM)
const startDate = new Date('2026-04-05T17:00:00');

function updateTimer() {
    const diff = new Date() - startDate;
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById('minutes').innerText = Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById('seconds').innerText = Math.floor((diff / 1000) % 60);
}
setInterval(updateTimer, 1000);
updateTimer();

// Apertura de cartas
function setupToggle(cardId, messageId) {
    const card = document.getElementById(cardId);
    card.addEventListener('click', () => {
        card.classList.toggle('open');
        document.getElementById(messageId).classList.toggle('hidden');
    });
}
setupToggle('main-card', 'main-message');
setupToggle('details-card', 'details-message');

// Corazones
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);
