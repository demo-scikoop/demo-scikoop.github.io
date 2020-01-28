webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/templates/template-2cols.js":
/*!************************************************!*\
  !*** ./components/templates/template-2cols.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _template_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-global */ "./components/templates/template-global.js");
/* harmony import */ var _blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/blockInfo */ "./components/blocks/blockInfo.js");
/* harmony import */ var _blocks_blockProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/blockProject */ "./components/blocks/blockProject.js");
/* harmony import */ var _blocks_interests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/interests */ "./components/blocks/interests.js");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/input */ "./components/form/input.js");
/* harmony import */ var _form_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/button */ "./components/form/button.js");
/* harmony import */ var _mocks_mocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mocks/mocks */ "./components/mocks/mocks.js");
/* harmony import */ var _mocks_data_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mocks/data/users */ "./components/mocks/data/users.js");
/* harmony import */ var _blocks_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/users */ "./components/blocks/users.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\templates\\template-2cols.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var TplList = function TplList(props) {
  var title = props.title,
      children = props.children;
  var contributors = [{
    user: _mocks_data_users__WEBPACK_IMPORTED_MODULE_9__["u8"],
    interests: [3, 4, 6, 7, 9]
  }, {
    user: _mocks_data_users__WEBPACK_IMPORTED_MODULE_9__["u2"],
    interests: [7, 8, 9, 10, 15]
  }, {
    user: _mocks_data_users__WEBPACK_IMPORTED_MODULE_9__["u14"],
    interests: [5, 7, 1, 9, 10, 12, 13]
  }, {
    user: _mocks_data_users__WEBPACK_IMPORTED_MODULE_9__["u21"],
    interests: [1, 2, 3, 4, 5, 6, 7]
  }];
  return __jsx(_template_global__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-75736938" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-75736938" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-75736938" + " " + "section list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children), __jsx("div", {
    className: "jsx-75736938" + " " + "section blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Top Contributors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, contributors.map(function (item, idx) {
    return __jsx("div", {
      className: "jsx-75736938" + " " + "contributor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(_blocks_users__WEBPACK_IMPORTED_MODULE_10__["default"], {
      users: [item.user],
      name: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx(_blocks_interests__WEBPACK_IMPORTED_MODULE_5__["default"], {
      interests: item.interests,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }));
  })), __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Featured",
    last: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "CONTENT")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "75736938",
    __self: this
  }, ".contributor.jsx-75736938{margin-top:20px;padding-bottom:20px;}.main.jsx-75736938{padding-left:var(--main-margin);}.sections.jsx-75736938{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.section.jsx-75736938{width:260px;}.list.jsx-75736938{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;margin-right:25px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLTJjb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFaUIsQUFHd0MsQUFJYyxBQUloQixBQU9ELEFBSUMsWUFIakIsSUFmdUIsZ0JBSXZCLElBSEQsc0NBT3dCLEFBV1AscUVBUmhCLEVBU3NCLGtCQUNJLDhFQUUxQiIsImZpbGUiOiJEOlxcc2Npa29vcFxcZ2l0aHViXFxkZW1vc2Npa29vcFxcY29tcG9uZW50c1xcdGVtcGxhdGVzXFx0ZW1wbGF0ZS0yY29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRwbEdsb2JhbCBmcm9tICcuL3RlbXBsYXRlLWdsb2JhbCdcclxuaW1wb3J0IEJsb2NrSW5mbyBmcm9tICcuLi9ibG9ja3MvYmxvY2tJbmZvJ1xyXG5pbXBvcnQgQmxvY2tQcm9qZWN0IGZyb20gJy4uL2Jsb2Nrcy9ibG9ja1Byb2plY3QnXHJcbmltcG9ydCBJbnRlcmVzdHMgZnJvbSAnLi4vYmxvY2tzL2ludGVyZXN0cydcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2Zvcm0vaW5wdXQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vZm9ybS9idXR0b24nXHJcbmltcG9ydCB7bW9ja1Byb2plY3RzLCB9IGZyb20gJy4uL21vY2tzL21vY2tzJ1xyXG5pbXBvcnQgKiBhcyB1c2VycyBmcm9tICcuLi9tb2Nrcy9kYXRhL3VzZXJzJ1xyXG5pbXBvcnQgQmxvY2tVc2VycyBmcm9tICcuLi9ibG9ja3MvdXNlcnMnXHJcbmltcG9ydCBCbG9ja0ludGVyZXN0cyBmcm9tICcuLi9ibG9ja3MvaW50ZXJlc3RzJ1xyXG5cclxuY29uc3QgVHBsTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLCBjaGlsZHJlbn0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBjb250cmlidXRvcnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VyOiB1c2Vycy51OCxcclxuICAgICAgICAgICAgaW50ZXJlc3RzOiBbMyw0LDYsNyw5XSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcjogdXNlcnMudTIsXHJcbiAgICAgICAgICAgIGludGVyZXN0czogWzcsOCw5LDEwLDE1XSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcjogdXNlcnMudTE0LFxyXG4gICAgICAgICAgICBpbnRlcmVzdHM6IFs1LDcsMSw5LDEwLDEyLDEzXSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcjogdXNlcnMudTIxLFxyXG4gICAgICAgICAgICBpbnRlcmVzdHM6IFsxLDIsMyw0LDUsNiw3XSBcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuXHJcbiAgICAgICAgPFRwbEdsb2JhbCB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tJbmZvIHRpdGxlPVwiVG9wIENvbnRyaWJ1dG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9ycy5tYXAoKGl0ZW0sIGlkeCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tVc2VycyB1c2Vycz17W2l0ZW0udXNlcl19IG5hbWUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tJbnRlcmVzdHMgaW50ZXJlc3RzPXtpdGVtLmludGVyZXN0c30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxvY2tJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrSW5mbyB0aXRsZT1cIkZlYXR1cmVkXCIgbGFzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OVEVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrSW5mbz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgICBcclxuICAgICAgICAgICAgICAgICAgIC5jb250cmlidXRvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYWluLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ibG9ja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9UcGxHbG9iYWw+XHJcblxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcGxMaXN0OyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-2cols.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplList);

/***/ })

})
//# sourceMappingURL=index.js.f3eba7598bc667f24e31.hot-update.js.map