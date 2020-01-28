webpackHotUpdate("static\\development\\pages\\project\\[projectid].js",{

/***/ "./components/templates/projects/tpl1.js":
/*!***********************************************!*\
  !*** ./components/templates/projects/tpl1.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_template_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../templates/template-project */ "./components/templates/template-project.js");
/* harmony import */ var _tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiles/posts/tile1 */ "./components/tiles/posts/tile1.js");
/* harmony import */ var _tiles_posts_tile2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tiles/posts/tile2 */ "./components/tiles/posts/tile2.js");
/* harmony import */ var _tiles_posts_tile3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tiles/posts/tile3 */ "./components/tiles/posts/tile3.js");
/* harmony import */ var _tiles_posts_tileAvailable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tiles/posts/tileAvailable */ "./components/tiles/posts/tileAvailable.js");
/* harmony import */ var _tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tiles/posts/tileFeatured */ "./components/tiles/posts/tileFeatured.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\templates\\projects\\tpl1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var ProjectTpl1 = function ProjectTpl1(props) {
  var project = props.project;
  return __jsx(_templates_template_project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    project: project,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2034050732" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[0],
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_tiles_posts_tile2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: project.posts[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2034050732" + " " + "row ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2034050732" + " " + "row colspan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), project.posts[3].type === 6 && __jsx(_tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), project.posts[3].type !== 6 && __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_tiles_posts_tile2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: project.posts[5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(_tiles_posts_tile3__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: project.posts[4],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2034050732" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), project.posts[7].type === 6 && __jsx(_tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), project.posts[7].type !== 6 && __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[7],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), project.posts[8].type === 5 && __jsx(_tiles_posts_tileAvailable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), project.posts[8].type !== 5 && __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[8],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2034050732",
    __self: this
  }, ".colspan.jsx-2034050732 .cell.jsx-2034050732{margin-bottom:11px;}.content.jsx-2034050732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:inherit;}.cell.jsx-2034050732:last-of-type{margin-right:0px;}.row.jsx-2034050732:last-of-type{margin-bottom:0px;}.cell.jsx-2034050732{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.selected.jsx-2034050732{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:0.5;}.cell.jsx-2034050732:hover{opacity:1;}.cell.size1.jsx-2034050732{width:325px;}.cell.size2.jsx-2034050732{width:663px;}.cell.size3.jsx-2034050732{width:325px;height:577px;}.cell.featured.jsx-2034050732{border:1px solid #C2CCCC;}.featured.jsx-2034050732 .header.jsx-2034050732{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-2034050732{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-2034050732 .header.jsx-2034050732{border-bottom:2px dashed #D3DDDD;}.row.jsx-2034050732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-2034050732{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-2034050732 .cell.jsx-2034050732{margin-bottom:11px;}.last.jsx-2034050732{margin-bottom:0px !important;}.header.jsx-2034050732,.body.jsx-2034050732,.footer.jsx-2034050732{padding:0px 28px 0px 28px;}.body.jsx-2034050732{margin-top:13px;font:12px/17px Arial;}.actions.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHByb2plY3RzXFx0cGwxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GUyxBQUlnQyxBQUlOLEFBT0ksQUFHQyxBQUdPLEFBV0EsQUFRZixBQUlFLEFBSUEsQUFJQSxBQUthLEFBR08sQUFJTixBQU9PLEFBSXBCLEFBS0UsQUFNSSxBQUlVLEFBSUgsQUFLVixBQUtKLEFBT0EsQUFRQSxVQTlFaEIsRUFJQSxBQUlBLEFBSWlCLEFBb0RNLEFBT0EsQUFRQSxJQXBCRSxDQXBGekIsQ0FHQSxDQWRBLEFBa0ZBLE1BakU2QixBQVdBLEFBcUI3QixBQUlBLENBTzBCLEFBOEIxQixHQUpBLEdBOUJBLENBV0EsSUE2QkEsV0FuQ2dCLEVBM0NNLEFBV0osT0ErQ0YsR0FkQyxJQWhDRCxJQVhNLENBMERXLElBZGpDLENBM0QwQixBQW1FSCxFQXhDdkIsVUFYaUIsT0FvRGpCLEtBTUEsQ0F4RGtCLE1BK0VELEFBT0EsQUFRQSxRQTdGSSx1Q0FsQmEsMkJBaUdYLEFBT0EsQUFRQSxtQkE3RnZCLGtEQStFQSxBQU9rQyxBQVNsQixZQUNvQixPQWxIakIsZUFDbkIsVUFtSDhCLDBCQUM5Qiw2Q0FaQSIsImZpbGUiOiJEOlxcc2Npa29vcFxcZ2l0aHViXFxkZW1vc2Npa29vcFxcY29tcG9uZW50c1xcdGVtcGxhdGVzXFxwcm9qZWN0c1xcdHBsMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRwbFByb2plY3QgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3RlbXBsYXRlLXByb2plY3QnXHJcbmltcG9ydCBQb3N0VGlsZTEgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZTEnXHJcbmltcG9ydCBQb3N0VGlsZTIgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZTInXHJcbmltcG9ydCBQb3N0VGlsZTMgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZTMnXHJcbmltcG9ydCBUaWxlQXZhaWxhYmxlIGZyb20gJy4uLy4uL3RpbGVzL3Bvc3RzL3RpbGVBdmFpbGFibGUnXHJcbmltcG9ydCBUaWxlRmVhdHVyZWQgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZUZlYXR1cmVkJ1xyXG5cclxuY29uc3QgUHJvamVjdFRwbDEgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtwcm9qZWN0fSA9IHByb3BzO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPFRwbFByb2plY3QgcHJvamVjdD17cHJvamVjdH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UG9zdFRpbGUxXHJcbiAgICAgICAgICAgICAgICAgICBwb3N0PXtwcm9qZWN0LnBvc3RzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxQb3N0VGlsZTJcclxuICAgICAgICAgICAgICAgICAgICBwb3N0PXtwcm9qZWN0LnBvc3RzWzFdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbHNwYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdFRpbGUxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Byb2plY3QucG9zdHNbMl19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb2plY3QucG9zdHNbM10udHlwZSA9PT0gNiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlsZUZlYXR1cmVkIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IHByb2plY3QucG9zdHNbM10udHlwZSAhPT0gNiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RUaWxlMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cHJvamVjdC5wb3N0c1szXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdFRpbGUyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cHJvamVjdC5wb3N0c1s1XX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UG9zdFRpbGUzIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Byb2plY3QucG9zdHNbNF19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxQb3N0VGlsZTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cHJvamVjdC5wb3N0c1s2XX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgeyBwcm9qZWN0LnBvc3RzWzddLnR5cGUgPT09IDYgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVGZWF0dXJlZCAvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgcHJvamVjdC5wb3N0c1s3XS50eXBlICE9PSA2ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0VGlsZTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cHJvamVjdC5wb3N0c1s3XX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBwcm9qZWN0LnBvc3RzWzhdLnR5cGUgPT09IDUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVBdmFpbGFibGUgLz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHByb2plY3QucG9zdHNbOF0udHlwZSAhPT0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFRpbGUxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Byb2plY3QucG9zdHNbOF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD4gXHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgLmNvbHNwYW4gLmNlbGwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMkYyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RlZCB7ICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0REREQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0RTc4NzY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpob3ZlciB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTEge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NjNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3N3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuZmVhdHVyZWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzJDQ0NDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmVhdHVyZWQgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDMkNDQ0M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG4gICAgICAgICAgICB3aWR0aDogMzIzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hdmFpbGFibGUgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucm93LmNvbHNwYW4geyBcclxuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjc2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIC5jZWxsIHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIsIC5ib2R5LCAuZm9vdGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI4cHggMHB4IDI4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250OiAxMnB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogQm9sZCAxNnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8L1RwbFByb2plY3Q+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFRwbDE7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\projects\\\\tpl1.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectTpl1);

/***/ })

})
//# sourceMappingURL=[projectid].js.114dc3fef553f61dfeab.hot-update.js.map