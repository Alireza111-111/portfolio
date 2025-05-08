import React from "react";
import Lottie from "lottie-react";
import animationData3 from "../animations/frontend.json";


function SkillOfFrontend() {
  return (
    <div>
      <div className="custom-skill-front">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Lottie animationData={animationData3} loop={true} />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 custom-skill-front-first-text">
              FRONTEND
            </h1>
            <p className="lead custom-skill-front-first-text">
            I design and develop responsive, interactive, and accessible user interfaces using modern frontend technologies.
      My main stack includes <span className="custom-skill-p">React.js</span>,{" "}
      <span className="custom-skill-p">HTML5</span>,{" "}
      <span className="custom-skill-p">CSS3</span>,{" "}
      <span className="custom-skill-p">JavaScript</span>, and{" "}
      <span className="custom-skill-p">Bootstrap</span>.
      I focus on creating clean code and seamless UI experiences that work perfectly across all devices and browsers.
            </p>
          
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SkillOfFrontend;






