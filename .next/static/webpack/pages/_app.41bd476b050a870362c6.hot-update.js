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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cart: cart,
    user: user
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps;

  setUser = function setUser(user) {
    setState({
      user: user
    });
  };

  addItem = function addItem(item) {
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
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: _components_context__WEBPACK_IMPORTED_MODULE_4__["default"].isAuthenticated,
      user: user,
      setUser: setUser
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }))));
}

_s(MyApp, "gwYcPhhuj99J2zudapl2qR9P/mc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIml0ZW0iLCJpdGVtcyIsImZvdW5kSXRlbSIsImxlbmd0aCIsImZpbmQiLCJpIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBLG9CQUM0QkMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FEdEM7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNUQyxPQURTLGVBQ1RBLE9BRFM7QUFBQSxNQUNEQyxVQURDLGVBQ0RBLFVBREM7QUFBQSxNQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxNQUNpQkMsT0FEakIsZUFDaUJBLE9BRGpCOztBQUFBLGtCQUVNQyxzREFBUSxDQUFDO0FBQUNMLFFBQUksRUFBQ0EsSUFBTjtBQUFZRyxRQUFJLEVBQUNBO0FBQWpCLEdBQUQsQ0FGZDtBQUFBLE1BRVpHLEtBRlk7QUFBQSxNQUVOQyxRQUZNOztBQUFBLE1BR1hDLFNBSFcsR0FHY1gsS0FIZCxDQUdYVyxTQUhXO0FBQUEsTUFHQUMsU0FIQSxHQUdjWixLQUhkLENBR0FZLFNBSEE7O0FB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SSxFQUFFTSxLQUFLLENBQUNOLElBQWI7QUFBbUJDLGFBQU8sRUFBRUEsT0FBNUI7QUFBcUNDLGdCQUFVLEVBQUVBLFVBQWpEO0FBQTREK0IscUJBQWUsRUFBQ2xDLDJEQUFVLENBQUNrQyxlQUF2RjtBQUF1RzlCLFVBQUksRUFBQ0EsSUFBNUc7QUFBaUhDLGFBQU8sRUFBQ0E7QUFBekgsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZUssU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FWRixDQURGO0FBa0JEOztHQTlGUWIsSzs7S0FBQUEsSztBQWlHTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MWJkNDc2YjA1MGE4NzAzNjJjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHByb3BzKXtcclxuICB2YXIge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtLCB1c2VyLCBzZXRVc2VyfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe2NhcnQ6Y2FydCwgdXNlcjp1c2VyfSk7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgXHJcbiAgXHJcbiAgc2V0VXNlciA9ICh1c2VyKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7IHVzZXI6dXNlciB9KTtcclxuICB9O1xyXG4gIGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XHJcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxyXG4gICAgLy9pZiBub3QgaW4gY2FydCwgYWRkIGl0ZW0gaWYgaXRlbSBpcyBmb3VuZCBpbmNyZWFzZSBxdWFuaXR5ICsrXHJcbiAgICBsZXQgZm91bmRJdGVtID0gdHJ1ZTtcclxuICAgIGlmKGl0ZW1zLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcclxuICAgICBcclxuICAgICAgaWYoIWZvdW5kSXRlbSkgZm91bmRJdGVtID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBmb3VuZEl0ZW0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGBGb3VuZCBJdGVtIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcclxuICAgIC8vIGlmIGl0ZW0gaXMgbm90IG5ldywgYWRkIHRvIGNhcnQsIHNldCBxdWFudGl0eSB0byAxXHJcbiAgICBpZiAoIWZvdW5kSXRlbSkge1xyXG4gICAgICAvL3NldCBxdWFudGl0eSBwcm9wZXJ0eSB0byAxXHJcbiAgICBcclxuICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICAgICAgdGVtcC5xdWFudGl0eSA9IDE7XHJcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xyXG4gICAgICAgICAgaXRlbXM6IFsuLi5zdGF0ZS5jYXJ0Lml0ZW1zLHRlbXBdLFxyXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxyXG4gICAgICB9XHJcbiAgICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KVxyXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBpdCBzbyBqdXN0IGluY3JlYXNlIHF1YW50aXR5ICsrXHJcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBzbyBmYXI6ICAke3N0YXRlLmNhcnQudG90YWx9YClcclxuICAgICAgbmV3Q2FydD0ge1xyXG4gICAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0pXHJcbiAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9fSksXHJcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUoe2NhcnQ6IG5ld0NhcnR9KTsgIC8vIHByb2JsZW0gaXMgdGhpcyBpcyBub3QgdXBkYXRlZCB5ZXRcclxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZSByZXNldCB0byBjYXJ0OiR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApXHJcbiAgICAgXHJcbiAgfTtcclxuICByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xyXG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcclxuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcclxuICAgICAgdmFyIG5ld0NhcnQgPSB7XHJcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT57XHJcbiAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcclxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IC0gMSB9KVxyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfX0pLFxyXG4gICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhgTmV3Q2FydCBhZnRlciByZW1vdmU6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcclxuICAgIH0gZWxzZSB7IC8vIG9ubHkgMSBpbiB0aGUgY2FydCBzbyByZW1vdmUgdGhlIHdob2xlIGl0ZW1cclxuICAgICAgY29uc29sZS5sb2coYFRyeSByZW1vdmUgaXRlbSAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcclxuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGkpID0+IGkuaWQgPT09IGZvdW5kSXRlbS5pZCk7XHJcbiAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHZhciBuZXdDYXJ0PSB7IGl0ZW1zOiBpdGVtcywgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlIH0gXHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYXJ0OiBzdGF0ZS5jYXJ0LCBhZGRJdGVtOiBhZGRJdGVtLCByZW1vdmVJdGVtOiByZW1vdmVJdGVtLGlzQXV0aGVudGljYXRlZDpBcHBDb250ZXh0LmlzQXV0aGVudGljYXRlZCx1c2VyOnVzZXIsc2V0VXNlcjpzZXRVc2VyfX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgIFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuXHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxuICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9