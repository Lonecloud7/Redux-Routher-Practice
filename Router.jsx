import React from "react";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Blogs from "./pages/menu";
import Nav from "./pages/nav";
import Explore from "./pages/explore";
import Error from "./pages/Error";
import "./styles/routerstlye.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./Store/index";

const RouterApp = () => {

    const [stateone, setStateone] = useState("");
    const [statetwo, setStatetwo] = useState("");
    const [statethree, setStatethree] = useState("");
    const [link, setLink] = useState(true)

    const accounts = useSelector((state) => state.accounts);

    const dispatch = useDispatch();

    const {Withdraw, Deposit} = bindActionCreators(actionCreators, dispatch);

    console.log(accounts);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ROUTER PRACTICE</h1>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path={`/explore`} element={<Explore />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default RouterApp;