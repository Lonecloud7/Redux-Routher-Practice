import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../index";
// import { bindActionCreators } from "redux";

// // const dispatch = useDispatch();

//   const { } = bindActionCreators(actionCreators, dispatch);

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

export const startLoad = () => {
  return (dispatch) => {
    dispatch({
      type: "start-load",
      payload: true,
    })
  }
}

export const stopLoad = () => {
  return (dispatch) => {
    dispatch({
      type: "end-load",
      payload: false,
    })
  }
}

export const searchNews = (keyword) => {
  startLoad()
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
      stopLoad()
    } catch (err) {
      console.log(err);
    }
  };

  
};

export const addValue = (value) => {

  return (dispatch) => {
    dispatch({
      type:"insert",
      payload:value,
    })
  }
}

export const deleteValue = (id) => {

  return (dispatch) => {
    dispatch({
      type:"delete",
      payload:id,
    })
  }
}
