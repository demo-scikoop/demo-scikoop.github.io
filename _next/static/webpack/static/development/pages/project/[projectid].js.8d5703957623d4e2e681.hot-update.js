webpackHotUpdate("static\\development\\pages\\project\\[projectid].js",{

/***/ "./pages/project/[projectid].js":
/*!**************************************!*\
  !*** ./pages/project/[projectid].js ***!
  \**************************************/
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
/* harmony import */ var _components_templates_template_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/templates/template-project */ "./components/templates/template-project.js");
/* harmony import */ var _components_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tiles/posts/tile1 */ "./components/tiles/posts/tile1.js");
/* harmony import */ var _components_tiles_posts_tile2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tiles/posts/tile2 */ "./components/tiles/posts/tile2.js");
/* harmony import */ var _components_tiles_posts_tile3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tiles/posts/tile3 */ "./components/tiles/posts/tile3.js");
/* harmony import */ var _components_tiles_posts_tileAvailable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tiles/posts/tileAvailable */ "./components/tiles/posts/tileAvailable.js");
/* harmony import */ var _components_tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tiles/posts/tileFeatured */ "./components/tiles/posts/tileFeatured.js");
/* harmony import */ var _components_mocks_mocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/mocks/mocks */ "./components/mocks/mocks.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\pages\\project\\[projectid].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Project = function Project() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var projectid = router.query.projectid;
  var project = Object(_components_mocks_mocks__WEBPACK_IMPORTED_MODULE_9__["getMockProject"])(projectid);
  console.log('projectid', projectid);
  return __jsx(_components_templates_template_project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "History of Medicine : Who is Galen the physician?",
    info: 'INFO',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2034050732" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "About",
    text: "To raise awareness about juvenile diabetes, I attempt to identify what helps avoid extreme sugar level changes when I exercise. A single person study (N=1) with daily monitoring of glucose levels that I will do for at least 1 year. I expect to observe that my values will depend on what I eat and when I eat it.",
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_tiles_posts_tile2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Basic facts about Galen",
    text: "Born: 129 AD (Pergamon, Asia, Roman Empire) ##Died: c. 210 AD (Rome, Roman Empire) ##Nationality: Greek ##Occupation: Physician",
    img: "img2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2034050732" + " " + "row ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2034050732" + " " + "row colspan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_tiles_posts_tile1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Diabetes at 8 years old",
    text: "In this podcast I am sharing the story of the very first moments that I got very sick from high blood glucose.",
    podcast: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_components_tiles_posts_tile2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: " Basic facts about Galen",
    text: "Introduction to Galen, his travels as a young man and how important Alexandria, Egypt was to his work.",
    videoId: "vXbf1i1NyiQ",
    className: "last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx(_components_tiles_posts_tile3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Fun facts",
    text: "Galen collected all his statements without ever dissecting a human body.",
    img: "img3.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2034050732" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_components_tiles_posts_tileAvailable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(_components_tiles_posts_tileFeatured__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_components_tiles_posts_tileAvailable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2034050732",
    __self: this
  }, ".colspan.jsx-2034050732 .cell.jsx-2034050732{margin-bottom:11px;}.content.jsx-2034050732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:inherit;}.cell.jsx-2034050732:last-of-type{margin-right:0px;}.row.jsx-2034050732:last-of-type{margin-bottom:0px;}.cell.jsx-2034050732{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.selected.jsx-2034050732{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:0.5;}.cell.jsx-2034050732:hover{opacity:1;}.cell.size1.jsx-2034050732{width:325px;}.cell.size2.jsx-2034050732{width:663px;}.cell.size3.jsx-2034050732{width:325px;height:577px;}.cell.featured.jsx-2034050732{border:1px solid #C2CCCC;}.featured.jsx-2034050732 .header.jsx-2034050732{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-2034050732{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-2034050732 .header.jsx-2034050732{border-bottom:2px dashed #D3DDDD;}.row.jsx-2034050732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-2034050732{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-2034050732 .cell.jsx-2034050732{margin-bottom:11px;}.last.jsx-2034050732{margin-bottom:0px !important;}.header.jsx-2034050732,.body.jsx-2034050732,.footer.jsx-2034050732{padding:0px 28px 0px 28px;}.body.jsx-2034050732{margin-top:13px;font:12px/17px Arial;}.actions.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header.jsx-2034050732{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxwYWdlc1xccHJvamVjdFxcW3Byb2plY3RpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVTLEFBSWdDLEFBSU4sQUFPSSxBQUdDLEFBR08sQUFXQSxBQVFmLEFBSUUsQUFJQSxBQUlBLEFBS2EsQUFHTyxBQUlOLEFBT08sQUFJcEIsQUFLRSxBQU1JLEFBSVUsQUFJSCxBQUtWLEFBS0osQUFPQSxBQVFBLFVBOUVoQixFQUlBLEFBSUEsQUFJaUIsQUFvRE0sQUFPQSxBQVFBLElBcEJFLENBcEZ6QixDQUdBLENBZEEsQUFrRkEsTUFqRTZCLEFBV0EsQUFxQjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEdBSkEsR0E5QkEsQ0FXQSxJQTZCQSxXQW5DZ0IsRUEzQ00sQUFXSixPQStDRixHQWRDLElBaENELElBWE0sQ0EwRFcsSUFkakMsQ0EzRDBCLEFBbUVILEVBeEN2QixVQVhpQixPQW9EakIsS0FNQSxDQXhEa0IsTUErRUQsQUFPQSxBQVFBLFFBN0ZJLHVDQWxCYSwyQkFpR1gsQUFPQSxBQVFBLG1CQTdGdkIsa0RBK0VBLEFBT2tDLEFBU2xCLFlBQ29CLE9BbEhqQixlQUNuQixVQW1IOEIsMEJBQzlCLDZDQVpBIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxwYWdlc1xccHJvamVjdFxcW3Byb2plY3RpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgVHBsUHJvamVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlcy90ZW1wbGF0ZS1wcm9qZWN0J1xyXG5pbXBvcnQgUG9zdFRpbGUxIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGlsZXMvcG9zdHMvdGlsZTEnXHJcbmltcG9ydCBQb3N0VGlsZTIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aWxlcy9wb3N0cy90aWxlMidcclxuaW1wb3J0IFBvc3RUaWxlMyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpbGVzL3Bvc3RzL3RpbGUzJ1xyXG5pbXBvcnQgVGlsZUF2YWlsYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpbGVzL3Bvc3RzL3RpbGVBdmFpbGFibGUnXHJcbmltcG9ydCBUaWxlRmVhdHVyZWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aWxlcy9wb3N0cy90aWxlRmVhdHVyZWQnXHJcbmltcG9ydCB7Z2V0TW9ja1Byb2plY3R9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9ja3MvbW9ja3MnXHJcblxyXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgcHJvamVjdGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRNb2NrUHJvamVjdChwcm9qZWN0aWQpO1xyXG4gICAgY29uc29sZS5sb2coJ3Byb2plY3RpZCcsIHByb2plY3RpZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPFRwbFByb2plY3QgXHJcbiAgICAgICAgICAgIHRpdGxlPSdIaXN0b3J5IG9mIE1lZGljaW5lIDogV2hvIGlzIEdhbGVuIHRoZSBwaHlzaWNpYW4/JyBcclxuICAgICAgICAgICAgaW5mbz17J0lORk8nfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxQb3N0VGlsZTFcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFib3V0XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiVG8gcmFpc2UgYXdhcmVuZXNzIGFib3V0IGp1dmVuaWxlIGRpYWJldGVzLCBJIGF0dGVtcHQgdG8gaWRlbnRpZnkgd2hhdCBoZWxwcyBhdm9pZCBleHRyZW1lIHN1Z2FyIGxldmVsIGNoYW5nZXMgd2hlbiBJIGV4ZXJjaXNlLiBBIHNpbmdsZSBwZXJzb24gc3R1ZHkgKE49MSkgd2l0aCBkYWlseSBtb25pdG9yaW5nIG9mIGdsdWNvc2UgbGV2ZWxzIHRoYXQgSSB3aWxsIGRvIGZvciBhdCBsZWFzdCAxIHllYXIuIEkgZXhwZWN0IHRvIG9ic2VydmUgdGhhdCBteSB2YWx1ZXMgd2lsbCBkZXBlbmQgb24gd2hhdCBJIGVhdCBhbmQgd2hlbiBJIGVhdCBpdC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UG9zdFRpbGUyXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCYXNpYyBmYWN0cyBhYm91dCBHYWxlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkJvcm46IDEyOSBBRCAoUGVyZ2Ftb24sIEFzaWEsIFJvbWFuIEVtcGlyZSkgIyNEaWVkOiBjLiAyMTAgQUQgKFJvbWUsIFJvbWFuIEVtcGlyZSkgIyNOYXRpb25hbGl0eTogR3JlZWsgIyNPY2N1cGF0aW9uOiBQaHlzaWNpYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz1cImltZzIucG5nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2xzcGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RUaWxlMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRpYWJldGVzIGF0IDggeWVhcnMgb2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkluIHRoaXMgcG9kY2FzdCBJIGFtIHNoYXJpbmcgdGhlIHN0b3J5IG9mIHRoZSB2ZXJ5IGZpcnN0IG1vbWVudHMgdGhhdCBJIGdvdCB2ZXJ5IHNpY2sgZnJvbSBoaWdoIGJsb29kIGdsdWNvc2UuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9kY2FzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGlsZUZlYXR1cmVkIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdFRpbGUyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiIEJhc2ljIGZhY3RzIGFib3V0IEdhbGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkludHJvZHVjdGlvbiB0byBHYWxlbiwgaGlzIHRyYXZlbHMgYXMgYSB5b3VuZyBtYW4gYW5kIGhvdyBpbXBvcnRhbnQgQWxleGFuZHJpYSwgRWd5cHQgd2FzIHRvIGhpcyB3b3JrLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJ2WGJmMWkxTnlpUVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxQb3N0VGlsZTMgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGdW4gZmFjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJHYWxlbiBjb2xsZWN0ZWQgYWxsIGhpcyBzdGF0ZW1lbnRzIHdpdGhvdXQgZXZlciBkaXNzZWN0aW5nIGEgaHVtYW4gYm9keS5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz1cImltZzMucG5nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICA8VGlsZUF2YWlsYWJsZSAvPlxyXG4gICAgICAgICAgICAgICA8VGlsZUZlYXR1cmVkIC8+XHJcbiAgICAgICAgICAgICAgIDxUaWxlQXZhaWxhYmxlIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD4gXHJcbiAgICAgICAge2BcclxuXHJcbiAgICAgICAgLmNvbHNwYW4gLmNlbGwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMkYyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RlZCB7ICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0REREQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0RTc4NzY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbDpob3ZlciB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTEge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NjNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3N3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuZmVhdHVyZWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzJDQ0NDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmVhdHVyZWQgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDMkNDQ0M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG4gICAgICAgICAgICB3aWR0aDogMzIzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hdmFpbGFibGUgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucm93LmNvbHNwYW4geyBcclxuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjc2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIC5jZWxsIHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIsIC5ib2R5LCAuZm9vdGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI4cHggMHB4IDI4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250OiAxMnB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogQm9sZCAxNnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8L1RwbFByb2plY3Q+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\pages\\\\project\\\\[projectid].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=[projectid].js.8d5703957623d4e2e681.hot-update.js.map