var addButton = document.getElementById("painike");
var input = document.getElementById("enter");
var ul  = document.querySelector("ul");

addButton.addEventListener("click", addTaskOnClick);

input.addEventListener("keypress",addTaskOnEnter);

var ul = document.querySelector("ul");

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
    if(input.value != '')
{
  taskItem.appendChild(document.createTextNode(input.value)); //lisätään li-elementtiin tekstin, joka on laatikossa
    ul.appendChild(taskItem); //lisää li-elementin ul-elementtiin
    input.value = ""; // Tyhjentää syöttökentän
}
    //taskList.appendChild(taskItem);

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

