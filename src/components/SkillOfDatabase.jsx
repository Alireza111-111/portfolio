import React from "react";
import Lottie from "lottie-react";
import animationData5 from "../animations/database.json";

function SkillOfDatabase() {
  return (
    <div>
      <div className="custom-skill-front">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Lottie animationData={animationData5} loop={true} />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 custom-skill-front-first-text">
              DATABASE
            </h1>
            <p className="lead custom-skill-front-first-text">
            
          I work with relational databases using <span className="custom-skill-p">SQL</span> and <span className="custom-skill-p">PostgreSQL</span>. 
          I focus on designing normalized, efficient, and scalable database schemas, writing optimized queries, and maintaining data integrity. 
          My experience includes building RESTful backends that interact with structured data, ensuring performance and reliability across applications.
            </p>
          
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SkillOfDatabase;