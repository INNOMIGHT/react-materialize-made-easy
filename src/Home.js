import React, { Component } from 'react';


class Home extends Component {
    render() {
        return(
            <div className="home-wrapper">
                <div className="row">
                    <div className="col s9 offset-s3">
                        <div className="row">
                            <div className="col s11" style={{ marginLeft: -10+'px'}}>
                                <br />
                                <div className="card-panel">
                                    <span className="cyan-text">
                                        <h3 className="header" style={{ fontWeight: 300}}>
                                            Why use this?
                                        </h3>
                                        <div className="divider" />
                                    </span>
                                    <br />
                                    <span className="black-text">
                                        This repository and guide is made to simplify using Materialize with react.
                                        Using CSS part is simple but using Materialize-Javascript Components in React
                                        is extra work. Using this, you can simply import and use every materialize js
                                        component effectively within seconds.
                                        This repository and guide is published by &nbsp;
                                        <a href="https://vaibhavshrivastava.me/">Vaibhav Shrivastava</a>.
                                        <br />
                                        Visit Getting Started section to get started with using this repository.
                                    </span>
                                    <span className="cyan-text">
                                        <h3 className="header" style={{ fontWeight: 300}}>
                                        Everything has been done for you.
                                        </h3>
                                        <div className="divider" />
                                    </span>
                                    <br />
                                    <span className="black-text">
                                        You just need to clone the repository and import the component you want and voila! <br />
                                        Make sure you have the following required work done -
                                        <br />
                                      
                                        <ul className="collection" style={{ marginTop:15+'px'}}>
                                            <li className="collection-item">You have react installed.</li>
                                            <li className="collection-item">You have materialize css installed.</li>
                                            <li className="collection-item">You have basic understanding of react and javascript.</li>
                                        </ul>
                                        If you need any help with the above mentioned tasks, check our getting started guide.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;