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
        lineNumber: 50,
        columnNumber: 13
      }
    }, " ");
  };

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6",
        sm: "4",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
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
          lineNumber: 59,
          columnNumber: 9
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
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
          lineNumber: 71,
          columnNumber: 9
        }
      }, res.name))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }
    }, restaurantID ? renderDishes(restaurantID) : renderDishes(restId)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsInJlc3RJZCIsImlkIiwicmVuZGVyRGlzaGVzIiwibGVuZ3RoIiwicmVzdExpc3QiLCJtYXAiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQVdBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsQ0FBRCxDQURuQjtBQUFBLE1BQ3RCQyxZQURzQjtBQUFBLE1BQ1JDLGVBRFE7O0FBQUEsb0JBRVpDLHdEQUFVLENBQUNDLGdEQUFELENBRkU7QUFBQSxNQUVyQkMsSUFGcUIsZUFFckJBLElBRnFCOztBQUFBLG1CQUdGTCxzREFBUSxDQUFDSyxJQUFELENBSE47QUFBQSxNQUdyQkMsS0FIcUI7QUFBQSxNQUdkQyxRQUhjOztBQUk1QixNQUFNQyxlQUFlLEdBQUdDLDBEQUFILG1CQUFyQjs7QUFKNEIsa0JBZ0JLQywrREFBUSxDQUFDRixlQUFELENBaEJiO0FBQUEsTUFnQnBCRyxPQWhCb0IsYUFnQnBCQSxPQWhCb0I7QUFBQSxNQWdCWEMsS0FoQlcsYUFnQlhBLEtBaEJXO0FBQUEsTUFnQkpDLElBaEJJLGFBZ0JKQSxJQWhCSTs7QUFpQjVCLE1BQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJLENBQUNDLElBQUwsRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDWEMsU0FBTyxDQUFDQyxHQUFSLHVCQUEyQkYsSUFBSSxDQUFDRyxXQUFoQztBQUdGLE1BQUlDLFdBQVcsR0FBR0osSUFBSSxDQUFDRyxXQUFMLENBQWlCRSxNQUFqQixDQUF3QixVQUFDQyxHQUFELEVBQVE7QUFDOUMsV0FBT0EsR0FBRyxDQUFDQyxJQUFKLENBQVNDLFdBQVQsR0FBdUJDLFFBQXZCLENBQWdDdkIsS0FBSyxDQUFDd0IsTUFBdEMsQ0FBUDtBQUNELEdBRmUsQ0FBbEI7QUFJQSxNQUFJQyxNQUFNLEdBQUdQLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZVEsRUFBNUIsQ0EzQjhCLENBNkI5Qjs7QUFDRSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDekIsWUFBRCxFQUFrQjtBQUVyQyxXQUFRLE1BQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVBLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQUNELEdBSEQ7O0FBSUYsTUFBR2dCLFdBQVcsQ0FBQ1UsTUFBWixHQUFxQixDQUF4QixFQUEwQjtBQUl4QixRQUFNQyxRQUFRLEdBQUdYLFdBQVcsQ0FBQ1ksR0FBWixDQUFnQixVQUFDVixHQUFEO0FBQUEsYUFDL0IsTUFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQyxHQUFSO0FBQVksVUFBRSxFQUFDLEdBQWY7QUFBbUIsV0FBRyxFQUFFQSxHQUFHLENBQUNNLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtDQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUVLLGdCQUFNLEVBQUU7QUFBVixTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsV0FBRyxFQUFFLElBRFA7QUFFRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBRlQ7QUFHRSxXQUFHLEVBQ0gsMEJBQXlCWixHQUFHLENBQUNhLEtBQUosQ0FBVUMsR0FKckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBUUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdkLEdBQUcsQ0FBQ2UsV0FBZixDQURGLENBUkYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUEsTUFBQyxpREFBRDtBQUFRLGFBQUssRUFBQyxNQUFkO0FBQXFCLGVBQU8sRUFBRTtBQUFBLGlCQUFLaEMsZUFBZSxDQUFDaUIsR0FBRyxDQUFDTSxFQUFMLENBQXBCO0FBQUEsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE2RE4sR0FBRyxDQUFDQyxJQUFqRSxDQUZBLENBWEYsQ0FERixDQUQrQjtBQUFBLEtBQWhCLENBQWpCO0FBc0JBLFdBRUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1EsUUFESCxDQURBLEVBS0EsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQzNCLFlBQVksR0FBRXlCLFlBQVksQ0FBQ3pCLFlBQUQsQ0FBZCxHQUErQnlCLFlBQVksQ0FBQ0YsTUFBRCxDQUZ4RCxDQUxBLENBRkY7QUFlRCxHQXpDRCxNQXlDTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBUDtBQUNEO0FBQ0E7O0dBOUVRMUIsYztVQWdCMEJZLHVEOzs7S0FoQjFCWixjO0FBK0VTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MzVlODJiZTNmNTNmNzQ1Njc2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2x9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKXtcbiAgY29uc3RbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qge2NhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydClcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUylcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApXG5cblxubGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT57XG4gICAgcmV0dXJuIHJlcy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICB9KVxuXG5sZXQgcmVzdElkID0gc2VhcmNoUXVlcnlbMF0uaWRcbiBcbi8vIGRlZmluZXQgcmVuZGVyZXIgZm9yIERpc2hlc1xuICBjb25zdCByZW5kZXJEaXNoZXMgPSAocmVzdGF1cmFudElEKSA9PiB7XG4gICAgXG4gICAgcmV0dXJuICg8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+KVxuICB9O1xuaWYoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCl7XG4gIFxuICBcblxuICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXG4gICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XG4gICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cbiAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEzMzdgKyByZXMuaW1hZ2UudXJsXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICBcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKT0+IHNldFJlc3RhdXJhbnRJRChyZXMuaWQpfT57cmVzLm5hbWV9PC9CdXR0b24+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db2w+XG4gICkpXG5cbiAgcmV0dXJuKFxuXG4gICAgPENvbnRhaW5lcj5cbiAgICA8Um93IHhzPSczJz5cbiAgICAgIHtyZXN0TGlzdH1cbiAgICA8L1Jvdz5cbiAgXG4gICAgPFJvdyB4cz0nMyc+XG4gICAge31cbiAgICB7cmVzdGF1cmFudElEPyhyZW5kZXJEaXNoZXMocmVzdGF1cmFudElEKSk6KHJlbmRlckRpc2hlcyhyZXN0SWQpKX1cbiAgICA8L1Jvdz5cbiBcbiAgICA8L0NvbnRhaW5lcj5cbiBcbiAgKVxufSBlbHNlIHtcbiAgcmV0dXJuIDxoMT4gTm8gUmVzdGF1cmFudHMgRm91bmQ8L2gxPlxufVxufVxuICAgZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3QiXSwic291cmNlUm9vdCI6IiJ9