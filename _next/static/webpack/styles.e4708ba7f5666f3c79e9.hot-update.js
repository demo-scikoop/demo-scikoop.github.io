webpackHotUpdate("styles",{

/***/ "./components/icons/misc/css/logohome.css":
/*!************************************************!*\
  !*** ./components/icons/misc/css/logohome.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"logohome":"_1_kryPhth38jC74DWQ0H1J","a":"_1EKKwe3mvppQhr6c-49eVi"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1580211829680");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e4708ba7f5666f3c79e9.hot-update.js.map