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



var _jsxFileName = "C:\\Users\\danir\\Descargas\\fronentworking\\components\\dishes.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query {\n      dishes {\n        id\n        name\n        description\n        price\n        image {\n          url\n        }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

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
          lineNumber: 53,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
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
          lineNumber: 55,
          columnNumber: 17
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 19
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
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
      }), _jsx), "+ Add To Cart"))));
    }));
  } else {
    var GET_ALL_RESTAURANT_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject2());

    var _useQuery2 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_ALL_RESTAURANT_DISHES),
        loading2 = _useQuery2.loading2,
        error2 = _useQuery2.error2,
        data2 = _useQuery2.data2;

    var dishes = data2.dishes;
    if (loading2) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 24
      }
    }, "Loading...");
    if (error2) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }
    }, "ERROR here");
    if (!data2) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 22
      }
    }, "Not found");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, dishes.foreach(function (res) {
      var _jsx2;

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
          lineNumber: 104,
          columnNumber: 19
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
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
          lineNumber: 106,
          columnNumber: 23
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 23
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 25
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 23
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], (_jsx2 = {
        color: "info",
        outline: true
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "color", "primary"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "onClick", function onClick() {
        return addItem(res);
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 25
      }), _jsx2), "+ Add To Cart"))));
    }));
  }
}

_s(Dishes, "KgUKT0H4kPTFQ14S1GeCTFbSHzk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJ1c2VyIiwiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwiZ3FsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwicmVzIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJHRVRfQUxMX1JFU1RBVVJBTlRfRElTSEVTIiwibG9hZGluZzIiLCJlcnJvcjIiLCJkYXRhMiIsImZvcmVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLE1BQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBQUEsa0JBQ2lCQyxzREFBUSxFQUR6QjtBQUFBLE1BQ2hCQyxZQURnQjtBQUFBLE1BQ0ZDLGVBREU7O0FBQUEsb0JBRUNDLHdEQUFVLENBQUNDLGdEQUFELENBRlg7QUFBQSxNQUVoQkMsT0FGZ0IsZUFFaEJBLE9BRmdCO0FBQUEsTUFFUEMsSUFGTyxlQUVQQSxJQUZPOztBQUl6QixNQUFNQyxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBa0JFLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBdEJ1QixrQkF3QlVDLCtEQUFRLENBQUNKLHFCQUFELEVBQXdCO0FBQy9ESyxhQUFTLEVBQUU7QUFBRUMsUUFBRSxF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QUFBLE9BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQVZGLENBREYsQ0FEYztBQUFBLEtBQWYsQ0FETCxDQURGO0FBOEJEO0FBQ0o7O0dBdEhJdEIsTTtVQXNCUVkscUQsRUFFa0JDLHVELEVBd0RXQSx1RDs7O0tBaEZyQ2IsTTtBQXVIVUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMzkwZWYzNGI4ZGYwMTM3MDkzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIFJvdyxcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuZnVuY3Rpb24gRGlzaGVzKHtyZXN0SWR9KXtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKClcbiAgY29uc3Qge2FkZEl0ZW0sIHVzZXJ9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG5jb25zdCBHRVRfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXG4gIHF1ZXJ5KCRpZDogSUQhKSB7XG4gICAgcmVzdGF1cmFudChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGlzaGVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRfRElTSEVTLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkOiByZXN0SWR9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgcmVzdGF1cmFudCA9IGRhdGEucmVzdGF1cmFudDtcblxuICBpZiAocmVzdElkID4gMCl7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgICB7cmVzdGF1cmFudC5kaXNoZXMubWFwKChyZXMpID0+IChcbiAgICAgICAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fSBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxNTAsIHdpZHRoOjE1MCB9fVxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXMuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXMubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKT0+IGFkZEl0ZW0ocmVzKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgKyBBZGQgVG8gQ2FydFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgY29uc3QgR0VUX0FMTF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkge1xuICAgICAgZGlzaGVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4gICAgICAgICAgY29uc3QgeyBsb2FkaW5nMiwgZXJyb3IyLCBkYXRhMiB9ID0gdXNlUXVlcnkoR0VUX0FMTF9SRVNUQVVSQU5UX0RJU0hFUyk7XG5cbiAgbGV0IGRpc2hlcyA9IGRhdGEyLmRpc2hlcztcblxuICBpZiAobG9hZGluZzIpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yMikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xuICBpZiAoIWRhdGEyKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7ZGlzaGVzLmZvcmVhY2goKHJlcykgPT4gKFxuICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19IGtleT17cmVzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDE1MCwgd2lkdGg6MTUwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpPT4gYWRkSXRlbShyZXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBkZWZhdWx0IERpc2hlcyJdLCJzb3VyY2VSb290IjoiIn0=