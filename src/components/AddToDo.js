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
        <form onSubmit={this.addToDo}>
          <fieldset>
            <input type="text" name="toDo" placeholder="E.G. Walk the dog" />
            <button>
              <i className="fal fa-long-arrow-right" />
            </button>
          </fieldset>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </React.Fragment>
    );
  }
}
