'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('whatwg-fetch');
var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var PropTypes = _interopDefault(require('prop-types'));
var reactRouterDom = require('react-router-dom');
var history = require('history');
var redux = require('redux');
var reduxApiMiddleware = require('redux-api-middleware');
var modals = require('web-ui-components/lib/organisms/modals');
var global$1 = require('web-ui-components/lib/organisms/global');
var cards = require('web-ui-components/lib/organisms/cards');
var buttons = require('web-ui-components/lib/atoms/buttons');
var reactRouterRedux = require('react-router-redux');
var thunk = _interopDefault(require('redux-thunk'));
var immutableStateInvariantMiddleware = _interopDefault(require('redux-immutable-state-invariant'));

var ENV_CONFIG = "./_config/env.config.json";
var CONTENT_URL = "./_locale/en-GB/newapp.content.json";
var GET_ACCOUNT_LIST = "apiBaseUrl/banks/bankId/accounts/default";
var GET_ACCOUNT_BY_ID = "apiBaseUrl/banks/bankId/accounts/default/";

var FETCH_CONFIG = "FETCH_CONFIG";
var FETCH_CONFIG_SUCCESS = "FETCH_CONFIG_SUCCESS";
var FETCH_CONFIG_FAILED = "FETCH_CONFIG_FAILED";
var SET_QUERY_PARAMS = "SET_QUERY_PARAMS";
var FETCH_CONTENT = "FETCH_CONTENT";
var FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS";
var FETCH_CONTENT_FAILED = "FETCH_CONTENT_FAILED";
var FETCH_ACCOUNTS = "FETCH_ACCOUNTS";
var FETCH_ACCOUNTS_SUCCESS = "FETCH_ACCOUNTS_SUCCESS";
var FETCH_ACCOUNTS_FAILED = "FETCH_ACCOUNTS_FAILED";
var FETCH_ACCOUNTS_DETAILS = "FETCH_ACCOUNTS_DETAILS";
var FETCH_ACCOUNTS_DETAILS_SUCCESS = "FETCH_ACCOUNTS_DETAILS_SUCCESS";
var FETCH_ACCOUNTS_DETAILS_FAILED = "FETCH_ACCOUNTS_DETAILS_FAILED";
//redirect
var REDIRECT_SAMPLE2 = "REDIRECT_SAMPLE2";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var getAccountList = function getAccountList() {
    return defineProperty({}, reduxApiMiddleware.RSAA, {
        endpoint: GET_ACCOUNT_LIST,
        method: "GET",
        headers: {
            "x-bpi-version": "0.8.0"
        },
        types: [{
            type: FETCH_ACCOUNTS,
            meta: {
                loading: true
            }
        }, {
            type: FETCH_ACCOUNTS_SUCCESS,
            payload: function payload(_action, _state, res) {
                return reduxApiMiddleware.getJSON(res).then(function (json) {
                    res.json = json;
                    return json;
                });
            },
            meta: function meta(_action, _state, res) {
                return { nextAction: getAccountDetails(res.json.accounts[0].id), loading: true };
            }
        }, {
            type: FETCH_ACCOUNTS_FAILED
        }]
    });
};

var getAccountDetails = function getAccountDetails(accountId) {
    return defineProperty({}, reduxApiMiddleware.RSAA, {
        endpoint: "" + GET_ACCOUNT_BY_ID + accountId,
        method: "GET",
        headers: {
            "x-bpi-version": "0.8.0"
        },
        types: [{
            type: FETCH_ACCOUNTS_DETAILS,
            meta: {
                loading: true
            }
        }, {
            type: FETCH_ACCOUNTS_DETAILS_SUCCESS,
            meta: {
                loading: false
            }
        }, {
            type: FETCH_ACCOUNTS_DETAILS_FAILED
        }]
    });
};

var navigateToSample2 = function navigateToSample2() {
    return {
        type: REDIRECT_SAMPLE2,
        path: "/sample2"
    };
};

var SampleComponent = function SampleComponent() {
    return React__default.createElement(
        "div",
        null,
        "A sample component with text:"
    );
};

SampleComponent.propTypes = {
    text: PropTypes.string.isRequired
};

var SampleContainer = function (_Component) {
    inherits(SampleContainer, _Component);

    function SampleContainer(props) {
        classCallCheck(this, SampleContainer);

        var _this = possibleConstructorReturn(this, (SampleContainer.__proto__ || Object.getPrototypeOf(SampleContainer)).call(this, props));

        _this.continueClick = _this.continueClick.bind(_this);
        return _this;
    }

    createClass(SampleContainer, [{
        key: "continueClick",
        value: function continueClick() {
            var navigateToSample2$$1 = this.props.navigateToSample2;

            navigateToSample2$$1();
        }
    }, {
        key: "render",
        value: function render() {
            var externalContent = this.props.baseProps.config.externalContent;


            return React__default.createElement(
                "div",
                { className: "c-o-card" },
                React__default.createElement(
                    "h1",
                    null,
                    "Home Page"
                ),
                React__default.createElement(
                    "button",
                    { onClick: this.continueClick },
                    " ",
                    externalContent.btnContinue,
                    " "
                ),
                React__default.createElement(SampleComponent, null)
            );
        }
    }]);
    return SampleContainer;
}(React.Component);

SampleContainer.propTypes = {
    baseProps: PropTypes.object.isRequired,
    navigateToSample2: PropTypes.func
};

var mapStateToProps$1 = function mapStateToProps(state) {
    return { baseProps: state };
};
var mapDispatch$1 = function mapDispatch(dispatch) {
    return redux.bindActionCreators({
        navigateToSample2: navigateToSample2,
        getAccountList: getAccountList
    }, dispatch);
};

var SampleContainer$1 = reactRouterDom.withRouter(reactRedux.connect(mapStateToProps$1, mapDispatch$1)(SampleContainer));

var SampleContainer2 = function (_Component) {
    inherits(SampleContainer2, _Component);

    function SampleContainer2() {
        classCallCheck(this, SampleContainer2);
        return possibleConstructorReturn(this, (SampleContainer2.__proto__ || Object.getPrototypeOf(SampleContainer2)).apply(this, arguments));
    }

    createClass(SampleContainer2, [{
        key: "render",
        value: function render() {

            return React__default.createElement(
                "div",
                { className: "c-o-card" },
                React__default.createElement(
                    "h1",
                    null,
                    "Sample Page 2"
                )
            );
        }
    }]);
    return SampleContainer2;
}(React.Component);

SampleContainer2.propTypes = {
    headingText: PropTypes.string,
    loader: PropTypes.object.isRequired,
    getAccountList: PropTypes.func,
    config: PropTypes.object.isRequired
};

var mapStateToProps$2 = function mapStateToProps(state) {
    return { loader: state.loader, config: state.config };
};

var SampleContainer2$1 = reactRedux.connect(mapStateToProps$2)(SampleContainer2);

var history$1 = history.createBrowserHistory();

var routes = React__default.createElement(
    reactRouterDom.Router,
    { history: history$1 },
    React__default.createElement(
        reactRouterDom.Switch,
        null,
        React__default.createElement(reactRouterDom.Route, { exact: true, path: "/", component: SampleContainer$1 }),
        React__default.createElement(reactRouterDom.Route, { path: "/sample2", component: SampleContainer2$1 })
    )
);

var LoaderContainer = function (_Component) {
    inherits(LoaderContainer, _Component);

    function LoaderContainer() {
        classCallCheck(this, LoaderContainer);
        return possibleConstructorReturn(this, (LoaderContainer.__proto__ || Object.getPrototypeOf(LoaderContainer)).apply(this, arguments));
    }

    createClass(LoaderContainer, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                loader = _props.loader,
                config = _props.config;
            var loading = loader.loading;
            var externalContent = config.externalContent;


            return React__default.createElement(modals.Loader, { isOpen: loading, title: externalContent.loaderTitle,
                body: externalContent.loaderBody });
        }
    }]);
    return LoaderContainer;
}(React.Component);

LoaderContainer.propTypes = {
    loader: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
};

LoaderContainer.defaultProps = {
    config: {
        externalContent: {
            loaderTitle: "Loader",
            loaderBody: "Please do not close your browser"
        }
    }
};

var mapStateToProps$3 = function mapStateToProps(state) {
    return { loader: state.loader, config: state.config };
};

var LoaderContainer$1 = reactRedux.connect(mapStateToProps$3)(LoaderContainer);

var HeaderContainer = function (_Component) {
    inherits(HeaderContainer, _Component);

    function HeaderContainer() {
        classCallCheck(this, HeaderContainer);
        return possibleConstructorReturn(this, (HeaderContainer.__proto__ || Object.getPrototypeOf(HeaderContainer)).apply(this, arguments));
    }

    createClass(HeaderContainer, [{
        key: "render",
        value: function render() {
            var config = this.props.baseProps.config;

            return React__default.createElement(global$1.Header, { bankId: config.bank_id || "CB", title: "Homepage" });
        }
    }]);
    return HeaderContainer;
}(React.Component);

HeaderContainer.propTypes = {
    config: PropTypes.object.isRequired
};

var mapStateToProps$4 = function mapStateToProps(state) {
    return { baseProps: state };
};

reactRedux.connect(mapStateToProps$4)(HeaderContainer);

var ErrorContainer = function (_Component) {
    inherits(ErrorContainer, _Component);

    function ErrorContainer() {
        classCallCheck(this, ErrorContainer);
        return possibleConstructorReturn(this, (ErrorContainer.__proto__ || Object.getPrototypeOf(ErrorContainer)).apply(this, arguments));
    }

    createClass(ErrorContainer, [{
        key: "render",
        value: function render() {
            return React__default.createElement(
                "div",
                { className: "col-xs1-24" },
                React__default.createElement(
                    cards.Card,
                    null,
                    React__default.createElement(
                        "div",
                        null,
                        React__default.createElement(
                            "h1",
                            { className: "c-a-title" },
                            "Sorry, there's been a technical problem"
                        ),
                        React__default.createElement(
                            "div",
                            { className: "c-a-text-body u-margin-bottom-6" },
                            React__default.createElement(
                                "p",
                                null,
                                "It looks like something's gone wrong in the background. Please return to the home screen and apply again later. If you're still having problems, please give us a call on 0800 707 6471."
                            ),
                            React__default.createElement(
                                "p",
                                null,
                                "We're here Monday to Friday, 8am to 8pm, Saturday, 9am to 5pm and Sunday, 10am to 5pm."
                            )
                        ),
                        React__default.createElement(
                            "div",
                            { className: "c-m-button-group" },
                            React__default.createElement(
                                buttons.Button,
                                null,
                                "Return to home screen"
                            )
                        )
                    )
                )
            );
        }
    }]);
    return ErrorContainer;
}(React.Component);

ErrorContainer.propTypes = {
    config: PropTypes.object.isRequired
};

var mapStateToProps$5 = function mapStateToProps(state) {
    return { baseProps: state };
};

var ErrorContainer$1 = reactRedux.connect(mapStateToProps$5)(ErrorContainer);

var fetchConfig = function fetchConfig() {
    return defineProperty({}, reduxApiMiddleware.RSAA, {
        endpoint: ENV_CONFIG,
        method: "GET",
        types: [{
            type: FETCH_CONFIG,
            meta: {
                loading: true
            }
        }, {
            type: FETCH_CONFIG_SUCCESS,
            meta: {
                loading: false
            }
        }, {
            type: FETCH_CONFIG_FAILED

        }]
    });
};

var setQueryParams = function setQueryParams(params) {
    return {
        type: SET_QUERY_PARAMS,
        params: params
    };
};

var fetchContent = function fetchContent() {
    return defineProperty({}, reduxApiMiddleware.RSAA, {
        endpoint: CONTENT_URL,
        method: "GET",
        types: [{
            type: FETCH_CONTENT,
            meta: {
                loading: true
            }
        }, {
            type: FETCH_CONTENT_SUCCESS,
            meta: {
                loading: false
            }
        }, {
            type: FETCH_CONTENT_FAILED
        }]
    });
};

var App = function (_Component) {
    inherits(App, _Component);

    function App(props) {
        classCallCheck(this, App);

        var _this = possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            isContentLoaded: false
        };

        return _this;
    }

    createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log(this.props);
            var _props = this.props,
                fetchConfig$$1 = _props.fetchConfig,
                setQueryParams$$1 = _props.setQueryParams,
                fetchContent$$1 = _props.fetchContent;

            setQueryParams$$1(this.props.scaProps);
            fetchConfig$$1();
            fetchContent$$1();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.baseProps.config && nextProps.baseProps.config.externalContent && !this.state.isContentLoaded) {
                this.setState({ isContentLoaded: true });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var loader = this.props.baseProps.loader;

            if (!this.state.isContentLoaded) {
                return null;
            }
            return React__default.createElement(
                "div",
                { className: "o-page" },
                React__default.createElement(
                    "div",
                    { className: "o-global-content" },
                    React__default.createElement(
                        "div",
                        { className: "container container--sm u-margin-top-2" },
                        React__default.createElement(
                            "div",
                            { className: "row" },
                            !loader.showError ? routes : React__default.createElement(ErrorContainer$1, null),
                            React__default.createElement(LoaderContainer$1, null)
                        )
                    )
                )
            );
        }
    }]);
    return App;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { baseProps: state };
};
var mapDispatch = function mapDispatch(dispatch) {
    return redux.bindActionCreators({
        fetchConfig: fetchConfig,
        setQueryParams: setQueryParams,
        fetchContent: fetchContent
    }, dispatch);
};

App.propTypes = {
    loader: PropTypes.shape({}).isRequired
};

var App$1 = reactRedux.connect(mapStateToProps, mapDispatch)(App);

var accessToken = function accessToken(state) {
  return state.config.access_token;
};
var bankId = function bankId(state) {
  return state.config.bank_id;
};
var apiBaseUrl = function apiBaseUrl(state) {
  return state.config.envUrl && state.config.envUrl.apiBaseUrl;
};

var configSelectors$1 = Object.freeze({
	accessToken: accessToken,
	bankId: bankId,
	apiBaseUrl: apiBaseUrl
});

var apiUrlMiddleware = function apiUrlMiddleware(store) {
    return function (next) {
        return function (action) {
            if (!reduxApiMiddleware.isRSAA(action)) {
                return next(action);
            }

            var storeState = store.getState();

            var accessToken = configSelectors$1.accessToken(storeState);

            var urlSelectors = {
                "apiBaseUrl": configSelectors$1.apiBaseUrl,
                "bankId": configSelectors$1.bankId
            };

            var endpoint = Object.keys(urlSelectors).reduce(function (curEndpoint, selectorKey) {
                return curEndpoint.replace(selectorKey, urlSelectors[selectorKey](storeState));
            }, action[reduxApiMiddleware.RSAA].endpoint);

            var clientContext = {
                env: {
                    platform: configSelectors$1.bankId(storeState) + " Web",
                    platform_version: navigator.appVersion || navigator.vendor || window.opera,
                    make: navigator.platform || window.opera
                },
                client: {
                    app_title: configSelectors$1.bankId(storeState) + " Web",
                    user_tracking_id: "b251d9400fcbfe728866b60a69f6bf32"
                }
            };

            var headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-bpi-client-context": JSON.stringify(clientContext),
                "x-bpi-service-context": "USER"
            };

            if (accessToken) {
                headers.Authorization = "Bearer " + accessToken;
            }

            return next(_extends({}, action, defineProperty({}, reduxApiMiddleware.RSAA, _extends({}, action[reduxApiMiddleware.RSAA], {
                headers: _extends({}, action[reduxApiMiddleware.RSAA].headers, headers),
                endpoint: endpoint
            }))));
        };
    };
};

var nextActionMiddleware = function nextActionMiddleware(store) {
    return function (next) {
        return function (action) {
            if (!action.meta || !action.meta.nextAction) {
                return next(action);
            }
            var result = next(action);
            store.dispatch(action.meta.nextAction);
            return result;
        };
    };
};

var historyMiddleware = function historyMiddleware(_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
        return function (action) {
            var result = next(action);
            if (action.path) {
                dispatch(reactRouterRedux.push(action.path));
            }
            return result;
        };
    };
};

var config = function config() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];


    switch (action.type) {
        case FETCH_CONFIG_SUCCESS:
            return _extends({}, state, { envUrl: action.payload });
        case SET_QUERY_PARAMS:
            return _extends({}, state, action.params);
        case FETCH_CONTENT_SUCCESS:
            console.log(action.payload);
            return _extends({}, state, { externalContent: action.payload });
        case FETCH_ACCOUNTS_SUCCESS:
        case FETCH_ACCOUNTS_DETAILS_SUCCESS:
            return state;
        default:
            return state;
    }
};

var initialState = {
    loading: true,
    showError: false
};

function loaderReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case SET_QUERY_PARAMS:
            return _extends({}, state, {
                showError: action.params.bank_id ? false : true
            });
        case FETCH_CONFIG_FAILED:
        case FETCH_CONTENT_FAILED:
        case FETCH_ACCOUNTS_FAILED:
            return _extends({}, state, { showError: true, loading: false });
    }
    if (action.meta && action.meta.loading !== undefined) {
        return _extends({}, state, { loading: action.meta.loading });
    }

    return state;
}

var rootReducer = redux.combineReducers({
    loader: loaderReducer,
    config: config
});

var allMiddleware = [apiUrlMiddleware, reduxApiMiddleware.apiMiddleware, nextActionMiddleware, historyMiddleware, thunk];

if (process.env.NODE_ENV !== "production") {
    allMiddleware.push(immutableStateInvariantMiddleware());
}
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;

var store = redux.createStore(rootReducer, composeEnhancers(redux.applyMiddleware.apply(undefined, allMiddleware.concat([reactRouterRedux.routerMiddleware(history$1)]))));

var BaseAppClass = function (_Component) {
    inherits(BaseAppClass, _Component);

    function BaseAppClass() {
        classCallCheck(this, BaseAppClass);
        return possibleConstructorReturn(this, (BaseAppClass.__proto__ || Object.getPrototypeOf(BaseAppClass)).apply(this, arguments));
    }

    createClass(BaseAppClass, [{
        key: "render",
        value: function render() {
            return React__default.createElement(
                reactRedux.Provider,
                { store: store },
                React__default.createElement(
                    reactRouterDom.BrowserRouter,
                    null,
                    React__default.createElement(App$1, this.props)
                )
            );
        }
    }]);
    return BaseAppClass;
}(React.Component);

exports.BaseAppClass = BaseAppClass;
exports['default'] = BaseAppClass;
