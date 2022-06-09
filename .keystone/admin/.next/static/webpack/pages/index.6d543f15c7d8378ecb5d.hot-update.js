webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/pages/HomePage */ "../../node_modules/@keystone-next/admin-ui/pages/HomePage/dist/admin-ui.esm.js");
/* harmony import */ var _keystone_next_admin_ui_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "../../node_modules/@keystone-next/admin-ui/apollo/dist/admin-ui.esm.js");



function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__["HomePage"], {
    query: _keystone_next_admin_ui_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"]`
        query {
          keystone {
            adminMeta {
              lists {
                key
                fields {
                  path
                  createView {
                    fieldMode
                  }
                }
              }
            }
          }
          User: _allUsersMeta {
            count
          }
        }
      `
  });
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UsMkRBQUMsK0VBQUQ7QUFDRSxTQUFLLEVBQUVDLGtFQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJJLElBREY7QUF3QkQ7S0F6QnVCRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkNTQzZjE1YzdkODM3OGVjYjVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL3BhZ2VzL0hvbWVQYWdlJztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEhvbWVQYWdlXG4gICAgICBxdWVyeT17Z3FsYFxuICAgICAgICBxdWVyeSB7XG4gICAgICAgICAga2V5c3RvbmUge1xuICAgICAgICAgICAgYWRtaW5NZXRhIHtcbiAgICAgICAgICAgICAgbGlzdHMge1xuICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgICBjcmVhdGVWaWV3IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRNb2RlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFVzZXI6IF9hbGxVc2Vyc01ldGEge1xuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=