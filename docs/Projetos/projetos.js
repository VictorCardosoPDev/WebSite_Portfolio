document.querySelectorAll('.play-overlay').forEach(overlay => {
    overlay.addEventListener('click', function() {
        const card = this.closest('.project-card');
        const video = card.querySelector('.project-video');

        if (video.paused) {
            video.play();
            // Adiciona classe para esconder o play e mostrar controles
            card.classList.add('video-is-playing');
            video.setAttribute('controls', 'true'); // Mostra controles do navegador
        } else {
            video.pause();
            // Remove classe para reaparecer o play
            card.classList.remove('video-is-playing');
            video.removeAttribute('controls'); // Esconde controles
        }
    });
});