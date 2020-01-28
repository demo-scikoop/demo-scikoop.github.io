webpackHotUpdate("static\\development\\pages\\project\\[projectid].js",{

/***/ "./components/tiles/posts/tile2.js":
/*!*****************************************!*\
  !*** ./components/tiles/posts/tile2.js ***!
  \*****************************************/
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
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/social */ "./components/blocks/social.js");
/* harmony import */ var _blocks_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/users */ "./components/blocks/users.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\tiles\\posts\\tile2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Tile2 = function Tile2(props) {
  var type = props.type,
      categories = props.categories,
      selected = props.selected,
      className = props.className,
      full = props.full;
  var comments = props.comments,
      votes = props.votes,
      shared = props.shared,
      levels = props.levels;
  var _props$post = props.post,
      post = _props$post === void 0 ? {} : _props$post;
  var title = post.title,
      text = post.text,
      image = post.image,
      videoId = post.videoId,
      by = post.by;
  var projectId = props.projectId;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleClick = function handleClick(e) {
    if (!projectId) return;
    e.preventDefault();
    router.push("/project/".concat(projectId, "/").concat(post.id));
  };

  console.log('post', post);

  var getText = function getText() {
    return text.split('##').map(function (item, key) {
      return __jsx("span", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, item, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }));
    });
  };

  var getTypes = function getTypes() {};

  var getImg = function getImg() {
    if (image) {
      return __jsx("img", {
        src: "/media/images/".concat(image),
        width: "".concat(full ? 480 : 300, "px"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    }
  };

  var getVideo = function getVideo() {
    if (videoId) {
      return __jsx("iframe", {
        type: "text/html",
        width: "".concat(full ? 480 : 300),
        src: "https://www.youtube.com/embed/".concat(videoId, "?enablejsapi=1"),
        frameBorder: "0",
        id: "video".concat(videoId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      });
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "cell size2 ".concat(selected ? 'selected' : '', "  ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "header clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, getImg(), getVideo()), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, getText()), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, post.postedBy && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "postedBy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Posted by ", __jsx(_blocks_users__WEBPACK_IMPORTED_MODULE_4__["default"], {
    users: [post.postedBy],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, post.date)), __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_3__["default"], {
    social: {
      nbComments: 0,
      nbVotes: {
        up: 0,
        down: 0
      },
      nbShared: 0,
      levels: post.levels
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "793936303",
    dynamic: [projectId ? 'cursor: pointer;\n' : ''],
    __self: this
  }, ".clickable.__jsx-style-dynamic-selector{".concat(projectId ? 'cursor: pointer;\n' : '', ";}.posted.__jsx-style-dynamic-selector{-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;font:10px/17px Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.postedBy.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/17px Arial;margin-bottom:10px;}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img.__jsx-style-dynamic-selector{margin-top:13px;width:300px;opacity:1;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.__jsx-style-dynamic-selector:last-of-type{margin-right:0px;}.row.__jsx-style-dynamic-selector:last-of-type{margin-bottom:0px;}.cell.__jsx-style-dynamic-selector{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.__jsx-style-dynamic-selector:hover,.selected.__jsx-style-dynamic-selector{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.__jsx-style-dynamic-selector:hover>.center.__jsx-style-dynamic-selector>.img.__jsx-style-dynamic-selector{opacity:1;}.cell.size1.__jsx-style-dynamic-selector{width:325px;}.cell.size2.__jsx-style-dynamic-selector{width:663px;}.cell.size3.__jsx-style-dynamic-selector{width:325px;height:577px;}.cell.featured.__jsx-style-dynamic-selector{border:1px solid #C2CCCC;}.featured.__jsx-style-dynamic-selector .header.__jsx-style-dynamic-selector{border-bottom:2px solid #D3DDDD;}.cell.available.__jsx-style-dynamic-selector{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.__jsx-style-dynamic-selector .header.__jsx-style-dynamic-selector{border-bottom:2px dashed #D3DDDD;}.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.__jsx-style-dynamic-selector{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.__jsx-style-dynamic-selector .cell.__jsx-style-dynamic-selector{margin-bottom:11px;}.last.__jsx-style-dynamic-selector{margin-bottom:0px !important;}.header.__jsx-style-dynamic-selector,.body.__jsx-style-dynamic-selector,.footer.__jsx-style-dynamic-selector,.img.__jsx-style-dynamic-selector{padding:0px 28px 0px 28px;}.body.__jsx-style-dynamic-selector{margin-top:13px;font:12px/17px Arial;}.actions.__jsx-style-dynamic-selector{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.__jsx-style-dynamic-selector{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHUyxBQUtRLEFBRXNCLEFBU0osQUFRQSxBQUtHLEFBTUgsQUFPSSxBQUdDLEFBR08sQUFXQSxBQU9mLEFBSUUsQUFJQSxBQUlBLEFBS2EsQUFHTyxBQUlOLEFBT08sQUFJcEIsQUFLRSxBQU1JLEFBSVUsQUFJSCxBQUtWLEFBS0osQUFVQSxVQXpFaEIsRUFJQSxBQUlBLEFBSWlCLEFBb0RNLEFBVUEsSUEvR1AsQUFnR1MsQ0FuRnpCLENBR0EsQ0FtRUEsTUFoRTZCLEFBV0EsQUFvQjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEVBMUZjLENBMUJkLEFBZ0hBLEdBOUJBLENBV0EsSUE2QkEsQ0EvRkEsVUE0RGdCLEVBMUNNLEFBV0osT0E4Q0YsR0FkQyxJQS9CSCxJQVhRLENBeURXLElBZGpDLENBN0V1QixBQVFBLEFBV0csQUEyQjFCLEFBdUN1QixXQTlGTCxDQTRDRCxPQW1EakIsS0FNQSxDQXBHeUIsQUE2Q1AsTUE4RUQsQUFVQSxRQXZGSSxPQTVDSix1QkFnQmpCLFNBVWtDLGVBbEJULFlBa0hGLEFBVUEsU0EzSEEsTUFSQSxJQTRDdkIsU0FuQ0EseUNBaUhBLEFBV2dCLFlBQ29CLE9BNUduQixhQUNqQixPQTFCa0MsS0F1SUosMEJBQzlCLG9GQXZJQSIsImZpbGUiOiJEOlxcc2Npa29vcFxcZ2l0aHViXFxkZW1vc2Npa29vcFxcY29tcG9uZW50c1xcdGlsZXNcXHBvc3RzXFx0aWxlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vLi4vYmxvY2tzL3NvY2lhbCdcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uL2Jsb2Nrcy91c2VycydcclxuXHJcbmNvbnN0IFRpbGUyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHt0eXBlLCBjYXRlZ29yaWVzLCBzZWxlY3RlZCwgY2xhc3NOYW1lLCBmdWxsfSA9IHByb3BzO1xyXG4gICAgY29uc3Qge2NvbW1lbnRzLCB2b3Rlcywgc2hhcmVkLCBsZXZlbHN9ID0gcHJvcHM7XHJcblxyXG5cclxuICAgIGNvbnN0IHtwb3N0ID0ge319ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7dGl0bGUsIHRleHQsIGltYWdlLCB2aWRlb0lkLCBieX0gPSBwb3N0O1xyXG5cclxuXHJcbiAgICBjb25zdCB7cHJvamVjdElkfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghcHJvamVjdElkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcHJvamVjdC8ke3Byb2plY3RJZH0vJHtwb3N0LmlkfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3Bvc3QnLCBwb3N0KTtcclxuXHJcbiAgICBjb25zdCBnZXRUZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCcjIycpLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2tleX0+e2l0ZW19PGJyLz48L3NwYW4+XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRJbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvJHtpbWFnZX1gfSB3aWR0aD17YCR7ZnVsbD80ODA6MzAwfXB4YH0gLz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VmlkZW8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZpZGVvSWQpIHtcclxuXHJcbiAgICAgICAgIHJldHVybiAoICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aWZyYW1lIHR5cGU9XCJ0ZXh0L2h0bWxcIiB3aWR0aD17YCR7ZnVsbD80ODA6MzAwfWB9IFxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2VuYWJsZWpzYXBpPTFgfVxyXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBpZD17YHZpZGVvJHt2aWRlb0lkfWB9PjwvaWZyYW1lPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjZWxsIHNpemUyICR7c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9ICAke2NsYXNzTmFtZSB8fCAnJ31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xpY2thYmxlXCI+XHJcbiAgICAgICAgICAgICAgICB7Z2V0VHlwZXMoKX0ge3RpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0SW1nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge2dldFZpZGVvKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0VGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LnBvc3RlZEJ5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0ZWRCeVwiPlBvc3RlZCBieSA8VXNlcnMgdXNlcnM9e1twb3N0LnBvc3RlZEJ5XX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+e3Bvc3QuZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbD17IHtcclxuICAgICAgICBuYkNvbW1lbnRzOiAwLFxyXG4gICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgdXA6IDAsXHJcbiAgICAgICAgICAgIGRvd246IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5iU2hhcmVkOiAwLFxyXG4gICAgICAgIGxldmVsczogcG9zdC5sZXZlbHMsXHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IFxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLmNsaWNrYWJsZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAke3Byb2plY3RJZCA/ICdjdXJzb3I6IHBvaW50ZXI7XFxuJyA6ICcnfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zdGVkIHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBmb250OiAxMHB4LzE3cHggQXJpYWw7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0ZWRCeSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250OiAxMnB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGw6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3c6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VsbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2RjY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEYyRjI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MnB4O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGw6aG92ZXIsIC5zZWxlY3RlZCB7ICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0REREQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0RTc4NzY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGw6aG92ZXIgPiAuY2VudGVyID4gLmltZyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY2M3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTc3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5mZWF0dXJlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkNDQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlZCAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0MyQ0NDQztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmF2YWlsYWJsZSAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3cuY29sc3BhbiB7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NzZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93LmNvbHNwYW4gLmNlbGwgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYXN0IHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciwgLmJvZHksIC5mb290ZXIsIC5pbWcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjhweCAwcHggMjhweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEycHgvMTdweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQ6IEJvbGQgMTZweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWxlMjsiXX0= */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile2.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile2);

/***/ })

})
//# sourceMappingURL=[projectid].js.79a0448334c0d5321037.hot-update.js.map