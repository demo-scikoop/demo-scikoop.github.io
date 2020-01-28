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
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2034050732" + " " + "row ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2034050732" + " " + "row colspan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[2],
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), project.posts[3].type === 6 && __jsx(_tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), project.posts[3].type !== 6 && __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[3],
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_tiles_posts_tile2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: project.posts[5],
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(_tiles_posts_tile3__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: project.posts[4],
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2034050732" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[6],
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), project.posts[7].type === 6 && __jsx(_tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), project.posts[7].type !== 6 && __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[7],
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), project.posts[8].type === 5 && __jsx(_tiles_posts_tileAvailable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), project.posts[8].type !== 5 && __jsx(_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: project.posts[8],
    projectId: project.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2034050732",
    __self: this
  }, ".colspan.jsx-2034050732 .cell.jsx-2034050732{margin-bottom:11px;}.content.jsx-2034050732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:inherit;}.cell.jsx-2034050732:last-of-type{margin-right:0px;}.row.jsx-2034050732:last-of-type{margin-bottom:0px;}.cell.jsx-2034050732{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.selected.jsx-2034050732{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:0.5;}.cell.jsx-2034050732:hover{opacity:1;}.cell.size1.jsx-2034050732{width:325px;}.cell.size2.jsx-2034050732{width:663px;}.cell.size3.jsx-2034050732{width:325px;height:577px;}.cell.featured.jsx-2034050732{border:1px solid #C2CCCC;}.featured.jsx-2034050732 .header.jsx-2034050732{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-2034050732{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-2034050732 .header.jsx-2034050732{border-bottom:2px dashed #D3DDDD;}.row.jsx-2034050732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-2034050732{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-2034050732 .cell.jsx-2034050732{margin-bottom:11px;}.last.jsx-2034050732{margin-bottom:0px !important;}.header.jsx-2034050732,.body.jsx-2034050732,.footer.jsx-2034050732{padding:0px 28px 0px 28px;}.body.jsx-2034050732{margin-top:13px;font:12px/17px Arial;}.actions.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHByb2plY3RzXFx0cGwxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGUyxBQUlnQyxBQUlOLEFBT0ksQUFHQyxBQUdPLEFBV0EsQUFRZixBQUlFLEFBSUEsQUFJQSxBQUthLEFBR08sQUFJTixBQU9PLEFBSXBCLEFBS0UsQUFNSSxBQUlVLEFBSUgsQUFLVixBQUtKLEFBT0EsQUFRQSxVQTlFaEIsRUFJQSxBQUlBLEFBSWlCLEFBb0RNLEFBT0EsQUFRQSxJQXBCRSxDQXBGekIsQ0FHQSxDQWRBLEFBa0ZBLE1BakU2QixBQVdBLEFBcUI3QixBQUlBLENBTzBCLEFBOEIxQixHQUpBLEdBOUJBLENBV0EsSUE2QkEsV0FuQ2dCLEVBM0NNLEFBV0osT0ErQ0YsR0FkQyxJQWhDRCxJQVhNLENBMERXLElBZGpDLENBM0QwQixBQW1FSCxFQXhDdkIsVUFYaUIsT0FvRGpCLEtBTUEsQ0F4RGtCLE1BK0VELEFBT0EsQUFRQSxRQTdGSSx1Q0FsQmEsMkJBaUdYLEFBT0EsQUFRQSxtQkE3RnZCLGtEQStFQSxBQU9rQyxBQVNsQixZQUNvQixPQWxIakIsZUFDbkIsVUFtSDhCLDBCQUM5Qiw2Q0FaQSIsImZpbGUiOiJEOlxcc2Npa29vcFxcZ2l0aHViXFxkZW1vc2Npa29vcFxcY29tcG9uZW50c1xcdGVtcGxhdGVzXFxwcm9qZWN0c1xcdHBsMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRwbFByb2plY3QgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3RlbXBsYXRlLXByb2plY3QnXHJcbmltcG9ydCBQb3N0VGlsZTEgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZTEnXHJcbmltcG9ydCBQb3N0VGlsZTIgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZTInXHJcbmltcG9ydCBQb3N0VGlsZTMgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZTMnXHJcbmltcG9ydCBUaWxlQXZhaWxhYmxlIGZyb20gJy4uLy4uL3RpbGVzL3Bvc3RzL3RpbGVBdmFpbGFibGUnXHJcbmltcG9ydCBUaWxlRmVhdHVyZWQgZnJvbSAnLi4vLi4vdGlsZXMvcG9zdHMvdGlsZUZlYXR1cmVkJ1xyXG5cclxuY29uc3QgUHJvamVjdFRwbDEgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtwcm9qZWN0fSA9IHByb3BzO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPFRwbFByb2plY3QgcHJvamVjdD17cHJvamVjdH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UG9zdFRpbGUxXHJcbiAgICAgICAgICAgICAgICAgICBwb3N0PXtwcm9qZWN0LnBvc3RzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxQb3N0VGlsZTJcclxuICAgICAgICAgICAgICAgICAgICBwb3N0PXtwcm9qZWN0LnBvc3RzWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2xzcGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RUaWxlMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtwcm9qZWN0LnBvc3RzWzJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb2plY3QucG9zdHNbM10udHlwZSA9PT0gNiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlsZUZlYXR1cmVkIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7IHByb2plY3QucG9zdHNbM10udHlwZSAhPT0gNiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RUaWxlMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cHJvamVjdC5wb3N0c1szXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0VGlsZTJcclxuICAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtwcm9qZWN0LnBvc3RzWzVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UG9zdFRpbGUzIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Byb2plY3QucG9zdHNbNF19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdFRpbGUxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Byb2plY3QucG9zdHNbNl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgeyBwcm9qZWN0LnBvc3RzWzddLnR5cGUgPT09IDYgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbGVGZWF0dXJlZCAvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgcHJvamVjdC5wb3N0c1s3XS50eXBlICE9PSA2ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0VGlsZTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cHJvamVjdC5wb3N0c1s3XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHByb2plY3QucG9zdHNbOF0udHlwZSA9PT0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlsZUF2YWlsYWJsZSAvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsgcHJvamVjdC5wb3N0c1s4XS50eXBlICE9PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0VGlsZTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdD17cHJvamVjdC5wb3N0c1s4XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+IFxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgIC5jb2xzcGFuIC5jZWxsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdzpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZWxsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjJGMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgycHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0ZWQgeyAgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEREREO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEU3ODc2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGw6aG92ZXIge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjYzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmZlYXR1cmVkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MyQ0NDQztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVkIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQzJDQ0NDO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuICAgICAgICAgICAgd2lkdGg6IDMyM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXZhaWxhYmxlIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIHsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6IDY3NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cuY29sc3BhbiAuY2VsbCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhc3QgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLCAuYm9keSwgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQ6IEJvbGQgMTZweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9UcGxQcm9qZWN0PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RUcGwxOyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\projects\\\\tpl1.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectTpl1);

/***/ })

})
//# sourceMappingURL=[projectid].js.df5133d8ad90cfda7647.hot-update.js.map