import React from "react";
import Lottie from "lottie-react";
import animationData2 from "../animations/loading.json";

function Skills() {
  return (
    <div
      className="custom-skills py-3 d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "250px", maxHeight: "250px", overflow: "hidden" }}
    >
      <div className="w-75 mb-3 custom-skills-border"></div>

      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-4 col-md-3 d-none d-sm-block">
            <div style={{ maxWidth: "100px", margin: "0 auto" }}>
              <Lottie animationData={animationData2} loop={true} />
            </div>
          </div>

          <div className="col-12 col-sm-4 col-md-6 custom-skills-text">
            <h1 className="fw-bold m-0">SKILLS</h1>
          </div>

          <div className="col-4 col-md-3 d-none d-sm-block">
            <div style={{ maxWidth: "100px", margin: "0 auto" }}>
              <Lottie animationData={animationData2} loop={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-75 mt-3 custom-skills-border"></div>
    </div>
  );
}

export default Skills;