const todoFrm = document.querySelector("#todo_form");
const todoIpt = document.querySelector("#todo_form input");
const todoList = document.querySelector("#todo_list");

const toDos = [];

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoSubmit(event){
    event.preventDefault();
    const newTodo = todoIpt.value;
    todoIpt.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
}

todoFrm.addEventListener("submit",todoSubmit);