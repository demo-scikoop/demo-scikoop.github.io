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
  }, {
    type: 2,
    text: "Breast cancer development and cosmetic hair products: Only the facts",
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
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2426736041" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2426736041" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2426736041" + " " + "section list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, children), __jsx("div", {
    className: "jsx-2426736041" + " " + "section blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Top ePosters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, eposters.map(function (item, idx) {
    return __jsx("div", {
      className: "jsx-2426736041" + " " + "globalList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2426736041" + " " + "ePoster",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2426736041",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(_icons_containers_projectType__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: item.type,
      small: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2426736041",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, item.text)), __jsx("div", {
      className: "jsx-2426736041" + " " + "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_12__["default"], {
      social: item.social,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })));
  })), __jsx(_blocks_blockInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Featured",
    last: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "CONTENT")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2426736041",
    __self: this
  }, ".globalList.jsx-2426736041{margin-bottom:25px;border-bottom:1px solid white;}.ePoster.jsx-2426736041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px;padding-bottom:20px;}.ePoster.jsx-2426736041 div.jsx-2426736041{margin-right:5px;}.social.jsx-2426736041{margin-bottom:10px;}.main.jsx-2426736041{padding-left:var(--main-margin);}.sections.jsx-2426736041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.section.jsx-2426736041{width:260px;}.list.jsx-2426736041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;margin-right:25px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLTJjb2xzLTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0dpQixBQUcyQyxBQUlOLEFBT0ksQUFHRSxBQUdXLEFBSWhCLEFBT0QsQUFJQyxZQUhqQixLQWpCRCxFQVhrQyxBQWNsQyxhQUdDLGlCQWhCRCx5QkFHdUIsQUFpQkMsQUFXUCxxRUFSaEIsRUFTc0Isa0JBQ0ksSUE1QlAsZ0JBQ0ksb0JBQ3hCLHNDQTRCQyIsImZpbGUiOiJEOlxcc2Npa29vcFxcZ2l0aHViXFxkZW1vc2Npa29vcFxcY29tcG9uZW50c1xcdGVtcGxhdGVzXFx0ZW1wbGF0ZS0yY29scy0yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVHBsR2xvYmFsIGZyb20gJy4vdGVtcGxhdGUtZ2xvYmFsJ1xyXG5pbXBvcnQgQmxvY2tJbmZvIGZyb20gJy4uL2Jsb2Nrcy9ibG9ja0luZm8nXHJcbmltcG9ydCBCbG9ja1Byb2plY3QgZnJvbSAnLi4vYmxvY2tzL2Jsb2NrUHJvamVjdCdcclxuaW1wb3J0IEludGVyZXN0cyBmcm9tICcuLi9ibG9ja3MvaW50ZXJlc3RzJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vZm9ybS9pbnB1dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9mb3JtL2J1dHRvbidcclxuaW1wb3J0IHttb2NrUHJvamVjdHMsIH0gZnJvbSAnLi4vbW9ja3MvbW9ja3MnXHJcbmltcG9ydCAqIGFzIHVzZXJzIGZyb20gJy4uL21vY2tzL2RhdGEvdXNlcnMnXHJcbmltcG9ydCBCbG9ja1VzZXJzIGZyb20gJy4uL2Jsb2Nrcy91c2VycydcclxuaW1wb3J0IEJsb2NrSW50ZXJlc3RzIGZyb20gJy4uL2Jsb2Nrcy9pbnRlcmVzdHMnXHJcbmltcG9ydCBQcm9qZWN0VHlwZUljb25Db250YWluZXIgZnJvbSAnLi4vaWNvbnMvY29udGFpbmVycy9wcm9qZWN0VHlwZSdcclxuaW1wb3J0IEJsb2NrU29jaWFsIGZyb20gJy4uL2Jsb2Nrcy9zb2NpYWwnXHJcblxyXG5jb25zdCBUcGxMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7dGl0bGUsIGNoaWxkcmVufSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGVwb3N0ZXJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgdGV4dDogXCJBY2V0YW1pbm9waGVuL1BhcmFjZXRhbW9sIGZvciBwYWluIGR1cmluZyBwcmVnbmFuY3k6IEdvb2Qgb3IgYmFkP1wiLFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIG5iQ29tbWVudHM6IDE1LFxyXG4gICAgICAgICAgICAgICAgbmJWb3Rlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwOiA0NSxcclxuICAgICAgICAgICAgICAgICAgICBkb3duOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmJTaGFyZWQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBbe3R5cGU6MSwgbmI6M30sIHt0eXBlOjIsIG5iOjF9LCB7dHlwZTozLCBuYjoxfSwge3R5cGU6NCwgbmI6NH1dLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIldobyBpcyBHYWxlbiBvZiBQZXJnYW1vbiwgdGhlIHBoeXNpY2lhbiBwaGlsb3NvcGhlcj9cIixcclxuICAgICAgICAgICAgc29jaWFsOiB7XHJcbiAgICAgICAgICAgICAgICBuYkNvbW1lbnRzOiAyMSxcclxuICAgICAgICAgICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cDogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgZG93bjogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5iU2hhcmVkOiA4LFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBbe3R5cGU6MSwgbmI6NX0sIHt0eXBlOjIsIG5iOjF9LCB7dHlwZTozLCBuYjoxfSwge3R5cGU6NCwgbmI6MH1dLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkJyZWFzdCBjYW5jZXIgZGV2ZWxvcG1lbnQgYW5kIGNvc21ldGljIGhhaXIgcHJvZHVjdHM6IE9ubHkgdGhlIGZhY3RzXCIsXHJcbiAgICAgICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICAgICAgbmJDb21tZW50czogMjEsXHJcbiAgICAgICAgICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXA6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvd246IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuYlNoYXJlZDogOCxcclxuICAgICAgICAgICAgICAgIGxldmVsczogW3t0eXBlOjEsIG5iOjV9LCB7dHlwZToyLCBuYjoxfSwge3R5cGU6MywgbmI6MX0sIHt0eXBlOjQsIG5iOjB9XSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuXHJcbiAgICAgICAgPFRwbEdsb2JhbCB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gYmxvY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tJbmZvIHRpdGxlPVwiVG9wIGVQb3N0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXBvc3RlcnMubWFwKChpdGVtLCBpZHgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbG9iYWxMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlUG9zdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdFR5cGVJY29uQ29udGFpbmVyIHR5cGU9e2l0ZW0udHlwZX0gc21hbGwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tTb2NpYWwgc29jaWFsPXtpdGVtLnNvY2lhbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0luZm8gdGl0bGU9XCJGZWF0dXJlZFwiIGxhc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTlRFTlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbG9ja0luZm8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YCAgXHJcbiAgICAgICAgICAgICAgICAgICAuZ2xvYmFsTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAuZVBvc3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLmVQb3N0ZXIgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tbWFpbi1tYXJnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYmxvY2tzIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvVHBsR2xvYmFsPlxyXG5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHBsTGlzdDsiXX0= */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-2cols-2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplList);

/***/ })

})
//# sourceMappingURL=explore.js.23f279499be798f4e13c.hot-update.js.map