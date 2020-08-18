(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/groups/GroupForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GroupsHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupsHeader */ "./resources/js/groups/GroupsHeader.vue");
/* harmony import */ var vue_async_computed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-async-computed */ "./node_modules/vue-async-computed/dist/vue-async-computed.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_3___default.a.use(vue_async_computed__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GroupForm',
  components: {
    GroupsHeader: _GroupsHeader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      onEdit: false,
      gatesPolicies: false
    };
  },
  computed: {
    group: {
      get: function get() {
        return this.$store.state.groups.group;
      },
      set: function set(value) {
        this.$store.commit('group', value);
      }
    },
    oldGroup: function oldGroup() {
      return this.$route.params.hasOwnProperty('group_id');
    },
    authorizations: {
      get: function get() {
        return this.$store.state.groups.group.authorizations;
      },
      set: function set(value) {
        this.$store.commit('authorizations', value);
      }
    }
  },
  validations: {
    group: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  methods: {
    fetchGroup: function fetchGroup(group_id) {
      var _this = this;

      axios.get('api/group/' + group_id, this.$store.state.config).then(function (response) {
        _this.$store.commit('group', response.data.data);

        if (_this.oldGroup) {
          _this.parentGatesPolicies();

          response.data.data.authorizations.forEach(function (model) {
            return _this.parentModelGP(model);
          });
        }
      })["catch"](function (e) {
        _this.$router.push({
          name: 'groups_list'
        });
      });
    },
    getGpTemplate: function getGpTemplate() {
      return axios.get('api/authorizations', this.$store.state.config);
    },
    confirmAdd: function confirmAdd() {
      this.$v.group.$touch();
      if (this.$v.group.$invalid) return;
      this.$refs['confirm-add'].show();
    },
    save: function save() {
      var _this2 = this;

      this.$root.show();
      axios.post('api/group', this.group, this.$store.state.config).then(function (response) {
        _this2.$root.hide();

        _this2.$router.push({
          name: 'groups_list'
        });

        _this2.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: 'New group successfully added'
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
      this.$v.group.$touch();
      if (this.$v.group.$invalid) return;
      this.$refs['confirm-update'].show();
    },
    update: function update() {
      var _this3 = this;

      this.$root.show();
      axios.put('api/group/' + this.group.id, this.group, this.$store.state.config).then(function (response) {
        _this3.onEdit = false;

        _this3.$root.hide();

        _this3.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: "Group's info successfully updated"
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
      this.$store.commit('group', {});
      this.$router.push({
        name: 'groups_list'
      });
    },
    confirmDelete: function confirmDelete(group) {
      this.$refs['confirm-delete'].show();
    },
    deleteGroup: function deleteGroup() {
      var _this4 = this;

      this.$root.show();
      axios["delete"]('api/group/' + this.$store.state.groups.group.id, this.$store.state.config).then(function (response) {
        _this4.$root.hide();

        _this4.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: "Group info successfully deleted"
        });

        _this4.$router.push({
          name: 'groups_list'
        });
      })["catch"](function (e) {
        _this4.$root.hide();

        if (e.response.status == 403) _this4.$parent.$refs.pnotify.show({
          type: 'error',
          title: 'Notification',
          text: e.response.data.message
        });
      });
    },
    parentGatesPolicies: function parentGatesPolicies() {
      var checkboxes = false;
      if (this.authorizations.length > 0) checkboxes = true;
      this.authorizations.forEach(function (authorization) {
        checkboxes = checkboxes && authorization.gates.every(function (gate) {
          return gate.value === true;
        }) && authorization.policies.every(function (policy) {
          return policy.value === true;
        });
      });
      this.gatesPolicies = checkboxes;
    },
    childrenGatesPolicies: function childrenGatesPolicies() {
      var _this5 = this;

      this.$store.state.groups.group.authorizations.forEach(function (authorization) {
        authorization.all = _this5.gatesPolicies;
        authorization.gates.forEach(function (gate) {
          return gate.value = _this5.gatesPolicies;
        });
        authorization.policies.forEach(function (policy) {
          return policy.value = _this5.gatesPolicies;
        });
      });
    },
    parentModelGP: function parentModelGP(model) {
      var index = this.authorizations.indexOf(model);
      var checkboxes = false;
      if (this.authorizations[index] != undefined) checkboxes = true;
      checkboxes = checkboxes && this.authorizations[index].gates.every(function (gate) {
        return gate.value === true;
      }) && this.authorizations[index].policies.every(function (policy) {
        return policy.value === true;
      });
      this.authorizations[index].all = checkboxes;
    },
    childrenModelGP: function childrenModelGP(model) {
      var index = this.authorizations.indexOf(model);
      this.$store.state.groups.group.authorizations[index].gates.forEach(function (gate) {
        return gate.value = model.all;
      });
      this.$store.state.groups.group.authorizations[index].policies.forEach(function (policy) {
        return policy.value = model.all;
      });
      this.parentGatesPolicies();
    },
    parentGP: function parentGP(model) {
      this.parentGatesPolicies();
      this.parentModelGP(model);
    },
    childrenGP: function childrenGP(model) {
      this.childrenGatesPolicies();
      this.childrenModelGP(model);
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this6 = this;

    this.$nextTick(function () {
      if (!_this6.oldGroup) _this6.onEdit = true;
    });
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      var refresh = from.fullPath == '/';

      if (vm.$route.params.hasOwnProperty('group_id')) {
        if (refresh) {
          vm.$store.dispatch('api_token').then(function () {
            vm.fetchGroup(vm.$route.params.group_id);
          });
        } else {
          vm.fetchGroup(vm.$route.params.group_id);
        }
      } else {
        vm.$store.commit('group', {});
        vm.getGpTemplate().then(function (response) {
          vm.$store.commit('authorizations', response.data);
        })["catch"](function (e) {});
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupsHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/groups/GroupsHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-async-computed/dist/vue-async-computed.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-async-computed/dist/vue-async-computed.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setAsyncState(vm, stateObject, state) {
  vm.$set(vm.$data._asyncComputed[stateObject], 'state', state);
  vm.$set(vm.$data._asyncComputed[stateObject], 'updating', state === 'updating');
  vm.$set(vm.$data._asyncComputed[stateObject], 'error', state === 'error');
  vm.$set(vm.$data._asyncComputed[stateObject], 'success', state === 'success');
}

function getterOnly(fn) {
  if (typeof fn === 'function') return fn;

  return fn.get;
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function isComputedLazy(item) {
  return hasOwnProperty(item, 'lazy') && item.lazy;
}

function isLazyActive(vm, key) {
  return vm[lazyActivePrefix + key];
}

var lazyActivePrefix = 'async_computed$lazy_active$',
    lazyDataPrefix = 'async_computed$lazy_data$';

function initLazy(data, key) {
  data[lazyActivePrefix + key] = false;
  data[lazyDataPrefix + key] = null;
}

function makeLazyComputed(key) {
  return {
    get: function get() {
      this[lazyActivePrefix + key] = true;
      return this[lazyDataPrefix + key];
    },
    set: function set(value) {
      this[lazyDataPrefix + key] = value;
    }
  };
}

function silentSetLazy(vm, key, value) {
  vm[lazyDataPrefix + key] = value;
}
function silentGetLazy(vm, key) {
  return vm[lazyDataPrefix + key];
}

var getGetterWatchedByArray = function getGetterWatchedByArray(computedAsyncProperty) {
  return function getter() {
    var _this = this;

    computedAsyncProperty.watch.forEach(function (key) {
      // Check if nested key is watched.
      var splittedByDot = key.split('.');
      if (splittedByDot.length === 1) {
        // If not, just access it.
        // eslint-disable-next-line no-unused-expressions
        _this[key];
      } else {
        // Access the nested propety.
        try {
          var start = _this;
          splittedByDot.forEach(function (part) {
            start = start[part];
          });
        } catch (error) {
          console.error('AsyncComputed: bad path: ', key);
          throw error;
        }
      }
    });
    return computedAsyncProperty.get.call(this);
  };
};

var getGetterWatchedByFunction = function getGetterWatchedByFunction(computedAsyncProperty) {
  return function getter() {
    computedAsyncProperty.watch.call(this);
    return computedAsyncProperty.get.call(this);
  };
};

function getWatchedGetter(computedAsyncProperty) {
  if (typeof computedAsyncProperty.watch === 'function') {
    return getGetterWatchedByFunction(computedAsyncProperty);
  } else if (Array.isArray(computedAsyncProperty.watch)) {
    computedAsyncProperty.watch.forEach(function (key) {
      if (typeof key !== 'string') {
        throw new Error('AsyncComputed: watch elemnts must be strings');
      }
    });
    return getGetterWatchedByArray(computedAsyncProperty);
  } else {
    throw Error('AsyncComputed: watch should be function or an array');
  }
}

var DidNotUpdate = typeof Symbol === 'function' ? Symbol('did-not-update') : {};

var getGetterWithShouldUpdate = function getGetterWithShouldUpdate(asyncProprety, currentGetter) {
  return function getter() {
    return asyncProprety.shouldUpdate.call(this) ? currentGetter.call(this) : DidNotUpdate;
  };
};

var shouldNotUpdate = function shouldNotUpdate(value) {
  return DidNotUpdate === value;
};

var prefix = '_async_computed$';

var AsyncComputed = {
  install: function install(Vue, pluginOptions) {
    pluginOptions = pluginOptions || {};

    Vue.config.optionMergeStrategies.asyncComputed = Vue.config.optionMergeStrategies.computed;

    Vue.mixin({
      data: function data() {
        return {
          _asyncComputed: {}
        };
      },

      computed: {
        $asyncComputed: function $asyncComputed() {
          return this.$data._asyncComputed;
        }
      },
      beforeCreate: function beforeCreate() {
        var asyncComputed = this.$options.asyncComputed || {};

        if (!Object.keys(asyncComputed).length) return;

        for (var key in asyncComputed) {
          var getter = getterFn(key, asyncComputed[key]);
          this.$options.computed[prefix + key] = getter;
        }

        this.$options.data = initDataWithAsyncComputed(this.$options);
      },
      created: function created() {
        for (var key in this.$options.asyncComputed || {}) {
          var item = this.$options.asyncComputed[key],
              value = generateDefault.call(this, item, pluginOptions);
          if (isComputedLazy(item)) {
            silentSetLazy(this, key, value);
          } else {
            this[key] = value;
          }
        }

        for (var _key in this.$options.asyncComputed || {}) {
          handleAsyncComputedPropetyChanges(this, _key, pluginOptions, Vue);
        }
      }
    });
  }
};

function handleAsyncComputedPropetyChanges(vm, key, pluginOptions, Vue) {
  var promiseId = 0;
  var watcher = function watcher(newPromise) {
    var thisPromise = ++promiseId;

    if (shouldNotUpdate(newPromise)) return;

    if (!newPromise || !newPromise.then) {
      newPromise = Promise.resolve(newPromise);
    }
    setAsyncState(vm, key, 'updating');

    newPromise.then(function (value) {
      if (thisPromise !== promiseId) return;
      setAsyncState(vm, key, 'success');
      vm[key] = value;
    }).catch(function (err) {
      if (thisPromise !== promiseId) return;

      setAsyncState(vm, key, 'error');
      Vue.set(vm.$data._asyncComputed[key], 'exception', err);
      if (pluginOptions.errorHandler === false) return;

      var handler = pluginOptions.errorHandler === undefined ? console.error.bind(console, 'Error evaluating async computed property:') : pluginOptions.errorHandler;

      if (pluginOptions.useRawError) {
        handler(err, vm, err.stack);
      } else {
        handler(err.stack);
      }
    });
  };
  Vue.set(vm.$data._asyncComputed, key, {
    exception: null,
    update: function update() {
      if (!vm._isDestroyed) {
        watcher(getterOnly(vm.$options.asyncComputed[key]).apply(vm));
      }
    }
  });
  setAsyncState(vm, key, 'updating');
  vm.$watch(prefix + key, watcher, { immediate: true });
}

function initDataWithAsyncComputed(options) {
  var optionData = options.data;
  var asyncComputed = options.asyncComputed || {};

  return function vueAsyncComputedInjectedDataFn(vm) {
    var data = (typeof optionData === 'function' ? optionData.call(this, vm) : optionData) || {};
    for (var key in asyncComputed) {
      var item = this.$options.asyncComputed[key];
      if (isComputedLazy(item)) {
        initLazy(data, key);
        this.$options.computed[key] = makeLazyComputed(key);
      } else {
        data[key] = null;
      }
    }
    return data;
  };
}

function getterFn(key, fn) {
  if (typeof fn === 'function') return fn;

  var getter = fn.get;

  if (hasOwnProperty(fn, 'watch')) {
    getter = getWatchedGetter(fn);
  }

  if (hasOwnProperty(fn, 'shouldUpdate')) {
    getter = getGetterWithShouldUpdate(fn, getter);
  }

  if (isComputedLazy(fn)) {
    var nonLazy = getter;
    getter = function lazyGetter() {
      if (isLazyActive(this, key)) {
        return nonLazy.call(this);
      } else {
        return silentGetLazy(this, key);
      }
    };
  }
  return getter;
}

function generateDefault(fn, pluginOptions) {
  var defaultValue = null;

  if ('default' in fn) {
    defaultValue = fn.default;
  } else if ('default' in pluginOptions) {
    defaultValue = pluginOptions.default;
  }

  if (typeof defaultValue === 'function') {
    return defaultValue.call(this);
  } else {
    return defaultValue;
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  // Auto install in dist mode
  window.Vue.use(AsyncComputed);
}

/* harmony default export */ __webpack_exports__["default"] = (AsyncComputed);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupForm.vue?vue&type=template&id=e3bb9474&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/groups/GroupForm.vue?vue&type=template&id=e3bb9474& ***!
  \********************************************************************************************************************************************************************************************************/
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
          _c("groups-header", { attrs: { isList: false } }),
          _vm._v(" "),
          _c("div", { staticClass: "page-body" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h5", [_vm._v("Group Form")]),
                _vm._v(" "),
                _c("form", { staticClass: "f-right" }, [
                  _c("div", { staticClass: "right-icon-control" }, [
                    _vm.oldGroup
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
                    _vm.oldGroup
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
                              value: _vm.$v.group.name.$model,
                              expression: "$v.group.name.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.group.name.$error },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldGroup && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.group.name.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.group.name,
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
                              value: _vm.$v.group.description.$model,
                              expression: "$v.group.description.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.group.description.$error
                          },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldGroup && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.group.description.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.group.description,
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
                    _c("hr"),
                    _vm._v(" "),
                    _c("h5", { staticClass: "m-b-20" }, [
                      _c(
                        "div",
                        { staticClass: "checkbox-fade fade-in-warning" },
                        [
                          _c("label", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.gatesPolicies,
                                  expression: "gatesPolicies"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                disabled: _vm.oldGroup && !_vm.onEdit
                              },
                              domProps: {
                                checked: Array.isArray(_vm.gatesPolicies)
                                  ? _vm._i(_vm.gatesPolicies, null) > -1
                                  : _vm.gatesPolicies
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.gatesPolicies,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.gatesPolicies = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.gatesPolicies = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.gatesPolicies = $$c
                                    }
                                  },
                                  _vm.childrenGatesPolicies
                                ]
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(0),
                            _vm._v(" "),
                            _c("span", [_vm._v(" Gates and Policies")])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.authorizations, function(authorization) {
                      return _c(
                        "div",
                        { key: authorization.model, staticClass: "m-b-30" },
                        [
                          _c("h5", [
                            _c(
                              "div",
                              { staticClass: "checkbox-fade fade-in-warning" },
                              [
                                _c("label", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: authorization.all,
                                        expression: "authorization.all"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      disabled: _vm.oldGroup && !_vm.onEdit
                                    },
                                    domProps: {
                                      checked: Array.isArray(authorization.all)
                                        ? _vm._i(authorization.all, null) > -1
                                        : authorization.all
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$a = authorization.all,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  authorization,
                                                  "all",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  authorization,
                                                  "all",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(authorization, "all", $$c)
                                          }
                                        },
                                        function($event) {
                                          return _vm.childrenModelGP(
                                            authorization
                                          )
                                        }
                                      ]
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._m(1, true),
                                  _vm._v(" "),
                                  _c("span", [
                                    _c("small", [
                                      _vm._v(_vm._s(authorization.name))
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v(_vm._s(authorization.description))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-row m-t-20" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("h4", { staticClass: "sub-title" }, [
                                  _vm._v("Gates")
                                ]),
                                _vm._v(" "),
                                _vm._l(authorization.gates, function(gate) {
                                  return _c(
                                    "div",
                                    {
                                      staticClass:
                                        "checkbox-fade fade-in-primary"
                                    },
                                    [
                                      _c("label", [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: gate.value,
                                              expression: "gate.value"
                                            }
                                          ],
                                          attrs: {
                                            type: "checkbox",
                                            disabled:
                                              _vm.oldGroup && !_vm.onEdit
                                          },
                                          domProps: {
                                            checked: Array.isArray(gate.value)
                                              ? _vm._i(gate.value, null) > -1
                                              : gate.value
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$a = gate.value,
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
                                                        gate,
                                                        "value",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        gate,
                                                        "value",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(gate, "value", $$c)
                                                }
                                              },
                                              function($event) {
                                                return _vm.parentGP(
                                                  authorization
                                                )
                                              }
                                            ]
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm._m(2, true),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(" " + _vm._s(gate.label))
                                        ])
                                      ])
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("h4", { staticClass: "sub-title" }, [
                                  _vm._v("Policies")
                                ]),
                                _vm._v(" "),
                                _vm._l(authorization.policies, function(
                                  policy
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      staticClass:
                                        "checkbox-fade fade-in-danger"
                                    },
                                    [
                                      _c("label", [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: policy.value,
                                              expression: "policy.value"
                                            }
                                          ],
                                          attrs: {
                                            type: "checkbox",
                                            disabled:
                                              _vm.oldGroup && !_vm.onEdit
                                          },
                                          domProps: {
                                            checked: Array.isArray(policy.value)
                                              ? _vm._i(policy.value, null) > -1
                                              : policy.value
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$a = policy.value,
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
                                                        policy,
                                                        "value",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        policy,
                                                        "value",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(policy, "value", $$c)
                                                }
                                              },
                                              function($event) {
                                                return _vm.parentGP(
                                                  authorization
                                                )
                                              }
                                            ]
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm._m(3, true),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(" " + _vm._s(policy.label))
                                        ])
                                      ])
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "f-right" }, [
                      !_vm.oldGroup
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
                      _vm.oldGroup
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
                        [_vm._v(_vm._s(_vm.oldGroup ? "Close" : "Cancel"))]
                      )
                    ])
                  ],
                  2
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
        [_vm._v("\n\t\tConfirm group add?\n\t")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-update",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.update }
        },
        [_vm._v("\n\t\tAre you sure you want to update this group's info?\n\t")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-delete",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.deleteGroup }
        },
        [_vm._v("\n\t\tAre you sure you want to delete this group?\n\t")]
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
    return _c("span", { staticClass: "cr" }, [
      _c("i", { staticClass: "cr-icon icofont icofont-ui-check txt-warning" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "cr" }, [
      _c("i", { staticClass: "cr-icon icofont icofont-ui-check txt-warning" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "cr" }, [
      _c("i", { staticClass: "cr-icon icofont icofont-ui-check txt-warning" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "cr" }, [
      _c("i", { staticClass: "cr-icon icofont icofont-ui-check txt-warning" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupsHeader.vue?vue&type=template&id=4d508224&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/groups/GroupsHeader.vue?vue&type=template&id=4d508224& ***!
  \***********************************************************************************************************************************************************************************************************/
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
                    attrs: { to: "/group", tag: "button" }
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
          _c("h4", [_vm._v("Manage Groups")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Groups")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/groups/GroupForm.vue":
/*!*******************************************!*\
  !*** ./resources/js/groups/GroupForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupForm_vue_vue_type_template_id_e3bb9474___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupForm.vue?vue&type=template&id=e3bb9474& */ "./resources/js/groups/GroupForm.vue?vue&type=template&id=e3bb9474&");
/* harmony import */ var _GroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupForm.vue?vue&type=script&lang=js& */ "./resources/js/groups/GroupForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupForm_vue_vue_type_template_id_e3bb9474___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupForm_vue_vue_type_template_id_e3bb9474___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/groups/GroupForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/groups/GroupForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/groups/GroupForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GroupForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/groups/GroupForm.vue?vue&type=template&id=e3bb9474&":
/*!**************************************************************************!*\
  !*** ./resources/js/groups/GroupForm.vue?vue&type=template&id=e3bb9474& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupForm_vue_vue_type_template_id_e3bb9474___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GroupForm.vue?vue&type=template&id=e3bb9474& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupForm.vue?vue&type=template&id=e3bb9474&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupForm_vue_vue_type_template_id_e3bb9474___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupForm_vue_vue_type_template_id_e3bb9474___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/groups/GroupsHeader.vue":
/*!**********************************************!*\
  !*** ./resources/js/groups/GroupsHeader.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupsHeader_vue_vue_type_template_id_4d508224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupsHeader.vue?vue&type=template&id=4d508224& */ "./resources/js/groups/GroupsHeader.vue?vue&type=template&id=4d508224&");
/* harmony import */ var _GroupsHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupsHeader.vue?vue&type=script&lang=js& */ "./resources/js/groups/GroupsHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupsHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupsHeader_vue_vue_type_template_id_4d508224___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupsHeader_vue_vue_type_template_id_4d508224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/groups/GroupsHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/groups/GroupsHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/groups/GroupsHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupsHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GroupsHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupsHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupsHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/groups/GroupsHeader.vue?vue&type=template&id=4d508224&":
/*!*****************************************************************************!*\
  !*** ./resources/js/groups/GroupsHeader.vue?vue&type=template&id=4d508224& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupsHeader_vue_vue_type_template_id_4d508224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GroupsHeader.vue?vue&type=template&id=4d508224& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/groups/GroupsHeader.vue?vue&type=template&id=4d508224&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupsHeader_vue_vue_type_template_id_4d508224___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupsHeader_vue_vue_type_template_id_4d508224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);