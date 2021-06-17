import React from "react";
import {Link, withRouter} from "react-router-dom";


function Navigation(props){
    return (
        <div className="wrapper" style={{paddingLeft: 300+'px'}}>
            <div className="">
                <nav className="cyan darken-1" role="navigation">
                    <div className="nav-wrapper" style={{marginLeft:30+'px'}}>
                        <Link to="/" className="brand-logo white-text-text">React Materialize Made Easy</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default withRouter(Navigation);