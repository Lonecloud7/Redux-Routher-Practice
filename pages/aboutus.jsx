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
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

import { makeStyles } from "@mui/material";

const AboutUs = () => {
  const [value, setValue] = useState("");

  const [checked, setChecked] = useState(false);

  const [checkState, setCheckState] = useState(false);

  const Dispatch = useDispatch();

  // const useStyles = makeStyles({
  //   root:{
  //     background: "red",
  //     color:"blue",
  //   }
  // })

  // const TestColor = () => {
  //   const classes = useStyles();
  //   return <Button className={classes.root}> LETS SEE </Button>
  // }

  const { addValue, deleteValue } = bindActionCreators(
    actionCreators,
    Dispatch
  );

  const handleCheck = (e) => {
    setChecked(e.target.check)

    setCheckState((prev) => {
      return !prev
    })
  }

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

      {/* <TestColor />

      <br /> */}


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
        {ArrayReducer[0] && <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "gray" }}>
          <List>
            {ArrayReducer.map((value, index) => {
              return (
                <nav aria-label="main mailbox folders" key={index} id={index}>
                  <ListItem 
                  secondaryAction={
              <IconButton edge="end" >
                <DeleteIcon 
                  onClick={() => {
                        deleteValue(index);
                      }}
                />
              </IconButton>
            }
                  Padding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          onChange={handleCheck}
                         />
                      </ListItemIcon>
                      <ListItemText primary={value} style={{ textDecoration: checkState ?"line-Through" : "none" }}/>
                    </ListItemButton>
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
