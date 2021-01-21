import { actionTypes, urls } from "../../constants";
import { RSAA } from "redux-api-middleware";

export const fetchConfig = () => ({
    [RSAA]: {
        endpoint: urls.ENV_CONFIG,
        method: "GET",
        types: [
            {
                type: actionTypes.FETCH_CONFIG,
                meta: {
                    loading: true,
                },
            },
            {
                type: actionTypes.FETCH_CONFIG_SUCCESS,
                meta: {
                    loading: false,
                },
            },
            {
                type: actionTypes.FETCH_CONFIG_FAILED,
               
            },
        ],
    },
});

export const setQueryParams = params => ({
    type: actionTypes.SET_QUERY_PARAMS,
    params,
});

export const fetchContent = () => ({
    [RSAA]: {
        endpoint: urls.CONTENT_URL,
        method: "GET",
        types: [
            {
                type: actionTypes.FETCH_CONTENT,
                meta: {
                    loading: true,
                },
            },
            {
                type: actionTypes.FETCH_CONTENT_SUCCESS,
                meta: {
                    loading: false,
                },
            },
            {
                type: actionTypes.FETCH_CONTENT_FAILED,
            },
        ],
    },
});

export const getAccountList = () => ({
    [RSAA]: {
        endpoint: urls.GET_ACCOUNT_LIST,
        method: "GET",
        headers:{
            "x-bpi-version": "0.8.0",
        },
        types: [
            {
                type: actionTypes.FETCH_ACCOUNTS,
                meta: {
                    loading: true,
                },
            },
            {
                type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
                meta: {
                    loading: false,
                },
            },
            {
                type: actionTypes.FETCH_ACCOUNTS_FAILED,
            },
        ],
    },
});