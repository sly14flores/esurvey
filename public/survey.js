(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItemValues.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AspectValueSubItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AspectValueSubItems */ "./resources/js/surveys/AspectValueSubItems.vue");
/* harmony import */ var _mixins_ItemValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/ItemValues */ "./resources/js/surveys/mixins/ItemValues.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_ItemValues__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    AspectValueSubItems: _AspectValueSubItems__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['section', 'aspect', 'item'],
  data: function data() {
    return {
      value: {},
      old_value: false
    };
  },
  computed: {
    aspectItem: function aspectItem() {
      return this.$parent.$parent;
    },
    onEdit: function onEdit() {
      return this.$parent.$parent.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.$parent.$parent.oldSurvey;
    },
    values: {
      get: function get() {
        return this.$store.state.surveys.survey.sections[this.section].aspects[this.aspect].items[this.item].values;
      },
      set: function set(value) {
        this.$store.commit('aspect_item_values', {
          section: this.section,
          aspect: this.aspect,
          item: this.item,
          values: value
        });
      }
    },
    has_display: function has_display() {
      return this.aspectItem.items[this.item].item_type != 3 || this.aspectItem.items[this.item].item_type == 3 && this.aspectItem.items[this.item].text_is_multiple;
    },
    has_values: function has_values() {
      return this.aspectItem.items[this.item].item_type > 0;
    },
    has_value: function has_value() {
      return this.aspectItem.items[this.item].item_type == 2 || this.aspectItem.items[this.item].item_type == 4 || this.aspectItem.items[this.item].item_type == 5 || this.aspectItem.items[this.item].item_type == 6;
    },
    has_value_other: function has_value_other() {
      return this.aspectItem.items[this.item].item_type == 4;
    },
    has_images: function has_images() {
      return this.aspectItem.items[this.item].item_type == 6;
    },
    has_min: function has_min() {
      return this.aspectItem.items[this.item].item_type == 1;
    },
    has_max: function has_max() {
      return this.aspectItem.items[this.item].item_type == 1;
    },
    has_data_type: function has_data_type() {
      return this.aspectItem.items[this.item].item_type == 3;
    },
    has_row_type: function has_row_type() {
      return this.aspectItem.items[this.item].item_type == 7;
    },
    has_sub: function has_sub() {
      return this.aspectItem.items[this.item].item_type == 1 || this.aspectItem.items[this.item].item_type == 2 || this.aspectItem.items[this.item].item_type == 3 || this.aspectItem.items[this.item].item_type == 4 || this.aspectItem.items[this.item].item_type == 5 || this.aspectItem.items[this.item].item_type == 7;
    },
    has_infographic: function has_infographic() {
      return this.aspectItem.items[this.item].item_type == 6 && this.aspectItem.items[this.item].item_presentation == 2;
    },
    has_highest_lowest: function has_highest_lowest() {
      return this.aspectItem.items[this.item].item_type == 6;
    }
  },
  validations: {
    values: {
      required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
        return this.values.length > 0;
      }),
      $each: {
        display: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_display;
          })
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
      if (this.aspectItem.items[this.item].item_type == 3 && !this.aspectItem.items[this.item].text_is_multiple) {
        if (this.values.length > 0) {
          this.$root.$refs.pnotify.show({
            type: 'warning',
            title: 'Notification',
            text: 'Only 1 item is allowed, click Multiple for more than 1 items'
          });
          return;
        }
      }

      if (value == null) {
        var index = 0;

        if (this.values.length > 0) {
          var lastItem = this.values[this.values.length - 1];
          index = lastItem.index;
        }

        var _value = {
          index: ++index,
          id: 0,
          display: '',
          display_translated: '',
          siv_value: '',
          siv_value_other: false,
          siv_min: '',
          min_below: false,
          siv_max: '',
          max_above: false,
          data_type: null,
          row_type: null,
          siv_infographic: null,
          highest: false,
          lowest: false,
          required: false,
          sub_items: []
        };
        this.values.push(_value);
        this.old_value = false;
      } else {
        this.value = value;
        this.old_value = true;
      }

      this.$nextTick(function () {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    },
    confirmDelete: function confirmDelete(value) {
      var index = this.values.indexOf(value);

      if (this.oldSurvey && value.id > 0) {
        this.$bvModal.show('confirm-value-delete-' + this.section + this.aspect + this.item + index);
      } else {
        this.values.splice(index, 1);
      }
    },
    deleteValue: function deleteValue(value) {
      var _this = this;

      var index = this.values.indexOf(value);
      axios["delete"]('api/survey/section/aspect/item/value/' + value.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this.values.splice(index, 1);
      })["catch"](function (e) {});
    },
    row_type_is_headers: function row_type_is_headers(value) {
      return this.aspectItem.items[this.item].item_type == 7 && value.row_type == 1;
    },
    text_input_data_type: function text_input_data_type(value) {
      return this.aspectItem.items[this.item].item_type == 3 && value.data_type == 4;
    },
    multi_row_text: function multi_row_text(value) {
      return this.aspectItem.items[this.item].item_type == 1 || this.aspectItem.items[this.item].item_type == 2 || this.aspectItem.items[this.item].item_type == 3 && value.data_type == 4 || this.aspectItem.items[this.item].item_type == 4 || this.aspectItem.items[this.item].item_type == 5 || this.aspectItem.items[this.item].item_type == 7 && value.row_type == 1;
    },
    addSivIg: function addSivIg(s, a, i, vi) {
      $('#upload-saiv-infographic_' + s.toString() + a.toString() + i.toString() + vi.toString())[0].click();
    },
    sivIg: function sivIg(s, a, i, vi) {
      var _this2 = this;

      var file = $('#upload-saiv-infographic_' + s + a + i + vi)[0].files[0];
      var type = file.type.split("/");
      var valid_files = ["jpeg", "png"];
      if (!valid_files.includes(type[1])) return;
      var eid = "#saiv_" + s + a + i + vi; // var preview = document.querySelector(eid);

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
    removeSivIg: function removeSivIg(s, a, i, vi) {
      if (!this.onEdit) return;
      this.values[vi].siv_infographic = null;
      $('#upload-saiv-infographic_' + s + a + i + vi).val(null);
    },
    valuesInvalid: function valuesInvalid() {
      this.aspectItem.items[this.item].values_invalid = this.$v.values.$error;
    },
    highest: function highest(value) {
      if (value.highest) value.lowest = false;
    },
    lowest: function lowest(value) {
      if (value.lowest) value.highest = false;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      if (!_this3.oldSurvey) _this3.values = [];
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItems.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AspectItemValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AspectItemValues */ "./resources/js/surveys/AspectItemValues.vue");
/* harmony import */ var _mixins_Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/Items */ "./resources/js/surveys/mixins/Items.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Surveyaspects',
  mixins: [_mixins_Items__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    AspectItemValues: _AspectItemValues__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['section', 'aspect'],
  data: function data() {
    return {
      active_item: 0,
      item: {},
      old_item: false
    };
  },
  computed: {
    onEdit: function onEdit() {
      return this.$parent.$parent.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.$parent.$parent.oldSurvey;
    },
    items: {
      get: function get() {
        return this.$store.state.surveys.survey.sections[this.section].aspects[this.aspect].items;
      },
      set: function set(value) {
        this.$store.commit('aspect_items', {
          section: this.section,
          aspect: this.aspect,
          items: value
        });
      }
    }
  },
  validations: {
    items: {
      required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
        return this.items.length > 0;
      }),
      $each: {
        item_name: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        },
        item_type: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        },
        item_presentation: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return model.item_type == 6;
          })
        },
        max_checkbox_selections: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return model.item_type == 2;
          })
        }
      }
    }
  },
  methods: {
    add: function add(item) {
      if (item == null) {
        var index = 0;

        if (this.items.length > 0) {
          var lastItem = this.items[this.items.length - 1];
          index = lastItem.index;
        }

        var _item = {
          index: ++index,
          id: 0,
          required: true,
          is_shown: true,
          item_name: '',
          translated: '',
          item_type: null,
          item_presentation: null,
          max_checkbox_selections: null,
          item_infographic: null,
          item_infographic_left: null,
          item_infographic_right: null,
          item_infographic_bottom_logo: null,
          use_images: 0,
          values: [],
          is_text: false,
          text_is_multiple: false,
          has_presentation: false,
          values_invalid: false
        };
        this.items.push(_item);
        this.old_item = false;
      } else {
        this.item = item;
        this.old_item = true;
      }

      this.$nextTick(function () {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    },
    clone: function clone(item) {
      var clone_item = _.cloneDeep(item);

      var new_index = 0;

      if (this.items.length > 0) {
        var lastItem = this.items[this.items.length - 1];
        new_index = lastItem.index;
      }

      clone_item.index = ++new_index; // reset ids

      _.forEach(clone_item.values, function (value) {
        value.id = 0;

        _.forEach(value.sub_items, function (sub_item) {
          return sub_item.id = 0;
        });
      });

      clone_item.id = 0;
      clone_item.item_name = clone_item.item_name + ' Copy';
      this.items.push(clone_item);
    },
    item_type_selected: function item_type_selected(item) {
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
      item.has_presentation = item.item_type == 6;
      item.is_text = item.item_type == 3;
    },
    confirmDelete: function confirmDelete(item) {
      var index = this.items.indexOf(item);

      if (this.oldSurvey && item.id > 0) {
        this.$bvModal.show('confirm-item-delete-' + this.section + this.aspect + index);
      } else {
        this.items.splice(index, 1);
      }
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var index = this.items.indexOf(item);
      axios["delete"]('api/survey/section/aspect/item/' + item.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey'
        _this.items.splice(index, 1);
      })["catch"](function (e) {});
    },
    item_presentation_selected: function item_presentation_selected(item) {
      item.use_images = item.item_presentation == 2;
    },
    addSsiIg: function addSsiIg(s, a, si, prop) {
      if (!this.onEdit) return;
      $('#upload-sai-' + prop + '_' + s.toString() + a.toString() + si.toString())[0].click();
    },
    ssiIg: function ssiIg(s, a, si, prop) {
      var _this2 = this;

      var file = $('#upload-sai-' + prop + '_' + s + a + si)[0].files[0];
      var type = file.type.split("/");
      var valid_files = ["jpeg", "png"];
      if (!valid_files.includes(type[1])) return;
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        _this2.items[si][prop] = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }

      ;
    },
    removeSsiIg: function removeSsiIg(s, a, si, prop) {
      if (!this.onEdit) return;
      this.items[si][prop] = null;
      $('#upload-sai-' + prop + '_' + s + a + si).val(null);
    },
    checkItems: function checkItems() {
      var _this3 = this;

      this.items.forEach(function (item) {
        _this3.item_type_selected(item);
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this4 = this;

    this.$nextTick(function () {
      if (!_this4.oldSurvey) {
        _this4.items = [];
      } else {
        _this4.checkItems();
      }

      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectValueSubItems.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ValueSubItems',
  props: ['section', 'aspect', 'item', 'value', 'row_type'],
  data: function data() {
    return {
      sub_item: {},
      old_sub_item: false
    };
  },
  computed: {
    aspectItem: function aspectItem() {
      return this.$parent.$parent.$parent.$parent;
    },
    onEdit: function onEdit() {
      return this.$parent.$parent.$parent.$parent.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.$parent.$parent.$parent.$parent.oldSurvey;
    },
    sub_items: {
      get: function get() {
        return this.$store.state.surveys.survey.sections[this.section].aspects[this.aspect].items[this.item].values[this.value].sub_items;
      },
      set: function set(value) {
        this.$store.commit('aspect_item_value_sub_items', {
          section: this.section,
          aspect: this.aspect,
          item: this.item,
          value: this.value,
          sub_items: value
        });
      }
    },
    has_value: function has_value() {
      return this.aspectItem.items[this.item].item_type == 2 || this.aspectItem.items[this.item].item_type == 3 || this.aspectItem.items[this.item].item_type == 4 || this.aspectItem.items[this.item].item_type == 5 || this.aspectItem.items[this.item].item_type == 7;
    },
    has_value_other: function has_value_other() {
      return this.aspectItem.items[this.item].item_type == 3 || this.aspectItem.items[this.item].item_type == 4;
    },
    has_min: function has_min() {
      return this.aspectItem.items[this.item].item_type == 1;
    },
    has_max: function has_max() {
      return this.aspectItem.items[this.item].item_type == 1;
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
            return this.has_value;
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
        var index = this.sub_items.length;

        if (this.sub_items.length > 0) {
          var lastItem = this.sub_items[this.sub_items.length - 1];
          index = lastItem.index;
        }

        var _sub_item = {
          index: ++index,
          id: 0,
          display: '',
          display_translated: '',
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
        _this.$bvModal.hide('sub-item-' + _this.section + _this.aspect + _this.item + _this.value);

        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
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
        this.$bvModal.show('confirm-sub-item-delete-' + this.section + this.aspect + this.item + this.value + index);
      } else {
        this.sub_items.splice(index, 1);
      }
    },
    deleteSubItem: function deleteSubItem(sub_item) {
      var _this3 = this;

      var index = this.sub_items.indexOf(sub_item);
      axios["delete"]('api/survey/section/aspect/item/value/sub_item/' + sub_item.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this3.sub_items.splice(index, 1);
      })["catch"](function (e) {});
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this4 = this;

    this.$nextTick(function () {
      if (!_this4.oldSurvey) _this4.sub_items = [];
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/Introductions.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Introductions',
  data: function data() {
    return {};
  },
  computed: {
    onEdit: function onEdit() {
      return this.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.oldSurvey;
    },
    introductions: {
      get: function get() {
        return this.$store.state.surveys.survey.introductions;
      },
      set: function set(value) {
        this.$store.commit('introductions', value);
      }
    }
  },
  validations: {
    introductions: {
      required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
        return this.introductions.length > 0;
      }),
      $each: {
        content: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        }
      }
    }
  },
  methods: {
    add: function add() {
      var index = 0;

      if (this.introductions.length > 0) {
        var lastItem = this.introductions[this.introductions.length - 1];
        index = lastItem.index;
      }

      var intro = {
        index: ++index,
        id: 0,
        content: null,
        translated: null
      };
      this.introductions.push(intro);
      this.$nextTick(function () {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    },
    confirmDelete: function confirmDelete(intro) {
      var index = this.introductions.indexOf(intro);

      if (this.oldSurvey && intro.id > 0) {
        this.$bvModal.show('confirm-intro-delete-' + index);
      } else {
        this.introductions.splice(index, 1);
      }
    },
    deleteItem: function deleteItem(intro) {
      var _this = this;

      var index = this.introductions.indexOf(intro);
      axios["delete"]('api/survey/introduction/' + intro.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this.introductions.splice(index, 1);
      })["catch"](function (e) {});
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      if (!_this2.oldSurvey) _this2.introductions = [];
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

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
/* harmony import */ var _mixins_ItemValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/ItemValues */ "./resources/js/surveys/mixins/ItemValues.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_ItemValues__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    ValueSubItems: _ValueSubItems__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['section', 'item'],
  data: function data() {
    return {
      value: {},
      old_value: false
    };
  },
  computed: {
    sectionItem: function sectionItem() {
      return this.$parent.$parent;
    },
    onEdit: function onEdit() {
      return this.$parent.$parent.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.$parent.$parent.oldSurvey;
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
    has_display: function has_display() {
      return this.sectionItem.items[this.item].item_type != 3 || this.sectionItem.items[this.item].item_type == 3 && this.sectionItem.items[this.item].text_is_multiple;
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
      return this.sectionItem.items[this.item].item_type == 1 || this.sectionItem.items[this.item].item_type == 2 || this.sectionItem.items[this.item].item_type == 3 || this.sectionItem.items[this.item].item_type == 4 || this.sectionItem.items[this.item].item_type == 5 || this.sectionItem.items[this.item].item_type == 7;
    },
    has_infographic: function has_infographic() {
      return this.sectionItem.items[this.item].item_type == 6 && this.sectionItem.items[this.item].item_presentation == 2;
    },
    has_highest_lowest: function has_highest_lowest() {
      return this.sectionItem.items[this.item].item_type == 6;
    }
  },
  validations: {
    values: {
      required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
        return this.values.length > 0;
      }),
      $each: {
        display: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return this.has_display;
          })
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
      if (this.sectionItem.items[this.item].item_type == 3 && !this.sectionItem.items[this.item].text_is_multiple) {
        if (this.values.length > 0) {
          this.$root.$refs.pnotify.show({
            type: 'warning',
            title: 'Notification',
            text: 'Only 1 item is allowed, click Multiple for more than 1 items'
          });
          return;
        }
      }

      if (value == null) {
        var index = 0;

        if (this.values.length > 0) {
          var lastItem = this.values[this.values.length - 1];
          index = lastItem.index;
        }

        var _value = {
          index: ++index,
          id: 0,
          display: '',
          display_translated: '',
          siv_value: '',
          siv_value_other: false,
          siv_min: '',
          min_below: false,
          siv_max: '',
          max_above: false,
          data_type: null,
          row_type: null,
          siv_infographic: null,
          highest: false,
          lowest: false,
          required: false,
          sub_items: []
        };
        this.values.push(_value);
        this.old_value = false;
      } else {
        this.value = value;
        this.old_value = true;
      }

      this.$nextTick(function () {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
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

      var index = this.values.indexOf(value);
      axios["delete"]('api/survey/section/item/value/' + value.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this.values.splice(index, 1);
      })["catch"](function (e) {});
    },
    row_type_is_headers: function row_type_is_headers(value) {
      return this.sectionItem.items[this.item].item_type == 7 && value.row_type == 1;
    },
    text_input_data_type: function text_input_data_type(value) {
      return this.sectionItem.items[this.item].item_type == 3 && value.data_type == 4;
    },
    multi_row_text: function multi_row_text(value) {
      return this.sectionItem.items[this.item].item_type == 1 || this.sectionItem.items[this.item].item_type == 2 || this.sectionItem.items[this.item].item_type == 3 && value.data_type == 4 || this.sectionItem.items[this.item].item_type == 4 || this.sectionItem.items[this.item].item_type == 5 || this.sectionItem.items[this.item].item_type == 7 && value.row_type == 1;
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
      if (!this.onEdit) return;
      this.values[vi].siv_infographic = null;
      $('#upload-siv-infographic_' + s + i + vi).val(null);
    },
    valuesInvalid: function valuesInvalid() {
      this.sectionItem.items[this.item].values_invalid = this.$v.values.$error;
    },
    highest: function highest(value) {
      if (value.highest) value.lowest = false;
    },
    lowest: function lowest(value) {
      if (value.lowest) value.highest = false;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      if (!_this3.oldSurvey) _this3.values = [];
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionAspects.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AspectItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AspectItems */ "./resources/js/surveys/AspectItems.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SectionAspect',
  components: {
    AspectItems: _AspectItems__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      active_aspect: 0,
      aspect: {},
      old_aspect: false
    };
  },
  props: ['section'],
  computed: {
    onEdit: function onEdit() {
      return this.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.oldSurvey;
    },
    aspects: {
      get: function get() {
        return this.$store.state.surveys.survey.sections[this.section].aspects;
      },
      set: function set(value) {
        this.$store.commit('aspects', {
          section: this.section,
          aspects: value
        });
      }
    }
  },
  validations: {
    aspect: {
      aspect_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  methods: {
    aspectName: function aspectName(aspect) {
      if (aspect == null) {
        this.aspect = {
          id: 0,
          aspect_name: '',
          translated: '',
          items: []
        };
        this.old_aspect = false;
      } else {
        this.aspect = aspect;
        this.old_aspect = true;
      }

      this.$v.aspect.$reset();
      this.$refs['aspect-name'].show();
    },
    tryAdd: function tryAdd(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.add();
    },
    add: function add() {
      var _this = this;

      this.$v.aspect.$touch();
      if (this.$v.aspect.$invalid) return;

      if (this.old_aspect) {
        var index = this.aspects.indexOf(this.aspect);
        this.aspects[index] = this.aspect;
      } else {
        var new_index = 0;

        if (this.aspects.length > 0) {
          var lastItem = this.aspects[this.aspects.length - 1];
          new_index = lastItem.index;
        }

        this.aspect.index = ++new_index;
        this.aspects.push(this.aspect);
      }

      this.$nextTick(function () {
        _this.$refs['aspect-name'].hide();

        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    },
    clone: function clone(aspect) {
      var clone_aspect = _.cloneDeep(aspect);

      var new_index = 0;

      if (this.aspects.length > 0) {
        var lastItem = this.aspects[this.aspects.length - 1];
        new_index = lastItem.index;
      }

      clone_aspect.index = ++new_index; // reset ids

      _.forEach(clone_aspect.items, function (item) {
        item.id = 0;

        _.forEach(item.values, function (value) {
          value.id = 0;

          _.forEach(value.sub_items, function (sub_item) {
            return sub_item.id = 0;
          });
        });
      });

      clone_aspect.id = 0;
      clone_aspect.aspect_name = clone_aspect.aspect_name + ' Copy';
      this.aspects.push(clone_aspect);
    },
    confirmDelete: function confirmDelete(aspect) {
      var index = this.aspects.indexOf(aspect);

      if (this.oldSurvey && aspect.id > 0) {
        this.$bvModal.show('confirm-aspect-delete-' + this.section + index);
      } else {
        this.aspects.splice(index, 1);
        if (index > 0) this.active_aspect = index - 1;
      }
    },
    deleteSection: function deleteSection(aspect) {
      var _this2 = this;

      var index = this.aspects.indexOf(aspect);
      axios["delete"]('api/survey/section/aspect/' + aspect.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this2.aspects.splice(index, 1);

        if (index > 0) _this2.active_aspect = index - 1;
      })["catch"](function (e) {});
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      if (!_this3.oldSurvey) _this3.aspects = [];
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionItems.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemValues */ "./resources/js/surveys/ItemValues.vue");
/* harmony import */ var _mixins_Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/Items */ "./resources/js/surveys/mixins/Items.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SurveySections',
  mixins: [_mixins_Items__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    ItemValues: _ItemValues__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['section'],
  data: function data() {
    return {
      active_item: 0,
      item: {},
      old_item: false
    };
  },
  computed: {
    onEdit: function onEdit() {
      return this.$parent.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.$parent.oldSurvey;
    },
    items: {
      get: function get() {
        return this.$store.state.surveys.survey.sections[this.section].items;
      },
      set: function set(value) {
        this.$store.commit('items', {
          section: this.section,
          items: value
        });
      }
    }
  },
  validations: {
    items: {
      required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
        return this.items.length > 0;
      }),
      $each: {
        // item_name: {required},
        item_name: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return model.item_type == 3 && model.text_is_multiple == false;
          })
        },
        item_type: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        },
        item_presentation: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return model.item_type == 6;
          })
        },
        max_checkbox_selections: {
          required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["requiredIf"])(function (model) {
            return model.item_type == 2;
          })
        }
      }
    }
  },
  methods: {
    add: function add(item) {
      if (item == null) {
        var index = 0;

        if (this.items.length > 0) {
          var lastItem = this.items[this.items.length - 1];
          index = lastItem.index;
        }

        var _item = {
          index: ++index,
          id: 0,
          required: true,
          is_shown: true,
          item_name: '',
          translated: '',
          item_type: null,
          item_presentation: null,
          max_checkbox_selections: null,
          item_infographic: null,
          item_infographic_left: null,
          item_infographic_right: null,
          item_infographic_bottom_logo: null,
          use_images: 0,
          values: [],
          is_text: false,
          text_is_multiple: false,
          has_presentation: false,
          values_invalid: false
        };
        this.items.push(_item);
        this.old_item = false;
      } else {
        this.item = item;
        this.old_item = true;
      }

      this.$nextTick(function () {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    },
    clone: function clone(item) {
      var clone_item = _.cloneDeep(item);

      var new_index = 0;

      if (this.items.length > 0) {
        var lastItem = this.items[this.items.length - 1];
        new_index = lastItem.index;
      }

      clone_item.index = ++new_index; // reset ids

      _.forEach(clone_item.values, function (value) {
        value.id = 0;

        _.forEach(value.sub_items, function (sub_item) {
          return sub_item.id = 0;
        });
      });

      clone_item.id = 0;
      clone_item.item_name = clone_item.item_name + ' Copy';
      this.items.push(clone_item);
    },
    item_type_selected: function item_type_selected(item) {
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
      item.has_presentation = item.item_type == 6;
      item.is_text = item.item_type == 3;
    },
    confirmDelete: function confirmDelete(item) {
      var index = this.items.indexOf(item);

      if (this.oldSurvey && item.id > 0) {
        this.$bvModal.show('confirm-item-delete-' + this.section + index);
      } else {
        this.items.splice(index, 1);
      }
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var index = this.items.indexOf(item);
      axios["delete"]('api/survey/section/item/' + item.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this.items.splice(index, 1);
      })["catch"](function (e) {});
    },
    item_presentation_selected: function item_presentation_selected(item) {
      item.use_images = item.item_presentation == 2;
    },
    addSsiIg: function addSsiIg(s, si, prop) {
      if (!this.onEdit) return;
      $('#upload-ssi-' + prop + '_' + s.toString() + si.toString())[0].click();
    },
    ssiIg: function ssiIg(s, si, prop) {
      var _this2 = this;

      var file = $('#upload-ssi-' + prop + '_' + s + si)[0].files[0];
      var type = file.type.split("/");
      var valid_files = ["jpeg", "png"];
      if (!valid_files.includes(type[1])) return;
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        _this2.items[si][prop] = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }

      ;
    },
    removeSsiIg: function removeSsiIg(s, si, prop) {
      if (!this.onEdit) return;
      this.items[si][prop] = null;
      $('#upload-ssi-' + prop + '_' + s + si).val(null);
    },
    checkItems: function checkItems() {
      var _this3 = this;

      this.items.forEach(function (item) {
        _this3.item_type_selected(item);
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this4 = this;

    this.$nextTick(function () {
      if (!_this4.oldSurvey) {
        _this4.items = [];
      } else {
        _this4.checkItems();
      }

      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveyForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SurveysHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveysHeader */ "./resources/js/surveys/SurveysHeader.vue");
/* harmony import */ var _Introductions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Introductions */ "./resources/js/surveys/Introductions.vue");
/* harmony import */ var _SurveySections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SurveySections */ "./resources/js/surveys/SurveySections.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SurveyForm',
  components: {
    SurveysHeader: _SurveysHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    Introductions: _Introductions__WEBPACK_IMPORTED_MODULE_2__["default"],
    SurveySections: _SurveySections__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      onEdit: false,
      offices: []
    };
  },
  computed: {
    survey: {
      get: function get() {
        return this.$store.state.surveys.survey;
      },
      set: function set(value) {
        this.$store.commit('survey', value);
      }
    },
    oldSurvey: function oldSurvey() {
      return this.$route.params.hasOwnProperty('survey_id');
    }
  },
  validations: {
    survey: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      office: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      privacy_notice: {
        content: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        }
      },
      thankyou: {
        message: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
        }
      }
    }
  },
  methods: {
    edit: function edit() {
      this.onEdit = !this.onEdit;
    },
    close: function close() {
      this.$store.commit('survey', {});
      this.$router.push({
        name: 'surveys_list'
      });
    },
    validate: function validate() {
      var validations = [];
      this.$v.survey.$touch();
      validations.push({
        key: 0,
        form: 'survey',
        invalid: this.$v.survey.$invalid
      }); // Introductions

      this.$refs['introductions'].$v.introductions.$touch();
      validations.push({
        key: 0,
        form: 'introductions',
        invalid: this.$refs['introductions'].$v.introductions.$invalid
      }); // Section Items

      if (this.$refs['survey-sections'].$refs.hasOwnProperty('section-items')) {
        this.$refs['survey-sections'].$refs['section-items'].forEach(function (section_items, sii) {
          section_items.$v.items.$touch();
          validations.push({
            key: sii,
            form: 'section_items',
            invalid: section_items.$v.items.$invalid
          });

          if (!_.isEmpty(section_items.$refs)) {
            section_items.$refs['item-values'].forEach(function (item_values, ivi) {
              item_values.$v.values.$touch();
              validations.push({
                key: ivi,
                form: 'item_values',
                invalid: item_values.$v.values.$invalid
              });
              item_values.valuesInvalid();

              if (!_.isEmpty(item_values.$refs)) {
                item_values.$refs['value-sub-items'].forEach(function (value_sub_items, vsii) {
                  if (value_sub_items.$v.sub_items.$model.length > 0) {
                    value_sub_items.$v.sub_items.$touch();
                    validations.push({
                      key: vsii,
                      form: 'value_sub_items',
                      invalid: value_sub_items.$v.sub_items.$invalid
                    });
                  }
                });
              }
            });
          }
        });
      } // Section Aspect


      if (this.$refs['survey-sections'].$refs.hasOwnProperty('section-aspects')) {
        this.$refs['survey-sections'].$refs['section-aspects'].forEach(function (section_aspects, sai) {
          if (section_aspects.$refs.hasOwnProperty('aspect-items')) {
            section_aspects.$refs['aspect-items'].forEach(function (aspect_items, aii) {
              aspect_items.$v.items.$touch();
              validations.push({
                key: aii,
                form: 'aspect_items',
                invalid: aspect_items.$v.items.$invalid
              });

              if (!_.isEmpty(aspect_items.$refs)) {
                aspect_items.$refs['item-values'].forEach(function (aspect_item_values, ivi) {
                  aspect_item_values.$v.values.$touch();
                  validations.push({
                    key: ivi,
                    form: 'aspect_item_values',
                    invalid: aspect_item_values.$v.values.$invalid
                  });
                  aspect_item_values.valuesInvalid();

                  if (!_.isEmpty(aspect_item_values.$refs)) {
                    aspect_item_values.$refs['value-sub-items'].forEach(function (aspect_value_sub_items, vsii) {
                      if (aspect_value_sub_items.$v.sub_items.$model.length > 0) {
                        aspect_value_sub_items.$v.sub_items.$touch();
                        validations.push({
                          key: vsii,
                          form: 'aspect_value_sub_items',
                          invalid: aspect_value_sub_items.$v.sub_items.$invalid
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }

      var valid = validations.every(function (validation) {
        return validation.invalid == false;
      });
      if (!valid) this.$parent.$refs.pnotify.show({
        type: 'warning',
        title: 'Notification',
        text: 'Please finish filling up required fields'
      });
      return valid;
    },
    confirmAdd: function confirmAdd() {
      var valid = this.validate();
      if (!valid) return;
      this.$refs['confirm-add'].show();
    },
    save: function save() {
      var _this = this;

      this.$root.show();
      axios.post('api/survey', this.$store.state.surveys.survey, this.$store.state.config).then(function (response) {
        _this.$root.hide();

        _this.$router.push({
          name: 'surveys_list'
        });

        _this.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: 'New survey successfully added'
        });
      })["catch"](function (e) {
        _this.$root.hide();

        if (e.response.status == 403) _this.$parent.$refs.pnotify.show({
          type: 'error',
          title: 'Notification',
          text: e.response.data.message
        });
      });
    },
    confirmUpdate: function confirmUpdate() {
      var valid = this.validate();
      if (!valid) return;
      this.$refs['confirm-update'].show();
    },
    update: function update() {
      var _this2 = this;

      this.$root.show();
      axios.put('api/survey/' + this.$store.state.surveys.survey.id, this.$store.state.surveys.survey, this.$store.state.config).then(function (response) {
        _this2.$root.hide(); // this.$router.push({name: 'surveys_list'})


        _this2.onEdit = false;

        _this2.fetchSurvey(_this2.$store.state.surveys.survey.id);

        _this2.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: 'Survey info successfully updated'
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
    confirmDelete: function confirmDelete() {
      this.$refs['confirm-delete'].show();
    },
    deleteSurvey: function deleteSurvey() {
      var _this3 = this;

      this.$root.show();
      axios["delete"]('api/survey/' + this.$store.state.surveys.survey.id, this.$store.state.config).then(function (response) {
        _this3.$root.hide();

        _this3.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: "Survey info successfully deleted"
        });

        _this3.$router.push({
          name: 'surveys_list'
        });
      })["catch"](function (e) {
        if (e.response.status == 403) _this3.$parent.$refs.pnotify.show({
          type: 'error',
          title: 'Notification',
          text: e.response.data.message
        });

        _this3.$root.hide();
      });
    },
    fetchSurvey: function fetchSurvey(survey_id) {
      var _this4 = this;

      axios.get('api/survey/' + survey_id, this.$store.state.config).then(function (response) {
        _this4.$store.commit('survey', response.data.data);
      })["catch"](function (e) {
        _this4.$router.push({
          name: 'surveys_list'
        });
      });
    },
    fetchOffices: function fetchOffices() {
      var _this5 = this;

      axios.get('api/selections/offices', this.$store.state.config).then(function (response) {
        _this5.offices = response.data;
      })["catch"](function (e) {});
    },
    addSIg: function addSIg(el) {
      if (!this.onEdit) return;
      $('#' + el)[0].click();
    },
    sSIg: function sSIg(el, p) {
      var _this6 = this;

      var file = $('#' + el)[0].files[0];
      var type = file.type.split("/");
      var valid_files = ["jpeg", "png"];
      if (!valid_files.includes(type[1])) return;
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        if (p == 'infographic') {
          _this6.survey.thankyou.infographic = reader.result;
        } else {
          _this6.survey[p] = reader.result;
        }
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }

      ;
    },
    removeSIg: function removeSIg(el, p) {
      if (!this.onEdit) return;

      if (p == 'infographic') {
        this.survey.thankyou.infographic = null;
      } else {
        this.survey[p] = null;
      }

      $('#' + el).val(null);
    }
  },
  created: function created() {
    this.fetchOffices();
  },
  mounted: function mounted() {
    var _this7 = this;

    this.$nextTick(function () {
      if (!_this7.oldSurvey) _this7.onEdit = true;
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      var refresh = from.fullPath == '/';

      if (vm.$route.params.hasOwnProperty('survey_id')) {
        if (refresh) {
          vm.$store.dispatch('api_token').then(function () {
            vm.fetchSurvey(vm.$route.params.survey_id);
          });
        } else {
          vm.fetchSurvey(vm.$route.params.survey_id);
        }
      } else {
        vm.$store.commit('survey', {});
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveySections.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionItems */ "./resources/js/surveys/SectionItems.vue");
/* harmony import */ var _SectionAspects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionAspects */ "./resources/js/surveys/SectionAspects.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SurveySections',
  components: {
    SectionItems: _SectionItems__WEBPACK_IMPORTED_MODULE_1__["default"],
    SectionAspects: _SectionAspects__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      active_section: 0,
      section: {},
      old_section: false
    };
  },
  computed: {
    onEdit: function onEdit() {
      return this.$parent.onEdit;
    },
    oldSurvey: function oldSurvey() {
      return this.$parent.oldSurvey;
    },
    sections: {
      get: function get() {
        return this.$store.state.surveys.survey.sections;
      },
      set: function set(value) {
        this.$store.commit('sections', value);
      }
    }
  },
  validations: {
    section: {
      section_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  methods: {
    sectionName: function sectionName(section) {
      if (section == null) {
        this.section = {
          id: 0,
          section_name: '',
          translated: '',
          is_hidden: false,
          items: [],
          aspects: []
        };
        this.old_section = false;
      } else {
        this.section = section;
        this.old_section = true;
      }

      this.$v.section.$reset();
      this.$refs['section-name'].show();
    },
    tryAdd: function tryAdd(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.add();
    },
    add: function add() {
      var _this = this;

      this.$v.section.$touch();
      if (this.$v.section.$invalid) return;

      if (this.old_section) {
        var index = this.sections.indexOf(this.section);
        this.sections[index] = this.section;
      } else {
        var new_index = 0;

        if (this.sections.length > 0) {
          var lastItem = this.sections[this.sections.length - 1];
          new_index = lastItem.index;
        }

        this.section.index = ++new_index;
        this.sections.push(this.section);
      }

      this.$nextTick(function () {
        _this.$refs['section-name'].hide();

        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    },
    clone: function clone(section) {
      var clone_section = _.cloneDeep(section);

      var new_index = 0;

      if (this.sections.length > 0) {
        var lastItem = this.sections[this.sections.length - 1];
        new_index = lastItem.index;
      }

      clone_section.index = ++new_index; // reset ids

      _.forEach(clone_section.items, function (item) {
        item.id = 0;

        _.forEach(item.values, function (value) {
          value.id = 0;

          _.forEach(value.sub_items, function (sub_item) {
            return sub_item.id = 0;
          });
        });
      });

      _.forEach(clone_section.aspects, function (aspect) {
        aspect.id = 0;

        _.forEach(aspect.items, function (item) {
          item.id = 0;

          _.forEach(item.values, function (value) {
            value.id = 0;

            _.forEach(value.sub_items, function (sub_item) {
              return sub_item.id = 0;
            });
          });
        });
      });

      clone_section.id = 0;
      clone_section.section_name = clone_section.section_name + ' Copy';
      this.sections.push(clone_section);
    },
    confirmDelete: function confirmDelete(section) {
      var index = this.sections.indexOf(section);

      if (this.oldSurvey && section.id > 0) {
        this.$bvModal.show('confirm-section-delete-' + index);
      } else {
        this.sections.splice(index, 1);
        if (index > 0) this.active_section = index - 1;
      }
    },
    deleteSection: function deleteSection(section) {
      var _this2 = this;

      var index = this.sections.indexOf(section);
      axios["delete"]('api/survey/section/' + section.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this2.sections.splice(index, 1);

        if (index > 0) _this2.active_section = index - 1;
      })["catch"](function (e) {});
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      if (!_this3.oldSurvey) _this3.sections = [];
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveysHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveysHeader.vue?vue&type=script&lang=js& ***!
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
      return this.$parent.$parent.$parent.$parent;
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
      return this.sectionItem.items[this.item].item_type == 2 || this.sectionItem.items[this.item].item_type == 3 || this.sectionItem.items[this.item].item_type == 4 || this.sectionItem.items[this.item].item_type == 5 || this.sectionItem.items[this.item].item_type == 7;
    },
    has_value_other: function has_value_other() {
      return this.sectionItem.items[this.item].item_type == 3 || this.sectionItem.items[this.item].item_type == 4;
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
            return this.has_value;
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
        var index = 0;

        if (this.sub_items.length > 0) {
          var lastItem = this.sub_items[this.sub_items.length - 1];
          index = lastItem.index;
        }

        var _sub_item = {
          index: ++index,
          id: 0,
          display: '',
          display_translated: '',
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

        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
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

      var index = this.sub_items.indexOf(sub_item);
      axios["delete"]('api/survey/section/item/value/sub_item/' + sub_item.id, this.$store.state.config).then(function (response) {
        // this.$store.dispatch('fetchSurvey')
        _this3.sub_items.splice(index, 1);
      })["catch"](function (e) {});
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this4 = this;

    this.$nextTick(function () {
      if (!_this4.oldSurvey) _this4.sub_items = [];
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-e745debe] {\n\tmargin-right:0!important;\n}\n.below-above[data-v-e745debe] {\n\tmargin-top: 5px!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-70b78938] {\n\tmargin-right:0!important;\n}\n.header-pads[data-v-70b78938] {\n\tpadding: 5px 0;\n}\n.images-container-margins[data-v-70b78938] {\n\tmargin-top: 25px;\n\tmargin-left: 25px;\n}\n.add-item[data-v-70b78938] {\n\tmargin-top: 10px;\n}\n.ml-20[data-v-70b78938] {\n\tmargin-left: 20px;\n}\n.ml5[data-v-70b78938] {\n\tmargin-left: 5px;\n}\t\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-47a71d15] {\n\tmargin-right:0!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-27f26b35] {\n\tmargin-right:0!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-77845729] {\n\tmargin-right:0!important;\n}\n.below-above[data-v-77845729] {\n\tmargin-top: 5px!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.section-aspects[data-v-29952b0a] {\n\n\tmargin-top: 30px;\n}\ni[data-v-29952b0a] {\n\tmargin-right:0!important;\n}\t\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-9462ea22] {\n\tmargin-right:0!important;\n}\n.header-pads[data-v-9462ea22] {\n\tpadding: 5px 0;\n}\n.images-container-margins[data-v-9462ea22] {\n\tmargin-top: 25px;\n\tmargin-left: 25px;\n}\n.add-item[data-v-9462ea22] {\n\tmargin-top: 10px;\n}\n.ml-20[data-v-9462ea22] {\n\tmargin-left: 20px;\n}\n.ml5[data-v-9462ea22] {\n\tmargin-left: 5px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tabs-enter-active, .tabs-leave-active {\n\ttransition: all 1s;\n}\n.tabs-enter, .tabs-leave-to /* .tabs-leave-active below version 2.1.8 */ {\n\topacity: 0;\n\ttransform: translateY(-30px);\n}\n.list-enter-active, .list-leave-active {\n\ttransition: all 1s;\n}\n.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {\n\topacity: 0;\n\ttransform: translateY(30px);\n}\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity 1s;\n}\n.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {\n\topacity: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-2616bd3c] {\n\tmargin-right:0!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ni[data-v-572fe98d] {\n\tmargin-right:0!important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css&");

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
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "table-reponsive" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.has_values
            ? _c(
                "table",
                { staticClass: "table" },
                [
                  _c("thead", [
                    _c("tr", [
                      _vm.has_display &&
                      _vm.aspectItem.items[_vm.item].text_is_multiple
                        ? _c("th", [_vm._v("Required?")])
                        : _vm._e(),
                      _vm.has_display
                        ? _c("th", [_vm._v("Display")])
                        : _vm._e(),
                      _vm.has_display
                        ? _c("th", [_vm._v("Translation (Optional)")])
                        : _vm._e(),
                      _vm.has_value ? _c("th", [_vm._v("Value")]) : _vm._e(),
                      _vm.has_highest_lowest
                        ? _c("th", [_vm._v("Highest")])
                        : _vm._e(),
                      _vm.has_highest_lowest
                        ? _c("th", [_vm._v("Lowest")])
                        : _vm._e(),
                      _vm.has_infographic
                        ? _c("th", [_vm._v("Image")])
                        : _vm._e(),
                      _vm.has_min ? _c("th", [_vm._v("Min")]) : _vm._e(),
                      _vm.has_max ? _c("th", [_vm._v("Max")]) : _vm._e(),
                      _vm.has_data_type
                        ? _c("th", [_vm._v("Data Type")])
                        : _vm._e(),
                      _vm.has_row_type
                        ? _c("th", [_vm._v("Row Type")])
                        : _vm._e(),
                      _vm.has_sub ? _c("th", [_vm._v("Sub Items")]) : _vm._e(),
                      _c("th")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "transition-group",
                    { tag: "tbody", attrs: { name: "list" } },
                    _vm._l(_vm.values, function(value, vi) {
                      return _c("tr", { key: value.index }, [
                        _vm.has_display &&
                        _vm.aspectItem.items[_vm.item].text_is_multiple
                          ? _c("td", [
                              _c("div", { staticClass: "form-check" }, [
                                _c(
                                  "label",
                                  { staticClass: "form-check-label" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: value.required,
                                          expression: "value.required"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "checkbox",
                                        disabled: _vm.oldSurvey && !_vm.onEdit
                                      },
                                      domProps: {
                                        checked: Array.isArray(value.required)
                                          ? _vm._i(value.required, null) > -1
                                          : value.required
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = value.required,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  value,
                                                  "required",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  value,
                                                  "required",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(value, "required", $$c)
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_display
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.$v.values.$each[vi].display.$model,
                                      expression:
                                        "$v.values.$each[vi].display.$model"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.values.$each[vi].display.$error
                                  },
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  domProps: {
                                    value:
                                      _vm.$v.values.$each[vi].display.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.values.$each[vi].display,
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
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_display
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: value.display_translated,
                                      expression: "value.display_translated"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  domProps: { value: value.display_translated },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        value,
                                        "display_translated",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          : _vm._e(),
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
                                        _vm.$v.values.$each[vi].siv_value
                                          .$model,
                                      expression:
                                        "$v.values.$each[vi].siv_value.$model"
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
                                    value:
                                      _vm.$v.values.$each[vi].siv_value.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.values.$each[vi].siv_value,
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
                                        checked: Array.isArray(
                                          value.siv_value_other
                                        )
                                          ? _vm._i(
                                              value.siv_value_other,
                                              null
                                            ) > -1
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
                                            _vm.$set(
                                              value,
                                              "siv_value_other",
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
                        _vm.has_highest_lowest
                          ? _c("td", [
                              vi == 0 || vi == _vm.values.length - 1
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: value.highest,
                                        expression: "value.highest"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      checked: Array.isArray(value.highest)
                                        ? _vm._i(value.highest, null) > -1
                                        : value.highest
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$a = value.highest,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  value,
                                                  "highest",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  value,
                                                  "highest",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(value, "highest", $$c)
                                          }
                                        },
                                        function($event) {
                                          return _vm.highest(value)
                                        }
                                      ]
                                    }
                                  })
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_highest_lowest
                          ? _c("td", [
                              vi == 0 || vi == _vm.values.length - 1
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: value.lowest,
                                        expression: "value.lowest"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      checked: Array.isArray(value.lowest)
                                        ? _vm._i(value.lowest, null) > -1
                                        : value.lowest
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$a = value.lowest,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  value,
                                                  "lowest",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  value,
                                                  "lowest",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(value, "lowest", $$c)
                                          }
                                        },
                                        function($event) {
                                          return _vm.lowest(value)
                                        }
                                      ]
                                    }
                                  })
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_infographic
                          ? _c("td", [
                              _c("div", { staticClass: "images-container" }, [
                                value.siv_infographic != null
                                  ? _c(
                                      "div",
                                      { staticClass: "image-container" },
                                      [
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
                                                    _vm.aspect,
                                                    _vm.item,
                                                    vi
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "ion-trash-a"
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("img", {
                                          staticClass: "image siv-infographic",
                                          attrs: {
                                            id:
                                              "saiv_" +
                                              _vm.section +
                                              _vm.aspect +
                                              _vm.item +
                                              vi,
                                            src: value.siv_infographic
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("input", {
                                  staticStyle: { display: "none" },
                                  attrs: {
                                    type: "file",
                                    id:
                                      "upload-saiv-infographic_" +
                                      _vm.section +
                                      _vm.aspect +
                                      _vm.item +
                                      vi
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.sivIg(
                                        _vm.section,
                                        _vm.aspect,
                                        _vm.item,
                                        vi
                                      )
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
                                              _vm.aspect,
                                              _vm.item,
                                              vi
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "image-container new"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "siv-infographic"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "ion-plus"
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
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
                                      rawName: "v-model",
                                      value:
                                        _vm.$v.values.$each[vi].siv_min.$model,
                                      expression:
                                        "$v.values.$each[vi].siv_min.$model"
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
                                    value:
                                      _vm.$v.values.$each[vi].siv_min.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.values.$each[vi].siv_min,
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
                              _vm._v("\n\t\t\t\t\t\t\tBelow "),
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
                                      rawName: "v-model",
                                      value:
                                        _vm.$v.values.$each[vi].siv_max.$model,
                                      expression:
                                        "$v.values.$each[vi].siv_max.$model"
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
                                    value:
                                      _vm.$v.values.$each[vi].siv_max.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.values.$each[vi].siv_max,
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
                              _vm._v("\n\t\t\t\t\t\t\tAbove (and) "),
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
                                          _vm.$v.values.$each[vi].data_type
                                            .$model,
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
                                    attrs: {
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
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
                                    _vm._l(_vm.text_input_types, function(
                                      data_type
                                    ) {
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
                                          _vm.$v.values.$each[vi].row_type
                                            .$model,
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
                                    attrs: {
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
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
                              _vm.multi_row_text(value)
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
                                                _vm.aspect +
                                                _vm.item +
                                                vi,
                                              expression:
                                                "'sub-item-'+section+aspect+item+vi"
                                            }
                                          ],
                                          staticClass:
                                            "btn btn-mini btn-default",
                                          attrs: {
                                            "data-toggle": "tooltip",
                                            "data-placement": "top",
                                            title:
                                              "Manage Sub Items for this value",
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
                                      _c("aspect-value-sub-items", {
                                        ref: "value-sub-items",
                                        refInFor: true,
                                        attrs: {
                                          section: _vm.section,
                                          aspect: _vm.aspect,
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
                                    _vm.aspect +
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
                                  "\n\t\t\t\t\t\t\t\tAre you sure you want to delete this value?\n\t\t\t\t\t\t\t"
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
                ],
                1
              )
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=template&id=70b78938&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectItems.vue?vue&type=template&id=70b78938&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c("h4", { staticClass: "sub-title" }, [_vm._v("\n\t\tAspect Items\n\t")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "transition-group",
            { tag: "div", attrs: { id: "accordion", name: "list" } },
            _vm._l(_vm.items, function(item, ii) {
              return _c("div", { key: item.index, staticClass: "card mb-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-header header-pads",
                    attrs: {
                      id: "item-heading-" + _vm.section + _vm.aspect + ii
                    }
                  },
                  [
                    _c("h5", { staticClass: "mb-0" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-link",
                          attrs: {
                            "data-toggle": "collapse",
                            "data-target":
                              "#item-" + _vm.section + _vm.aspect + ii,
                            "aria-expanded": ii == _vm.active_item,
                            "aria-controls":
                              "item-" + _vm.section + _vm.aspect + ii
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t  Aspect Item #" +
                              _vm._s(ii + 1) +
                              " "
                          ),
                          _vm.$v.items.$each[ii].$error || item.values_invalid
                            ? _c(
                                "label",
                                { staticClass: "label label-danger" },
                                [_vm._v("Please fill up required fields")]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-20 form-check add-item" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.required,
                                expression: "item.required"
                              }
                            ],
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              checked: Array.isArray(item.required)
                                ? _vm._i(item.required, null) > -1
                                : item.required
                            },
                            on: {
                              change: function($event) {
                                var $$a = item.required,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        item,
                                        "required",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        item,
                                        "required",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(item, "required", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" Required\n\t\t\t\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("label", { staticClass: "form-check-label ml5" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.is_shown,
                                expression: "item.is_shown"
                              }
                            ],
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              checked: Array.isArray(item.is_shown)
                                ? _vm._i(item.is_shown, null) > -1
                                : item.is_shown
                            },
                            on: {
                              change: function($event) {
                                var $$a = item.is_shown,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        item,
                                        "is_shown",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        item,
                                        "is_shown",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(item, "is_shown", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" Show?\n\t\t\t\t\t\t\t")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    class: { show: ii == _vm.active_item },
                    attrs: {
                      id: "item-" + _vm.section + _vm.aspect + ii,
                      "aria-labelledby":
                        "item-heading-" + _vm.section + _vm.aspect + ii,
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        { staticClass: "f-right" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-warning",
                              attrs: {
                                type: "button",
                                disabled: !_vm.onEdit,
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Clone this Aspect Item"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.clone(item)
                                }
                              }
                            },
                            [_c("i", { staticClass: "ion-ios-copy-outline" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-danger",
                              attrs: {
                                type: "button",
                                disabled: !_vm.onEdit,
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Delete this Aspect Item"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDelete(item)
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
                                  "confirm-item-delete-" +
                                  _vm.section +
                                  _vm.aspect +
                                  ii,
                                title: "Confirmation"
                              },
                              on: {
                                ok: function($event) {
                                  return _vm.deleteItem(item)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tAre you sure you want to delete this aspect item?\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix" }),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "needs-validation",
                          attrs: { novalidate: "" }
                        },
                        [
                          _c("div", { staticClass: "form-row" }, [
                            _c("div", { staticClass: "form-group col-lg-4" }, [
                              _c("label", [_vm._v("Name/Question")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value:
                                      _vm.$v.items.$each[ii].item_name.$model,
                                    expression:
                                      "$v.items.$each[ii].item_name.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid":
                                    _vm.$v.items.$each[ii].item_name.$error
                                },
                                attrs: {
                                  rows: "5",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: {
                                  value: _vm.$v.items.$each[ii].item_name.$model
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.items.$each[ii].item_name,
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
                            _c("div", { staticClass: "form-group col-lg-4" }, [
                              _c("label", [_vm._v("Translation (Optional)")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.translated,
                                    expression: "item.translated"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  rows: "5",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: { value: item.translated },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "translated",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-lg-4" }, [
                              _c("label", [_vm._v("Type")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value:
                                        _vm.$v.items.$each[ii].item_type.$model,
                                      expression:
                                        "$v.items.$each[ii].item_type.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.items.$each[ii].item_type.$error
                                  },
                                  attrs: {
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.items.$each[ii].item_type,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.item_type_selected(item)
                                      }
                                    ]
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
                                  _vm._l(_vm.item_types, function(item_type) {
                                    return _c(
                                      "option",
                                      {
                                        key: item_type.id,
                                        domProps: { value: item_type.id }
                                      },
                                      [_vm._v(_vm._s(item_type.description))]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              item.is_text
                                ? _c(
                                    "div",
                                    { staticClass: "form-check add-item" },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "form-check-label" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.text_is_multiple,
                                                expression:
                                                  "item.text_is_multiple"
                                              }
                                            ],
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              disabled:
                                                _vm.oldSurvey && !_vm.onEdit
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                item.text_is_multiple
                                              )
                                                ? _vm._i(
                                                    item.text_is_multiple,
                                                    null
                                                  ) > -1
                                                : item.text_is_multiple
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = item.text_is_multiple,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        item,
                                                        "text_is_multiple",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        item,
                                                        "text_is_multiple",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    item,
                                                    "text_is_multiple",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(
                                            " Multiple\n\t\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Type is required")
                              ]),
                              _vm._v(" "),
                              item.item_type == 2
                                ? _c(
                                    "div",
                                    { staticClass: "form-group mt-1" },
                                    [
                                      _c("label", [
                                        _vm._v("Maximum selections allowed")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.$v.items.$each[ii]
                                                .max_checkbox_selections.$model,
                                            expression:
                                              "$v.items.$each[ii].max_checkbox_selections.$model"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.items.$each[ii]
                                              .max_checkbox_selections.$error
                                        },
                                        attrs: {
                                          type: "number",
                                          disabled: _vm.oldSurvey && !_vm.onEdit
                                        },
                                        domProps: {
                                          value:
                                            _vm.$v.items.$each[ii]
                                              .max_checkbox_selections.$model
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.$v.items.$each[ii]
                                                .max_checkbox_selections,
                                              "$model",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "Please enter maximum selections allowed"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-row" }, [
                            item.has_presentation
                              ? _c(
                                  "div",
                                  { staticClass: "form-group col-lg-4" },
                                  [
                                    _c("label", [_vm._v("Presentation")]),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model.trim",
                                            value:
                                              _vm.$v.items.$each[ii]
                                                .item_presentation.$model,
                                            expression:
                                              "$v.items.$each[ii].item_presentation.$model",
                                            modifiers: { trim: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.items.$each[ii]
                                              .item_presentation.$error
                                        },
                                        attrs: {
                                          disabled: _vm.oldSurvey && !_vm.onEdit
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.$v.items.$each[ii]
                                                  .item_presentation,
                                                "$model",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            },
                                            function($event) {
                                              return _vm.item_presentation_selected(
                                                item
                                              )
                                            }
                                          ]
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "" },
                                            domProps: { value: null }
                                          },
                                          [_vm._v("Select presentation")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.presentations, function(
                                          presentation
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: presentation.id,
                                              domProps: {
                                                value: presentation.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(presentation.description)
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [_vm._v("Presentation is required")]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass: "nav nav-tabs",
                          attrs: { role: "tablist" }
                        },
                        [
                          _c(
                            "li",
                            {
                              staticClass: "nav-item",
                              attrs: { role: "presentation" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link active",
                                  attrs: {
                                    id:
                                      "values-tab-" +
                                      _vm.section +
                                      _vm.aspect +
                                      ii,
                                    "data-toggle": "tab",
                                    href:
                                      "#values-" +
                                      _vm.section +
                                      _vm.aspect +
                                      ii,
                                    role: "tab",
                                    "aria-controls":
                                      "values-" + _vm.section + _vm.aspect + ii,
                                    "aria-selected": "true"
                                  }
                                },
                                [_vm._v("Values")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "nav-item",
                              attrs: { role: "presentation" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    id:
                                      "infographic-tab-" +
                                      _vm.section +
                                      _vm.aspect +
                                      ii,
                                    "data-toggle": "tab",
                                    href:
                                      "#infographic-" +
                                      _vm.section +
                                      _vm.aspect +
                                      ii,
                                    role: "tab",
                                    "aria-controls":
                                      "infographic-" +
                                      _vm.section +
                                      _vm.aspect +
                                      ii,
                                    "aria-selected": "false"
                                  }
                                },
                                [_vm._v("Infographic")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "tab-content" }, [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade show active",
                            attrs: {
                              id: "values-" + _vm.section + _vm.aspect + ii,
                              role: "tabpanel",
                              "aria-labelledby":
                                "values-tab-" + _vm.section + _vm.aspect + ii
                            }
                          },
                          [
                            _c("aspect-item-values", {
                              ref: "item-values",
                              refInFor: true,
                              attrs: {
                                section: _vm.section,
                                aspect: _vm.aspect,
                                item: ii
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id:
                                "infographic-" + _vm.section + _vm.aspect + ii,
                              role: "tabpanel",
                              "aria-labelledby":
                                "infographic-tab-" +
                                _vm.section +
                                _vm.aspect +
                                ii
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-lg-4" }, [
                                _vm._m(0, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "images-container" }, [
                                  item.item_infographic_left != null
                                    ? _c(
                                        "div",
                                        { staticClass: "image-container" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "controls" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "control-btn remove",
                                                  attrs: {
                                                    href: "javascript:;"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeSsiIg(
                                                        _vm.section,
                                                        _vm.aspect,
                                                        ii,
                                                        "item_infographic_left"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "ion-trash-a"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticClass:
                                              "image ssi-infographic",
                                            attrs: {
                                              src: item.item_infographic_left
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticStyle: { display: "none" },
                                    attrs: {
                                      type: "file",
                                      id:
                                        "upload-sai-item_infographic_left_" +
                                        _vm.section +
                                        _vm.aspect +
                                        ii
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.ssiIg(
                                          _vm.section,
                                          _vm.aspect,
                                          ii,
                                          "item_infographic_left"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  item.item_infographic_left == null
                                    ? _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addSsiIg(
                                                _vm.section,
                                                _vm.aspect,
                                                ii,
                                                "item_infographic_left"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._m(1, true)]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-lg-4" }, [
                                _vm._m(2, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "images-container" }, [
                                  item.item_infographic_right != null
                                    ? _c(
                                        "div",
                                        { staticClass: "image-container" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "controls" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "control-btn remove",
                                                  attrs: {
                                                    href: "javascript:;"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeSsiIg(
                                                        _vm.section,
                                                        _vm.aspect,
                                                        ii,
                                                        "item_infographic_right"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "ion-trash-a"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticClass:
                                              "image ssi-infographic",
                                            attrs: {
                                              src: item.item_infographic_right
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticStyle: { display: "none" },
                                    attrs: {
                                      type: "file",
                                      id:
                                        "upload-sai-item_infographic_right_" +
                                        _vm.section +
                                        _vm.aspect +
                                        ii
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.ssiIg(
                                          _vm.section,
                                          _vm.aspect,
                                          ii,
                                          "item_infographic_right"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  item.item_infographic_right == null
                                    ? _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addSsiIg(
                                                _vm.section,
                                                _vm.aspect,
                                                ii,
                                                "item_infographic_right"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._m(3, true)]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-lg-4" }, [
                                _vm._m(4, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "images-container" }, [
                                  item.item_infographic_bottom_logo != null
                                    ? _c(
                                        "div",
                                        { staticClass: "image-container" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "controls" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "control-btn remove",
                                                  attrs: {
                                                    href: "javascript:;"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeSsiIg(
                                                        _vm.section,
                                                        _vm.aspect,
                                                        ii,
                                                        "item_infographic_bottom_logo"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "ion-trash-a"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticClass:
                                              "image ssi-infographic",
                                            attrs: {
                                              src:
                                                item.item_infographic_bottom_logo
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticStyle: { display: "none" },
                                    attrs: {
                                      type: "file",
                                      id:
                                        "upload-sai-item_infographic_bottom_logo_" +
                                        _vm.section +
                                        _vm.aspect +
                                        ii
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.ssiIg(
                                          _vm.section,
                                          _vm.aspect,
                                          ii,
                                          "item_infographic_bottom_logo"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  item.item_infographic_bottom_logo == null
                                    ? _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addSsiIg(
                                                _vm.section,
                                                _vm.aspect,
                                                ii,
                                                "item_infographic_bottom_logo"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._m(5, true)]
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "add-item" },
            [
              _c(
                "b-button",
                {
                  staticClass: "btn btn-mini btn-info",
                  attrs: {
                    "data-toggle": "tooltip",
                    "data-placement": "top",
                    title: "Add New aspect Item",
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
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "mt-2" }, [
      _c("strong", [_vm._v("Left")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "mt-2" }, [
      _c("strong", [_vm._v("Right (Mobile only)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "mt-2" }, [
      _c("strong", [_vm._v("Logo at bottom (Mobile only)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            id: "sub-item-" + _vm.section + _vm.aspect + _vm.item + _vm.value,
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
                _c(
                  "table",
                  { staticClass: "table" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Display")]),
                        _c("th", [_vm._v("Translation (Optional)")]),
                        _vm.has_value ? _c("th", [_vm._v("Value")]) : _vm._e(),
                        _vm.has_min ? _c("th", [_vm._v("Min")]) : _vm._e(),
                        _vm.has_max ? _c("th", [_vm._v("Max")]) : _vm._e(),
                        _c("th")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "transition-group",
                      { tag: "tbody", attrs: { name: "list" } },
                      _vm._l(_vm.sub_items, function(sub_item, vsi) {
                        return _c("tr", { key: sub_item.index }, [
                          _c("td", [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.$v.sub_items.$each[vsi].display
                                        .$model,
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
                          _c("td", [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: sub_item.display_translated,
                                    expression: "sub_item.display_translated"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: {
                                  value: sub_item.display_translated
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      sub_item,
                                      "display_translated",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
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
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Value is required")]
                                  )
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
                                            expression:
                                              "sub_item.vsi_value_other"
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
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
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
                                        _vm.$v.sub_items.$each[vsi].vsi_min
                                          .$error
                                    },
                                    attrs: {
                                      type: "text",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      value:
                                        _vm.$v.sub_items.$each[vsi].vsi_min
                                          .$model
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
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Minimum is required")]
                                  )
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
                                        _vm.$v.sub_items.$each[vsi].vsi_max
                                          .$error
                                    },
                                    attrs: {
                                      type: "text",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      value:
                                        _vm.$v.sub_items.$each[vsi].vsi_max
                                          .$model
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
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Maximum is required")]
                                  )
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
                                      _vm.aspect +
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
                  ],
                  1
                )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=template&id=27f26b35&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/Introductions.vue?vue&type=template&id=27f26b35&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "m-b-20" }, [
      _c(
        "h4",
        { staticClass: "sub-title" },
        [
          _vm._v("\n\t\t\tIntroductions\n\t\t\t"),
          _c(
            "b-button",
            {
              staticClass: "btn btn-mini btn-success",
              attrs: {
                "data-toggle": "tooltip",
                "data-placement": "top",
                title: "Add New Introduction",
                disabled: !_vm.onEdit
              },
              on: {
                click: function($event) {
                  return _vm.add()
                }
              }
            },
            [_c("i", { staticClass: "ion-plus" })]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c(
            "table",
            { staticClass: "table" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "transition-group",
                { tag: "tbody", attrs: { name: "list" } },
                _vm._l(_vm.introductions, function(intro, i) {
                  return _c("tr", { key: intro.index }, [
                    _c("td", [_vm._v(_vm._s(i + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "form-group" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value:
                                _vm.$v.introductions.$each[i].content.$model,
                              expression:
                                "$v.introductions.$each[i].content.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid":
                              _vm.$v.introductions.$each[i].content.$error
                          },
                          attrs: {
                            rows: "2",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: {
                            value: _vm.$v.introductions.$each[i].content.$model
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.introductions.$each[i].content,
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
                          _vm._v("Content is required")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "form-group" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: intro.translated,
                              expression: "intro.translated"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            rows: "2",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: { value: intro.translated },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(intro, "translated", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
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
                              title: "Delete this introduction"
                            },
                            on: {
                              click: function($event) {
                                return _vm.confirmDelete(intro)
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
                              id: "confirm-intro-delete-" + i,
                              title: "Confirmation"
                            },
                            on: {
                              ok: function($event) {
                                return _vm.deleteItem(intro)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\tAre you sure you want to delete this introduction?\n\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _c("th", [_vm._v("Content")]),
        _c("th", [_vm._v("Translation (Optional)")]),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



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
    _c(
      "div",
      { staticClass: "table-reponsive" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.has_values
            ? _c(
                "table",
                { staticClass: "table" },
                [
                  _c("thead", [
                    _c("tr", [
                      _vm.has_display &&
                      _vm.sectionItem.items[_vm.item].text_is_multiple
                        ? _c("th", [_vm._v("Required?")])
                        : _vm._e(),
                      _vm.has_display
                        ? _c("th", [_vm._v("Display")])
                        : _vm._e(),
                      _vm.has_display
                        ? _c("th", [_vm._v("Translation (Optional)")])
                        : _vm._e(),
                      _vm.has_value ? _c("th", [_vm._v("Value")]) : _vm._e(),
                      _vm.has_highest_lowest
                        ? _c("th", [_vm._v("Highest")])
                        : _vm._e(),
                      _vm.has_highest_lowest
                        ? _c("th", [_vm._v("Lowest")])
                        : _vm._e(),
                      _vm.has_infographic
                        ? _c("th", [_vm._v("Image")])
                        : _vm._e(),
                      _vm.has_min ? _c("th", [_vm._v("Min")]) : _vm._e(),
                      _vm.has_max ? _c("th", [_vm._v("Max")]) : _vm._e(),
                      _vm.has_data_type
                        ? _c("th", [_vm._v("Data Type")])
                        : _vm._e(),
                      _vm.has_row_type
                        ? _c("th", [_vm._v("Row Type")])
                        : _vm._e(),
                      _vm.has_sub ? _c("th", [_vm._v("Sub Items")]) : _vm._e(),
                      _c("th")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "transition-group",
                    { tag: "tbody", attrs: { name: "list" } },
                    _vm._l(_vm.values, function(value, vi) {
                      return _c("tr", { key: value.index }, [
                        _vm.has_display &&
                        _vm.sectionItem.items[_vm.item].text_is_multiple
                          ? _c("td", [
                              _c("div", { staticClass: "form-check" }, [
                                _c(
                                  "label",
                                  { staticClass: "form-check-label" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: value.required,
                                          expression: "value.required"
                                        }
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "checkbox",
                                        disabled: _vm.oldSurvey && !_vm.onEdit
                                      },
                                      domProps: {
                                        checked: Array.isArray(value.required)
                                          ? _vm._i(value.required, null) > -1
                                          : value.required
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = value.required,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  value,
                                                  "required",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  value,
                                                  "required",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(value, "required", $$c)
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_display
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value:
                                        _vm.$v.values.$each[vi].display.$model,
                                      expression:
                                        "$v.values.$each[vi].display.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.values.$each[vi].display.$error
                                  },
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  domProps: {
                                    value:
                                      _vm.$v.values.$each[vi].display.$model
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
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_display
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: value.display_translated,
                                      expression: "value.display_translated"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  domProps: { value: value.display_translated },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        value,
                                        "display_translated",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_value
                          ? _c("td", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value:
                                        _vm.$v.values.$each[vi].siv_value
                                          .$model,
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
                                    value:
                                      _vm.$v.values.$each[vi].siv_value.$model
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
                                        checked: Array.isArray(
                                          value.siv_value_other
                                        )
                                          ? _vm._i(
                                              value.siv_value_other,
                                              null
                                            ) > -1
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
                                            _vm.$set(
                                              value,
                                              "siv_value_other",
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
                        _vm.has_highest_lowest
                          ? _c("td", [
                              vi == 0 || vi == _vm.values.length - 1
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: value.highest,
                                        expression: "value.highest"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      checked: Array.isArray(value.highest)
                                        ? _vm._i(value.highest, null) > -1
                                        : value.highest
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$a = value.highest,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  value,
                                                  "highest",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  value,
                                                  "highest",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(value, "highest", $$c)
                                          }
                                        },
                                        function($event) {
                                          return _vm.highest(value)
                                        }
                                      ]
                                    }
                                  })
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_highest_lowest
                          ? _c("td", [
                              vi == 0 || vi == _vm.values.length - 1
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: value.lowest,
                                        expression: "value.lowest"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      checked: Array.isArray(value.lowest)
                                        ? _vm._i(value.lowest, null) > -1
                                        : value.lowest
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$a = value.lowest,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  value,
                                                  "lowest",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  value,
                                                  "lowest",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(value, "lowest", $$c)
                                          }
                                        },
                                        function($event) {
                                          return _vm.lowest(value)
                                        }
                                      ]
                                    }
                                  })
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.has_infographic
                          ? _c("td", [
                              _c("div", { staticClass: "images-container" }, [
                                value.siv_infographic != null
                                  ? _c(
                                      "div",
                                      { staticClass: "image-container" },
                                      [
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
                                            [
                                              _c("i", {
                                                staticClass: "ion-trash-a"
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("img", {
                                          staticClass: "image siv-infographic",
                                          attrs: {
                                            id:
                                              "siv_" +
                                              _vm.section +
                                              _vm.item +
                                              vi,
                                            src: value.siv_infographic
                                          }
                                        })
                                      ]
                                    )
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
                                      return _vm.sivIg(
                                        _vm.section,
                                        _vm.item,
                                        vi
                                      )
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
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "image-container new"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "siv-infographic"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "ion-plus"
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
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
                                      value:
                                        _vm.$v.values.$each[vi].siv_min.$model,
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
                                    value:
                                      _vm.$v.values.$each[vi].siv_min.$model
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
                              _vm._v("\n\t\t\t\t\t\t\tBelow "),
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
                                      value:
                                        _vm.$v.values.$each[vi].siv_max.$model,
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
                                    value:
                                      _vm.$v.values.$each[vi].siv_max.$model
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
                              _vm._v("\n\t\t\t\t\t\t\tAbove (and) "),
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
                                          _vm.$v.values.$each[vi].data_type
                                            .$model,
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
                                    attrs: {
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
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
                                    _vm._l(_vm.text_input_types, function(
                                      data_type
                                    ) {
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
                                          _vm.$v.values.$each[vi].row_type
                                            .$model,
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
                                    attrs: {
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
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
                              _vm.multi_row_text(value)
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
                                          staticClass:
                                            "btn btn-mini btn-default",
                                          attrs: {
                                            "data-toggle": "tooltip",
                                            "data-placement": "top",
                                            title:
                                              "Manage Sub Items for this value",
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
                                  "\n\t\t\t\t\t\t\t\tAre you sure you want to delete this value?\n\t\t\t\t\t\t\t"
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
                ],
                1
              )
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "section-aspects" },
    [
      _c(
        "h4",
        { staticClass: "sub-title" },
        [
          _vm._v("\n\t\tSection Aspects "),
          _c(
            "b-button",
            {
              staticClass: "btn btn-mini btn-info",
              attrs: {
                "data-toggle": "tooltip",
                "data-placement": "top",
                title: "Add New Section Aspect",
                disabled: !_vm.onEdit
              },
              on: {
                click: function($event) {
                  return _vm.aspectName(null)
                }
              }
            },
            [_c("i", { staticClass: "ion-plus" })]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition-group",
        {
          tag: "ul",
          staticClass: "nav nav-tabs md-tabs tabs-left b-none",
          attrs: { name: "tabs", role: "tablist" }
        },
        _vm._l(_vm.aspects, function(aspect, ai) {
          return _c("li", { key: aspect.index, staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                class: { active: _vm.active_aspect == ai },
                attrs: {
                  "data-toggle": "tab",
                  href: "#aspect-" + ai,
                  role: "tab"
                },
                on: {
                  click: function($event) {
                    _vm.active_aspect = ai
                  }
                }
              },
              [_vm._v(_vm._s(aspect.aspect_name))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "slide" })
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "transition-group",
        {
          tag: "div",
          staticClass: "tab-content tabs-left-content card-block",
          staticStyle: { width: "100%" },
          attrs: { name: "tabs" }
        },
        _vm._l(_vm.aspects, function(aspect, ai) {
          return _c(
            "div",
            {
              key: aspect.index,
              staticClass: "tab-pane",
              class: { active: _vm.active_aspect == ai },
              attrs: { id: "aspect-" + ai, role: "tabpanel" }
            },
            [
              _c(
                "div",
                { staticClass: "f-right" },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "btn btn-mini btn-success",
                      attrs: {
                        type: "button",
                        disabled: !_vm.onEdit,
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        title: "Edit this Aspect"
                      },
                      on: {
                        click: function($event) {
                          return _vm.aspectName(aspect)
                        }
                      }
                    },
                    [_c("i", { staticClass: "ion-edit" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn btn-mini btn-warning",
                      attrs: {
                        type: "button",
                        disabled: !_vm.onEdit,
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        title: "Clone this Aspect"
                      },
                      on: {
                        click: function($event) {
                          return _vm.clone(aspect)
                        }
                      }
                    },
                    [_c("i", { staticClass: "ion-ios-copy-outline" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn btn-mini btn-danger",
                      attrs: {
                        type: "button",
                        disabled: !_vm.onEdit,
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        title: "Delete this Aspect"
                      },
                      on: {
                        click: function($event) {
                          return _vm.confirmDelete(aspect)
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
                        id: "confirm-aspect-delete-" + _vm.section + ai,
                        title: "Confirmation"
                      },
                      on: {
                        ok: function($event) {
                          return _vm.deleteSection(aspect)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\tAre you sure you want to delete this aspect?\n\t\t\t\t"
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "clearfix" }),
              _vm._v(" "),
              _c("aspect-items", {
                ref: "aspect-items",
                refInFor: true,
                attrs: { section: _vm.section, aspect: ai }
              })
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "aspect-name",
          attrs: { title: "Aspect Name" },
          on: { ok: _vm.tryAdd }
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
                  return _vm.add($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.aspect.aspect_name.$model,
                      expression: "$v.aspect.aspect_name.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.$v.aspect.$error },
                  attrs: { type: "text", placeholder: "Name" },
                  domProps: { value: _vm.$v.aspect.aspect_name.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.aspect.aspect_name,
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
                  _vm._v("Aspect name is required")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.aspect.translated,
                      expression: "aspect.translated"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Translation (Optional)"
                  },
                  domProps: { value: _vm.aspect.translated },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.aspect, "translated", $event.target.value)
                    }
                  }
                })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=template&id=9462ea22&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SectionItems.vue?vue&type=template&id=9462ea22&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("h4", { staticClass: "sub-title" }, [_vm._v("\n\t\tSection Items\n\t")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "transition-group",
            { tag: "div", attrs: { id: "accordion", name: "list" } },
            _vm._l(_vm.items, function(item, ii) {
              return _c("div", { key: item.index, staticClass: "card mb-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-header header-pads",
                    attrs: { id: "item-heading-" + _vm.section + ii }
                  },
                  [
                    _c("h5", { staticClass: "mb-0" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-link",
                          attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#item-" + _vm.section + ii,
                            "aria-expanded": ii == _vm.active_item,
                            "aria-controls": "item-" + _vm.section + ii
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t  Section Item #" +
                              _vm._s(ii + 1) +
                              " "
                          ),
                          _vm.$v.items.$each[ii].$error || item.values_invalid
                            ? _c(
                                "label",
                                { staticClass: "label label-danger" },
                                [_vm._v("Please fill up required fields")]
                              )
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ml-20 form-check add-item" }, [
                      _c("label", { staticClass: "form-check-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: item.required,
                              expression: "item.required"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            type: "checkbox",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: {
                            checked: Array.isArray(item.required)
                              ? _vm._i(item.required, null) > -1
                              : item.required
                          },
                          on: {
                            change: function($event) {
                              var $$a = item.required,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      item,
                                      "required",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      item,
                                      "required",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(item, "required", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" Required\n\t\t\t\t\t\t\t")
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "form-check-label ml5" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: item.is_shown,
                              expression: "item.is_shown"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            type: "checkbox",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: {
                            checked: Array.isArray(item.is_shown)
                              ? _vm._i(item.is_shown, null) > -1
                              : item.is_shown
                          },
                          on: {
                            change: function($event) {
                              var $$a = item.is_shown,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      item,
                                      "is_shown",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      item,
                                      "is_shown",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(item, "is_shown", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" Show?\n\t\t\t\t\t\t\t")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    class: { show: ii == _vm.active_item },
                    attrs: {
                      id: "item-" + _vm.section + ii,
                      "aria-labelledby": "item-heading-" + _vm.section + ii,
                      "data-parent": "#accordion"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        { staticClass: "f-right" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-warning",
                              attrs: {
                                type: "button",
                                disabled: !_vm.onEdit,
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Clone Section Item"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.clone(item)
                                }
                              }
                            },
                            [_c("i", { staticClass: "ion-ios-copy-outline" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-danger",
                              attrs: {
                                type: "button",
                                disabled: !_vm.onEdit,
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Delete this Section Item"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDelete(item)
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
                                id: "confirm-item-delete-" + _vm.section + ii,
                                title: "Confirmation"
                              },
                              on: {
                                ok: function($event) {
                                  return _vm.deleteItem(item)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tAre you sure you want to delete this section item?\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix" }),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "needs-validation",
                          attrs: { novalidate: "" }
                        },
                        [
                          _c("div", { staticClass: "form-row" }, [
                            _c("div", { staticClass: "form-group col-lg-4" }, [
                              _c("label", [_vm._v("Name/Question")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value:
                                      _vm.$v.items.$each[ii].item_name.$model,
                                    expression:
                                      "$v.items.$each[ii].item_name.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid":
                                    _vm.$v.items.$each[ii].item_name.$error
                                },
                                attrs: {
                                  rows: "5",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: {
                                  value: _vm.$v.items.$each[ii].item_name.$model
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.$v.items.$each[ii].item_name,
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
                            _c("div", { staticClass: "form-group col-lg-4" }, [
                              _c("label", [_vm._v("Translation (Optional)")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.translated,
                                    expression: "item.translated"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  rows: "5",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: { value: item.translated },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "translated",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-lg-4" }, [
                              _c("label", [_vm._v("Type")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value:
                                        _vm.$v.items.$each[ii].item_type.$model,
                                      expression:
                                        "$v.items.$each[ii].item_type.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.items.$each[ii].item_type.$error
                                  },
                                  attrs: {
                                    disabled: _vm.oldSurvey && !_vm.onEdit
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.items.$each[ii].item_type,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.item_type_selected(item)
                                      }
                                    ]
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
                                  _vm._l(_vm.item_types, function(item_type) {
                                    return _c(
                                      "option",
                                      {
                                        key: item_type.id,
                                        domProps: { value: item_type.id }
                                      },
                                      [_vm._v(_vm._s(item_type.description))]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              item.is_text
                                ? _c(
                                    "div",
                                    { staticClass: "form-check add-item" },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "form-check-label" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.text_is_multiple,
                                                expression:
                                                  "item.text_is_multiple"
                                              }
                                            ],
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              disabled:
                                                _vm.oldSurvey && !_vm.onEdit
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                item.text_is_multiple
                                              )
                                                ? _vm._i(
                                                    item.text_is_multiple,
                                                    null
                                                  ) > -1
                                                : item.text_is_multiple
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = item.text_is_multiple,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        item,
                                                        "text_is_multiple",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        item,
                                                        "text_is_multiple",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    item,
                                                    "text_is_multiple",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(
                                            " Multiple\n\t\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Type is required")
                              ]),
                              _vm._v(" "),
                              item.item_type == 2
                                ? _c(
                                    "div",
                                    { staticClass: "form-group mt-1" },
                                    [
                                      _c("label", [
                                        _vm._v("Maximum selections allowed")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.$v.items.$each[ii]
                                                .max_checkbox_selections.$model,
                                            expression:
                                              "$v.items.$each[ii].max_checkbox_selections.$model"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.items.$each[ii]
                                              .max_checkbox_selections.$error
                                        },
                                        attrs: {
                                          type: "number",
                                          disabled: _vm.oldSurvey && !_vm.onEdit
                                        },
                                        domProps: {
                                          value:
                                            _vm.$v.items.$each[ii]
                                              .max_checkbox_selections.$model
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.$v.items.$each[ii]
                                                .max_checkbox_selections,
                                              "$model",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "Please enter maximum selections allowed"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-row" }, [
                            item.has_presentation
                              ? _c(
                                  "div",
                                  { staticClass: "form-group col-lg-4" },
                                  [
                                    _c("label", [_vm._v("Presentation")]),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model.trim",
                                            value:
                                              _vm.$v.items.$each[ii]
                                                .item_presentation.$model,
                                            expression:
                                              "$v.items.$each[ii].item_presentation.$model",
                                            modifiers: { trim: true }
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.items.$each[ii]
                                              .item_presentation.$error
                                        },
                                        attrs: {
                                          disabled: _vm.oldSurvey && !_vm.onEdit
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.$v.items.$each[ii]
                                                  .item_presentation,
                                                "$model",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            },
                                            function($event) {
                                              return _vm.item_presentation_selected(
                                                item
                                              )
                                            }
                                          ]
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "" },
                                            domProps: { value: null }
                                          },
                                          [_vm._v("Select presentation")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.presentations, function(
                                          presentation
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: presentation.id,
                                              domProps: {
                                                value: presentation.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(presentation.description)
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [_vm._v("Presentation is required")]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass: "nav nav-tabs",
                          attrs: { role: "tablist" }
                        },
                        [
                          _c(
                            "li",
                            {
                              staticClass: "nav-item",
                              attrs: { role: "presentation" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link active",
                                  attrs: {
                                    id: "values-tab-" + _vm.section + ii,
                                    "data-toggle": "tab",
                                    href: "#values-" + _vm.section + ii,
                                    role: "tab",
                                    "aria-controls":
                                      "values-" + _vm.section + ii,
                                    "aria-selected": "true"
                                  }
                                },
                                [_vm._v("Values")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "nav-item",
                              attrs: { role: "presentation" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    id: "infographic-tab-" + _vm.section + ii,
                                    "data-toggle": "tab",
                                    href: "#infographic-" + _vm.section + ii,
                                    role: "tab",
                                    "aria-controls":
                                      "infographic-" + _vm.section + ii,
                                    "aria-selected": "false"
                                  }
                                },
                                [_vm._v("Infographics")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "tab-content" }, [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade show active",
                            attrs: {
                              id: "values-" + _vm.section + ii,
                              role: "tabpanel",
                              "aria-labelledby":
                                "values-tab-" + _vm.section + ii
                            }
                          },
                          [
                            _c("item-values", {
                              ref: "item-values",
                              refInFor: true,
                              attrs: { section: _vm.section, item: ii }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "infographic-" + _vm.section + ii,
                              role: "tabpanel",
                              "aria-labelledby":
                                "infographic-tab-" + _vm.section + ii
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-lg-4" }, [
                                _vm._m(0, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "images-container" }, [
                                  item.item_infographic_left != null
                                    ? _c(
                                        "div",
                                        { staticClass: "image-container" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "controls" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "control-btn remove",
                                                  attrs: {
                                                    href: "javascript:;"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeSsiIg(
                                                        _vm.section,
                                                        ii,
                                                        "item_infographic_left"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "ion-trash-a"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticClass:
                                              "image ssi-infographic",
                                            attrs: {
                                              src: item.item_infographic_left
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticStyle: { display: "none" },
                                    attrs: {
                                      type: "file",
                                      id:
                                        "upload-ssi-item_infographic_left_" +
                                        _vm.section +
                                        ii
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.ssiIg(
                                          _vm.section,
                                          ii,
                                          "item_infographic_left"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  item.item_infographic_left == null
                                    ? _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addSsiIg(
                                                _vm.section,
                                                ii,
                                                "item_infographic_left"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._m(1, true)]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-lg-4" }, [
                                _vm._m(2, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "images-container" }, [
                                  item.item_infographic_right != null
                                    ? _c(
                                        "div",
                                        { staticClass: "image-container" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "controls" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "control-btn remove",
                                                  attrs: {
                                                    href: "javascript:;"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeSsiIg(
                                                        _vm.section,
                                                        ii,
                                                        "item_infographic_right"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "ion-trash-a"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticClass:
                                              "image ssi-infographic",
                                            attrs: {
                                              src: item.item_infographic_right
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticStyle: { display: "none" },
                                    attrs: {
                                      type: "file",
                                      id:
                                        "upload-ssi-item_infographic_right_" +
                                        _vm.section +
                                        ii
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.ssiIg(
                                          _vm.section,
                                          ii,
                                          "item_infographic_right"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  item.item_infographic_right == null
                                    ? _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addSsiIg(
                                                _vm.section,
                                                ii,
                                                "item_infographic_right"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._m(3, true)]
                                      )
                                    : _vm._e()
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-lg-4" }, [
                                _vm._m(4, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "images-container" }, [
                                  item.item_infographic_bottom_logo != null
                                    ? _c(
                                        "div",
                                        { staticClass: "image-container" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "controls" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "control-btn remove",
                                                  attrs: {
                                                    href: "javascript:;"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeSsiIg(
                                                        _vm.section,
                                                        ii,
                                                        "item_infographic_bottom_logo"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "ion-trash-a"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticClass:
                                              "image ssi-infographic",
                                            attrs: {
                                              src:
                                                item.item_infographic_bottom_logo
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticStyle: { display: "none" },
                                    attrs: {
                                      type: "file",
                                      id:
                                        "upload-ssi-item_infographic_bottom_logo_" +
                                        _vm.section +
                                        ii
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.ssiIg(
                                          _vm.section,
                                          ii,
                                          "item_infographic_bottom_logo"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  item.item_infographic_bottom_logo == null
                                    ? _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addSsiIg(
                                                _vm.section,
                                                ii,
                                                "item_infographic_bottom_logo"
                                              )
                                            }
                                          }
                                        },
                                        [_vm._m(5, true)]
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "add-item" },
            [
              _c(
                "b-button",
                {
                  staticClass: "btn btn-mini btn-info",
                  attrs: {
                    "data-toggle": "tooltip",
                    "data-placement": "top",
                    title: "Add New Section Item",
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
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "mt-2" }, [
      _c("strong", [_vm._v("Left")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "mt-2" }, [
      _c("strong", [_vm._v("Right (Mobile only)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "mt-2" }, [
      _c("strong", [_vm._v("Logo at bottom (Mobile only)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=template&id=7c815bd2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveyForm.vue?vue&type=template&id=7c815bd2& ***!
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
          _c("surveys-header", { attrs: { isList: false } }),
          _vm._v(" "),
          _c("div", { staticClass: "page-body" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h5", [_vm._v("Survey Form")]),
                _vm._v(" "),
                _c("form", { staticClass: "f-right" }, [
                  _c("div", { staticClass: "right-icon-control" }, [
                    _vm.oldSurvey
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
                    _vm.oldSurvey
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
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.survey.name.$model,
                              expression: "$v.survey.name.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.survey.name.$error },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.survey.name.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.survey.name,
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
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Description")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.survey.description,
                              expression: "survey.description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            disabled: _vm.oldSurvey && !_vm.onEdit
                          },
                          domProps: { value: _vm.survey.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.survey,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Office")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.survey.office.$model,
                                expression: "$v.survey.office.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.$v.survey.office.$error
                            },
                            attrs: { disabled: _vm.oldSurvey && !_vm.onEdit },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.$v.survey.office,
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
                              [_vm._v("Select office")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.offices, function(office) {
                              return _c(
                                "option",
                                {
                                  key: office.id,
                                  domProps: { value: office.id }
                                },
                                [_vm._v(_vm._s(office.name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Office is required")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Background Image (1536x864)")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "images-container images-container-margins"
                          },
                          [
                            _vm.survey.background != null
                              ? _c("div", { staticClass: "image-container" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "control-btn remove",
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            return _vm.removeSIg(
                                              "upload-background-infographic",
                                              "background"
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "ion-trash-a" })]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass: "image ssi-infographic",
                                    attrs: { src: _vm.survey.background }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: {
                                type: "file",
                                id: "upload-background-infographic"
                              },
                              on: {
                                change: function($event) {
                                  return _vm.sSIg(
                                    "upload-background-infographic",
                                    "background"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.survey.background == null
                              ? _c(
                                  "a",
                                  {
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function($event) {
                                        return _vm.addSIg(
                                          "upload-background-infographic"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._m(0)]
                                )
                              : _vm._e()
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Welcome Left Infographic")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "images-container images-container-margins"
                          },
                          [
                            _vm.survey.left_infographic != null
                              ? _c("div", { staticClass: "image-container" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "control-btn remove",
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            return _vm.removeSIg(
                                              "upload-left_infographic-infographic",
                                              "left_infographic"
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "ion-trash-a" })]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass: "image ssi-infographic",
                                    attrs: { src: _vm.survey.left_infographic }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: {
                                type: "file",
                                id: "upload-left_infographic-infographic"
                              },
                              on: {
                                change: function($event) {
                                  return _vm.sSIg(
                                    "upload-left_infographic-infographic",
                                    "left_infographic"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.survey.left_infographic == null
                              ? _c(
                                  "a",
                                  {
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function($event) {
                                        return _vm.addSIg(
                                          "upload-left_infographic-infographic"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._m(1)]
                                )
                              : _vm._e()
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Welcome Right Infographic")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "images-container images-container-margins"
                          },
                          [
                            _vm.survey.right_infographic != null
                              ? _c("div", { staticClass: "image-container" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "control-btn remove",
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            return _vm.removeSIg(
                                              "upload-right_infographic-infographic",
                                              "right_infographic"
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "ion-trash-a" })]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass: "image ssi-infographic",
                                    attrs: { src: _vm.survey.right_infographic }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: {
                                type: "file",
                                id: "upload-right_infographic-infographic"
                              },
                              on: {
                                change: function($event) {
                                  return _vm.sSIg(
                                    "upload-right_infographic-infographic",
                                    "right_infographic"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.survey.right_infographic == null
                              ? _c(
                                  "a",
                                  {
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function($event) {
                                        return _vm.addSIg(
                                          "upload-right_infographic-infographic"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._m(2)]
                                )
                              : _vm._e()
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("div", { staticClass: "form-check" }, [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.survey.include_office,
                                  expression: "survey.include_office"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "checkbox",
                                disabled: _vm.oldSurvey && !_vm.onEdit
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.survey.include_office
                                )
                                  ? _vm._i(_vm.survey.include_office, null) > -1
                                  : _vm.survey.include_office
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.survey.include_office,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.survey,
                                          "include_office",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.survey,
                                          "include_office",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.survey, "include_office", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" Include office\n\t\t\t\t\t\t\t\t\t")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("div", { staticClass: "form-check" }, [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.survey.fullscreen_mobile,
                                  expression: "survey.fullscreen_mobile"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "checkbox",
                                disabled: _vm.oldSurvey && !_vm.onEdit
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.survey.fullscreen_mobile
                                )
                                  ? _vm._i(_vm.survey.fullscreen_mobile, null) >
                                    -1
                                  : _vm.survey.fullscreen_mobile
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.survey.fullscreen_mobile,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.survey,
                                          "fullscreen_mobile",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.survey,
                                          "fullscreen_mobile",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(
                                      _vm.survey,
                                      "fullscreen_mobile",
                                      $$c
                                    )
                                  }
                                }
                              }
                            }),
                            _vm._v(" Fullscreen on mobile\n\t\t\t\t\t\t\t\t\t")
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-b-20" }, [
                      _c("h4", { staticClass: "sub-title" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tPrivacy notice\n\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "form-group col-lg-6" }, [
                          _c("label", [_vm._v("Content")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.survey.privacy_notice.content.$model,
                                expression:
                                  "$v.survey.privacy_notice.content.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.survey.privacy_notice.content.$error
                            },
                            attrs: {
                              rows: "5",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              value: _vm.$v.survey.privacy_notice.content.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.survey.privacy_notice.content,
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
                            _vm._v("Content is required")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-lg-6" }, [
                          _c("label", [_vm._v("Translation (Optional)")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.survey.privacy_notice.translated,
                                expression: "survey.privacy_notice.translated"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              rows: "5",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              value: _vm.survey.privacy_notice.translated
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.survey.privacy_notice,
                                  "translated",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("introductions", { ref: "introductions" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-b-20" }, [
                      _c("h4", { staticClass: "sub-title" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tThank you message\n\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "form-group col-lg-4" }, [
                          _c("label", [_vm._v("Infographic")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "images-container images-container-margins"
                            },
                            [
                              _vm.survey.thankyou.infographic != null
                                ? _c(
                                    "div",
                                    { staticClass: "image-container" },
                                    [
                                      _c("div", { staticClass: "controls" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "control-btn remove",
                                            attrs: { href: "javascript:;" },
                                            on: {
                                              click: function($event) {
                                                return _vm.removeSIg(
                                                  "upload-survey-infographic",
                                                  "infographic"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "ion-trash-a"
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("img", {
                                        staticClass: "image ssi-infographic",
                                        attrs: {
                                          src: _vm.survey.thankyou.infographic
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("input", {
                                staticStyle: { display: "none" },
                                attrs: {
                                  type: "file",
                                  id: "upload-survey-infographic"
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.sSIg(
                                      "upload-survey-infographic",
                                      "infographic"
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.survey.thankyou.infographic == null
                                ? _c(
                                    "a",
                                    {
                                      attrs: { href: "javascript:;" },
                                      on: {
                                        click: function($event) {
                                          return _vm.addSIg(
                                            "upload-survey-infographic"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._m(3)]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-lg-4" }, [
                          _c("label", [_vm._v("Message")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.survey.thankyou.message.$model,
                                expression: "$v.survey.thankyou.message.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.survey.thankyou.message.$error
                            },
                            attrs: {
                              rows: "5",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: {
                              value: _vm.$v.survey.thankyou.message.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.survey.thankyou.message,
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
                            _vm._v("Message is required")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-lg-4" }, [
                          _c("label", [_vm._v("Translated (Optional)")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.survey.thankyou.translated,
                                expression: "survey.thankyou.translated"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              rows: "5",
                              disabled: _vm.oldSurvey && !_vm.onEdit
                            },
                            domProps: { value: _vm.survey.thankyou.translated },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.survey.thankyou,
                                  "translated",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("survey-sections", { ref: "survey-sections" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "f-right m-t-20" }, [
                      !_vm.oldSurvey
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
                      _vm.oldSurvey
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
                        [_vm._v(_vm._s(_vm.oldSurvey ? "Close" : "Cancel"))]
                      )
                    ])
                  ],
                  1
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
        [_vm._v("\n\t\tConfirm survey add?\n\t")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-update",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.update }
        },
        [_vm._v("\n\t\tAre you sure you want to update this survey?\n\t")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-delete",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.deleteSurvey }
        },
        [_vm._v("\n\t\tAre you sure you want to delete this survey?\n\t")]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-container new" }, [
      _c("div", { staticClass: "ssi-infographic" }, [
        _c("i", { staticClass: "ion-plus" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "m-b-20" }, [
        _c(
          "h4",
          { staticClass: "sub-title" },
          [
            _vm._v("\n\t\t\tSections\n\t\t\t"),
            _c(
              "b-button",
              {
                staticClass: "btn btn-mini btn-success",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Add New Section",
                  disabled: !_vm.onEdit
                },
                on: {
                  click: function($event) {
                    return _vm.sectionName(null)
                  }
                }
              },
              [_c("i", { staticClass: "ion-plus" })]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [
              _c(
                "transition-group",
                {
                  tag: "ul",
                  staticClass: "nav nav-tabs",
                  attrs: { name: "tabs", role: "tablist" }
                },
                _vm._l(_vm.sections, function(section, si) {
                  return _c(
                    "li",
                    { key: section.index, staticClass: "nav-item" },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          class: { active: _vm.active_section == si },
                          attrs: {
                            "data-toggle": "tab",
                            href: "#section-" + si,
                            role: "tab",
                            "aria-controls": "section-" + si,
                            "aria-selected": _vm.active_section == si
                          },
                          on: {
                            click: function($event) {
                              _vm.active_section = si
                            }
                          }
                        },
                        [_vm._v(_vm._s(section.section_name))]
                      )
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "transition-group",
                {
                  tag: "div",
                  staticClass: "tab-content",
                  attrs: { name: "tabs" }
                },
                _vm._l(_vm.sections, function(section, si) {
                  return _c(
                    "div",
                    {
                      key: section.index,
                      staticClass: "tab-pane fade",
                      class: {
                        show: _vm.active_section == si,
                        active: _vm.active_section == si
                      },
                      attrs: {
                        id: "#section-" + si,
                        role: "tabpanel",
                        "aria-labelledby": "section-" + si + "-tab"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "f-right",
                          staticStyle: { "margin-top": "3px" }
                        },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-success",
                              attrs: {
                                type: "button",
                                disabled: !_vm.onEdit,
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Edit this Section"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.sectionName(section)
                                }
                              }
                            },
                            [_c("i", { staticClass: "ion-edit" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-warning",
                              attrs: {
                                type: "button",
                                disabled: !_vm.onEdit,
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Clone this Section"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.clone(section)
                                }
                              }
                            },
                            [_c("i", { staticClass: "ion-ios-copy-outline" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "btn btn-mini btn-danger",
                              attrs: {
                                type: "button",
                                disabled: !_vm.onEdit,
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Delete this Section"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDelete(section)
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
                                id: "confirm-section-delete-" + si,
                                title: "Confirmation"
                              },
                              on: {
                                ok: function($event) {
                                  return _vm.deleteSection(section)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\tAre you sure you want to delete this section?\n\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix" }),
                      _vm._v(" "),
                      _c("section-items", {
                        ref: "section-items",
                        refInFor: true,
                        attrs: { section: si }
                      }),
                      _vm._v(" "),
                      _c("section-aspects", {
                        ref: "section-aspects",
                        refInFor: true,
                        attrs: { section: si }
                      })
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "section-name",
          attrs: { title: "Section" },
          on: { ok: _vm.tryAdd }
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
                  return _vm.add($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.section.section_name.$model,
                      expression: "$v.section.section_name.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.$v.section.$error },
                  attrs: { type: "text", placeholder: "Name" },
                  domProps: { value: _vm.$v.section.section_name.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.section.section_name,
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
                  _vm._v("Section name is required")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.section.translated,
                      expression: "section.translated"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Translation (Optional)"
                  },
                  domProps: { value: _vm.section.translated },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.section, "translated", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "border-checkbox-group border-checkbox-group-info"
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.section.is_hidden,
                          expression: "section.is_hidden"
                        }
                      ],
                      staticClass: "border-checkbox",
                      attrs: { type: "checkbox", id: "section-is-hidden" },
                      domProps: {
                        checked: Array.isArray(_vm.section.is_hidden)
                          ? _vm._i(_vm.section.is_hidden, null) > -1
                          : _vm.section.is_hidden
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.section.is_hidden,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.section,
                                  "is_hidden",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.section,
                                  "is_hidden",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.section, "is_hidden", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "border-checkbox-label",
                        attrs: { for: "section-is-hidden'" }
                      },
                      [_vm._v("Hidden section name in coduct survey form")]
                    )
                  ]
                )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveysHeader.vue?vue&type=template&id=6be44d62&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/surveys/SurveysHeader.vue?vue&type=template&id=6be44d62& ***!
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
                    attrs: { to: "/survey", tag: "button" }
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
          _c("h4", [_vm._v("Manage Surveys")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Surveys")])
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
                _c(
                  "table",
                  { staticClass: "table" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Display")]),
                        _c("th", [_vm._v("Translation (Optional)")]),
                        _vm.has_value ? _c("th", [_vm._v("Value")]) : _vm._e(),
                        _vm.has_min ? _c("th", [_vm._v("Min")]) : _vm._e(),
                        _vm.has_max ? _c("th", [_vm._v("Max")]) : _vm._e(),
                        _c("th")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "transition-group",
                      { tag: "tbody", attrs: { name: "list" } },
                      _vm._l(_vm.sub_items, function(sub_item, vsi) {
                        return _c("tr", { key: sub_item.index }, [
                          _c("td", [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.$v.sub_items.$each[vsi].display
                                        .$model,
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
                          _c("td", [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: sub_item.display_translated,
                                    expression: "sub_item.display_translated"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  disabled: _vm.oldSurvey && !_vm.onEdit
                                },
                                domProps: {
                                  value: sub_item.display_translated
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      sub_item,
                                      "display_translated",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
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
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Value is required")]
                                  )
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
                                            expression:
                                              "sub_item.vsi_value_other"
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
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
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
                                        _vm.$v.sub_items.$each[vsi].vsi_min
                                          .$error
                                    },
                                    attrs: {
                                      type: "text",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      value:
                                        _vm.$v.sub_items.$each[vsi].vsi_min
                                          .$model
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
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Minimum is required")]
                                  )
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
                                        _vm.$v.sub_items.$each[vsi].vsi_max
                                          .$error
                                    },
                                    attrs: {
                                      type: "text",
                                      disabled: _vm.oldSurvey && !_vm.onEdit
                                    },
                                    domProps: {
                                      value:
                                        _vm.$v.sub_items.$each[vsi].vsi_max
                                          .$model
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
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Maximum is required")]
                                  )
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
                  ],
                  1
                )
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

/***/ "./resources/js/surveys/AspectItemValues.vue":
/*!***************************************************!*\
  !*** ./resources/js/surveys/AspectItemValues.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AspectItemValues_vue_vue_type_template_id_e745debe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true& */ "./resources/js/surveys/AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true&");
/* harmony import */ var _AspectItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AspectItemValues.vue?vue&type=script&lang=js& */ "./resources/js/surveys/AspectItemValues.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AspectItemValues_vue_vue_type_style_index_0_id_e745debe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css& */ "./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AspectItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AspectItemValues_vue_vue_type_template_id_e745debe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AspectItemValues_vue_vue_type_template_id_e745debe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e745debe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/AspectItemValues.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/AspectItemValues.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/surveys/AspectItemValues.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItemValues.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_style_index_0_id_e745debe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=style&index=0&id=e745debe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_style_index_0_id_e745debe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_style_index_0_id_e745debe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_style_index_0_id_e745debe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_style_index_0_id_e745debe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_style_index_0_id_e745debe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/surveys/AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_template_id_e745debe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItemValues.vue?vue&type=template&id=e745debe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_template_id_e745debe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItemValues_vue_vue_type_template_id_e745debe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/AspectItems.vue":
/*!**********************************************!*\
  !*** ./resources/js/surveys/AspectItems.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AspectItems_vue_vue_type_template_id_70b78938_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AspectItems.vue?vue&type=template&id=70b78938&scoped=true& */ "./resources/js/surveys/AspectItems.vue?vue&type=template&id=70b78938&scoped=true&");
/* harmony import */ var _AspectItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AspectItems.vue?vue&type=script&lang=js& */ "./resources/js/surveys/AspectItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AspectItems_vue_vue_type_style_index_0_id_70b78938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css& */ "./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AspectItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AspectItems_vue_vue_type_template_id_70b78938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AspectItems_vue_vue_type_template_id_70b78938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70b78938",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/AspectItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/AspectItems.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/surveys/AspectItems.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_style_index_0_id_70b78938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=style&index=0&id=70b78938&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_style_index_0_id_70b78938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_style_index_0_id_70b78938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_style_index_0_id_70b78938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_style_index_0_id_70b78938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_style_index_0_id_70b78938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/AspectItems.vue?vue&type=template&id=70b78938&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/surveys/AspectItems.vue?vue&type=template&id=70b78938&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_template_id_70b78938_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectItems.vue?vue&type=template&id=70b78938&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectItems.vue?vue&type=template&id=70b78938&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_template_id_70b78938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectItems_vue_vue_type_template_id_70b78938_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/AspectValueSubItems.vue":
/*!******************************************************!*\
  !*** ./resources/js/surveys/AspectValueSubItems.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AspectValueSubItems_vue_vue_type_template_id_47a71d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true& */ "./resources/js/surveys/AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true&");
/* harmony import */ var _AspectValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AspectValueSubItems.vue?vue&type=script&lang=js& */ "./resources/js/surveys/AspectValueSubItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AspectValueSubItems_vue_vue_type_style_index_0_id_47a71d15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css& */ "./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AspectValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AspectValueSubItems_vue_vue_type_template_id_47a71d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AspectValueSubItems_vue_vue_type_template_id_47a71d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47a71d15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/AspectValueSubItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/AspectValueSubItems.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/surveys/AspectValueSubItems.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectValueSubItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_style_index_0_id_47a71d15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=style&index=0&id=47a71d15&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_style_index_0_id_47a71d15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_style_index_0_id_47a71d15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_style_index_0_id_47a71d15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_style_index_0_id_47a71d15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_style_index_0_id_47a71d15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/surveys/AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_template_id_47a71d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/AspectValueSubItems.vue?vue&type=template&id=47a71d15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_template_id_47a71d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AspectValueSubItems_vue_vue_type_template_id_47a71d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/Introductions.vue":
/*!************************************************!*\
  !*** ./resources/js/surveys/Introductions.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Introductions_vue_vue_type_template_id_27f26b35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Introductions.vue?vue&type=template&id=27f26b35&scoped=true& */ "./resources/js/surveys/Introductions.vue?vue&type=template&id=27f26b35&scoped=true&");
/* harmony import */ var _Introductions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Introductions.vue?vue&type=script&lang=js& */ "./resources/js/surveys/Introductions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Introductions_vue_vue_type_style_index_0_id_27f26b35_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css& */ "./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Introductions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Introductions_vue_vue_type_template_id_27f26b35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Introductions_vue_vue_type_template_id_27f26b35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "27f26b35",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/Introductions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/Introductions.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/surveys/Introductions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Introductions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_style_index_0_id_27f26b35_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=style&index=0&id=27f26b35&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_style_index_0_id_27f26b35_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_style_index_0_id_27f26b35_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_style_index_0_id_27f26b35_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_style_index_0_id_27f26b35_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_style_index_0_id_27f26b35_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/Introductions.vue?vue&type=template&id=27f26b35&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/surveys/Introductions.vue?vue&type=template&id=27f26b35&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_template_id_27f26b35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Introductions.vue?vue&type=template&id=27f26b35&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/Introductions.vue?vue&type=template&id=27f26b35&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_template_id_27f26b35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Introductions_vue_vue_type_template_id_27f26b35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ItemValues.vue?vue&type=style&index=0&id=77845729&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemValues_vue_vue_type_style_index_0_id_77845729_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/js/surveys/SectionAspects.vue":
/*!*************************************************!*\
  !*** ./resources/js/surveys/SectionAspects.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionAspects_vue_vue_type_template_id_29952b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true& */ "./resources/js/surveys/SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true&");
/* harmony import */ var _SectionAspects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionAspects.vue?vue&type=script&lang=js& */ "./resources/js/surveys/SectionAspects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SectionAspects_vue_vue_type_style_index_0_id_29952b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css& */ "./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SectionAspects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionAspects_vue_vue_type_template_id_29952b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectionAspects_vue_vue_type_template_id_29952b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29952b0a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/SectionAspects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/SectionAspects.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/surveys/SectionAspects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionAspects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_style_index_0_id_29952b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=style&index=0&id=29952b0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_style_index_0_id_29952b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_style_index_0_id_29952b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_style_index_0_id_29952b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_style_index_0_id_29952b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_style_index_0_id_29952b0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/surveys/SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_template_id_29952b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionAspects.vue?vue&type=template&id=29952b0a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_template_id_29952b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionAspects_vue_vue_type_template_id_29952b0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/SectionItems.vue":
/*!***********************************************!*\
  !*** ./resources/js/surveys/SectionItems.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionItems_vue_vue_type_template_id_9462ea22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionItems.vue?vue&type=template&id=9462ea22&scoped=true& */ "./resources/js/surveys/SectionItems.vue?vue&type=template&id=9462ea22&scoped=true&");
/* harmony import */ var _SectionItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionItems.vue?vue&type=script&lang=js& */ "./resources/js/surveys/SectionItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SectionItems_vue_vue_type_style_index_0_id_9462ea22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css& */ "./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SectionItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionItems_vue_vue_type_template_id_9462ea22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectionItems_vue_vue_type_template_id_9462ea22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9462ea22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/SectionItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/SectionItems.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/surveys/SectionItems.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_style_index_0_id_9462ea22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=style&index=0&id=9462ea22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_style_index_0_id_9462ea22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_style_index_0_id_9462ea22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_style_index_0_id_9462ea22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_style_index_0_id_9462ea22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_style_index_0_id_9462ea22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/SectionItems.vue?vue&type=template&id=9462ea22&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/surveys/SectionItems.vue?vue&type=template&id=9462ea22&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_template_id_9462ea22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionItems.vue?vue&type=template&id=9462ea22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SectionItems.vue?vue&type=template&id=9462ea22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_template_id_9462ea22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionItems_vue_vue_type_template_id_9462ea22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/SurveyForm.vue":
/*!*********************************************!*\
  !*** ./resources/js/surveys/SurveyForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SurveyForm_vue_vue_type_template_id_7c815bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyForm.vue?vue&type=template&id=7c815bd2& */ "./resources/js/surveys/SurveyForm.vue?vue&type=template&id=7c815bd2&");
/* harmony import */ var _SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveyForm.vue?vue&type=script&lang=js& */ "./resources/js/surveys/SurveyForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SurveyForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SurveyForm.vue?vue&type=style&index=0&lang=css& */ "./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveyForm_vue_vue_type_template_id_7c815bd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SurveyForm_vue_vue_type_template_id_7c815bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/SurveyForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/SurveyForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/surveys/SurveyForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/SurveyForm.vue?vue&type=template&id=7c815bd2&":
/*!****************************************************************************!*\
  !*** ./resources/js/surveys/SurveyForm.vue?vue&type=template&id=7c815bd2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_template_id_7c815bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveyForm.vue?vue&type=template&id=7c815bd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveyForm.vue?vue&type=template&id=7c815bd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_template_id_7c815bd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveyForm_vue_vue_type_template_id_7c815bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/SurveySections.vue":
/*!*************************************************!*\
  !*** ./resources/js/surveys/SurveySections.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SurveySections_vue_vue_type_template_id_2616bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true& */ "./resources/js/surveys/SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true&");
/* harmony import */ var _SurveySections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveySections.vue?vue&type=script&lang=js& */ "./resources/js/surveys/SurveySections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SurveySections_vue_vue_type_style_index_0_id_2616bd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css& */ "./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SurveySections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveySections_vue_vue_type_template_id_2616bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SurveySections_vue_vue_type_template_id_2616bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2616bd3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/SurveySections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/SurveySections.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/surveys/SurveySections.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveySections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_style_index_0_id_2616bd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=style&index=0&id=2616bd3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_style_index_0_id_2616bd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_style_index_0_id_2616bd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_style_index_0_id_2616bd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_style_index_0_id_2616bd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_style_index_0_id_2616bd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/surveys/SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/surveys/SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_template_id_2616bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveySections.vue?vue&type=template&id=2616bd3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_template_id_2616bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveySections_vue_vue_type_template_id_2616bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/surveys/SurveysHeader.vue":
/*!************************************************!*\
  !*** ./resources/js/surveys/SurveysHeader.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SurveysHeader_vue_vue_type_template_id_6be44d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveysHeader.vue?vue&type=template&id=6be44d62& */ "./resources/js/surveys/SurveysHeader.vue?vue&type=template&id=6be44d62&");
/* harmony import */ var _SurveysHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveysHeader.vue?vue&type=script&lang=js& */ "./resources/js/surveys/SurveysHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SurveysHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SurveysHeader_vue_vue_type_template_id_6be44d62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SurveysHeader_vue_vue_type_template_id_6be44d62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/surveys/SurveysHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/surveys/SurveysHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/surveys/SurveysHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveysHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveysHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveysHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveysHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/surveys/SurveysHeader.vue?vue&type=template&id=6be44d62&":
/*!*******************************************************************************!*\
  !*** ./resources/js/surveys/SurveysHeader.vue?vue&type=template&id=6be44d62& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveysHeader_vue_vue_type_template_id_6be44d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SurveysHeader.vue?vue&type=template&id=6be44d62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/SurveysHeader.vue?vue&type=template&id=6be44d62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveysHeader_vue_vue_type_template_id_6be44d62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SurveysHeader_vue_vue_type_template_id_6be44d62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/surveys/ValueSubItems.vue?vue&type=style&index=0&id=572fe98d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueSubItems_vue_vue_type_style_index_0_id_572fe98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ }),

/***/ "./resources/js/surveys/mixins/ItemValues.js":
/*!***************************************************!*\
  !*** ./resources/js/surveys/mixins/ItemValues.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      text_input_types: [{
        id: 1,
        description: 'String'
      }, {
        id: 2,
        description: 'Number'
      }, {
        id: 3,
        description: 'LongText'
      }, {
        id: 4,
        description: 'Radios'
      }],
      multi_rows_row_types: [{
        id: 1,
        description: 'Headers'
      }, {
        id: 2,
        description: 'Row'
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/surveys/mixins/Items.js":
/*!**********************************************!*\
  !*** ./resources/js/surveys/mixins/Items.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      item_types: [{
        id: 1,
        description: 'Bracket'
      }, {
        id: 2,
        description: 'Checkbox'
      }, {
        id: 3,
        description: 'Text Input'
      }, {
        id: 4,
        description: 'Radios'
      }, {
        id: 5,
        description: 'Selections'
      }, {
        id: 6,
        description: 'Single Row'
      }, {
        id: 7,
        description: 'Multi Rows'
      }],
      presentations: [{
        id: 1,
        description: 'Table'
      }, {
        id: 2,
        description: 'Icons'
      }]
    };
  }
});

/***/ })

}]);