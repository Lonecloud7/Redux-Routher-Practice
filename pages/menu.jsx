import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Store";
import { bindActionCreators } from "redux";
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Blogs = () =>{

    const display = useSelector((state) => state.inputValue)

    const dispatch = useDispatch()

    const {inputValue} = bindActionCreators(actionCreators, dispatch)
    

    return (
        <div className="menu" style={{textAlign:"center"}}>
            <h1>BLOGS</h1>
            <h2>STATE 2:{display}</h2>
            <TextField
            label="Write Here Nigga"
            multiline
            rows={4}
            variant="outlined"
            type="text"
            color="success"
            value={display}
            onChange={e => {inputValue(e.target.value)}}
            >

            </TextField> 
        </div>
    )
}

export default Blogs