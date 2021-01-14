(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ItemValues"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ItemValues.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ValueSubItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueSubItems */ "./resources/js/surveys/ValueSubItems.vue");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ItemValues',
  components: {
    ValueSubItems: _ValueSubItems__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['section', 'item'],
  data: function data() {
    return {
      value: {},
      old_value: false,
      text_input_types: [{
        id: 1,
        description: 'String'
      }, {
        id: 2,
        description: 'Number'
      }],
      multi_rows_row_types: [{
        id: 1,
        description: 'Headers'
      }, {
        id: 2,
        description: 'Row'
      }]
    };
  },
  computed: {
    sectionItem: function sectionItem() {
      return this.$parent.$parent;
    },
    onEdit: function onEdit() {
      return this.$parent.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.$parent.oldSurvey;
    },
    values: {
      get: function get() {
        return this.$store.state.surveys.survey.sections[this.section].items[this.item].values;
      },
      set: function set(value) {
        this.$store.commit('values', {
          section: this.section,
          item: this.item,
          values: value
        });
      }
    },
    has_values: function has_values() {
      return this.sectionItem.items[this.item].item_type > 0;
    },
    has_value: function has_value() {
      return this.sectionItem.items[this.item].item_type == 2 || this.sectionItem.items[this.item].item_type == 4 || this.sectionItem.items[this.item].item_type == 5 || this.sectionItem.items[this.item].item_type == 6;
    },
    has_value_other: function has_value_other() {
      return this.sectionItem.items[this.item].item_type == 4;
    },
    has_images: function has_images() {
      return this.sectionItem.items[this.item].item_type == 6;
    },
    has_min: function has_min() {
      return this.sectionItem.items[this.item].item_type == 1;
    },
    has_max: function has_max() {
      return this.sectionItem.items[this.item].item_type == 1;
    },
    has_data_type: function has_data_type() {
      return this.sectionItem.items[this.item].item_type == 3;
    },
    has_row_type: function has_row_type() {
      return this.sectionItem.items[this.item].item_type == 7;
    },
    has_sub: function has_sub() {
      return this.sectionItem.items[this.item].item_type == 1 || this.sectionItem.items[this.item].item_type == 2 || this.sectionItem.items[this.item].item_type == 4 || this.sectionItem.items[this.item].item_type == 5 || this.sectionItem.items[this.item].item_type == 7;
    },
    has_infographic: function has_infographic() {
      return this.sectionItem.items[this.item].item_type == 6 && this.sectionItem.items[this.item].item_presentation == 2;
    }
  },
  validations: {
    values: {
      required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
        return this.values.length > 0;
      }),
      $each: {
        display: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        },
        siv_value: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_value && !model.siv_value_other;
          })
        },
        siv_min: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_min && !model.min_below;
          })
        },
        siv_max: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_max && !model.max_above;
          })
        },
        data_type: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_data_type;
          })
        },
        row_type: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_row_type;
          })
        }
      }
    }
  },
  methods: {
    add: function add(value) {
      if (value == null) {
        var _value = {
          id: 0,
          display: '',
          siv_value: '',
          siv_value_other: false,
          siv_min: '',
          min_below: false,
          siv_max: '',
          max_above: false,
          data_type: null,
          row_type: null,
          siv_infographic: null,
          sub_items: []
        };
        this.values.push(_value);
        this.old_value = false;
      } else {
        this.value = value;
        this.old_value = true;
      }

      this.$nextTick(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
    },
    confirmDelete: function confirmDelete(value) {
      var index = this.values.indexOf(value);

      if (this.oldSurvey && value.id > 0) {
        this.$bvModal.show('confirm-value-delete-' + this.section + this.item + index);
      } else {
        this.values.splice(index, 1);
      }
    },
    deleteValue: function deleteValue(value) {
      var _this = this;

      axios["delete"]('api/survey/section/item/value/' + value.id, this.$store.state.config).then(function (response) {
        _this.$store.dispatch('fetchSurvey');
      })["catch"](function (e) {});
    },
    row_type_is_headers: function row_type_is_headers(value) {
      if (this.sectionItem.items[this.item].item_type != 7) return true;
      return value.row_type == 1;
    },
    addSivIg: function addSivIg(s, i, vi) {
      $('#upload-siv-infographic_' + s.toString() + i.toString() + vi.toString())[0].click();
    },
    sivIg: function sivIg(s, i, vi) {
      var _this2 = this;

      var file = $('#upload-siv-infographic_' + s + i + vi)[0].files[0];
      var type = file.type.split("/");
      var valid_files = ["jpeg", "png"];
      if (!valid_files.includes(type[1])) return;
      var eid = "#siv_" + s + i + vi; // var preview = document.querySelector(eid);

      var reader = new FileReader();
      reader.addEventListener("load", function () {
        // preview.src = reader.result;
        _this2.values[vi].siv_infographic = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }

      ;
    },
    removeSivIg: function removeSivIg(s, i, vi) {
      this.values[vi].siv_infographic = null;
      $('#upload-siv-infographic_' + s + i + vi).val(null);
    },
    valuesInvalid: function valuesInvalid() {
      this.sectionItem.items[this.item].values_invalid = this.$v.values.$error;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      if (!_this3.oldSurvey) _this3.values = [];
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ValueSubItems.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'ValueSubItems',
  props: ['section', 'item', 'value', 'row_type'],
  data: function data() {
    return {
      sub_item: {},
      old_sub_item: false
    };
  },
  computed: {
    sectionItem: function sectionItem() {
      return this.$parent.$parent.$parent;
    },
    onEdit: function onEdit() {
      return this.$parent.$parent.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.$parent.$parent.oldSurvey;
    },
    sub_items: {
      get: function get() {
        return this.$store.state.surveys.survey.sections[this.section].items[this.item].values[this.value].sub_items;
      },
      set: function set(value) {
        this.$store.commit('sub_items', {
          section: this.section,
          item: this.item,
          value: this.value,
          sub_items: value
        });
      }
    },
    has_value: function has_value() {
      return this.sectionItem.items[this.item].item_type == 2 || this.sectionItem.items[this.item].item_type == 4 || this.sectionItem.items[this.item].item_type == 5 || this.sectionItem.items[this.item].item_type == 7;
    },
    has_value_other: function has_value_other() {
      return this.sectionItem.items[this.item].item_type == 4;
    },
    has_min: function has_min() {
      return this.sectionItem.items[this.item].item_type == 1;
    },
    has_max: function has_max() {
      return this.sectionItem.items[this.item].item_type == 1;
    }
  },
  validations: {
    sub_items: {
      required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
        return this.$parent.has_sub && this.sub_items.length > 0 || this.$parent.has_row_type && this.row_type == 1 && this.sub_items.length > 0;
      }),
      $each: {
        display: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        },
        vsi_value: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_value && !model.vsi_value_other;
          })
        },
        vsi_min: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_min && !model.min_below;
          })
        },
        vsi_max: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_max && !model.max_above;
          })
        }
      }
    }
  },
  methods: {
    add: function add(sub_item) {
      if (sub_item == null) {
        var _sub_item = {
          id: 0,
          display: '',
          vsi_value: '',
          vsi_value_other: false,
          vsi_min: '',
          min_below: false,
          vsi_max: '',
          max_above: false
        };
        this.sub_items.push(_sub_item);
        this.old_sub_item = false;
      } else {
        this.sub_item = sub_item;
        this.old_sub_item = true;
      }
    },
    ok: function ok(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.subItems();
    },
    subItems: function subItems() {
      var _this = this;

      if (this.sub_items.length > 0) {
        this.$v.sub_items.$touch();
        if (this.$v.sub_items.$invalid) return;
      }

      this.$nextTick(function () {
        _this.$bvModal.hide('sub-item-' + _this.section + _this.item + _this.value);

        $('[data-toggle="tooltip"]').tooltip();
      });
    },
    reset: function reset() {
      var _this2 = this;

      this.sub_items = this.sub_items.filter(function (sub_item, i) {
        return sub_item.id == 0 && !_this2.$v.sub_items.$each[i].$invalid || sub_item.id > 0;
      });
    },
    confirmDelete: function confirmDelete(sub_item) {
      var index = this.sub_items.indexOf(sub_item);

      if (this.oldSurvey && sub_item.id > 0) {
        this.$bvModal.show('confirm-sub-item-delete-' + this.section + this.item + this.value + index);
      } else {
        this.sub_items.splice(index, 1);
      }
    },
    deleteSubItem: function deleteSubItem(sub_item) {
      var _this3 = this;

      axios["delete"]('api/survey/section/item/value/sub_item/' + sub_item.id, this.$store.state.config).then(function (response) {
        _this3.$store.dispatch('fetchSurvey');
      })["catch"](function (e) {});
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this4 = this;

    this.$nextTick(function () {
      if (!_this4.oldSurvey) _this4.sub_items = [];
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-77845729] {\n\tmargin-right:0!important;\n}\n.below-above[data-v-77845729] {\n\tmargin-top: 5px!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-572fe98d] {\n\tmargin-right:0!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=template&id=77845729&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ItemValues.vue?vue&type=template&id=77845729&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "table-reponsive" }, [
      _vm.has_values
        ? _c("table", { staticClass: "table" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Display")]),
                _vm.has_value ? _c("th", [_vm._v("Value")]) : _vm._e(),
                _vm.has_infographic ? _c("th", [_vm._v("Images")]) : _vm._e(),
                _vm.has_min ? _c("th", [_vm._v("Min")]) : _vm._e(),
                _vm.has_max ? _c("th", [_vm._v("Max")]) : _vm._e(),
                _vm.has_data_type ? _c("th", [_vm._v("Data Type")]) : _vm._e(),
                _vm.has_row_type ? _c("th", [_vm._v("Row Type")]) : _vm._e(),
                _vm.has_sub ? _c("th", [_vm._v("Sub Items")]) : _vm._e(),
                _c("th")
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.values, function(value, vi) {
                return _c("tr", { key: vi }, [
                  _c("td", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.$v.values.$each[vi].display.$model,
                            expression: "$v.values.$each[vi].display.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.values.$each[vi].display.$error
                        },
                        attrs: {
                          type: "text",
                          disabled: _vm.oldSurvey && !_vm.onEdit
                        },
                        domProps: {
                          value: _vm.$v.values.$each[vi].display.$model
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.values.$each[vi].display,
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
                        _vm._v("Display is required")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.has_value
                    ? _c("td", [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.values.$each[vi].siv_value.$model,
                                expression:
                                  "$v.values.$each[vi].siv_value.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.values.$each[vi].siv_value.$error
                            },
                            attrs: {
                              type: "text",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              value: _vm.$v.values.$each[vi].siv_value.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.values.$each[vi].siv_value,
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
                            _vm._v("Value is required")
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.has_value && _vm.has_value_other
                          ? _c("span", [
                              _vm._v("Other "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: value.siv_value_other,
                                    expression: "value.siv_value_other"
                                  }
                                ],
                                staticClass: "below-above",
                                attrs: {
                                  type: "checkbox",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: {
                                  checked: Array.isArray(value.siv_value_other)
                                    ? _vm._i(value.siv_value_other, null) > -1
                                    : value.siv_value_other
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = value.siv_value_other,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            value,
                                            "siv_value_other",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            value,
                                            "siv_value_other",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(value, "siv_value_other", $$c)
                                    }
                                  }
                                }
                              })
                            ])
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.has_infographic
                    ? _c("td", [
                        _c("div", { staticClass: "images-container" }, [
                          value.siv_infographic != null
                            ? _c("div", { staticClass: "image-container" }, [
                                _c("div", { staticClass: "controls" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "control-btn remove",
                                      attrs: { href: "javascript:;" },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeSivIg(
                                            _vm.section,
                                            _vm.item,
                                            vi
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "ion-trash-a" })]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "image siv-infographic",
                                  attrs: {
                                    id: "siv_" + _vm.section + _vm.item + vi,
                                    src: value.siv_infographic
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            staticStyle: { display: "none" },
                            attrs: {
                              type: "file",
                              id:
                                "upload-siv-infographic_" +
                                _vm.section +
                                _vm.item +
                                vi
                            },
                            on: {
                              change: function($event) {
                                return _vm.sivIg(_vm.section, _vm.item, vi)
                              }
                            }
                          }),
                          _vm._v(" "),
                          value.siv_infographic == null
                            ? _c(
                                "a",
                                {
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addSivIg(
                                        _vm.section,
                                        _vm.item,
                                        vi
                                      )
                                    }
                                  }
                                },
                                [_vm._m(0, true)]
                              )
                            : _vm._e()
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.has_min
                    ? _c("td", [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.values.$each[vi].siv_min.$model,
                                expression:
                                  "$v.values.$each[vi].siv_min.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.values.$each[vi].siv_min.$error
                            },
                            attrs: {
                              type: "text",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              value: _vm.$v.values.$each[vi].siv_min.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.values.$each[vi].siv_min,
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
                            _vm._v("Minimum is required")
                          ])
                        ]),
                        _vm._v("\n\t\t\t\t\t\tBelow "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: value.min_below,
                              expression: "value.min_below"
                            }
                          ],
                          staticClass: "below-above",
                          attrs: {
                            type: "checkbox",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: {
                            checked: Array.isArray(value.min_below)
                              ? _vm._i(value.min_below, null) > -1
                              : value.min_below
                          },
                          on: {
                            change: function($event) {
                              var $$a = value.min_below,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      value,
                                      "min_below",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      value,
                                      "min_below",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(value, "min_below", $$c)
                              }
                            }
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.has_max
                    ? _c("td", [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.values.$each[vi].siv_max.$model,
                                expression:
                                  "$v.values.$each[vi].siv_max.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.values.$each[vi].siv_max.$error
                            },
                            attrs: {
                              type: "text",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              value: _vm.$v.values.$each[vi].siv_max.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.values.$each[vi].siv_max,
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
                            _vm._v("Maximum is required")
                          ])
                        ]),
                        _vm._v("\n\t\t\t\t\t\tAbove (and) "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: value.max_above,
                              expression: "value.max_above"
                            }
                          ],
                          staticClass: "below-above",
                          attrs: {
                            type: "checkbox",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: {
                            checked: Array.isArray(value.max_above)
                              ? _vm._i(value.max_above, null) > -1
                              : value.max_above
                          },
                          on: {
                            change: function($event) {
                              var $$a = value.max_above,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      value,
                                      "max_above",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      value,
                                      "max_above",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(value, "max_above", $$c)
                              }
                            }
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.has_data_type
                    ? _c("td", [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value:
                                    _vm.$v.values.$each[vi].data_type.$model,
                                  expression:
                                    "$v.values.$each[vi].data_type.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.$v.values.$each[vi].data_type.$error
                              },
                              attrs: { disabled: _vm.oldSurvey && !_vm.onEdit },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.$v.values.$each[vi].data_type,
                                    "$model",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { disabled: "" },
                                  domProps: { value: 0 }
                                },
                                [_vm._v("Select type")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.text_input_types, function(data_type) {
                                return _c(
                                  "option",
                                  {
                                    key: data_type.id,
                                    domProps: { value: data_type.id }
                                  },
                                  [_vm._v(_vm._s(data_type.description))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v("Data type is required")
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.has_row_type
                    ? _c("td", [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value:
                                    _vm.$v.values.$each[vi].row_type.$model,
                                  expression:
                                    "$v.values.$each[vi].row_type.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.$v.values.$each[vi].row_type.$error
                              },
                              attrs: { disabled: _vm.oldSurvey && !_vm.onEdit },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.$v.values.$each[vi].row_type,
                                    "$model",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { disabled: "" },
                                  domProps: { value: null }
                                },
                                [_vm._v("Select type")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.multi_rows_row_types, function(
                                row_type
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: row_type.id,
                                    domProps: { value: row_type.id }
                                  },
                                  [_vm._v(_vm._s(row_type.description))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v("Row type is required")
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.has_sub
                    ? _c("td", [
                        _vm.row_type_is_headers(value)
                          ? _c(
                              "div",
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName: "v-b-modal",
                                        value:
                                          "sub-item-" +
                                          _vm.section +
                                          _vm.item +
                                          vi,
                                        expression:
                                          "'sub-item-'+section+item+vi"
                                      }
                                    ],
                                    staticClass: "btn btn-mini btn-default",
                                    attrs: {
                                      "data-toggle": "tooltip",
                                      "data-placement": "top",
                                      title: "Manage Sub Items for this value",
                                      disabled: !_vm.onEdit
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "ion-navicon-round"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("value-sub-items", {
                                  ref: "value-sub-items",
                                  refInFor: true,
                                  attrs: {
                                    section: _vm.section,
                                    item: _vm.item,
                                    value: vi,
                                    row_type: value.row_type
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn btn-mini btn-danger",
                          attrs: {
                            type: "button",
                            disabled: !_vm.onEdit,
                            "data-toggle": "tooltip",
                            "data-placement": "top",
                            title: "Delete this Value"
                          },
                          on: {
                            click: function($event) {
                              return _vm.confirmDelete(value)
                            }
                          }
                        },
                        [_c("i", { staticClass: "ion-close" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id:
                              "confirm-value-delete-" +
                              _vm.section +
                              _vm.item +
                              vi,
                            title: "Confirmation"
                          },
                          on: {
                            ok: function($event) {
                              return _vm.deleteValue(value)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\tAre you sure you want to delete this value?\n\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", [
                _c(
                  "td",
                  { attrs: { colspan: "9" } },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn btn-mini btn-info",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: "Add New Section Item Value",
                          disabled: !_vm.onEdit
                        },
                        on: {
                          click: function($event) {
                            return _vm.add(null)
                          }
                        }
                      },
                      [_c("i", { staticClass: "ion-plus" })]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "siv-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        "b-modal",
        {
          attrs: {
            size: "lg",
            id: "sub-item-" + _vm.section + _vm.item + _vm.value,
            title: "Sub Items",
            "ok-only": ""
          },
          on: { ok: _vm.ok, hidden: _vm.reset }
        },
        [
          _c(
            "form",
            {
              staticClass: "needs-validation",
              attrs: { novalidate: "" },
              on: {
                submit: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.subItems($event)
                }
              }
            },
            [
              _c("div", { staticClass: "table-reponsive" }, [
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Display")]),
                      _vm.has_value ? _c("th", [_vm._v("Value")]) : _vm._e(),
                      _vm.has_min ? _c("th", [_vm._v("Min")]) : _vm._e(),
                      _vm.has_max ? _c("th", [_vm._v("Max")]) : _vm._e(),
                      _c("th")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.sub_items, function(sub_item, vsi) {
                      return _c("tr", { key: vsi }, [
                        _c("td", [
                          _c("div", { staticClass: "form-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.$v.sub_items.$each[vsi].display.$model,
                                  expression:
                                    "$v.sub_items.$each[vsi].display.$model"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.$v.sub_items.$each[vsi].display.$error
                              },
                              attrs: {
                                type: "text",
                                disabled: _vm.oldSurvey && !_vm.onEdit
                              },
                              domProps: {
                                value:
                                  _vm.$v.sub_items.$each[vsi].display.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.sub_items.$each[vsi].display,
                                    "$model",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Display is required")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.has_value
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.$v.sub_items.$each[vsi].vsi_value
                                          .$model,
                                      expression:
                                        "$v.sub_items.$each[vsi].vsi_value.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.sub_items.$each[vsi].vsi_value
                                        .$error
                                  },
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  domProps: {
                                    value:
                                      _vm.$v.sub_items.$each[vsi].vsi_value
                                        .$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.sub_items.$each[vsi].vsi_value,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v("Value is required")
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.has_value && _vm.has_value_other
                                ? _c("span", [
                                    _vm._v("Other "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: sub_item.vsi_value_other,
                                          expression: "sub_item.vsi_value_other"
                                        }
                                      ],
                                      staticClass: "below-above",
                                      attrs: {
                                        type: "checkbox",
                                        disabled: _vm.oldSurvey && !_vm.onEdit
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          sub_item.vsi_value_other
                                        )
                                          ? _vm._i(
                                              sub_item.vsi_value_other,
                                              null
                                            ) > -1
                                          : sub_item.vsi_value_other
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = sub_item.vsi_value_other,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  sub_item,
                                                  "vsi_value_other",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  sub_item,
                                                  "vsi_value_other",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              sub_item,
                                              "vsi_value_other",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ])
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_min
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.$v.sub_items.$each[vsi].vsi_min
                                          .$model,
                                      expression:
                                        "$v.sub_items.$each[vsi].vsi_min.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.sub_items.$each[vsi].vsi_min.$error
                                  },
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  domProps: {
                                    value:
                                      _vm.$v.sub_items.$each[vsi].vsi_min.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.sub_items.$each[vsi].vsi_min,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v("Minimum is required")
                                ])
                              ]),
                              _vm._v("\n\t\t\t\t\t\t\t\tBelow "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: sub_item.min_below,
                                    expression: "sub_item.min_below"
                                  }
                                ],
                                staticClass: "below-above",
                                attrs: {
                                  type: "checkbox",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: {
                                  checked: Array.isArray(sub_item.min_below)
                                    ? _vm._i(sub_item.min_below, null) > -1
                                    : sub_item.min_below
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = sub_item.min_below,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            sub_item,
                                            "min_below",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            sub_item,
                                            "min_below",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(sub_item, "min_below", $$c)
                                    }
                                  }
                                }
                              })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_max
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.$v.sub_items.$each[vsi].vsi_max
                                          .$model,
                                      expression:
                                        "$v.sub_items.$each[vsi].vsi_max.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.sub_items.$each[vsi].vsi_max.$error
                                  },
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  domProps: {
                                    value:
                                      _vm.$v.sub_items.$each[vsi].vsi_max.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.sub_items.$each[vsi].vsi_max,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v("Maximum is required")
                                ])
                              ]),
                              _vm._v("\n\t\t\t\t\t\t\t\tAbove (and) "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: sub_item.max_above,
                                    expression: "sub_item.max_above"
                                  }
                                ],
                                staticClass: "below-above",
                                attrs: {
                                  type: "checkbox",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: {
                                  checked: Array.isArray(sub_item.max_above)
                                    ? _vm._i(sub_item.max_above, null) > -1
                                    : sub_item.max_above
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = sub_item.max_above,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            sub_item,
                                            "max_above",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            sub_item,
                                            "max_above",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(sub_item, "max_above", $$c)
                                    }
                                  }
                                }
                              })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn btn-mini btn-danger",
                                attrs: {
                                  type: "button",
                                  disabled: !_vm.onEdit,
                                  "data-toggle": "tooltip",
                                  "data-placement": "top",
                                  title: "Delete this Sub Item"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.confirmDelete(sub_item)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "ion-close" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-modal",
                              {
                                attrs: {
                                  id:
                                    "confirm-sub-item-delete-" +
                                    _vm.section +
                                    _vm.item +
                                    _vm.value +
                                    vsi,
                                  title: "Confirmation"
                                },
                                on: {
                                  ok: function($event) {
                                    return _vm.deleteSubItem(sub_item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\tAre you sure you want to delete this sub item?\n\t\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c(
                        "td",
                        { attrs: { colspan: "5" } },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-info",
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Add New Section Item Value Sub Item",
                                disabled: !_vm.onEdit
                              },
                              on: {
                                click: function($event) {
                                  return _vm.add(null)
                                }
                              }
                            },
                            [_c("i", { staticClass: "ion-plus" })]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/surveys/ItemValues.vue":
/*!*********************************************!*\
  !*** ./resources/js/surveys/ItemValues.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemValues_vue_vue_type_template_id_77845729_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemValues.vue?vue&type=template&id=77845729&scoped=true& */ "./resources/js/surveys/ItemValues.vue?vue&type=template&id=77845729&scoped=true&");
/* harmony import */ var _ItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemValues.vue?vue&type=script&lang=js& */ "./resources/js/surveys/ItemValues.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& */ "./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemValues_vue_vue_type_template_id_77845729_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemValues_vue_vue_type_template_id_77845729_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77845729",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/ItemValues.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/ItemValues.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/surveys/ItemValues.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemValues.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/ItemValues.vue?vue&type=template&id=77845729&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/surveys/ItemValues.vue?vue&type=template&id=77845729&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_template_id_77845729_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemValues.vue?vue&type=template&id=77845729&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=template&id=77845729&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_template_id_77845729_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_template_id_77845729_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/ValueSubItems.vue":
/*!************************************************!*\
  !*** ./resources/js/surveys/ValueSubItems.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ValueSubItems_vue_vue_type_template_id_572fe98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true& */ "./resources/js/surveys/ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true&");
/* harmony import */ var _ValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueSubItems.vue?vue&type=script&lang=js& */ "./resources/js/surveys/ValueSubItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& */ "./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ValueSubItems_vue_vue_type_template_id_572fe98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ValueSubItems_vue_vue_type_template_id_572fe98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "572fe98d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/ValueSubItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/ValueSubItems.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/surveys/ValueSubItems.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ValueSubItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/surveys/ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_template_id_572fe98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=template&id=572fe98d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_template_id_572fe98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_template_id_572fe98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);