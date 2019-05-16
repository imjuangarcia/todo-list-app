import React from "react";

const Actions = props => (
  <section className="buttons">
    <button disabled={!props.hasToDos} onClick={props.removeToDos}>
      Remove ToDos
    </button>
    <button disabled={!props.hasToDos} onClick={props.makeDecision}>
      What should I do?
    </button>
  </section>
);

export default Actions;
