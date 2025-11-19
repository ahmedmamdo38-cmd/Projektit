const tasks = document.querySelectorAll('.task'); 
const cards = document.querySelectorAll('.card');  

let draggedTask = null;


tasks.forEach(task => {
    
    task.addEventListener('dragstart', function() {
        draggedTask = this;  
    });
});


cards.forEach(card => {
    
    card.addEventListener('dragover', function(e) {
        e.preventDefault();  
    });
    
    
    cards.addEventListener('drop', function(e) {
        e.preventDefault();
        this.appendChild(draggedTask);  
    });
});