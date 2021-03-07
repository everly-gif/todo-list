const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click',deletecheck);
function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completed=document.createElement('button');
    completed.innerHTML='<i class ="fas fa-check"></i>';
    completed.classList.add("complete-btn");
    todoDiv.appendChild(completed);
    
    const trash=document.createElement('button');
    trash.innerHTML='<i class ="fas fa-trash"></i>';
    trash.classList.add("trash-btn");
    todoDiv.appendChild(trash);
    todoList.appendChild(todoDiv);
    todoInput.value="";
}

function deletecheck(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.remove();
    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}