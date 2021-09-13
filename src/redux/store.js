import { combineReducers, createStore } from "redux";
import offersReducer from "./reducers/offersReducer";


let reducers = combineReducers({
    offersData: offersReducer
});

let store = createStore(reducers)

export default store