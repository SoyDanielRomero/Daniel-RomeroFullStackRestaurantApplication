webpackHotUpdate_N_E("pages/login",{

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* /context/AppContext.js */
 // create auth context with default value
// set backup default for isAuthenticated if none is provided in Provider

var AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isAuthenticated: false,
  cart: {
    items: [],
    total: 0
  },
  addItem: function addItem() {},
  removeItem: function removeItem() {},
  user: {},
  setUser: function setUser() {}
});
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjYXJ0IiwiaXRlbXMiLCJ0b3RhbCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUNmO0FBQ0lDLGlCQUFlLEVBQUMsS0FEcEI7QUFFSUMsTUFBSSxFQUFFO0FBQUNDLFNBQUssRUFBQyxFQUFQO0FBQ05DLFNBQUssRUFBQztBQURBLEdBRlY7QUFJSUMsU0FBTyxFQUFDLG1CQUFJLENBQUUsQ0FKbEI7QUFLSUMsWUFBVSxFQUFDLHNCQUFJLENBQUUsQ0FMckI7QUFNSUMsTUFBSSxFQUFDLEVBTlQ7QUFPSUMsU0FBTyxFQUFDLG1CQUFJLENBQUU7QUFQbEIsQ0FEZSxDQUFuQjtBQVVlVix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5hNWVlMmU3NTZlZGQwYWQwNTIxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL2NvbnRleHQvQXBwQ29udGV4dC5qcyAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBjcmVhdGUgYXV0aCBjb250ZXh0IHdpdGggZGVmYXVsdCB2YWx1ZVxyXG5cclxuLy8gc2V0IGJhY2t1cCBkZWZhdWx0IGZvciBpc0F1dGhlbnRpY2F0ZWQgaWYgbm9uZSBpcyBwcm92aWRlZCBpbiBQcm92aWRlclxyXG5jb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcclxuICAgIHtcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ZmFsc2UsIFxyXG4gICAgICAgIGNhcnQ6IHtpdGVtczpbXSwgXHJcbiAgICAgICAgdG90YWw6MH0sXHJcbiAgICAgICAgYWRkSXRlbTooKT0+e30sXHJcbiAgICAgICAgcmVtb3ZlSXRlbTooKT0+e30sXHJcbiAgICAgICAgdXNlcjp7fSwgXHJcbiAgICAgICAgc2V0VXNlcjooKT0+e31cclxuICAgIH0pO1xyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=