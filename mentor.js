const judulTodo = "todo list hari ini";

document.getElementById("judul").innerHTML = judulTodo;

//Build todo

//buat object
let todoList = [];

// document.getElementById('todoList').innerHTML = todoList;
const parentTodo = document.getElementById("todoList");
const ulTodo = document.createElement("ul");
const liTodo = document.createElement("li");
parentTodo.appendChild(ulTodo);
// ulTodo.appendChild(liTodo);

for (let i = 0; i < todoList.length; i++) {
  const liTodo = document.createElement("li");
  liTodo.innerText = todoList[i];
  liTodo.id = i + todoList[i];
  ulTodo.appendChild(liTodo);
  liTodo.addEventListener("click", function (e) {
    liTodo.style.setProperty("text-decoration", "line-through");
  });
}

const formDocument = document.getElementById("inputTodo");
formDocument.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputText = document.getElementById("todoInput").value;
 document.getElementById("todoInput").value = '';
  todoList.push(inputText);

  const liTodo = document.createElement("li");
  liTodo.innerHTML = inputText;
  liTodo.id = Number(todoList.length - 1) + inputText;
  ulTodo.appendChild(liTodo);
  liTodo.addEventListener("click", function (e) {
    liTodo.style.setProperty("text-decoration", "line-through");
  });
});

function fuzzByzz(params) {
  
}