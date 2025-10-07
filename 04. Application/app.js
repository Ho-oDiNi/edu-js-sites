const list = document.querySelector("#list");

const filter = document.querySelector("#filter");

let users = [];

filter.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(value));
  render(filteredUsers);
});

async function start() {
  list.innerHTML = "<li class='list-group-item'>Загрузка...</li>";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await resp.json();
    render(users);
  } catch (err) {
    list.innerHTML = "<li class='list-group-item text-danger'>Ошибка загрузки</li>";
    console.error(err);
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "<li class='list-group-item'>Пользователи не найдены</li>";
    return;
  }
  const html = users.map(toHTML).join("");
  list.innerHTML = html;
}

function toHTML(user) {
  return `
    <li class="list-group-item">${user.name}</li>
  `;
}

start();
