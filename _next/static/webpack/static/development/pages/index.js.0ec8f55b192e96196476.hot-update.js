webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_template_2cols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/templates/template-2cols */ "./components/templates/template-2cols.js");
/* harmony import */ var _components_blocks_blockProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blocks/blockProject */ "./components/blocks/blockProject.js");
/* harmony import */ var _components_blocks_separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/blocks/separator */ "./components/blocks/separator.js");
/* harmony import */ var _components_blocks_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/blocks/users */ "./components/blocks/users.js");
/* harmony import */ var _components_blocks_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/blocks/image */ "./components/blocks/image.js");
/* harmony import */ var _components_blocks_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/blocks/video */ "./components/blocks/video.js");
/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/form/input */ "./components/form/input.js");
/* harmony import */ var _components_form_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/form/button */ "./components/form/button.js");
/* harmony import */ var _components_mocks_mocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/mocks/mocks */ "./components/mocks/mocks.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Home = function Home() {
  var activities = Object(_components_mocks_mocks__WEBPACK_IMPORTED_MODULE_10__["mockActivities"])();
  return __jsx(_components_templates_template_2cols__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "2cols!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2698615776" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_form_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: "Browse projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_form_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2698615776" + " " + "activities",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, activities.map(function (activity, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-2698615776" + " " + "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_components_blocks_users__WEBPACK_IMPORTED_MODULE_5__["default"], {
      users: [activity.user],
      picture: true,
      name: true,
      date: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2698615776" + " " + "type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, activity.type), __jsx("div", {
      className: "jsx-2698615776" + " " + "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, activity.date)), __jsx("div", {
      className: "jsx-2698615776" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2698615776" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, activity.text), activity.project && __jsx("div", {
      className: "jsx-2698615776" + " " + "project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(_components_blocks_blockProject__WEBPACK_IMPORTED_MODULE_3__["default"], {
      project: activity.project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), activity.image && __jsx("div", {
      className: "jsx-2698615776" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_components_blocks_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: activity.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), activity.videoId && __jsx("div", {
      className: "jsx-2698615776" + " " + "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_components_blocks_video__WEBPACK_IMPORTED_MODULE_7__["default"], {
      videoId: activity.videoId,
      width: "500",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }))), __jsx(_components_blocks_separator__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2698615776",
    __self: this
  }, ".header.jsx-2698615776,.info.jsx-2698615776,.image.jsx-2698615776{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%;}.content.jsx-2698615776{margin-bottom:20px;}.header.jsx-2698615776 div.jsx-2698615776{padding-left:5px;}.type.jsx-2698615776{font:Bold Italic 10px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.date.jsx-2698615776{font:10px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.type.jsx-2698615776,.date.jsx-2698615776{padding-left:5px;}.text.jsx-2698615776{font:14px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;padding-left:15px;}.project.jsx-2698615776,.image.jsx-2698615776,.video.jsx-2698615776{margin-top:15px;margin-bottom:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.info.jsx-2698615776{padding-left:15px;}.activities.jsx-2698615776{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERTLEFBSW9DLEFBU0YsQUFJRixBQUlnQixBQU1aLEFBTUosQUFJSSxBQVFMLEFBUUUsQUFJRixnQkFYRyxBQVlyQixDQXhDQSxBQWdCQSxDQW9CQSxDQXhDQSxFQWNtQixBQVVBLFlBaEJBLEVBeUJKLDBEQTFDRSxhQXdCRCxBQVVBLEdBU1MsU0F6QlQsRUFPaEIsQUFVb0IsWUFoQnBCLE1Ba0JBLDZCQXBDdUIseUNBMkN2Qiw0QkExQ21CLHlEQUNJLHNFQUNSLFdBQ2YiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUZW1wbGF0ZTJDb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3RlbXBsYXRlLTJjb2xzJ1xuaW1wb3J0IEJsb2NrUHJvamVjdCBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2Nrcy9ibG9ja1Byb2plY3QnXG5pbXBvcnQgU2VwYXJhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvYmxvY2tzL3NlcGFyYXRvcidcbmltcG9ydCBVc2VycyBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2Nrcy91c2VycydcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2Nrcy9pbWFnZSdcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL2Jsb2Nrcy92aWRlbydcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vaW5wdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9idXR0b24nXG5pbXBvcnQge21vY2tBY3Rpdml0aWVzfSBmcm9tICcuLi9jb21wb25lbnRzL21vY2tzL21vY2tzJ1xuXG5cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgYWN0aXZpdGllcyA9IG1vY2tBY3Rpdml0aWVzKCk7XG5cbiAgIHJldHVybiAoXG4gICAgPFRlbXBsYXRlMkNvbHMgdGl0bGU9XCIyY29scyFcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQnJvd3NlIHByb2plY3RzXCIgLz48QnV0dG9uIGRpc2FibGVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXRpZXNcIj5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgYWN0aXZpdGllcy5tYXAoKGFjdGl2aXR5LCBpZHgpID0+IHtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJzIHVzZXJzPXtbYWN0aXZpdHkudXNlcl19IHBpY3R1cmUgbmFtZSBkYXRlIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZVwiPnthY3Rpdml0eS50eXBlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj57YWN0aXZpdHkuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2FjdGl2aXR5LnRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5wcm9qZWN0ICYmIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdFwiPjxCbG9ja1Byb2plY3QgcHJvamVjdD17YWN0aXZpdHkucHJvamVjdH0gLz48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5pbWFnZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+PEltYWdlIG5hbWU9e2FjdGl2aXR5LmltYWdlfSAvPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LnZpZGVvSWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb1wiPjxWaWRlbyB2aWRlb0lkPXthY3Rpdml0eS52aWRlb0lkfSB3aWR0aD1cIjUwMFwiIC8+PC9kaXY+fVxuXG4gICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaGVhZGVyLCAuaW5mbywgLmltYWdlIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyIGRpdiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHlwZSB7XG4gICAgICAgICAgICAgIGZvbnQ6IEJvbGQgSXRhbGljIDEwcHgvMTlweCBBcmlhbDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQ6IDEwcHgvMTlweCBBcmlhbDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHlwZSwgLmRhdGUge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmb250OiAxNHB4LzE5cHggQXJpYWw7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9qZWN0LCAuaW1hZ2UsIC52aWRlbyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aXZpdGllcyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICBgfVxuXG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvVGVtcGxhdGUyQ29scz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0ec8f55b192e96196476.hot-update.js.map