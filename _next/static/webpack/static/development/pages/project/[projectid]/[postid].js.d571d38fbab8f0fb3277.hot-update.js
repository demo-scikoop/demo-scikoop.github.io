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
          lineNumber: 47
        },
        __self: this
      }, item, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
          lineNumber: 56
        },
        __self: this
      });
    }
  };

  var getPicture = function getPicture(img) {
    return __jsx("img", {
      src: "/media/images/".concat(img),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  };

  var getVideo = function getVideo(videoId, size) {
    if (videoId) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 69
        },
        __self: this
      }));
    }
  };

  return __jsx(_template_global2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: post.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), " ", title), __jsx("div", {
    className: "jsx-1043522951" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, getImg(img), getVideo(videoId)), __jsx("div", {
    className: "jsx-1043522951" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, getText(text)), __jsx("div", {
    className: "jsx-1043522951" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "nbcomments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "comments"), __jsx("div", {
    className: "jsx-1043522951" + " " + "nbvotes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "votes"), __jsx("div", {
    className: "jsx-1043522951" + " " + "nbshared",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "shared")), __jsx("div", {
    className: "jsx-1043522951" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "levels")))), __jsx("div", {
    className: "jsx-1043522951" + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Posted by:"), " ", getPicture(postedBy.photo), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, postedBy.name), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "- ", postedBy.date), " "), __jsx("div", {
    className: "jsx-1043522951" + " " + "expert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Expert reviews by:"), " ", getPicture(expert.photo), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, expert.name)), __jsx("div", {
    className: "jsx-1043522951" + " " + "citizen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Citizen reviews by:"), " ", getPicture(citizen.photo), " ", __jsx("div", {
    className: "jsx-1043522951" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, citizen.name)), __jsx("div", {
    className: "jsx-1043522951" + " " + "break",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1043522951" + " " + "contributors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1043522951" + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Contributors:"), contributors.map(function (contributor, index) {
    return __jsx("div", {
      className: "jsx-1043522951" + " " + "contributor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, getPicture(contributor.logo), " ", __jsx("div", {
      className: "jsx-1043522951" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, contributor.name));
  }))), __jsx("div", {
    className: "jsx-1043522951" + " " + "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    disabled: true,
    placeholder: "Sign in to comment",
    className: "jsx-1043522951" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), comments.map(function (comment, index) {
    return __jsx("div", {
      className: "jsx-1043522951" + " " + "comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1043522951" + " " + "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, getPicture(comment.photo), " ", __jsx("div", {
      className: "jsx-1043522951" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, comment.name), " ", __jsx("div", {
      className: "jsx-1043522951" + " " + "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "- ", comment.date)), __jsx("div", {
      className: "jsx-1043522951" + " " + "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, getText(comment.text), getImg(comment.img), getVideo(comment.videoId, 600)), __jsx("div", {
      className: "jsx-1043522951" + " " + "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1043522951" + " " + "nbcomments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "comments"), __jsx("div", {
      className: "jsx-1043522951" + " " + "nbvotes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "votes"), __jsx("div", {
      className: "jsx-1043522951" + " " + "nbshared",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "shared")));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1043522951",
    __self: this
  }, ".input.jsx-1043522951{border:1px solid #D3DDDD;border-radius:5px 0px 0px 0px;width:660px;height:40px;}.input.jsx-1043522951:disabled{background-color:#fff;}.jsx-1043522951::-webkit-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1043522951::-moz-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1043522951:-ms-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.jsx-1043522951::placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.comments.jsx-1043522951{margin-top:20px;padding-left:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.comment.jsx-1043522951{padding-top:35px;border-bottom:1px solid #CCCCCC;min-height:100px;padding-bottom:20px;margin-right:70px;font:14px/19px Arial;}.data.jsx-1043522951{margin-top:5px;margin-bottom:10px;}.center.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:45px;height:300px;}.img.jsx-1043522951{margin-top:20px;margin-right:13px;width:400px;}.content.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:280px;padding-left:90px;}.body.jsx-1043522951{margin-top:20px;font:20px/24px Arial;}.actions.jsx-1043522951{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.jsx-1043522951{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.type.jsx-1043522951{width:43px;height:32px;margin-right:15px;background-color:#255755;border:1px solid #FFFFFF;border-radius:2px;}.main.jsx-1043522951{padding-left:var(--main-margin);padding-right:var(--main-margin);background-color:#F4F6F6;}.header.jsx-1043522951{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:110px;border-bottom:2px solid #D3DDDD;padding-left:45px;font:Bold 24px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.info.jsx-1043522951{padding-left:45px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:60px;border-bottom:2px solid #D3DDDD;padding-bottom:10px;font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.posted.jsx-1043522951,.expert.jsx-1043522951,.citizen.jsx-1043522951,.contributors.jsx-1043522951,.user.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:300px;font:Bold 12px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.contributor.jsx-1043522951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.name.jsx-1043522951{font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.date.jsx-1043522951{font:10px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.desc.jsx-1043522951,.name.jsx-1043522951,.date.jsx-1043522951{margin-right:10px;}.break.jsx-1043522951{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;height:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUtpQixBQUk4QyxBQU9ILEFBTVIsQUFTRSxBQU9DLEFBU0YsQUFLRixBQVFHLEFBTUgsQUFRRyxBQUtKLEFBT08sQUFPSixBQVFxQixBQU1iLEFBaUJELEFBZ0JMLEFBY0EsQUFPYSxBQU1MLEFBTUgsQUFJRixXQW5GSixDQWRHLEVBekRFLENBeUJGLENBaEJBLEFBNkJELEFBY0csQ0FwQ1csQ0FzRlQsQUFpRHZCLEdBTnFCLENBdkp6QixDQThFMEIsRUFyRlEsQ0F3SlQsTUE1RGdCLEVBckR6QyxBQWFnQixDQXRDSyxBQVNKLEVBMkNqQixJQW9CaUMsS0FqQ2pDLEdBdkJxQixNQTdCTCxVQTRGaUIsQ0E5RFQsQUF3RFMsQ0FyRmpCLEVBc0tDLEtBN0hNLEFBY0csQUEwRUMsQUFjQSxJQXdCdkIsQ0F0S0osT0E2QnNCLElBOERsQixDQU5zQixFQVhULEFBcUJJLFdBakVJLENBc0NSLENBd0ZLLEdBdklJLEFBaUV0QixFQTJCaUIsQUFxQ0MsU0ExSUosQUFpSmQsS0E5SEosQUF3SEksU0ExSWtCLFNBNEJZLFNBM0JsQyxBQXlDa0MsZUFvQlgsQUFxQkksQUFpQ0EsQUFjQSxZQTFFSixNQTZDSSxFQTVGM0IsaURBc0RrQyxBQXVCYixBQStCYyxBQWNBLFlBMUVuQyxDQThCd0MsS0FlakIsSUF6RUQsU0FjTCxTQWJBLElBY0ssQ0E2Q0ksUUF6RDFCLFNBYUEsQ0E4Q2tDLFlBYWQsWUFDb0IsRUFiZixnQkE0QkwsQUFZaEIsVUFwRUosRUF5RGtDLEVBZk4sb0JBRU0sSUFjVCxzQkFiQSxTQWhCSCxjQUVsQix3Q0E0QmtCLGNBRWxCLFFBZmtCLGNBQ2xCIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUcGxHbG9iYWwyIGZyb20gJy4vdGVtcGxhdGUtZ2xvYmFsMidcclxuXHJcbmNvbnN0IFRwbFBvc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtwb3N0ID0ge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiQ29tbW9uIFR5cGVzIG9mIEJyZWFzdCBDYW5jZXJcIixcclxuICAgICAgICB0ZXh0OiBcIkludHJvZHVjdGlvbiBmcm9tIE1heW8gQ2xpbmljIHRvIHRoZSBjb21tb24gdHlwZXMgb2YgYnJlYXN0IGNhbmNlciBpbmNsdWRpbmcgZHVjdGFsIGFuZCBsb2J1bGFyIGJyZWFzdCBjYW5jZXIsIGFuZCBpbnZhc2l2ZSBhbmQgbm9uLWludmFzaXZlIGJyZWFzdCBjYW5jZXIuXCIsXHJcbiAgICAgICAgZGF0ZTogXCIzMCBkYXlzIGFnb1wiLFxyXG4gICAgICAgIGltYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdmlkZW9JZDogJ0ZUSDU2aWZIdDI4JyxcclxuICAgICAgICBwb2RjYXN0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgcG9zdGVkQnk6IHVzZXJzLnUxNCxcclxuICAgICAgICBleHBlcnQ6IHVzZXJzLnUxMSxcclxuICAgICAgICBjaXRpemVuOiB1c2Vycy51MTcsXHJcbiAgICAgICAgY29udHJpYnV0b3JzOiBbdXNlcnMudTIxLHVzZXJzLnUyOF0sXHJcbiAgICAgICAgbGV2ZWxzOiBbe3R5cGU6Mn1dLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJzLnU4LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJUaGF04oCZcyBnb29kIHRvIGtub3dcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6IFwiMjAgZGF5cyBhZ29cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcnMudTMyLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZWxsLCBJIGRvIG5vdCB0ZWludCBteSBoYWlyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBcIjIwIGRheXMgYWdvXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgfX0gPSBwcm9wcztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgaW1nLCB2aWRlb0lkLCBpbmZvfSA9IHBvc3Q7XHJcbiAgICBjb25zdCB7dHlwZSwgY2F0ZWdvcmllcywgc2VsZWN0ZWQsIGNsYXNzTmFtZX0gPSBwb3N0O1xyXG4gICAgY29uc3Qge25iY29tbWVudHMsIG5idm90ZXMsIG5ic2hhcmVkLCBsZXZlbHN9ID0gcG9zdDtcclxuICAgIGNvbnN0IHtwb3N0ZWRCeSwgZXhwZXJ0LCBjaXRpemVuLCBjb250cmlidXRvcnMsIGNvbW1lbnRzfSA9IHBvc3Q7XHJcblxyXG4gICAgY29uc3QgZ2V0VGV4dCA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRleHQuc3BsaXQoJyMjJykubWFwKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17a2V5fT57aXRlbX08YnIvPjwvc3Bhbj5cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGdldFR5cGVzID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGdldEltZyA9IChpbWcpID0+IHtcclxuICAgICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvJHtpbWd9YH0gd2lkdGg9e2A0MDBweGB9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFBpY3R1cmUgPSAoaW1nKSA9PiAoPGltZyBzcmM9e2AvbWVkaWEvaW1hZ2VzLyR7aW1nfWB9IC8+KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGdldFZpZGVvID0gKHZpZGVvSWQsIHNpemUpID0+IHtcclxuICAgICAgICBpZiAodmlkZW9JZCkge1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gKCAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aWZyYW1lIHR5cGU9XCJ0ZXh0L2h0bWxcIiB3aWR0aD17YCR7c2l6ZSB8fCAnNDAwJ31gfSBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2VuYWJsZWpzYXBpPTFgfVxyXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBpZD17YHZpZGVvJHt2aWRlb0lkfWB9PjwvaWZyYW1lPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcblxyXG4gICAgICAgIDxUcGxHbG9iYWwyIHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlXCI+PC9kaXY+IHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJbWcoaW1nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldFZpZGVvKHZpZGVvSWQpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGV4dCh0ZXh0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmJjb21tZW50c1wiPmNvbW1lbnRzPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmJ2b3Rlc1wiPnZvdGVzPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmJzaGFyZWRcIj5zaGFyZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkXCI+PGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+UG9zdGVkIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShwb3N0ZWRCeS5waG90byl9IDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntwb3N0ZWRCeS5uYW1lfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj4tIHtwb3N0ZWRCeS5kYXRlfTwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVydFwiPjxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPkV4cGVydCByZXZpZXdzIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShleHBlcnQucGhvdG8pfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZXhwZXJ0Lm5hbWV9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXRpemVuXCI+PGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+Q2l0aXplbiByZXZpZXdzIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShjaXRpemVuLnBob3RvKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NpdGl6ZW4ubmFtZX08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cmlidXRvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+Q29udHJpYnV0b3JzOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcnMubWFwKChjb250cmlidXRvciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0b3JcIj57Z2V0UGljdHVyZShjb250cmlidXRvci5sb2dvKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbnRyaWJ1dG9yLm5hbWV9PC9kaXY+PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dFwiIGRpc2FibGVkIHBsYWNlaG9sZGVyPVwiU2lnbiBpbiB0byBjb21tZW50XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPntnZXRQaWN0dXJlKGNvbW1lbnQucGhvdG8pfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57Y29tbWVudC5uYW1lfTwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj4tIHtjb21tZW50LmRhdGV9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGV4dChjb21tZW50LnRleHQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJbWcoY29tbWVudC5pbWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRWaWRlbyhjb21tZW50LnZpZGVvSWQsIDYwMCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5iY29tbWVudHNcIj5jb21tZW50czwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5idm90ZXNcIj52b3RlczwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ic2hhcmVkXCI+c2hhcmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YCAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQ6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypoZWlnaHQ6IDQwMHB4OyovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHgvMTlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMjBweC8yNHB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NTc1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYWluLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1haW4tbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAyNHB4LzI5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBCb2xkIDE0cHgvMTdweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RlZCwgLmV4cGVydCwgLmNpdGl6ZW4sIC5jb250cmlidXRvcnMsIC51c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAxMnB4LzI5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udHJpYnV0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAxNHB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTBweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGVzYywgLm5hbWUsIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJyZWFrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvVHBsR2xvYmFsMj5cclxuXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRwbFBvc3Q7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-post.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TplPost);

/***/ })

})
//# sourceMappingURL=[postid].js.d571d38fbab8f0fb3277.hot-update.js.map