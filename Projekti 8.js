// WAIT for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Find all tasks
    const tasks = document.querySelectorAll('.task');
    // Find all card containers (where we drop tasks)
    const cards = document.querySelectorAll('.card');
    
    // Variable to store which task we're dragging
    let draggedTask = null;
    
    // Add drag start event to each task
    tasks.forEach(task => {
        task.addEventListener('dragstart', function(e) {
            draggedTask = this;
            console.log('Started dragging:', this.textContent);
        });
        
        task.addEventListener('dragend', function() {
            console.log('Stopped dragging');
        });
    });
    
    // Add drop events to each card container
    cards.forEach(card => {
        // This allows us to drop on this card
        card.addEventListener('dragover', function(e) {
            e.preventDefault(); // Very important!
        });
        
        // When we drop the task
        card.addEventListener('drop', function(e) {
            e.preventDefault();
            
            if (draggedTask) {
                // Add the task to this card
                this.appendChild(draggedTask);
                console.log('Dropped task in new column');
            }
        });
    });
    
    console.log('Drag and drop is ready!');
    console.log('Found', tasks.length, 'tasks');
    console.log('Found', cards.length, 'cards');
    
});