webpackHotUpdate("static\\development\\pages\\project\\[projectid]\\[postid].js",{

/***/ "./components/icons/misc/close.js":
/*!****************************************!*\
  !*** ./components/icons/misc/close.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_close_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/close.css */ "./components/icons/misc/css/close.css");
/* harmony import */ var _css_close_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_close_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\components\\icons\\misc\\close.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CertifiedIcon = function CertifiedIcon(props) {
  var disabled = props.disabled;
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24.042",
    height: "24.042",
    viewBox: "0 0 24.042 24.042",
    className: "".concat(_css_close_css__WEBPACK_IMPORTED_MODULE_1___default.a.close, " ").concat(disabled ? _css_close_css__WEBPACK_IMPORTED_MODULE_1___default.a.disabled : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("g", {
    transform: "translate(12.205 -10.115) rotate(45)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("line", {
    className: "".concat(_css_close_css__WEBPACK_IMPORTED_MODULE_1___default.a.a),
    y2: "32",
    transform: "translate(15.522 -0.217)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("line", {
    className: "".concat(_css_close_css__WEBPACK_IMPORTED_MODULE_1___default.a.a),
    x1: "32",
    transform: "translate(-0.478 15.783)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CertifiedIcon);

/***/ }),

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
    className: "jsx-2452344898" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "containerHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), " ", title), __jsx("div", {
    className: "jsx-2452344898" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_icons_misc_close__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2452344898" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, getImg(image), getVideo(videoId), post.type === 4 && __jsx("div", {
    className: "jsx-2452344898" + " " + "podcast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("img", {
    src: "/media/images/podcast2.png",
    className: "jsx-2452344898",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2452344898" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, getText(text)), __jsx("div", {
    className: "jsx-2452344898" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
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
      lineNumber: 120
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2452344898" + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Posted by:"), " ", getPicture(postedBy.id), " ", __jsx("div", {
    className: "jsx-2452344898" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, postedBy.name), " ", __jsx("div", {
    className: "jsx-2452344898" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "- ", post.date), " "), __jsx("div", {
    className: "jsx-2452344898" + " " + "expert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Expert reviews by:"), " ", getPicture(expert.id), " ", __jsx("div", {
    className: "jsx-2452344898" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, expert.name)), citizen && __jsx("div", {
    className: "jsx-2452344898" + " " + "citizen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Citizen reviews by:"), " ", getPicture(citizen.id), " ", __jsx("div", {
    className: "jsx-2452344898" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, citizen.name)), __jsx("div", {
    className: "jsx-2452344898" + " " + "break",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2452344898" + " " + "contributors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2452344898" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Contributors:"), contributors.map(function (contributor, index) {
    return __jsx("div", {
      className: "jsx-2452344898" + " " + "contributor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, getPicture(contributor.id), " ", __jsx("div", {
      className: "jsx-2452344898" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, contributor.name));
  }))), __jsx("div", {
    className: "jsx-2452344898" + " " + "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    disabled: true,
    placeholder: "Sign in to comment",
    className: "jsx-2452344898" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), comments.map(function (comment, index) {
    return __jsx("div", {
      className: "jsx-2452344898" + " " + "comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2452344898" + " " + "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, getPicture(comment.user.id), " ", __jsx("div", {
      className: "jsx-2452344898" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, comment.text), " ", __jsx("div", {
      className: "jsx-2452344898" + " " + "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "- ", comment.date)), __jsx("div", {
      className: "jsx-2452344898" + " " + "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
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
        lineNumber: 169
      },
      __self: this
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2452344898",
    __self: this
  }, ".input.jsx-2452344898{border:1px solid #D3DDDD;border-radius:5px 0px 0px 0px;width:660px;height:40px;margin-bottom:20px;}.input.jsx-2452344898:disabled{background-color:#fff;}.jsx-2452344898::-webkit-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-2452344898::-moz-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-2452344898:-ms-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-2452344898::placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.comments.jsx-2452344898{margin-top:20px;padding-left:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.comment.jsx-2452344898{padding-top:35px;border-bottom:1px solid #CCCCCC;min-height:100px;padding-bottom:20px;margin-right:70px;font:14px/19px Arial;}.data.jsx-2452344898{margin-top:5px;margin-bottom:10px;}.center.jsx-2452344898{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:45px;height:300px;}.img.jsx-2452344898{margin-top:20px;margin-right:13px;width:400px;}.content.jsx-2452344898{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:280px;padding-left:90px;}.body.jsx-2452344898{margin-top:20px;font:20px/24px Arial;}.actions.jsx-2452344898{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-2452344898{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.type.jsx-2452344898{width:43px;height:32px;margin-right:15px;background-color:#255755;border:1px solid #FFFFFF;border-radius:2px;}.main.jsx-2452344898{padding-left:var(--main-margin);padding-right:var(--main-margin);background-color:#F4F6F6;}.header.jsx-2452344898{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:110px;border-bottom:2px solid #D3DDDD;padding-left:45px;font:Bold 24px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.info.jsx-2452344898{padding-left:45px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:60px;border-bottom:2px solid #D3DDDD;padding-bottom:10px;font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.posted.jsx-2452344898,.expert.jsx-2452344898,.citizen.jsx-2452344898,.contributors.jsx-2452344898,.user.jsx-2452344898{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:300px;font:Bold 12px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.contributor.jsx-2452344898{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.name.jsx-2452344898{font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.date.jsx-2452344898{font:10px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.desc.jsx-2452344898,.name.jsx-2452344898,.date.jsx-2452344898{margin-right:10px;}.break.jsx-2452344898{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;height:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNExpQixBQUk4QyxBQVFILEFBTVIsQUFTRSxBQU9DLEFBU0YsQUFLRixBQVFHLEFBTUgsQUFRRyxBQUtKLEFBT08sQUFPSixBQVFxQixBQU1iLEFBaUJELEFBZ0JMLEFBY0EsQUFPYSxBQU1MLEFBTUgsQUFJRixXQW5GSixDQWRHLEVBekRFLENBeUJGLENBaEJBLEFBNkJELEFBY0csQ0FwQ1csQ0FzRlQsQUFpRHZCLEdBTnFCLENBdkp6QixDQThFMEIsRUF0RlEsQ0F5SlQsTUE1RGdCLEVBckR6QyxBQWFnQixDQXRDSyxBQVNKLEVBMkNqQixJQW9CaUMsS0FqQ2pDLEdBdkJxQixNQTlCTCxVQTZGaUIsQ0E5RFQsQUF3RFMsQ0F0RmpCLEVBdUtDLEtBN0hNLEFBY0csQUEwRUMsQUFjQSxJQXdCdkIsQ0F2S21CLE9BOEJELElBOERsQixDQU5zQixFQVhULEFBcUJJLEtBL0ZyQixNQThCeUIsQ0FzQ1IsQ0F3RkssR0F2SUksQUFpRXRCLEVBMkJpQixBQXFDQyxTQTFJSixBQWlKZCxLQTlISixBQXdISSxTQTFJa0IsU0E0QlksU0EzQmxDLEFBeUNrQyxlQW9CWCxBQXFCSSxBQWlDQSxBQWNBLFlBMUVKLE1BNkNJLEVBNUYzQixpREFzRGtDLEFBdUJiLEFBK0JjLEFBY0EsWUExRW5DLENBOEJ3QyxLQWVqQixJQXpFRCxTQWNMLFNBYkEsSUFjSyxDQTZDSSxRQXpEMUIsU0FhQSxDQThDa0MsWUFhZCxZQUNvQixFQWJmLGdCQTRCTCxBQVloQixVQXBFSixFQXlEa0MsRUFmTixvQkFFTSxJQWNULHNCQWJBLFNBaEJILGNBRWxCLHdDQTRCa0IsY0FFbEIsUUFma0IsY0FDbEIiLCJmaWxlIjoiRDpcXHNjaWtvb3BcXGdpdGh1YlxcZGVtb3NjaWtvb3BcXGNvbXBvbmVudHNcXHRlbXBsYXRlc1xcdGVtcGxhdGUtcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRwbEdsb2JhbDIgZnJvbSAnLi90ZW1wbGF0ZS1nbG9iYWwyJ1xyXG5pbXBvcnQgU29jaWFsIGZyb20gJy4uL2Jsb2Nrcy9zb2NpYWwnXHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vaWNvbnMvbWlzYy9jbG9zZSdcclxuXHJcbmNvbnN0IFRwbFBvc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtwb3N0ID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29tbW9uIFR5cGVzIG9mIEJyZWFzdCBDYW5jZXJcIixcclxuICAgICAgICB0ZXh0OiBcIkludHJvZHVjdGlvbiBmcm9tIE1heW8gQ2xpbmljIHRvIHRoZSBjb21tb24gdHlwZXMgb2YgYnJlYXN0IGNhbmNlciBpbmNsdWRpbmcgZHVjdGFsIGFuZCBsb2J1bGFyIGJyZWFzdCBjYW5jZXIsIGFuZCBpbnZhc2l2ZSBhbmQgbm9uLWludmFzaXZlIGJyZWFzdCBjYW5jZXIuXCIsXHJcbiAgICAgICAgZGF0ZTogXCIzMCBkYXlzIGFnb1wiLFxyXG4gICAgICAgIGltYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdmlkZW9JZDogJ0ZUSDU2aWZIdDI4JyxcclxuICAgICAgICBwb2RjYXN0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgcG9zdGVkQnk6IHVzZXJzLnUxNCxcclxuICAgICAgICBleHBlcnQ6IHVzZXJzLnUxMSxcclxuICAgICAgICBjaXRpemVuOiB1c2Vycy51MTcsXHJcbiAgICAgICAgY29udHJpYnV0b3JzOiBbdXNlcnMudTIxLHVzZXJzLnUyOF0sXHJcbiAgICAgICAgbGV2ZWxzOiBbe3R5cGU6Mn1dLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJzLnU4LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJUaGF04oCZcyBnb29kIHRvIGtub3dcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6IFwiMjAgZGF5cyBhZ29cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcnMudTMyLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZWxsLCBJIGRvIG5vdCB0ZWludCBteSBoYWlyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBcIjIwIGRheXMgYWdvXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgfX0gPSBwcm9wcztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgaW1hZ2UsIHZpZGVvSWQsIGluZm99ID0gcG9zdDtcclxuICAgIGNvbnN0IHt0eXBlLCBjYXRlZ29yaWVzLCBzZWxlY3RlZCwgY2xhc3NOYW1lfSA9IHBvc3Q7XHJcbiAgICBjb25zdCB7bmJjb21tZW50cywgbmJ2b3RlcywgbmJzaGFyZWQsIGxldmVsc30gPSBwb3N0O1xyXG4gICAgY29uc3Qge3Bvc3RlZEJ5LCBleHBlcnQsIGNpdGl6ZW4sIGNvbnRyaWJ1dG9ycywgY29tbWVudHN9ID0gcG9zdDtcclxuXHJcbiAgICBjb25zdCBnZXRUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdCgnIyMnKS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtrZXl9PntpdGVtfTxici8+PC9zcGFuPlxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VHlwZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0SW1nID0gKGltYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvJHtpbWFnZX1gfSBtYXgtd2lkdGg9e2A0MDBweGB9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFBpY3R1cmUgPSAodXNlcklkKSA9PiAoPGltZyBzcmM9e2AvbWVkaWEvdXNlcnMvJHt1c2VySWR9LnBuZ2B9IC8+KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGdldFZpZGVvID0gKHZpZGVvSWQsIHNpemUpID0+IHtcclxuICAgICAgICBpZiAodmlkZW9JZCkge1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gKCAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aWZyYW1lIHR5cGU9XCJ0ZXh0L2h0bWxcIiB3aWR0aD17YCR7c2l6ZSB8fCAnNDAwJ31gfSBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2VuYWJsZWpzYXBpPTFgfVxyXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBpZD17YHZpZGVvJHt2aWRlb0lkfWB9PjwvaWZyYW1lPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcblxyXG4gICAgICAgIDxUcGxHbG9iYWwyIHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlXCI+PC9kaXY+IHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldEltZyhpbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRWaWRlbyh2aWRlb0lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudHlwZSA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9kY2FzdFwiPjxpbWcgc3JjPXtgL21lZGlhL2ltYWdlcy9wb2RjYXN0Mi5wbmdgfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGV4dCh0ZXh0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWw9eyB7XHJcbiAgICAgICAgbmJDb21tZW50czogMCxcclxuICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgIHVwOiAwLFxyXG4gICAgICAgICAgICBkb3duOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYlNoYXJlZDogMCxcclxuICAgICAgICBsZXZlbHM6IHBvc3QubGV2ZWxzLFxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkXCI+PGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+UG9zdGVkIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShwb3N0ZWRCeS5pZCl9IDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntwb3N0ZWRCeS5uYW1lfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj4tIHtwb3N0LmRhdGV9PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJ0XCI+PGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+RXhwZXJ0IHJldmlld3MgYnk6PC9kaXY+IHtnZXRQaWN0dXJlKGV4cGVydC5pZCl9IDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntleHBlcnQubmFtZX08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2l0aXplbiAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdGl6ZW5cIj48ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5DaXRpemVuIHJldmlld3MgYnk6PC9kaXY+IHtnZXRQaWN0dXJlKGNpdGl6ZW4uaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57Y2l0aXplbi5uYW1lfTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cmlidXRvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+Q29udHJpYnV0b3JzOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcnMubWFwKChjb250cmlidXRvciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0b3JcIj57Z2V0UGljdHVyZShjb250cmlidXRvci5pZCl9IDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntjb250cmlidXRvci5uYW1lfTwvZGl2PjwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaW5wdXRcIiBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIlNpZ24gaW4gdG8gY29tbWVudFwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj57Z2V0UGljdHVyZShjb21tZW50LnVzZXIuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57Y29tbWVudC50ZXh0fTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj4tIHtjb21tZW50LmRhdGV9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGV4dChjb21tZW50LnRleHQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJbWcoY29tbWVudC5pbWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRWaWRlbyhjb21tZW50LnZpZGVvSWQsIDYwMCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbD17IHtcclxuICAgICAgICBuYkNvbW1lbnRzOiAwLFxyXG4gICAgICAgIG5iVm90ZXM6IHtcclxuICAgICAgICAgICAgdXA6IDAsXHJcbiAgICAgICAgICAgIGRvd246IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5iU2hhcmVkOiAwLFxyXG4gICAgICAgIGxldmVsczogW10sXHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YCAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dDpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRDNEREREO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAvKmhlaWdodDogNDAwcHg7Ki9cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTRweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAyMHB4LzI0cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC50eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU1NzU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1haW4tbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tbWFpbi1tYXJnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEM0REREQ7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBCb2xkIDI0cHgvMjlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IEJvbGQgMTRweC8xN3B4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucG9zdGVkLCAuZXhwZXJ0LCAuY2l0aXplbiwgLmNvbnRyaWJ1dG9ycywgLnVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBCb2xkIDEycHgvMjlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250cmlidXRvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBCb2xkIDE0cHgvMTdweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiAxMHB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjLCAubmFtZSwgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnJlYWsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9UcGxHbG9iYWwyPlxyXG5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHBsUG9zdDsiXX0= */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-post.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplPost);

/***/ })

})
//# sourceMappingURL=[postid].js.9a1cd231e326cbd29582.hot-update.js.map