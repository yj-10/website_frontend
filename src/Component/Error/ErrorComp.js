import React from "react";
import { Link } from "react-router-dom";

function ErrorComp() {
  return (
    <div id="errorcomp">
      <div id="errortext">
        <h2> 404</h2>
        <h4> Oppss ! Page Not found</h4>
        <p>
          {" "}
          Sorry , the page you 're looking for does not exist ,if you think
          something is broken please reporte
        </p>
        <div id="btns">
          <Link id="button" to="/">
            Return Home
          </Link>
          <Link id="button" to="/">
            report Problem
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorComp;
