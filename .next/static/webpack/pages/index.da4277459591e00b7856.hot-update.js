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


  console.log("in CART: ".concat(JSON.stringify(cart)));
  console.log("in CONTEXT: ".concat(JSON.stringify(_context__WEBPACK_IMPORTED_MODULE_4__["default"]))); //   problem is that cart may not be set

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log("Router Path: ".concat(JSON.stringify(router)));

  var renderItems = function renderItems() {
    if (cart === undefined) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }
      });
    } else {
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
                lineNumber: 32,
                columnNumber: 15
              }
            }, __jsx("div", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }
            }, __jsx("span", {
              id: "item-price",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }
            }, "\xA0 $", item.price), __jsx("span", {
              id: "item-name",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }
            }, "\xA0 ", item.name)), __jsx("div", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41,
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
                lineNumber: 42,
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
                lineNumber: 55,
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
                lineNumber: 67,
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
            lineNumber: 78,
            columnNumber: 17
          }
        });
      }
    }
  };

  var checkoutItems = function checkoutItems() {
    if (cart === undefined) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      });
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
          lineNumber: 88,
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
          lineNumber: 89,
          columnNumber: 9
        }
      }, "Total:"), __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }
      }, "$", cart.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/checkout/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
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
          lineNumber: 93,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }
      }, "Order"))));
    }
  }; // return Cart


  return __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-3161218026",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, checkoutItems()), console.log("Router Path: ".concat(router.asPath)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3161218026",
    __self: this
  }, "#item-price.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3161218026{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3161218026{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRIdWJcXENhcHN0b25lXFxEYW5pZWwtUm9tZXJvRnVsbFN0YWNrUmVzdGF1cmFudEFwcGxpY2F0aW9uXFxjb21wb25lbnRzXFxjYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHMkIsQUFJQyxBQUtELGdCQVJVLEFBU0EsQ0FMUCxtQkFDVSxHQUovQixBQVNBLHVCQUpBIiwiZmlsZSI6IkQ6XFxHaXRIdWJcXENhcHN0b25lXFxEYW5pZWwtUm9tZXJvRnVsbFN0YWNrUmVzdGF1cmFudEFwcGxpY2F0aW9uXFxjb21wb25lbnRzXFxjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbi8vIHdlIGNhbiBwYXNzIGNhcnQgZGF0YSBpbiB2aWEgcHJvcHMgbWV0aG9kIFxyXG4vLyB0aGUgYWx0ZXJuYXRpdmUgaXMgdXNpbmcgdXNlQ29udGV4dCBhcyBiZWxvd1xyXG5mdW5jdGlvbiBDYXJ0KCkge1xyXG4gIC8vIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG5cclxuICBsZXQge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtLCBpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAvL2NvbnN0IFtjYXJ0QSwgc2V0Q2FydEFdID0gdXNlU3RhdGUoe2NhcnR9KVxyXG4gIC8vY2FydCA9IHZhbHVlLmNhcnQ7XHJcbiAgLy9jb25zb2xlLmxvZygncHJvcHM6JysgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICBjb25zb2xlLmxvZyhgaW4gQ0FSVDogJHtKU09OLnN0cmluZ2lmeShjYXJ0KX1gKVxyXG4gIGNvbnNvbGUubG9nKGBpbiBDT05URVhUOiAke0pTT04uc3RyaW5naWZ5KEFwcENvbnRleHQpfWApXHJcbiAgXHJcbiAgLy8gICBwcm9ibGVtIGlzIHRoYXQgY2FydCBtYXkgbm90IGJlIHNldFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKGBSb3V0ZXIgUGF0aDogJHtKU09OLnN0cmluZ2lmeShyb3V0ZXIpfWApXHJcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoKT0+e1xyXG4gXHJcbiAgICBpZiAoY2FydCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB7aXRlbXN9ID0gY2FydDtcclxuICAgY29uc29sZS5sb2coYGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KGl0ZW1zKX1gKVxyXG4gICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKXtcclxuICAgICAgdmFyIGl0ZW1MaXN0ID0gY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLXByaWNlXCI+Jm5ic3A7ICR7aXRlbS5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fXhcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gaXRlbUxpc3Q7XHJcbiAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5jb25zdCBjaGVja291dEl0ZW1zID0gKCk9PntcclxuICBpZiAoY2FydCA9PT0gdW5kZWZpbmVkKXtcclxuICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcbiAgfWVsc2V7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCYWRnZSBzdHlsZT17eyB3aWR0aDogMjAwLCBwYWRkaW5nOiAxMCB9fSBjb2xvcj1cImxpZ2h0XCI+XHJcbiAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XHJcbiAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxyXG4gICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8YT5PcmRlcjwvYT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApfX1cclxuXHJcbi8vIHJldHVybiBDYXJ0XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT4gQ2FydDwvaDE+XHJcbiAgICAgIDxDYXJkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCA1cHhcIiB9fSBjbGFzc05hbWU9XCJjYXJ0XCI+XHJcbiAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17eyBtYXJnaW46IDEwIH19PllvdXIgT3JkZXI6PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XHJcbiAgICAgICAgICAgIDxzbWFsbD5JdGVtczo8L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cmVuZGVySXRlbXMoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NoZWNrb3V0SXRlbXMoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Y29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke3JvdXRlci5hc1BhdGh9YCl9XHJcbiAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI2l0ZW0tcHJpY2Uge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaXRlbS1xdWFudGl0eSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2l0ZW0tbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\GitHub\\\\Capstone\\\\Daniel-RomeroFullStackRestaurantApplication\\\\components\\\\cart.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVySXRlbXMiLCJ1bmRlZmluZWQiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1MaXN0IiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwibWFyZ2luQm90dG9tIiwiaWQiLCJwcmljZSIsIm5hbWUiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJjaGVja291dEl0ZW1zIiwiZm9udFdlaWdodCIsImNvbG9yIiwidG90YWwiLCJtYXJnaW4iLCJhc1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDZDtBQURjLG9CQUdtQ0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FIN0M7QUFBQSxNQUdUQyxJQUhTLGVBR1RBLElBSFM7QUFBQSxNQUdKQyxPQUhJLGVBR0pBLE9BSEk7QUFBQSxNQUdJQyxVQUhKLGVBR0lBLFVBSEo7QUFBQSxNQUdnQkMsZUFIaEIsZUFHZ0JBLGVBSGhCLEVBSWQ7QUFDQTtBQUNBOzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLG9CQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FBeEI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLHVCQUEyQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLGdEQUFmLENBQTNCLEdBUmMsQ0FVZDs7QUFDQSxNQUFNUyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FMLFNBQU8sQ0FB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QUFBVixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG1EQUFEO0FBQVUsU0FBSyxFQUFFO0FBQUVSLGFBQU8sRUFBRTtBQUFYLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFTCxrQkFBWSxFQUFFO0FBQWhCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixXQUFXLEVBRGQsQ0FKRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaUIsYUFBYSxFQURoQixDQVBGLEVBV0d2QixPQUFPLENBQUNDLEdBQVIsd0JBQTRCRyxNQUFNLENBQUN3QixNQUFuQyxFQVhILENBSEYsQ0FGRjtBQUFBO0FBQUE7QUFBQSwybU5BREY7QUFxQ0Q7O0dBbElRbkMsSTtVQVdRWSxxRDs7O0tBWFJaLEk7QUFtSU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhNDI3NzQ1OTU5MWUwMGI3ODU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBCYWRnZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuLy8gd2UgY2FuIHBhc3MgY2FydCBkYXRhIGluIHZpYSBwcm9wcyBtZXRob2QgXHJcbi8vIHRoZSBhbHRlcm5hdGl2ZSBpcyB1c2luZyB1c2VDb250ZXh0IGFzIGJlbG93XHJcbmZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgLy8gbGV0IGlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcblxyXG4gIGxldCB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIGlzQXV0aGVudGljYXRlZH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gIC8vY29uc3QgW2NhcnRBLCBzZXRDYXJ0QV0gPSB1c2VTdGF0ZSh7Y2FydH0pXHJcbiAgLy9jYXJ0ID0gdmFsdWUuY2FydDtcclxuICAvL2NvbnNvbGUubG9nKCdwcm9wczonKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gIGNvbnNvbGUubG9nKGBpbiBDQVJUOiAke0pTT04uc3RyaW5naWZ5KGNhcnQpfWApXHJcbiAgY29uc29sZS5sb2coYGluIENPTlRFWFQ6ICR7SlNPTi5zdHJpbmdpZnkoQXBwQ29udGV4dCl9YClcclxuICBcclxuICAvLyAgIHByb2JsZW0gaXMgdGhhdCBjYXJ0IG1heSBub3QgYmUgc2V0XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc29sZS5sb2coYFJvdXRlciBQYXRoOiAke0pTT04uc3RyaW5naWZ5KHJvdXRlcil9YClcclxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpPT57XHJcbiBcclxuICAgIGlmIChjYXJ0ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHtpdGVtc30gPSBjYXJ0O1xyXG4gICBjb25zb2xlLmxvZyhgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbXMpfWApXHJcbiAgICBpZihpdGVtcyAmJiBpdGVtcy5sZW5ndGgpe1xyXG4gICAgICB2YXIgaXRlbUxpc3QgPSBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtb25lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tcHJpY2VcIj4mbmJzcDsgJHtpdGVtLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLW5hbWVcIj4mbmJzcDsge2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuICAgIH1cclxuICAgIH1cclxuICB9XHJcbmNvbnN0IGNoZWNrb3V0SXRlbXMgPSAoKT0+e1xyXG4gIGlmIChjYXJ0ID09PSB1bmRlZmluZWQpe1xyXG4gICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuICB9ZWxzZXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJhZGdlIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBhZGRpbmc6IDEwIH19IGNvbG9yPVwibGlnaHRcIj5cclxuICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwLCBjb2xvcjogXCJncmF5XCIgfX0+VG90YWw6PC9oNT5cclxuICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XHJcbiAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0L1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiIH19IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICl9fVxyXG5cclxuLy8gcmV0dXJuIENhcnRcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPiBDYXJ0PC9oMT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDVweFwiIH19IGNsYXNzTmFtZT1cImNhcnRcIj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cclxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtyZW5kZXJJdGVtcygpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y2hlY2tvdXRJdGVtcygpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtjb25zb2xlLmxvZyhgUm91dGVyIFBhdGg6ICR7cm91dGVyLmFzUGF0aH1gKX1cclxuICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjaXRlbS1wcmljZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjaXRlbS1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==