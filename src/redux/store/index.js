import { createStore, applyMiddleware, compose } from "redux";
import { apiUrlMiddleware, nextActionMiddleware, historyMiddleware }from "../../middlewares";
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";
import { history }  from "../../routes";

const allMiddleware = [
    apiUrlMiddleware,
    apiMiddleware,
    nextActionMiddleware,
    historyMiddleware,
    thunk,
];

if (process.env.NODE_ENV !== "production") {
    allMiddleware.push(immutableStateInvariantMiddleware());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...allMiddleware, routerMiddleware(history))),
);

