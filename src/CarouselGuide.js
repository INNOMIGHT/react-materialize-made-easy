import React, { Component } from 'react';
import Carousel from "./components/carousel";

class CarouselGuide extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="row">
                    <div className="col s9 offset-s3">
                        <span className="cyan-text">
                        <h3 className="header" style={{fontWeight:300}}>Carousel</h3></span>
                        <div className="divider" />
                        <p className="flow-text" style={{fontSize:20}}>
                            Our Carousel is a robust and versatile component that can be an image slider, to an item carousel, to an onboarding experience. It is touch enabled making it especially smooth to use on mobile.

Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.
                        </p>
                        <Carousel />
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselGuide;
