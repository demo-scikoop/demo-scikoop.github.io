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
    if (!projectId) return;
    e.preventDefault();
    router.push("/project/".concat(projectId, "/").concat(post.id));
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "cell size1 ".concat(selected ? 'selected' : '', " ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    onClick: handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, text, post.type === 4 && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "podcast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: "/media/images/podcast.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, post.postedBy && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "postedBy",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977128872", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "date",
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
    id: "1977128872",
    dynamic: [projectId ? 'cursor: pointer;\n' : ''],
    __self: this
  }, ".podcast.__jsx-style-dynamic-selector{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.posted.__jsx-style-dynamic-selector{-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;font:10px/17px Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.postedBy.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/17px Arial;margin-bottom:10px;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.__jsx-style-dynamic-selector:last-of-type{margin-right:0px;}.row.__jsx-style-dynamic-selector:last-of-type{margin-bottom:0px;}.cell.__jsx-style-dynamic-selector{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.__jsx-style-dynamic-selector:hover,.selected.__jsx-style-dynamic-selector{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.size1.__jsx-style-dynamic-selector{width:325px;}.cell.size2.__jsx-style-dynamic-selector{width:663px;}.cell.size3.__jsx-style-dynamic-selector{width:325px;height:577px;}.cell.featured.__jsx-style-dynamic-selector{border:1px solid #C2CCCC;}.featured.__jsx-style-dynamic-selector .header.__jsx-style-dynamic-selector{border-bottom:2px solid #D3DDDD;}.cell.available.__jsx-style-dynamic-selector{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.__jsx-style-dynamic-selector .header.__jsx-style-dynamic-selector{border-bottom:2px dashed #D3DDDD;}.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.__jsx-style-dynamic-selector{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.__jsx-style-dynamic-selector .cell.__jsx-style-dynamic-selector{margin-bottom:11px;}.last.__jsx-style-dynamic-selector{margin-bottom:0px !important;}.header.__jsx-style-dynamic-selector,.body.__jsx-style-dynamic-selector,.footer.__jsx-style-dynamic-selector{padding:0px 28px 0px 28px;}.body.__jsx-style-dynamic-selector{margin-top:13px;font:12px/17px Arial;}.actions.__jsx-style-dynamic-selector{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.__jsx-style-dynamic-selector{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;".concat(projectId ? 'cursor: pointer;\n' : '', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFUyxBQUd3QixBQU9NLEFBU0osQUFPQSxBQU9JLEFBR0MsQUFHTyxBQVdBLEFBT2IsQUFJQSxBQUlBLEFBS2EsQUFHTyxBQUlOLEFBT08sQUFJcEIsQUFLRSxBQU1JLEFBSVUsQUFJSCxBQUtWLEFBS0osQUFTQSxXQTFIQSxDQXNEaEIsQUFJQSxBQUlpQixBQW9ETSxBQVNBLElBZEUsQ0EvRXpCLENBR0EsQ0ErREEsSUEvRmlCLEVBbUNZLEFBV0EsQUFnQjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEdBSkEsR0E5QkEsQ0FXQSxJQTZCQSxXQW5DZ0IsRUF0Q00sQUFXSixPQTBDRixHQWRDLElBM0JILElBWFEsQ0FxRFcsSUFkakMsQ0E3RHVCLEFBT0csQUEyQjFCLEFBbUN1QixXQTlFTCxDQWdDRCxPQStDakIsSUFwRnVCLENBMEZ2QixDQXBGeUIsQUFpQ1AsTUEwRUQsQUFTQSxRQWxGSSxPQWhDSixnQ0FjaUIsZUFOVCxZQWtHRixBQVNBLFNBMUdBLEVBaEJJLElBUUosSUFnQ3ZCLFNBdkJBLHlDQWlHQSxBQVVnQixZQUNvQixPQXZHbkIsYUFDakIsT0Fka0MsRUFSbEMsR0E4SDhCLDBCQUcvQiw2QkFBQyx1REF4SEEiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRpbGVzXFxwb3N0c1xcdGlsZTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uLy4uL2Jsb2Nrcy9zb2NpYWwnXHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi9ibG9ja3MvdXNlcnMnXHJcblxyXG5jb25zdCBUaWxlMSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3R5cGUsIGNhdGVnb3JpZXMsIGxldmVscywgc2VsZWN0ZWQsIGNsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtjb21tZW50cywgdm90ZXMsIHNoYXJlZH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3Qge3Bvc3QgPSB7fX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgcG9kY2FzdH0gPSBwb3N0O1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3Byb2plY3RJZH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBpZiAoIXByb2plY3RJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICByb3V0ZXIucHVzaChgL3Byb2plY3QvJHtwcm9qZWN0SWR9LyR7cG9zdC5pZH1gKTtcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjZWxsIHNpemUxICR7c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9ICR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIHtnZXRUeXBlcygpfSB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge3RleHR9XHJcblxyXG4gICAgICAgICAgICAgICAge3Bvc3QudHlwZSA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RcIj48aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvcG9kY2FzdC5wbmdgfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3QucG9zdGVkQnkgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlZEJ5XCI+UG9zdGVkIGJ5IDxVc2VycyB1c2Vycz17W3Bvc3QucG9zdGVkQnldfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj57cG9zdC5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWw9eyB7XHJcbiAgICAgICAgbmJDb21tZW50czogMCxcclxuICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgIHVwOiAwLFxyXG4gICAgICAgICAgICBkb3duOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYlNoYXJlZDogMCxcclxuICAgICAgICBsZXZlbHM6IHBvc3QubGV2ZWxzLFxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IFxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLnBvZGNhc3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvc3RlZCB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgZm9udDogMTBweC8xN3B4IEFyaWFsO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zdGVkQnkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMkYyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmhvdmVyLCAuc2VsZWN0ZWQgeyAgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEREREO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEU3ODc2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjYzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmZlYXR1cmVkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MyQ0NDQztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVkIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQzJDQ0NDO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuICAgICAgICAgICAgd2lkdGg6IDMyM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXZhaWxhYmxlIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIHsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6IDY3NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cuY29sc3BhbiAuY2VsbCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhc3QgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLCAuYm9keSwgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250OiBCb2xkIDE2cHgvMTlweCBBcmlhbDtcclxuXHJcbiAgICAgICAgICAgICR7cHJvamVjdElkID8gJ2N1cnNvcjogcG9pbnRlcjtcXG4nIDogJyd9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGUxOyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile1.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile1);

/***/ })

})
//# sourceMappingURL=[projectid].js.933044e2a0263ab77d44.hot-update.js.map