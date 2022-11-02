
import sercificate1 from "./imgs/image 1.svg"
import sercificate2 from "./imgs/image 1 (1).svg"

import left from "./imgs/arrow left.svg"
import right from "./imgs/arrow right.svg"

import 'react-slideshow-image/dist/styles.css';
import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

class Example extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
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
    const slideImages = [sercificate1, sercificate2,sercificate1, sercificate2,sercificate1, sercificate2];
    return (
      <div className="App">
        <div className="slide-container buttons" style={{}}>
          <img style={{width:"56px",height:"56px",position:"relative", left:"990px", top:"-40px"}} alt="" src={left}  onClick={this.back}/>
          <img style={{width:"56px",height:"56px",position:"relative", left:"1005px",top:"-40px"}} alt="" src={right}  onClick={this.next}/>

        </div>
        <div className="slide-container"  style={{width:"100%"}}>
          <Slide slidesToScroll={1} slidesToShow={4} indicators={false} autoplay={false} ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div style={{
          width:"257px",
          height:"357px",
          textAlign: 'center',
          background: 'white',
          boxShadow: "0px 0px 15px -8px rgba(0, 0, 0, 0.2)",
          padding: '28px 20px',
        }} key={index} className="each-slide">
                <img style={{width:"217px", height:"301.5px"}} className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>


      </div>
    );
  }
}

export default Example;
