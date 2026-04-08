// --- 1. Lógica de Apertura/Cierre de Cuadros ---
function setupToggle(cardId, messageId) {
    const card = document.getElementById(cardId);
    const message = document.getElementById(messageId);

    card.addEventListener('click', () => {
        card.classList.toggle('open');
        message.classList.toggle('hidden');
    });
}

setupToggle('main-card', 'main-message');
setupToggle('details-card', 'details-message');

// --- 2. Lógica del Reloj Contador (5 de Abril, 5:00 PM) ---
const startDate = new Date('2026-04-05T17:00:00');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    // Cálculos de tiempo
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    // Actualizar el HTML
    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

// Iniciar contador
setInterval(updateTimer, 1000);
updateTimer();

// --- 3. Lógica de Corazones Flotantes ---
function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 400);

console.log("¡Todo listo para Juan! ✨");
