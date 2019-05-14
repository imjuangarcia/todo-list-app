import React from "react";

export default class ToDo extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          onClick={e => {
            this.props.completeToDo(this.props.toDoText);
          }}
        />
        <span>{this.props.toDoText}</span>
      </li>
    );
  }
}
