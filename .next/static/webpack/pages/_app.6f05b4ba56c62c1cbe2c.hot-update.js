webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "D:\\GitHub\\Capstone\\Daniel-RomeroFullStackRestaurantApplication\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser;

  console.log("APP CONTEXT CART: " + JSON.stringify(cart));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cart: cart
  }),
      state = _useState[0],
      setState = _useState[1];

  console.log("STATE CART: " + JSON.stringify(state.cart));
  var Component = props.Component,
      pageProps = props.pageProps;
  console.log("STATE.USER: " + JSON.stringify(state.user));

  setUser = function setUser(user) {
    setState({
      user: user
    });
  };

  addItem = function addItem(item) {
    console.log("ADD ITEM STATE CART: " + JSON.stringify(state.cart));
    var items = state.cart.items; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++

    var foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(function (i) {
        return i.id === item.id;
      });
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log("Found Item value: ".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      var temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [temp]),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log("Total items: ".concat(JSON.stringify(newCart)));
    } else {
      // we already have it so just increase quantity ++
      console.log("Total so far:  ".concat(state.cart.total));
      newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    }); // problem is this is not updated yet

    console.log("state reset to cart:".concat(JSON.stringify(state)));
  };

  removeItem = function removeItem(item) {
    var items = state.cart.items; //check for item already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log("Try remove item ".concat(JSON.stringify(foundItem)));
      var index = items.findIndex(function (i) {
        return i.id === foundItem.id;
      });
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  };

  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      cart: cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: false,
      user: state.user,
      setUser: setUser
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }))));
}

_s(MyApp, "qHQMttOq1zPRCjIIZxRYE6VYkS4=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXRlbSIsIml0ZW1zIiwiZm91bmRJdGVtIiwibGVuZ3RoIiwiZmluZCIsImkiLCJpZCIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBLG9CQUM0QkMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FEdEM7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNUQyxPQURTLGVBQ1RBLE9BRFM7QUFBQSxNQUNEQyxVQURDLGVBQ0RBLFVBREM7QUFBQSxNQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxNQUNpQkMsT0FEakIsZUFDaUJBLE9BRGpCOztBQUVuQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXFCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZixDQUFqQzs7QUFGbUIsa0JBR01TLHNEQUFRLENBQUM7QUFBQ1QsUUFBSSxFQUFDQTtBQUFOLEdBQUQsQ0FIZDtBQUFBLE1BR1pVLEtBSFk7QUFBQSxNQUdOQyxRQUhNOztBQUluQk4sU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQWVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxLQUFLLENBQUNWLElBQXJCLENBQTNCO0FBSm1CLE1BS1hZLFNBTFcsR0FLY2YsS0FMZCxDQUtYZSxTQUxXO0FBQUEsTUFLQUMsU0FMQSxHQUtjaEIsS0FMZCxDQUtBZ0IsU0FMQTtBQU1uQlIsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQWVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxLQUFLLENBQUNQLElBQXJCLENBQTNCOztBQUVBQyxTQUFPLEdBQUcsaUJBQUNELElBQUQsRUFBVTtBQUNsQlEsWUFBUSxDQUFDO0FBQUVSLFVBQUksRUFBSkE7QUFBRixLQUFELENBQVI7QUFDRCxHQUZEOztBQUdBRixTQUFPLEdBQUcsaUJBQUNhLElBQUQsRUFBVTtBQUNsQlQsV0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUUsS0FBSyxDQUFDVixJQUFyQixDQUFwQztBQURrQixRQUVaZSxLQUZZLEdBRUZMLEtBQUssQ0FBQ1YsSUFGSixDQUVaZSxLQUZZLEVBR2xCO0FBQ0E7O0FBQ0EsUUFBSUMsU0FBUyxHQUFHLElBQWhCOztBQUNBLFFBQUdELEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQWxCLEVBQW9CO0FBQ2xCRCxlQUFTLEdBQUdELEtBQUssQ0FBQ0csSUFBTixDQUFXLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU04sSUFBSSxDQUFDTSxFQUFyQjtBQUFBLE9BQVgsQ0FBWjtBQUVBLFVBQUcsQ0FBQ0osU0FBSixFQUFlQSxTQUFTLEdBQUcsS0FBWjtBQUNoQixLQUpELE1BS0k7QUFDRkEsZUFBUyxHQUFHLEtBQVo7QUFDRDs7QUFDRFgsV0FBTyxDQUFDQyxHQUFSLDZCQUFpQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVRLFNBQWYsQ0FBakMsR0Fka0IsQ0FlbEI7O0FBQ0EsUUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2Q7QUFFQSxVQUFJSyxJQUFJLEdBQUdkLElBQUksQ0FBQ2UsS0FBTCxDQUFXZixJQUFJLENBQUNDLFNBQUwsQ0FBZU0sSUFBZixDQUFYLENBQVg7QUFDQU8sVUFBSSxDQUFDRSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHO0FBQ1ZULGFBQUsseUdBQU1MLEtBQUssQ0FBQ1YsSUFBTixDQUFXZSxLQUFqQixJQUF1Qk0sSUFBdkIsRUFESztBQUVWSSxhQUFLLEVBQUVmLEtBQUssQ0FBQ1YsSUFBTixDQUFXeUIsS0FBWCxHQUFtQlgsSUFBSSxDQUFDWTtBQUZyQixPQUFkO0FBSUFmLGNBQVEsQ0FBQztBQUFDWCxZQUFJLEVBQUN3QjtBQUFOLE9BQUQsQ0FBUjtBQUNBbkIsYUFBTyxDQUFDQyxHQUFSLHdCQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVnQixPQUFmLENBQTVCO0FBQ0QsS0FYRCxNQVdPO0FBQ0w7QUFDQW5CLGFBQU8sQ0FBQ0MsR0FBUiwwQkFBOEJJLEtBQUssQ0FBQ1YsSUFBTixDQUFXeUIsS0FBekM7QUFDQUQsYUFBTyxHQUFFO0FBQ0xULGFBQUssRUFBRUEsS0FBSyxDQUFDWSxHQUFOLENBQVUsVUFBQ2IsSUFBRCxFQUFTO0FBQ3hCLGNBQUdBLElBQUksQ0FBQ00sRUFBTCxLQUFZSixTQUFTLENBQUNJLEVBQXpCLEVBQTRCO0FBQzFCLG1CQUFPUSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZixJQUFsQixFQUF3QjtBQUFFUyxzQkFBUSxFQUFFVCxJQUFJLENBQUNTLFFBQUwsR0FBZ0I7QUFBNUIsYUFBeEIsQ0FBUDtBQUNBLFdBRkYsTUFFTTtBQUNOLG1CQUFPVCxJQUFQO0FBQ0Q7QUFBQyxTQUxLLENBREY7QUFPTFcsYUFBSyxFQUFFZixLQUFLLENBQUNWLElBQU4sQ0FBV3lCLEtBQVgsR0FBbUJYLElBQUksQ0FBQ1k7QUFQMUIsT0FBVDtBQVNEOztBQUNEZixZQUFRLENBQUM7QUFBQ1gsVUFBSSxFQUFFd0I7QUFBUCxLQUFELENBQVIsQ0F4Q2tCLENBd0NVOztBQUM1Qm5CLFdBQU8sQ0FBQ0MsR0FBUiwrQkFBbUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxLQUFmLENBQW5DO0FBRUQsR0EzQ0Q7O0FBNENBUixZQUFVLEdBQUcsb0JBQUNZLElBQUQsRUFBVTtBQUFBLFFBQ2ZDLEtBRGUsR0FDTEwsS0FBSyxDQUFDVixJQURELENBQ2ZlLEtBRGUsRUFFckI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNHLElBQU4sQ0FBVyxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNOLElBQUksQ0FBQ00sRUFBckI7QUFBQSxLQUFYLENBQWxCOztBQUNBLFFBQUlKLFNBQVMsQ0FBQ08sUUFBVixHQUFxQixDQUF6QixFQUE0QjtBQUMxQixVQUFJQyxPQUFPLEdBQUc7QUFDWlQsYUFBSyxFQUFFQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDYixJQUFELEVBQVM7QUFDMUIsY0FBR0EsSUFBSSxDQUFDTSxFQUFMLEtBQVlKLFNBQVMsQ0FBQ0ksRUFBekIsRUFBNEI7QUFDMUIsbUJBQU9RLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JmLElBQWxCLEVBQXdCO0FBQUVTLHNCQUFRLEVBQUVULElBQUksQ0FBQ1MsUUFBTCxHQUFnQjtBQUE1QixhQUF4QixDQUFQO0FBQ0EsV0FGRixNQUVNO0FBQ04sbUJBQU9ULElBQVA7QUFDRDtBQUFDLFNBTE8sQ0FESztBQU9kVyxhQUFLLEVBQUVmLEtBQUssQ0FBQ1YsSUFBTixDQUFXeUIsS0FBWCxHQUFtQlgsSUFBSSxDQUFDWTtBQVBqQixPQUFkLENBRDBCLENBVTFCO0FBQ0QsS0FYRCxNQVdPO0FBQUU7QUFDUHJCLGFBQU8sQ0FBQ0MsR0FBUiwyQkFBK0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUSxTQUFmLENBQS9CO0FBQ0EsVUFBTWMsS0FBSyxHQUFHZixLQUFLLENBQUNnQixTQUFOLENBQWdCLFVBQUNaLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU0osU0FBUyxDQUFDSSxFQUExQjtBQUFBLE9BQWhCLENBQWQ7QUFDQUwsV0FBSyxDQUFDaUIsTUFBTixDQUFhRixLQUFiLEVBQW9CLENBQXBCO0FBQ0EsVUFBSU4sT0FBTyxHQUFFO0FBQUVULGFBQUssRUFBRUEsS0FBVDtBQUFnQlUsYUFBSyxFQUFFZixLQUFLLENBQUNWLElBQU4sQ0FBV3lCLEtBQVgsR0FBbUJYLElBQUksQ0FBQ1k7QUFBL0MsT0FBYjtBQUNEOztBQUNEZixZQUFRLENBQUM7QUFBQ1gsVUFBSSxFQUFDd0I7QUFBTixLQUFELENBQVI7QUFDRCxHQXRCRDs7QUF3QkEsU0FDRSxNQUFDLDJEQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUU7QUFBQ3hCLFVBQUksRUFBRUEsSUFBUDtBQUFhQyxhQUFPLEVBQUVBLE9BQXRCO0FBQStCQyxnQkFBVSxFQUFFQSxVQUEzQztBQUFzRCtCLHFCQUFlLEVBQUMsS0FBdEU7QUFBNEU5QixVQUFJLEVBQUNPLEtBQUssQ0FBQ1AsSUFBdkY7QUFBNEZDLGFBQU8sRUFBQ0E7QUFBcEcsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZVMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FWRixDQURGO0FBa0JEOztHQWpHUWpCLEs7O0tBQUFBLEs7QUFvR01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmYwNWI0YmE1NmM2MmMxY2JlMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcChwcm9wcyl7XHJcbiAgdmFyIHtjYXJ0LGFkZEl0ZW0scmVtb3ZlSXRlbSwgdXNlciwgc2V0VXNlcn0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcbiAgY29uc29sZS5sb2coXCJBUFAgQ09OVEVYVCBDQVJUOiBcIitKU09OLnN0cmluZ2lmeShjYXJ0KSlcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe2NhcnQ6Y2FydH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiU1RBVEUgQ0FSVDogXCIrSlNPTi5zdHJpbmdpZnkoc3RhdGUuY2FydCkpXHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgY29uc29sZS5sb2coXCJTVEFURS5VU0VSOiBcIitKU09OLnN0cmluZ2lmeShzdGF0ZS51c2VyKSlcclxuICBcclxuICBzZXRVc2VyID0gKHVzZXIpID0+IHtcclxuICAgIHNldFN0YXRlKHsgdXNlciB9KTtcclxuICB9O1xyXG4gIGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJBREQgSVRFTSBTVEFURSBDQVJUOiBcIitKU09OLnN0cmluZ2lmeShzdGF0ZS5jYXJ0KSlcclxuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xyXG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcclxuICAgIC8vaWYgbm90IGluIGNhcnQsIGFkZCBpdGVtIGlmIGl0ZW0gaXMgZm91bmQgaW5jcmVhc2UgcXVhbml0eSArK1xyXG4gICAgbGV0IGZvdW5kSXRlbSA9IHRydWU7XHJcbiAgICBpZihpdGVtcy5sZW5ndGggPiAwKXtcclxuICAgICAgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgXHJcbiAgICAgIGlmKCFmb3VuZEl0ZW0pIGZvdW5kSXRlbSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZm91bmRJdGVtID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgRm91bmQgSXRlbSB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXHJcbiAgICAvLyBpZiBpdGVtIGlzIG5vdCBuZXcsIGFkZCB0byBjYXJ0LCBzZXQgcXVhbnRpdHkgdG8gMVxyXG4gICAgaWYgKCFmb3VuZEl0ZW0pIHtcclxuICAgICAgLy9zZXQgcXVhbnRpdHkgcHJvcGVydHkgdG8gMVxyXG4gICAgXHJcbiAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgICAgIHRlbXAucXVhbnRpdHkgPSAxO1xyXG4gICAgICB2YXIgbmV3Q2FydCA9IHtcclxuICAgICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuY2FydC5pdGVtcyx0ZW1wXSxcclxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcclxuICAgICAgfVxyXG4gICAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSlcclxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB3ZSBhbHJlYWR5IGhhdmUgaXQgc28ganVzdCBpbmNyZWFzZSBxdWFudGl0eSArK1xyXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgc28gZmFyOiAgJHtzdGF0ZS5jYXJ0LnRvdGFsfWApXHJcbiAgICAgIG5ld0NhcnQ9IHtcclxuICAgICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+e1xyXG4gICAgICAgICAgICBpZihpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9KVxyXG4gICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfX0pLFxyXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFN0YXRlKHtjYXJ0OiBuZXdDYXJ0fSk7ICAvLyBwcm9ibGVtIGlzIHRoaXMgaXMgbm90IHVwZGF0ZWQgeWV0XHJcbiAgICBjb25zb2xlLmxvZyhgc3RhdGUgcmVzZXQgdG8gY2FydDoke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKVxyXG4gICAgIFxyXG4gIH07XHJcbiAgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcclxuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcclxuICAgIGlmIChmb3VuZEl0ZW0ucXVhbnRpdHkgPiAxKSB7XHJcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xyXG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+e1xyXG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfSlcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH19KSxcclxuICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlLFxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coYE5ld0NhcnQgYWZ0ZXIgcmVtb3ZlOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXHJcbiAgICB9IGVsc2UgeyAvLyBvbmx5IDEgaW4gdGhlIGNhcnQgc28gcmVtb3ZlIHRoZSB3aG9sZSBpdGVtXHJcbiAgICAgIGNvbnNvbGUubG9nKGBUcnkgcmVtb3ZlIGl0ZW0gJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmlkID09PSBmb3VuZEl0ZW0uaWQpO1xyXG4gICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB2YXIgbmV3Q2FydD0geyBpdGVtczogaXRlbXMsIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSB9IFxyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Y2FydDogY2FydCwgYWRkSXRlbTogYWRkSXRlbSwgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxpc0F1dGhlbnRpY2F0ZWQ6ZmFsc2UsdXNlcjpzdGF0ZS51c2VyLHNldFVzZXI6c2V0VXNlcn19PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtXCJcclxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICBcclxuICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==