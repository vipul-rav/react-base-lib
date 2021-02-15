import 'whatwg-fetch';
import React from 'react';
import { connect , Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './screens/App';
import { store } from './redux/store';

const BaseAppClassComponent = ({ ...props }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App {...props} />
            </BrowserRouter>
        </Provider>
    );
};

const mapStateToProps = (state) => {
    return {
        loader: state.loader,
        state,
    };
};

const BaseAppClass = connect(mapStateToProps)(BaseAppClassComponent);

export { BaseAppClass };
