import React, { Component } from 'react';
import Collapsible from "./components/collapsible";


class CarouselGuide extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="row">
                    <div className="col s9 offset-s3">
                        <span className="cyan-text">
                        <h3 className="header" style={{fontWeight:300}}>Collapsible</h3></span>
                        <div className="divider" />
                        <p className="flow-text" style={{fontSize:20}}>
                            Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.
                        </p>
                        <Collapsible />
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselGuide;