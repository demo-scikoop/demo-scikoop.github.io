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
    className: "jsx-984656494" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-984656494" + " " + "sections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-984656494" + " " + "section list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, children), __jsx("div", {
    className: "jsx-984656494" + " " + "section blocks",
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
      className: "jsx-984656494" + " " + "globalList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-984656494" + " " + "ePoster",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-984656494",
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
      className: "jsx-984656494",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, item.text)), __jsx("div", {
      className: "jsx-984656494" + " " + "social",
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
    id: "984656494",
    __self: this
  }, ".globalList.jsx-984656494{margin-bottom:20px;}.ePoster.jsx-984656494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px;padding-bottom:20px;border-bottom:1px solid white;}.ePoster.jsx-984656494 div.jsx-984656494{margin-right:5px;}.social.jsx-984656494{margin-bottom:10px;}.main.jsx-984656494{padding-left:var(--main-margin);}.sections.jsx-984656494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.section.jsx-984656494{width:260px;}.list.jsx-984656494{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;margin-right:25px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLTJjb2xzLTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdpQixBQUcyQyxBQUdOLEFBUUksQUFHRSxBQUdXLEFBSWhCLEFBT0QsQUFJQyxZQUhqQixLQWpCRCxFQVhBLEFBY0EsYUFHQywwQ0Fkc0IsQUFrQkMsQUFXUCxxRUFSaEIsRUFTc0Isa0JBQ0ksSUE3QlAsZ0JBQ0ksb0JBQ1UsOEJBQ2xDLFFBNEJDIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLTJjb2xzLTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUcGxHbG9iYWwgZnJvbSAnLi90ZW1wbGF0ZS1nbG9iYWwnXHJcbmltcG9ydCBCbG9ja0luZm8gZnJvbSAnLi4vYmxvY2tzL2Jsb2NrSW5mbydcclxuaW1wb3J0IEJsb2NrUHJvamVjdCBmcm9tICcuLi9ibG9ja3MvYmxvY2tQcm9qZWN0J1xyXG5pbXBvcnQgSW50ZXJlc3RzIGZyb20gJy4uL2Jsb2Nrcy9pbnRlcmVzdHMnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9mb3JtL2lucHV0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2Zvcm0vYnV0dG9uJ1xyXG5pbXBvcnQge21vY2tQcm9qZWN0cywgfSBmcm9tICcuLi9tb2Nrcy9tb2NrcydcclxuaW1wb3J0ICogYXMgdXNlcnMgZnJvbSAnLi4vbW9ja3MvZGF0YS91c2VycydcclxuaW1wb3J0IEJsb2NrVXNlcnMgZnJvbSAnLi4vYmxvY2tzL3VzZXJzJ1xyXG5pbXBvcnQgQmxvY2tJbnRlcmVzdHMgZnJvbSAnLi4vYmxvY2tzL2ludGVyZXN0cydcclxuaW1wb3J0IFByb2plY3RUeXBlSWNvbkNvbnRhaW5lciBmcm9tICcuLi9pY29ucy9jb250YWluZXJzL3Byb2plY3RUeXBlJ1xyXG5pbXBvcnQgQmxvY2tTb2NpYWwgZnJvbSAnLi4vYmxvY2tzL3NvY2lhbCdcclxuXHJcbmNvbnN0IFRwbExpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHt0aXRsZSwgY2hpbGRyZW59ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgZXBvc3RlcnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkFjZXRhbWlub3BoZW4vUGFyYWNldGFtb2wgZm9yIHBhaW4gZHVyaW5nIHByZWduYW5jeTogR29vZCBvciBiYWQ/XCIsXHJcbiAgICAgICAgICAgIHNvY2lhbDoge1xyXG4gICAgICAgICAgICAgICAgbmJDb21tZW50czogMTUsXHJcbiAgICAgICAgICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXA6IDQ1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRvd246IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuYlNoYXJlZDogMTAsXHJcbiAgICAgICAgICAgICAgICBsZXZlbHM6IFt7dHlwZToxLCBuYjozfSwge3R5cGU6MiwgbmI6MX0sIHt0eXBlOjMsIG5iOjF9LCB7dHlwZTo0LCBuYjo0fV0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiV2hvIGlzIEdhbGVuIG9mIFBlcmdhbW9uLCB0aGUgcGh5c2ljaWFuIHBoaWxvc29waGVyP1wiLFxyXG4gICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgIG5iQ29tbWVudHM6IDIxLFxyXG4gICAgICAgICAgICAgICAgbmJWb3Rlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBkb3duOiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmJTaGFyZWQ6IDgsXHJcbiAgICAgICAgICAgICAgICBsZXZlbHM6IFt7dHlwZToxLCBuYjo1fSwge3R5cGU6MiwgbmI6MX0sIHt0eXBlOjMsIG5iOjF9LCB7dHlwZTo0LCBuYjowfV0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcblxyXG4gICAgICAgIDxUcGxHbG9iYWwgdGl0bGU9e3RpdGxlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbnNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGJsb2Nrc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrSW5mbyB0aXRsZT1cIlRvcCBlUG9zdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVwb3N0ZXJzLm1hcCgoaXRlbSwgaWR4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvYmFsTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZVBvc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RUeXBlSWNvbkNvbnRhaW5lciB0eXBlPXtpdGVtLnR5cGV9IHNtYWxsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrU29jaWFsIHNvY2lhbD17aXRlbS5zb2NpYWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbG9ja0luZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tJbmZvIHRpdGxlPVwiRmVhdHVyZWRcIiBsYXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05URU5UXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxvY2tJbmZvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2AgIFxyXG4gICAgICAgICAgICAgICAgICAgLmdsb2JhbExpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAuZVBvc3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5lUG9zdGVyIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1haW4tbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJsb2NrcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L1RwbEdsb2JhbD5cclxuXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRwbExpc3Q7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-2cols-2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplList);

/***/ })

})
//# sourceMappingURL=explore.js.3436d12b36218a105b07.hot-update.js.map