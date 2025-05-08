import React from "react";
import profileImage from "../image/profile.png";
import ContactButton from "./ContactButton";

function About() {
  return (
    <div className="custom-about-1">
      <div className="container py-5 custom-about-2">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 custom-about-box shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 custom-about-text">
              Hi! I’m Alireza Zandi,
            </h1>
            <p className="lead custom-about-text">
              a passionate web developer with skills in both front-end and
              back-end development, as well as database management. I’ve
              recently started my journey as a programmer, and I’m fully
              dedicated to learning and growing every day.
              <br />
              <br />
              I truly enjoy writing code — so much that I often spend my free
              time coding, experimenting, and building new things behind my
              laptop. Whether it’s crafting a responsive user interface or
              setting up a solid back-end structure, I love every step of the
              process.
              <br />
              <br />
              I’m always looking for opportunities to improve my skills and
              take on new challenges. If you’d like to connect or collaborate,
              feel free to reach out!
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <ContactButton />
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src={profileImage}
              alt="Hero"
              width="720"
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;