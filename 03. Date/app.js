const SECONDS = 1000;

const outputTitle = document.querySelector("#output");

const fullButton = document.querySelector("#full");
const dateButton = document.querySelector("#date");
const timeButton = document.querySelector("#time");

let dateFormat = "full";

const updateOutput = () => {
  outputTitle.textContent = setCurrentOutput();
};

const setCurrentOutput = () => {
  const now = new Date();
  switch (dateFormat) {
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "time":
      return now.toLocaleTimeString();
    default:
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
  }
};

updateOutput();
setInterval(updateOutput, SECONDS);

const bindMode = (mode) => {
  return () => {
    dateFormat = mode;
    updateOutput();
  };
};

timeButton.addEventListener("click", bindMode("time"));
dateButton.addEventListener("click", bindMode("date"));
fullButton.addEventListener("click", bindMode("full"));
