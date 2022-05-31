import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Store";
import { bindActionCreators } from "redux";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const Explore = () => {
  const Navigate = useNavigate();
  const { linkAddOn } = useParams();

  const [keyword, setKeyword] = useState("");
  const [pageView, setPageView] = useState(0);
  // const [load, setLoad] = useState(false)

  const newNews = useSelector((state) => state.news);
  const load = useSelector((state) => state.loadState);

  const dispatch = useDispatch();

  const { searchNews } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    
  }, [newNews]);

  const getNews = (e) => {

    e.preventDefault();
    
    if (keyword != "") {
      searchNews(keyword);
    }
    setKeyword("");
    setPageView(6);
  };

  return (
    <div className="menu" style={{ textAlign: "center" }}>
      <h1>EXPLORE</h1>

      <h2>WE ARE {linkAddOn}</h2>
      <Button
        onClick={() => {
          Navigate("/about");
        }}
        variant="outlined"
      >
        ABOUT US
      </Button>

      <h2>Find out more</h2>
      <form onSubmit={getNews}>
        <TextField
          label="Find News"
          type="search"
          variant="outlined"
          placeholder="search here"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </form>
      <br />

      <Button
        onClick={() => {
          getNews();
        }}
        variant="outlined"
      >
        FETCH
      </Button>

      <br />

      <div className="news-show">
        {newNews.articles && (
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
        )}
      </div>

      {load && <h1> LOADING</h1>}
          
      

      {newNews.articles && (
        <Button
          onClick={() => {
            setPageView(3 + pageView);
          }}
        >
          View more
        </Button>
      )}
      {newNews.articles && (
        <Button
          onClick={() => {
            setPageView(pageView - 3);
          }}
        >
          View less
        </Button>
      )}
    </div>
  );
};

export default Explore;
