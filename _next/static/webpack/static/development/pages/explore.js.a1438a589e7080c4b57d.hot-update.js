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
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../blocks/social */ "./components/blocks/social.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\templates\\template-2cols-2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var TplList = function TplList(props) {
  var title = props.title,
      children = props.children;
  var eposters = [{
    type: 1,
    text: "Acetaminophen/Paracetamol for pain during pregnancy: Good or bad?",
    social: {
      nbComments: 15,
      nbVotes: {
        up: 45,
        down: 1
      },
      nbShared: 10,
      levels: [{
        type: 1,
        nb: 3
      }, {
        type: 2,
        nb: 1
      }, {
        type: 3,
        nb: 1
      }, {
        type: 4,
        nb: 4
      }]
    }
  }, {
    type: 2,
    text: "Who is Galen of Pergamon, the physician philosopher?",
    social: {
      nbComments: 21,
      nbVotes: {
        up: 30,
        down: 2
      },
      nbShared: 8,
      levels: [{
        type: 1,
        nb: 5
      }, {
        type: 2,
        nb: 1
      }, {
        type: 3,
        nb: 1
      }, {
        type: 4,
        nb: 0
      }]
    }
  }];
  return __jsx(_template_global__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2063973441" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2063973441" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2063973441" + " " + "section list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, children), __jsx("div", {
    className: "jsx-2063973441" + " " + "section blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Top ePosters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, eposters.map(function (item, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-2063973441" + " " + "ePoster",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2063973441",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(_icons_containers_projectType__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: item.type,
      small: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2063973441",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, item.text)), __jsx("div", {
      className: "jsx-2063973441" + " " + "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_12__["default"], {
      social: item.social,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })));
  })), __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Featured",
    last: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "CONTENT")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2063973441",
    __self: this
  }, ".ePoster.jsx-2063973441{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px;padding-bottom:20px;border-bottom:1px solid white;}.ePoster.jsx-2063973441 div.jsx-2063973441{margin-right:5px;}.social.jsx-2063973441{margin-bottom:10px;}.main.jsx-2063973441{padding-left:var(--main-margin);}.sections.jsx-2063973441{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.section.jsx-2063973441{width:260px;}.list.jsx-2063973441{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;margin-right:25px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLTJjb2xzLTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdpQixBQUdxQyxBQVFJLEFBR0UsQUFHVyxBQUloQixBQU9ELEFBSUMsWUFIakIsS0FqQkQsRUFHQSxhQUdDLDBDQWRzQixBQWtCQyxBQVdQLHFFQVJoQixFQVNzQixrQkFDSSxJQTdCUCxnQkFDSSxvQkFDVSw4QkFDbEMsUUE0QkMiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRlbXBsYXRlc1xcdGVtcGxhdGUtMmNvbHMtMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRwbEdsb2JhbCBmcm9tICcuL3RlbXBsYXRlLWdsb2JhbCdcclxuaW1wb3J0IEJsb2NrSW5mbyBmcm9tICcuLi9ibG9ja3MvYmxvY2tJbmZvJ1xyXG5pbXBvcnQgQmxvY2tQcm9qZWN0IGZyb20gJy4uL2Jsb2Nrcy9ibG9ja1Byb2plY3QnXHJcbmltcG9ydCBJbnRlcmVzdHMgZnJvbSAnLi4vYmxvY2tzL2ludGVyZXN0cydcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2Zvcm0vaW5wdXQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vZm9ybS9idXR0b24nXHJcbmltcG9ydCB7bW9ja1Byb2plY3RzLCB9IGZyb20gJy4uL21vY2tzL21vY2tzJ1xyXG5pbXBvcnQgKiBhcyB1c2VycyBmcm9tICcuLi9tb2Nrcy9kYXRhL3VzZXJzJ1xyXG5pbXBvcnQgQmxvY2tVc2VycyBmcm9tICcuLi9ibG9ja3MvdXNlcnMnXHJcbmltcG9ydCBCbG9ja0ludGVyZXN0cyBmcm9tICcuLi9ibG9ja3MvaW50ZXJlc3RzJ1xyXG5pbXBvcnQgUHJvamVjdFR5cGVJY29uQ29udGFpbmVyIGZyb20gJy4uL2ljb25zL2NvbnRhaW5lcnMvcHJvamVjdFR5cGUnXHJcbmltcG9ydCBCbG9ja1NvY2lhbCBmcm9tICcuLi9ibG9ja3Mvc29jaWFsJ1xyXG5cclxuY29uc3QgVHBsTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3RpdGxlLCBjaGlsZHJlbn0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBlcG9zdGVycyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQWNldGFtaW5vcGhlbi9QYXJhY2V0YW1vbCBmb3IgcGFpbiBkdXJpbmcgcHJlZ25hbmN5OiBHb29kIG9yIGJhZD9cIixcclxuICAgICAgICAgICAgc29jaWFsOiB7XHJcbiAgICAgICAgICAgICAgICBuYkNvbW1lbnRzOiAxNSxcclxuICAgICAgICAgICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cDogNDUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG93bjogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5iU2hhcmVkOiAxMCxcclxuICAgICAgICAgICAgICAgIGxldmVsczogW3t0eXBlOjEsIG5iOjN9LCB7dHlwZToyLCBuYjoxfSwge3R5cGU6MywgbmI6MX0sIHt0eXBlOjQsIG5iOjR9XSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgdGV4dDogXCJXaG8gaXMgR2FsZW4gb2YgUGVyZ2Ftb24sIHRoZSBwaHlzaWNpYW4gcGhpbG9zb3BoZXI/XCIsXHJcbiAgICAgICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICAgICAgbmJDb21tZW50czogMjEsXHJcbiAgICAgICAgICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXA6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvd246IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuYlNoYXJlZDogOCxcclxuICAgICAgICAgICAgICAgIGxldmVsczogW3t0eXBlOjEsIG5iOjV9LCB7dHlwZToyLCBuYjoxfSwge3R5cGU6MywgbmI6MX0sIHt0eXBlOjQsIG5iOjB9XSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuXHJcbiAgICAgICAgPFRwbEdsb2JhbCB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tJbmZvIHRpdGxlPVwiVG9wIGVQb3N0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXBvc3RlcnMubWFwKChpdGVtLCBpZHgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZVBvc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0VHlwZUljb25Db250YWluZXIgdHlwZT17aXRlbS50eXBlfSBzbWFsbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tTb2NpYWwgc29jaWFsPXtpdGVtLnNvY2lhbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxvY2tJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrSW5mbyB0aXRsZT1cIkZlYXR1cmVkXCIgbGFzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OVEVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrSW5mbz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgICBcclxuICAgICAgICAgICAgICAgICAgIC5lUG9zdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLmVQb3N0ZXIgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tbWFpbi1tYXJnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYmxvY2tzIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvVHBsR2xvYmFsPlxyXG5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHBsTGlzdDsiXX0= */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-2cols-2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplList);

/***/ })

})
//# sourceMappingURL=explore.js.a1438a589e7080c4b57d.hot-update.js.map