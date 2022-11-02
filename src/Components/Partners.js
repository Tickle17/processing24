
import sercificate1 from "./imgs/image 1.svg"
import sercificate2 from "./imgs/image 1 (1).svg"

import lukoil from "./imgs/LUK_OIL_Logo_kyr 1.svg"
import gazprom from "./imgs/gazprom.svg"
import rosneft from "./imgs/Rosneft_Logo 1.svg"
import tatneft from "./imgs/Tatneft-Logo 1.svg"

import 'react-slideshow-image/dist/styles.css';
import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

class Example extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
  }
  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
    };
    const slideImages = [lukoil, gazprom,rosneft, tatneft,lukoil, gazprom];
    return (
      <div className="App">
        <div className="slide-container"  style={{width:"100%"}}>
          <Slide slidesToScroll={2} slidesToShow={4} indicators={true} autoplay={false} ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div style={{borderBottom:"0.2px ridge" }} key={index} className="each-slide">
                <img style={{width:"217px", height:"84px",marginBottom:"48px"}} className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    );
  }
}

export default Example;
