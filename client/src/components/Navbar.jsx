import React from "react";
import Link from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="logo">Log</div>
      <div>
        <Link className="link">
          <h6>ART</h6>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
