
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
          <Slide slidesToScroll={1} slidesToShow={2} indicators={false} autoplay={false} ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div style={{
                width:"545px",
                height:"368px",
                background: 'white',
                padding: '28px 20px',
              }} key={index} className="each-slide">
                <div style={{width:"545", height:"368"}}>
                  <div style={{marginBottom:"12px"}}>"(name)"</div>
                  <div style={{marginBottom:"40px"}}>"(profession)"</div>
                  <div style={{marginBottom:"77px"}}>"(Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem blanditiis commodi ea est facilis harum, iure libero, minus, nam neque nisi nostrum perferendis sed soluta sunt unde veniam voluptatem.)"</div>
                  <a style={{color:"#098FCF"}} href="">Подробнее</a>
                </div>
              </div>
            ))}
          </Slide>
        </div>


      </div>
    );
  }
}

export default Example;
