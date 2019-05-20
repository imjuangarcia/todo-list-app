import React from "react";
import ToDo from "../components/ToDo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class ToDos extends React.Component {
  render() {
    return (
      <TransitionGroup
        component="ul"
        className={this.props.toDos.length === 0 ? "hidden" : ""}
      >
        {this.props.toDos.map(toDo => (
          <CSSTransition
            key={toDo}
            classNames="todo"
            timeout={{ enter: 300, exit: 300 }}
          >
            <ToDo
              key={toDo}
              toDoText={toDo}
              completeToDo={this.props.completeToDo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
