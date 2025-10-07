import { TodoItem, TodoController } from "./lib.js";

let todoConrtoller = new TodoController();

const defaultTodoItem = new TodoItem(1, "Название");
todoConrtoller.appendItem(defaultTodoItem);

const createButtonNode = document.querySelector("#create");
const inputNode = document.querySelector("#title");

createButtonNode.addEventListener("click", () => {
  if (!inputNode.value) return;

  let todoItem = new TodoItem(todoConrtoller.getLength() + 1, inputNode.value);
  todoConrtoller.appendItem(todoItem);
});
