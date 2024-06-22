const container = document.querySelector("container");
const todoForm = document.querySelector(".todoForm");
const inputTodo = document.querySelector("#inputTodo");
const todoBtn = document.querySelector("#todoBtn");
const todoLists = document.querySelector("#lists");
const message = document.querySelector("#message");

//create todo
const createTodo = (todoId,todoValue)=>{
    const todoElement = document.createElement("li");
    todoElement.id=todoId;
    todoElement.innerHTML=`<span>${todoValue}</span>
    <span><button class="btn" id="deleteBtn"><i class="fa fa-trash"></i> </button></span>`;
    todoElement.classList.add("list");
    todoLists.appendChild(todoElement);
    
    const deleteBtn = todoElement.querySelector("#deleteBtn");
    deleteBtn.addEventListener("click" , deleteTodo)
    
    }
    //getTodo
    const getTodo = ()=>{
       return localStorage.getItem("myTodo") ? JSON.parse(localStorage.getItem("myTodo")) : [];
    }
  //show message
/**
 * 
 * @param {*} text text- will be shown after creating and deleting todos
 * @param {*} status status- the style of the text
 */

  
//addTodo
const addTodo = (event)=>{
    
    event.preventDefault();
    const todoValue = inputTodo.value;
    //unique id
    const todoId = Date.now().toString();

    createTodo(todoId,todoValue);
    showMessage("todo is created", "success");

    //localStorage

    const todos = getTodo();
    todos.push({todoId,todoValue});
    localStorage.setItem("mytodo" , JSON.stringify(todos));
    inputTodo.value="";
}

todoForm.addEventListener("submit" , addTodo);
