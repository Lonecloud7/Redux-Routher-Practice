import { combineReducers } from "redux";
import { reducer1, reducer2, newsStore, loading } from "./accountreducer";

const reducers = combineReducers({
    accounts:reducer1,
    inputValue:reducer2,
    news:newsStore,
    loadState:loading,
})

export default reducers;