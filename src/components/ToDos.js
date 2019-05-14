import React from "react";
import ToDo from "../components/ToDo";

export default class ToDos extends React.Component {
  render() {
    return (
      <ul>
        {this.props.toDos.map(toDo => (
          <ToDo
            key={toDo}
            toDoText={toDo}
            completeToDo={this.props.completeToDo}
          />
        ))}
      </ul>
    );
  }
}
