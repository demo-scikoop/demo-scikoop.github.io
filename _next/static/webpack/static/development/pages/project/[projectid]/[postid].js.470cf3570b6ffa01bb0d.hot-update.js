webpackHotUpdate("static\\development\\pages\\project\\[projectid]\\[postid].js",{

/***/ "./components/templates/template-post.js":
/*!***********************************************!*\
  !*** ./components/templates/template-post.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _template_global2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-global2 */ "./components/templates/template-global2.js");
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/social */ "./components/blocks/social.js");
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\templates\\template-post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var TplPost = function TplPost(props) {
  var _props$post = props.post,
      post = _props$post === void 0 ? {
    id: 2,
    type: 1,
    title: "Common Types of Breast Cancer",
    text: "Introduction from Mayo Clinic to the common types of breast cancer including ductal and lobular breast cancer, and invasive and non-invasive breast cancer.",
    date: "30 days ago",
    image: undefined,
    videoId: 'FTH56ifHt28',
    podcast: undefined,
    postedBy: users.u14,
    expert: users.u11,
    citizen: users.u17,
    contributors: [users.u21, users.u28],
    levels: [{
      type: 2
    }],
    comments: [{
      user: users.u8,
      text: "That’s good to know",
      date: "20 days ago"
    }, {
      user: users.u32,
      text: "Well, I do not teint my hair",
      date: "20 days ago"
    }]
  } : _props$post;
  var title = post.title,
      text = post.text,
      img = post.img,
      videoId = post.videoId,
      info = post.info;
  var type = post.type,
      categories = post.categories,
      selected = post.selected,
      className = post.className;
  var nbcomments = post.nbcomments,
      nbvotes = post.nbvotes,
      nbshared = post.nbshared,
      levels = post.levels;
  var postedBy = post.postedBy,
      expert = post.expert,
      citizen = post.citizen,
      contributors = post.contributors,
      comments = post.comments;

  var getText = function getText(text) {
    return text.split('##').map(function (item, key) {
      return __jsx("span", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, item, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }));
    });
  };

  var getTypes = function getTypes() {};

  var getImg = function getImg(img) {
    if (img) {
      return __jsx("img", {
        src: "/media/images/".concat(img),
        width: "400px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
    }
  };

  var getPicture = function getPicture(userId) {
    return __jsx("img", {
      src: "/media/users/".concat(userId, ".png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    });
  };

  var getVideo = function getVideo(videoId, size) {
    if (videoId) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("iframe", {
        type: "text/html",
        width: "".concat(size || '400'),
        height: "270",
        src: "https://www.youtube.com/embed/".concat(videoId, "?enablejsapi=1"),
        frameBorder: "0",
        id: "video".concat(videoId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }));
    }
  };

  return __jsx(_template_global2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: post.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), " ", title), __jsx("div", {
    className: "jsx-1043522951" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, getImg(img), getVideo(videoId)), __jsx("div", {
    className: "jsx-1043522951" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, getText(text)), __jsx("div", {
    className: "jsx-1043522951" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-1043522951" + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Posted by:"), " ", getPicture(postedBy.id), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, postedBy.name), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "- ", postedBy.date), " "), __jsx("div", {
    className: "jsx-1043522951" + " " + "expert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Expert reviews by:"), " ", getPicture(expert.id), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, expert.name)), __jsx("div", {
    className: "jsx-1043522951" + " " + "citizen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Citizen reviews by:"), " ", getPicture(citizen.id), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, citizen.name)), __jsx("div", {
    className: "jsx-1043522951" + " " + "break",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1043522951" + " " + "contributors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Contributors:"), contributors.map(function (contributor, index) {
    return __jsx("div", {
      className: "jsx-1043522951" + " " + "contributor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, getPicture(contributor.id), " ", __jsx("div", {
      className: "jsx-1043522951" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, contributor.name));
  }))), __jsx("div", {
    className: "jsx-1043522951" + " " + "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    disabled: true,
    placeholder: "Sign in to comment",
    className: "jsx-1043522951" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), comments.map(function (comment, index) {
    return __jsx("div", {
      className: "jsx-1043522951" + " " + "comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1043522951" + " " + "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, getPicture(comment.user.id), " ", __jsx("div", {
      className: "jsx-1043522951" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, comment.text), " ", __jsx("div", {
      className: "jsx-1043522951" + " " + "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "- ", comment.date)), __jsx("div", {
      className: "jsx-1043522951" + " " + "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, getText(comment.text), getImg(comment.img), getVideo(comment.videoId, 600)), __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_3__["default"], {
      social: {
        nbComments: 0,
        nbVotes: {
          up: 0,
          down: 0
        },
        nbShared: 0,
        levels: []
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1043522951",
    __self: this
  }, ".input.jsx-1043522951{border:1px solid #D3DDDD;border-radius:5px 0px 0px 0px;width:660px;height:40px;}.input.jsx-1043522951:disabled{background-color:#fff;}.jsx-1043522951::-webkit-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1043522951::-moz-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1043522951:-ms-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1043522951::placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.comments.jsx-1043522951{margin-top:20px;padding-left:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.comment.jsx-1043522951{padding-top:35px;border-bottom:1px solid #CCCCCC;min-height:100px;padding-bottom:20px;margin-right:70px;font:14px/19px Arial;}.data.jsx-1043522951{margin-top:5px;margin-bottom:10px;}.center.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:45px;height:300px;}.img.jsx-1043522951{margin-top:20px;margin-right:13px;width:400px;}.content.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:280px;padding-left:90px;}.body.jsx-1043522951{margin-top:20px;font:20px/24px Arial;}.actions.jsx-1043522951{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-1043522951{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.type.jsx-1043522951{width:43px;height:32px;margin-right:15px;background-color:#255755;border:1px solid #FFFFFF;border-radius:2px;}.main.jsx-1043522951{padding-left:var(--main-margin);padding-right:var(--main-margin);background-color:#F4F6F6;}.header.jsx-1043522951{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:110px;border-bottom:2px solid #D3DDDD;padding-left:45px;font:Bold 24px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.info.jsx-1043522951{padding-left:45px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:60px;border-bottom:2px solid #D3DDDD;padding-bottom:10px;font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.posted.jsx-1043522951,.expert.jsx-1043522951,.citizen.jsx-1043522951,.contributors.jsx-1043522951,.user.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:300px;font:Bold 12px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.contributor.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.name.jsx-1043522951{font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.date.jsx-1043522951{font:10px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.desc.jsx-1043522951,.name.jsx-1043522951,.date.jsx-1043522951{margin-right:10px;}.break.jsx-1043522951{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;height:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUtpQixBQUk4QyxBQU9ILEFBTVIsQUFTRSxBQU9DLEFBU0YsQUFLRixBQVFHLEFBTUgsQUFRRyxBQUtKLEFBT08sQUFPSixBQVFxQixBQU1iLEFBaUJELEFBZ0JMLEFBY0EsQUFPYSxBQU1MLEFBTUgsQUFJRixXQW5GSixDQWRHLEVBekRFLENBeUJGLENBaEJBLEFBNkJELEFBY0csQ0FwQ1csQ0FzRlQsQUFpRHZCLEdBTnFCLENBdkp6QixDQThFMEIsRUFyRlEsQ0F3SlQsTUE1RGdCLEVBckR6QyxBQWFnQixDQXRDSyxBQVNKLEVBMkNqQixJQW9CaUMsS0FqQ2pDLEdBdkJxQixNQTdCTCxVQTRGaUIsQ0E5RFQsQUF3RFMsQ0FyRmpCLEVBc0tDLEtBN0hNLEFBY0csQUEwRUMsQUFjQSxJQXdCdkIsQ0F0S0osT0E2QnNCLElBOERsQixDQU5zQixFQVhULEFBcUJJLFdBakVJLENBc0NSLENBd0ZLLEdBdklJLEFBaUV0QixFQTJCaUIsQUFxQ0MsU0ExSUosQUFpSmQsS0E5SEosQUF3SEksU0ExSWtCLFNBNEJZLFNBM0JsQyxBQXlDa0MsZUFvQlgsQUFxQkksQUFpQ0EsQUFjQSxZQTFFSixNQTZDSSxFQTVGM0IsaURBc0RrQyxBQXVCYixBQStCYyxBQWNBLFlBMUVuQyxDQThCd0MsS0FlakIsSUF6RUQsU0FjTCxTQWJBLElBY0ssQ0E2Q0ksUUF6RDFCLFNBYUEsQ0E4Q2tDLFlBYWQsWUFDb0IsRUFiZixnQkE0QkwsQUFZaEIsVUFwRUosRUF5RGtDLEVBZk4sb0JBRU0sSUFjVCxzQkFiQSxTQWhCSCxjQUVsQix3Q0E0QmtCLGNBRWxCLFFBZmtCLGNBQ2xCIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUcGxHbG9iYWwyIGZyb20gJy4vdGVtcGxhdGUtZ2xvYmFsMidcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9ibG9ja3Mvc29jaWFsJ1xyXG5cclxuY29uc3QgVHBsUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3Bvc3QgPSB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdHlwZTogMSxcclxuICAgICAgICB0aXRsZTogXCJDb21tb24gVHlwZXMgb2YgQnJlYXN0IENhbmNlclwiLFxyXG4gICAgICAgIHRleHQ6IFwiSW50cm9kdWN0aW9uIGZyb20gTWF5byBDbGluaWMgdG8gdGhlIGNvbW1vbiB0eXBlcyBvZiBicmVhc3QgY2FuY2VyIGluY2x1ZGluZyBkdWN0YWwgYW5kIGxvYnVsYXIgYnJlYXN0IGNhbmNlciwgYW5kIGludmFzaXZlIGFuZCBub24taW52YXNpdmUgYnJlYXN0IGNhbmNlci5cIixcclxuICAgICAgICBkYXRlOiBcIjMwIGRheXMgYWdvXCIsXHJcbiAgICAgICAgaW1hZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICB2aWRlb0lkOiAnRlRINTZpZkh0MjgnLFxyXG4gICAgICAgIHBvZGNhc3Q6IHVuZGVmaW5lZCxcclxuICAgICAgICBwb3N0ZWRCeTogdXNlcnMudTE0LFxyXG4gICAgICAgIGV4cGVydDogdXNlcnMudTExLFxyXG4gICAgICAgIGNpdGl6ZW46IHVzZXJzLnUxNyxcclxuICAgICAgICBjb250cmlidXRvcnM6IFt1c2Vycy51MjEsdXNlcnMudTI4XSxcclxuICAgICAgICBsZXZlbHM6IFt7dHlwZToyfV0sXHJcbiAgICAgICAgY29tbWVudHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcnMudTgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlRoYXTigJlzIGdvb2QgdG8ga25vd1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCIyMCBkYXlzIGFnb1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2Vycy51MzIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIldlbGwsIEkgZG8gbm90IHRlaW50IG15IGhhaXJcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6IFwiMjAgZGF5cyBhZ29cIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9fSA9IHByb3BzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qge3RpdGxlLCB0ZXh0LCBpbWcsIHZpZGVvSWQsIGluZm99ID0gcG9zdDtcclxuICAgIGNvbnN0IHt0eXBlLCBjYXRlZ29yaWVzLCBzZWxlY3RlZCwgY2xhc3NOYW1lfSA9IHBvc3Q7XHJcbiAgICBjb25zdCB7bmJjb21tZW50cywgbmJ2b3RlcywgbmJzaGFyZWQsIGxldmVsc30gPSBwb3N0O1xyXG4gICAgY29uc3Qge3Bvc3RlZEJ5LCBleHBlcnQsIGNpdGl6ZW4sIGNvbnRyaWJ1dG9ycywgY29tbWVudHN9ID0gcG9zdDtcclxuXHJcbiAgICBjb25zdCBnZXRUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdCgnIyMnKS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtrZXl9PntpdGVtfTxici8+PC9zcGFuPlxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VHlwZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0SW1nID0gKGltZykgPT4ge1xyXG4gICAgICAgIGlmIChpbWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtgL21lZGlhL2ltYWdlcy8ke2ltZ31gfSB3aWR0aD17YDQwMHB4YH0gLz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UGljdHVyZSA9ICh1c2VySWQpID0+ICg8aW1nIHNyYz17YC9tZWRpYS91c2Vycy8ke3VzZXJJZH0ucG5nYH0gLz4pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZ2V0VmlkZW8gPSAodmlkZW9JZCwgc2l6ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2aWRlb0lkKSB7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgIHJldHVybiAoICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgdHlwZT1cInRleHQvaHRtbFwiIHdpZHRoPXtgJHtzaXplIHx8ICc0MDAnfWB9IGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/ZW5hYmxlanNhcGk9MWB9XHJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgIGlkPXtgdmlkZW8ke3ZpZGVvSWR9YH0+PC9pZnJhbWU+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuXHJcbiAgICAgICAgPFRwbEdsb2JhbDIgdGl0bGU9e3Bvc3QudGl0bGV9PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVcIj48L2Rpdj4ge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldEltZyhpbWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmlkZW8odmlkZW9JZCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUZXh0KHRleHQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlZFwiPjxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlBvc3RlZCBieTo8L2Rpdj4ge2dldFBpY3R1cmUocG9zdGVkQnkuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57cG9zdGVkQnkubmFtZX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+LSB7cG9zdGVkQnkuZGF0ZX08L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcnRcIj48ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5FeHBlcnQgcmV2aWV3cyBieTo8L2Rpdj4ge2dldFBpY3R1cmUoZXhwZXJ0LmlkKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2V4cGVydC5uYW1lfTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2l0aXplblwiPjxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPkNpdGl6ZW4gcmV2aWV3cyBieTo8L2Rpdj4ge2dldFBpY3R1cmUoY2l0aXplbi5pZCl9IDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntjaXRpemVuLm5hbWV9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVha1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPkNvbnRyaWJ1dG9yczo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3JzLm1hcCgoY29udHJpYnV0b3IsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRyaWJ1dG9yXCI+e2dldFBpY3R1cmUoY29udHJpYnV0b3IuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57Y29udHJpYnV0b3IubmFtZX08L2Rpdj48L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0XCIgZGlzYWJsZWQgcGxhY2Vob2xkZXI9XCJTaWduIGluIHRvIGNvbW1lbnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+e2dldFBpY3R1cmUoY29tbWVudC51c2VyLmlkKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbW1lbnQudGV4dH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+LSB7Y29tbWVudC5kYXRlfTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFRleHQoY29tbWVudC50ZXh0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0SW1nKGNvbW1lbnQuaW1nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmlkZW8oY29tbWVudC52aWRlb0lkLCA2MDApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWw9eyB7XHJcbiAgICAgICAgbmJDb21tZW50czogMCxcclxuICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgIHVwOiAwLFxyXG4gICAgICAgICAgICBkb3duOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYlNoYXJlZDogMCxcclxuICAgICAgICBsZXZlbHM6IFtdLFxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2AgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmlucHV0OmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNEM0REREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTJweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qaGVpZ2h0OiA0MDBweDsqL1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDIwcHgvMjRweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLnR5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTU3NTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tbWFpbi1tYXJnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1tYWluLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2RjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDsgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IEJvbGQgMjRweC8yOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAxNHB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0ZWQsIC5leHBlcnQsIC5jaXRpemVuLCAuY29udHJpYnV0b3JzLCAudXNlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IEJvbGQgMTJweC8yOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRyaWJ1dG9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IEJvbGQgMTRweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDEwcHgvMTlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2MsIC5uYW1lLCAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5icmVhayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8L1RwbEdsb2JhbDI+XHJcblxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcGxQb3N0OyJdfQ== */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-post.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplPost);

/***/ })

})
//# sourceMappingURL=[postid].js.470cf3570b6ffa01bb0d.hot-update.js.map