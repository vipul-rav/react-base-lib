import { actionTypes, urls } from '../../constants';
import { RSAA, getJSON } from 'redux-api-middleware';

export const getAccountList = () => ({
    [RSAA]: {
        endpoint: urls.GET_ACCOUNT_LIST,
        method: 'GET',
        headers: {
            'x-bpi-version': '0.8.0',
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
                payload: (_action, _state, res) =>
                    getJSON(res).then((json) => {
                        res.json = json;
                        return json;
                    }),
                meta: (_action, _state, res) => {
                    return ({ nextAction: getAccountDetails(res.json.accounts[0].id), loading: true });
                },
            },
            {
                type: actionTypes.FETCH_ACCOUNTS_FAILED,
            },
        ],
    },
});

export const getAccountDetails = accountId => ({
    [RSAA]: {
        endpoint: `${urls.GET_ACCOUNT_BY_ID}${accountId}`,
        method: 'GET',
        headers: {
            'x-bpi-version': '0.8.0',
        },
        types: [
            {
                type: actionTypes.FETCH_ACCOUNTS_DETAILS,
                meta: {
                    loading: true,
                },
            },
            {
                type: actionTypes.FETCH_ACCOUNTS_DETAILS_SUCCESS,
                meta: {
                    loading: false,
                },
            },
            {
                type: actionTypes.FETCH_ACCOUNTS_DETAILS_FAILED,
            },
        ],
    },
});