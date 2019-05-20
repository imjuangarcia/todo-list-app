import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedToDo}
    contentLabel="Selected ToDo"
    onRequestClose={props.clearSelectedToDo}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal-title">
      🤔 <br />
      What should I do?
    </h3>
    {props.selectedToDo && <p className="modal-body">{props.selectedToDo}</p>}
    <button className="modal-button" onClick={props.clearSelectedToDo}>
      Let's do this!
    </button>
  </Modal>
);

export default OptionModal;
