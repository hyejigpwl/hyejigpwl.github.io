const todoFrm = document.querySelector("#todo_frm");
const todoIpt = todoFrm.querySelector("input");
const todoList = document.querySelector("#todo_list");

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    todoList.appendChild(li);
}


function toDoSubmit(event){
    event.preventDefault();
    const newTodo = todoIpt.value;
    todoIpt.value = "";
    paintTodo(newTodo);
}
todoFrm.addEventListener("submit",toDoSubmit);