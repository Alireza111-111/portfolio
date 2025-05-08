import React from "react";
import Lottie from "lottie-react";
import animationData1 from "../animations/robot.json";

function First() {
  return (
    <div className="custom-first">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          
          <div className="col-10 col-sm-8 col-lg-6">
            <Lottie
              animationData={animationData1}
              loop={true}
              autoplay={true}
            />
          </div>

          <div className="col-lg-6">
          <h1 className="fw-bold lh-1 mb-3 custom-first-text">
  Hi, I'm Alireza <br /> a passionate <br />Full-Stack Developer <br />and a Student who loves <code className="custom-first-text-code">coding</code>.
</h1>

          </div>
        </div>
      </div>
    </div>
  );
}

export default First;