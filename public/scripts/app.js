"use strict";

var appInfo = {
  title: "To-Do App",
  subtitle: "Next Up:",
  options: ["One", "Two"]
};

var template = React.createElement(
  "section",
  { "class": "title" },
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
    appInfo.options.length > 0 ? "Tasks for today:" : "No Tasks for today. Go get some sun! ☀️"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    )
  )
);

var appRoot = document.querySelector("#app");

ReactDOM.render(template, appRoot);
