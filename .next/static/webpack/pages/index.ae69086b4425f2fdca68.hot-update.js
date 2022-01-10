webpackHotUpdate_N_E("pages/index",{

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\GitHub\\Capstone\\Daniel-RomeroFullStackRestaurantApplication\\components\\cart.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // we can pass cart data in via props method 
// the alternative is using useContext as below

function Cart() {
  _s();

  var _this = this;

  // let isAuthenticated = true;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      isAuthenticated = _useContext.isAuthenticated; //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));


  console.log("in CART: ".concat(JSON.stringify(cart))); //   problem is that cart may not be set

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log("Router Path: ".concat(JSON.stringify(router)));

  var renderItems = function renderItems() {
    var items = cart.items;
    console.log("items: ".concat(JSON.stringify(items)));

    if (items && items.length) {
      var itemList = cart.items.map(function (item) {
        if (item.quantity > 0) {
          return __jsx("div", {
            className: "items-one",
            style: {
              marginBottom: 15
            },
            key: item.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }
          }, __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }
          }, __jsx("span", {
            id: "item-price",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }
          }, "\xA0 $", item.price), __jsx("span", {
            id: "item-name",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 19
            }
          }, "\xA0 ", item.name)), __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 17
            }
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 5,
              marginLeft: 10
            },
            onClick: function onClick() {
              return addItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 19
            }
          }, "+"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 10
            },
            onClick: function onClick() {
              return removeItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 19
            }
          }, "-"), __jsx("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 19
            }
          }, item.quantity, "x")));
        }
      });
      return itemList;
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      });
    }
  };

  var checkoutItems = function checkoutItems() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
      style: {
        width: 200,
        padding: 10
      },
      color: "light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, __jsx("h5", {
      style: {
        fontWeight: 100,
        color: "gray"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, "Total:"), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, "$", cart.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/checkout/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      style: {
        width: "60%"
      },
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, "Order"))));
  }; // return Cart


  return __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, " Cart"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    style: {
      padding: "10px 5px"
    },
    className: "cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, checkoutItems()), console.log("Router Path: ".concat(router.asPath)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3161218026",
    __self: this
  }, "#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRIdWJcXENhcHN0b25lXFxEYW5pZWwtUm9tZXJvRnVsbFN0YWNrUmVzdGF1cmFudEFwcGxpY2F0aW9uXFxjb21wb25lbnRzXFxjYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHa0IsQUFHMkIsQUFJQyxBQUtELGdCQVJVLEFBU0EsQ0FMUCxtQkFDVSxHQUovQixBQVNBLHVCQUpBIiwiZmlsZSI6IkQ6XFxHaXRIdWJcXENhcHN0b25lXFxEYW5pZWwtUm9tZXJvRnVsbFN0YWNrUmVzdGF1cmFudEFwcGxpY2F0aW9uXFxjb21wb25lbnRzXFxjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbi8vIHdlIGNhbiBwYXNzIGNhcnQgZGF0YSBpbiB2aWEgcHJvcHMgbWV0aG9kIFxyXG4vLyB0aGUgYWx0ZXJuYXRpdmUgaXMgdXNpbmcgdXNlQ29udGV4dCBhcyBiZWxvd1xyXG5mdW5jdGlvbiBDYXJ0KCkge1xyXG4gIC8vIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG5cclxuICBsZXQge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtLCBpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAvL2NvbnN0IFtjYXJ0QSwgc2V0Q2FydEFdID0gdXNlU3RhdGUoe2NhcnR9KVxyXG4gIC8vY2FydCA9IHZhbHVlLmNhcnQ7XHJcbiAgLy9jb25zb2xlLmxvZygncHJvcHM6JysgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICBjb25zb2xlLmxvZyhgaW4gQ0FSVDogJHtKU09OLnN0cmluZ2lmeShjYXJ0KX1gKVxyXG4gIFxyXG4gIC8vICAgcHJvYmxlbSBpcyB0aGF0IGNhcnQgbWF5IG5vdCBiZSBzZXRcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhgUm91dGVyIFBhdGg6ICR7SlNPTi5zdHJpbmdpZnkocm91dGVyKX1gKVxyXG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gKCk9PntcclxuICBsZXQge2l0ZW1zfSA9IGNhcnQ7XHJcbiAgIGNvbnNvbGUubG9nKGBpdGVtczogJHtKU09OLnN0cmluZ2lmeShpdGVtcyl9YClcclxuICAgIGlmKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCl7XHJcbiAgICAgIHZhciBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5xdWFudGl0eSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1vbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiZuYnNwOyAke2l0ZW0ucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tbmFtZVwiPiZuYnNwOyB7aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBpZD1cIml0ZW0tcXVhbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX14XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xyXG4gICAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgfVxyXG4gIH1cclxuY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpPT57XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCYWRnZSBzdHlsZT17eyB3aWR0aDogMjAwLCBwYWRkaW5nOiAxMCB9fSBjb2xvcj1cImxpZ2h0XCI+XHJcbiAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XHJcbiAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxyXG4gICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8YT5PcmRlcjwvYT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApfVxyXG5cclxuLy8gcmV0dXJuIENhcnRcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPiBDYXJ0PC9oMT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDVweFwiIH19IGNsYXNzTmFtZT1cImNhcnRcIj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cclxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtyZW5kZXJJdGVtcygpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y2hlY2tvdXRJdGVtcygpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtjb25zb2xlLmxvZyhgUm91dGVyIFBhdGg6ICR7cm91dGVyLmFzUGF0aH1gKX1cclxuICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjaXRlbS1wcmljZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaXRlbS1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIl19 */\n/*@ sourceURL=D:\\\\GitHub\\\\Capstone\\\\Daniel-RomeroFullStackRestaurantApplication\\\\components\\\\cart.js */"));
}

_s(Cart, "511yP2HHJT3uJZim6v8cRINXBzU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVySXRlbXMiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1MaXN0IiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwibWFyZ2luQm90dG9tIiwiaWQiLCJwcmljZSIsIm5hbWUiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJjaGVja291dEl0ZW1zIiwiZm9udFdlaWdodCIsImNvbG9yIiwidG90YWwiLCJtYXJnaW4iLCJhc1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZDtBQURjLG9CQUdtQ0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FIN0M7QUFBQSxNQUdUQyxJQUhTLGVBR1RBLElBSFM7QUFBQSxNQUdKQyxPQUhJLGVBR0pBLE9BSEk7QUFBQSxNQUdJQyxVQUhKLGVBR0lBLFVBSEo7QUFBQSxNQUdnQkMsZUFIaEIsZUFHZ0JBLGVBSGhCLEVBSWQ7QUFDQTtBQUNBOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLG9CQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FBeEIsR0FQYyxDQVNkOztBQUNBLE1BQU1RLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLHdCQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsQ0FBNUI7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHLFNBQWRB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxXQUFXLEVBRGQsQ0FKRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZ0IsYUFBYSxFQURoQixDQVBGLEVBV0d0QixPQUFPLENBQUNDLEdBQVIsd0JBQTRCRyxNQUFNLENBQUN1QixNQUFuQyxFQVhILENBSEYsQ0FGRjtBQUFBO0FBQUE7QUFBQSx1ek1BREY7QUFxQ0Q7O0dBekhRbEMsSTtVQVVRWSxxRDs7O0tBVlJaLEk7QUEwSE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlNjkwODZiNDQyNWYyZmRjYTY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBCYWRnZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuLy8gd2UgY2FuIHBhc3MgY2FydCBkYXRhIGluIHZpYSBwcm9wcyBtZXRob2QgXHJcbi8vIHRoZSBhbHRlcm5hdGl2ZSBpcyB1c2luZyB1c2VDb250ZXh0IGFzIGJlbG93XHJcbmZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgLy8gbGV0IGlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcblxyXG4gIGxldCB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIGlzQXV0aGVudGljYXRlZH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gIC8vY29uc3QgW2NhcnRBLCBzZXRDYXJ0QV0gPSB1c2VTdGF0ZSh7Y2FydH0pXHJcbiAgLy9jYXJ0ID0gdmFsdWUuY2FydDtcclxuICAvL2NvbnNvbGUubG9nKCdwcm9wczonKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gIGNvbnNvbGUubG9nKGBpbiBDQVJUOiAke0pTT04uc3RyaW5naWZ5KGNhcnQpfWApXHJcbiAgXHJcbiAgLy8gICBwcm9ibGVtIGlzIHRoYXQgY2FydCBtYXkgbm90IGJlIHNldFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtKU09OLnN0cmluZ2lmeShyb3V0ZXIpfWApXHJcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoKT0+e1xyXG4gIGxldCB7aXRlbXN9ID0gY2FydDtcclxuICAgY29uc29sZS5sb2coYGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KGl0ZW1zKX1gKVxyXG4gICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKXtcclxuICAgICAgdmFyIGl0ZW1MaXN0ID0gY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLXByaWNlXCI+Jm5ic3A7ICR7aXRlbS5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fXhcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gaXRlbUxpc3Q7XHJcbiAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcbiAgICB9XHJcbiAgfVxyXG5jb25zdCBjaGVja291dEl0ZW1zID0gKCk9PntcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cclxuICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwLCBjb2xvcjogXCJncmF5XCIgfX0+VG90YWw6PC9oNT5cclxuICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XHJcbiAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0L1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiIH19IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICl9XHJcblxyXG4vLyByZXR1cm4gQ2FydFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+IENhcnQ8L2gxPlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggNXB4XCIgfX0gY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19PlxyXG4gICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3JlbmRlckl0ZW1zKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjaGVja291dEl0ZW1zKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2NvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtyb3V0ZXIuYXNQYXRofWApfVxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNpdGVtLXByaWNlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2l0ZW0tcXVhbnRpdHkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpdGVtLW5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9