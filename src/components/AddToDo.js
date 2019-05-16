import React from "react";

export default class AddToDo extends React.Component {
  state = {
    error: undefined
  };
  addToDo = e => {
    e.preventDefault();
    const toDo = e.target.elements.toDo.value.trim();
    const error = this.props.addToDo(toDo);

    this.setState(() => {
      return {
        error
      };
    });

    if (!error) {
      e.target.elements.toDo.value = "";
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addToDo}>
          <input type="text" name="toDo" />
          <button>Add ToDo</button>
        </form>
      </React.Fragment>
    );
  }
}
