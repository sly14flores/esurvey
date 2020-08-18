(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UserForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/UserForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UsersHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersHeader */ "./resources/js/users/UsersHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UserForm',
  components: {
    UsersHeader: _UsersHeader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      onEdit: false,
      usernameTaken: false,
      offices: [],
      groups: []
    };
  },
  computed: {
    user: {
      get: function get() {
        return this.$store.state.users.user;
      },
      set: function set(value) {
        this.$store.commit('user', value);
      }
    },
    oldUser: function oldUser() {
      return this.$route.params.hasOwnProperty('user_id');
    }
    /*requirePassword() {
    		return !this.oldUser
    	}*/

  },
  watch: {
    'user.username': function userUsername(newValue, oldValue) {
      var _this = this;

      if (newValue == "") {
        this.usernameTaken = false;
        return;
      }

      if (this.oldUser) {
        this.usernameTaken = false;
        return;
      }

      axios.post('username', {
        username: newValue
      }).then(function (response) {
        _this.usernameTaken = response.data.taken;
      });
    }
  },
  validations: {
    user: {
      firstname: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      lastname: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"]
      },
      username: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      office: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      group: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
      /*password: {
      	required: requiredIf(function () {
      		return this.requirePassword
      	})
      }*/

    }
  },
  methods: {
    fetchUser: function fetchUser(user_id) {
      var _this2 = this;

      axios.get('api/user/' + user_id, this.$store.state.config).then(function (response) {
        _this2.$store.commit('user', response.data.data);
      })["catch"](function (e) {
        _this2.$router.push({
          name: 'users_list'
        });
      });
    },
    confirmAdd: function confirmAdd() {
      this.$v.user.$touch();
      if (this.$v.user.$invalid) return;
      if (this.usernameIsTaken()) return;
      this.$refs['confirm-add'].show();
    },
    save: function save() {
      var _this3 = this;

      this.$root.show();
      axios.post('api/user', this.user, this.$store.state.config).then(function (response) {
        _this3.$root.hide();

        _this3.$router.push({
          name: 'users_list'
        });

        _this3.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: 'New user successfully added'
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
    edit: function edit() {
      this.onEdit = !this.onEdit;
    },
    confirmUpdate: function confirmUpdate() {
      this.$v.user.$touch();
      if (this.$v.user.$invalid) return;
      if (this.usernameIsTaken()) return;
      this.$refs['confirm-update'].show();
    },
    update: function update() {
      var _this4 = this;

      this.$root.show();
      axios.put('api/user/' + this.user.id, this.user, this.$store.state.config).then(function (response) {
        _this4.onEdit = false;

        _this4.$root.hide();

        _this4.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: "User's info successfully updated"
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
    close: function close() {
      this.$store.commit('user', {});
      this.$router.push({
        name: 'users_list'
      });
    },
    confirmDelete: function confirmDelete() {
      this.$refs['confirm-delete'].show();
    },
    deleteUser: function deleteUser() {
      var _this5 = this;

      this.$root.show();
      axios["delete"]('api/user/' + this.$store.state.users.user.id, this.$store.state.config).then(function (response) {
        _this5.$root.hide();

        _this5.$parent.$refs.pnotify.show({
          type: 'success',
          title: 'Notification',
          text: "User info successfully deleted"
        });

        _this5.$router.push({
          name: 'users_list'
        });
      })["catch"](function (e) {
        _this5.$root.hide();

        if (e.response.status == 403) _this5.$parent.$refs.pnotify.show({
          type: 'error',
          title: 'Notification',
          text: e.response.data.message
        });
      });
    },
    usernameIsTaken: function usernameIsTaken() {
      if (this.usernameTaken) this.$parent.$refs.pnotify.show({
        type: 'danger',
        title: 'Notification',
        text: "Username is already taken"
      });
      return this.usernameTaken;
    },
    fetchOffices: function fetchOffices() {
      var _this6 = this;

      axios.get('api/selections/offices', this.$store.state.config).then(function (response) {
        _this6.offices = response.data;
      })["catch"](function (e) {});
    },
    fetchGroups: function fetchGroups() {
      var _this7 = this;

      axios.get('api/selections/groups', this.$store.state.config).then(function (response) {
        _this7.groups = response.data;
      })["catch"](function (e) {});
    }
  },
  created: function created() {
    this.fetchOffices();
    this.fetchGroups();
  },
  mounted: function mounted() {
    var _this8 = this;

    this.$nextTick(function () {
      if (!_this8.oldUser) _this8.onEdit = true;
    });
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      var refresh = from.fullPath == '/';

      if (vm.$route.params.hasOwnProperty('user_id')) {
        if (refresh) {
          vm.$store.dispatch('api_token').then(function () {
            vm.fetchUser(vm.$route.params.user_id);
          });
        } else {
          vm.fetchUser(vm.$route.params.user_id);
        }
      } else {
        vm.$store.commit('user', {});
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UsersHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/UsersHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UserForm.vue?vue&type=template&id=4b53cb18&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/UserForm.vue?vue&type=template&id=4b53cb18& ***!
  \******************************************************************************************************************************************************************************************************/
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
          _c("users-header", { attrs: { isList: false } }),
          _vm._v(" "),
          _c("div", { staticClass: "page-body" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h5", [_vm._v("User Form")]),
                _vm._v(" "),
                _c("form", { staticClass: "f-right" }, [
                  _c("div", { staticClass: "right-icon-control" }, [
                    _vm.oldUser
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
                    _vm.oldUser
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
                        _c("label", [_vm._v("First name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.user.firstname.$model,
                              expression: "$v.user.firstname.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.user.firstname.$error },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldUser && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.user.firstname.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.user.firstname,
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
                          _vm._v("First name is required")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Middle name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.middlename,
                              expression: "user.middlename"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            disabled: _vm.oldUser && !_vm.onEdit
                          },
                          domProps: { value: _vm.user.middlename },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "middlename",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Last name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.user.lastname.$model,
                              expression: "$v.user.lastname.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.user.lastname.$error },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldUser && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.user.lastname.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.user.lastname,
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
                          _vm._v("Last name is required")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.user.email.$model,
                              expression: "$v.user.email.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.user.email.$error },
                          attrs: {
                            type: "email",
                            disabled: _vm.oldUser && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.user.email.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.user.email,
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
                          _vm._v("Valid email address is required")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-lg-4" }, [
                        _c("label", [_vm._v("Username")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.user.username.$model,
                              expression: "$v.user.username.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid":
                              _vm.$v.user.username.$error || _vm.usernameTaken
                          },
                          attrs: {
                            type: "text",
                            disabled: _vm.oldUser && !_vm.onEdit
                          },
                          domProps: { value: _vm.$v.user.username.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.user.username,
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
                        _c(
                          "div",
                          {
                            staticClass: "invalid-feedback",
                            attrs: {
                              "ng-if":
                                "$v.user.username.$error || usernameTaken"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.$v.user.username.$error
                                  ? "Username is required"
                                  : ""
                              ) +
                                " " +
                                _vm._s(
                                  _vm.usernameTaken ? "Username is taken" : ""
                                )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "invalid-feedback",
                          attrs: { "ng-if": "usernameTaken" }
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
                                value: _vm.$v.user.office.$model,
                                expression: "$v.user.office.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.$v.user.office.$error },
                            attrs: { disabled: _vm.oldUser && !_vm.onEdit },
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
                                  _vm.$v.user.office,
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
                        _c("label", [_vm._v("Group")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.user.group.$model,
                                expression: "$v.user.group.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.$v.user.group.$error },
                            attrs: { disabled: _vm.oldUser && !_vm.onEdit },
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
                                  _vm.$v.user.group,
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
                              [_vm._v("Select group")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.groups, function(group) {
                              return _c(
                                "option",
                                {
                                  key: group.id,
                                  domProps: { value: group.id }
                                },
                                [_vm._v(_vm._s(group.name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Group is required")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "f-right" }, [
                      !_vm.oldUser
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
                      _vm.oldUser
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
                        [_vm._v(_vm._s(_vm.oldUser ? "Close" : "Cancel"))]
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
        [_vm._v("\n\t\tConfirm user add?\n\t")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-update",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.update }
        },
        [_vm._v("\n\t\tAre you sure you want to update this user's info?\n\t")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "confirm-delete",
          attrs: { title: "Confirmation" },
          on: { ok: _vm.deleteUser }
        },
        [_vm._v("\n\t\tAre you sure you want to delete this user?\n\t")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UsersHeader.vue?vue&type=template&id=b78f1900&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/UsersHeader.vue?vue&type=template&id=b78f1900& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                    attrs: { to: "/user", tag: "button" }
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
          _c("h4", [_vm._v("Manage Users")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Users")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/UserForm.vue":
/*!*****************************************!*\
  !*** ./resources/js/users/UserForm.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm_vue_vue_type_template_id_4b53cb18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=4b53cb18& */ "./resources/js/users/UserForm.vue?vue&type=template&id=4b53cb18&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_4b53cb18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserForm_vue_vue_type_template_id_4b53cb18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/UserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/UserForm.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/users/UserForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/UserForm.vue?vue&type=template&id=4b53cb18&":
/*!************************************************************************!*\
  !*** ./resources/js/users/UserForm.vue?vue&type=template&id=4b53cb18& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_4b53cb18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=4b53cb18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UserForm.vue?vue&type=template&id=4b53cb18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_4b53cb18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_4b53cb18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/users/UsersHeader.vue":
/*!********************************************!*\
  !*** ./resources/js/users/UsersHeader.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersHeader_vue_vue_type_template_id_b78f1900___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersHeader.vue?vue&type=template&id=b78f1900& */ "./resources/js/users/UsersHeader.vue?vue&type=template&id=b78f1900&");
/* harmony import */ var _UsersHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersHeader.vue?vue&type=script&lang=js& */ "./resources/js/users/UsersHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersHeader_vue_vue_type_template_id_b78f1900___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersHeader_vue_vue_type_template_id_b78f1900___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/UsersHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/UsersHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/users/UsersHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsersHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UsersHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/UsersHeader.vue?vue&type=template&id=b78f1900&":
/*!***************************************************************************!*\
  !*** ./resources/js/users/UsersHeader.vue?vue&type=template&id=b78f1900& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersHeader_vue_vue_type_template_id_b78f1900___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UsersHeader.vue?vue&type=template&id=b78f1900& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/UsersHeader.vue?vue&type=template&id=b78f1900&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersHeader_vue_vue_type_template_id_b78f1900___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersHeader_vue_vue_type_template_id_b78f1900___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);