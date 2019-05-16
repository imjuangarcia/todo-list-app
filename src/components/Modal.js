import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedToDo}
    contentLabel="Selected ToDo"
    onRequestClose={props.clearSelectedToDo}
  >
    <h3>Selected ToDo</h3>
    {props.selectedToDo && <p>{props.selectedToDo}</p>}
    <button onClick={props.clearSelectedToDo}>Okay</button>
  </Modal>
);

export default OptionModal;
