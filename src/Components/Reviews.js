import React from "react";
import Example from "./ReviewsSlider";


export default function Reviews() {
  return(
    <div className="ReviewsSlider">
      <div className="reviewsSliderMain">
      <div className="sliderTitle">Отзывы</div>
      <div className="slider">
        <Example></Example>
      </div>
        <div style={{position:"relative",left:"38%"}} className="tab3">
          <button>Читать все отзывы</button>
        </div>
    </div></div>

  )
}