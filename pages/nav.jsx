import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <div className={"nav"}>
      <Stack spacing={2} direction="row"></Stack>
      <nav>
        <ul>
          <h2>
            <Link to="/" color="inherit">
              <Button variant="contained">HOME</Button>
            </Link>
          </h2>
          <h2>
            <Link to="/blogs">
              <Button variant="contained">BLOGS</Button>
            </Link>
          </h2>
          <h2>
            <Link to="/explore">
              <Button variant="contained">EXPLORE</Button>
            </Link>
          </h2>
          <h2>
            <Link to="/about">
              <Button variant="contained">ABOUT US</Button>
            </Link>
          </h2>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
