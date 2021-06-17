import React, { Component } from "react";
import M from "materialize-css";
import image1 from "./images/sub-blue.png";
import { Link, withRouter } from "react-router-dom";

class Sidenav extends Component {
    componentDidMount() {
        M.Sidenav.init(this.Sidenav)
    }
    render() {
        return (
            <div>
                <ul ref={(Sidenav) => {
                    this.Sidenav = Sidenav;
                }}
                    id="slide-out"
                    className="sidenav sidenav-fixed">
                    <li>
                        <div className="user-view">
                              <div className="background">
                                <img src={image1} />
                              </div>
                            <Link to="/react-materialize-made-easy">
                                  <h3 className="white-text" style={{marginBottom: 20+'px'}}>Innomight</h3>
                                  <br />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/react-materialize-made-easy">Why use this?</Link>
                    </li>
                    <li>
                        <a href="https://vaibhavshrivastava.me/">About the Author</a>
                    </li>
                    <li>
                        <Link to="/getting-started">Getting Started</Link>
                    </li>
                    <div className="divider" />
                    <li>
                        <Link to="/components">Components</Link>
                    </li>
                    <li>
                        <Link to="/carousel">Carousel</Link>
                    </li>
                    <li>
                        <Link to="/collapsible">Collapsible</Link>
                    </li>
                    <li>
                        <Link to="/dropdown">Drop Down</Link>
                    </li>
                    <li>
                        <Link to="/modal">Modals</Link>
                    </li>
                    <li>
                        <Link to="/sidenav">Sidenav</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Sidenav);