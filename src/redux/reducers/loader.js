const initialState = {
    loading: false,
};

const loader = (state = initialState, action) => {
    if (action.meta && action.meta.loading !== undefined) {
        return { ...state, loading: action.meta.loading };
    }
    return state;
};

export { loader };
