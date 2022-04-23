import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Explore = () =>{

    const Navigate = useNavigate();
    const {linkAddOn} = useParams();

    return (
        <div className="menu" style={{textAlign:"center"}}>
            <h1>EXPLORE</h1>
            <h2>WE ARE {linkAddOn}</h2>

            <button
            onClick={() => {
                Navigate("/about");
            }}>
                ABOUT US
            </button>
        </div>
        
    )
}

export default Explore