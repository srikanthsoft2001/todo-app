function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskText;
    
    li.onclick = function () {
        taskList.removeChild(li);
    };
    
    taskList.appendChild(li);
    input.value = "";
}
