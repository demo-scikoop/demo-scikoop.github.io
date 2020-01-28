webpackHotUpdate("static\\development\\pages\\project\\[projectid]\\[postid].js",{

/***/ "./pages/project/[projectid]/[postid].js":
/*!***********************************************!*\
  !*** ./pages/project/[projectid]/[postid].js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_templates_template_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/templates/template-post */ "./components/templates/template-post.js");
/* harmony import */ var _components_mocks_mocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/mocks/mocks */ "./components/mocks/mocks.js");


var _jsxFileName = "D:\\scikoop\\github\\demoscikoop\\pages\\project\\[projectid]\\[postid].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Post = function Post() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var _router$query = router.query,
      postid = _router$query.postid,
      projectid = _router$query.projectid;
  var project = Object(_components_mocks_mocks__WEBPACK_IMPORTED_MODULE_6__["getMockProject"])(projectid);

  var post = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](project.posts, {
    id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(postid)
  });

  console.log('postid, projectid', {
    postid: postid,
    projectid: projectid
  });
  var post_old = {
    title: "Basic facts about Galen",
    text: "Born: 129 AD (Pergamon, Asia, Roman Empire) ##Died: c. 210 AD (Rome, Roman Empire) ##Nationality: Greek ##Occupation: Physician",
    img: "img2.png",
    info: {
      postedBy: {
        photo: 'suzy.png',
        name: 'Suzy G.',
        date: '5 days ago'
      },
      expert: {
        photo: 'harold.png',
        name: 'Harold B.'
      },
      citizen: {
        photo: 'karen.png',
        name: 'Karen G.'
      },
      contributors: [{
        logo: 'scikoop.png',
        name: 'Scikoop'
      }],
      comments: [{
        photo: 'suzy.png',
        name: 'Suzy G.',
        date: '5 days ago',
        text: 'Never heard of him but I have never looked into it. Is he really the first one?'
      }, {
        photo: 'suzy.png',
        name: 'Suzy G.',
        date: '5 days ago',
        text: 'I also found this more recent video from TED-Ed but it is much longer.',
        videoId: 'r1BhsWsmjco'
      }]
    }
  };
  return __jsx(_components_templates_template_post__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  });
};

Post.getInitialProps = function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {});

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[postid].js.76e9cfaf74fdf4016dc2.hot-update.js.map