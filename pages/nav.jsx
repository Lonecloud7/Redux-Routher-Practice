import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={"nav"}>
      <nav>
        <ul>
          <h2>
            <Link to="/">HOME</Link>
          </h2>
          <h2>
            <Link to="/blogs">BLOGS</Link>
          </h2>
          <h2>
            <Link to="/explore">EXPLORE</Link>
          </h2>
          <h2>
            <Link to="/about">ABOUT US</Link>
          </h2>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
