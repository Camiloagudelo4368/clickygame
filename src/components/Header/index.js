import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header(props) {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
        <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12">
            <h1>Clicky Game</h1>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12">
            <h3 id="message">{props.message[0]}</h3>
            <h4>{props.message[1]}</h4>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12">
            <h2>Your Score: {props.yourScore}  | Best Score: {props.bestScore}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
