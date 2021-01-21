import { combineReducers } from "redux";

import config from "./config";
import loader  from "./loader";

const rootReducer = combineReducers({
    loader,
    config,
});

export default rootReducer;
