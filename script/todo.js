const TODO_LIST_KEY = "todoList";

const todoForm = document.querySelector("main form");

let todoList = [];

function handleSubmitBtn(e) {
  e.preventDefault();

  const input = todoForm.querySelector("input");
  const todo = {
    value: input.value,
    id: Date.now(),
  };

  input.value = "";
  appendTodo(todo);

  todoList.push(todo);
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
}

function appendTodo(todo) {
  const ul = document.querySelector("main ul");

  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const a = document.createElement("a");

  li.id = todo.id;
  h2.innerText = todo.value;
  a.innerText = "✕";

  li.appendChild(h2);
  li.appendChild(a);
  ul.appendChild(li);

  a.addEventListener("click", handleDeleteBtn);
}

function handleDeleteBtn(e) {
  e.preventDefault();

  const li = e.target.parentElement;
  li.remove();

  todoList = todoList.filter((todo) => todo.id !== parseInt(li.id));

  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
}

todoForm.addEventListener("submit", handleSubmitBtn);

const savedList = JSON.parse(localStorage.getItem(TODO_LIST_KEY));
if (savedList) {
  todoList = savedList;
  todoList.forEach((todo) => appendTodo(todo));
}
