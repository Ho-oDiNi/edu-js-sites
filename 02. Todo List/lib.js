const createNodeElement = (tagName, options = {}) => {
  const nodeElement = document.createElement(tagName);

  for (const [key, value] of Object.entries(options)) {
    if (key in nodeElement) {
      nodeElement[key] = value;
    } else {
      nodeElement.setAttribute(key, value);
    }
  }

  return nodeElement;
};

export class TodoItem {
  #id;
  #title;
  #isComplete = false;

  constructor(id, title) {
    this.#id = id;
    this.#title = title;
  }

  get id() {
    return this.#id;
  }

  createButtonGroupNode() {
    let buttonGroup = createNodeElement("div");

    const doneButton = createNodeElement("span", {
      className: `btn btn-small me-2 ${this.#isComplete ? "btn-warning" : "btn-success"}`,
      textContent: "✓",
    });

    doneButton.addEventListener("click", () => {
      this.#isComplete = !this.#isComplete;
      new TodoController().render();
    });

    const deleteButton = createNodeElement("span", {
      className: "btn btn-small btn-danger",
      textContent: "×",
    });

    deleteButton.addEventListener("click", () => {
      new TodoController().deleteItem(this.#id);
    });

    buttonGroup.append(doneButton, deleteButton);

    return buttonGroup;
  }

  createTodoItemNameNode() {
    return createNodeElement("span", {
      textContent: this.#title,
      className: this.#isComplete ? "text-decoration-line-through" : "",
    });
  }

  createEmptyTodoItemNode() {
    return createNodeElement("li", {
      className: "list-group-item d-flex justify-content-between align-items-center",
    });
  }

  getNode() {
    let todoItem = this.createEmptyTodoItemNode();
    todoItem.append(this.createTodoItemNameNode());
    todoItem.append(this.createButtonGroupNode());

    return todoItem;
  }
}

export class TodoController {
  #todoItems = [];

  constructor() {
    if (!TodoController._instance) {
      TodoController._instance = this;
    }
    return TodoController._instance;
  }

  getLength = () => {
    return this.#todoItems.length;
  };

  appendItem = (item) => {
    this.#todoItems.push(item);
    this.render();
  };

  deleteItem = (id) => {
    this.#todoItems = this.#todoItems.filter((item) => item.id !== id);
    this.render();
  };

  render = () => {
    const todoListNode = document.querySelector("#list");

    todoListNode.innerHTML = "";
    this.#todoItems.forEach((item) => {
      todoListNode.append(item.getNode());
    });
  };
}
