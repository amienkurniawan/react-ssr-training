exports.id = 0;
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            console.log("payload data", action.payload.data);
            return action.payload.data || false;
        default:
            return state;
    }
};

var _actions = __webpack_require__(1);

/***/ })

};