webpackHotUpdate("static\\development\\pages\\explore.js",{

/***/ "./pages/explore.js":
/*!**************************!*\
  !*** ./pages/explore.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_template_2cols_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/templates/template-2cols-2 */ "./components/templates/template-2cols-2.js");
/* harmony import */ var _components_blocks_blockProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blocks/blockProject */ "./components/blocks/blockProject.js");
/* harmony import */ var _components_blocks_interests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/blocks/interests */ "./components/blocks/interests.js");
/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/input */ "./components/form/input.js");
/* harmony import */ var _components_form_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form/button */ "./components/form/button.js");
/* harmony import */ var _components_mocks_mocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mocks/mocks */ "./components/mocks/mocks.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\pages\\explore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Home = function Home() {
  var projects = _components_mocks_mocks__WEBPACK_IMPORTED_MODULE_7__["mockProjects"];
  return __jsx(_components_templates_template_2cols_2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Explore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3041700879" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "Browse projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3041700879" + " " + "filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3041700879" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Explore: "), __jsx("div", {
    className: "jsx-3041700879" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_blocks_interests__WEBPACK_IMPORTED_MODULE_4__["default"], {
    all: true,
    justify: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3041700879" + " " + "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, projects.map(function (project, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_blocks_blockProject__WEBPACK_IMPORTED_MODULE_3__["default"], {
      project: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3041700879",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3041700879",
    __self: this
  }, ".header.jsx-3041700879{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}.filter.jsx-3041700879{background:#F4F6F6;border:1px solid #D3DDDD;border-radius:3px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:40px;margin-top:20px;}.filter.jsx-3041700879 .title.jsx-3041700879{margin-right:10px;padding-left:10px;font:Bold 16px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.filter.jsx-3041700879 .icons.jsx-3041700879{width:100%;padding-right:10px;}.projects.jsx-3041700879{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px;}.projects.jsx-3041700879 div.jsx-3041700879{height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxwYWdlc1xcZXhwbG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ1MsQUFJb0MsQUFVQSxBQWVELEFBUVAsQUFNRSxBQVFELFdBYk8sQ0FlTixNQXZCSyxDQWZPLFdBd0I3QixNQVI4QixRQWZSLGtCQUVDLEFBY0YsWUFZSyxZQVVILE9BakROLHNEQTRCQyxLQVlLLEdBMUJOLE1BZWpCLE1BNUJ1QixZQWlESSxrREFuQ0osT0FiSixTQXdDQyxnQkFDcEIsaUJBUUEsZUFoRHVCLEtBY1IsV0FDQyxZQUVJLGdCQUNwQiwwQkFqQmtDLG1IQUNuQixXQUNmIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxwYWdlc1xcZXhwbG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUZW1wbGF0ZTJDb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3RlbXBsYXRlLTJjb2xzLTInXG5pbXBvcnQgQmxvY2tQcm9qZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvYmxvY2tzL2Jsb2NrUHJvamVjdCdcbmltcG9ydCBJbnRlcmVzdHMgZnJvbSAnLi4vY29tcG9uZW50cy9ibG9ja3MvaW50ZXJlc3RzJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2J1dHRvbidcbmltcG9ydCB7bW9ja1Byb2plY3RzfSBmcm9tICcuLi9jb21wb25lbnRzL21vY2tzL21vY2tzJ1xuXG5cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbmNvbnN0IHByb2plY3RzID0gbW9ja1Byb2plY3RzO1xuXG4gICByZXR1cm4gKFxuICAgIDxUZW1wbGF0ZTJDb2xzIHRpdGxlPVwiRXhwbG9yZVwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCcm93c2UgcHJvamVjdHNcIiAvPjxCdXR0b24gZGlzYWJsZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV4cGxvcmU6IDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPjxJbnRlcmVzdHMgYWxsIGp1c3RpZnkgLz48L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb2plY3RzLm1hcCgocHJvamVjdCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+PEJsb2NrUHJvamVjdCBwcm9qZWN0PXtwcm9qZWN0fSAvPjxkaXY+PC9kaXY+PC8+XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNEY2RjY7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QzRERERDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZpbHRlciAudGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udDogQm9sZCAxNnB4LzE5cHggQXJpYWw7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maWx0ZXIgLmljb25zIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5wcm9qZWN0cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvamVjdHMgZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGB9XG5cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgPC9UZW1wbGF0ZTJDb2xzPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\pages\\\\explore.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=explore.js.aa4b6cb4ac06c36ce489.hot-update.js.map