"use strict";

var appInfo = {
  title: "To-Do App",
  subtitle: "Next Up:",
  toDos: JSON.parse(localStorage.getItem("toDos")) || []
};

var addToDo = function addToDo(e) {
  e.preventDefault();
  var toDo = e.target.elements.toDo.value;

  if (toDo) {
    appInfo.toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(appInfo.toDos));
    e.target.elements.toDo.value = "";
    renderToDos();
  }
};

var makeDecision = function makeDecision() {
  var randomNumber = Math.floor(Math.random() * appInfo.toDos.length);
  var option = appInfo.toDos[randomNumber];
  alert(option);
};

var completeToDo = function completeToDo(e) {
  for (var i = 0; i < appInfo.toDos.length; i++) {
    if (appInfo.toDos[i] === e.target.nextSibling.innerHTML) {
      appInfo.toDos.splice(i, 1);
      localStorage.setItem("toDos", JSON.stringify(appInfo.toDos));
    }
  }
  renderToDos();
};

var deleteToDos = function deleteToDos() {
  appInfo.toDos = [];
  renderToDos();
};

var renderToDos = function renderToDos() {
  var template = React.createElement(
    "section",
    { className: "title" },
    React.createElement(
      "h1",
      null,
      appInfo.title
    ),
    appInfo.subtitle && React.createElement(
      "p",
      null,
      appInfo.subtitle
    ),
    React.createElement(
      "p",
      null,
      appInfo.toDos.length > 0 ? "Tasks for today:" : "No Tasks for today. Go get some sun! ☀️"
    ),
    React.createElement(
      "button",
      { disabled: appInfo.toDos.length === 0, onClick: makeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { disabled: appInfo.toDos.length === 0, onClick: deleteToDos },
      "Remove All ToDos"
    ),
    React.createElement(
      "ol",
      null,
      appInfo.toDos.map(function (toDo) {
        return React.createElement(
          "li",
          { key: toDo },
          React.createElement("input", { type: "checkbox", onClick: completeToDo }),
          React.createElement(
            "span",
            null,
            toDo
          )
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: addToDo },
      React.createElement("input", { type: "text", name: "toDo" }),
      React.createElement(
        "button",
        null,
        "Add ToDo"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.querySelector("#app");

renderToDos();
