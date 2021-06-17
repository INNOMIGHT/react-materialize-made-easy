import React, { Component } from 'react';
import Sidenav from "./components/sidenav";


class SidenavGuide extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="row">
                    <div className="col s9 offset-s3">
                        <span className="cyan-text">
                        <h3 className="header" style={{fontWeight:300}}>Sidenav</h3></span>
                        <div className="divider" />
                        <p className="flow-text" style={{fontSize:20}}>
                            The Side navigation bar you are seeing right now is the example of a sidenav.
                            This is a slide out menu. You can add a dropdown to your sidebar by using our collapsible component.
                        </p>
                        <Sidenav />
                    </div>
                </div>

            </div>
        )
    }
}

export default SidenavGuide;