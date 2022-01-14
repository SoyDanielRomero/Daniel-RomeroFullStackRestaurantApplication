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

  var _useQuery2,
      _this = this;

  var restId = _ref.restId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      addItem = _useContext.addItem,
      user = _useContext.user;

  var GET_RESTAURANT_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_RESTAURANT_DISHES, (_useQuery2 = {
    variables: {
      id: 1
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useQuery2, "variables", {
    id: 2
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useQuery2, "variables", {
    id: 3
  }), _useQuery2)),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "ERROR here");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          lineNumber: 57,
          columnNumber: 17
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 19
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }, res.description)), user ? __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 27
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], (_jsx = {
        color: "info",
        outline: true
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "color", "primary"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onClick", function onClick() {
        return addItem(res);
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }), _jsx), "+ Add To Cart")) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)));
    }));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 18
      }
    }, " No Restaurant Selected");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJ1c2VyIiwiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwiZ3FsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwicmVzIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsU0FBU0EsTUFBVCxPQUF5QjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsTUFBUSxRQUFSQSxNQUFROztBQUFBLGtCQUNpQkMsc0RBQVEsRUFEekI7QUFBQSxNQUNoQkMsWUFEZ0I7QUFBQSxNQUNGQyxlQURFOztBQUFBLG9CQUVDQyx3REFBVSxDQUFDQyxnREFBRCxDQUZYO0FBQUEsTUFFaEJDLE9BRmdCLGVBRWhCQSxPQUZnQjtBQUFBLE1BRVBDLElBRk8sZUFFUEEsSUFGTzs7QUFJekIsTUFBTUMscUJBQXFCLEdBQUdDLDBEQUFILG1CQUEzQjtBQWtCRSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQXRCdUIsa0JBd0JVQywrREFBUSxDQUFDSixxQkFBRDtBQUN2Q0ssYUFBUyxFQUFFO0FBQUVDLFFBQUUsRUFBRTtBQUFOO0FBRDRCLHdIQUU1QjtBQUFFQSxNQUFFLEVBQUU7QUFBTixHQUY0QixzSEFHNUI7QUFBRUEsTUFBRSxFQUFFO0FBQU4sR0FINEIsZUF4QmxCO0FBQUEsTUF3QmZDLE9BeEJlLGFBd0JmQSxPQXhCZTtBQUFBLE1Bd0JOQyxLQXhCTSxhQXdCTkEsS0F4Qk07QUFBQSxNQXdCQ0MsSUF4QkQsYUF3QkNBLElBeEJEOztBQThCdkIsTUFBSUYsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDWCxNQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFFWCxNQUFJQyxVQUFVLEdBQUdELElBQUksQ0FBQ0MsVUFBdEI7O0FBRUEsTUFBSWxCLE1BQU0sR0FBRyxDQUFiLEVBQWU7QUFFYixXQUNFLG1FQUNLa0IsVUFBVSxDQUFDQyxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxHQUFEO0FBQUE7O0FBQUEsYUFDckIsTUFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQyxHQUFSO0FBQVksVUFBRSxFQUFDLEdBQWY7QUFBbUIsYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUExQjtBQUEwQyxXQUFHLEVBQUVELEdBQUcsQ0FBQ1AsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsK0NBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRVMsZ0JBQU0sRUFBRTtBQUFWLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsa0RBQUQ7QUFDRSxXQUFHLEVBQUUsSUFEUDtBQUVFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFLEdBQVY7QUFBZUMsZUFBSyxFQUFDO0FBQXJCLFNBRlQ7QUFHRSxXQUFHLGlDQUEwQkosR0FBRyxDQUFDSyxLQUFKLENBQVVDLEdBQXBDLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBTUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVlOLEdBQUcsQ0FBQ08sSUFBaEIsQ0FERixFQUVFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXUCxHQUFHLENBQUNRLFdBQWYsQ0FGRixDQU5GLEVBVUl0QixJQUFJLEdBQUk7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVSLE1BQUMsaURBQUQ7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUNFLGVBQU87QUFEVCxrSEFFUSxTQUZSLDhHQUdhO0FBQUEsZUFBS0QsT0FBTyxDQUFDZSxHQUFELENBQVo7QUFBQSxPQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRlEsQ0FBSixHQVdHLGtFQXJCWCxDQURGLENBRHFCO0FBQUEsS0FBdEIsQ0FETCxDQURGO0FBOEJNLEdBaENSLE1BaUNVO0FBQ0YsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFQO0FBQ0Q7QUFDSjs7R0F4RUl0QixNO1VBc0JRWSxxRCxFQUVrQkMsdUQ7OztLQXhCMUJiLE07QUF5RVVBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzhlODBlZmU5ODUyNGJiNzc4MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHtncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBSb3csXG4gIENvbH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmZ1bmN0aW9uIERpc2hlcyh7cmVzdElkfSl7XG4gIGNvbnN0IFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IHthZGRJdGVtLCB1c2VyfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuY29uc3QgR0VUX1JFU1RBVVJBTlRfRElTSEVTID0gZ3FsYFxuICBxdWVyeSgkaWQ6IElEISkge1xuICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRpc2hlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UX0RJU0hFUywge1xuICAgIHZhcmlhYmxlczogeyBpZDogMX0sXG4gICAgdmFyaWFibGVzOiB7IGlkOiAyfSxcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IDN9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgcmVzdGF1cmFudCA9IGRhdGEucmVzdGF1cmFudDtcblxuICBpZiAocmVzdElkID4gMCl7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgICB7cmVzdGF1cmFudC5kaXNoZXMubWFwKChyZXMpID0+IChcbiAgICAgICAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fSBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxNTAsIHdpZHRoOjE1MCB9fVxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXMuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXMubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICB7IHVzZXIgPyAoPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCk9PiBhZGRJdGVtKHJlcyl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICsgQWRkIFRvIENhcnRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4pOig8PjwvPil9XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICByZXR1cm4gPGgxPiBObyBSZXN0YXVyYW50IFNlbGVjdGVkPC9oMT5cbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBEaXNoZXMiXSwic291cmNlUm9vdCI6IiJ9