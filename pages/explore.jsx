import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Store";
import { bindActionCreators } from "redux";

const Explore = () => {
  const Navigate = useNavigate();
  const { linkAddOn } = useParams();

  const [keyword, setKeyword] = useState("");
  const [pageView, setPageView] = useState(6);

  const newNews = useSelector((state) => state.news);

  const dispatch = useDispatch();

  const { searchNews } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    console.log(newNews);
  }, [newNews]);

  const getNews = (e) => {
    if (keyword != "") {
      searchNews(keyword);
    }
    setKeyword("");
    setPageView(6)
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
        <input
          type="text"
          placeholder="search here"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </form>

      <button
        onClick={() => {
          getNews();
        }}
      >
        FETCH!
      </button>

      <br />

      <div className="news-show">
        {newNews.articles ? (
          newNews.articles.slice(0, pageView).map((value, index) => {
            const { title, content, urlToImage, url } = value;

            return (
              <nav key={index}>
                <h2>{title}</h2>
                <a href={url}>
                  <img src={urlToImage} alt="" />
                </a>
                <p>{content}</p>
              </nav>
            );
          })
        ) : (
          <h1> LOADING</h1>
        )}
      </div>

      {newNews.articles && <button
                  onClick={() => {
                    setPageView(3 + pageView)
                  }}
                >
                View more
                </button>}
    </div>
  );
};

export default Explore;
