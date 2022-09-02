import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
const Testimonials = () => {
  //selected is curent active review
  const [selected, setSelected] = useState(0);
  const tLenth = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span> Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          -{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLenth - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="leftArrow"
          />
          <img 
          onClick={()=>{
            selected===tLenth-1 ?
            setSelected(0): setSelected((prev)=> prev+1)
          }}
           src={rightArrow} alt="rightArrow" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
