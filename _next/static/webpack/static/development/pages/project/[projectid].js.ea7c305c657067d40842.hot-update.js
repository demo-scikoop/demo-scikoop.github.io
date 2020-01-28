webpackHotUpdate("static\\development\\pages\\project\\[projectid].js",{

/***/ "./components/tiles/posts/tile3.js":
/*!*****************************************!*\
  !*** ./components/tiles/posts/tile3.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\tiles\\posts\\tile3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Tile3 = function Tile3(props) {
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
      podcast = post.podcast,
      image = post.image;

  var getTypes = function getTypes() {};

  var getImg = function getImg() {
    if (image) {
      return __jsx("img", {
        src: "/media/images/".concat(image),
        width: "269px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  };

  return __jsx("div", {
    className: "jsx-2042308626" + " " + "cell size3 ".concat(selected ? 'selected' : '', " ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: "jsx-2042308626" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, getImg()), __jsx("div", {
    className: "jsx-2042308626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, text)), __jsx("div", {
    className: "jsx-2042308626" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "comments"), __jsx("div", {
    className: "jsx-2042308626" + " " + "votes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "votes"), __jsx("div", {
    className: "jsx-2042308626" + " " + "shared",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "shared")), __jsx("div", {
    className: "jsx-2042308626" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "levels"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2042308626",
    __self: this
  }, ".content.jsx-2042308626{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:525px;}.cell.jsx-2042308626:last-of-type{margin-right:0px;}.row.jsx-2042308626:last-of-type{margin-bottom:0px;}.cell.jsx-2042308626{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.jsx-2042308626:hover,.selected.jsx-2042308626{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.img.jsx-2042308626{margin-bottom:55px;opacity:1;}.cell.jsx-2042308626:hover>.content.jsx-2042308626>.body.jsx-2042308626>.img.jsx-2042308626{opacity:1;}.cell.size1.jsx-2042308626{width:325px;}.cell.size2.jsx-2042308626{width:663px;}.cell.size3.jsx-2042308626{width:325px;height:577px;}.cell.featured.jsx-2042308626{border:1px solid #C2CCCC;}.featured.jsx-2042308626 .header.jsx-2042308626{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-2042308626{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-2042308626 .header.jsx-2042308626{border-bottom:2px dashed #D3DDDD;}.row.jsx-2042308626{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-2042308626{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-2042308626 .cell.jsx-2042308626{margin-bottom:11px;}.last.jsx-2042308626{margin-bottom:0px !important;}.header.jsx-2042308626,.body.jsx-2042308626,.footer.jsx-2042308626{padding:0px 28px 0px 28px;}.body.jsx-2042308626{margin-top:13px;font:12px/17px Arial;}.actions.jsx-2042308626{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-2042308626{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header.jsx-2042308626{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUkwQixBQU9JLEFBR0MsQUFHTyxBQVdBLEFBT04sQUFJVCxBQUlFLEFBSUEsQUFJQSxBQUthLEFBR08sQUFJTixBQU9PLEFBSXBCLEFBS0UsQUFNSSxBQUlVLEFBSUgsQUFLVixBQUtKLEFBT08sQUFPUCxVQTdFaEIsRUFJQSxBQUlBLEFBSWlCLEFBb0RNLEFBY0EsSUFuQkUsQ0F2RnpCLENBR0EsQ0FxQmMsQUFrRGQsTUFwRTZCLEFBV0EsQUF3QjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEdBekRBLEFBcURBLEdBOUJBLENBV0EsSUE2QkEsV0FuQ2dCLEVBOUNNLEFBV0osT0FrREYsR0FkQyxJQW5DSCxJQVhRLENBNkRXLElBZGpDLENBOUQwQixBQTJCMUIsQUEyQ3VCLFlBdEROLE9BdURqQixBQW1DaUIsS0E3QmpCLENBM0RrQixNQWtGRCxBQWNBLFFBL0ZJLHVDQWxCYSxlQTBHWCxZQU5BLEFBY0EsbUJBL0Z2QixzQ0F3RmtDLFlBTmxDLEFBZWdCLFlBQ29CLE9BcEhuQixhQUNqQixZQXFIOEIsMEJBQzlCLGlDQVpBIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVGlsZTMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHt0eXBlLCBjYXRlZ29yaWVzLCBsZXZlbHMsIHNlbGVjdGVkLCBjbGFzc05hbWV9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7Y29tbWVudHMsIHZvdGVzLCBzaGFyZWR9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGNvbnN0IHtwb3N0ID0ge319ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7dGl0bGUsIHRleHQsIHBvZGNhc3QsIGltYWdlfSA9IHBvc3Q7XHJcblxyXG4gICAgY29uc3QgZ2V0VHlwZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEltZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtgL21lZGlhL2ltYWdlcy8ke2ltYWdlfWB9IHdpZHRoPXtgMjY5cHhgfSAvPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCBzaXplMyAke3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfSAke2NsYXNzTmFtZSB8fCAnJ31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHtnZXRUeXBlcygpfSB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+e2dldEltZygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3RleHR9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5jb21tZW50czwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3Rlc1wiPnZvdGVzPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlZFwiPnNoYXJlZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IFxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdzpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjJGMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgycHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpob3ZlciwgLnNlbGVjdGVkIHsgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRERERDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRFNzg3NjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTVweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGw6aG92ZXIgPiAuY29udGVudCA+IC5ib2R5ID4gLmltZyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY2M3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTc3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5mZWF0dXJlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkNDQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlZCAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0MyQ0NDQztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmF2YWlsYWJsZSAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3cuY29sc3BhbiB7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NzZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93LmNvbHNwYW4gLmNlbGwgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYXN0IHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciwgLmJvZHksIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjhweCAwcHggMjhweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEycHgvMTdweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogQm9sZCAxNnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGUzOyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile3.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile3);

/***/ })

})
//# sourceMappingURL=[projectid].js.ea7c305c657067d40842.hot-update.js.map