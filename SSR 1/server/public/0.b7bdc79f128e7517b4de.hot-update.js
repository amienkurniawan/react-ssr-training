webpackHotUpdate(0,{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(192);

var _axios = __webpack_require__(394);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(413);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Routes = __webpack_require__(428);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterDom = __webpack_require__(112);

var _redux = __webpack_require__(110);

var _reduxThunk = __webpack_require__(492);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = __webpack_require__(62);

var _reducers = __webpack_require__(493);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRouterConfig = __webpack_require__(190);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axiosInstance = _axios2.default.create({
    baseURL: '/api'
}); // startup point for client side application

var store = (0, _redux.createStore)(_reducers2.default, window.INITIAL_STATE, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
_reactDom2.default.hydrate(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            'div',
            null,
            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
        )
    )
), document.getElementById('root'));

/***/ })

})