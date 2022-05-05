import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Explore = () => {
  const Navigate = useNavigate();
  const { linkAddOn } = useParams();

  const [news, setNews] = useState();

  const newNews = useSelector(state => (state.news))


  const key = "aec9ac0f87f04b9686f66beb5ec8d954";
  var url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

  const Fetch = async (e) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setNews(data);
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

      <div className="news-show">
        {news ?
          news.articles.slice(0, 6).map((value, index) => {
            const { title, content, urlToImage,url } = value;

            return (
              <nav key={index}>
                
                    <h2>{title}</h2>
                    <a href={url}>
                    <img src={urlToImage} alt="" />
                    </a>
                    <p>{content}</p>
                  
              </nav>
            );
          }) : <h1> LOADING</h1>}
      </div>
    </div>
  );
};

export default Explore;
