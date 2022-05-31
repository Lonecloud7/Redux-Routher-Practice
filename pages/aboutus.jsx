import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Store/index";
import { bindActionCreators } from "redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const AboutUs = () => {
  const [value, setValue] = useState("");

  const Dispatch = useDispatch();

  const { addValue, deleteValue } = bindActionCreators(
    actionCreators,
    Dispatch
  );

  const ArrayReducer = useSelector((state) => state.ArrayState);

  const onClick = (e) => {
    e.preventDefault();

    setValue("");
    addValue(value);
  };

  return (
    <div className="aboutus" style={{ textAlign: "center" }}>
      <h1>ABOUT US</h1>
      <br />


      <h2>STATE 3:</h2>
      <form onSubmit={onClick}>
        <TextField
          label="Add To List"
          variant="outlined"
          type={"search"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          inputProps={{
            autoComplete: "off",
          }}
          value={value}
        />
      </form>

      <div>
        {ArrayReducer[0] && <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "black" }}>
          <List>
            {ArrayReducer.map((value, index) => {
              return (
                <nav aria-label="main mailbox folders" key={index} id={index}>
                  <ListItem Padding>
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={value} />
                    </ListItemButton>
                    <Button
                      onClick={() => {
                        deleteValue(index);
                      }}
                    >
                      DELETE
                    </Button>
                  </ListItem>
                </nav>
              );
            })}
          </List>
        </Box>}
      </div>
    </div>
  );
};

export default AboutUs;
