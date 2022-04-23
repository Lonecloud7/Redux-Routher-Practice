import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Store";
import { bindActionCreators } from "redux";
const Blogs = () =>{

    const display = useSelector((state) => state.inputValue)

    const dispatch = useDispatch()

    const {inputValue} = bindActionCreators(actionCreators, dispatch)
    

    return (
        <div className="menu" style={{textAlign:"center"}}>
            <h1>BLOGS</h1>
            <h2>STATE 2:{display}</h2>
            <input 
            type="text"
            value={display}
            onChange={e => {inputValue(e.target.value)}}
            />  
        </div>
    )
}

export default Blogs