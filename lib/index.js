'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react-app-polyfill/ie11');
require('react-app-polyfill/stable');
require('whatwg-fetch');
var React = require('react');
var reactRedux = require('react-redux');
var PropTypes = require('prop-types');
var redux = require('redux');
var reactRouterDom = require('react-router-dom');
var routes = require('routes');
var Loader = require('components/Loader');
var Header = require('components/Header');
var _Error = require('components/Error');
var configAction = require('redux/actions/configAction');
var toolkit = require('@reduxjs/toolkit');
var connectedReactRouter = require('connected-react-router');
var apiUrlMiddleware = require('middlewares/apiUrlMiddleware');
var historyMiddleware = require('middlewares/historyMiddleware');
var reducers = require('redux/reducers');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var AppComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppComponent, _Component);

  function AppComponent(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = AppComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.fetchConfig(this.props.configUrl);
    this.props.fetchContent(this.props.contentUrl);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        error = _this$props.error,
        content = _this$props.content,
        loader = _this$props.loader;
    console.log('lib...', this.props);
    return content ? /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default['default'].createElement(Header.HeaderComponent, null), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(_Error.ErrorComponent, {
      hasError: error.showError,
      content: content
    }, "alshdlasld asd;oa;jsd", /*#__PURE__*/React__default['default'].createElement(Loader.LoaderComponent, {
      isLoading: loader.loading,
      text: 'test'
    })))) : /*#__PURE__*/React__default['default'].createElement("div", null, "Loading...");
  };

  return AppComponent;
}(React.Component); // const AppComponent = memo(function AppComponent({
//   loader,
//   error,
//   content,
//   fetchConfig,
//   fetchContent,
//   configUrl,
//   contentUrl
// }) {
//   const [isContentLoaded, updateContentLoaded] = useState(false);
//   useEffect(() => {
//     fetchConfig(configUrl);
//     fetchContent(contentUrl);
//     updateContentLoaded(true);
//   }, []);
//   return isContentLoaded ? (
//     <div>
//       <HeaderComponent />
//       <div>
//         <ErrorComponent hasError={error.showError} content={content}>
//           {AppRouter}
//           <LoaderComponent isLoading={loader.loading} text={'test'} />
//         </ErrorComponent>
//       </div>
//     </div>
//   ) : (
//     <div>Loading...</div>
//   );
// });


var mapStateToProps = function mapStateToProps(state) {
  return {
    loader: state.loader,
    error: state.error,
    content: state.config.externalContent
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return redux.bindActionCreators({
    fetchConfig: configAction.fetchConfig,
    fetchContent: configAction.fetchContent
  }, dispatch);
};

AppComponent.propTypes = {
  loader: PropTypes__default['default'].shape({
    loading: PropTypes__default['default'].bool
  }),
  error: PropTypes__default['default'].shape({
    loading: PropTypes__default['default'].bool
  }),
  content: PropTypes__default['default'].object.isRequired,
  fetchConfig: PropTypes__default['default'].func,
  fetchContent: PropTypes__default['default'].func,
  configUrl: PropTypes__default['default'].string,
  contentUrl: PropTypes__default['default'].string
};
var App = reactRedux.connect(mapStateToProps, mapDispatch)(AppComponent);

var allMiddleware = [apiUrlMiddleware.apiUrlMiddleware, historyMiddleware.historyMiddleware].concat(toolkit.getDefaultMiddleware({
  serializableCheck: false
}));
var store = toolkit.configureStore({
  reducer: reducers.rootReducer(routes.history),
  middleware: [].concat(allMiddleware, [connectedReactRouter.routerMiddleware(routes.history)]),
  devTools: {
    name: 'Lib App'
  }
});

if (module.hot) {
  module.hot.accept('redux/reducers', function () {
    store.replaceReducer(reducers.rootReducer(routes.history));
  });
}

var BaseAppClass = function BaseAppClass(_ref) {
  var props = _extends({}, _ref);

  console.log(props);
  return /*#__PURE__*/React__default['default'].createElement(reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React__default['default'].createElement(App, props));
};
// import { Provider } from 'react-redux';
// import { App } from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/store';
// import './assets/css/app.scss';
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App configUrl={'./env.json'} contentUrl={'./content.json'} />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

exports.BaseAppClass = BaseAppClass;
