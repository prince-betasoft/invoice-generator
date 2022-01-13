exports.ids = [12];
exports.modules = {

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'comparable',
  props: {
    valueComparator: {
      type: Function,
      default: _util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* deepEqual */ "h"]
    }
  }
}));

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5db1c400", content, true)

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Pompiere&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{font-family:\"Poppins\",sans-serif;background:#f5f5f5}.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:\"\";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:\"\";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d139a758", content, true, context)
};

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VAlert/VAlert.sass
var VAlert = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/index.js
var VSheet = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(6);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/transitionable/index.js

/* harmony default export */ var transitionable = (external_vue_default.a.extend({
  name: 'transitionable',
  props: {
    mode: String,
    origin: String,
    transition: String
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
// Styles
 // Extensions

 // Components


 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ var VAlert_VAlert = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(VSheet["a" /* default */], toggleable["a" /* default */], transitionable).extend({
  name: 'v-alert',
  props: {
    border: {
      type: String,

      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }

    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    coloredBorder: Boolean,
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: '$cancel'
    },
    icon: {
      default: '',
      type: [Boolean, String],

      validator(val) {
        return typeof val === 'string' || val === false;
      }

    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    type: {
      type: String,

      validator(val) {
        return ['info', 'error', 'success', 'warning'].includes(val);
      }

    },
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    __cachedBorder() {
      if (!this.border) return null;
      let data = {
        staticClass: 'v-alert__border',
        class: {
          [`v-alert__border--${this.border}`]: true
        }
      };

      if (this.coloredBorder) {
        data = this.setBackgroundColor(this.computedColor, data);
        data.class['v-alert__border--has-color'] = true;
      }

      return this.$createElement('div', data);
    },

    __cachedDismissible() {
      if (!this.dismissible) return null;
      const color = this.iconColor;
      return this.$createElement(VBtn["a" /* default */], {
        staticClass: 'v-alert__dismissible',
        props: {
          color,
          icon: true,
          small: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: () => this.isActive = false
        }
      }, [this.$createElement(VIcon["a" /* default */], {
        props: {
          color
        }
      }, this.closeIcon)]);
    },

    __cachedIcon() {
      if (!this.computedIcon) return null;
      return this.$createElement(VIcon["a" /* default */], {
        staticClass: 'v-alert__icon',
        props: {
          color: this.iconColor
        }
      }, this.computedIcon);
    },

    classes() {
      const classes = { ...VSheet["a" /* default */].options.computed.classes.call(this),
        'v-alert--border': Boolean(this.border),
        'v-alert--dense': this.dense,
        'v-alert--outlined': this.outlined,
        'v-alert--prominent': this.prominent,
        'v-alert--text': this.text
      };

      if (this.border) {
        classes[`v-alert--border-${this.border}`] = true;
      }

      return classes;
    },

    computedColor() {
      return this.color || this.type;
    },

    computedIcon() {
      if (this.icon === false) return false;
      if (typeof this.icon === 'string' && this.icon) return this.icon;
      if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
      return `$${this.type}`;
    },

    hasColoredIcon() {
      return this.hasText || Boolean(this.border) && this.coloredBorder;
    },

    hasText() {
      return this.text || this.outlined;
    },

    iconColor() {
      return this.hasColoredIcon ? this.computedColor : undefined;
    },

    isDark() {
      if (this.type && !this.coloredBorder && !this.outlined) return true;
      return themeable["a" /* default */].options.computed.isDark.call(this);
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('outline')) {
      Object(console["a" /* breaking */])('outline', 'outlined', this);
    }
  },

  methods: {
    genWrapper() {
      const children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
        toggle: this.toggle
      }) : this.__cachedDismissible];
      const data = {
        staticClass: 'v-alert__wrapper'
      };
      return this.$createElement('div', data, children);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-alert__content'
      }, this.$slots.default);
    },

    genAlert() {
      let data = {
        staticClass: 'v-alert',
        attrs: {
          role: 'alert'
        },
        on: this.listeners$,
        class: this.classes,
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      };

      if (!this.coloredBorder) {
        const setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
        data = setColor(this.computedColor, data);
      }

      return this.$createElement('div', data, [this.genWrapper()]);
    },

    /** @public */
    toggle() {
      this.isActive = !this.isActive;
    }

  },

  render(h) {
    const render = this.genAlert();
    if (!this.transition) return render;
    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [render]);
  }

}));

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4091e85c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4091e85c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4091e85c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4091e85c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_4091e85c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-label--active[data-v-4091e85c]{left:-5px!important}.backtohome[data-v-4091e85c]{text-align:center;margin:0}.backtohome .v-btn[data-v-4091e85c]{background:transparent!important;color:#999d9e!important;font-family:\"Poppins\",sans-serif;box-shadow:none;letter-spacing:.4px}.backtohome i.v-icon[data-v-4091e85c]{font-size:20px!important;padding-right:6px!important}.left-content .logo-head span.aletter[data-v-4091e85c]{line-height:46px;font-size:42px!important;font-weight:700;font-family:\"Pompiere\",cursive!important}.logo-head[data-v-4091e85c]{font-size:32px;color:#277cee!important;font-family:\"Pompiere\",cursive;letter-spacing:1px}.left-content[data-v-4091e85c]{text-align:center;padding:20px 40px;border-bottom:1px solid #ddd;background:#f9f9f9;border-radius:5px 5px 0 0}.alert-msg-error[data-v-4091e85c]{background:#f33434!important;margin:10px!important}.login-bottom-btn[data-v-4091e85c]{text-align:center;padding:30px 0;font-family:\"Poppins\",sans-serif}.login-bottom-btn .v-btn[data-v-4091e85c]{background:transparent!important;border:none!important;box-shadow:none!important;padding:0 5px!important;font-size:16px;letter-spacing:.4px;color:#257eff;vertical-align:inherit}.login-bottom-btn span[data-v-4091e85c]{font-size:14px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(269);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5e62c9d0", content, true)

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Pompiere&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{font-family:\"Poppins\",sans-serif;background:#f5f5f5}.theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(271);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2e2bc7da", content, true)

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Pompiere&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{font-family:\"Poppins\",sans-serif;background:#f5f5f5}.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:\"\";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("999cb8a8", content, true)

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Pompiere&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{font-family:\"Poppins\",sans-serif;background:#f5f5f5}.v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=4091e85c&scoped=true&
var registervue_type_template_id_4091e85c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"mx-auto"},[_c('div',{staticClass:"login"},[_c('v-card',{staticClass:"v-card signup-form"},[_c('v-row',{staticClass:"mb-6",attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12"}},[_c('v-alert',{staticClass:"alert-msg-error",attrs:{"type":"error","prominent":""},model:{value:(_vm.alert),callback:function ($$v) {_vm.alert=$$v},expression:"alert"}},[_vm._v("\n            "+_vm._s(_vm.validationMsg)+"\n          ")]),_vm._v(" "),_c('v-alert',{staticClass:"alert-msg-error",attrs:{"type":"success","prominent":""},model:{value:(_vm.verificationAlert),callback:function ($$v) {_vm.verificationAlert=$$v},expression:"verificationAlert"}},[_vm._v("\n            "+_vm._s(_vm.verificationMsg)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"left-content"},[_c('h3',[_vm._v("Create a free account")])]),_vm._v(" "),_c('div',{staticClass:"right-content"},[_c('v-form',{ref:"register_form",attrs:{"lazy-validation":""},on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('p',{staticStyle:{"text-align":"left"}},[_vm._v("I am signing up as")]),_vm._v(" "),_c('v-radio-group',{attrs:{"required":"","row":""},model:{value:(_vm.loginForm.user_type),callback:function ($$v) {_vm.$set(_vm.loginForm, "user_type", $$v)},expression:"loginForm.user_type"}},[_c('v-radio',{attrs:{"label":"an individual","value":"individual"}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"a company","value":"Company"}})],1)],1)],1)],1),_vm._v(" "),(_vm.loginForm.user_type == 'individual')?_c('div',[_c('v-row',[_c('v-col',[_c('v-text-field',{staticClass:"v-label",attrs:{"placeholder":"First name","rules":_vm.firstName,"required":"","outlined":""},model:{value:(_vm.loginForm.first_name),callback:function ($$v) {_vm.$set(_vm.loginForm, "first_name", $$v)},expression:"loginForm.first_name"}})],1),_vm._v(" "),_c('v-col',[_c('v-text-field',{staticClass:"v-label",attrs:{"placeholder":"Last name","rules":_vm.firstName,"required":"","outlined":""},model:{value:(_vm.loginForm.last_name),callback:function ($$v) {_vm.$set(_vm.loginForm, "last_name", $$v)},expression:"loginForm.last_name"}})],1)],1)],1):_c('div',[_c('v-text-field',{staticClass:"v-label",attrs:{"type":"text","placeholder":"Company Name","rules":_vm.firstName,"required":"","outlined":""},model:{value:(_vm.loginForm.company_name),callback:function ($$v) {_vm.$set(_vm.loginForm, "company_name", $$v)},expression:"loginForm.company_name"}})],1),_vm._v(" "),_c('v-text-field',{staticClass:"v-label",attrs:{"rules":_vm.emailRules,"placeholder":"Email Address","required":"","outlined":""},model:{value:(_vm.loginForm.email),callback:function ($$v) {_vm.$set(_vm.loginForm, "email", $$v)},expression:"loginForm.email"}}),_vm._v(" "),_c('v-text-field',{staticClass:"v-label",attrs:{"rules":_vm.passwordRules,"placeholder":"Password","type":"password","required":"","outlined":""},model:{value:(_vm.loginForm.password),callback:function ($$v) {_vm.$set(_vm.loginForm, "password", $$v)},expression:"loginForm.password"}}),_vm._v(" "),_c('v-btn',{staticClass:"mr-4 submit-btn",attrs:{"disabled":!_vm.valid,"color":"primary","type":"submit","loading":_vm.loader},on:{"click":_vm.onSubmit}},[_vm._v("\n                Submit\n              ")])],1),_vm._v(" "),_c('div',{staticClass:"login-bottom-btn"},[_c('span',[_vm._v("Have Account? ")]),_vm._v(" "),_c('v-btn',{attrs:{"href":"/login"}},[_vm._v("Login")])],1),_vm._v(" "),_c('div',{staticClass:"backtohome mx-2"},[_c('v-btn',{attrs:{"to":"/"}},[_c('v-icon',[_vm._v("mdi-arrow-left")]),_vm._v(" Go back to Home")],1)],1)],1)],1)],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=4091e85c&scoped=true&

// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(78);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// EXTERNAL MODULE: ./services/sweetToaster.js
var sweetToaster = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import style from '~/assets/css/style.css'

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  async asyncData({
    req,
    redirect,
    route
  }) {
    if (true) {
      const user = Object(helpers["a" /* getUserFromCookie */])(req);

      if (user) {
        redirect("/");
      }
    }
  },

  layout: "auth",
  components: {},
  data: () => ({
    loading: false,
    alert: false,
    validationMsg: "",
    verificationMsg: "",
    verificationAlert: false,
    errorMsg: null,
    // key: "6LelGLoaAAAAAK8vnmjOcV3j2x-5kQor12GqGT1V",
    selection: 1,
    loginForm: {
      first_name: "",
      last_name: "",
      user_type: "individual",
      company_name: "",
      email: "",
      password: ""
    },
    Login_Submitted: false,
    valid: true,
    firstName: [v => !!v || "Please complete this mandatory field.", v => v && v.length <= 20 || "Name must be less than 20 characters"],
    emailRules: [v => !!v || "Please complete this mandatory field.", v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    passwordRules: [v => !!v || "Please complete this mandatory field.", v => v && v.length > 5 || "Password must at least 6 characters"]
  }),
  computed: { ...Object(external_vuex_["mapGetters"])({
      error: "auth/error",
      loader: "auth/loading",
      message: "auth/message"
    })
  },
  watch: {
    error(newState, oldState) {
      if (newState) {
        this.alert = true;
        this.validationMsg = newState.message;
      }
    },

    message(value) {
      if (value) {
        this.verificationAlert = true;
        this.verificationMsg = value;
      }
    }

  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => this.loading = false, 2000);
    },

    ...Object(external_vuex_["mapActions"])({
      Register: "auth/Register",
      loginWithGoogle: "auth/logInWithGoogle"
    }),

    async onSubmit() {
      this.alert = false;
      this.verificationAlert = false;
      const check = this.$refs.register_form.validate();

      if (check) {
        sweetToaster["a" /* default */].success("Registered Successfully!", "success");
        this.login_submitted = true;
        const payload = {
          user_type: this.loginForm.user_type,
          first_name: this.loginForm.first_name,
          last_name: this.loginForm.last_name,
          company_name: this.loginForm.company_name,
          email: this.loginForm.email,
          password: this.loginForm.password
        };
        await this.Register(payload); //  this.$refs.register_form.reset();
        // this.$refs.register_form.resetValidation();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(13);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js + 1 modules
var VAlert = __webpack_require__(262);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VRadioGroup/VRadio.sass
var VRadio = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js + 1 modules
var VLabel = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var components_VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(24);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/rippleable/index.js
// Directives
 // Types


/* harmony default export */ var rippleable = (external_vue_default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: ripple["a" /* default */]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/comparable/index.js
var comparable = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/selectable/index.js
// Components
 // Mixins


 // Utilities


function prevent(e) {
  e.preventDefault();
}
/* @vue/component */

/* harmony default export */ var selectable = (Object(mixins["a" /* default */])(VInput["a" /* default */], rippleable, comparable["a" /* default */]).extend({
  name: 'selectable',
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    id: String,
    inputValue: null,
    falseValue: null,
    trueValue: null,
    multiple: {
      type: Boolean,
      default: null
    },
    label: String
  },

  data() {
    return {
      hasColor: this.inputValue,
      lazyValue: this.inputValue
    };
  },

  computed: {
    computedColor() {
      if (!this.isActive) return undefined;
      if (this.color) return this.color;
      if (this.isDark && !this.appIsDark) return 'white';
      return 'primary';
    },

    isMultiple() {
      return this.multiple === true || this.multiple === null && Array.isArray(this.internalValue);
    },

    isActive() {
      const value = this.value;
      const input = this.internalValue;

      if (this.isMultiple) {
        if (!Array.isArray(input)) return false;
        return input.some(item => this.valueComparator(item, value));
      }

      if (this.trueValue === undefined || this.falseValue === undefined) {
        return value ? this.valueComparator(value, input) : Boolean(input);
      }

      return this.valueComparator(input, this.trueValue);
    },

    isDirty() {
      return this.isActive;
    },

    rippleState() {
      return !this.isDisabled && !this.validationState ? undefined : this.validationState;
    }

  },
  watch: {
    inputValue(val) {
      this.lazyValue = val;
      this.hasColor = val;
    }

  },
  methods: {
    genLabel() {
      const label = VInput["a" /* default */].options.methods.genLabel.call(this);
      if (!label) return label;
      label.data.on = {
        // Label shouldn't cause the input to focus
        click: prevent
      };
      return label;
    },

    genInput(type, attrs) {
      return this.$createElement('input', {
        attrs: Object.assign({
          'aria-checked': this.isActive.toString(),
          disabled: this.isDisabled,
          id: this.computedId,
          role: type,
          type
        }, attrs),
        domProps: {
          value: this.value,
          checked: this.isActive
        },
        on: {
          blur: this.onBlur,
          change: this.onChange,
          focus: this.onFocus,
          keydown: this.onKeydown,
          click: prevent
        },
        ref: 'input'
      });
    },

    onBlur() {
      this.isFocused = false;
    },

    onClick(e) {
      this.onChange();
      this.$emit('click', e);
    },

    onChange() {
      if (!this.isInteractive) return;
      const value = this.value;
      let input = this.internalValue;

      if (this.isMultiple) {
        if (!Array.isArray(input)) {
          input = [];
        }

        const length = input.length;
        input = input.filter(item => !this.valueComparator(item, value));

        if (input.length === length) {
          input.push(value);
        }
      } else if (this.trueValue !== undefined && this.falseValue !== undefined) {
        input = this.valueComparator(input, this.trueValue) ? this.falseValue : this.trueValue;
      } else if (value) {
        input = this.valueComparator(input, value) ? null : value;
      } else {
        input = !input;
      }

      this.validate(true, input);
      this.internalValue = input;
      this.hasColor = input;
    },

    onFocus() {
      this.isFocused = true;
    },

    /** @abstract */
    onKeydown(e) {}

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var util_helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js
// Styles



 // Mixins






 // Utilities




const baseMixins = Object(mixins["a" /* default */])(binds_attrs["a" /* default */], colorable["a" /* default */], rippleable, Object(groupable["a" /* factory */])('radioGroup'), themeable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VRadioGroup_VRadio = (baseMixins.extend().extend({
  name: 'v-radio',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    id: String,
    label: String,
    name: String,
    offIcon: {
      type: String,
      default: '$radioOff'
    },
    onIcon: {
      type: String,
      default: '$radioOn'
    },
    readonly: Boolean,
    value: {
      default: null
    }
  },
  data: () => ({
    isFocused: false
  }),
  computed: {
    classes() {
      return {
        'v-radio--is-disabled': this.isDisabled,
        'v-radio--is-focused': this.isFocused,
        ...this.themeClasses,
        ...this.groupClasses
      };
    },

    computedColor() {
      return selectable.options.computed.computedColor.call(this);
    },

    computedIcon() {
      return this.isActive ? this.onIcon : this.offIcon;
    },

    computedId() {
      return VInput["a" /* default */].options.computed.computedId.call(this);
    },

    hasLabel: VInput["a" /* default */].options.computed.hasLabel,

    hasState() {
      return (this.radioGroup || {}).hasState;
    },

    isDisabled() {
      return this.disabled || !!this.radioGroup && this.radioGroup.isDisabled;
    },

    isReadonly() {
      return this.readonly || !!this.radioGroup && this.radioGroup.isReadonly;
    },

    computedName() {
      if (this.name || !this.radioGroup) {
        return this.name;
      }

      return this.radioGroup.name || `radio-${this.radioGroup._uid}`;
    },

    rippleState() {
      return selectable.options.computed.rippleState.call(this);
    },

    validationState() {
      return (this.radioGroup || {}).validationState || this.computedColor;
    }

  },
  methods: {
    genInput(args) {
      // We can't actually use the mixin directly because
      // it's made for standalone components, but its
      // genInput method is exactly what we need
      return selectable.options.methods.genInput.call(this, 'radio', args);
    },

    genLabel() {
      if (!this.hasLabel) return null;
      return this.$createElement(VLabel["a" /* default */], {
        on: {
          // Label shouldn't cause the input to focus
          click: prevent
        },
        attrs: {
          for: this.computedId
        },
        props: {
          color: this.validationState,
          focused: this.hasState
        }
      }, Object(util_helpers["n" /* getSlot */])(this, 'label') || this.label);
    },

    genRadio() {
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(components_VIcon["a" /* default */], this.setTextColor(this.validationState, {
        props: {
          dense: this.radioGroup && this.radioGroup.dense
        }
      }), this.computedIcon), this.genInput({
        name: this.computedName,
        value: this.value,
        ...this.attrs$
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },

    onChange() {
      if (this.isDisabled || this.isReadonly || this.isActive) return;
      this.toggle();
    },

    onKeydown: () => {}
  },

  render(h) {
    const data = {
      staticClass: 'v-radio',
      class: this.classes,
      on: Object(mergeData["b" /* mergeListeners */])({
        click: this.onChange
      }, this.listeners$)
    };
    return h('div', data, [this.genRadio(), this.genLabel()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/styles/components/_selection-controls.sass
var _selection_controls = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VRadioGroup/VRadioGroup.sass
var VRadioGroup = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js
// Styles

 // Extensions


 // Mixins

 // Types


const VRadioGroup_baseMixins = Object(mixins["a" /* default */])(comparable["a" /* default */], VItemGroup["a" /* BaseItemGroup */], VInput["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VRadioGroup_VRadioGroup = (VRadioGroup_baseMixins.extend({
  name: 'v-radio-group',

  provide() {
    return {
      radioGroup: this
    };
  },

  props: {
    column: {
      type: Boolean,
      default: true
    },
    height: {
      type: [Number, String],
      default: 'auto'
    },
    name: String,
    row: Boolean,
    // If no value set on VRadio
    // will match valueComparator
    // force default to null
    value: null
  },
  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-input--selection-controls v-input--radio-group': true,
        'v-input--radio-group--column': this.column && !this.row,
        'v-input--radio-group--row': this.row
      };
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$createElement('div', {
        staticClass: 'v-input--radio-group__input',
        attrs: {
          id: this.id,
          role: 'radiogroup',
          'aria-labelledby': this.computedId
        }
      }, VInput["a" /* default */].options.methods.genDefaultSlot.call(this));
    },

    genInputSlot() {
      const render = VInput["a" /* default */].options.methods.genInputSlot.call(this);
      delete render.data.on.click;
      return render;
    },

    genLabel() {
      const label = VInput["a" /* default */].options.methods.genLabel.call(this);
      if (!label) return null;
      label.data.attrs.id = this.computedId; // WAI considers this an orphaned label

      delete label.data.attrs.for;
      label.tag = 'legend';
      return label;
    },

    onClick: VItemGroup["a" /* BaseItemGroup */].options.methods.onClick
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 4 modules
var VTextField = __webpack_require__(65);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(266)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  registervue_type_template_id_4091e85c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "4091e85c",
  "11143bf2"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VAlert: VAlert["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VRadio: VRadioGroup_VRadio,VRadioGroup: VRadioGroup_VRadioGroup,VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=register.js.map