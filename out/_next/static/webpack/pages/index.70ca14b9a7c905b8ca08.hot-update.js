webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJ1c2VyIiwiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwiZ3FsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwicmVzIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJHRVRfQUxMX1JFU1RBVVJBTlRfRElTSEVTIiwibG9hZGluZzIiLCJlcnJvcjIiLCJkYXRhMiIsImZvcmVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLE1BQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBQUEsa0JBQ2lCQyxzREFBUSxFQUR6QjtBQUFBLE1BQ2hCQyxZQURnQjtBQUFBLE1BQ0ZDLGVBREU7O0FBQUEsb0JBRUNDLHdEQUFVLENBQUNDLGdEQUFELENBRlg7QUFBQSxNQUVoQkMsT0FGZ0IsZUFFaEJBLE9BRmdCO0FBQUEsTUFFUEMsSUFGTyxlQUVQQSxJQUZPOztBQUl6QixNQUFNQyxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBa0JFLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSUEsTUFBSVgsTUFBTSxHQUFHLENBQWIsRUFBZTtBQUFBLG9CQUNvQlksK0RBQVEsQ0FBQ0oscUJBQUQsRUFBd0I7QUFDL0RLLGVBQVMsRUFBRTtBQUFFQyxVQUFFLEVBQUVkO0FBQU47QUFEb0QsS0FBeEIsQ0FENUI7QUFBQSxRQUNMZSxPQURLLGFBQ0xBLE9BREs7QUFBQSxRQUNJQyxLQURKLGFBQ0lBLEtBREo7QUFBQSxRQUNXQyxJQURYLGFBQ1dBLElBRFg7O0FBS2IsUUFBSUYsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNiLFFBQUlDLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDWCxRQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFFWCxRQUFJQyxVQUFVLEdBQUdELElBQUksQ0FBQ0MsVUFBdEI7QUFDQSxXQUNFLG1FQUNLQSxVQUFVLENBQUNDLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQ7QUFBQTs7QUFBQSxhQUNyQixNQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDLEdBQVI7QUFBWSxVQUFFLEVBQUMsR0FBZjtBQUFtQixhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQTFCO0FBQTBDLFdBQUcsRUFBRUQsR0FBRyxDQUFDUCxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywrQ0FBRDtBQUFNLGFBQUssRUFBRTtBQUFFUyxnQkFBTSxFQUFFO0FBQVYsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFdBQUcsRUFBRSxJQURQO0FBRUUsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsR0FBVjtBQUFlQyxlQUFLLEVBQUM7QUFBckIsU0FGVDtBQUdFLFdBQUcsaUNBQTBCSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsR0FBcEMsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWU4sR0FBRyxDQUFDTyxJQUFoQixDQURGLEVBRUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdQLEdBQUcsQ0FBQ1EsV0FBZixDQUZGLENBTkYsRUFVRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUFRLGFBQUssRUFBQyxNQUFkO0FBQ0UsZUFBTztBQURULGtIQUVRLFNBRlIsOEdBR2E7QUFBQSxlQUFLdkIsT0FBTyxDQUFDZSxHQUFELENBQVo7QUFBQSxPQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsQ0FWRixDQURGLENBRHFCO0FBQUEsS0FBdEIsQ0FETCxDQURGO0FBNkJNLEdBdkNSLE1Bd0NVO0FBQ0YsUUFBTVMseUJBQXlCLEdBQUdyQiwwREFBSCxvQkFBL0I7O0FBREUscUJBY2tDRywrREFBUSxDQUFDa0IseUJBQUQsQ0FkMUM7QUFBQSxRQWNNQyxRQWROLGNBY01BLFFBZE47QUFBQSxRQWNnQkMsTUFkaEIsY0FjZ0JBLE1BZGhCO0FBQUEsUUFjd0JDLEtBZHhCLGNBY3dCQSxLQWR4Qjs7QUFnQlYsUUFBSWQsTUFBTSxHQUFHYyxLQUFLLENBQUNkLE1BQW5CO0FBRUEsUUFBSVksUUFBSixFQUFjLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNkLFFBQUlDLE1BQUosRUFBWSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDWixRQUFJLENBQUNDLEtBQUwsRUFBWSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSixXQUNFLG1FQUNLZCxNQUFNLENBQUNlLE9BQVAsQ0FBZSxVQUFDYixHQUFEO0FBQUE7O0FBQUEsYUFDZCxNQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDLEdBQVI7QUFBWSxVQUFFLEVBQUMsR0FBZjtBQUFtQixhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQTFCO0FBQTBDLFdBQUcsRUFBRUQsR0FBRyxDQUFDUCxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywrQ0FBRDtBQUFNLGFBQUssRUFBRTtBQUFFUyxnQkFBTSxFQUFFO0FBQVYsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFdBQUcsRUFBRSxJQURQO0FBRUUsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsR0FBVjtBQUFlQyxlQUFLLEVBQUM7QUFBckIsU0FGVDtBQUdFLFdBQUcsaUNBQTBCSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsR0FBcEMsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWU4sR0FBRyxDQUFDTyxJQUFoQixDQURGLEVBRUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdQLEdBQUcsQ0FBQ1EsV0FBZixDQUZGLENBTkYsRUFVRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUFRLGFBQUssRUFBQyxNQUFkO0FBQ0UsZUFBTztBQURULG1IQUVRLFNBRlIsK0dBR2E7QUFBQSxlQUFLdkIsT0FBTyxDQUFDZSxHQUFELENBQVo7QUFBQSxPQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FWRixDQURGLENBRGM7QUFBQSxLQUFmLENBREwsQ0FERjtBQThCRDtBQUNKOztHQXRISXRCLE07VUFzQlFZLHFELEVBS29CQyx1RCxFQXFEU0EsdUQ7OztLQWhGckNiLE07QUF1SFVBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwY2ExNGI5YTdjOTA1YjhjYTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7Z3FsLHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgUm93LFxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5mdW5jdGlvbiBEaXNoZXMoe3Jlc3RJZH0pe1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoKVxuICBjb25zdCB7YWRkSXRlbSwgdXNlcn0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkaXNoZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBcblxuICBpZiAocmVzdElkID4gMCl7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRfRElTSEVTLCB7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQ6IHJlc3RJZH0sXG4gICAgfSk7XG4gIFxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1IgaGVyZTwvcD47XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcbiAgXG4gICAgbGV0IHJlc3RhdXJhbnQgPSBkYXRhLnJlc3RhdXJhbnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICAge3Jlc3RhdXJhbnQuZGlzaGVzLm1hcCgocmVzKSA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0ga2V5PXtyZXMuaWR9PlxuICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAxMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMTUwLCB3aWR0aDoxNTAgfX1cbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCk9PiBhZGRJdGVtKHJlcyl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICsgQWRkIFRvIENhcnRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGNvbnN0IEdFVF9BTExfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICAgIGRpc2hlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgfVxuICB9XG5gO1xuICAgICAgICAgIGNvbnN0IHsgbG9hZGluZzIsIGVycm9yMiwgZGF0YTIgfSA9IHVzZVF1ZXJ5KEdFVF9BTExfUkVTVEFVUkFOVF9ESVNIRVMpO1xuXG4gIGxldCBkaXNoZXMgPSBkYXRhMi5kaXNoZXM7XG5cbiAgaWYgKGxvYWRpbmcyKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcjIpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhMikgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge2Rpc2hlcy5mb3JlYWNoKChyZXMpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fSBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxNTAsIHdpZHRoOjE1MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXMuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXMubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoKT0+IGFkZEl0ZW0ocmVzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBBZGQgVG8gQ2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBEaXNoZXMiXSwic291cmNlUm9vdCI6IiJ9