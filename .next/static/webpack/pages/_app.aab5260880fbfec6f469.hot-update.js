webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/dishes.js":
/*!******************************!*\
  !*** ./components/dishes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _jsxFileName = "D:\\GitHub\\Capstone\\Daniel-RomeroFullStackRestaurantApplication\\components\\dishes.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query($id: ID!) {\n    restaurant(id: $id) {\n      id\n      name\n      dishes {\n        id\n        name\n        description\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function Dishes(_ref) {
  _s();

  var _this = this;

  var restId = _ref.restId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      addItem = _useContext.addItem,
      user = _useContext.user;

  var GET_RESTAURANT_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_RESTAURANT_DISHES, {
    variables: {
      id: restId
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "ERROR here");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Not found");
  var restaurant = data.restaurant;

  if (restId > 0) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, restaurant.dishes.map(function (res) {
      var _jsx;

      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        sm: "4",
        style: {
          padding: 0
        },
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 150,
          width: 150
        },
        src: "http://localhost:1337".concat(res.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 19
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 19
        }
      }, res.description)), user ? __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 27
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], (_jsx = {
        color: "info",
        outline: true
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "color", "primary"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onClick", function onClick() {
        return addItem(res);
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }), _jsx), "+ Add To Cart")) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)));
    }));
  } else {
    if (restId === 0) {
      var renderDishes = function renderDishes(restaurantID) {
        return __jsx(Dishes, {
          restId: restaurantID,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }
        }, " ");
      };

      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, renderDishes(1), renderDishes(2), renderDishes(3));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
    }
  }
}

_s(Dishes, "XGZ7rp5vMOGxQhzDvbXZD4OehRc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = Dishes;
/* harmony default export */ __webpack_exports__["default"] = (Dishes);

var _c;

$RefreshReg$(_c, "Dishes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJ1c2VyIiwiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwiZ3FsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwicmVzIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyZW5kZXJEaXNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsU0FBU0EsTUFBVCxPQUF5QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLE1BQVEsUUFBUkEsTUFBUTs7QUFBQSxrQkFDaUJDLHNEQUFRLEVBRHpCO0FBQUEsTUFDaEJDLFlBRGdCO0FBQUEsTUFDRkMsZUFERTs7QUFBQSxvQkFFQ0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FGWDtBQUFBLE1BRWhCQyxPQUZnQixlQUVoQkEsT0FGZ0I7QUFBQSxNQUVQQyxJQUZPLGVBRVBBLElBRk87O0FBSXpCLE1BQU1DLHFCQUFxQixHQUFHQywwREFBSCxtQkFBM0I7QUFrQkUsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUF0QnVCLGtCQXdCVUMsK0RBQVEsQ0FBQ0oscUJBQUQsRUFBd0I7QUFDL0RLLGFBQVMsRUFBRTtBQUFFQyxRQUFFLEVBQUVkO0FBQU47QUFEb0QsR0FBeEIsQ0F4QmxCO0FBQUEsTUF3QmZlLE9BeEJlLGFBd0JmQSxPQXhCZTtB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YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIFJvdyxcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuZnVuY3Rpb24gRGlzaGVzKHtyZXN0SWR9KXtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKClcbiAgY29uc3Qge2FkZEl0ZW0sIHVzZXJ9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG5jb25zdCBHRVRfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXG4gIHF1ZXJ5KCRpZDogSUQhKSB7XG4gICAgcmVzdGF1cmFudChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGlzaGVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRfRElTSEVTLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkOiByZXN0SWR9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgcmVzdGF1cmFudCA9IGRhdGEucmVzdGF1cmFudDtcblxuICBpZiAocmVzdElkID4gMCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAge3Jlc3RhdXJhbnQuZGlzaGVzLm1hcCgocmVzKSA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0ga2V5PXtyZXMuaWR9PlxuICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMTUwLCB3aWR0aDoxNTAgfX1cbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgeyB1c2VyID8gKDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpPT4gYWRkSXRlbShyZXMpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+KTooPD48Lz4pfVxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgaWYgKHJlc3RJZCA9PT0gMCl7XG4gICAgICAgICAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICg8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+KVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PntyZW5kZXJEaXNoZXMoMSl9XG4gICAgICAgICAge3JlbmRlckRpc2hlcygyKX1cbiAgICAgICAgICB7cmVuZGVyRGlzaGVzKDMpfTwvPlxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gPD48Lz5cbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBkZWZhdWx0IERpc2hlcyJdLCJzb3VyY2VSb290IjoiIn0=