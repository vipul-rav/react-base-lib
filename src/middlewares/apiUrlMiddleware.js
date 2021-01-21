import { isRSAA, RSAA } from "redux-api-middleware";
import  configSelectors  from "../selectors";

const apiUrlMiddleware = store => next => (action) => {
    if (!isRSAA(action)) {
        return next(action);
    }

    const storeState = store.getState();
    
    const accessToken = configSelectors.accessToken(storeState);

    const urlSelectors = {
        "apiBaseUrl": configSelectors.apiBaseUrl,
        "bankId": configSelectors.bankId,
    };

    const endpoint = Object.keys(urlSelectors).reduce(
        (curEndpoint, selectorKey) => curEndpoint.replace(selectorKey, urlSelectors[selectorKey](storeState)),
        action[RSAA].endpoint
    );

    const clientContext = {
        env: {
            platform : `${configSelectors.bankId(storeState)} Web`,
            platform_version:  navigator.appVersion || navigator.vendor || window.opera,
            make: navigator.platform || window.opera,
        },
        client: {
            app_title:  `${configSelectors.bankId(storeState)} Web`,
            user_tracking_id:"b251d9400fcbfe728866b60a69f6bf32",
        },
    };

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-bpi-client-context": JSON.stringify(clientContext),
        "x-bpi-service-context":"USER",
    };

    if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
    }

    return next({
        ...action,
        [RSAA]: {
            ...action[RSAA],
            headers: {
                ...action[RSAA].headers,
                ...headers,
            },
            endpoint,
        },
    });
};

export default apiUrlMiddleware;
