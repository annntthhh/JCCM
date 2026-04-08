function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Usamos el símbolo de corazón
    heart.innerHTML = '❤️';
    
    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + "vw";
    
    // Tamaño y duración de animación aleatorios para naturalidad
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    document.getElementById('hearts-container').appendChild(heart);
    
    // Limpiar el DOM eliminando el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Crear un corazón cada 300ms
setInterval(createHeart, 300);

console.log("Página cargada con éxito para Juan. ✨");
