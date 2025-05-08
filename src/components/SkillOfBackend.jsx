import React from "react";
import Lottie from "lottie-react";
import animationData4 from "../animations/backend.json";

function SkillOfBackend() {
  return (
    <div className="custom-skill-front">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Lottie animationData={animationData4} loop={true} />
          </div>

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 custom-skill-front-first-text">
              BACKEND
            </h1>
            <p className="lead custom-skill-front-first-text">
            I build robust and scalable backend applications with a strong focus on performance, security, and clean architecture. 
  My backend toolkit includes <span className="custom-skill-p">Node.js</span>,{" "}
  <span className="custom-skill-p">NPM</span>,{" "}
  <span className="custom-skill-p">Express.js</span>,{" "}
  <span className="custom-skill-p">EJS</span>,{" "}
  <span className="custom-skill-p">REST</span>,{" "}
  <span className="custom-skill-p">APIs</span>,{" "}
  <span className="custom-skill-p">Authentication</span>,{" "}
  <span className="custom-skill-p">Bash Command Line</span>,{" "}
  <span className="custom-skill-p">Git</span>,{" "}
  <span className="custom-skill-p">GitHub</span>, and{" "}
  <span className="custom-skill-p">Version Control</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillOfBackend;