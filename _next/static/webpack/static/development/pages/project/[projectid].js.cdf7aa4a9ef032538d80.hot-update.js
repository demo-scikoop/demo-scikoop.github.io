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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/social */ "./components/blocks/social.js");
/* harmony import */ var _blocks_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/users */ "./components/blocks/users.js");
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

  var projectId = props.projectId;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleClick = function handleClick(e) {
    if (!project.linked) return;
    e.preventDefault();
    router.push("/project/".concat(projectId, "/").concat(post.id));
  };

  return __jsx("div", {
    className: "jsx-2161082731" + " " + "cell size1 ".concat(selected ? 'selected' : '', " ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2161082731" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: "jsx-2161082731" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2161082731" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, text, post.type === 4 && __jsx("div", {
    className: "jsx-2161082731" + " " + "podcast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: "/media/images/podcast.png",
    className: "jsx-2161082731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2161082731" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, post.postedBy && __jsx("div", {
    className: "jsx-2161082731" + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2161082731" + " " + "postedBy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Posted by ", __jsx(_blocks_users__WEBPACK_IMPORTED_MODULE_4__["default"], {
    users: [post.postedBy],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2161082731" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, post.date)), __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 49
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2161082731",
    __self: this
  }, ".podcast.jsx-2161082731{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.posted.jsx-2161082731{-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;font:10px/17px Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.postedBy.jsx-2161082731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/17px Arial;margin-bottom:10px;}.content.jsx-2161082731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.jsx-2161082731:last-of-type{margin-right:0px;}.row.jsx-2161082731:last-of-type{margin-bottom:0px;}.cell.jsx-2161082731{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.jsx-2161082731:hover,.selected.jsx-2161082731{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.size1.jsx-2161082731{width:325px;}.cell.size2.jsx-2161082731{width:663px;}.cell.size3.jsx-2161082731{width:325px;height:577px;}.cell.featured.jsx-2161082731{border:1px solid #C2CCCC;}.featured.jsx-2161082731 .header.jsx-2161082731{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-2161082731{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-2161082731 .header.jsx-2161082731{border-bottom:2px dashed #D3DDDD;}.row.jsx-2161082731{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-2161082731{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-2161082731 .cell.jsx-2161082731{margin-bottom:11px;}.last.jsx-2161082731{margin-bottom:0px !important;}.header.jsx-2161082731,.body.jsx-2161082731,.footer.jsx-2161082731{padding:0px 28px 0px 28px;}.body.jsx-2161082731{margin-top:13px;font:12px/17px Arial;}.actions.jsx-2161082731{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.jsx-2161082731{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFUyxBQUd3QixBQU9NLEFBU0osQUFPQSxBQU9JLEFBR0MsQUFHTyxBQVdBLEFBT2IsQUFJQSxBQUlBLEFBS2EsQUFHTyxBQUlOLEFBT08sQUFJcEIsQUFLRSxBQU1JLEFBSVUsQUFJSCxBQUtWLEFBS0osQUFTQSxXQTFIQSxDQXNEaEIsQUFJQSxBQUlpQixBQW9ETSxBQVNBLElBZEUsQ0EvRXpCLENBR0EsQ0ErREEsSUEvRmlCLEVBbUNZLEFBV0EsQUFnQjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEdBSkEsR0E5QkEsQ0FXQSxJQTZCQSxXQW5DZ0IsRUF0Q00sQUFXSixPQTBDRixHQWRDLElBM0JILElBWFEsQ0FxRFcsSUFkakMsQ0E3RHVCLEFBT0csQUEyQjFCLEFBbUN1QixXQTlFTCxDQWdDRCxPQStDakIsSUFwRnVCLENBMEZ2QixDQXBGeUIsQUFpQ1AsTUEwRUQsQUFTQSxRQWxGSSxPQWhDSixnQ0FjaUIsZUFOVCxZQWtHRixBQVNBLFNBMUdBLEVBaEJJLElBUUosSUFnQ3ZCLFNBdkJBLHlDQWlHQSxBQVVnQixZQUNvQixPQXZHbkIsYUFDakIsT0Fka0MsRUFSbEMsR0E4SDhCLDBCQUM5QixvRkF0SEEiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRpbGVzXFxwb3N0c1xcdGlsZTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uLy4uL2Jsb2Nrcy9zb2NpYWwnXHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi9ibG9ja3MvdXNlcnMnXHJcblxyXG5jb25zdCBUaWxlMSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3R5cGUsIGNhdGVnb3JpZXMsIGxldmVscywgc2VsZWN0ZWQsIGNsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtjb21tZW50cywgdm90ZXMsIHNoYXJlZH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3Qge3Bvc3QgPSB7fX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgcG9kY2FzdH0gPSBwb3N0O1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3Byb2plY3RJZH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBpZiAoIXByb2plY3QubGlua2VkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcHJvamVjdC8ke3Byb2plY3RJZH0vJHtwb3N0LmlkfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNlbGwgc2l6ZTEgJHtzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ30gJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Z2V0VHlwZXMoKX0ge3RpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnR5cGUgPT09IDQgJiZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0XCI+PGltZyBzcmM9e2AvbWVkaWEvaW1hZ2VzL3BvZGNhc3QucG5nYH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LnBvc3RlZEJ5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0ZWRCeVwiPlBvc3RlZCBieSA8VXNlcnMgdXNlcnM9e1twb3N0LnBvc3RlZEJ5XX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+e3Bvc3QuZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWwgc29jaWFsPXsge1xyXG4gICAgICAgIG5iQ29tbWVudHM6IDAsXHJcbiAgICAgICAgbmJWb3Rlczoge1xyXG4gICAgICAgICAgICB1cDogMCxcclxuICAgICAgICAgICAgZG93bjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmJTaGFyZWQ6IDAsXHJcbiAgICAgICAgbGV2ZWxzOiBwb3N0LmxldmVscyxcclxuICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiBcclxuICAgICAgICB7YFxyXG4gICAgICAgIC5wb2RjYXN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0ZWQge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwcHgvMTdweCBBcmlhbDtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvc3RlZEJ5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQ6IDEycHgvMTdweCBBcmlhbDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdzpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjJGMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgycHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpob3ZlciwgLnNlbGVjdGVkIHsgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRERERDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRFNzg3NjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY2M3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTc3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5mZWF0dXJlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkNDQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlZCAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0MyQ0NDQztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmF2YWlsYWJsZSAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3cuY29sc3BhbiB7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NzZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93LmNvbHNwYW4gLmNlbGwgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYXN0IHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciwgLmJvZHksIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjhweCAwcHggMjhweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEycHgvMTdweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogQm9sZCAxNnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGUxOyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile1.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile1);

/***/ })

})
//# sourceMappingURL=[projectid].js.cdf7aa4a9ef032538d80.hot-update.js.map