import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Explore = () => {
  const Navigate = useNavigate();
  const { linkAddOn } = useParams();

  const [array, setArray] = useState([]);
  const key = "aec9ac0f87f04b9686f66beb5ec8d954";
  var url = `https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-04-26&' +
          'sortBy=popularity&' +
          'apiKey=${key}`;

  const fetch = async (e) => {

    const res = await fetch(url)
    const data = await res.json();
    setArray(data)

    console.log(array.slice(0, 6));
    
  };

  return (
    <div className="menu" style={{ textAlign: "center" }}>
      <h1>EXPLORE</h1>

      <h2>Find out more</h2>
      <form action="">
        <input type="text" placeholder="search here" />
      </form>

      <button onClick={fetch}>FETCH!</button>

      <br />
      <h2>WE ARE {linkAddOn}</h2>
      <button
        onClick={() => {
          Navigate("/about");
        }}
      >
        ABOUT US
      </button>
    </div>
  );
};

export default Explore;
