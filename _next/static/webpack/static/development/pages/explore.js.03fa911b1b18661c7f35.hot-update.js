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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "content clickable",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["128855548", [project.linked ? 'cursor: pointer;\n' : '', project.id]]]) + " " + "right clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "128855548",
    dynamic: [project.linked ? 'cursor: pointer;\n' : '', project.id],
    __self: this
  }, ".clickable.__jsx-style-dynamic-selector{".concat(project.linked ? 'cursor: pointer;\n' : '', ";}.block.__jsx-style-dynamic-selector{background-color:#F4F6F6;border:1px solid #D3DDDD;border-radius:5px;height:280px;width:640px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:Bold 14px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;padding-top:18px;padding-left:18px;}.title.__jsx-style-dynamic-selector{width:300px;margin-left:10px;}.left.__jsx-style-dynamic-selector{width:370px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.right.__jsx-style-dynamic-selector{width:270px;border-radius:0px 5px 5px 0px;background:url('/media/projects/").concat(project.id, ".png') no-repeat;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding-top:18px;padding-left:18px;}.text.__jsx-style-dynamic-selector{font:12px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;width:330px;}.footer.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{margin-top:10px;margin-bottom:10px;}.footer.__jsx-style-dynamic-selector{padding:0px 18px 5px 18px;}.users.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFxibG9ja3NcXGJsb2NrUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2lCLEFBTW9CLEFBRThCLEFBY1osQUFnQkQsQUFJQSxBQU9BLEFBTUMsQUFXUSxBQVNMLEFBS1UsQUFJYixZQTdDSSxBQUtKLEFBTWlCLElBMEJYLEtBVEYsSUExRFEsQ0F3RTdCLEdBM0VBLEFBa0NBLE1BcUNBLE9BMUJrRixRQXpDNUQsa0JBQ0wsTUFZTSxBQWlDRyxBQTZCSCxPQXpFUCxLQWlDVSxPQS9CUixhQXNEQSxDQXJERyxZQXFDckIsQ0FrQmdCLFlBRWhCLFdBaER1QixBQThEQSxTQTdCQSxZQVhXLDRCQTdCakIsNENBU2EsQUE4REwsU0E3QlQsWUFFSyxBQTRCQSxLQTlEQSxJQVRFLFFBNENELEtBZnRCLGFBZ0JBLDJDQTNDQSxPQXNFa0IsS0E5REEsU0ErRGxCLEtBNURxQixpQkFDQyxrQkFHdEIiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXGJsb2Nrc1xcYmxvY2tQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9ibG9ja3Mvc29jaWFsJ1xyXG5pbXBvcnQgSW50ZXJlc3RzIGZyb20gJy4uL2Jsb2Nrcy9pbnRlcmVzdHMnXHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi9ibG9ja3MvdXNlcnMnXHJcbmltcG9ydCBQcm9qZWN0VHlwZUljb25Db250YWluZXIgZnJvbSAnLi4vaWNvbnMvY29udGFpbmVycy9wcm9qZWN0VHlwZSdcclxuXHJcbmNvbnN0IEJsb2NrUHJvamVjdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3Byb2plY3QgPSB7fX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghcHJvamVjdC5saW5rZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wcm9qZWN0LyR7cHJvamVjdC5pZH1gKTtcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBjbGlja2FibGVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RUeXBlSWNvbkNvbnRhaW5lciB0eXBlPXtwcm9qZWN0LnR5cGV9IGNlcnRpZmllZD17cHJvamVjdC5jZXJ0aWZpZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0LnRpdGxlfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjbGlja2FibGVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3Byb2plY3QudGV4dH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnRlcmVzdHMgaW50ZXJlc3RzPXtwcm9qZWN0LmludGVyZXN0c30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzXCI+QnkgPFVzZXJzIHVzZXJzPXtwcm9qZWN0LnVzZXJzfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWw9e3Byb2plY3Quc29jaWFsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjbGlja2FibGVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YCAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGlja2FibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0LmxpbmtlZCA/ICdjdXJzb3I6IHBvaW50ZXI7XFxuJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDNEREREO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IEJvbGQgMTRweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzcwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9tZWRpYS9wcm9qZWN0cy8ke3Byb2plY3QuaWR9LnBuZycpICBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDsgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMzBweDsgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE4cHggNXB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudXNlcnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja1Byb2plY3Q7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\blocks\\\\blockProject.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockProject);

/***/ })

})
//# sourceMappingURL=explore.js.03fa911b1b18661c7f35.hot-update.js.map