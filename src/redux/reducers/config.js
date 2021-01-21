import { actionTypes } from "../../constants";

const config = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.FETCH_CONFIG_SUCCESS:
            return { ...state, envUrl: action.payload };
        case actionTypes.SET_QUERY_PARAMS:
            return {
                ...state,
                ...action.params,
            };
        case actionTypes.FETCH_CONTENT_SUCCESS:
            console.log(action.payload);
            return { ...state, externalContent: action.payload };
        case actionTypes.FETCH_ACCOUNTS_SUCCESS:
        case actionTypes.FETCH_ACCOUNTS_DETAILS_SUCCESS:
            return state;
        default:
            return state;
    }
};

export default config;
