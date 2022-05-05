import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Explore = () => {
  const Navigate = useNavigate();
  const { linkAddOn } = useParams();

  const [array, setArray] = useState([{
    balls:"these nuts"
  }]);

  const key = "aec9ac0f87f04b9686f66beb5ec8d954";
  var url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=aec9ac0f87f04b9686f66beb5ec8d954`;

          const Fetch = async (e) => {
            try {
              const res = await fetch(url);
              const data = await res.json();
              setArray(data);

      
              ;
            } catch (err) {
              console.log(err);
            }
          };

  

  return (
    <div className="menu" style={{ textAlign: "center" }}>
      <h1>EXPLORE</h1>

      <h2>WE ARE {linkAddOn}</h2>
      <button
        onClick={() => {
          Navigate("/about");
        }}
      >
        ABOUT US
      </button>

      <h2>Find out more</h2>
      <form action="">
        <input type="text" placeholder="search here" />
      </form>

      <button onClick={Fetch}>FETCH!</button>

      <br />
      
      
    </div>
  );
};

export default Explore;
