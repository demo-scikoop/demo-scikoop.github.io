webpackHotUpdate("static\\development\\pages\\explore.js",{

/***/ "./components/templates/template-2cols-2.js":
/*!**************************************************!*\
  !*** ./components/templates/template-2cols-2.js ***!
  \**************************************************/
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
/* harmony import */ var _icons_containers_projectType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/containers/projectType */ "./components/icons/containers/projectType.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\templates\\template-2cols-2.js";

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
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2754986175" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2754986175" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2754986175" + " " + "section list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, children), __jsx("div", {
    className: "jsx-2754986175" + " " + "section blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Top ePosters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, contributors.map(function (item, idx) {
    return __jsx("div", {
      className: "jsx-2754986175" + " " + "contributor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_icons_containers_projectType__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx(_blocks_users__WEBPACK_IMPORTED_MODULE_10__["default"], {
      users: [item.user],
      name: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(_blocks_interests__WEBPACK_IMPORTED_MODULE_5__["default"], {
      interests: item.interests,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }));
  })), __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Featured",
    last: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "CONTENT")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2754986175",
    __self: this
  }, ".contributor.jsx-2754986175{margin-top:20px;padding-bottom:20px;border-bottom:1px solid white;}.main.jsx-2754986175{padding-left:var(--main-margin);}.sections.jsx-2754986175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.section.jsx-2754986175{width:260px;}.list.jsx-2754986175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;margin-right:25px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLTJjb2xzLTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVpQixBQUd3QyxBQUtjLEFBSWhCLEFBT0QsQUFJQyxZQUhqQixJQWhCdUIsZ0JBS3ZCLElBSmlDLDhCQUNsQyxRQU93QixBQVdQLHFFQVJoQixFQVNzQixrQkFDSSw4RUFFMUIiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRlbXBsYXRlc1xcdGVtcGxhdGUtMmNvbHMtMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRwbEdsb2JhbCBmcm9tICcuL3RlbXBsYXRlLWdsb2JhbCdcclxuaW1wb3J0IEJsb2NrSW5mbyBmcm9tICcuLi9ibG9ja3MvYmxvY2tJbmZvJ1xyXG5pbXBvcnQgQmxvY2tQcm9qZWN0IGZyb20gJy4uL2Jsb2Nrcy9ibG9ja1Byb2plY3QnXHJcbmltcG9ydCBJbnRlcmVzdHMgZnJvbSAnLi4vYmxvY2tzL2ludGVyZXN0cydcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2Zvcm0vaW5wdXQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vZm9ybS9idXR0b24nXHJcbmltcG9ydCB7bW9ja1Byb2plY3RzLCB9IGZyb20gJy4uL21vY2tzL21vY2tzJ1xyXG5pbXBvcnQgKiBhcyB1c2VycyBmcm9tICcuLi9tb2Nrcy9kYXRhL3VzZXJzJ1xyXG5pbXBvcnQgQmxvY2tVc2VycyBmcm9tICcuLi9ibG9ja3MvdXNlcnMnXHJcbmltcG9ydCBCbG9ja0ludGVyZXN0cyBmcm9tICcuLi9ibG9ja3MvaW50ZXJlc3RzJ1xyXG5pbXBvcnQgUHJvamVjdFR5cGVJY29uQ29udGFpbmVyIGZyb20gJy4uL2ljb25zL2NvbnRhaW5lcnMvcHJvamVjdFR5cGUnXHJcblxyXG5jb25zdCBUcGxMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7dGl0bGUsIGNoaWxkcmVufSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNvbnRyaWJ1dG9ycyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXI6IHVzZXJzLnU4LFxyXG4gICAgICAgICAgICBpbnRlcmVzdHM6IFszLDQsNiw3LDldIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VyOiB1c2Vycy51MixcclxuICAgICAgICAgICAgaW50ZXJlc3RzOiBbNyw4LDksMTAsMTVdIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VyOiB1c2Vycy51MTQsXHJcbiAgICAgICAgICAgIGludGVyZXN0czogWzUsNywxLDksMTAsMTIsMTNdIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VyOiB1c2Vycy51MjEsXHJcbiAgICAgICAgICAgIGludGVyZXN0czogWzEsMiwzLDQsNSw2LDddIFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIFxyXG5cclxuICAgICAgICA8VHBsR2xvYmFsIHRpdGxlPXt0aXRsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0luZm8gdGl0bGU9XCJUb3AgZVBvc3RlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcnMubWFwKChpdGVtLCBpZHgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyaWJ1dG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RUeXBlSWNvbkNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja1VzZXJzIHVzZXJzPXtbaXRlbS51c2VyXX0gbmFtZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0ludGVyZXN0cyBpbnRlcmVzdHM9e2l0ZW0uaW50ZXJlc3RzfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbG9ja0luZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tJbmZvIHRpdGxlPVwiRmVhdHVyZWRcIiBsYXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05URU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxvY2tJbmZvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2AgIFxyXG4gICAgICAgICAgICAgICAgICAgLmNvbnRyaWJ1dG9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYWluLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ibG9ja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9UcGxHbG9iYWw+XHJcblxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcGxMaXN0OyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-2cols-2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplList);

/***/ })

})
//# sourceMappingURL=explore.js.3ad1baac4421358f0d39.hot-update.js.map