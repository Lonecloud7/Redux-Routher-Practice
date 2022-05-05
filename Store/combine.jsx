import { combineReducers } from "redux";
import { reducer1, reducer2, newsStore } from "./accountreducer";

const reducers = combineReducers({
    accounts:reducer1,
    inputValue:reducer2,
    news:newsStore,
})

export default reducers;