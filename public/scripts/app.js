"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const appInfo = {
//   title: "To-Do App",
//   subtitle: "Next Up:",
//   toDos: JSON.parse(localStorage.getItem("toDos")) || []
// };

// const addToDo = e => {
//   e.preventDefault();
//   const toDo = e.target.elements.toDo.value;

//   if (toDo) {
//     appInfo.toDos.push(toDo);
//     localStorage.setItem("toDos", JSON.stringify(appInfo.toDos));
//     e.target.elements.toDo.value = "";
//     renderToDos();
//   }
// };

// const makeDecision = () => {
//   const randomNumber = Math.floor(Math.random() * appInfo.toDos.length);
//   const option = appInfo.toDos[randomNumber];
//   alert(option);
// };

// const completeToDo = e => {
//   for (let i = 0; i < appInfo.toDos.length; i++) {
//     if (appInfo.toDos[i] === e.target.nextSibling.innerHTML) {
//       appInfo.toDos.splice(i, 1);
//       localStorage.setItem("toDos", JSON.stringify(appInfo.toDos));
//     }
//   }
//   renderToDos();
// };

// const deleteToDos = () => {
//   appInfo.toDos = [];
//   renderToDos();
// };

// const renderToDos = () => {
//   const template = (
//     <section className="title">
//       <h1>{appInfo.title}</h1>
//       {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
//       <p>
//         {appInfo.toDos.length > 0
//           ? "Tasks for today:"
//           : "No Tasks for today. Go get some sun! ☀️"}
//       </p>
//       <button disabled={appInfo.toDos.length === 0} onClick={makeDecision}>
//         What should I do?
//       </button>
//       <button disabled={appInfo.toDos.length === 0} onClick={deleteToDos}>
//         Remove All ToDos
//       </button>
//       <ol>
//         {appInfo.toDos.map(toDo => {
//           return (
//             <li key={toDo}>
//               <input type="checkbox" onClick={completeToDo} />
//               <span>{toDo}</span>
//             </li>
//           );
//         })}
//       </ol>
//       <form onSubmit={addToDo}>
//         <input type="text" name="toDo" />
//         <button>Add ToDo</button>
//       </form>
//     </section>
//   );
//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.querySelector("#app");

// renderToDos();

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "title" },
        React.createElement(
          "h1",
          null,
          "To-Do App"
        ),
        React.createElement(
          "h2",
          null,
          "Subtitle"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Actions = function (_React$Component2) {
  _inherits(Actions, _React$Component2);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        null,
        "What should I do?"
      );
    }
  }]);

  return Actions;
}(React.Component);

var ToDos = function (_React$Component3) {
  _inherits(ToDos, _React$Component3);

  function ToDos() {
    _classCallCheck(this, ToDos);

    return _possibleConstructorReturn(this, (ToDos.__proto__ || Object.getPrototypeOf(ToDos)).apply(this, arguments));
  }

  _createClass(ToDos, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        null,
        "Test ToDos"
      );
    }
  }]);

  return ToDos;
}(React.Component);

var AddToDo = function (_React$Component4) {
  _inherits(AddToDo, _React$Component4);

  function AddToDo() {
    _classCallCheck(this, AddToDo);

    return _possibleConstructorReturn(this, (AddToDo.__proto__ || Object.getPrototypeOf(AddToDo)).apply(this, arguments));
  }

  _createClass(AddToDo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        null,
        "Add ToDo"
      );
    }
  }]);

  return AddToDo;
}(React.Component);

var jsx = React.createElement(
  "section",
  { className: "main" },
  React.createElement(Header, null),
  React.createElement(Actions, null),
  React.createElement(ToDos, null),
  React.createElement(AddToDo, null)
);

ReactDOM.render(jsx, document.querySelector("#app"));
