import { useState, useEffect } from "react";


const reducer1 = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

const reducer2 = (state = "", action) => {
  switch (action.type) {
    case "value":
      return (state = action.payload);
    default:
      return state;
  }
};

const initialState = {};

const newsStore = (state = initialState, action) => {
  switch (action.type) {
    case "search-keyword":
      return { ...action.payload };
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case "start-load":
      return (state = action.payload);
    case "end-load":
      return (state = action.payload);
    default:
      return state;
  }
};

export { reducer1, reducer2, newsStore,loading };
