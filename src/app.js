import React from "react";
import ReactDOM from "react-dom";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";
import Actions from "./components/Actions";
import Header from "./components/Header";
import OptionModal from "./components/Modal";
import "./styles/style.scss";

class App extends React.Component {
  state = {
    toDos: JSON.parse(localStorage.getItem("toDos")) || [],
    selectedToDo: undefined
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDos.length !== this.state.toDos.length) {
      localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
    }
  }

  addToDo = toDo => {
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
  };
  removeToDos = () => {
    this.setState(() => {
      localStorage.removeItem("toDos", "");
      return {
        toDos: []
      };
    });
  };
  clearSelectedToDo = () => {
    this.setState(() => {
      return {
        selectedToDo: undefined
      };
    });
  };
  completeToDo = toDoToRemove => {
    this.setState(prevState => {
      return {
        toDos: prevState.toDos.filter(toDo => {
          return toDoToRemove !== toDo;
        })
      };
    });
  };
  makeDecision = () => {
    const randomNumber = Math.floor(Math.random() * this.state.toDos.length);
    const option = this.state.toDos[randomNumber];
    this.setState(() => {
      return {
        selectedToDo: option
      };
    });
  };
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
        <OptionModal
          selectedToDo={this.state.selectedToDo}
          clearSelectedToDo={this.clearSelectedToDo}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
