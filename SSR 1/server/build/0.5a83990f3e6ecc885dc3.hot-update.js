exports.id = 0;
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _usersReducers = __webpack_require__(25);

var _usersReducers2 = _interopRequireDefault(_usersReducers);

var _authReducer = __webpack_require__(26);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminReducers = __webpack_require__(27);

var _adminReducers2 = _interopRequireDefault(_adminReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    users: _usersReducers2.default,
    auth: _authReducer2.default,
    admins: _adminReducers2.default
});

/***/ })

};