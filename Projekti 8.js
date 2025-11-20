console.log("Skripti latautui!");

const tasks = document.querySelectorAll('.task');
const cards = document.querySelectorAll('.card');

let draggedTask = null;

// Kun raahaus alkaa
tasks.forEach(task => {
    task.addEventListener('dragstart', function(e) {
        draggedTask = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.textContent); // Chrome tykkää tästä
    });
});

// Kortteihin dragover ja drop
cards.forEach(card => {
    card.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    });

    card.addEventListener('dragleave', function() {
        this.classList.remove('drag-over');
    });

    card.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (draggedTask) {
            this.appendChild(draggedTask);
            draggedTask = null;
        }
    });
});
