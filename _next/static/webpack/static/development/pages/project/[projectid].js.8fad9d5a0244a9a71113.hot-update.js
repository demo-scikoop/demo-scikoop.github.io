webpackHotUpdate("static\\development\\pages\\project\\[projectid].js",{

/***/ "./components/tiles/posts/tile3.js":
/*!*****************************************!*\
  !*** ./components/tiles/posts/tile3.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/social */ "./components/blocks/social.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\tiles\\posts\\tile3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Tile3 = function Tile3(props) {
  var type = props.type,
      categories = props.categories,
      levels = props.levels,
      selected = props.selected,
      className = props.className;
  var comments = props.comments,
      votes = props.votes,
      shared = props.shared;
  var _props$post = props.post,
      post = _props$post === void 0 ? {} : _props$post;
  var title = post.title,
      text = post.text,
      podcast = post.podcast,
      image = post.image,
      videoId = post.videoId;

  var getTypes = function getTypes() {};

  var getImg = function getImg() {
    if (image) {
      return __jsx("img", {
        src: "/media/images/".concat(image),
        width: "269px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      });
    }
  };

  var getVideo = function getVideo() {
    if (videoId) {
      var player;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("iframe", {
        type: "text/html",
        width: "".concat(full ? 480 : 300),
        src: "https://www.youtube.com/embed/".concat(videoId, "?enablejsapi=1"),
        frameBorder: "0",
        id: "video".concat(videoId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("script", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\n                // create the global player from the specific iframe (#video)\n                const player = new YT.Player('video".concat(videoId, "', {\n                    events: {\n                    // call this function when player is ready to use\n                    'onReady': onPlayerReady\n                    }\n                });\n\n                const playerEmbedded = document.getElementById(\"video").concat(videoId, "\");\n                console.log('playerEmbedded', playerEmbedded);\n                \n                function onPlayerReady(event) {\n  \n                    // bind events\n                    const playerEmbedded = document.getElementById(\"video").concat(videoId, "\");\n                    playerEmbedded.addEventListener(\"mouseover\", function() {\n                      console.log('playerEmbedded', 'mouseover');\n                        player.playVideo();\n                    });\n                    \n                    playerEmbedded.addEventListener(\"mouseout\", function() {\n                        console.log('playerEmbedded', 'mouseout');\n                      player.pauseVideo();\n                    });\n                    \n                  }\n            \n            ")));
    }
  };

  return __jsx("div", {
    className: "jsx-2042308626" + " " + "cell size3 ".concat(selected ? 'selected' : '', " ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: "jsx-2042308626" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2042308626" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, getImg()), __jsx("div", {
    className: "jsx-2042308626",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, text)), __jsx("div", {
    className: "jsx-2042308626" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 85
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2042308626",
    __self: this
  }, ".content.jsx-2042308626{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:525px;}.cell.jsx-2042308626:last-of-type{margin-right:0px;}.row.jsx-2042308626:last-of-type{margin-bottom:0px;}.cell.jsx-2042308626{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.jsx-2042308626:hover,.selected.jsx-2042308626{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.img.jsx-2042308626{margin-bottom:55px;opacity:1;}.cell.jsx-2042308626:hover>.content.jsx-2042308626>.body.jsx-2042308626>.img.jsx-2042308626{opacity:1;}.cell.size1.jsx-2042308626{width:325px;}.cell.size2.jsx-2042308626{width:663px;}.cell.size3.jsx-2042308626{width:325px;height:577px;}.cell.featured.jsx-2042308626{border:1px solid #C2CCCC;}.featured.jsx-2042308626 .header.jsx-2042308626{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-2042308626{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-2042308626 .header.jsx-2042308626{border-bottom:2px dashed #D3DDDD;}.row.jsx-2042308626{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-2042308626{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-2042308626 .cell.jsx-2042308626{margin-bottom:11px;}.last.jsx-2042308626{margin-bottom:0px !important;}.header.jsx-2042308626,.body.jsx-2042308626,.footer.jsx-2042308626{padding:0px 28px 0px 28px;}.body.jsx-2042308626{margin-top:13px;font:12px/17px Arial;}.actions.jsx-2042308626{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-2042308626{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header.jsx-2042308626{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HUyxBQUkwQixBQU9JLEFBR0MsQUFHTyxBQVdBLEFBT04sQUFJVCxBQUlFLEFBSUEsQUFJQSxBQUthLEFBR08sQUFJTixBQU9PLEFBSXBCLEFBS0UsQUFNSSxBQUlVLEFBSUgsQUFLVixBQUtKLEFBT08sQUFPUCxVQTdFaEIsRUFJQSxBQUlBLEFBSWlCLEFBb0RNLEFBY0EsSUFuQkUsQ0F2RnpCLENBR0EsQ0FxQmMsQUFrRGQsTUFwRTZCLEFBV0EsQUF3QjdCLEFBSUEsQ0FPMEIsQUE4QjFCLEdBekRBLEFBcURBLEdBOUJBLENBV0EsSUE2QkEsV0FuQ2dCLEVBOUNNLEFBV0osT0FrREYsR0FkQyxJQW5DSCxJQVhRLENBNkRXLElBZGpDLENBOUQwQixBQTJCMUIsQUEyQ3VCLFlBdEROLE9BdURqQixBQW1DaUIsS0E3QmpCLENBM0RrQixNQWtGRCxBQWNBLFFBL0ZJLHVDQWxCYSxlQTBHWCxZQU5BLEFBY0EsbUJBL0Z2QixzQ0F3RmtDLFlBTmxDLEFBZWdCLFlBQ29CLE9BcEhuQixhQUNqQixZQXFIOEIsMEJBQzlCLGlDQVpBIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uLy4uL2Jsb2Nrcy9zb2NpYWwnXHJcblxyXG5jb25zdCBUaWxlMyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3R5cGUsIGNhdGVnb3JpZXMsIGxldmVscywgc2VsZWN0ZWQsIGNsYXNzTmFtZX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtjb21tZW50cywgdm90ZXMsIHNoYXJlZH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3Qge3Bvc3QgPSB7fX0gPSBwcm9wcztcclxuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgcG9kY2FzdCwgaW1hZ2UsIHZpZGVvSWR9ID0gcG9zdDtcclxuXHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SW1nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2AvbWVkaWEvaW1hZ2VzLyR7aW1hZ2V9YH0gd2lkdGg9e2AyNjlweGB9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFZpZGVvID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh2aWRlb0lkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxheWVyO1xyXG5cclxuICAgICAgICAgcmV0dXJuICggICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlmcmFtZSB0eXBlPVwidGV4dC9odG1sXCIgd2lkdGg9e2Ake2Z1bGw/NDgwOjMwMH1gfSBcclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9lbmFibGVqc2FwaT0xYH1cclxuICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgaWQ9e2B2aWRlbyR7dmlkZW9JZH1gfT48L2lmcmFtZT5cclxuXHJcbiAgICAgICAgICAgIDxzY3JpcHQ+e2BcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZ2xvYmFsIHBsYXllciBmcm9tIHRoZSBzcGVjaWZpYyBpZnJhbWUgKCN2aWRlbylcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ3ZpZGVvJHt2aWRlb0lkfScsIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiBwbGF5ZXIgaXMgcmVhZHkgdG8gdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRW1iZWRkZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvJHt2aWRlb0lkfVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJFbWJlZGRlZCcsIHBsYXllckVtYmVkZGVkKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJpbmQgZXZlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRW1iZWRkZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvJHt2aWRlb0lkfVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJFbWJlZGRlZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllckVtYmVkZGVkJywgJ21vdXNlb3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRW1iZWRkZWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyRW1iZWRkZWQnLCAnbW91c2VvdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wYXVzZVZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCBzaXplMyAke3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfSAke2NsYXNzTmFtZSB8fCAnJ31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIHtnZXRUeXBlcygpfSB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+e2dldEltZygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3RleHR9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbD17IHtcclxuICAgICAgICBuYkNvbW1lbnRzOiAwLFxyXG4gICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgdXA6IDAsXHJcbiAgICAgICAgICAgIGRvd246IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5iU2hhcmVkOiAwLFxyXG4gICAgICAgIGxldmVsczogcG9zdC5sZXZlbHMsXHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4gXHJcbiAgICAgICAge2BcclxuICAgICAgICBcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMkYyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmhvdmVyLCAuc2VsZWN0ZWQgeyAgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEREREO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEU3ODc2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VsbDpob3ZlciA+IC5jb250ZW50ID4gLmJvZHkgPiAuaW1nIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjYzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmZlYXR1cmVkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MyQ0NDQztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVkIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLmF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQzJDQ0NDO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuICAgICAgICAgICAgd2lkdGg6IDMyM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXZhaWxhYmxlIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIHsgXHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6IDY3NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cuY29sc3BhbiAuY2VsbCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhc3QgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLCAuYm9keSwgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgICAgZm9udDogMTJweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250OiBCb2xkIDE2cHgvMTlweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZTM7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile3.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile3);

/***/ })

})
//# sourceMappingURL=[projectid].js.8fad9d5a0244a9a71113.hot-update.js.map