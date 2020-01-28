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
    className: "jsx-1569103940" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1569103940" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1569103940" + " " + "section list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, children), __jsx("div", {
    className: "jsx-1569103940" + " " + "section blocks",
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
    return __jsx("div", {
      className: "jsx-1569103940" + " " + "globalList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1569103940" + " " + "ePoster",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1569103940",
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
      className: "jsx-1569103940",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, item.text)), __jsx("div", {
      className: "jsx-1569103940" + " " + "social",
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
    id: "1569103940",
    __self: this
  }, ".globalList.jsx-1569103940{margin-bottom:20px;border-bottom:1px solid white;}.ePoster.jsx-1569103940{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px;padding-bottom:20px;}.ePoster.jsx-1569103940 div.jsx-1569103940{margin-right:5px;}.social.jsx-1569103940{margin-bottom:10px;}.main.jsx-1569103940{padding-left:var(--main-margin);}.sections.jsx-1569103940{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.section.jsx-1569103940{width:260px;}.list.jsx-1569103940{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;margin-right:25px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLTJjb2xzLTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdpQixBQUcyQyxBQUlOLEFBT0ksQUFHRSxBQUdXLEFBSWhCLEFBT0QsQUFJQyxZQUhqQixLQWpCRCxFQVhrQyxBQWNsQyxhQUdDLGlCQWhCRCx5QkFHdUIsQUFpQkMsQUFXUCxxRUFSaEIsRUFTc0Isa0JBQ0ksSUE1QlAsZ0JBQ0ksb0JBQ3hCLHNDQTRCQyIsImZpbGUiOiJEOlxcc2Npa29vcFxcZ2l0aHViXFxkZW1vc2Npa29vcFxcY29tcG9uZW50c1xcdGVtcGxhdGVzXFx0ZW1wbGF0ZS0yY29scy0yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVHBsR2xvYmFsIGZyb20gJy4vdGVtcGxhdGUtZ2xvYmFsJ1xyXG5pbXBvcnQgQmxvY2tJbmZvIGZyb20gJy4uL2Jsb2Nrcy9ibG9ja0luZm8nXHJcbmltcG9ydCBCbG9ja1Byb2plY3QgZnJvbSAnLi4vYmxvY2tzL2Jsb2NrUHJvamVjdCdcclxuaW1wb3J0IEludGVyZXN0cyBmcm9tICcuLi9ibG9ja3MvaW50ZXJlc3RzJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vZm9ybS9pbnB1dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9mb3JtL2J1dHRvbidcclxuaW1wb3J0IHttb2NrUHJvamVjdHMsIH0gZnJvbSAnLi4vbW9ja3MvbW9ja3MnXHJcbmltcG9ydCAqIGFzIHVzZXJzIGZyb20gJy4uL21vY2tzL2RhdGEvdXNlcnMnXHJcbmltcG9ydCBCbG9ja1VzZXJzIGZyb20gJy4uL2Jsb2Nrcy91c2VycydcclxuaW1wb3J0IEJsb2NrSW50ZXJlc3RzIGZyb20gJy4uL2Jsb2Nrcy9pbnRlcmVzdHMnXHJcbmltcG9ydCBQcm9qZWN0VHlwZUljb25Db250YWluZXIgZnJvbSAnLi4vaWNvbnMvY29udGFpbmVycy9wcm9qZWN0VHlwZSdcclxuaW1wb3J0IEJsb2NrU29jaWFsIGZyb20gJy4uL2Jsb2Nrcy9zb2NpYWwnXHJcblxyXG5jb25zdCBUcGxMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7dGl0bGUsIGNoaWxkcmVufSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGVwb3N0ZXJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgdGV4dDogXCJBY2V0YW1pbm9waGVuL1BhcmFjZXRhbW9sIGZvciBwYWluIGR1cmluZyBwcmVnbmFuY3k6IEdvb2Qgb3IgYmFkP1wiLFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIG5iQ29tbWVudHM6IDE1LFxyXG4gICAgICAgICAgICAgICAgbmJWb3Rlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwOiA0NSxcclxuICAgICAgICAgICAgICAgICAgICBkb3duOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmJTaGFyZWQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBbe3R5cGU6MSwgbmI6M30sIHt0eXBlOjIsIG5iOjF9LCB7dHlwZTozLCBuYjoxfSwge3R5cGU6NCwgbmI6NH1dLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIldobyBpcyBHYWxlbiBvZiBQZXJnYW1vbiwgdGhlIHBoeXNpY2lhbiBwaGlsb3NvcGhlcj9cIixcclxuICAgICAgICAgICAgc29jaWFsOiB7XHJcbiAgICAgICAgICAgICAgICBuYkNvbW1lbnRzOiAyMSxcclxuICAgICAgICAgICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cDogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgZG93bjogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5iU2hhcmVkOiA4LFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBbe3R5cGU6MSwgbmI6NX0sIHt0eXBlOjIsIG5iOjF9LCB7dHlwZTozLCBuYjoxfSwge3R5cGU6NCwgbmI6MH1dLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIFxyXG5cclxuICAgICAgICA8VHBsR2xvYmFsIHRpdGxlPXt0aXRsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBibG9ja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0luZm8gdGl0bGU9XCJUb3AgZVBvc3RlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcG9zdGVycy5tYXAoKGl0ZW0sIGlkeCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbExpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVQb3N0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0VHlwZUljb25Db250YWluZXIgdHlwZT17aXRlbS50eXBlfSBzbWFsbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja1NvY2lhbCBzb2NpYWw9e2l0ZW0uc29jaWFsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxvY2tJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrSW5mbyB0aXRsZT1cIkZlYXR1cmVkXCIgbGFzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OVEVOVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrSW5mbz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgICBcclxuICAgICAgICAgICAgICAgICAgIC5nbG9iYWxMaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5lUG9zdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAuZVBvc3RlciBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYWluLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ibG9ja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9UcGxHbG9iYWw+XHJcblxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcGxMaXN0OyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-2cols-2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplList);

/***/ })

})
//# sourceMappingURL=explore.js.9e371074d9057301e62c.hot-update.js.map