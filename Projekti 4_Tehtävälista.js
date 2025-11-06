var addButtonButton = document.getElementById("painike");
var input = document.getElementById("enter");
var ul  = document.querySelector("ul");

addButton.addEventListener("click", addTaskOnClick);

input.addEventListener("keypress",addTaskOnEnter);

function addTaskOnClick(){
    if (input.value.length > 0){
        createTask();
    }
}

function addTaskOnEnter(event){
    if(input.value.length > 0 && event.which === 13){
        createTask();
    }
}

function createTask(){
    if (input.value === '')return;

    var taskItem = document.createElement("li");
    taskItem.textContent =  input.value;
    taskList.appendChild(taskItem);

    input.value = "";
     taskItem.addEventListener("click", function(){
        taskItem.classList.toggle("done");
     });

     var deleteBtn = document.createElement("button");
     deleteBtn.textContent = "X";
     taskItem.appendChild(deleteBtn);

     deleteBtn.addEventListener("click", function(){
        taskItem.classList.add("delete");
     });
}

