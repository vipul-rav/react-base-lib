import { actionTypes } from "../../constants";

export const initialState = {
    loading: true,
    showError: false,
};

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_QUERY_PARAMS:
            return {
                ...state,
                showError: action.params.bank_id ? false : true,
            };
        case actionTypes.FETCH_CONFIG_FAILED:
        case actionTypes.FETCH_CONTENT_FAILED:
        case actionTypes.FETCH_ACCOUNTS_FAILED:
            return { ...state, showError: true, loading: false };
    }
    if (action.meta && action.meta.loading !== undefined) {
        return { ...state, loading: action.meta.loading };
    }

    return state;
}
