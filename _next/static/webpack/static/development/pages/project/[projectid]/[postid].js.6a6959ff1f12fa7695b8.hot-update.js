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
/* harmony import */ var _icons_misc_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/misc/close */ "./components/icons/misc/close.js");
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
      image = post.image,
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
          lineNumber: 49
        },
        __self: this
      }, item, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    });
  };

  var getTypes = function getTypes() {};

  var getImg = function getImg(image) {
    if (image) {
      return __jsx("img", {
        src: "/media/images/".concat(image),
        "max-width": "400px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
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
        lineNumber: 62
      },
      __self: this
    });
  };

  var getVideo = function getVideo(videoId, size) {
    if (videoId) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
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
          lineNumber: 71
        },
        __self: this
      }));
    }
  };

  return __jsx(_template_global2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: post.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "containerHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), " ", title), __jsx("div", {
    className: "jsx-1829903306" + " " + "close clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_icons_misc_close__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-1829903306" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, getImg(image), getVideo(videoId), post.type === 4 && __jsx("div", {
    className: "jsx-1829903306" + " " + "podcast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("img", {
    src: "/media/images/podcast2.png",
    className: "jsx-1829903306",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1829903306" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, getText(text)), __jsx("div", {
    className: "jsx-1829903306" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 121
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-1829903306" + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Posted by:"), " ", getPicture(postedBy.id), " ", __jsx("div", {
    className: "jsx-1829903306" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, postedBy.name), " ", __jsx("div", {
    className: "jsx-1829903306" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "- ", post.date), " "), __jsx("div", {
    className: "jsx-1829903306" + " " + "expert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Expert reviews by:"), " ", getPicture(expert.id), " ", __jsx("div", {
    className: "jsx-1829903306" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, expert.name)), citizen && __jsx("div", {
    className: "jsx-1829903306" + " " + "citizen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Citizen reviews by:"), " ", getPicture(citizen.id), " ", __jsx("div", {
    className: "jsx-1829903306" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, citizen.name)), __jsx("div", {
    className: "jsx-1829903306" + " " + "break",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1829903306" + " " + "contributors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829903306" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Contributors:"), contributors.map(function (contributor, index) {
    return __jsx("div", {
      className: "jsx-1829903306" + " " + "contributor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, getPicture(contributor.id), " ", __jsx("div", {
      className: "jsx-1829903306" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, contributor.name));
  }))), __jsx("div", {
    className: "jsx-1829903306" + " " + "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    disabled: true,
    placeholder: "Sign in to comment",
    className: "jsx-1829903306" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), comments.map(function (comment, index) {
    return __jsx("div", {
      className: "jsx-1829903306" + " " + "comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1829903306" + " " + "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, getPicture(comment.user.id), " ", __jsx("div", {
      className: "jsx-1829903306" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, comment.text), " ", __jsx("div", {
      className: "jsx-1829903306" + " " + "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "- ", comment.date)), __jsx("div", {
      className: "jsx-1829903306" + " " + "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
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
        lineNumber: 170
      },
      __self: this
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1829903306",
    __self: this
  }, ".icon.jsx-1829903306{width:40px;height:40px;background:#4E7876;border:1px solid #225755;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.input.jsx-1829903306{border:1px solid #D3DDDD;border-radius:5px 0px 0px 0px;width:660px;height:40px;margin-bottom:20px;}.input.jsx-1829903306:disabled{background-color:#fff;}.jsx-1829903306::-webkit-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1829903306::-moz-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1829903306:-ms-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1829903306::placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.comments.jsx-1829903306{margin-top:20px;padding-left:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.comment.jsx-1829903306{padding-top:35px;border-bottom:1px solid #CCCCCC;min-height:100px;padding-bottom:20px;margin-right:70px;font:14px/19px Arial;}.data.jsx-1829903306{margin-top:5px;margin-bottom:10px;}.center.jsx-1829903306{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:45px;height:300px;}.img.jsx-1829903306{margin-top:20px;margin-right:13px;width:400px;}.content.jsx-1829903306{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:280px;padding-left:90px;}.body.jsx-1829903306{margin-top:20px;font:20px/24px Arial;}.actions.jsx-1829903306{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-1829903306{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.type.jsx-1829903306{width:43px;height:32px;margin-right:15px;background-color:#255755;border:1px solid #FFFFFF;border-radius:2px;}.main.jsx-1829903306{padding-left:var(--main-margin);padding-right:var(--main-margin);background-color:#F4F6F6;}.containerHeader.jsx-1829903306{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.jsx-1829903306{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:110px;border-bottom:2px solid #D3DDDD;padding-left:45px;font:Bold 24px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.info.jsx-1829903306{padding-left:45px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:60px;border-bottom:2px solid #D3DDDD;padding-bottom:10px;font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.posted.jsx-1829903306,.expert.jsx-1829903306,.citizen.jsx-1829903306,.contributors.jsx-1829903306,.user.jsx-1829903306{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:300px;font:Bold 12px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.contributor.jsx-1829903306{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.name.jsx-1829903306{font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.date.jsx-1829903306{font:10px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.desc.jsx-1829903306,.name.jsx-1829903306,.date.jsx-1829903306{margin-right:10px;}.break.jsx-1829903306{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;height:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkxpQixBQUdvQyxBQWNVLEFBUUgsQUFNUixBQVNFLEFBT0MsQUFTRixBQUtGLEFBUUcsQUFNSCxBQVFHLEFBS0osQUFPTyxBQU9KLEFBUXFCLEFBTWIsQUFRQSxBQWtCRCxBQWdCTCxBQWNBLEFBT2EsQUFNTCxBQU1ILEFBSUYsV0EvTEosQUFtR0EsQ0FkRyxFQXpERSxDQXlCRixDQWhCQSxBQTZCRCxBQWNHLENBcENXLENBK0ZULEFBaUR2QixHQU5xQixDQWhLekIsQ0FwQjJCLEFBa0dELEVBdEZRLENBa0tULE1BckVnQixFQXJEekMsQUFhZ0IsQ0F0Q0ssQUFTSixFQTJDakIsSUFvQmlDLENBbEdBLElBaUVqQyxHQXZCcUIsTUE5QkwsVUE2RmlCLENBOURULEFBd0RTLENBbEdQLEFBWVYsRUFnTEMsS0F0SU0sQUFjRyxBQW1GQyxBQWNBLElBd0J2QixDQWhMbUIsTUFYRixDQXlDQyxJQThEbEIsQ0FOc0IsRUFYVCxBQXFCSSxBQVFBLEtBdkdyQixNQThCeUIsQ0FzQ1IsQ0FpR0ssR0FoSkksQUFpRXRCLEVBb0NpQixBQXFDQyxTQW5KSixBQTBKZCxLQXZJSixBQWlJSSxTQW5Ka0IsU0E0QlksU0EzQmxDLEFBeUNrQyxPQWxFUixRQXNGSCxBQXFCSSxBQVFBLEFBa0NBLEFBY0EsWUFuRkosTUFzREksRUFyRzNCLGlEQXNEa0MsQUF1QjlCLEFBTWtDLEFBa0NILEFBY0EsWUFuRm5DLElBaEYrQixFQXNJUixJQWxGRCxTQWNMLFNBYkEsSUFjSyxTQVp0QixTQWFBLGFBb0VvQixZQUNvQixrQkFlcEIsQUFZaEIsVUFsS0EsQUFxRkosQUErQnFCLEVBbUNhLEVBZk4sU0FuQlksV0FxQk4sSUFjVCxpQkFqQ0MsS0FvQkQsYUFsQlMsMEJBQ1Qsd0JBK0JILGNBRWxCLFFBZmtCLGNBQ2xCLHlCQWxCa0IsY0FFbEIiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRlbXBsYXRlc1xcdGVtcGxhdGUtcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRwbEdsb2JhbDIgZnJvbSAnLi90ZW1wbGF0ZS1nbG9iYWwyJ1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uL2Jsb2Nrcy9zb2NpYWwnXHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vaWNvbnMvbWlzYy9jbG9zZSdcclxuXHJcbmNvbnN0IFRwbFBvc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtwb3N0ID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29tbW9uIFR5cGVzIG9mIEJyZWFzdCBDYW5jZXJcIixcclxuICAgICAgICB0ZXh0OiBcIkludHJvZHVjdGlvbiBmcm9tIE1heW8gQ2xpbmljIHRvIHRoZSBjb21tb24gdHlwZXMgb2YgYnJlYXN0IGNhbmNlciBpbmNsdWRpbmcgZHVjdGFsIGFuZCBsb2J1bGFyIGJyZWFzdCBjYW5jZXIsIGFuZCBpbnZhc2l2ZSBhbmQgbm9uLWludmFzaXZlIGJyZWFzdCBjYW5jZXIuXCIsXHJcbiAgICAgICAgZGF0ZTogXCIzMCBkYXlzIGFnb1wiLFxyXG4gICAgICAgIGltYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdmlkZW9JZDogJ0ZUSDU2aWZIdDI4JyxcclxuICAgICAgICBwb2RjYXN0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgcG9zdGVkQnk6IHVzZXJzLnUxNCxcclxuICAgICAgICBleHBlcnQ6IHVzZXJzLnUxMSxcclxuICAgICAgICBjaXRpemVuOiB1c2Vycy51MTcsXHJcbiAgICAgICAgY29udHJpYnV0b3JzOiBbdXNlcnMudTIxLHVzZXJzLnUyOF0sXHJcbiAgICAgICAgbGV2ZWxzOiBbe3R5cGU6Mn1dLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJzLnU4LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJUaGF04oCZcyBnb29kIHRvIGtub3dcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6IFwiMjAgZGF5cyBhZ29cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcnMudTMyLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZWxsLCBJIGRvIG5vdCB0ZWludCBteSBoYWlyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBcIjIwIGRheXMgYWdvXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgfX0gPSBwcm9wcztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgaW1hZ2UsIHZpZGVvSWQsIGluZm99ID0gcG9zdDtcclxuICAgIGNvbnN0IHt0eXBlLCBjYXRlZ29yaWVzLCBzZWxlY3RlZCwgY2xhc3NOYW1lfSA9IHBvc3Q7XHJcbiAgICBjb25zdCB7bmJjb21tZW50cywgbmJ2b3RlcywgbmJzaGFyZWQsIGxldmVsc30gPSBwb3N0O1xyXG4gICAgY29uc3Qge3Bvc3RlZEJ5LCBleHBlcnQsIGNpdGl6ZW4sIGNvbnRyaWJ1dG9ycywgY29tbWVudHN9ID0gcG9zdDtcclxuXHJcbiAgICBjb25zdCBnZXRUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdCgnIyMnKS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtrZXl9PntpdGVtfTxici8+PC9zcGFuPlxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VHlwZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0SW1nID0gKGltYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvJHtpbWFnZX1gfSBtYXgtd2lkdGg9e2A0MDBweGB9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFBpY3R1cmUgPSAodXNlcklkKSA9PiAoPGltZyBzcmM9e2AvbWVkaWEvdXNlcnMvJHt1c2VySWR9LnBuZ2B9IC8+KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGdldFZpZGVvID0gKHZpZGVvSWQsIHNpemUpID0+IHtcclxuICAgICAgICBpZiAodmlkZW9JZCkge1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gKCAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aWZyYW1lIHR5cGU9XCJ0ZXh0L2h0bWxcIiB3aWR0aD17YCR7c2l6ZSB8fCAnNDAwJ31gfSBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2VuYWJsZWpzYXBpPTFgfVxyXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBpZD17YHZpZGVvJHt2aWRlb0lkfWB9PjwvaWZyYW1lPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcblxyXG4gICAgICAgIDxUcGxHbG9iYWwyIHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlXCI+PC9kaXY+IHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlIGNsaWNrYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjxDbG9zZUljb24gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJbWcoaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmlkZW8odmlkZW9JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnR5cGUgPT09IDQgJiZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RcIj48aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvcG9kY2FzdDIucG5nYH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldFRleHQodGV4dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWwgc29jaWFsPXsge1xyXG4gICAgICAgIG5iQ29tbWVudHM6IDAsXHJcbiAgICAgICAgbmJWb3Rlczoge1xyXG4gICAgICAgICAgICB1cDogMCxcclxuICAgICAgICAgICAgZG93bjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmJTaGFyZWQ6IDAsXHJcbiAgICAgICAgbGV2ZWxzOiBwb3N0LmxldmVscyxcclxuICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlZFwiPjxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlBvc3RlZCBieTo8L2Rpdj4ge2dldFBpY3R1cmUocG9zdGVkQnkuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57cG9zdGVkQnkubmFtZX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+LSB7cG9zdC5kYXRlfTwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVydFwiPjxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPkV4cGVydCByZXZpZXdzIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShleHBlcnQuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZXhwZXJ0Lm5hbWV9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NpdGl6ZW4gJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXRpemVuXCI+PGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+Q2l0aXplbiByZXZpZXdzIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShjaXRpemVuLmlkKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NpdGl6ZW4ubmFtZX08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVha1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPkNvbnRyaWJ1dG9yczo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3JzLm1hcCgoY29udHJpYnV0b3IsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRyaWJ1dG9yXCI+e2dldFBpY3R1cmUoY29udHJpYnV0b3IuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57Y29udHJpYnV0b3IubmFtZX08L2Rpdj48L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0XCIgZGlzYWJsZWQgcGxhY2Vob2xkZXI9XCJTaWduIGluIHRvIGNvbW1lbnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+e2dldFBpY3R1cmUoY29tbWVudC51c2VyLmlkKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbW1lbnQudGV4dH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+LSB7Y29tbWVudC5kYXRlfTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFRleHQoY29tbWVudC50ZXh0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0SW1nKGNvbW1lbnQuaW1nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmlkZW8oY29tbWVudC52aWRlb0lkLCA2MDApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWw9eyB7XHJcbiAgICAgICAgbmJDb21tZW50czogMCxcclxuICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgIHVwOiAwLFxyXG4gICAgICAgICAgICBkb3duOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYlNoYXJlZDogMCxcclxuICAgICAgICBsZXZlbHM6IFtdLFxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2AgIFxyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRFNzg3NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyNTc1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQ6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypoZWlnaHQ6IDQwMHB4OyovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHgvMTlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMjBweC8yNHB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NTc1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYWluLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1haW4tbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVySGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAyNHB4LzI5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBCb2xkIDE0cHgvMTdweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RlZCwgLmV4cGVydCwgLmNpdGl6ZW4sIC5jb250cmlidXRvcnMsIC51c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAxMnB4LzI5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udHJpYnV0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAxNHB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTBweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGVzYywgLm5hbWUsIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJyZWFrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvVHBsR2xvYmFsMj5cclxuXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRwbFBvc3Q7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-post.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplPost);

/***/ })

})
//# sourceMappingURL=[postid].js.6a6959ff1f12fa7695b8.hot-update.js.map