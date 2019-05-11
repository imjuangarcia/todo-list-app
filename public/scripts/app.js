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

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.removeToDos = _this.removeToDos.bind(_this);
    _this.makeDecision = _this.makeDecision.bind(_this);

    _this.state = {
      toDos: ["One", "Two", "Three", "Four"]
    };
    return _this;
  }

  _createClass(App, [{
    key: "removeToDos",
    value: function removeToDos() {
      this.setState(function () {
        return {
          toDos: []
        };
      });
    }
  }, {
    key: "makeDecision",
    value: function makeDecision() {
      var randomNumber = Math.floor(Math.random() * this.state.toDos.length);
      var option = this.state.toDos[randomNumber];
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(Header, { title: "To-Do App" }),
        React.createElement(Actions, {
          hasToDos: this.state.toDos.length > 0,
          removeToDos: this.removeToDos,
          makeDecision: this.makeDecision
        }),
        React.createElement(ToDos, { toDos: this.state.toDos }),
        React.createElement(AddToDo, null)
      );
    }
  }]);

  return App;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

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
          this.props.title
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Actions = function (_React$Component3) {
  _inherits(Actions, _React$Component3);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "button",
          {
            disabled: !this.props.hasToDos,
            onClick: this.props.removeToDos
          },
          "Remove ToDos"
        ),
        React.createElement(
          "button",
          {
            disabled: !this.props.hasToDos,
            onClick: this.props.makeDecision
          },
          "What should I do?"
        )
      );
    }
  }]);

  return Actions;
}(React.Component);

var ToDos = function (_React$Component4) {
  _inherits(ToDos, _React$Component4);

  function ToDos() {
    _classCallCheck(this, ToDos);

    return _possibleConstructorReturn(this, (ToDos.__proto__ || Object.getPrototypeOf(ToDos)).apply(this, arguments));
  }

  _createClass(ToDos, [{
    key: "render",
    value: function render() {
      return this.props.toDos.map(function (toDo) {
        return React.createElement(ToDo, { key: toDo, toDoText: toDo });
      });
    }
  }]);

  return ToDos;
}(React.Component);

var ToDo = function (_React$Component5) {
  _inherits(ToDo, _React$Component5);

  function ToDo() {
    _classCallCheck(this, ToDo);

    return _possibleConstructorReturn(this, (ToDo.__proto__ || Object.getPrototypeOf(ToDo)).apply(this, arguments));
  }

  _createClass(ToDo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        null,
        this.props.toDoText
      );
    }
  }]);

  return ToDo;
}(React.Component);

var AddToDo = function (_React$Component6) {
  _inherits(AddToDo, _React$Component6);

  function AddToDo() {
    _classCallCheck(this, AddToDo);

    return _possibleConstructorReturn(this, (AddToDo.__proto__ || Object.getPrototypeOf(AddToDo)).apply(this, arguments));
  }

  _createClass(AddToDo, [{
    key: "addToDo",
    value: function addToDo(e) {
      e.preventDefault();
      var toDo = e.target.elements.toDo.value.trim();

      if (toDo) {
        alert("gorda");
        // appInfo.toDos.push(toDo);
        // localStorage.setItem("toDos", JSON.stringify(appInfo.toDos));
        // e.target.elements.toDo.value = "";
        // renderToDos();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.addToDo },
        React.createElement("input", { type: "text", name: "toDo" }),
        React.createElement(
          "button",
          null,
          "Add ToDo"
        )
      );
    }
  }]);

  return AddToDo;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));
