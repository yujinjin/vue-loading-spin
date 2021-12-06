(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-loading-spin"] = factory(require("vue"));
	else
		root["vue-loading-spin"] = factory(root["vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "f2a0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "064b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var call = __webpack_require__("cbac");
var propertyIsEnumerableModule = __webpack_require__("c829");
var createPropertyDescriptor = __webpack_require__("7e3c");
var toIndexedObject = __webpack_require__("097d");
var toPropertyKey = __webpack_require__("3e94");
var hasOwn = __webpack_require__("c7e7");
var IE8_DOM_DEFINE = __webpack_require__("62ea");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "081e":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "097d":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("96a5");
var requireObjectCoercible = __webpack_require__("c39c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "0b61":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "18aa":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var call = __webpack_require__("cbac");
var isCallable = __webpack_require__("081e");
var isObject = __webpack_require__("9a02");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1b9f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_4b7c6d82_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ad4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_4b7c6d82_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_4b7c6d82_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1c57":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
module.exports = {
  data: function data() {
    return {
      isShow: false,
      // 是否显示
      isFixed: false,
      // 是否生成绝对定位的元素，相对于浏览器窗口进行定位。
      isShowMask: false,
      // 是否显示遮罩背景
      autoRefresh: false,
      // 是否自动刷新
      isShowAnimation: false,
      // 是否显示动画效果
      indicatorText: "加载中...",
      // 提示文案，网络请求超时啦，轻触自动刷新
      onHide: null // 隐藏回调函数

    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    }
  },
  watch: {
    value: function value(val) {
      this.isShow = val;
    },
    options: {
      handler: function handler(newVal, oldVal) {
        //TODO： 验证当前options的选项值是否已经更新到最新的值上去了
        this.initOptionsData();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.isShow = this.value || false;
    this.initOptionsData();
  },
  methods: {
    initOptionsData: function initOptionsData() {
      if (typeof this.options.isFixed === "boolean") this.isFixed = this.options.isFixed;
      if (typeof this.options.isShowMask === "boolean") this.isShowMask = this.options.isShowMask;
      if (typeof this.options.autoRefresh === "boolean") this.autoRefresh = this.options.autoRefresh;
      if (typeof this.options.isShowAnimation === "boolean") this.isShowAnimation = this.options.isShowAnimation;
      if (this.options.indicatorText && typeof this.options.indicatorText === "string") this.indicatorText = this.options.indicatorText;
    },
    // 显示
    show: function show() {
      var isShowMask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var autoRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var indicatorText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this.isShow = true;
      this.isShowMask = isShowMask;
      this.autoRefresh = autoRefresh;
      this.indicatorText = indicatorText;
    },
    // 隐藏
    hide: function hide() {
      var _this = this;

      this.isShow = false;

      if (this.onHide && typeof this.onHide === "function") {
        this.$nextTick(function () {
          // 异步操作判断
          if (!_this.isShow) _this.onHide();
        });
      }
    },
    // 弹窗点击事件
    loadingFadeClick: function loadingFadeClick() {
      if (this.autoRefresh) {
        window.location.reload();
      }
    }
  }
};

/***/ }),

/***/ "1ffe":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("b0c4");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "2409":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "265d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var hasOwn = __webpack_require__("c7e7");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "28dc":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("f4b1");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "34bc":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("9153");
var store = __webpack_require__("efd9");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "3e94":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("a434");
var isSymbol = __webpack_require__("62b4");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "41a4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var requireObjectCoercible = __webpack_require__("c39c");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "4704":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var hasOwn = __webpack_require__("c7e7");
var toIndexedObject = __webpack_require__("097d");
var indexOf = __webpack_require__("ee4f").indexOf;
var hiddenKeys = __webpack_require__("f448");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "4748":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "4799":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "4b1a":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");
var uncurryThis = __webpack_require__("c252");
var getOwnPropertyNamesModule = __webpack_require__("9cd9");
var getOwnPropertySymbolsModule = __webpack_require__("b2e9");
var anObject = __webpack_require__("97d8");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "4f29":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var isCallable = __webpack_require__("081e");
var store = __webpack_require__("efd9");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "519f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var shared = __webpack_require__("34bc");
var hasOwn = __webpack_require__("c7e7");
var uid = __webpack_require__("0b61");
var NATIVE_SYMBOL = __webpack_require__("5ce1");
var USE_SYMBOL_AS_UID = __webpack_require__("7b76");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "53b8":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("34bc");
var uid = __webpack_require__("0b61");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "5c75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4704");
var enumBugKeys = __webpack_require__("988d");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "5ce1":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("a0a0");
var fails = __webpack_require__("c814");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "62b4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var getBuiltIn = __webpack_require__("d45e");
var isCallable = __webpack_require__("081e");
var isPrototypeOf = __webpack_require__("afdf");
var USE_SYMBOL_AS_UID = __webpack_require__("7b76");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "62ea":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var fails = __webpack_require__("c814");
var createElement = __webpack_require__("c4ae");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "6446":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("c814");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "6c01":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var DESCRIPTORS = __webpack_require__("6446");
var IE8_DOM_DEFINE = __webpack_require__("62ea");
var anObject = __webpack_require__("97d8");
var toPropertyKey = __webpack_require__("3e94");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "6db5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c57");
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7219":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var hasOwn = __webpack_require__("c7e7");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var setGlobal = __webpack_require__("a2c2");
var inspectSource = __webpack_require__("4f29");
var InternalStateModule = __webpack_require__("e13b");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("265d").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "75a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("6446");
var uncurryThis = __webpack_require__("c252");
var call = __webpack_require__("cbac");
var fails = __webpack_require__("c814");
var objectKeys = __webpack_require__("5c75");
var getOwnPropertySymbolsModule = __webpack_require__("b2e9");
var propertyIsEnumerableModule = __webpack_require__("c829");
var toObject = __webpack_require__("41a4");
var IndexedObject = __webpack_require__("96a5");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "79b5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var inspectSource = __webpack_require__("4f29");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7b76":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("5ce1");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "7e3c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "82b8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8d5b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"674fe0ca-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./src/loading.vue?vue&type=template&id=4b7c6d82&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading",class:{ mask: _vm.isShowMask, show: _vm.isShow, fadeIn: _vm.isShowAnimation, fixed: _vm.isFixed },on:{"touchmove":function($event){$event.stopPropagation();$event.preventDefault();},"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.loadingFadeClick.apply(null, arguments)}}},[_c('div',{staticClass:"loading-content"},[_vm._t("default",function(){return [_c('span',{staticClass:"loading-icon progress"},[_c('svg',{attrs:{"viewBox":"0 0 64 64"}},[_c('g',{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(180)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(210)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(240)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(270)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(300)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(330)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(0)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(30)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(60)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(90)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(120)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(150)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})])])])])]}),(_vm.indicatorText)?_c('div',{staticClass:"indicator-text",domProps:{"innerHTML":_vm._s(_vm.indicatorText)}}):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/loading.vue?vue&type=template&id=4b7c6d82&scoped=true&


/***/ }),

/***/ "9153":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "961e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var getOwnPropertyDescriptor = __webpack_require__("064b").f;
var createNonEnumerableProperty = __webpack_require__("d3a9");
var redefine = __webpack_require__("7219");
var setGlobal = __webpack_require__("a2c2");
var copyConstructorProperties = __webpack_require__("b61d");
var isForced = __webpack_require__("a3e2");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "96a5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var uncurryThis = __webpack_require__("c252");
var fails = __webpack_require__("c814");
var classof = __webpack_require__("cc43");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "975b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("961e");
var assign = __webpack_require__("75a1");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "97d8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isObject = __webpack_require__("9a02");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "988d":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "9a02":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("081e");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "9ad4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9cd9":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4704");
var enumBugKeys = __webpack_require__("988d");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "a0a0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var userAgent = __webpack_require__("4748");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "a10c":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("4799");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "a2c2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "a3e2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("c814");
var isCallable = __webpack_require__("081e");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var call = __webpack_require__("cbac");
var isObject = __webpack_require__("9a02");
var isSymbol = __webpack_require__("62b4");
var getMethod = __webpack_require__("1ffe");
var ordinaryToPrimitive = __webpack_require__("18aa");
var wellKnownSymbol = __webpack_require__("519f");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "a949":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _loading_vue_vue_type_template_id_4b7c6d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8d5b");
/* harmony import */ var _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6db5");
/* harmony import */ var _loading_vue_vue_type_style_index_0_id_4b7c6d82_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1b9f");
/* harmony import */ var _node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cba8");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_vue_vue_type_template_id_4b7c6d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _loading_vue_vue_type_template_id_4b7c6d82_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "4b7c6d82",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "afdf":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "b0c4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var tryToString = __webpack_require__("82b8");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "b2e9":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "b61d":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("c7e7");
var ownKeys = __webpack_require__("4b1a");
var getOwnPropertyDescriptorModule = __webpack_require__("064b");
var definePropertyModule = __webpack_require__("6c01");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "c252":
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "c39c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "c4ae":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isObject = __webpack_require__("9a02");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "c7e7":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var toObject = __webpack_require__("41a4");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "c814":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "c829":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "ca14":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2409")))

/***/ }),

/***/ "cba8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "cbac":
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "cc43":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "d3a9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var definePropertyModule = __webpack_require__("6c01");
var createPropertyDescriptor = __webpack_require__("7e3c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "d45e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "e13b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("79b5");
var global = __webpack_require__("ca14");
var uncurryThis = __webpack_require__("c252");
var isObject = __webpack_require__("9a02");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var hasOwn = __webpack_require__("c7e7");
var shared = __webpack_require__("efd9");
var sharedKey = __webpack_require__("53b8");
var hiddenKeys = __webpack_require__("f448");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "ee4f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("097d");
var toAbsoluteIndex = __webpack_require__("a10c");
var lengthOfArrayLike = __webpack_require__("28dc");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "efd9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var setGlobal = __webpack_require__("a2c2");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "f2a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("975b");

// EXTERNAL MODULE: ./src/loading.vue
var src_loading = __webpack_require__("a949");

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/index.js


/**
 * 作者：yujinjin9@126.com
 * 时间：2018-07-04
 * 描述：加载插件
 */


/* harmony default export */ var src_0 = ((function () {
  var LoadingConstructor = external_vue_default.a.extend(src_loading["default"]); // 弹窗实例

  var loadingInstance = null; // 默认配置选项

  var defaults = {
    isFixed: true,
    // 是否固定位置
    isShowAnimation: true // 是否显示动画效果

  }; //创建实例

  var createInstance = function createInstance() {
    loadingInstance = new LoadingConstructor({
      el: document.createElement("div"),
      data: Object.assign({}, defaults)
    });

    loadingInstance.onHide = function () {
      if (loadingInstance) {
        loadingInstance.$el.parentNode.removeChild(loadingInstance.$el);
        loadingInstance = null;
      }
    };

    return loadingInstance;
  };

  var loading = {
    show: function show() {
      var isShowMask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var autoRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var indicatorText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "加载中...";

      if (!loadingInstance) {
        loadingInstance = createInstance();
        document.body.appendChild(loadingInstance.$el);
      }

      loadingInstance.show(isShowMask, autoRefresh, indicatorText);
    },
    hide: function hide() {
      if (loadingInstance) loadingInstance.hide();
    },
    showNetTimeout: function showNetTimeout() {
      var isShowMask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var autoRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var indicatorText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "网络请求超时啦，轻触自动刷新";

      if (!loadingInstance) {
        loadingInstance = createInstance();
        document.body.appendChild(loadingInstance.$el);
      }

      loadingInstance.show(isShowMask, autoRefresh, indicatorText);
    }
  };
  return {
    install: function install(Vue, options) {
      if (options) {
        defaults = Object.assign(defaults, options);
      }

      Vue.prototype.$showLoading = loading.show;
      Vue.prototype.$hideLoading = loading.hide;
      Vue.prototype.$showNetTimeout = loading.showNetTimeout;

      if (defaults.isComponent !== false) {
        // 默认注册成组件
        Vue.component("loading", src_loading["default"]);
      }

      delete defaults.isComponent;
    },
    get: function get(options) {
      if (options) {
        defaults = Object.assign(defaults, options);
      }

      return {
        showLoading: loading.show,
        hideLoading: loading.hide,
        showNetTimeout: loading.showNetTimeout
      };
    }
  };
})());
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "f448":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "f4b1":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("4799");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-loading-spin.umd.js.map