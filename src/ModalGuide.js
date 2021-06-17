import React, { Component } from 'react';
import Modal from "./components/modal";


class ModalGuide extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="row">
                    <div className="col s9 offset-s3">
                        <span className="cyan-text">
                        <h3 className="header" style={{fontWeight:300}}>Modal</h3></span>
                        <div className="divider" />
                        <p className="flow-text" style={{fontSize:20}}>
                            Use a modal for dialog boxes, confirmation messages, or other content that can be called up. In order for the modal to work you have to add the Modal ID to the link of the trigger. To add a close button, just add the class .modal-close to your button.
                        </p>
                        <Modal />
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalGuide;