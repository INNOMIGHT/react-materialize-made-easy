import React, { Component } from 'react';


class GettingStarted extends Component {
    render() {
        return(
            <div className="starter-wrapper">
                <div className="row">
                    <div className="col s9 offset-s3">
                        <h3 className="header cyan-text" style={{fontWeight: 300}}>Getting Started</h3>
                        <div className="card-panel">
                            <span className="cyan-text">
                                <h5 className="header" style={{fontWeight: 300}}>Clone the react-materialize-made-easy repository</h5>
                            </span>
                            <p className="flow-text" style={{fontWeight:350, fontSize:18}}>
                                To clone, enter in your terminal -
                                <blockquote>git clone [github url]</blockquote>
                                Now, you can use any javascript component you want simply by importing it in your project from components folder inside this repository.
                                To do so, follow these steps -
                                <ol>
                                    <li>
                                        Copy whatever component file you want from the components folder of the cloned repository to your components folder.
                                    </li>
                                    <li>
                                        Import the component in the file you want to use it.
                                    </li>
                                    <li>
                                        Example, if you want to use it in App.js file, import it using -
                                        <blockquote>import Sidenav from "./components/sidenav" ;</blockquote>
                                    </li>
                                    <li>
                                        Use it simply by using &lt;Sidenav /&gt; inside your render method.
                                    </li>
                                </ol>
                                Below are guides to help you set up React and Materialize.
                            </p>

                    </div>

                        <div className="card-panel">
                            <span className="cyan-text">
                                <h5 className="header" style={{fontWeight: 300}}>Install React Documentation Guide - </h5>
                            </span>
                            <p className="flow-text" style={{fontWeight:350, fontSize:18}}>
                                    To install react, visit <a href="https://reactjs.org/docs/getting-started.html">ReactJS Documentation</a>.
                            </p>
                    </div>
                        <div className="card-panel">
                            <span className="cyan-text">
                                <h5 className="header" style={{fontWeight: 300}}>Setting up Materialize CSS With React - </h5>
                            </span>
                            <p className="flow-text" style={{fontWeight:350, fontSize:17}}>
                                After creating your react app, go into public directory and open index.html.
                                In index.html, use materialize CDN for css and javascript using the steps below -
                                <ol>
                                    <li>Inside head tag add the following - <br /><blockquote>&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"&gt;</blockquote></li>
                                    <li>Inside body tag add the following - <br /><blockquote>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" /&gt;</blockquote></li>
                                    <li>Install the required files using - <br />
                                        <blockquote>npm install materialize-css@next</blockquote>
                                        and, <blockquote>npm install materialize-css</blockquote>
                                    </li>
                                </ol>
                                Now you are good to go. Now you can just import the components and use in your projects as shown in components section!
                            </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default GettingStarted;