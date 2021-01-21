import { push } from "react-router-redux";

const historyMiddleware = ({dispatch}) => next => (action) => {
    const result = next(action);
    if (action.path) {
        dispatch(push(action.path));
    }
    return result;
};

export default historyMiddleware;
