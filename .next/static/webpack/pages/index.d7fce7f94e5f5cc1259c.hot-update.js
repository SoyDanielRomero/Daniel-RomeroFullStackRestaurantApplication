webpackHotUpdate_N_E("pages/index",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "D:\\GitHub\\Capstone\\Daniel-RomeroFullStackRestaurantApplication\\components\\restaurantList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart),
      state = _useState2[0],
      setState = _useState2[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Not found");
  console.log("Query Data: ".concat(data.restaurants));
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });
  var restId = searchQuery[0].id; // definet renderer for Dishes

  var renderDishes = function renderDishes(restaurantID) {
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: restaurantID,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, " ");
  };

  var filterDishes = searchQuery.forEach(function (res) {
    renderDishes(res.id);
  });

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6",
        sm: "4",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337" + res.image.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "info",
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, res.name))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }
    }, renderDishes(restaurantID), filterDishes));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 10
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "l1Ak/LzRian4lZrHyfOjQOP3flU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsInJlc3RJZCIsImlkIiwicmVuZGVyRGlzaGVzIiwiZmlsdGVyRGlzaGVzIiwiZm9yRWFjaCIsImxlbmd0aCIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFXQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUFBOztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLENBQUQsQ0FEbkI7QUFBQSxNQUN0QkMsWUFEc0I7QUFBQSxNQUNSQyxlQURROztBQUFBLG9CQUVaQyx3REFBVSxDQUFDQyxnREFBRCxDQUZFO0FBQUEsTUFFckJDLElBRnFCLGVBRXJCQSxJQUZxQjs7QUFBQSxtQkFHRkwsc0RBQVEsQ0FBQ0ssSUFBRCxDQUhOO0FBQUEsTUFHckJDLEtBSHFCO0FBQUEsTUFHZEMsUUFIYzs7QUFJNUIsTUFBTUMsZUFBZSxHQUFHQywwREFBSCxtQkFBckI7O0FBSjRCLGtCQWdCS0MsK0RBQVEsQ0FBQ0YsZUFBRCxDQWhCYjtBQUFBLE1BZ0Jw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QSxPQUNBLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dVLFFBREgsQ0FEQSxFQUtBLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0NKLFlBQVksQ0FBQ3pCLFlBQUQsQ0FEYixFQUVDMEIsWUFGRCxDQUxBLENBRkY7QUFlRCxHQXZDRCxNQXVDTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBUDtBQUNEO0FBQ0E7O0dBakZRN0IsYztVQWdCMEJZLHVEOzs7S0FoQjFCWixjO0FBa0ZTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kN2ZjZTdmOTRlNWY1Y2MxMjU5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKXtcbiAgY29uc3RbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qge2NhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydClcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUylcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApXG5cblxubGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT57XG4gICAgcmV0dXJuIHJlcy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICB9KVxuXG5sZXQgcmVzdElkID0gc2VhcmNoUXVlcnlbMF0uaWRcblxuXG4vLyBkZWZpbmV0IHJlbmRlcmVyIGZvciBEaXNoZXNcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xuICAgIFxuICAgIHJldHVybiAoPERpc2hlcyByZXN0SWQ9e3Jlc3RhdXJhbnRJRH0+IDwvRGlzaGVzPilcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJEaXNoZXMgPSBzZWFyY2hRdWVyeS5mb3JFYWNoKChyZXMpPT57XG4gICAgcmVuZGVyRGlzaGVzKHJlcy5pZClcbiAgfSlcbmlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApe1xuXG4gIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcbiAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzLmlkfT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2ArIHJlcy5pbWFnZS51cmxcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgIFxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpPT4gc2V0UmVzdGF1cmFudElEKHJlcy5pZCl9PntyZXMubmFtZX08L0J1dHRvbj5cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbD5cbiAgKSlcblxuICByZXR1cm4oXG5cbiAgICA8Q29udGFpbmVyPlxuICAgIDxSb3cgeHM9JzMnPlxuICAgICAge3Jlc3RMaXN0fVxuICAgIDwvUm93PlxuICBcbiAgICA8Um93IHhzPSczJz5cbiAgICB7cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9XG4gICAge2ZpbHRlckRpc2hlc31cbiAgICA8L1Jvdz5cbiBcbiAgICA8L0NvbnRhaW5lcj5cbiBcbiAgKVxufSBlbHNlIHtcbiAgcmV0dXJuIDxoMT4gTm8gUmVzdGF1cmFudHMgRm91bmQ8L2gxPlxufVxufVxuICAgZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3QiXSwic291cmNlUm9vdCI6IiJ9