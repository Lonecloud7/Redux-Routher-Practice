import { combineReducers } from "redux";
import { reducer1 } from "./accountreducer";

const reducers = combineReducers({
    accounts:reducer1,
})

export default reducers;