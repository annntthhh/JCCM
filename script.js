// 1. Reloj Contador (5 de Abril, 5:00 PM)
const startDate = new Date('2026-04-05T17:00:00');
function updateTimer() {
    const diff = new Date() - startDate;
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
    document.getElementById('seconds').innerText = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
}
setInterval(updateTimer, 1000);
updateTimer();

// 2. Apertura de Cartas
function setupToggle(cardId, messageId) {
    const card = document.getElementById(cardId);
    card.addEventListener('click', () => {
        card.classList.toggle('open');
        document.getElementById(messageId).classList.toggle('hidden');
    });
}
setupToggle('main-card', 'main-message');
setupToggle('details-card', 'details-message');

// 3. Termómetro
setTimeout(() => {
    document.getElementById('connection-bar').style.width = "100%";
    setTimeout(() => {
        document.getElementById('connection-status').innerText = "¡Conexión máxima alcanzada! ❤️";
    }, 2000);
}, 1000);

// 4. Botón de Abrazo
const hugBtn = document.getElementById('hug-btn');
hugBtn.addEventListener('click', () => {
    hugBtn.classList.add('hidden');
    document.getElementById('hug-response').classList.remove('hidden');
    for(let i=0; i<20; i++) setTimeout(createHeart, i * 100);
});

// 5. Corazones
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);
