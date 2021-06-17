import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class Collapsible extends Component {
    componentDidMount() {
        M.Collapsible.init(this.Collapsible3)
    }
    render() {
        return (
            <ul ref={Collapsible => {
                this.Collapsible3 = Collapsible;
            }} className="collapsible">
                <li>
                    <div className="collapsible-header">First</div>
                    <div className="collapsible-body"><span>First Card.</span></div>
                </li>
                <li>
                    <div className="collapsible-header">Second</div>
                    <div className="collapsible-body"><span>Second Card</span></div>
                </li>
                <li>
                    <div className="collapsible-header">Third</div>
                    <div className="collapsible-body"><span>Third Card</span></div>
                </li>
            </ul>
        )
    }
}

export default Collapsible;