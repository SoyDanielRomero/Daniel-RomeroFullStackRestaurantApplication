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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          query {\n            restaurant {\n              id\n              name\n              dishes {\n                id\n                name\n                description\n                price\n                image {\n                  url\n                }\n              }\n            }\n          }\n"]);

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

  if (restId > 0) {
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
        lineNumber: 45,
        columnNumber: 25
      }
    }, "Loading...");
    if (error) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 23
      }
    }, "ERROR here");
    if (!data) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 23
      }
    }, "Not found");
    var restaurant = data.restaurant;
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

    var dishes = data2.restaurant;
    if (loading2) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 24
      }
    }, "Loading...");
    if (error2) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 22
      }
    }, "ERROR here");
    if (!data2) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
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
          lineNumber: 108,
          columnNumber: 19
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
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
          lineNumber: 110,
          columnNumber: 23
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 23
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 23
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], (_jsx2 = {
        color: "info",
        outline: true
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "color", "primary"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "onClick", function onClick() {
        return addItem(res);
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJ1c2VyIiwiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwiZ3FsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwicmVzIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJHRVRfQUxMX1JFU1RBVVJBTlRfRElTSEVTIiwibG9hZGluZzIiLCJlcnJvcjIiLCJkYXRhMiIsImZvcmVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLE1BQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBQUEsa0JBQ2lCQyxzREFBUSxFQUR6QjtBQUFBLE1BQ2hCQyxZQURnQjtBQUFBLE1BQ0ZDLGVBREU7O0FBQUEsb0JBRUNDLHdEQUFVLENBQUNDLGdEQUFELENBRlg7QUFBQSxNQUVoQkMsT0FGZ0IsZUFFaEJBLE9BRmdCO0FBQUEsTUFFUEMsSUFGTyxlQUVQQSxJQUZPOztBQUl6QixNQUFNQyxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBa0JFLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSUEsTUFBSVgsTUFBTSxHQUFHLENBQWIsRUFBZTtBQUFBLG9CQUNvQlksK0RBQVEsQ0FBQ0oscUJBQUQsRUFBd0I7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SGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQVZGLENBREYsQ0FEYztBQUFBLEtBQWYsQ0FETCxDQURGO0FBOEJEO0FBQ0o7O0dBMUhJdEIsTTtVQXNCUVkscUQsRUFLb0JDLHVELEVBeURTQSx1RDs7O0tBcEZyQ2IsTTtBQTJIVUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNGM4NTgxYjZjYzUwZGU4NzgzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIFJvdyxcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuZnVuY3Rpb24gRGlzaGVzKHtyZXN0SWR9KXtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKClcbiAgY29uc3Qge2FkZEl0ZW0sIHVzZXJ9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG5jb25zdCBHRVRfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXG4gIHF1ZXJ5KCRpZDogSUQhKSB7XG4gICAgcmVzdGF1cmFudChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGlzaGVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgXG5cbiAgaWYgKHJlc3RJZCA+IDApe1xuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UX0RJU0hFUywge1xuICAgICAgdmFyaWFibGVzOiB7IGlkOiByZXN0SWR9LFxuICAgIH0pO1xuICBcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xuICAgIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gIFxuICAgIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50O1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAgIHtyZXN0YXVyYW50LmRpc2hlcy5tYXAoKHJlcykgPT4gKFxuICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19IGtleT17cmVzLmlkfT5cbiAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMTBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDE1MCwgd2lkdGg6MTUwIH19XG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpPT4gYWRkSXRlbShyZXMpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBjb25zdCBHRVRfQUxMX1JFU1RBVVJBTlRfRElTSEVTID0gZ3FsYFxuICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgIHJlc3RhdXJhbnQge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbmA7XG4gICAgICAgICAgY29uc3QgeyBsb2FkaW5nMiwgZXJyb3IyLCBkYXRhMiB9ID0gdXNlUXVlcnkoR0VUX0FMTF9SRVNUQVVSQU5UX0RJU0hFUyk7XG5cbiAgbGV0IGRpc2hlcyA9IGRhdGEyLnJlc3RhdXJhbnQ7XG5cbiAgaWYgKGxvYWRpbmcyKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcjIpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhMikgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge2Rpc2hlcy5mb3JlYWNoKChyZXMpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fSBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxNTAsIHdpZHRoOjE1MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXMuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXMubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKT0+IGFkZEl0ZW0ocmVzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBBZGQgVG8gQ2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBEaXNoZXMiXSwic291cmNlUm9vdCI6IiJ9