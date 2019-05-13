"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.addToDo = _this.addToDo.bind(_this);
    _this.removeToDos = _this.removeToDos.bind(_this);
    _this.makeDecision = _this.makeDecision.bind(_this);

    _this.state = {
      toDos: JSON.parse(localStorage.getItem("toDos")) || []
    };
    return _this;
  }

  _createClass(App, [{
    key: "addToDo",
    value: function addToDo(toDo) {
      if (!toDo) {
        return "Enter a valid ToDo item";
      } else if (this.state.toDos.indexOf(toDo) > -1) {
        return "This ToDo already exists";
      }

      this.setState(function (previousState) {
        localStorage.setItem("toDos", JSON.stringify(previousState.toDos.concat(toDo)));
        return {
          toDos: previousState.toDos.concat(toDo)
        };
      });
    }
  }, {
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
        React.Fragment,
        null,
        React.createElement(Header, { title: "To-Do App", toDos: this.state.toDos }),
        React.createElement(ToDos, { toDos: this.state.toDos }),
        React.createElement(AddToDo, { addToDo: this.addToDo }),
        React.createElement(Actions, {
          hasToDos: this.state.toDos.length > 0,
          removeToDos: this.removeToDos,
          makeDecision: this.makeDecision
        })
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
        ),
        React.createElement(
          "p",
          null,
          this.props.toDos.length > 0 ? "Tasks for today:" : "No Tasks for today. Go get some sun! ☀️"
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
        "section",
        { className: "buttons" },
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

  function ToDos(props) {
    _classCallCheck(this, ToDos);

    var _this4 = _possibleConstructorReturn(this, (ToDos.__proto__ || Object.getPrototypeOf(ToDos)).call(this, props));

    _this4.completeToDo = _this4.completeToDo.bind(_this4);
    return _this4;
  }

  _createClass(ToDos, [{
    key: "completeToDo",
    value: function completeToDo(e) {
      var _this5 = this;

      for (var i = 0; i < this.props.toDos.length; i++) {
        if (this.props.toDos[i] === e.target.nextSibling.innerHTML) {
          this.props.toDos.splice(i, 1);
          this.setState(function () {
            localStorage.setItem("toDos", JSON.stringify(_this5.props.toDos));
            return {
              toDos: _this5.props.toDos
            };
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return React.createElement(
        "ul",
        null,
        this.props.toDos.map(function (toDo) {
          return React.createElement(ToDo, { key: toDo, toDoText: toDo, completeToDo: _this6.completeToDo });
        })
      );
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
        "li",
        null,
        React.createElement("input", { type: "checkbox", onClick: this.props.completeToDo }),
        React.createElement(
          "span",
          null,
          this.props.toDoText
        )
      );
    }
  }]);

  return ToDo;
}(React.Component);

var AddToDo = function (_React$Component6) {
  _inherits(AddToDo, _React$Component6);

  function AddToDo(props) {
    _classCallCheck(this, AddToDo);

    var _this8 = _possibleConstructorReturn(this, (AddToDo.__proto__ || Object.getPrototypeOf(AddToDo)).call(this, props));

    _this8.addToDo = _this8.addToDo.bind(_this8);
    _this8.state = {
      error: undefined
    };
    return _this8;
  }

  _createClass(AddToDo, [{
    key: "addToDo",
    value: function addToDo(e) {
      e.preventDefault();
      var toDo = e.target.elements.toDo.value.trim();
      var error = this.props.addToDo(toDo);
      e.target.elements.toDo.value = "";

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.addToDo },
          React.createElement("input", { type: "text", name: "toDo" }),
          React.createElement(
            "button",
            null,
            "Add ToDo"
          )
        )
      );
    }
  }]);

  return AddToDo;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));
