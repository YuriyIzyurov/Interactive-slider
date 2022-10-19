import React from "react";
import "./../assets/scss/WheelSlider.scss";

const WheelSlider = () => {
  return (
    <div className="wheel_section">
      <div className="half-slider">
        <div className="rotate-slider">
          <ul id="rotate-carousel">
            <li className="item1">
              <a href="1">
                <div>1</div>
              </a>
            </li>
            <li className="item2">
              <a href="2">
                <div>2</div>
              </a>
            </li>
            <li className="item3">
              <a href="3">
                <div>3</div>
              </a>
            </li>
            <li className="item4">
              <a href="4">
                <div>4</div>
              </a>
            </li>
            <li className="item5">
              <a href="5">
                <div>5</div>
              </a>
            </li>
            <li className="item6">
              <a href="6">
                <div>6</div>
              </a>
            </li>
          </ul>
          <div className="dates"></div>
        </div>
      </div>
    </div>
  );
};

export default WheelSlider;
