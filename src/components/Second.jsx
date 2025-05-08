import React from "react";

function Second() {
  return (
    <div className="custom-second-first-bg py-5">
      <div className="container">
        <div className="p-5 text-center custom-second-second-bg rounded-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="#EEEEEE"
            className="bi bi-code mb-3"
            viewBox="0 0 16 16"
          >
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
          </svg>
          <h1 className="custom-second-text mb-4">Technologies Used</h1>

          <div className="row mt-4">
            <div className="col-md-6 col-12 mb-4">
              <div className="h-100 custom-card">
                <span className="border-line left"></span>
                <span className="border-line right"></span>

                <div className="card-body">
                  <h2 className="card-title custom-second-first-h2">Develop</h2>
                  <p className="card-text">
  JavaScript , 
  React.js , 
  Node.js , 
  Express.js 
</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mb-4">
              <div className="h-100 custom-card">
                <span className="border-line left"></span>
                <span className="border-line right"></span>

                <div className="card-body">
                  <h2 className="card-title custom-second-second-h2">Design</h2>
                  <p className="card-text">
                  HTML , 
                  CSS , 
                  Bootstrap , 
                  LottieFiles 

                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Second;