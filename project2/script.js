const taskList = document.getElementById('taskList');
const taskinput = document.getElementById('taskinput');


function loadTasks () {
    const saved = localStorage.getItem('tasks');
    if(saved){
        taskList.innerHTML='';
        JSON.parse(saved).forEach(task => createTaskElement(task.text,task.completed));

    }


}

// saving in the local storage



function saveTasks(){
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text:li.querySelector('span').textContent,
            completed:li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement (text ,completed = false){
    const li = document.createElement("li");
    const span = document.createElement('span');
    span.textContent = text ;
    span.onclick = () => {
        li.classList.toggle('completed');
        saveTasks();
    };

    const del = document.createElement('span');
    del.textContent = "X";
    del.className = 'delete';
    del.onclick = () => {
       li.remove();
       saveTasks();
    };

    if(completed) li.classList.add('completed');
    li.appendChild(span);
    li.appendChild(del);
    taskList.appendChild(li);
}

function addTask() {
    const text = taskinput.value.trim();
    if(text){
        createTaskElement(text);
        saveTasks();
        taskinput.value ='';
    }


}

window.onload = loadTasks;