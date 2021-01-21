import "whatwg-fetch";
import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

export class BaseAppClass extends Component {
   
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter >
                    <App {...this.props}/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default (BaseAppClass);