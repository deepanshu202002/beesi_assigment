import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import {useSpring,animated} from "react-spring"
import "./style.css";

export const Frame = () => {
     const [flip,setFlip] =useState(false);
     const props = useSpring({
        to:{opacity:1},
        from:{opacity:0},
        reset:true,
        reverse:flip,
        delay:200,
        onRest:()=>setFlip(!flip),
     })
  return (
    <div className="frame">
      <div className="div">
        <h1>How It works</h1>
        <div className="overlap">
          <img className="arrow" alt="Arrow" src="https://c.animaapp.com/qEodK6vH/img/arrow-1.svg" />
          <img className="vector" alt="Vector" src="https://c.animaapp.com/qEodK6vH/img/vector-5.svg" />
          <img className="img" alt="Vector" src="https://c.animaapp.com/qEodK6vH/img/vector-6@2x.png" />
          <div className="step-set-your-goal">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step 1:
            <br />
            <span> 
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Set Your Goal")
                        .pauseFor(1000)
                        .start();
                }}
            />
            </span>
            
          </div>
        </div>
        <div className="overlap-group">
          <div className="frame-wrapper">
            <div className="div-2">
              <img className="img-2" alt="Frame" src="https://c.animaapp.com/qEodK6vH/img/frame-3.svg" />
              <p className="step-pay-amount-on slide-up">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step 3:
                <br />
                Pay amount <br />
                &nbsp;&nbsp;&nbsp;&nbsp;on Time
              </p>
            </div>
          </div>
          <img className="img-3" alt="Frame" src="https://c.animaapp.com/qEodK6vH/img/frame-2.svg" />
          <div className="div-3 " >
            <img className="img-4" alt="Frame" src="https://c.animaapp.com/qEodK6vH/img/frame-1@2x.png" />
            <img className="vector-2" alt="Vector" src="https://c.animaapp.com/qEodK6vH/img/vector-1@2x.png" />
            <div className="step-earn-rewards slide-left">
              Step 4: <br />
              &nbsp;&nbsp;Earn
              <br />
              Rewards
            </div>
          </div>
          <img className="img-5" alt="Frame" src="https://c.animaapp.com/qEodK6vH/img/frame.svg" />
        </div>
        <div className="div-4">
          <img className="vector-3" alt="Vector" src="https://c.animaapp.com/qEodK6vH/img/vector-2@2x.png" />
          <p className="step-create-or slide-right" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step 2:
            <br />
            Create or Join <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Group
          </p>
        </div>
      </div>
    </div>
  );
};
