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


    const [link, setLink] = useState(true)

    const accounts = useSelector((state) => state);

    const dispatch = useDispatch();

    const {Withdraw, Deposit} = bindActionCreators(actionCreators, dispatch);



  return (
    <div className={"router"}>
      <h1 style={{ textAlign: "center" }}>ROUTER/REDUX PRACTICE</h1>
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
