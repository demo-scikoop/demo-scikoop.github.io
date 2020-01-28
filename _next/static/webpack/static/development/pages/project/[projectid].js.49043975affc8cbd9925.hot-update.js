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
    className: "jsx-2242323734" + " " + "cell size1 ".concat(selected ? 'selected' : '', " ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2242323734" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: "jsx-2242323734" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2242323734" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, text, post.type === 4 && __jsx("div", {
    className: "jsx-2242323734" + " " + "podcast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: "/media/images/podcast.png",
    className: "jsx-2242323734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2242323734" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2242323734" + " " + "postedBy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Posted by ", __jsx(_blocks_users__WEBPACK_IMPORTED_MODULE_3__["default"], {
    users: [post.postedBy],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    id: "2242323734",
    __self: this
  }, ".podcast.jsx-2242323734{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.postedBy.jsx-2242323734{font:12px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.content.jsx-2242323734{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.jsx-2242323734:last-of-type{margin-right:0px;}.row.jsx-2242323734:last-of-type{margin-bottom:0px;}.cell.jsx-2242323734{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.jsx-2242323734:hover,.selected.jsx-2242323734{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.size1.jsx-2242323734{width:325px;}.cell.size2.jsx-2242323734{width:663px;}.cell.size3.jsx-2242323734{width:325px;height:577px;}.cell.featured.jsx-2242323734{border:1px solid #C2CCCC;}.featured.jsx-2242323734 .header.jsx-2242323734{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-2242323734{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-2242323734 .header.jsx-2242323734{border-bottom:2px dashed #D3DDDD;}.row.jsx-2242323734{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-2242323734{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-2242323734 .cell.jsx-2242323734{margin-bottom:11px;}.last.jsx-2242323734{margin-bottom:0px !important;}.header.jsx-2242323734,.body.jsx-2242323734,.footer.jsx-2242323734{padding:0px 28px 0px 28px;}.body.jsx-2242323734{margin-top:13px;font:12px/17px Arial;}.actions.jsx-2242323734{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.jsx-2242323734{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUd3QixBQU9VLEFBS1IsQUFPSSxBQUdDLEFBR08sQUFXQSxBQU9iLEFBSUEsQUFJQSxBQUthLEFBR08sQUFJTixBQU9PLEFBSXBCLEFBS0UsQUFNSSxBQUlVLEFBSUgsQUFLVixBQUtKLEFBU0EsV0EvR0EsQ0EyQ2hCLEFBSUEsQUFJaUIsQUFvRE0sQUFTQSxJQWRFLENBL0V6QixDQUdBLENBK0RBLEVBOUVxQixFQU5KLEVBd0JZLEFBV0EsQUFnQjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEdBSkEsR0E5QkEsQ0FXQSxJQTZCQSxXQW5DZ0IsRUF0Q00sQUFXSixPQTBDRixHQWRDLElBM0JILElBWFEsQ0FxRFcsSUFkakMsQ0F0RDBCLEFBMkIxQixBQW1DdUIsWUE5Q04sT0ErQ2pCLElBekV1QixDQStFdkIsQ0FuRGtCLE1BMEVELEFBU0EsQ0F6R0MsT0F1QkcsT0F0QnJCLGdDQUlrQywyQkE0RlgsQUFTQSxXQS9HSSxRQTZCM0Isa0RBMEVBLEFBVWdCLFlBQ29CLE9BdkduQixhQUNqQixTQVhBLEdBbUg4QiwwQkFDOUIiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRpbGVzXFxwb3N0c1xcdGlsZTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vLi4vYmxvY2tzL3NvY2lhbCdcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uL2Jsb2Nrcy91c2VycydcclxuXHJcbmNvbnN0IFRpbGUxID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7dHlwZSwgY2F0ZWdvcmllcywgbGV2ZWxzLCBzZWxlY3RlZCwgY2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgY29uc3Qge2NvbW1lbnRzLCB2b3Rlcywgc2hhcmVkfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBjb25zdCB7cG9zdCA9IHt9fSA9IHByb3BzO1xyXG4gICAgY29uc3Qge3RpdGxlLCB0ZXh0LCBwb2RjYXN0fSA9IHBvc3Q7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldFR5cGVzID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCBzaXplMSAke3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfSAke2NsYXNzTmFtZSB8fCAnJ31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHtnZXRUeXBlcygpfSB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge3RleHR9XHJcblxyXG4gICAgICAgICAgICAgICAge3Bvc3QudHlwZSA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RcIj48aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvcG9kY2FzdC5wbmdgfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0ZWRCeVwiPlBvc3RlZCBieSA8VXNlcnMgdXNlcnM9e1twb3N0LnBvc3RlZEJ5XX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbD17IHtcclxuICAgICAgICBuYkNvbW1lbnRzOiAwLFxyXG4gICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgdXA6IDAsXHJcbiAgICAgICAgICAgIGRvd246IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5iU2hhcmVkOiAwLFxyXG4gICAgICAgIGxldmVsczogcG9zdC5sZXZlbHMsXHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4gXHJcbiAgICAgICAge2BcclxuICAgICAgICAucG9kY2FzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zdGVkQnkge1xyXG4gICAgICAgICAgICBmb250OiAxMnB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdzpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjJGMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgycHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpob3ZlciwgLnNlbGVjdGVkIHsgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRERERDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRFNzg3NjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY2M3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTc3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5mZWF0dXJlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkNDQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlZCAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0MyQ0NDQztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmF2YWlsYWJsZSAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3cuY29sc3BhbiB7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NzZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93LmNvbHNwYW4gLmNlbGwgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYXN0IHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciwgLmJvZHksIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjhweCAwcHggMjhweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEycHgvMTdweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogQm9sZCAxNnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGUxOyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile1.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile1);

/***/ })

})
//# sourceMappingURL=[projectid].js.49043975affc8cbd9925.hot-update.js.map