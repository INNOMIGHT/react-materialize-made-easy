import React, { Component } from "react";
import M from "materialize-css";
import image1 from "./../images/sub-blue.png";
import { Link, withRouter } from "react-router-dom";

class Sidenav extends Component {
    componentDidMount() {
            const options = {
              inDuration: 250,
              outDuration: 200,
              draggable: true
            };
        M.Sidenav.init(this.Sidenav, options)

    let instance = M.Sidenav.getInstance(this.Sidenav);
    // instance.open();
    console.log(instance.isOpen);
    }
    render() {
        return (
            <div>
                <ul ref={(Sidenav) => {
                    this.Sidenav = Sidenav;
                }}
                    id="slide-out"
                    className="sidenav sidenav-closed">
                    <li>
                        <div className="user-view">
                              <div className="background">

                                <img src={image1} />
                              </div>
                              <Link to="/">
                                  <h3 className="white-text" style={{marginBottom: 20+'px'}}>Logo</h3>
                                  <br />
                              </Link>
                        </div>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="getting-started">Getting Started</a>
                    </li>
                    <div className="divider" />
                </ul>
                        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">Trigger Button (Wont do anything as my sidenav is fixed)</i>
        </a>
            </div>
        )
    }
}

export default withRouter(Sidenav);