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
      isAuthenticated = _useContext.isAuthenticated,
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cart: cart,
    isAuthenticated: isAuthenticated,
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
      isAuthenticated: isAuthenticated,
      user: state.user,
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

_s(MyApp, "3Qh77rieBzqhr/2hilI5BWMeGo4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIml0ZW0iLCJpdGVtcyIsImZvdW5kSXRlbSIsImxlbmd0aCIsImZpbmQiLCJpIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBLG9CQUM2Q0Msd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FEdkQ7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNUQyxPQURTLGVBQ1RBLE9BRFM7QUFBQSxNQUNEQyxVQURDLGVBQ0RBLFVBREM7QUFBQSxNQUNXQyxlQURYLGVBQ1dBLGVBRFg7QUFBQSxNQUM0QkMsSUFENUIsZUFDNEJBLElBRDVCO0FBQUEsTUFDa0NDLE9BRGxDLGVBQ2tDQSxPQURsQzs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQztBQUFDTixRQUFJLEVBQUNBLElBQU47QUFBWUcsbUJBQWUsRUFBQ0EsZUFBNUI7QUFBNENDLFFBQUksRUFBQ0E7QUFBakQsR0FBRCxDQUZkO0FBQUEsTUFFWkcsS0FGWTtBQUFBLE1BRU5DLFFBRk07O0FBQUEsTUFHWEMsU0FIVyxHQUdjWixL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d0JBLFNBQ0UsTUFBQywyREFBRCxDQUFZLFFBQVo7QUFBcUIsU0FBSyxFQUFFO0FBQUN6QixVQUFJLEVBQUVPLEtBQUssQ0FBQ1AsSUFBYjtBQUFtQkMsYUFBTyxFQUFFQSxPQUE1QjtBQUFxQ0MsZ0JBQVUsRUFBRUEsVUFBakQ7QUFBNERDLHFCQUFlLEVBQUNBLGVBQTVFO0FBQTRGQyxVQUFJLEVBQUNHLEtBQUssQ0FBQ0gsSUFBdkc7QUFBNEdDLGFBQU8sRUFBQ0E7QUFBcEgsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZUssU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FWRixDQURGO0FBa0JEOztHQTlGUWQsSzs7S0FBQUEsSztBQWlHTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNjI0ZTg3NjhhMTVhZjVlZDAxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHByb3BzKXtcclxuICB2YXIge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtLCBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIsIHNldFVzZXJ9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxyXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7Y2FydDpjYXJ0LCBpc0F1dGhlbnRpY2F0ZWQ6aXNBdXRoZW50aWNhdGVkLHVzZXI6dXNlcn0pO1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIFxyXG4gIFxyXG4gIHNldFVzZXIgPSAodXNlcikgPT4ge1xyXG4gICAgc2V0U3RhdGUoeyB1c2VyOiB1c2VyIH0pO1xyXG4gIH07XHJcbiAgYWRkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcclxuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICAvL2lmIG5vdCBpbiBjYXJ0LCBhZGQgaXRlbSBpZiBpdGVtIGlzIGZvdW5kIGluY3JlYXNlIHF1YW5pdHkgKytcclxuICAgIGxldCBmb3VuZEl0ZW0gPSB0cnVlO1xyXG4gICAgaWYoaXRlbXMubGVuZ3RoID4gMCl7XHJcbiAgICAgIGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgIFxyXG4gICAgICBpZighZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGZvdW5kSXRlbSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYEZvdW5kIEl0ZW0gdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxyXG4gICAgLy8gaWYgaXRlbSBpcyBub3QgbmV3LCBhZGQgdG8gY2FydCwgc2V0IHF1YW50aXR5IHRvIDFcclxuICAgIGlmICghZm91bmRJdGVtKSB7XHJcbiAgICAgIC8vc2V0IHF1YW50aXR5IHByb3BlcnR5IHRvIDFcclxuICAgIFxyXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcclxuICAgICAgdmFyIG5ld0NhcnQgPSB7XHJcbiAgICAgICAgICBpdGVtczogWy4uLnN0YXRlLmNhcnQuaXRlbXMsdGVtcF0sXHJcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXHJcbiAgICAgIH1cclxuICAgICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBpdGVtczogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gd2UgYWxyZWFkeSBoYXZlIGl0IHNvIGp1c3QgaW5jcmVhc2UgcXVhbnRpdHkgKytcclxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIHNvIGZhcjogICR7c3RhdGUuY2FydC50b3RhbH1gKVxyXG4gICAgICBuZXdDYXJ0PSB7XHJcbiAgICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcclxuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcclxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfSlcclxuICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH19KSxcclxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZSh7Y2FydDogbmV3Q2FydH0pOyAgLy8gcHJvYmxlbSBpcyB0aGlzIGlzIG5vdCB1cGRhdGVkIHlldFxyXG4gICAgY29uc29sZS5sb2coYHN0YXRlIHJlc2V0IHRvIGNhcnQ6JHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9YClcclxuICAgICBcclxuICB9O1xyXG4gIHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XHJcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxyXG4gICAgY29uc3QgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICBpZiAoZm91bmRJdGVtLnF1YW50aXR5ID4gMSkge1xyXG4gICAgICB2YXIgbmV3Q2FydCA9IHtcclxuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcclxuICAgICAgICBpZihpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpe1xyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pXHJcbiAgICAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9fSksXHJcbiAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSxcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGBOZXdDYXJ0IGFmdGVyIHJlbW92ZTogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxyXG4gICAgfSBlbHNlIHsgLy8gb25seSAxIGluIHRoZSBjYXJ0IHNvIHJlbW92ZSB0aGUgd2hvbGUgaXRlbVxyXG4gICAgICBjb25zb2xlLmxvZyhgVHJ5IHJlbW92ZSBpdGVtICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxyXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gZm91bmRJdGVtLmlkKTtcclxuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdmFyIG5ld0NhcnQ9IHsgaXRlbXM6IGl0ZW1zLCB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UgfSBcclxuICAgIH1cclxuICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnQ6IHN0YXRlLmNhcnQsIGFkZEl0ZW06IGFkZEl0ZW0sIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0saXNBdXRoZW50aWNhdGVkOmlzQXV0aGVudGljYXRlZCx1c2VyOnN0YXRlLnVzZXIsc2V0VXNlcjpzZXRVc2VyfX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgIFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuXHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxuICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9