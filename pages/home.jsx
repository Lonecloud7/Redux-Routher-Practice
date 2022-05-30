import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Store/index";
import { bindActionCreators } from "redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home = () => {

    const dispatch = useDispatch();

    const {Withdraw, Deposit} = bindActionCreators(actionCreators, dispatch);
    const state1 = useSelector((state) => (state.accounts))
    return (
        <div className="home" style={{textAlign:"center"}}>
            <h1>HOME</h1>
            <h2>STATE 1:{state1}</h2>
            <Button onClick={() =>{
                Deposit(300);
            }}>
                add it up
            </Button>
            <Button onClick={() =>{
                Withdraw(300);
            }}>
                take it down
            </Button>
        </div>
    )
}

export default Home