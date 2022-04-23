import { combineReducers } from "redux";
import { reducer1, reducer2 } from "./accountreducer";

const reducers = combineReducers({
    accounts:reducer1,
    inputValue:reducer2,
})

export default reducers;