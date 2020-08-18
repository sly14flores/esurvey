(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficeForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/offices/OfficeForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OfficesHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfficesHeader */ "./resources/js/offices/OfficesHeader.vue");
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
  name: 'OfficeForm',
  components: {
    OfficesHeader: _OfficesHeader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      onEdit: false
    };
  },
  computed: {
    office: {
      get: function get() {
        return this.$store.state.offices.office;
      },
      set: function set(value) {
        this.$store.commit('office', value);
      }
    },
    oldOffice: function oldOffice() {
      return this.$route.params.hasOwnProperty('office_id');
    }
  },
  validations: {
    office: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  methods: {
    fetchOffice: function fetchOffice(office_id) {
      var _this = this;

      axios.get('api/office/' + office_id, this.$store.state.config).then(function (response) {
        _this.$store.commit('office', response.data.data);
      })["catch"](function (e) {
        _this.$router.push({
          name: 'offices_list'
        });
      });
    },
    confirmAdd: function confirmAdd() {
      this.$v.office.$touch();
      if (this.$v.office.$invalid) return;
      this.$refs['confirm-add'].show();
    },
    save: function save() {
      var _this2 = this;

      this.$root.show();
      axios.post('api/office', this.office, this.$store.state.config).then(function (response) {
        _this2.$root.hide();

        _this2.$router.push({
          name: 'offices_list'
        });

        _this2.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: 'New office successfully added'
        });
      })["catch"](function (e) {
        _this2.$root.hide();

        if (e.response.status == 403) _this2.$parent.$refs.pnotify.show({
          type: 'error',
          title: 'Notification',
          text: e.response.data.message
        });
      });
    },
    edit: function edit() {
      this.onEdit = !this.onEdit;
    },
    confirmUpdate: function confirmUpdate() {
      this.$v.office.$touch();
      if (this.$v.office.$invalid) return;
      this.$refs['confirm-update'].show();
    },
    update: function update() {
      var _this3 = this;

      this.$root.show();
      axios.put('api/office/' + this.office.id, this.office, this.$store.state.config).then(function (response) {
        _this3.onEdit = false;

        _this3.$root.hide();

        _this3.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: "Office's info successfully updated"
        });
      })["catch"](function (e) {
        _this3.$root.hide();

        if (e.response.status == 403) _this3.$parent.$refs.pnotify.show({
          type: 'error',
          title: 'Notification',
          text: e.response.data.message
        });
      });
    },
    close: function close() {
      this.$store.commit('office', {});
      this.$router.push({
        name: 'offices_list'
      });
    },
    confirmDelete: function confirmDelete(office) {
      this.$refs['confirm-delete'].show();
    },
    deleteOffice: function deleteOffice() {
      var _this4 = this;

      this.$root.show();
      axios["delete"]('api/office/' + this.$store.state.offices.office.id, this.$store.state.config).then(function (response) {
        _this4.$root.hide();

        _this4.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: "Office info successfully deleted"
        });

        _this4.$router.push({
          name: 'offices_list'
        });
      })["catch"](function (e) {
        _this4.$root.hide();

        if (e.response.status == 403) _this4.$parent.$refs.pnotify.show({
          type: 'error',
          title: 'Notification',
          text: e.response.data.message
        });
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this5 = this;

    this.$nextTick(function () {
      if (!_this5.oldOffice) _this5.onEdit = true;
    });
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      var refresh = from.fullPath == '/';

      if (vm.$route.params.hasOwnProperty('office_id')) {
        if (refresh) {
          vm.$store.dispatch('api_token').then(function () {
            vm.fetchOffice(vm.$route.params.office_id);
          });
        } else {
          vm.fetchOffice(vm.$route.params.office_id);
        }
      } else {
        vm.$store.commit('office', {});
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficesHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/offices/OfficesHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
  props: ['isList']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficeForm.vue?vue&type=template&id=d265f6d4&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/offices/OfficeForm.vue?vue&type=template&id=d265f6d4& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "page-wrapper" },
        [
          _c("offices-header", { attrs: { isList: false } }),
          _vm._v(" "),
          _c("div", { staticClass: "page-body" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h5", [_vm._v("Office Form")]),
                _vm._v(" "),
                _c("form", { staticClass: "f-right" }, [
                  _c("div", { staticClass: "right-icon-control" }, [
                    _vm.oldOffice
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: { type: "button" },
                            on: { click: _vm.edit }
                          },
                          [_vm._v(_vm._s(_vm.onEdit ? "Cancel" : "Edit"))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.oldOffice
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            attrs: { type: "button" },
                            on: { click: _vm.confirmDelete }
                          },
                          [_vm._v("Delete")]
                        )
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-block" }, [
                _c(
                  "form",
                  {
                    staticClass: "needs-validation",
                    attrs: { novalidate: "" }
                  },
                  [
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "form-group col-lg-6" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.office.name.$model,
                              expression: "$v.office.name.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.office.name.$error },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldOffice && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.office.name.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.office.name,
                                "$model",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Name is required")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-6" }, [
                        _c("label", [_vm._v("Description")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.office.description.$model,
                              expression: "$v.office.description.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.office.description.$error
                          },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldOffice && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.office.description.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.office.description,
                                "$model",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Description is required")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "f-right" }, [
                      !_vm.oldOffice
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-sm",
                              attrs: { type: "button" },
                              on: { click: _vm.confirmAdd }
                            },
                            [_vm._v("Save")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.oldOffice
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-sm",
                              attrs: { type: "button", disabled: !_vm.onEdit },
                              on: { click: _vm.confirmUpdate }
                            },
                            [_vm._v("Update")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-warning btn-sm",
                          attrs: { type: "button" },
                          on: { click: _vm.close }
                        },
                        [_vm._v(_vm._s(_vm.oldOffice ? "Close" : "Cancel"))]
                      )
                    ])
                  ]
                )
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-add",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.save }
        },
        [_vm._v("\n\t\tConfirm office add?\n\t")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-update",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.update }
        },
        [
          _vm._v(
            "\n\t\tAre you sure you want to update this office's info?\n\t"
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-delete",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.deleteOffice }
        },
        [_vm._v("\n\t\tAre you sure you want to delete this office?\n\t")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficesHeader.vue?vue&type=template&id=7670be1e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/offices/OfficesHeader.vue?vue&type=template&id=7670be1e& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-header" }, [
    _c("div", { staticClass: "row align-items-end" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4" }, [
        _c("div", { staticClass: "page-header-breadcrumb" }, [
          _c("ul", { staticClass: "breadcrumb-title" }, [
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: "/dashboard" } }, [
                  _c("i", { staticClass: "feather icon-home" })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1)
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.isList
      ? _c("div", { staticClass: "row align-items-end" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c(
              "div",
              { staticStyle: { "margin-top": "20px" } },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary btn-sm",
                    attrs: { to: "/office", tag: "button" }
                  },
                  [_vm._v("Add")]
                )
              ],
              1
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-8" }, [
      _c("div", { staticClass: "page-header-title" }, [
        _c("div", { staticClass: "d-inline" }, [
          _c("h4", [_vm._v("Manage Offices")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Offices")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/offices/OfficeForm.vue":
/*!*********************************************!*\
  !*** ./resources/js/offices/OfficeForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OfficeForm_vue_vue_type_template_id_d265f6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfficeForm.vue?vue&type=template&id=d265f6d4& */ "./resources/js/offices/OfficeForm.vue?vue&type=template&id=d265f6d4&");
/* harmony import */ var _OfficeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfficeForm.vue?vue&type=script&lang=js& */ "./resources/js/offices/OfficeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfficeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfficeForm_vue_vue_type_template_id_d265f6d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OfficeForm_vue_vue_type_template_id_d265f6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/offices/OfficeForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/offices/OfficeForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/offices/OfficeForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OfficeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/offices/OfficeForm.vue?vue&type=template&id=d265f6d4&":
/*!****************************************************************************!*\
  !*** ./resources/js/offices/OfficeForm.vue?vue&type=template&id=d265f6d4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeForm_vue_vue_type_template_id_d265f6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OfficeForm.vue?vue&type=template&id=d265f6d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficeForm.vue?vue&type=template&id=d265f6d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeForm_vue_vue_type_template_id_d265f6d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeForm_vue_vue_type_template_id_d265f6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/offices/OfficesHeader.vue":
/*!************************************************!*\
  !*** ./resources/js/offices/OfficesHeader.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OfficesHeader_vue_vue_type_template_id_7670be1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfficesHeader.vue?vue&type=template&id=7670be1e& */ "./resources/js/offices/OfficesHeader.vue?vue&type=template&id=7670be1e&");
/* harmony import */ var _OfficesHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfficesHeader.vue?vue&type=script&lang=js& */ "./resources/js/offices/OfficesHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfficesHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfficesHeader_vue_vue_type_template_id_7670be1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OfficesHeader_vue_vue_type_template_id_7670be1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/offices/OfficesHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/offices/OfficesHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/offices/OfficesHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficesHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OfficesHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficesHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficesHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/offices/OfficesHeader.vue?vue&type=template&id=7670be1e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/offices/OfficesHeader.vue?vue&type=template&id=7670be1e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficesHeader_vue_vue_type_template_id_7670be1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OfficesHeader.vue?vue&type=template&id=7670be1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/offices/OfficesHeader.vue?vue&type=template&id=7670be1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficesHeader_vue_vue_type_template_id_7670be1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficesHeader_vue_vue_type_template_id_7670be1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);