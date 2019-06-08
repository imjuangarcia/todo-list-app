import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
          <TransitionGroup component="section">
            {this.state.error && (
              <CSSTransition
                classNames="error"
                timeout={{ enter: 300, exit: 300 }}
              >
                <p>{this.state.error}</p>
              </CSSTransition>
            )}
          </TransitionGroup>
        </form>
      </React.Fragment>
    );
  }
}
