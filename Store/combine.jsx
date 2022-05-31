import { combineReducers } from "redux";
import { reducer1, reducer2, newsStore, loading, Array } from "./accountreducer";

const reducers = combineReducers({
    accounts:reducer1,
    inputValue:reducer2,
    news:newsStore,
    loadState:loading,
    ArrayState:Array,
})

export default reducers;