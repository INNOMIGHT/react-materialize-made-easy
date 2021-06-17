import React, { Component } from 'react';
import Dropdown from "./components/dropdown";
import Carousel from "./components/carousel";


class DropdownGuide extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="row">
                    <div className="col s9 offset-s3">
                        <span className="cyan-text">
                        <h3 className="header" style={{fontWeight:300}}>Dropdown</h3></span>
                        <div className="divider" />
                        <p className="flow-text" style={{fontSize:20}}>
                            Add a dropdown list to any button. Make sure that the data-target attribute matches the id in the &lt;ul&gt; tag. You can add a divider with the &lt;li&gt; class="divider"&gt;&lt;/li&gt; tag. You can also add icons. Just add the icon inside the anchor tag.
                        </p>
                        <Dropdown />
                    </div>
                </div>
            </div>
        )
    }
}

export default DropdownGuide;