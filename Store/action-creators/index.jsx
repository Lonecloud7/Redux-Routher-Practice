import { useState, useEffect } from "react";

export const Deposit = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const Withdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const inputValue = (input) => {
  return (dispatch) => {
    dispatch({
      type: "value",
      payload: input,
    });
  };
};

export const searchNews = (keyword) => {
  const key = "aec9ac0f87f04b9686f66beb5ec8d954";
  var url = `https://newsapi.org/v2/everything?q=${keyword}&from=2022-05-07&sortBy=popularity&apiKey=${key}`;

  return async (dispatch) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "search-keyword",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  
};
