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

  console.log("STATE CART: " + JSON.stringify(state));
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
      cart: state.cart,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXRlbSIsIml0ZW1zIiwiZm91bmRJdGVtIiwibGVuZ3RoIiwiZmluZCIsImkiLCJpZCIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBLG9CQUM0QkMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FEdEM7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNUQyxPQURTLGVBQ1RBLE9BRFM7QUFBQSxNQUNEQyxVQURDLGVBQ0RBLFVBREM7QUFBQSxNQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxNQUNpQkMsT0FEakIsZUFDaUJBLE9BRGpCOztBQUVuQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXFCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZixDQUFqQzs7QUFGbUIsa0JBR01TLHNEQUFRLENBQUM7QUFBQ1QsUUFBSSxFQUFDQTtBQUFOLEdBQUQsQ0FIZDtBQUFBLE1BR1pVLEtBSFk7QUFBQSxNQUdOQyxRQUhNOztBQUluQk4sU0FBTyxDQUFDQyxHQUFSLENBQVksaUJB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QUFhRixLQUFiLEVBQW9CLENBQXBCO0FBQ0EsVUFBSU4sT0FBTyxHQUFFO0FBQUVULGFBQUssRUFBRUEsS0FBVDtBQUFnQlUsYUFBSyxFQUFFZixLQUFLLENBQUNWLElBQU4sQ0FBV3lCLEtBQVgsR0FBbUJYLElBQUksQ0FBQ1k7QUFBL0MsT0FBYjtBQUNEOztBQUNEZixZQUFRLENBQUM7QUFBQ1gsVUFBSSxFQUFDd0I7QUFBTixLQUFELENBQVI7QUFDRCxHQXRCRDs7QUF3QkEsU0FDRSxNQUFDLDJEQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUU7QUFBQ3hCLFVBQUksRUFBRVUsS0FBSyxDQUFDVixJQUFiO0FBQW1CQyxhQUFPLEVBQUVBLE9BQTVCO0FBQXFDQyxnQkFBVSxFQUFFQSxVQUFqRDtBQUE0RCtCLHFCQUFlLEVBQUMsS0FBNUU7QUFBa0Y5QixVQUFJLEVBQUNPLEtBQUssQ0FBQ1AsSUFBN0Y7QUFBa0dDLGFBQU8sRUFBQ0E7QUFBMUcsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZVMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FWRixDQURGO0FBa0JEOztHQWpHUWpCLEs7O0tBQUFBLEs7QUFvR01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDU3NThlZGJkODc2YTRhNmE2NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcChwcm9wcyl7XHJcbiAgdmFyIHtjYXJ0LGFkZEl0ZW0scmVtb3ZlSXRlbSwgdXNlciwgc2V0VXNlcn0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcbiAgY29uc29sZS5sb2coXCJBUFAgQ09OVEVYVCBDQVJUOiBcIitKU09OLnN0cmluZ2lmeShjYXJ0KSlcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe2NhcnQ6Y2FydH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiU1RBVEUgQ0FSVDogXCIrSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIGNvbnNvbGUubG9nKFwiU1RBVEUuVVNFUjogXCIrSlNPTi5zdHJpbmdpZnkoc3RhdGUudXNlcikpXHJcbiAgXHJcbiAgc2V0VXNlciA9ICh1c2VyKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7IHVzZXIgfSk7XHJcbiAgfTtcclxuICBhZGRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQUREIElURU0gU1RBVEUgQ0FSVDogXCIrSlNPTi5zdHJpbmdpZnkoc3RhdGUuY2FydCkpXHJcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcclxuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XHJcbiAgICAvL2lmIG5vdCBpbiBjYXJ0LCBhZGQgaXRlbSBpZiBpdGVtIGlzIGZvdW5kIGluY3JlYXNlIHF1YW5pdHkgKytcclxuICAgIGxldCBmb3VuZEl0ZW0gPSB0cnVlO1xyXG4gICAgaWYoaXRlbXMubGVuZ3RoID4gMCl7XHJcbiAgICAgIGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgIFxyXG4gICAgICBpZighZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGZvdW5kSXRlbSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYEZvdW5kIEl0ZW0gdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxyXG4gICAgLy8gaWYgaXRlbSBpcyBub3QgbmV3LCBhZGQgdG8gY2FydCwgc2V0IHF1YW50aXR5IHRvIDFcclxuICAgIGlmICghZm91bmRJdGVtKSB7XHJcbiAgICAgIC8vc2V0IHF1YW50aXR5IHByb3BlcnR5IHRvIDFcclxuICAgIFxyXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcclxuICAgICAgdmFyIG5ld0NhcnQgPSB7XHJcbiAgICAgICAgICBpdGVtczogWy4uLnN0YXRlLmNhcnQuaXRlbXMsdGVtcF0sXHJcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXHJcbiAgICAgIH1cclxuICAgICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBpdGVtczogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gd2UgYWxyZWFkeSBoYXZlIGl0IHNvIGp1c3QgaW5jcmVhc2UgcXVhbnRpdHkgKytcclxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIHNvIGZhcjogICR7c3RhdGUuY2FydC50b3RhbH1gKVxyXG4gICAgICBuZXdDYXJ0PSB7XHJcbiAgICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcclxuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcclxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfSlcclxuICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH19KSxcclxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZSh7Y2FydDogbmV3Q2FydH0pOyAgLy8gcHJvYmxlbSBpcyB0aGlzIGlzIG5vdCB1cGRhdGVkIHlldFxyXG4gICAgY29uc29sZS5sb2coYHN0YXRlIHJlc2V0IHRvIGNhcnQ6JHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9YClcclxuICAgICBcclxuICB9O1xyXG4gIHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XHJcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxyXG4gICAgY29uc3QgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICBpZiAoZm91bmRJdGVtLnF1YW50aXR5ID4gMSkge1xyXG4gICAgICB2YXIgbmV3Q2FydCA9IHtcclxuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcclxuICAgICAgICBpZihpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpe1xyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pXHJcbiAgICAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9fSksXHJcbiAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSxcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGBOZXdDYXJ0IGFmdGVyIHJlbW92ZTogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxyXG4gICAgfSBlbHNlIHsgLy8gb25seSAxIGluIHRoZSBjYXJ0IHNvIHJlbW92ZSB0aGUgd2hvbGUgaXRlbVxyXG4gICAgICBjb25zb2xlLmxvZyhgVHJ5IHJlbW92ZSBpdGVtICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxyXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gZm91bmRJdGVtLmlkKTtcclxuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdmFyIG5ld0NhcnQ9IHsgaXRlbXM6IGl0ZW1zLCB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UgfSBcclxuICAgIH1cclxuICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnQ6IHN0YXRlLmNhcnQsIGFkZEl0ZW06IGFkZEl0ZW0sIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0saXNBdXRoZW50aWNhdGVkOmZhbHNlLHVzZXI6c3RhdGUudXNlcixzZXRVc2VyOnNldFVzZXJ9fT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG4gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=