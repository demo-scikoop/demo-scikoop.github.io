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
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/social */ "./components/blocks/social.js");
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
      img = post.img,
      videoId = post.videoId,
      by = post.by;
  console.log('post', post);

  var getText = function getText() {
    return text.split('##').map(function (item, key) {
      return __jsx("span", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, item, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }));
    });
  };

  var getTypes = function getTypes() {};

  var getImg = function getImg() {
    if (img) {
      return __jsx("img", {
        src: "/media/images/".concat(img),
        width: "".concat(full ? 480 : 300, "px"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
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
          lineNumber: 43
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
          lineNumber: 44
        },
        __self: this
      }), __jsx("script", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\n                // create the global player from the specific iframe (#video)\n                const player = new YT.Player('video".concat(videoId, "', {\n                    events: {\n                    // call this function when player is ready to use\n                    'onReady': onPlayerReady\n                    }\n                });\n\n                const playerEmbedded = document.getElementById(\"video").concat(videoId, "\");\n                console.log('playerEmbedded', playerEmbedded);\n                \n                function onPlayerReady(event) {\n  \n                    // bind events\n                    const playerEmbedded = document.getElementById(\"video").concat(videoId, "\");\n                    playerEmbedded.addEventListener(\"mouseover\", function() {\n                      console.log('playerEmbedded', 'mouseover');\n                        player.playVideo();\n                    });\n                    \n                    playerEmbedded.addEventListener(\"mouseout\", function() {\n                        console.log('playerEmbedded', 'mouseout');\n                      player.pauseVideo();\n                    });\n                    \n                  }\n            \n            ")));
    }
  };

  return __jsx("div", {
    className: "jsx-3240723503" + " " + "cell size2 ".concat(selected ? 'selected' : '', "  ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: "jsx-3240723503" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, getImg(), getVideo()), __jsx("div", {
    className: "jsx-3240723503" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, getText()), __jsx("div", {
    className: "jsx-3240723503" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3240723503",
    __self: this
  }, ".center.jsx-3240723503{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img.jsx-3240723503{margin-top:13px;width:300px;opacity:1;}.content.jsx-3240723503{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.jsx-3240723503:last-of-type{margin-right:0px;}.row.jsx-3240723503:last-of-type{margin-bottom:0px;}.cell.jsx-3240723503{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.jsx-3240723503:hover,.selected.jsx-3240723503{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.jsx-3240723503:hover>.center.jsx-3240723503>.img.jsx-3240723503{opacity:1;}.cell.size1.jsx-3240723503{width:325px;}.cell.size2.jsx-3240723503{width:663px;}.cell.size3.jsx-3240723503{width:325px;height:577px;}.cell.featured.jsx-3240723503{border:1px solid #C2CCCC;}.featured.jsx-3240723503 .header.jsx-3240723503{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-3240723503{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-3240723503 .header.jsx-3240723503{border-bottom:2px dashed #D3DDDD;}.row.jsx-3240723503{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-3240723503{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-3240723503 .cell.jsx-3240723503{margin-bottom:11px;}.last.jsx-3240723503{margin-bottom:0px !important;}.header.jsx-3240723503,.body.jsx-3240723503,.footer.jsx-3240723503,.img.jsx-3240723503{padding:0px 28px 0px 28px;}.body.jsx-3240723503{margin-top:13px;font:12px/17px Arial;}.actions.jsx-3240723503{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-3240723503{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header.jsx-3240723503{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1IUyxBQUswQixBQUtHLEFBTUgsQUFPSSxBQUdDLEFBR08sQUFXQSxBQU9mLEFBSUUsQUFJQSxBQUlBLEFBS2EsQUFHTyxBQUlOLEFBT08sQUFJcEIsQUFLRSxBQU1JLEFBSVUsQUFJSCxBQUtWLEFBS0osQUFPTyxBQU9QLFVBN0VoQixFQUlBLEFBSUEsQUFJaUIsQUFvRE0sQUFjQSxJQW5IUCxBQWdHUyxDQW5GekIsQ0FHQSxDQW1FQSxNQWhFNkIsQUFXQSxBQW9CN0IsQUFJQSxDQU8wQixBQThCMUIsRUExRmMsQ0FzRmQsR0E5QkEsQ0FXQSxJQTZCQSxDQS9GQSxVQTREZ0IsRUExQ00sQUFXSixPQThDRixHQWRDLElBL0JILElBWFEsQ0F5RFcsSUFkakMsQ0FyRXVCLEFBV0csQUEyQjFCLEFBdUN1QixZQWxETixPQW1EakIsQUFtQ2lCLEtBN0JqQixDQXZEa0IsTUE4RUQsQUFjQSxRQTNGSSw4QkE1QnJCLFNBVWtDLGVBc0dYLFlBTkEsQUFjQSxtQkEzRnZCLHNDQW9Ga0MsWUFObEMsQUFlZ0IsWUFDb0IsT0FoSG5CLGFBQ2pCLFlBaUg4QiwwQkFDOUIsaUNBWkEiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRpbGVzXFxwb3N0c1xcdGlsZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vLi4vYmxvY2tzL3NvY2lhbCdcclxuXHJcbmNvbnN0IFRpbGUyID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHt0eXBlLCBjYXRlZ29yaWVzLCBzZWxlY3RlZCwgY2xhc3NOYW1lLCBmdWxsfSA9IHByb3BzO1xyXG4gICAgY29uc3Qge2NvbW1lbnRzLCB2b3Rlcywgc2hhcmVkLCBsZXZlbHN9ID0gcHJvcHM7XHJcblxyXG5cclxuICAgIGNvbnN0IHtwb3N0ID0ge319ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7dGl0bGUsIHRleHQsIGltZywgdmlkZW9JZCwgYnl9ID0gcG9zdDtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ3Bvc3QnLCBwb3N0KTtcclxuXHJcbiAgICBjb25zdCBnZXRUZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCcjIycpLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2tleX0+e2l0ZW19PGJyLz48L3NwYW4+XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRJbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGltZykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2AvbWVkaWEvaW1hZ2VzLyR7aW1nfWB9IHdpZHRoPXtgJHtmdWxsPzQ4MDozMDB9cHhgfSAvPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRWaWRlbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodmlkZW9JZCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllcjtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHJldHVybiAoICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgdHlwZT1cInRleHQvaHRtbFwiIHdpZHRoPXtgJHtmdWxsPzQ4MDozMDB9YH0gXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/ZW5hYmxlanNhcGk9MWB9XHJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgIGlkPXtgdmlkZW8ke3ZpZGVvSWR9YH0+PC9pZnJhbWU+XHJcblxyXG4gICAgICAgICAgICA8c2NyaXB0PntgXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGdsb2JhbCBwbGF5ZXIgZnJvbSB0aGUgc3BlY2lmaWMgaWZyYW1lICgjdmlkZW8pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKCd2aWRlbyR7dmlkZW9JZH0nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gcGxheWVyIGlzIHJlYWR5IHRvIHVzZVxyXG4gICAgICAgICAgICAgICAgICAgICdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckVtYmVkZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlbyR7dmlkZW9JZH1cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyRW1iZWRkZWQnLCBwbGF5ZXJFbWJlZGRlZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBiaW5kIGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckVtYmVkZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlbyR7dmlkZW9JZH1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRW1iZWRkZWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJFbWJlZGRlZCcsICdtb3VzZW92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXlWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckVtYmVkZGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllckVtYmVkZGVkJywgJ21vdXNlb3V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2VWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCBzaXplMiAke3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfSAgJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Z2V0VHlwZXMoKX0ge3RpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0SW1nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge2dldFZpZGVvKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0VGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IFxyXG4gICAgICAgIHtgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGw6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3c6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VsbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2RjY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEYyRjI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MnB4O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGw6aG92ZXIsIC5zZWxlY3RlZCB7ICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0REREQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0RTc4NzY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGw6aG92ZXIgPiAuY2VudGVyID4gLmltZyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY2M3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTc3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5mZWF0dXJlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkNDQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlZCAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0MyQ0NDQztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmF2YWlsYWJsZSAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3cuY29sc3BhbiB7IFxyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NzZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93LmNvbHNwYW4gLmNlbGwgeyBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYXN0IHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciwgLmJvZHksIC5mb290ZXIsIC5pbWcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjhweCAwcHggMjhweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEycHgvMTdweCBBcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udDogQm9sZCAxNnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGUyOyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile2);

/***/ })

})
//# sourceMappingURL=[projectid].js.63b7516082bc5f598c2a.hot-update.js.map