exports.ids = [7];
exports.modules = {

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/client/_clientId/index.vue?vue&type=template&id=816313ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"invoice-build"},[_c('v-container',[_c('v-row',[_c('v-col',{staticClass:"py-0",attrs:{"md":"12","lg":"12","xl":"12","cols":"12"}},[(_vm.$route.path !== '/profile/clients')?_c('v-icon',{staticClass:"back-icon desktop-hide",on:{"click":function($event){return _vm.$router.go(-1)}}},[_vm._v("\n          mdi-arrow-left\n        ")]):_vm._e()],1),_vm._v(" "),_c('v-col',{staticStyle:{"padding-top":"0px"},attrs:{"md":"3","lg":"3","xl":"3","cols":"12"}},[_c('v-card',{staticClass:"autor-details",attrs:{"elevation":"6"}},[_c('div',{staticClass:"admin-left-content"},[_c('v-list-item',{staticClass:"grow user-profile px-0"},[_c('v-list-item-content',{staticClass:"user-info"},[_c('p',[_vm._v("Client Details")]),_vm._v(" "),_c('v-list-item-title',{staticClass:"pt-2"},[_vm._v(_vm._s(_vm.clientModel.clientFirstName))])],1)],1),_vm._v(" "),_c('div',{staticClass:"divider mt-2"})],1)])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/client/_clientId/index.vue?vue&type=template&id=816313ce&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./plugins/firebase.js
var firebase = __webpack_require__(7);

// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/client/_clientId/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _clientIdvue_type_script_lang_js_ = ({
  layout: "adminlayout",

  asyncData({
    req,
    redirect
  }) {
    let user = null;

    if (true) {
      user = Object(helpers["a" /* getUserFromCookie */])(req);
    } else {}

    if (!user) {
      redirect("/login");
    }
  },

  data: () => ({
    isActive: false
  }),

  data() {
    return {
      clientModel: {}
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      current_user: "auth/getAuthUser"
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      softDelete: "modules/client/softDelete"
    })
  }
});
// CONCATENATED MODULE: ./pages/profile/client/_clientId/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_clientIdvue_type_script_lang_js_ = (_clientIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(13);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 5 modules
var VList = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(234);

// CONCATENATED MODULE: ./pages/profile/client/_clientId/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  client_clientIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f15dc6c"
  
)

/* harmony default export */ var _clientId = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: VList["a" /* VListItemContent */],VListItemTitle: VList["b" /* VListItemTitle */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map