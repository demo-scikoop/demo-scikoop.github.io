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
    onClick: handleClick,
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
    onClick: handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["793936303", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "body clickable",
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
  }, ".clickable.__jsx-style-dynamic-selector{".concat(projectId ? 'cursor: pointer;\n' : '', ";}.posted.__jsx-style-dynamic-selector{-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;font:10px/17px Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.postedBy.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/17px Arial;margin-bottom:10px;}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img.__jsx-style-dynamic-selector{margin-top:13px;width:300px;opacity:1;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.__jsx-style-dynamic-selector:last-of-type{margin-right:0px;}.row.__jsx-style-dynamic-selector:last-of-type{margin-bottom:0px;}.cell.__jsx-style-dynamic-selector{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.__jsx-style-dynamic-selector:hover,.selected.__jsx-style-dynamic-selector{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.__jsx-style-dynamic-selector:hover>.center.__jsx-style-dynamic-selector>.img.__jsx-style-dynamic-selector{opacity:1;}.cell.size1.__jsx-style-dynamic-selector{width:325px;}.cell.size2.__jsx-style-dynamic-selector{width:663px;}.cell.size3.__jsx-style-dynamic-selector{width:325px;height:577px;}.cell.featured.__jsx-style-dynamic-selector{border:1px solid #C2CCCC;}.featured.__jsx-style-dynamic-selector .header.__jsx-style-dynamic-selector{border-bottom:2px solid #D3DDDD;}.cell.available.__jsx-style-dynamic-selector{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.__jsx-style-dynamic-selector .header.__jsx-style-dynamic-selector{border-bottom:2px dashed #D3DDDD;}.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.__jsx-style-dynamic-selector{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.__jsx-style-dynamic-selector .cell.__jsx-style-dynamic-selector{margin-bottom:11px;}.last.__jsx-style-dynamic-selector{margin-bottom:0px !important;}.header.__jsx-style-dynamic-selector,.body.__jsx-style-dynamic-selector,.footer.__jsx-style-dynamic-selector,.img.__jsx-style-dynamic-selector{padding:0px 28px 0px 28px;}.body.__jsx-style-dynamic-selector{margin-top:13px;font:12px/17px Arial;}.actions.__jsx-style-dynamic-selector{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.__jsx-style-dynamic-selector{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHUyxBQUtRLEFBRXNCLEFBU0osQUFRQSxBQUtHLEFBTUgsQUFPSSxBQUdDLEFBR08sQUFXQSxBQU9mLEFBSUUsQUFJQSxBQUlBLEFBS2EsQUFHTyxBQUlOLEFBT08sQUFJcEIsQUFLRSxBQU1JLEFBSVUsQUFJSCxBQUtWLEFBS0osQUFVQSxVQXpFaEIsRUFJQSxBQUlBLEFBSWlCLEFBb0RNLEFBVUEsSUEvR1AsQUFnR1MsQ0FuRnpCLENBR0EsQ0FtRUEsTUFoRTZCLEFBV0EsQUFvQjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEVBMUZjLENBMUJkLEFBZ0hBLEdBOUJBLENBV0EsSUE2QkEsQ0EvRkEsVUE0RGdCLEVBMUNNLEFBV0osT0E4Q0YsR0FkQyxJQS9CSCxJQVhRLENBeURXLElBZGpDLENBN0V1QixBQVFBLEFBV0csQUEyQjFCLEFBdUN1QixXQTlGTCxDQTRDRCxPQW1EakIsS0FNQSxDQXBHeUIsQUE2Q1AsTUE4RUQsQUFVQSxRQXZGSSxPQTVDSix1QkFnQmpCLFNBVWtDLGVBbEJULFlBa0hGLEFBVUEsU0EzSEEsTUFSQSxJQTRDdkIsU0FuQ0EseUNBaUhBLEFBV2dCLFlBQ29CLE9BNUduQixhQUNqQixPQTFCa0MsS0F1SUosMEJBQzlCLG9GQXZJQSIsImZpbGUiOiJEOlxcc2Npa29vcFxcZ2l0aHViXFxkZW1vc2Npa29vcFxcY29tcG9uZW50c1xcdGlsZXNcXHBvc3RzXFx0aWxlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vLi4vYmxvY2tzL3NvY2lhbCdcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uL2Jsb2Nrcy91c2VycydcclxuXHJcbmNvbnN0IFRpbGUyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHt0eXBlLCBjYXRlZ29yaWVzLCBzZWxlY3RlZCwgY2xhc3NOYW1lLCBmdWxsfSA9IHByb3BzO1xyXG4gICAgY29uc3Qge2NvbW1lbnRzLCB2b3Rlcywgc2hhcmVkLCBsZXZlbHN9ID0gcHJvcHM7XHJcblxyXG5cclxuICAgIGNvbnN0IHtwb3N0ID0ge319ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7dGl0bGUsIHRleHQsIGltYWdlLCB2aWRlb0lkLCBieX0gPSBwb3N0O1xyXG5cclxuXHJcbiAgICBjb25zdCB7cHJvamVjdElkfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghcHJvamVjdElkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcHJvamVjdC8ke3Byb2plY3RJZH0vJHtwb3N0LmlkfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3Bvc3QnLCBwb3N0KTtcclxuXHJcbiAgICBjb25zdCBnZXRUZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCcjIycpLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2tleX0+e2l0ZW19PGJyLz48L3NwYW4+XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRJbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvJHtpbWFnZX1gfSB3aWR0aD17YCR7ZnVsbD80ODA6MzAwfXB4YH0gLz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VmlkZW8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZpZGVvSWQpIHtcclxuXHJcbiAgICAgICAgIHJldHVybiAoICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aWZyYW1lIHR5cGU9XCJ0ZXh0L2h0bWxcIiB3aWR0aD17YCR7ZnVsbD80ODA6MzAwfWB9IFxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2VuYWJsZWpzYXBpPTFgfVxyXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBpZD17YHZpZGVvJHt2aWRlb0lkfWB9PjwvaWZyYW1lPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjZWxsIHNpemUyICR7c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9ICAke2NsYXNzTmFtZSB8fCAnJ31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2xpY2thYmxlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge2dldFR5cGVzKCl9IHt0aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldEltZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRWaWRlbygpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5IGNsaWNrYWJsZVwiICBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldFRleHQoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5wb3N0ZWRCeSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkQnlcIj5Qb3N0ZWQgYnkgPFVzZXJzIHVzZXJzPXtbcG9zdC5wb3N0ZWRCeV19IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPntwb3N0LmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWw9eyB7XHJcbiAgICAgICAgbmJDb21tZW50czogMCxcclxuICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgIHVwOiAwLFxyXG4gICAgICAgICAgICBkb3duOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYlNoYXJlZDogMCxcclxuICAgICAgICBsZXZlbHM6IHBvc3QubGV2ZWxzLFxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiBcclxuICAgICAgICB7YFxyXG4gICAgICAgIC5jbGlja2FibGUge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJHtwcm9qZWN0SWQgPyAnY3Vyc29yOiBwb2ludGVyO1xcbicgOiAnJ31cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvc3RlZCB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgZm9udDogMTBweC8xN3B4IEFyaWFsO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zdGVkQnkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMkYyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmhvdmVyLCAuc2VsZWN0ZWQgeyAgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEREREO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEU3ODc2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmhvdmVyID4gLmNlbnRlciA+IC5pbWcge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTEge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NjNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3N3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuZmVhdHVyZWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzJDQ0NDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmVhdHVyZWQgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDMkNDQ0M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG4gICAgICAgICAgICB3aWR0aDogMzIzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hdmFpbGFibGUgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucm93LmNvbHNwYW4geyBcclxuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjc2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIC5jZWxsIHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIsIC5ib2R5LCAuZm9vdGVyLCAuaW1nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI4cHggMHB4IDI4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250OiAxMnB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250OiBCb2xkIDE2cHgvMTlweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZTI7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile2.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile2);

/***/ })

})
//# sourceMappingURL=[projectid].js.a8b634d282422a913d27.hot-update.js.map