(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{"579K":function(t,e,i){"use strict";i.r(e);var s={props:["isList"]},o=i("KHd+"),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-header"},[i("div",{staticClass:"row align-items-end"},[t._m(0),t._v(" "),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"page-header-breadcrumb"},[i("ul",{staticClass:"breadcrumb-title"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/dashboard"}},[i("i",{staticClass:"feather icon-home"})])],1),t._v(" "),t._m(1)])])])]),t._v(" "),t.isList?i("div",{staticClass:"row align-items-end"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticStyle:{"margin-top":"20px"}},[i("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:"/office",tag:"button"}},[t._v("Add")])],1)])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"page-header-title"},[e("div",{staticClass:"d-inline"},[e("h4",[this._v("Manage Offices")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[this._v("Offices")])])}],!1,null,null,null);e.default=a.exports},OGIf:function(t,e,i){"use strict";i.r(e);var s=i("ta7f"),o={name:"OfficeForm",components:{OfficesHeader:i("579K").default},data:function(){return{onEdit:!1}},computed:{office:{get:function(){return this.$store.state.offices.office},set:function(t){this.$store.commit("offices/office",t)}},oldOffice:function(){return this.$route.params.hasOwnProperty("office_id")}},validations:{office:{name:{required:s.required},description:{required:s.required}}},methods:{fetchOffice:function(t){var e=this;axios.get("api/office/"+t,this.$store.state.config).then((function(t){e.$store.commit("offices/office",t.data.data)})).catch((function(t){e.$router.push({name:"offices_list"})}))},confirmAdd:function(){this.$v.office.$touch(),this.$v.office.$invalid||this.$refs["confirm-add"].show()},save:function(){var t=this;this.$root.show(),axios.post("api/office",this.office,this.$store.state.config).then((function(e){t.$root.hide(),t.$router.push({name:"offices_list"}),t.$parent.$refs.pnotify.show({type:"success",title:"Notification",text:"New office successfully added"})})).catch((function(e){t.$root.hide(),403==e.response.status&&t.$parent.$refs.pnotify.show({type:"error",title:"Notification",text:e.response.data.message})}))},edit:function(){this.onEdit=!this.onEdit},confirmUpdate:function(){this.$v.office.$touch(),this.$v.office.$invalid||this.$refs["confirm-update"].show()},update:function(){var t=this;this.$root.show(),axios.put("api/office/"+this.office.id,this.office,this.$store.state.config).then((function(e){t.onEdit=!1,t.$root.hide(),t.$parent.$refs.pnotify.show({type:"success",title:"Notification",text:"Office's info successfully updated"})})).catch((function(e){t.$root.hide(),403==e.response.status&&t.$parent.$refs.pnotify.show({type:"error",title:"Notification",text:e.response.data.message})}))},close:function(){this.$store.commit("offices/office",{}),this.$router.push({name:"offices_list"})},confirmDelete:function(t){this.$refs["confirm-delete"].show()},deleteOffice:function(){var t=this;this.$root.show(),axios.delete("api/office/"+this.$store.state.offices.office.id,this.$store.state.config).then((function(e){t.$root.hide(),t.$parent.$refs.pnotify.show({type:"success",title:"Notification",text:"Office info successfully deleted"}),t.$router.push({name:"offices_list"})})).catch((function(e){t.$root.hide(),403==e.response.status&&t.$parent.$refs.pnotify.show({type:"error",title:"Notification",text:e.response.data.message})}))}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.oldOffice||(t.onEdit=!0)}))},beforeRouteEnter:function(t,e,i){i((function(t){var i="/"==e.fullPath;t.$route.params.hasOwnProperty("office_id")?i?t.$store.dispatch("api_token").then((function(){t.fetchOffice(t.$route.params.office_id)})):t.fetchOffice(t.$route.params.office_id):t.$store.commit("offices/office",{})}))}},a=i("KHd+"),n=Object(a.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-wrapper"},[i("offices-header",{attrs:{isList:!1}}),t._v(" "),i("div",{staticClass:"page-body"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[i("h5",[t._v("Office Form")]),t._v(" "),i("form",{staticClass:"f-right"},[i("div",{staticClass:"right-icon-control"},[t.oldOffice?i("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:t.edit}},[t._v(t._s(t.onEdit?"Cancel":"Edit"))]):t._e(),t._v(" "),t.oldOffice?i("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.confirmDelete}},[t._v("Delete")]):t._e()])])]),t._v(" "),i("div",{staticClass:"card-block"},[i("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[i("div",{staticClass:"form-row"},[i("div",{staticClass:"form-group col-lg-6"},[i("label",[t._v("Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.office.name.$model,expression:"$v.office.name.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.office.name.$error},attrs:{type:"text",disabled:t.oldOffice&&!t.onEdit},domProps:{value:t.$v.office.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.office.name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("div",{staticClass:"invalid-feedback"},[t._v("Name is required")])]),t._v(" "),i("div",{staticClass:"form-group col-lg-6"},[i("label",[t._v("Description")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.office.description.$model,expression:"$v.office.description.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.office.description.$error},attrs:{type:"text",disabled:t.oldOffice&&!t.onEdit},domProps:{value:t.$v.office.description.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.office.description,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("div",{staticClass:"invalid-feedback"},[t._v("Description is required")])])]),t._v(" "),i("div",{staticClass:"f-right"},[t.oldOffice?t._e():i("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:t.confirmAdd}},[t._v("Save")]),t._v(" "),t.oldOffice?i("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button",disabled:!t.onEdit},on:{click:t.confirmUpdate}},[t._v("Update")]):t._e(),t._v(" "),i("button",{staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:t.close}},[t._v(t._s(t.oldOffice?"Close":"Cancel"))])])])])])])],1),t._v(" "),i("b-modal",{ref:"confirm-add",attrs:{title:"Confirmation"},on:{ok:t.save}},[t._v("\n\t\tConfirm office add?\n\t")]),t._v(" "),i("b-modal",{ref:"confirm-update",attrs:{title:"Confirmation"},on:{ok:t.update}},[t._v("\n\t\tAre you sure you want to update this office's info?\n\t")]),t._v(" "),i("b-modal",{ref:"confirm-delete",attrs:{title:"Confirmation"},on:{ok:t.deleteOffice}},[t._v("\n\t\tAre you sure you want to delete this office?\n\t")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);