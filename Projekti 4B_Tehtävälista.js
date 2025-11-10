// Get the button, input field, and list from HTML
var addButton = document.getElementById("painike");
var input = document.getElementById("syotto");
var taskList = document.querySelector("ul");

// Listen for button click
addButton.addEventListener("click", addTaskOnClick);

// Listen for Enter key press
input.addEventListener("keypress", addTaskOnEnter);


// Function: Add task when button is clicked
function addTaskOnClick() {
  if (input.value.length > 0) {
    createTask();
  }
}


// Function: Add task when Enter key is pressed
function addTaskOnEnter(event) {
  if (input.value.length > 0 && event.which === 13) {
    createTask();
  }
}


// Function: Create a new task item
function createTask() {
  // Don't create empty tasks
  if (input.value === '') return;

  // Create a new list item (li)
  var taskItem = document.createElement("li");
  taskItem.textContent = input.value;
  taskList.appendChild(taskItem);
  
  // Clear the input field
  input.value = "";

  // Click task to mark as done
  taskItem.addEventListener("click", function() {
    taskItem.classList.toggle("done");
  });

  // Create delete button (X)
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  taskItem.appendChild(deleteBtn);

  // Click X to delete task
  deleteBtn.addEventListener("click", function() {
    taskItem.classList.add("delete");
  });
}