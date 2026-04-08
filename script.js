// --- Lógica de Apertura y Cierre de los Cuadros ---

// 1. Obtener los elementos de la carta principal
const mainCard = document.getElementById('main-card');
const mainMessage = document.getElementById('main-message');

// 2. Escuchador de clics para la carta principal
mainCard.addEventListener('click', function() {
    // Toggle (añade si no está, quita si está) la clase 'open' para la animación
    mainCard.classList.toggle('open');
    
    // Toggle (mostrar/ocultar) el contenido oculto
    mainMessage.classList.toggle('hidden');
});


// 3. Obtener los elementos del cuadro de detalles
const detailsCard = document.getElementById('details-card');
const detailsMessage = document.getElementById('details-message');

// 4. Escuchador de clics para el cuadro de detalles
detailsCard.addEventListener('click', function() {
    detailsCard.classList.toggle('open');
    detailsMessage.classList.toggle('hidden');
});


// --- Función de los Corazones Flotantes (Mismo de antes) ---
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
