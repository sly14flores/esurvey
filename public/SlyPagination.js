(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SlyPagination"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SlyPagination.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SlyPagination.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['currentPage', 'perPage', 'lastPage', 'totalItems', 'fetchData'],
  computed: {
    show: function show() {
      return this.totalItems != undefined && this.totalItems != undefined && this.totalItems > this.perPage;
    },
    btns: function btns() {
      return {
        first: this.currentPage > 1 ? false : true,
        previous: this.currentPage > 1 ? false : true,
        next: this.currentPage < this.lastPage ? false : true,
        last: this.currentPage < this.lastPage ? false : true
      };
    }
  },
  methods: {
    first: function first() {
      var currentPage = 1;
      this.fetchData(currentPage);
    },
    previous: function previous() {
      var currentPage = this.currentPage;
      if (this.currentPage - 1 > 0) currentPage = this.currentPage - 1;
      this.fetchData(currentPage);
    },
    next: function next() {
      var currentPage = this.currentPage;
      if (this.currentPage + 1 <= this.lastPage) currentPage = this.currentPage + 1;
      this.fetchData(currentPage);
    },
    last: function last() {
      var currentPage = this.lastPage;
      this.fetchData(currentPage);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SlyPagination.vue?vue&type=template&id=c7f360c2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SlyPagination.vue?vue&type=template&id=c7f360c2& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.show
      ? _c("nav", [
          _c("ul", { staticClass: "pagination justify-content-center" }, [
            _c(
              "li",
              { staticClass: "page-item", class: { disabled: _vm.btns.first } },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "javascript:;", disabled: _vm.btns.first },
                    on: { click: _vm.first }
                  },
                  [_vm._v("«")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "page-item",
                class: { disabled: _vm.btns.previous }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "javascript:;",
                      disabled: _vm.btns.previous
                    },
                    on: { click: _vm.previous }
                  },
                  [_vm._v("‹")]
                )
              ]
            ),
            _vm._v(" "),
            _c("li", { staticClass: "page-item active" }, [
              _c(
                "a",
                { staticClass: "page-link", attrs: { href: "javascript:;" } },
                [_vm._v(_vm._s(_vm.currentPage))]
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "page-item", class: { disabled: _vm.btns.next } },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "javascript:;", disabled: _vm.btns.next },
                    on: { click: _vm.next }
                  },
                  [_vm._v("›")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "page-item", class: { disabled: _vm.btns.last } },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "javascript:;", disabled: _vm.btns.last },
                    on: { click: _vm.last }
                  },
                  [_vm._v("»")]
                )
              ]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SlyPagination.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/SlyPagination.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlyPagination_vue_vue_type_template_id_c7f360c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlyPagination.vue?vue&type=template&id=c7f360c2& */ "./resources/js/components/SlyPagination.vue?vue&type=template&id=c7f360c2&");
/* harmony import */ var _SlyPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlyPagination.vue?vue&type=script&lang=js& */ "./resources/js/components/SlyPagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SlyPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SlyPagination_vue_vue_type_template_id_c7f360c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SlyPagination_vue_vue_type_template_id_c7f360c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SlyPagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SlyPagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SlyPagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlyPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SlyPagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SlyPagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlyPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SlyPagination.vue?vue&type=template&id=c7f360c2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SlyPagination.vue?vue&type=template&id=c7f360c2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlyPagination_vue_vue_type_template_id_c7f360c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SlyPagination.vue?vue&type=template&id=c7f360c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SlyPagination.vue?vue&type=template&id=c7f360c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlyPagination_vue_vue_type_template_id_c7f360c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlyPagination_vue_vue_type_template_id_c7f360c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);