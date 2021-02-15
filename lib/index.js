'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('whatwg-fetch');
const React = require('react');
const reactRedux = require('react-redux');
const PropTypes = require('prop-types');
const redux = require('redux');
const reactRouterDom = require('react-router-dom');
const history$1 = require('history');
const reduxApiMiddleware = require('redux-api-middleware');
const thunk = require('redux-thunk');
const immutableStateInvariantMiddleware = require('redux-immutable-state-invariant');
const connectedReactRouter = require('connected-react-router');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);
const PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
const thunk__default = /*#__PURE__*/_interopDefaultLegacy(thunk);
const immutableStateInvariantMiddleware__default = /*#__PURE__*/_interopDefaultLegacy(immutableStateInvariantMiddleware);

const SampleContainer = /*#__PURE__*/React.lazy(function () {
    return Promise.resolve().then(function () { return index; });
});
const SampleContainer2 = /*#__PURE__*/React.lazy(function () {
    return Promise.resolve().then(function () { return index$1; });
});
const history = history$1.createBrowserHistory();
const AppRouter = /*#__PURE__*/React__default.default.createElement(reactRouterDom.Router, {
    history: history,
}, /*#__PURE__*/React__default.default.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React__default.default.createElement('div', null, 'Loading...'),
}, /*#__PURE__*/React__default.default.createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default.default.createElement(reactRouterDom.Route, {
    exact: true,
    path: '/',
    component: SampleContainer,
}), /*#__PURE__*/React__default.default.createElement(reactRouterDom.Route, {
    path: '/sample',
    component: SampleContainer2,
}))));

const LoaderComponent = /*#__PURE__*/React.memo(function (_ref) {
    let {content} = _ref,
        _ref$isLoading = _ref.isLoading,
        isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;
    return isLoading ? /*#__PURE__*/React__default.default.createElement('div', {
        id: 'preloader',
    }, /*#__PURE__*/React__default.default.createElement('div', {
        id: 'loader',
    }, content.loadingText, /*#__PURE__*/React__default.default.createElement('div', {
        className: 'spin',
    }))) : null;
});
LoaderComponent.propTypes = {
    isLoading: PropTypes__default.default.bool.isRequired,
    content: PropTypes__default.default.object.isRequired,
};
LoaderComponent.defaultProps = {
    content: {
        loadingText: 'Please wait....',
    },
};

const HeaderComponent = /*#__PURE__*/React.memo(function () {
    return /*#__PURE__*/React__default.default.createElement('header', null, /*#__PURE__*/React__default.default.createElement('img', {
        alt: 'Logo',
    }));
});

const ErrorComponent = /*#__PURE__*/function (_Component) {
    babelHelpers.inheritsLoose(ErrorComponent, _Component);

    function ErrorComponent(props) {
        let _this;

        _this = _Component.call(this, props) || this;
        _this.state = {
            hasError: props.hasError || false,
        };
        return _this;
    }

    const _proto = ErrorComponent.prototype;

    _proto.componentDidCatch = function componentDidCatch(error, info) {
    // Display fallback UI
        this.setState({
            hasError: true,
        }); // eslint-disable-next-line no-console

        console.log(error); // eslint-disable-next-line no-console

        console.log(info);
    };

    _proto.render = function render() {
        const {content} = this.props;

        if (this.state.hasError) {
            return /*#__PURE__*/React__default.default.createElement('div', null, /*#__PURE__*/React__default.default.createElement('h1', null, content.errorHeader), /*#__PURE__*/React__default.default.createElement('div', null, /*#__PURE__*/React__default.default.createElement('p', null, ' ', content.errorText, ' ')), /*#__PURE__*/React__default.default.createElement('div', null, /*#__PURE__*/React__default.default.createElement('button', null, content.ExitText)));
        }

        return this.props.children;
    };

    return ErrorComponent;
}(React.Component);

ErrorComponent.propTypes = {
    content: PropTypes__default.default.object.isRequired,
    children: PropTypes__default.default.any,
    hasError: PropTypes__default.default.bool,
};

const mapStateToProps = function mapStateToProps(state) {
    return {
        content: state.config.externalContent,
    };
};

const withContent = function withContent() {
    return function (WrappedComponent) {
        const WithContent = function WithContent(_ref) {
            const props = babelHelpers.extends({}, _ref);
            return /*#__PURE__*/React__default.default.createElement(WrappedComponent, props);
        };

        WithContent.propTypes = {
            id: PropTypes__default.default.string,
            content: PropTypes__default.default.oneOfType([PropTypes__default.default.string, PropTypes__default.default.objectOf(PropTypes__default.default.string)]).isRequired,
            children: PropTypes__default.default.func,
        };
        return reactRedux.connect(mapStateToProps)(WithContent);
    };
};

const AppComponent = /*#__PURE__*/React.memo(function App(_ref) {
    let {loader} = _ref,
        {content} = _ref,
        {error} = _ref;
    return /*#__PURE__*/React__default.default.createElement('div', null, /*#__PURE__*/React__default.default.createElement(HeaderComponent, null), /*#__PURE__*/React__default.default.createElement('div', null, /*#__PURE__*/React__default.default.createElement(ErrorComponent, {
        hasError: error.showError,
        content: content,
    }, AppRouter, /*#__PURE__*/React__default.default.createElement(LoaderComponent, {
        isLoading: loader.loading,
        text: content.loadingText,
    }))));
});

const mapStateToProps$1 = function mapStateToProps(state) {
    return {
        loader: state.loader,
        error: state.error,
    };
};

AppComponent.propTypes = {
    loader: PropTypes__default.default.shape({
        loading: PropTypes__default.default.bool,
    }),
    error: PropTypes__default.default.shape({
        loading: PropTypes__default.default.bool,
    }),
    content: PropTypes__default.default.object.isRequired,
};
const App = redux.compose(withContent(), reactRedux.connect(mapStateToProps$1))(AppComponent);

const apiUrl = function apiUrl(state) {
    return state.config.envUrl && state.config.envUrl.apiUrl;
};

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const apiUrlMiddleware = function apiUrlMiddleware(store) {
    return function (next) {
        return function (action) {
            let _objectSpread2;

            if (!reduxApiMiddleware.isRSAA(action)) {
                return next(action);
            }

            const storeState = store.getState();
            const urlSelectors = {
                apiUrl: apiUrl,
            };
            const endpoint = Object.keys(urlSelectors).reduce(function (curEndpoint, selectorKey) {
                return curEndpoint.replace(selectorKey, urlSelectors[selectorKey](storeState));
            }, action[reduxApiMiddleware.RSAA].endpoint);
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
            return next(_objectSpread(_objectSpread({}, action), {}, (_objectSpread2 = {}, _objectSpread2[reduxApiMiddleware.RSAA] = _objectSpread(_objectSpread({}, action[reduxApiMiddleware.RSAA]), {}, {
                headers: _objectSpread(_objectSpread({}, action[reduxApiMiddleware.RSAA].headers), headers),
                endpoint: endpoint,
            }), _objectSpread2)));
        };
    };
};

const nextActionMiddleware = function nextActionMiddleware(store) {
    return function (next) {
        return function (action) {
            if (!action.meta || !action.meta.nextAction) {
                return next(action);
            }

            const result = next(action);
            store.dispatch(action.meta.nextAction);
            return result;
        };
    };
};

const historyMiddleware = function historyMiddleware(store) {
    return function (next) {
        return function (action) {
            const result = next(action);

            if (action.path) {
                store.dispatch(connectedReactRouter.push(action.path));
            }

            return result;
        };
    };
};

const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
const SET_QUERY_PARAMS = 'SET_QUERY_PARAMS';
const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';
const FETCH_POSTS_DETAILS = 'FETCH_POSTS_DETAILS';
const FETCH_POSTS_DETAILS_SUCCESS = 'FETCH_POSTS_DETAILS_SUCCESS';
const FETCH_POSTS_DETAILS_FAILED = 'FETCH_POSTS_DETAILS_FAILED'; //redirect

const REDIRECT_SCREEN = 'REDIRECT_SCREEN';

function ownKeys$1(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const config = function config(state, action) {
    if (state === void 0) {
        state = {};
    }

    switch (action.type) {
        case FETCH_CONFIG_SUCCESS:
            return _objectSpread$1(_objectSpread$1({}, state), {}, {
                envUrl: action.payload,
            });

        case SET_QUERY_PARAMS:
            return _objectSpread$1(_objectSpread$1({}, state), action.params);

        case FETCH_CONTENT_SUCCESS:
            return _objectSpread$1(_objectSpread$1({}, state), {}, {
                externalContent: action.payload,
            });

        default:
            return state;
    }
};

function ownKeys$2(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const initialState = {
    loading: true,
};

const loader = function loader(state, action) {
    if (state === void 0) {
        state = initialState;
    }

    if (action.meta && action.meta.loading !== undefined) {
        return _objectSpread$2(_objectSpread$2({}, state), {}, {
            loading: action.meta.loading,
        });
    }

    return state;
};

function ownKeys$3(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const initialState$1 = {
    showError: false,
};

const error = function error(state, action) {
    if (state === void 0) {
        state = initialState$1;
    }

    if (action.error) return _objectSpread$3(_objectSpread$3({}, state), {}, {
        showError: true,
    });
    const isFailed = action.type && action.type.includes('FAILED');
    return _objectSpread$3(_objectSpread$3({}, state), {}, {
        showError: isFailed,
    });
};

function ownKeys$4(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
const initialState$2 = {
    postList: null,
    postDetail: null,
};

const post = function post(state, action) {
    if (state === void 0) {
        state = initialState$2;
    }

    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return _objectSpread$4(_objectSpread$4({}, state), {}, {
                postList: action.payload,
            });

        case FETCH_POSTS_DETAILS_SUCCESS:
            return _objectSpread$4(_objectSpread$4({}, state), {}, {
                postDetail: action.payload,
            });

        default:
            return state;
    }
};

const rootReducer = function rootReducer(history) {
    return redux.combineReducers({
        loader: loader,
        config: config,
        error: error,
        post: post,
        router: connectedReactRouter.connectRouter(history),
    });
};

const allMiddleware = [apiUrlMiddleware, reduxApiMiddleware.apiMiddleware, nextActionMiddleware, historyMiddleware, thunk__default.default];

if (process.env.NODE_ENV !== 'production') {
    allMiddleware.push(immutableStateInvariantMiddleware__default.default());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
const store = redux.createStore(rootReducer(history), composeEnhancers(redux.applyMiddleware.apply(void 0, allMiddleware.concat([connectedReactRouter.routerMiddleware(history)]))));

if (module.hot) {
    module.hot.accept('redux/reducers', function () {
        store.replaceReducer(rootReducer(history));
    });
}

const BaseAppClass = /*#__PURE__*/function (_Component) {
    babelHelpers.inheritsLoose(BaseAppClass, _Component);

    function BaseAppClass() {
        return _Component.apply(this, arguments) || this;
    }

    const _proto = BaseAppClass.prototype;

    _proto.render = function render() {
        return /*#__PURE__*/React__default.default.createElement(reactRedux.Provider, {
            store: store,
        }, /*#__PURE__*/React__default.default.createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default.default.createElement(App, this.props)));
    };

    return BaseAppClass;
}(React.Component);

const GET_POST_LIST = 'apiUrl/posts';
const GET_POST_BY_ID = 'apiUrl/posts/';

const getPostList = function getPostList() {
    return {
        type: FETCH_POSTS,
        meta: {
            nextAction: getPosts(),
        },
    };
};
var getPosts = function getPosts() {
    return reduxApiMiddleware.createAction({
        endpoint: GET_POST_LIST,
        method: 'GET',
        types: [{
            type: FETCH_POSTS,
            meta: {
                loading: true,
            },
        }, {
            type: FETCH_POSTS_SUCCESS,
            //Sample api call for next api call
            payload: function payload(_action, _state, res) {
                return reduxApiMiddleware.getJSON(res).then(function (json) {
                    res.json = json;
                    return json;
                });
            },
            meta: function meta(_action, _state, res) {
                return {
                    nextAction: getPostDetails(res.json[0].id),
                    loading: true,
                };
            },
        }, {
            type: FETCH_POSTS_FAILED,
            meta: {
                loading: false,
            },
        }],
    });
};
var getPostDetails = function getPostDetails(postId) {
    return reduxApiMiddleware.createAction({
        endpoint: `${  GET_POST_BY_ID  }${postId}`,
        method: 'GET',
        types: [{
            type: FETCH_POSTS_DETAILS,
            meta: {
                loading: true,
            },
        }, {
            type: FETCH_POSTS_DETAILS_SUCCESS,
            meta: {
                loading: false,
            },
        }, {
            type: FETCH_POSTS_DETAILS_FAILED,
            meta: {
                loading: false,
            },
        }],
    });
};

const navigateToNextScreen = function navigateToNextScreen(nextScreen) {
    return {
        type: REDIRECT_SCREEN,
        path: nextScreen,
    };
};

const SampleComponent = /*#__PURE__*/React.memo(function (_ref) {
    let {postList} = _ref,
        {content} = _ref;
    return /*#__PURE__*/React__default.default.createElement('div', null, content.postListHeader, /*#__PURE__*/React__default.default.createElement('ul', null, postList && postList.map(function (post) {
        return /*#__PURE__*/React__default.default.createElement('li', {
            key: post.id,
        }, post.title);
    })));
});

const SampleScreen = /*#__PURE__*/React.memo(function Sample(_ref) {
    let {getPostList} = _ref,
        {navigateToNextScreen} = _ref,
        {content} = _ref,
        {postList} = _ref;
    React.useEffect(function () {
        getPostList();
    }, [getPostList]);
    return /*#__PURE__*/React__default.default.createElement('div', null, /*#__PURE__*/React__default.default.createElement('h1', null, content.homePageText), /*#__PURE__*/React__default.default.createElement(SampleComponent, {
        postList: postList,
        content: content,
    }), /*#__PURE__*/React__default.default.createElement('button', {
        id: 'btnContinue',
        onClick: function onClick() {
            return navigateToNextScreen('/sample');
        },
    }, /*#__PURE__*/React__default.default.createElement('span', null, content.btnContinue)));
});
SampleScreen.propTypes = {
    navigateToNextScreen: PropTypes__default.default.func,
    content: PropTypes__default.default.object.isRequired,
    getPostList: PropTypes__default.default.func,
    postList: PropTypes__default.default.array,
};

const mapStateToProps$2 = function mapStateToProps(state) {
    return {
        postList: state.post.postList,
    };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return redux.bindActionCreators({
        navigateToNextScreen: navigateToNextScreen,
        getPostList: getPostList,
    }, dispatch);
};

const SampleContainer$1 = redux.compose(withContent(), reactRedux.connect(mapStateToProps$2, mapDispatchToProps))(SampleScreen);

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': SampleContainer$1,
});

const Sample2Container = /*#__PURE__*/React.memo(function () {
    return /*#__PURE__*/React__default.default.createElement('div', null, 'Sample 2 Component.', /*#__PURE__*/React__default.default.createElement('button', null, 'asasd'));
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Sample2Container,
});

exports.BaseAppClass = BaseAppClass;
exports.default = BaseAppClass;
