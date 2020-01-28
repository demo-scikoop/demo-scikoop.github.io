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
  console.log('props', props);

  var getText = function getText() {
    return text.split('##').map(function (item, key) {
      return __jsx("span", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, item, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
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
          lineNumber: 26
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
          lineNumber: 42
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
          lineNumber: 43
        },
        __self: this
      }), __jsx("script", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\n                // create the global player from the specific iframe (#video)\n                const player = new YT.Player('video".concat(videoId, "', {\n                    events: {\n                    // call this function when player is ready to use\n                    'onReady': onPlayerReady\n                    }\n                });\n\n                const playerEmbedded = document.getElementById(\"video").concat(videoId, "\");\n                console.log('playerEmbedded', playerEmbedded);\n                \n                function onPlayerReady(event) {\n  \n                    // bind events\n                    const playerEmbedded = document.getElementById(\"video").concat(videoId, "\");\n                    playerEmbedded.addEventListener(\"mouseover\", function() {\n                      console.log('playerEmbedded', 'mouseover');\n                        player.playVideo();\n                    });\n                    \n                    playerEmbedded.addEventListener(\"mouseout\", function() {\n                        console.log('playerEmbedded', 'mouseout');\n                      player.pauseVideo();\n                    });\n                    \n                  }\n            \n            ")));
    }
  };

  return __jsx("div", {
    className: "jsx-3240723503" + " " + "cell size2 ".concat(selected ? 'selected' : '', "  ").concat(className || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, getTypes(), " ", title), __jsx("div", {
    className: "jsx-3240723503" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, getImg(), getVideo()), __jsx("div", {
    className: "jsx-3240723503" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, getText()), __jsx("div", {
    className: "jsx-3240723503" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3240723503" + " " + "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "comments"), __jsx("div", {
    className: "jsx-3240723503" + " " + "votes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "votes"), __jsx("div", {
    className: "jsx-3240723503" + " " + "shared",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "shared")), __jsx("div", {
    className: "jsx-3240723503" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "levels")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3240723503",
    __self: this
  }, ".center.jsx-3240723503{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img.jsx-3240723503{margin-top:13px;width:300px;opacity:1;}.content.jsx-3240723503{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:230px;}.cell.jsx-3240723503:last-of-type{margin-right:0px;}.row.jsx-3240723503:last-of-type{margin-bottom:0px;}.cell.jsx-3240723503{background-color:#F4F6F6;border:1px solid #F0F2F2;border-radius:5px;margin-right:11px;height:282px;color:#707070;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}.cell.jsx-3240723503:hover,.selected.jsx-3240723503{background-color:#D3DDDD;border:1px solid #4E7876;color:#000000;opacity:1;}.cell.jsx-3240723503:hover>.center.jsx-3240723503>.img.jsx-3240723503{opacity:1;}.cell.size1.jsx-3240723503{width:325px;}.cell.size2.jsx-3240723503{width:663px;}.cell.size3.jsx-3240723503{width:325px;height:577px;}.cell.featured.jsx-3240723503{border:1px solid #C2CCCC;}.featured.jsx-3240723503 .header.jsx-3240723503{border-bottom:2px solid #D3DDDD;}.cell.available.jsx-3240723503{border:2px dashed #C2CCCC;background-color:#fff;width:323px;height:280px;}.available.jsx-3240723503 .header.jsx-3240723503{border-bottom:2px dashed #D3DDDD;}.row.jsx-3240723503{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:11px;}.row.colspan.jsx-3240723503{-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;width:676px;margin-bottom:0px !important;}.row.colspan.jsx-3240723503 .cell.jsx-3240723503{margin-bottom:11px;}.last.jsx-3240723503{margin-bottom:0px !important;}.header.jsx-3240723503,.body.jsx-3240723503,.footer.jsx-3240723503,.img.jsx-3240723503{padding:0px 28px 0px 28px;}.body.jsx-3240723503{margin-top:13px;font:12px/17px Arial;}.actions.jsx-3240723503{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-3240723503{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header.jsx-3240723503{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:40px;border-bottom:2px solid #FFFFFF;font:Bold 16px/19px Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0aWxlc1xccG9zdHNcXHRpbGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIUyxBQUswQixBQUtHLEFBTUgsQUFPSSxBQUdDLEFBR08sQUFXQSxBQU9mLEFBSUUsQUFJQSxBQUlBLEFBS2EsQUFHTyxBQUlOLEFBT08sQUFJcEIsQUFLRSxBQU1JLEFBSVUsQUFJSCxBQUtWLEFBS0osQUFPTyxBQU9QLFVBN0VoQixFQUlBLEFBSUEsQUFJaUIsQUFvRE0sQUFjQSxJQW5IUCxBQWdHUyxDQW5GekIsQ0FHQSxDQW1FQSxNQWhFNkIsQUFXQSxBQW9CN0IsQUFJQSxDQU8wQixBQThCMUIsRUExRmMsQ0FzRmQsR0E5QkEsQ0FXQSxJQTZCQSxDQS9GQSxVQTREZ0IsRUExQ00sQUFXSixPQThDRixHQWRDLElBL0JILElBWFEsQ0F5RFcsSUFkakMsQ0FyRXVCLEFBV0csQUEyQjFCLEFBdUN1QixZQWxETixPQW1EakIsQUFtQ2lCLEtBN0JqQixDQXZEa0IsTUE4RUQsQUFjQSxRQTNGSSw4QkE1QnJCLFNBVWtDLGVBc0dYLFlBTkEsQUFjQSxtQkEzRnZCLHNDQW9Ga0MsWUFObEMsQUFlZ0IsWUFDb0IsT0FoSG5CLGFBQ2pCLFlBaUg4QiwwQkFDOUIsaUNBWkEiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRpbGVzXFxwb3N0c1xcdGlsZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUaWxlMiA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7dHlwZSwgY2F0ZWdvcmllcywgc2VsZWN0ZWQsIGNsYXNzTmFtZSwgZnVsbH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtjb21tZW50cywgdm90ZXMsIHNoYXJlZCwgbGV2ZWxzfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICBjb25zdCB7cG9zdCA9IHt9fSA9IHByb3BzO1xyXG4gICAgY29uc3Qge3RpdGxlLCB0ZXh0LCBpbWcsIHZpZGVvSWQsIGJ5fSA9IHBvc3Q7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdwcm9wcycsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCBnZXRUZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCcjIycpLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2tleX0+e2l0ZW19PGJyLz48L3NwYW4+XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRJbWcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGltZykge1xyXG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2AvbWVkaWEvaW1hZ2VzLyR7aW1nfWB9IHdpZHRoPXtgJHtmdWxsPzQ4MDozMDB9cHhgfSAvPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRWaWRlbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodmlkZW9JZCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllcjtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHJldHVybiAoICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgdHlwZT1cInRleHQvaHRtbFwiIHdpZHRoPXtgJHtmdWxsPzQ4MDozMDB9YH0gXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/ZW5hYmxlanNhcGk9MWB9XHJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgIGlkPXtgdmlkZW8ke3ZpZGVvSWR9YH0+PC9pZnJhbWU+XHJcblxyXG4gICAgICAgICAgICA8c2NyaXB0PntgXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGdsb2JhbCBwbGF5ZXIgZnJvbSB0aGUgc3BlY2lmaWMgaWZyYW1lICgjdmlkZW8pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKCd2aWRlbyR7dmlkZW9JZH0nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gcGxheWVyIGlzIHJlYWR5IHRvIHVzZVxyXG4gICAgICAgICAgICAgICAgICAgICdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckVtYmVkZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlbyR7dmlkZW9JZH1cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyRW1iZWRkZWQnLCBwbGF5ZXJFbWJlZGRlZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBiaW5kIGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckVtYmVkZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlbyR7dmlkZW9JZH1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRW1iZWRkZWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJFbWJlZGRlZCcsICdtb3VzZW92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXlWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckVtYmVkZGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllckVtYmVkZGVkJywgJ21vdXNlb3V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2VWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCBzaXplMiAke3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfSAgJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Z2V0VHlwZXMoKX0ge3RpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0SW1nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge2dldFZpZGVvKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0VGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5jb21tZW50czwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXNcIj52b3RlczwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVkXCI+c2hhcmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiBcclxuICAgICAgICB7YFxyXG5cclxuICAgICAgICBcclxuICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMkYyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmhvdmVyLCAuc2VsZWN0ZWQgeyAgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEREREO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEU3ODc2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsOmhvdmVyID4gLmNlbnRlciA+IC5pbWcge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuc2l6ZTEge1xyXG4gICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VsbC5zaXplMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NjNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jZWxsLnNpemUzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3N3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuZmVhdHVyZWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzJDQ0NDO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmVhdHVyZWQgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwuYXZhaWxhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNDMkNDQ0M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG4gICAgICAgICAgICB3aWR0aDogMzIzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hdmFpbGFibGUgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI0QzRERERDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucm93LmNvbHNwYW4geyBcclxuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjc2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdy5jb2xzcGFuIC5jZWxsIHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFzdCB7IFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIsIC5ib2R5LCAuZm9vdGVyLCAuaW1nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI4cHggMHB4IDI4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250OiAxMnB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQ6IEJvbGQgMTZweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWxlMjsiXX0= */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\tiles\\\\posts\\\\tile2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tile2);

/***/ })

})
//# sourceMappingURL=[projectid].js.d8ba2a6e0ad498ce6431.hot-update.js.map