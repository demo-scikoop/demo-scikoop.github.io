webpackHotUpdate("static\\development\\pages\\project\\[projectid].js",{

/***/ "./components/tiles/posts/tile1.js":
/*!*****************************************!*\
  !*** ./components/tiles/posts/tile1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/social */ "./components/blocks/social.js");
/* harmony import */ var _blocks_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/users */ "./components/blocks/users.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\tiles\\posts\\tile1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Tile1 = function Tile1(props) {
  var type = props.type,
      categories = props.categories,
      levels = props.levels,
      selected = props.selected,
      className = props.className;
  var comments = props.comments,
      votes = props.votes,
      shared = props.shared;
  var _props$post = props.post,
      post = _props$post === void 0 ? {} : _props$post;
  var title = post.title,
      text = post.text,
      podcast = post.podcast;

  var getTypes = function getTypes() {};

  return __jsx("div", {
    className: "jsx-1736919077" + " " + "cell size1 ".concat(selected ? 'selected' : '', " ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1736919077" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: "jsx-1736919077" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1736919077" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, text, post.type === 4 && __jsx("div", {
    className: "jsx-1736919077" + " " + "podcast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: "/media/images/podcast.png",
    className: "jsx-1736919077",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1736919077" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_blocks_users__WEBPACK_IMPORTED_MODULE_3__["default"], {
    users: post.postedBy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_2__["default"], {
    social: {
      nbComments: 0,
      nbVotes: {
        up: 0,
        down: 0
      },
      nbShared: 0,
      levels: post.levels
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1736919077",
    __self: this
  }, ".podcast.jsx-1736919077{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.content.jsx-1736919077{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.jsx-1736919077:last-of-type{margin-right:0px;}.row.jsx-1736919077:last-of-type{margin-bottom:0px;}.cell.jsx-1736919077{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.jsx-1736919077:hover,.selected.jsx-1736919077{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.size1.jsx-1736919077{width:325px;}.cell.size2.jsx-1736919077{width:663px;}.cell.size3.jsx-1736919077{width:325px;height:577px;}.cell.featured.jsx-1736919077{border:1px solid #C2CCCC;}.featured.jsx-1736919077 .header.jsx-1736919077{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-1736919077{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-1736919077 .header.jsx-1736919077{border-bottom:2px dashed #D3DDDD;}.row.jsx-1736919077{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-1736919077{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-1736919077 .cell.jsx-1736919077{margin-bottom:11px;}.last.jsx-1736919077{margin-bottom:0px !important;}.header.jsx-1736919077,.body.jsx-1736919077,.footer.jsx-1736919077{padding:0px 28px 0px 28px;}.body.jsx-1736919077{margin-top:13px;font:12px/17px Arial;}.actions.jsx-1736919077{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.jsx-1736919077{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUd3QixBQU9FLEFBT0ksQUFHQyxBQUdPLEFBV0EsQUFPYixBQUlBLEFBSUEsQUFLYSxBQUdPLEFBSU4sQUFPTyxBQUlwQixBQUtFLEFBTUksQUFJVSxBQUlILEFBS1YsQUFLSixBQVNBLFdBMUdBLENBc0NoQixBQUlBLEFBSWlCLEFBb0RNLEFBU0EsSUFkRSxDQS9FekIsQ0FHQSxDQStEQSxJQS9FaUIsRUFtQlksQUFXQSxBQWdCN0IsQUFJQSxDQU8wQixBQThCMUIsR0FKQSxHQTlCQSxDQVdBLElBNkJBLFdBbkNnQixFQXRDTSxBQVdKLE9BMENGLEdBZEMsSUEzQkgsSUFYUSxDQXFEVyxJQWRqQyxDQXREMEIsQUEyQjFCLEFBbUN1QixZQTlDTixPQStDakIsSUFwRXVCLENBMEV2QixDQW5Ea0IsTUEwRUQsQUFTQSxRQWxGSSx1Q0FsQmEsMkJBNEZYLEFBU0EsV0ExR0ksUUF3QjNCLGtEQTBFQSxBQVVnQixZQUNvQixPQXZHbkIsYUFDakIsU0FOQSxHQThHOEIsMEJBQzlCIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uLy4uL2Jsb2Nrcy9zb2NpYWwnXHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi9ibG9ja3MvdXNlcnMnXHJcblxyXG5jb25zdCBUaWxlMSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3R5cGUsIGNhdGVnb3JpZXMsIGxldmVscywgc2VsZWN0ZWQsIGNsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtjb21tZW50cywgdm90ZXMsIHNoYXJlZH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3Qge3Bvc3QgPSB7fX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgcG9kY2FzdH0gPSBwb3N0O1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNlbGwgc2l6ZTEgJHtzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ30gJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Z2V0VHlwZXMoKX0ge3RpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnR5cGUgPT09IDQgJiZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0XCI+PGltZyBzcmM9e2AvbWVkaWEvaW1hZ2VzL3BvZGNhc3QucG5nYH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VycyB1c2Vycz17cG9zdC5wb3N0ZWRCeX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbD17IHtcclxuICAgICAgICBuYkNvbW1lbnRzOiAwLFxyXG4gICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgdXA6IDAsXHJcbiAgICAgICAgICAgIGRvd246IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5iU2hhcmVkOiAwLFxyXG4gICAgICAgIGxldmVsczogcG9zdC5sZXZlbHMsXHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4gXHJcbiAgICAgICAge2BcclxuICAgICAgICAucG9kY2FzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMkYyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmhvdmVyLCAuc2VsZWN0ZWQgeyAgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEREREO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEU3ODc2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjYzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmZlYXR1cmVkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MyQ0NDQztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVkIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQzJDQ0NDO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuICAgICAgICAgICAgd2lkdGg6IDMyM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXZhaWxhYmxlIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIHsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6IDY3NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cuY29sc3BhbiAuY2VsbCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhc3QgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLCAuYm9keSwgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250OiBCb2xkIDE2cHgvMTlweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZTE7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile1.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile1);

/***/ })

})
//# sourceMappingURL=[projectid].js.df88d264290488baa224.hot-update.js.map