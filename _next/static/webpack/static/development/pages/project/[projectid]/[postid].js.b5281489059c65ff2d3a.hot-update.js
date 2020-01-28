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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _template_global2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-global2 */ "./components/templates/template-global2.js");
/* harmony import */ var _blocks_social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/social */ "./components/blocks/social.js");
/* harmony import */ var _icons_misc_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/misc/close */ "./components/icons/misc/close.js");
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
  var projectId = props.projectId;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleClick = function handleClick(e) {
    if (!projectId || post.locked) return;
    e.preventDefault();
    router.push("/project/".concat(projectId));
  };

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
          lineNumber: 57
        },
        __self: this
      }, item, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
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
          lineNumber: 66
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
        lineNumber: 70
      },
      __self: this
    });
  };

  var getVideo = function getVideo(videoId, size) {
    if (videoId) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
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
          lineNumber: 79
        },
        __self: this
      }));
    }
  };

  return __jsx(_template_global2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: post.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "containerHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), " ", title), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    onClick: handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "icon clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_icons_misc_close__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, getImg(image), getVideo(videoId), post.type === 4 && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "podcast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("img", {
    src: "/media/images/podcast2.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, getText(text)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 129
    },
    __self: this
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Posted by:"), " ", getPicture(postedBy.id), " ", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, postedBy.name), " ", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "- ", post.date), " "), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "expert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Expert reviews by:"), " ", getPicture(expert.id), " ", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, expert.name)), citizen && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "citizen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Citizen reviews by:"), " ", getPicture(citizen.id), " ", __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, citizen.name)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "break",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "contributors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Contributors:"), contributors.map(function (contributor, index) {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "contributor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, getPicture(contributor.id), " ", __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, contributor.name));
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    disabled: true,
    placeholder: "Sign in to comment",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), comments.map(function (comment, index) {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, getPicture(comment.user.id), " ", __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, comment.text), " ", __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "- ", comment.date)), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["940713966", [projectId ? 'cursor: pointer;\n' : '']]]) + " " + "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, getText(comment.text), getImg(comment.img), getVideo(comment.videoId, 600)), __jsx(_blocks_social__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        lineNumber: 178
      },
      __self: this
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "940713966",
    dynamic: [projectId ? 'cursor: pointer;\n' : ''],
    __self: this
  }, ".clickable.__jsx-style-dynamic-selector{".concat(projectId ? 'cursor: pointer;\n' : '', ";}.icon.__jsx-style-dynamic-selector{width:40px;height:40px;background:#4E7876;border:1px solid #225755;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.input.__jsx-style-dynamic-selector{border:1px solid #D3DDDD;border-radius:5px 0px 0px 0px;width:660px;height:40px;margin-bottom:20px;}.input.__jsx-style-dynamic-selector:disabled{background-color:#fff;}.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.__jsx-style-dynamic-selector::-moz-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.__jsx-style-dynamic-selector::placeholder{color:#D3DDDD;font:12px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#CCCCCC;padding-left:10px;}.comments.__jsx-style-dynamic-selector{margin-top:20px;padding-left:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.comment.__jsx-style-dynamic-selector{padding-top:35px;border-bottom:1px solid #CCCCCC;min-height:100px;padding-bottom:20px;margin-right:70px;font:14px/19px Arial;}.data.__jsx-style-dynamic-selector{margin-top:5px;margin-bottom:10px;}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:45px;height:300px;}.img.__jsx-style-dynamic-selector{margin-top:20px;margin-right:13px;width:400px;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:280px;padding-left:90px;}.body.__jsx-style-dynamic-selector{margin-top:20px;font:20px/24px Arial;}.actions.__jsx-style-dynamic-selector{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.footer.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.type.__jsx-style-dynamic-selector{width:43px;height:32px;margin-right:15px;background-color:#255755;border:1px solid #FFFFFF;border-radius:2px;}.main.__jsx-style-dynamic-selector{padding-left:var(--main-margin);padding-right:var(--main-margin);background-color:#F4F6F6;}.containerHeader.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:110px;border-bottom:2px solid #D3DDDD;padding-left:45px;font:Bold 24px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.info.__jsx-style-dynamic-selector{padding-left:45px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:60px;border-bottom:2px solid #D3DDDD;padding-bottom:10px;font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.posted.__jsx-style-dynamic-selector,.expert.__jsx-style-dynamic-selector,.citizen.__jsx-style-dynamic-selector,.contributors.__jsx-style-dynamic-selector,.user.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:300px;font:Bold 12px/29px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.contributor.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.name.__jsx-style-dynamic-selector{font:Bold 14px/17px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#000000;}.date.__jsx-style-dynamic-selector{font:10px/19px Arial;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#707070;}.desc.__jsx-style-dynamic-selector,.name.__jsx-style-dynamic-selector,.date.__jsx-style-dynamic-selector{margin-right:10px;}.break.__jsx-style-dynamic-selector{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;height:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU1pQixBQU1nQixBQUVvQixBQWNVLEFBUUgsQUFNUixBQVNFLEFBT0MsQUFTRixBQUtGLEFBUUcsQUFNSCxBQVFHLEFBS0osQUFPTyxBQU9KLEFBUXFCLEFBTWIsQUFRQSxBQWtCRCxBQWdCTCxBQWNBLEFBT2EsQUFNTCxBQU1ILEFBSUYsV0EvTEosQUFtR0EsQ0FkRyxFQXpERSxDQXlCRixDQWhCQSxBQTZCRCxBQWNHLENBcENXLENBK0ZULEFBaUR2QixHQU5xQixDQWhLekIsQ0FwQjJCLEFBa0dELEVBdEZRLENBa0tULEdBbkx6QixHQThHeUMsRUFyRHpDLEFBYWdCLENBdENLLEFBU0osRUEyQ2pCLElBb0JpQyxDQWxHQSxJQWlFakMsR0F2QnFCLE1BOUJMLFVBNkZpQixDQTlEVCxBQXdEUyxDQWxHUCxBQVlWLEVBZ0xDLEtBdElNLEFBY0csQUFtRkMsQUFjQSxJQXdCdkIsQ0FoTG1CLE1BWEYsQ0F5Q0MsSUE4RGxCLENBTnNCLEVBWFQsQUFxQkksQUFRQSxLQXZHckIsTUE4QnlCLENBc0NSLENBaUdLLEdBaEpJLEFBaUV0QixFQW9DaUIsQUFxQ0MsU0FuSkosQUEwSmQsS0F2SUosQUFpSUksU0FuSmtCLFNBNEJZLFNBM0JsQyxBQXlDa0MsT0FsRVIsUUFzRkgsQUFxQkksQUFRQSxBQWtDQSxBQWNBLFlBbkZKLE1Bc0RJLEVBckczQixpREFzRGtDLEFBdUI5QixBQU1rQyxBQWtDSCxBQWNBLFlBbkZuQyxJQWhGK0IsRUFzSVIsSUFsRkQsU0FjTCxTQWJBLElBY0ssU0FadEIsU0FhQSxhQW9Fb0IsWUFDb0Isa0JBZXBCLEFBWWhCLFVBbEtBLEFBcUZKLEFBK0JxQixFQW1DYSxFQWZOLFNBbkJZLFdBcUJOLElBY1QsaUJBakNDLEtBb0JELGFBbEJTLDBCQUNULHdCQStCSCxjQUVsQixRQWZrQixjQUNsQix5QkFsQmtCLGNBRWxCIiwiZmlsZSI6IkQ6XFxzY2lrb29wXFxnaXRodWJcXGRlbW9zY2lrb29wXFxjb21wb25lbnRzXFx0ZW1wbGF0ZXNcXHRlbXBsYXRlLXBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgVHBsR2xvYmFsMiBmcm9tICcuL3RlbXBsYXRlLWdsb2JhbDInXHJcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vYmxvY2tzL3NvY2lhbCdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi9pY29ucy9taXNjL2Nsb3NlJ1xyXG5cclxuY29uc3QgVHBsUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3Bvc3QgPSB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdHlwZTogMSxcclxuICAgICAgICB0aXRsZTogXCJDb21tb24gVHlwZXMgb2YgQnJlYXN0IENhbmNlclwiLFxyXG4gICAgICAgIHRleHQ6IFwiSW50cm9kdWN0aW9uIGZyb20gTWF5byBDbGluaWMgdG8gdGhlIGNvbW1vbiB0eXBlcyBvZiBicmVhc3QgY2FuY2VyIGluY2x1ZGluZyBkdWN0YWwgYW5kIGxvYnVsYXIgYnJlYXN0IGNhbmNlciwgYW5kIGludmFzaXZlIGFuZCBub24taW52YXNpdmUgYnJlYXN0IGNhbmNlci5cIixcclxuICAgICAgICBkYXRlOiBcIjMwIGRheXMgYWdvXCIsXHJcbiAgICAgICAgaW1hZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICB2aWRlb0lkOiAnRlRINTZpZkh0MjgnLFxyXG4gICAgICAgIHBvZGNhc3Q6IHVuZGVmaW5lZCxcclxuICAgICAgICBwb3N0ZWRCeTogdXNlcnMudTE0LFxyXG4gICAgICAgIGV4cGVydDogdXNlcnMudTExLFxyXG4gICAgICAgIGNpdGl6ZW46IHVzZXJzLnUxNyxcclxuICAgICAgICBjb250cmlidXRvcnM6IFt1c2Vycy51MjEsdXNlcnMudTI4XSxcclxuICAgICAgICBsZXZlbHM6IFt7dHlwZToyfV0sXHJcbiAgICAgICAgY29tbWVudHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcnMudTgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlRoYXTigJlzIGdvb2QgdG8ga25vd1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCIyMCBkYXlzIGFnb1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2Vycy51MzIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIldlbGwsIEkgZG8gbm90IHRlaW50IG15IGhhaXJcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6IFwiMjAgZGF5cyBhZ29cIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9fSA9IHByb3BzO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3Qge3Byb2plY3RJZH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBpZiAoIXByb2plY3RJZCB8fCBwb3N0LmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICByb3V0ZXIucHVzaChgL3Byb2plY3QvJHtwcm9qZWN0SWR9YCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qge3RpdGxlLCB0ZXh0LCBpbWFnZSwgdmlkZW9JZCwgaW5mb30gPSBwb3N0O1xyXG4gICAgY29uc3Qge3R5cGUsIGNhdGVnb3JpZXMsIHNlbGVjdGVkLCBjbGFzc05hbWV9ID0gcG9zdDtcclxuICAgIGNvbnN0IHtuYmNvbW1lbnRzLCBuYnZvdGVzLCBuYnNoYXJlZCwgbGV2ZWxzfSA9IHBvc3Q7XHJcbiAgICBjb25zdCB7cG9zdGVkQnksIGV4cGVydCwgY2l0aXplbiwgY29udHJpYnV0b3JzLCBjb21tZW50c30gPSBwb3N0O1xyXG5cclxuICAgIGNvbnN0IGdldFRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCcjIycpLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2tleX0+e2l0ZW19PGJyLz48L3NwYW4+XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRJbWcgPSAoaW1hZ2UpID0+IHtcclxuICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtgL21lZGlhL2ltYWdlcy8ke2ltYWdlfWB9IG1heC13aWR0aD17YDQwMHB4YH0gLz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UGljdHVyZSA9ICh1c2VySWQpID0+ICg8aW1nIHNyYz17YC9tZWRpYS91c2Vycy8ke3VzZXJJZH0ucG5nYH0gLz4pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZ2V0VmlkZW8gPSAodmlkZW9JZCwgc2l6ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2aWRlb0lkKSB7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgIHJldHVybiAoICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgdHlwZT1cInRleHQvaHRtbFwiIHdpZHRoPXtgJHtzaXplIHx8ICc0MDAnfWB9IGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/ZW5hYmxlanNhcGk9MWB9XHJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgIGlkPXtgdmlkZW8ke3ZpZGVvSWR9YH0+PC9pZnJhbWU+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuXHJcbiAgICAgICAgPFRwbEdsb2JhbDIgdGl0bGU9e3Bvc3QudGl0bGV9PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVcIj48L2Rpdj4ge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY2xpY2thYmxlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PjxDbG9zZUljb24gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJbWcoaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmlkZW8odmlkZW9JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnR5cGUgPT09IDQgJiZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RcIj48aW1nIHNyYz17YC9tZWRpYS9pbWFnZXMvcG9kY2FzdDIucG5nYH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dldFRleHQodGV4dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWwgc29jaWFsPXsge1xyXG4gICAgICAgIG5iQ29tbWVudHM6IDAsXHJcbiAgICAgICAgbmJWb3Rlczoge1xyXG4gICAgICAgICAgICB1cDogMCxcclxuICAgICAgICAgICAgZG93bjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmJTaGFyZWQ6IDAsXHJcbiAgICAgICAgbGV2ZWxzOiBwb3N0LmxldmVscyxcclxuICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlZFwiPjxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlBvc3RlZCBieTo8L2Rpdj4ge2dldFBpY3R1cmUocG9zdGVkQnkuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57cG9zdGVkQnkubmFtZX08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+LSB7cG9zdC5kYXRlfTwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVydFwiPjxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPkV4cGVydCByZXZpZXdzIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShleHBlcnQuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZXhwZXJ0Lm5hbWV9PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NpdGl6ZW4gJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXRpemVuXCI+PGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+Q2l0aXplbiByZXZpZXdzIGJ5OjwvZGl2PiB7Z2V0UGljdHVyZShjaXRpemVuLmlkKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NpdGl6ZW4ubmFtZX08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVha1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPkNvbnRyaWJ1dG9yczo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3JzLm1hcCgoY29udHJpYnV0b3IsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRyaWJ1dG9yXCI+e2dldFBpY3R1cmUoY29udHJpYnV0b3IuaWQpfSA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57Y29udHJpYnV0b3IubmFtZX08L2Rpdj48L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0XCIgZGlzYWJsZWQgcGxhY2Vob2xkZXI9XCJTaWduIGluIHRvIGNvbW1lbnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+e2dldFBpY3R1cmUoY29tbWVudC51c2VyLmlkKX0gPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2NvbW1lbnQudGV4dH08L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+LSB7Y29tbWVudC5kYXRlfTwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFRleHQoY29tbWVudC50ZXh0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0SW1nKGNvbW1lbnQuaW1nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VmlkZW8oY29tbWVudC52aWRlb0lkLCA2MDApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWw9eyB7XHJcbiAgICAgICAgbmJDb21tZW50czogMCxcclxuICAgICAgICBuYlZvdGVzOiB7XHJcbiAgICAgICAgICAgIHVwOiAwLFxyXG4gICAgICAgICAgICBkb3duOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYlNoYXJlZDogMCxcclxuICAgICAgICBsZXZlbHM6IFtdLFxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2AgIFxyXG5cclxuICAgICAgICAgICAgICAgIC5jbGlja2FibGUge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAke3Byb2plY3RJZCA/ICdjdXJzb3I6IHBvaW50ZXI7XFxuJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRFNzg3NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyNTc1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0REREQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQ6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypoZWlnaHQ6IDQwMHB4OyovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0NDQ0M7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHgvMTlweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMjBweC8yNHB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NTc1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYWluLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1haW4tbWFyZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVySGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDNEREREOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAyNHB4LzI5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRERERDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBCb2xkIDE0cHgvMTdweCBBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RlZCwgLmV4cGVydCwgLmNpdGl6ZW4sIC5jb250cmlidXRvcnMsIC51c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAxMnB4LzI5cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udHJpYnV0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogQm9sZCAxNHB4LzE3cHggQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTBweC8xOXB4IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGVzYywgLm5hbWUsIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJyZWFrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvVHBsR2xvYmFsMj5cclxuXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRwbFBvc3Q7Il19 */\n/*@ sourceURL=D:\\\\scikoop\\\\github\\\\demoscikoop\\\\components\\\\templates\\\\template-post.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (TplPost);

/***/ })

})
//# sourceMappingURL=[postid].js.b5281489059c65ff2d3a.hot-update.js.map