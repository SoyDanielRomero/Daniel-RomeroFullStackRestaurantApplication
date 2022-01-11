webpackHotUpdate_N_E("pages/register",{

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: registerUser, login, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "D:\\GitHub\\Capstone\\Daniel-RomeroFullStackRestaurantApplication\\components\\auth.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* /lib/auth.js */




var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/"; //register a new user

var registerUser = function registerUser(username, email, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(API_URL, "/auth/local/register"), {
      username: username,
      email: email,
      password: password
    }).then(function (res) {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    })["catch"](function (error) {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
var login = function login(identifier, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(API_URL, "/auth/local/"), {
      identifier: identifier,
      password: password
    }).then(function (res) {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    })["catch"](function (error) {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
var logout = function logout() {
  //remove token and user cookie
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("token");
  delete window.__user; // sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); //redirect to the home page

  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
}; //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement

var withAuthSync = function withAuthSync(Component) {
  var _s = $RefreshSig$();

  var Wrapper = function Wrapper(props) {
    _s();

    var syncLogout = function syncLogout(event) {
      if (event.key === "logout") {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      window.addEventListener("storage", syncLogout);
      return function () {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 12
      }
    }));
  };

  _s(Wrapper, "OD7bBpZva5O2jO+Puf00hKivP7c=");

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsIkNvb2tpZSIsInNldCIsImRhdGEiLCJqd3QiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJsb2dpbiIsImlkZW50aWZpZXIiLCJsb2dvdXQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJfX3VzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIkNvbXBvbmVudCIsIldyYXBwZXIiLCJwcm9wcyIsInN5bmNMb2dvdXQiLCJldmVudCIsImtleSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsd0JBQW5ELEMsQ0FFQTs7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBa0JDLFFBQWxCLEVBQStCO0FBQ3pEO0FBQ0EsYUFBbUMsRUFFbEM7O0FBQ0QsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxnREFBSyxDQUNGQyxJQURILFdBQ1daLE9BRFgsMkJBQzBDO0FBQUVLLGNBQVEsRUFBUkEsUUFBRjtBQUFZQyxXQUFLLEVBQUxBLEtB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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMzc1M2JkNjdiM2VhZjkyMjU1Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9saWIvYXV0aC5qcyAqL1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9cIjtcclxuXHJcbi8vcmVnaXN0ZXIgYSBuZXcgdXNlclxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAvL3ByZXZlbnQgZnVuY3Rpb24gZnJvbSBiZWluZyByYW4gb24gdGhlIHNlcnZlclxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvL3NldCB0b2tlbiByZXNwb25zZSBmcm9tIFN0cmFwaSBmb3Igc2VydmVyIHZhbGlkYXRpb25cclxuICAgICAgICBDb29raWUuc2V0KFwidG9rZW5cIiwgcmVzLmRhdGEuand0KTtcclxuXHJcbiAgICAgICAgLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXHJcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vcmVqZWN0IHRoZSBwcm9taXNlIGFuZCBwYXNzIHRoZSBlcnJvciBvYmplY3QgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XHJcbiAgLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvYCwgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXHJcbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XHJcblxyXG4gICAgICAgIC8vcmVzb2x2ZSB0aGUgcHJvbWlzZSB0byBzZXQgbG9hZGluZyB0byBmYWxzZSBpbiBTaWduVXAgZm9ybVxyXG4gICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW5jZSBzZWxlY3Rpb25cclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvL3JlamVjdCB0aGUgcHJvbWlzZSBhbmQgcGFzcyB0aGUgZXJyb3Igb2JqZWN0IGJhY2sgdG8gdGhlIGZvcm1cclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgLy9yZW1vdmUgdG9rZW4gYW5kIHVzZXIgY29va2llXHJcbiAgQ29va2llLnJlbW92ZShcInRva2VuXCIpO1xyXG4gIGRlbGV0ZSB3aW5kb3cuX191c2VyO1xyXG4gIC8vIHN5bmMgbG9nb3V0IGJldHdlZW4gbXVsdGlwbGUgd2luZG93c1xyXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ291dFwiLCBEYXRlLm5vdygpKTtcclxuICAvL3JlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2VcclxuICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbn07XHJcblxyXG4vL0hpZ2hlciBPcmRlciBDb21wb25lbnQgdG8gd3JhcCBvdXIgcGFnZXMgYW5kIGxvZ291dCBzaW11bHRhbmVvdXNseSBsb2dnZWQgaW4gdGFic1xyXG4vLyBUSElTIElTIE5PVCBVU0VEIGluIHRoZSB0dXRvcmlhbCwgb25seSBwcm92aWRlZCBpZiB5b3Ugd2FudGVkIHRvIGltcGxlbWVudFxyXG5leHBvcnQgY29uc3Qgd2l0aEF1dGhTeW5jID0gKENvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHN5bmNMb2dvdXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJsb2dvdXRcIikge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBzeW5jTG9nb3V0KTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHN5bmNMb2dvdXQpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ291dFwiKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xyXG4gIH07XHJcblxyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gV3JhcHBlcjtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==