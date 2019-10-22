import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function PageTitle() {
  return (
    <div className="pageTitle">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Clicky Game</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
