let currentAudio = null;


const cards = document.querySelectorAll('.animal-card');


cards.forEach(card => {
    card.addEventListener('click', function() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        const img = this.querySelector('img');
        const animal = img.getAttribute('title').toLowerCase();
        
        // Play new sound
        currentAudio = new Audio('AnimalSounds/' + animal + '.mp3');
        currentAudio.play();
    });
    
    card.style.cursor = 'pointer';
});