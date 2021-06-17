import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class Modal extends Component {
    componentDidMount() {
        M.Modal.init(this.Modal)
    }
    render() {
        return (
          <div>
            <a
              className="waves-effect waves-light btn modal-trigger"
              data-target="modal1"
            >
              Modal
            </a>

            <div
              ref={Modal => {
                this.Modal = Modal;
              }}
              id="modal1"
              className="modal"
            >
                <div className="modal-content">
            <h4>Modal Header</h4>
            <p>This is modal content and body.</p>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;