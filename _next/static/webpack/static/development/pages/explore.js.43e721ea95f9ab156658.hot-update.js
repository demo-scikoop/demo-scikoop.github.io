webpackHotUpdate("static\\development\\pages\\explore.js",{

/***/ "./components/blocks/blockProject.js":
/*!*******************************************!*\
  !*** ./components/blocks/blockProject.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/social */ "./components/blocks/social.js");
/* harmony import */ var _blocks_interests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/interests */ "./components/blocks/interests.js");
/* harmony import */ var _blocks_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/users */ "./components/blocks/users.js");
/* harmony import */ var _icons_containers_projectType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/containers/projectType */ "./components/icons/containers/projectType.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\blocks\\blockProject.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var BlockProject = function BlockProject(props) {
  var _props$project = props.project,
      project = _props$project === void 0 ? {} : _props$project;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleClick = function handleClick(e) {
    if (!project.linked) return;
    e.preventDefault();
    router.push("/project/".concat(project.id));
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    onClick: handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "header clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_icons_containers_projectType__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: project.type,
    certified: project.certified,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, project.title)), __jsx("div", {
    onClick: handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, project.text, " ")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_blocks_interests__WEBPACK_IMPORTED_MODULE_4__["default"], {
    interests: project.interests,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "By ", __jsx(_blocks_users__WEBPACK_IMPORTED_MODULE_5__["default"], {
    users: project.users,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_3__["default"], {
    social: project.social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("div", {
    onClick: handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "128855548",
    dynamic: [project.linked ? 'cursor: pointer;\n' : '', project.id],
    __self: this
  }, ".clickable.__jsx-style-dynamic-selector{".concat(project.linked ? 'cursor: pointer;\n' : '', ";}.block.__jsx-style-dynamic-selector{background-color:#F4F6F6;border:1px solid #D3DDDD;border-radius:5px;height:280px;width:640px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:Bold 14px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;padding-top:18px;padding-left:18px;}.title.__jsx-style-dynamic-selector{width:300px;margin-left:10px;}.left.__jsx-style-dynamic-selector{width:370px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.right.__jsx-style-dynamic-selector{width:270px;border-radius:0px 5px 5px 0px;background:url('/media/projects/").concat(project.id, ".png') no-repeat;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding-top:18px;padding-left:18px;}.text.__jsx-style-dynamic-selector{font:12px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;width:330px;}.footer.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{margin-top:10px;margin-bottom:10px;}.footer.__jsx-style-dynamic-selector{padding:0px 18px 5px 18px;}.users.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFxibG9ja3NcXGJsb2NrUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2lCLEFBTW9CLEFBRThCLEFBY1osQUFnQkQsQUFJQSxBQU9BLEFBTUMsQUFXUSxBQVNMLEFBS1UsQUFJYixZQTdDSSxBQUtKLEFBTWlCLElBMEJYLEtBVEYsSUExRFEsQ0F3RTdCLEdBM0VBLEFBa0NBLE1BcUNBLE9BMUJrRixRQXpDNUQsa0JBQ0wsTUFZTSxBQWlDRyxBQTZCSCxPQXpFUCxLQWlDVSxPQS9CUixhQXNEQSxDQXJERyxZQXFDckIsQ0FrQmdCLFlBRWhCLFdBaER1QixBQThEQSxTQTdCQSxZQVhXLDRCQTdCakIsNENBU2EsQUE4REwsU0E3QlQsWUFFSyxBQTRCQSxLQTlEQSxJQVRFLFFBNENELEtBZnRCLGFBZ0JBLDJDQTNDQSxPQXNFa0IsS0E5REEsU0ErRGxCLEtBNURxQixpQkFDQyxrQkFHdEIiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXGJsb2Nrc1xcYmxvY2tQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9ibG9ja3Mvc29jaWFsJ1xyXG5pbXBvcnQgSW50ZXJlc3RzIGZyb20gJy4uL2Jsb2Nrcy9pbnRlcmVzdHMnXHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi9ibG9ja3MvdXNlcnMnXHJcbmltcG9ydCBQcm9qZWN0VHlwZUljb25Db250YWluZXIgZnJvbSAnLi4vaWNvbnMvY29udGFpbmVycy9wcm9qZWN0VHlwZSdcclxuXHJcbmNvbnN0IEJsb2NrUHJvamVjdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3Byb2plY3QgPSB7fX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghcHJvamVjdC5saW5rZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wcm9qZWN0LyR7cHJvamVjdC5pZH1gKTtcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGlja2FibGVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RUeXBlSWNvbkNvbnRhaW5lciB0eXBlPXtwcm9qZWN0LnR5cGV9IGNlcnRpZmllZD17cHJvamVjdC5jZXJ0aWZpZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0LnRpdGxlfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57cHJvamVjdC50ZXh0fSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludGVyZXN0cyBpbnRlcmVzdHM9e3Byb2plY3QuaW50ZXJlc3RzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnNcIj5CeSA8VXNlcnMgdXNlcnM9e3Byb2plY3QudXNlcnN9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbD17cHJvamVjdC5zb2NpYWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2AgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2xpY2thYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdC5saW5rZWQgPyAnY3Vyc29yOiBwb2ludGVyO1xcbicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBCb2xkIDE0cHgvMTlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvbWVkaWEvcHJvamVjdHMvJHtwcm9qZWN0LmlkfS5wbmcnKSAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMwcHg7ICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlciBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxOHB4IDVweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXJzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTdweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tQcm9qZWN0OyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\blocks\\\\blockProject.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockProject);

/***/ })

})
//# sourceMappingURL=explore.js.43e721ea95f9ab156658.hot-update.js.map