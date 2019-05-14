import React from "react";
import ReactDOM from "react-dom";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";
import Actions from "./components/Actions";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.removeToDos = this.removeToDos.bind(this);
    this.makeDecision = this.makeDecision.bind(this);
    this.completeToDo = this.completeToDo.bind(this);

    this.state = {
      toDos: JSON.parse(localStorage.getItem("toDos")) || []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDos.length !== this.state.toDos.length) {
      localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
    }
  }

  addToDo(toDo) {
    if (!toDo) {
      return "Enter a valid ToDo item";
    } else if (this.state.toDos.indexOf(toDo) > -1) {
      return "This ToDo already exists";
    }

    this.setState(previousState => {
      return {
        toDos: previousState.toDos.concat(toDo)
      };
    });
  }
  removeToDos() {
    this.setState(() => {
      localStorage.removeItem("toDos", "");
      return {
        toDos: []
      };
    });
  }
  completeToDo(toDoToRemove) {
    this.setState(prevState => {
      return {
        toDos: prevState.toDos.filter(toDo => {
          return toDoToRemove !== toDo;
        })
      };
    });
  }
  makeDecision() {
    const randomNumber = Math.floor(Math.random() * this.state.toDos.length);
    const option = this.state.toDos[randomNumber];
    alert(option);
  }
  render() {
    return (
      <React.Fragment>
        <Header toDos={this.state.toDos} />
        <ToDos toDos={this.state.toDos} completeToDo={this.completeToDo} />
        <AddToDo addToDo={this.addToDo} />
        <Actions
          hasToDos={this.state.toDos.length > 0}
          removeToDos={this.removeToDos}
          makeDecision={this.makeDecision}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
