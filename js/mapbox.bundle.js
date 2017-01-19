/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

(function (global, factory) {

	if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var _slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};

	var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	    version = "2.1.3",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([\da-z])/gi,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return _slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {
			return num != null ?

			// Return just the one element from the set
			num < 0 ? this[num + this.length] : this[num] :

			// Return all the elements in a clean array
			_slice.call(this);
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function each(callback, args) {
			return jQuery.each(this, callback, args);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function slice() {
			return this.pushStack(_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function end() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function error(msg) {
			throw new Error(msg);
		},

		noop: function noop() {},

		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function isWindow(obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function isNumeric(obj) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
		},

		isPlainObject: function isPlainObject(obj) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}

			if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function isEmptyObject(obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function type(obj) {
			if (obj == null) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		},

		// Evaluates a script in a global context
		globalEval: function globalEval(code) {
			var script,
			    indirect = eval;

			code = jQuery.trim(code);

			if (code) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if (code.indexOf("use strict") === 1) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild(script).parentNode.removeChild(script);
				} else {
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
					indirect(code);
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function nodeName(elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function each(obj, callback, args) {
			var value,
			    i = 0,
			    length = obj.length,
			    isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

				// A special, fast, case for the most common use of each
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function trim(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArraylike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		merge: function merge(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var value,
			    i = 0,
			    length = elems.length,
			    isArray = isArraylike(elems),
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArray) {
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArraylike(obj) {
		var length = obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.2.0-pre
  * http://sizzlejs.com/
  *
  * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2014-12-16
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function indexOf(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace("w", "w#"),


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + characterEncoding + ")"),
			"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
			"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,
		    rescape = /'|\\/g,


		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function unloadHandler() {
			setDocument();
		};

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

			if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
				setDocument(context);
			}

			context = context || document;
			results = results || [];
			nodeType = context.nodeType;

			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			if (!seed && documentIsHTML) {

				// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
				if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
					// Speed-up: Sizzle("#ID")
					if (m = match[1]) {
						if (nodeType === 9) {
							elem = context.getElementById(m);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document (jQuery #6963)
							if (elem && elem.parentNode) {
								// Handle the case where IE, Opera, and Webkit return items
								// by name instead of ID
								if (elem.id === m) {
									results.push(elem);
									return results;
								}
							} else {
								return results;
							}
						} else {
							// Context is not a document
							if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
								results.push(elem);
								return results;
							}
						}

						// Speed-up: Sizzle("TAG")
					} else if (match[2]) {
						push.apply(results, context.getElementsByTagName(selector));
						return results;

						// Speed-up: Sizzle(".CLASS")
					} else if ((m = match[3]) && support.getElementsByClassName) {
						push.apply(results, context.getElementsByClassName(m));
						return results;
					}
				}

				// QSA path
				if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
					nid = old = expando;
					newContext = context;
					newSelector = nodeType !== 1 && selector;

					// qSA works strangely on Element-rooted queries
					// We can work around this by specifying an extra ID on the root
					// and working up from there (Thanks to Andrew Dupont for the technique)
					// IE 8 doesn't work on object elements
					if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
						groups = tokenize(selector);

						if (old = context.getAttribute("id")) {
							nid = old.replace(rescape, "\\$&");
						} else {
							context.setAttribute("id", nid);
						}
						nid = "[id='" + nid + "'] ";

						i = groups.length;
						while (i--) {
							groups[i] = nid + toSelector(groups[i]);
						}
						newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						newSelector = groups.join(",");
					}

					if (newSelector) {
						try {
							push.apply(results, newContext.querySelectorAll(newSelector));
							return results;
						} catch (qsaError) {} finally {
							if (!old) {
								context.removeAttribute("id");
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created div and expects a boolean result
   */
		function assert(fn) {
			var div = document.createElement("div");

			try {
				return !!fn(div);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (div.parentNode) {
					div.parentNode.removeChild(div);
				}
				// release memory in IE
				div = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = attrs.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    parent,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// If no document and documentElement is available, return
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Set our document
			document = doc;
			docElem = doc.documentElement;
			parent = doc.defaultView;

			// Support: IE>8
			// If iframe document is assigned to "document" variable and if iframe has been reloaded,
			// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
			// IE6-8 do not support the defaultView property so parent will be undefined
			if (parent && parent !== parent.top) {
				// IE11 does not have attachEvent, so all must suffer
				if (parent.addEventListener) {
					parent.addEventListener("unload", unloadHandler, false);
				} else if (parent.attachEvent) {
					parent.attachEvent("onunload", unloadHandler);
				}
			}

			/* Support tests
   ---------------------------------------------------------------------- */
			documentIsHTML = !isXML(doc);

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (div) {
				div.className = "i";
				return !div.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (div) {
				div.appendChild(doc.createComment(""));
				return !div.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(doc.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (div) {
				docElem.appendChild(div).id = expando;
				return !doc.getElementsByName || !doc.getElementsByName(expando).length;
			});

			// ID find and filter
			if (support.getById) {
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var m = context.getElementById(id);
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						return m && m.parentNode ? [m] : [];
					}
				};
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
			} else {
				// Support: IE6/7
				// getElementById is not reliable as a find shortcut
				delete Expr.find["ID"];

				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See http://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(doc.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (div) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// http://bugs.jquery.com/ticket/12359
					docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (div.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!div.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
					if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibing-combinator selector` fails
					if (!div.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (div) {
					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = doc.createElement("input");
					input.setAttribute("type", "hidden");
					div.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (div.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":enabled").length) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					div.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (div) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(div, "div");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(div, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully does not implement inclusive descendent
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return doc;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    outerCache,
						    node,
						    diff,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[expando] || (parent[expando] = {});
								cache = outerCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										outerCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}

								// Use previously-cached element index if available
							} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
								diff = cache[1];

								// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

									if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
										// Cache the index of each encountered element
										if (useCache) {
											(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
										}

										if (node === elem) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": function enabled(elem) {
					return elem.disabled === false;
				},

				"disabled": function disabled(elem) {
					return elem.disabled === true;
				},

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    checkNonElements = base && dir === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});
							if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[dir] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is no seed and only one group
			if (match.length === 1) {

				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (div1) {
			// Should return 1, but returns 4 (following)
			return div1.compareDocumentPosition(document.createElement("div")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (div) {
			div.innerHTML = "<a href='#'></a>";
			return div.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (div) {
			div.innerHTML = "<input/>";
			div.firstChild.setAttribute("value", "");
			return div.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (div) {
			return div.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;

	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				/* jshint -W018 */
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		if (typeof qualifier === "string") {
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			qualifier = jQuery.filter(qualifier, elements);
		}

		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) >= 0 !== not;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    len = this.length,
			    ret = [],
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    init = jQuery.fn.init = function (selector, context) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {
							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if (elem && elem.parentNode) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || rootjQuery).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) :
			// Execute immediately if ready is not present
			selector(jQuery);
		}

		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.extend({
		dir: function dir(elem, _dir, until) {
			var matched = [],
			    truncate = until !== undefined;

			while ((elem = elem[_dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		},

		sibling: function sibling(n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function has(target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

			for (; i < l; i++) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
					// Always skip document fragments
					if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

						matched.push(cur);
						break;
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function add(selector, context) {
			return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return jQuery.dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return jQuery.dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return jQuery.dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return jQuery.dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return jQuery.dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return jQuery.dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return jQuery.sibling(elem.firstChild);
		},
		contents: function contents(elem) {
			return elem.contentDocument || jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {
				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.unique(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnotwhite = /\S+/g;

	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options) {
		var object = optionsCache[options] = {};
		jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

		var // Last fire value (for non-forgettable lists)
		memory,

		// Flag to know if list was already fired
		_fired,

		// Flag to know if list is currently firing
		firing,

		// First callback to fire (used internally by add and fireWith)
		firingStart,

		// End of the loop when firing
		firingLength,

		// Index of currently firing callback (modified by remove if needed)
		firingIndex,

		// Actual callback list
		list = [],

		// Stack of fire calls for repeatable lists
		stack = !options.once && [],

		// Fire callbacks
		fire = function fire(data) {
			memory = options.memory && data;
			_fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for (; list && firingIndex < firingLength; firingIndex++) {
				if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if (list) {
				if (stack) {
					if (stack.length) {
						fire(stack.shift());
					}
				} else if (memory) {
					list = [];
				} else {
					self.disable();
				}
			}
		},

		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {
					// First, we save the current length
					var start = list.length;
					(function add(args) {
						jQuery.each(args, function (_, arg) {
							var type = jQuery.type(arg);
							if (type === "function") {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && type !== "string") {
								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);
					// Do we need to add the callbacks to the
					// current firing batch?
					if (firing) {
						firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
					} else if (memory) {
						firingStart = start;
						fire(memory);
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function remove() {
				if (list) {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);
							// Handle firing indexes
							if (firing) {
								if (index <= firingLength) {
									firingLength--;
								}
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
			},
			// Remove all callbacks from the list
			empty: function empty() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function disable() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function disabled() {
				return !list;
			},
			// Lock the list in its current state
			lock: function lock() {
				stack = undefined;
				if (!memory) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function locked() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (list && (!_fired || stack)) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					if (firing) {
						stack.push(args);
					} else {
						fire(args);
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};

	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [
			// action, add listener, listener list, final state
			["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				then: function then() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;
					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {
							var fn = jQuery.isFunction(fns[i]) && fns[i];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
								} else {
									newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Keep pipe for back-compat
			_promise.pipe = _promise.then;

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[3];

				// promise[ done | fail | progress ] = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {
						// state = [ resolved | rejected ]
						_state = stateString;

						// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}

				// deferred[ resolve | reject | notify ]
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(subordinate /* , ..., subordinateN */) {
			var i = 0,
			    resolveValues = _slice.call(arguments),
			    length = resolveValues.length,


			// the count of uncompleted subordinates
			remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


			// Update function for both resolve and progress values
			updateFunc = function updateFunc(i, contexts, values) {
				return function (value) {
					contexts[i] = this;
					values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
					if (values === progressValues) {
						deferred.notifyWith(contexts, values);
					} else if (! --remaining) {
						deferred.resolveWith(contexts, values);
					}
				};
			},
			    progressValues,
			    progressContexts,
			    resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}

			return deferred.promise();
		}
	});

	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function (fn) {
		// Add the callback
		jQuery.ready.promise().done(fn);

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function holdReady(hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);

			// Trigger any bound ready events
			if (jQuery.fn.triggerHandler) {
				jQuery(document).triggerHandler("ready");
				jQuery(document).off("ready");
			}
		}
	});

	/**
  * The ready event handler and self cleanup method
  */
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed, false);
		window.removeEventListener("load", completed, false);
		jQuery.ready();
	}

	jQuery.ready.promise = function (obj) {
		if (!readyList) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if (document.readyState === "complete") {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout(jQuery.ready);
			} else {

				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed, false);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed, false);
			}
		}
		return readyList.promise(obj);
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {
				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function fn(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		return chainable ? elems :

		// Gets
		bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
	};

	/**
  * Determines whether an object can have data
  */
	jQuery.acceptData = function (owner) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty(this.cache = {}, 0, {
			get: function get() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function key(owner) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if (!Data.accepts(owner)) {
				return 0;
			}

			var descriptor = {},

			// Check if the owner object already has a cache key
			unlock = owner[this.expando];

			// If not, create one
			if (!unlock) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[this.expando] = { value: unlock };
					Object.defineProperties(owner, descriptor);

					// Support: Android<4
					// Fallback to a less secure definition
				} catch (e) {
					descriptor[this.expando] = unlock;
					jQuery.extend(owner, descriptor);
				}
			}

			// Ensure the cache object
			if (!this.cache[unlock]) {
				this.cache[unlock] = {};
			}

			return unlock;
		},
		set: function set(owner, data, value) {
			var prop,

			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key(owner),
			    cache = this.cache[unlock];

			// Handle: [ owner, key, value ] args
			if (typeof data === "string") {
				cache[data] = value;

				// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if (jQuery.isEmptyObject(cache)) {
					jQuery.extend(this.cache[unlock], data);
					// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for (prop in data) {
						cache[prop] = data[prop];
					}
				}
			}
			return cache;
		},
		get: function get(owner, key) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[this.key(owner)];

			return key === undefined ? cache : cache[key];
		},
		access: function access(owner, key, value) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				stored = this.get(owner, key);

				return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function remove(owner, key) {
			var i,
			    name,
			    camel,
			    unlock = this.key(owner),
			    cache = this.cache[unlock];

			if (key === undefined) {
				this.cache[unlock] = {};
			} else {
				// Support array or space separated string of keys
				if (jQuery.isArray(key)) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat(key.map(jQuery.camelCase));
				} else {
					camel = jQuery.camelCase(key);
					// Try the string as a key before any manipulation
					if (key in cache) {
						name = [key, camel];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ? [name] : name.match(rnotwhite) || [];
					}
				}

				i = name.length;
				while (i--) {
					delete cache[name[i]];
				}
			}
		},
		hasData: function hasData(owner) {
			return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
		},
		discard: function discard(owner) {
			if (owner[this.expando]) {
				delete this.cache[owner[this.expando]];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /([A-Z])/g;

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				data_user.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function hasData(elem) {
			return data_user.hasData(elem) || data_priv.hasData(elem);
		},

		data: function data(elem, name, _data) {
			return data_user.access(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			data_user.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function _data(elem, name, data) {
			return data_priv.access(elem, name, data);
		},

		_removeData: function _removeData(elem, name) {
			data_priv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = data_user.get(elem);

					if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						data_priv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					data_user.set(this, key);
				});
			}

			return access(this, function (value) {
				var data,
				    camelKey = jQuery.camelCase(key);

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get(elem, camelKey);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, camelKey, undefined);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get(this, camelKey);

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set(this, camelKey, value);

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if (key.indexOf("-") !== -1 && data !== undefined) {
						data_user.set(this, key, value);
					}
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function removeData(key) {
			return this.each(function () {
				data_user.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = data_priv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = data_priv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return data_priv.get(elem, key) || data_priv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					data_priv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = data_priv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHidden = function isHidden(elem, el) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	};

	var rcheckableType = /^(?:checkbox|radio)$/i;

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var strundefined =  true ? "undefined" : _typeof(undefined);

	support.focusinBubbles = "onfocusin" in window;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = data_priv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle, false);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = data_priv.hasData(elem) && data_priv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;
				data_priv.remove(elem, "events");
			}
		},

		trigger: function trigger(event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") >= 0) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && jQuery.acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function dispatch(event) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix(event);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue = [],
			    args = _slice.call(arguments),
			    handlers = (data_priv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var i,
			    matches,
			    sel,
			    handleObj,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.disabled !== true || event.type !== "click") {
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function filter(event, original) {

				// Add which for key events
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function filter(event, original) {
				var eventDoc,
				    doc,
				    body,
				    button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if (!event.which && button !== undefined) {
					event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
				}

				return event;
			}
		},

		fix: function fix(event) {
			if (event[jQuery.expando]) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i,
			    prop,
			    copy,
			    type = event.type,
			    originalEvent = event,
			    fixHook = this.fixHooks[type];

			if (!fixHook) {
				this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
			}
			copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

			event = new jQuery.Event(originalEvent);

			i = copy.length;
			while (i--) {
				prop = copy[i];
				event[prop] = originalEvent[prop];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if (!event.target) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function simulate(type, elem, event, bubble) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true,
				originalEvent: {}
			});
			if (bubble) {
				jQuery.event.trigger(e, null, elem);
			} else {
				jQuery.event.dispatch.call(elem, e);
			}
			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}
	};

	jQuery.Event = function (src, props) {
		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
			// Support: Android<4.0
			src.returnValue === false ? returnTrue : returnFalse;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && e.preventDefault) {
				e.preventDefault();
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && e.stopPropagation) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && e.stopImmediatePropagation) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if (!support.focusinBubbles) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					var doc = this.ownerDocument || this,
					    attaches = data_priv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					data_priv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function teardown() {
					var doc = this.ownerDocument || this,
					    attaches = data_priv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						data_priv.remove(doc, fix);
					} else {
						data_priv.access(doc, fix, attaches);
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function on(types, selector, data, fn, /*INTERNAL*/one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					this.on(type, selector, data, types[type], one);
				}
				return this;
			}

			if (data == null && fn == null) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return this;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return this.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		},
		one: function one(types, selector, data, fn) {
			return this.on(types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    rtagName = /<([\w:]+)/,
	    rhtml = /<|&#?\w+;/,
	    rnoInnerhtml = /<(?:script|style|link)/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptType = /^$|\/(?:java|ecma)script/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,


	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [1, "<select multiple='multiple'>", "</select>"],

		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget(elem, content) {
		return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
		}
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (data_priv.hasData(src)) {
			pdataOld = data_priv.access(src);
			pdataCur = data_priv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (data_user.hasData(src)) {
			udataOld = data_user.access(src);
			udataCur = jQuery.extend({}, udataOld);

			data_user.set(dest, udataCur);
		}
	}

	function getAll(context, tag) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];

		return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function buildFragment(elems, context, scripts, selection) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    contains,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, tmp.childNodes);

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while (elem = nodes[i++]) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if (selection && jQuery.inArray(elem, selection) !== -1) {
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function cleanData(elems) {
			var data,
			    elem,
			    type,
			    key,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (jQuery.acceptData(elem)) {
					key = elem[data_priv.expando];

					if (key && (data = data_priv.cache[key])) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}
						if (data_priv.cache[key]) {
							// Discard any remaining `private` data
							delete data_priv.cache[key];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[elem[data_user.expando]];
			}
		}
	});

	jQuery.fn.extend({
		text: function text(value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function append() {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		remove: function remove(selector, keepData /* Internal Use Only */) {
			var elem,
			    elems = selector ? jQuery.filter(selector, this) : this,
			    i = 0;

			for (; (elem = elems[i]) != null; i++) {
				if (!keepData && elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem));
				}

				if (elem.parentNode) {
					if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
						setGlobalEval(getAll(elem, "script"));
					}
					elem.parentNode.removeChild(elem);
				}
			}

			return this;
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = value.replace(rxhtmlTag, "<$1></$2>");

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var arg = arguments[0];

			// Make the changes, replacing each context element with the new content
			this.domManip(arguments, function (elem) {
				arg = this.parentNode;

				jQuery.cleanData(getAll(this));

				if (arg) {
					arg.replaceChild(elem, this);
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function detach(selector) {
			return this.remove(selector, true);
		},

		domManip: function domManip(args, callback) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = this.length,
			    set = this,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return this.each(function (index) {
					var self = set.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					self.domManip(args, callback);
				});
			}

			if (l) {
				fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				if (first) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(this[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {
									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});

	var iframe,
	    elemdisplay = {};

	/**
  * Retrieve the actual display of a element
  * @param {String} name nodeName of the element
  * @param {Object} doc Document object
  */
	// Called only from within defaultDisplay
	function actualDisplay(name, doc) {
		var style,
		    elem = jQuery(doc.createElement(name)).appendTo(doc.body),


		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?

		// Use of this method is a temporary fix (more like optimization) until something better comes along,
		// since it was removed from specification and supported only in FF
		style.display : jQuery.css(elem[0], "display");

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
  * Try to determine the default display value of an element
  * @param {String} nodeName
  */
	function defaultDisplay(nodeName) {
		var doc = document,
		    display = elemdisplay[nodeName];

		if (!display) {
			display = actualDisplay(nodeName, doc);

			// If the simple way fails, read from inside an iframe
			if (display === "none" || !display) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[0].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay(nodeName, doc);
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[nodeName] = display;
		}

		return display;
	}
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function getStyles(elem) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if (elem.ownerDocument.defaultView.opener) {
			return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
		}

		return window.getComputedStyle(elem, null);
	};

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,
		    style = elem.style;

		computed = computed || getStyles(elem);

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];
		}

		if (computed) {

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if (rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function get() {
				if (conditionFn()) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	(function () {
		var pixelPositionVal,
		    boxSizingReliableVal,
		    docElem = document.documentElement,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		if (!div.style) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
		container.appendChild(div);

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild(container);

			var divStyle = window.getComputedStyle(div, null);
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild(container);
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if (window.getComputedStyle) {
			jQuery.extend(support, {
				pixelPosition: function pixelPosition() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function boxSizingReliable() {
					if (boxSizingReliableVal == null) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function reliableMarginRight() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
					    marginDiv = div.appendChild(document.createElement("div"));

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild(container);

					ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);

					docElem.removeChild(container);
					div.removeChild(marginDiv);

					return ret;
				}
			});
		}
	})();

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function (elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
	    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style, name) {

		// Shortcut for names that are not vendor prefixed
		if (name in style) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    origName = name,
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in style) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === (isBorderBox ? "border" : "content") ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,
		    val = 0;

		for (; i < 4; i += 2) {
			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {
				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
		    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		    styles = getStyles(elem),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    hidden,
		    values = [],
		    index = 0,
		    length = elements.length;

		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			values[index] = data_priv.get(elem, "olddisplay");
			display = elem.style.display;
			if (show) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if (!values[index] && display === "none") {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
				}
			} else {
				hidden = isHidden(elem);

				if (display !== "none" || !hidden) {
					data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rrelNum.exec(value))) {
					value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if (type === "number" && !jQuery.cssNumber[origName]) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
					style[name] = value;
				}
			} else {
				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function set(elem, value, extra) {
				var styles = extra && getStyles(elem);
				return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
		if (computed) {
			return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function css(name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
	    rrun = /queueHooks$/,
	    animationPrefilters = [defaultPrefilter],
	    tweeners = {
		"*": [function (prop, value) {
			var tween = this.createTween(prop, value),
			    target = tween.cur(),
			    parts = rfxnum.exec(value),
			    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
			    scale = 1,
			    maxIterations = 20;

			if (start && start[3] !== unit) {
				// Trust units reported by jQuery.css
				unit = unit || start[3];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style(tween.elem, prop, start + unit);

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
			}

			// Update tween properties
			if (parts) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
			}

			return tween;
		}]
	};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (tweeners[prop] || []).concat(tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		/* jshint validthis: true */
		var prop,
		    value,
		    toggle,
		    tween,
		    hooks,
		    oldfire,
		    display,
		    checkDisplay,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHidden(elem),
		    dataShow = data_priv.get(elem, "fxshow");

		// Handle queue: false promises
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {
				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css(elem, "display");

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

			if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
				style.display = "inline-block";
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// show/hide pass
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.exec(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

				// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if (!jQuery.isEmptyObject(orig)) {
			if (dataShow) {
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access(elem, "fxshow", {});
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if (toggle) {
				dataShow.hidden = !hidden;
			}
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;

				data_priv.remove(elem, "fxshow");
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (prop in orig) {
				tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

			// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
			style.display = display;
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = animationPrefilters.length,
		    deferred = jQuery.Deferred().always(function () {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

			// Support: Android 2.3
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, { specialEasing: {} }, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,

				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = animationPrefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		// attach callbacks from options
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.split(" ");
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				tweeners[prop] = tweeners[prop] || [];
				tweeners[prop].unshift(callback);
			}
		},

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				animationPrefilters.unshift(callback);
			} else {
				animationPrefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHidden).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || data_priv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = data_priv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = data_priv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];
			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		clearInterval(timerId);
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = setTimeout(next, time);
			hooks.stop = function () {
				clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var nodeHook,
	    boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function attr(elem, name, value) {
			var hooks,
			    ret,
			    nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (_typeof(elem.getAttribute) === strundefined) {
				return jQuery.prop(elem, name, value);
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
			}

			if (value !== undefined) {

				if (value === null) {
					jQuery.removeAttr(elem, name);
				} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				} else {
					elem.setAttribute(name, value + "");
					return value;
				}
			} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			} else {
				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    propName,
			    i = 0,
			    attrNames = value && value.match(rnotwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					propName = jQuery.propFix[name] || name;

					// Boolean attributes get special treatment (#10870)
					if (jQuery.expr.match.bool.test(name)) {
						// Set corresponding property to false
						elem[propName] = false;
					}

					elem.removeAttribute(name);
				}
			}
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret, handle;
			if (!isXML) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[name];
				attrHandle[name] = ret;
				ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
				attrHandle[name] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function prop(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    notxml,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

			if (notxml) {
				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
			} else {
				return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
			}
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {
					return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
				}
			}
		}
	});

	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {
				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    finalValue,
			    proceed = typeof value === "string" && value,
			    i = 0,
			    len = this.length;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, this.className));
				});
			}

			if (proceed) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = (value || "").match(rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim(cur);
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    finalValue,
			    proceed = arguments.length === 0 || typeof value === "string" && value,
			    i = 0,
			    len = this.length;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, this.className));
				});
			}
			if (proceed) {
				classes = (value || "").match(rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") >= 0) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim(cur) : "";
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value);

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
				});
			}

			return this.each(function () {
				if (type === "string") {
					// Toggle individual class names
					var className,
					    i = 0,
					    self = jQuery(this),
					    classNames = value.match(rnotwhite) || [];

					while (className = classNames[i++]) {
						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (type === strundefined || type === "boolean") {
					if (this.className) {
						// store className if set
						data_priv.set(this, "__className__", this.className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className = " " + selector + " ",
			    i = 0,
			    l = this.length;
			for (; i < l; i++) {
				if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function val(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {
					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim(jQuery.text(elem));
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one" || index < 0,
					    values = one ? null : [],
					    max = one ? index + 1 : options.length,
					    i = index < 0 ? max : one ? index : 0;

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) && (
						// Don't return options that are disabled or in a disabled optgroup
						support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];
						if (option.selected = jQuery.inArray(option.value, values) >= 0) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (jQuery.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		},

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function (data) {
		return JSON.parse(data + "");
	};

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml, tmp;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rhash = /#.*$/,
	    rts = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,
	    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Document location
	ajaxLocation = window.location.href,


	// Segment location into parts
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

			if (jQuery.isFunction(func)) {
				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {
					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {
									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s["throws"]) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			    responseHeaders,

			// timeout handle
			timeoutTimer,

			// Cross-domain detection vars
			parts,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup({}, options),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),

			// Status-dependent callbacks
			_statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (state === 2) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					var lname = name.toLowerCase();
					if (!state) {
						name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (!state) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (state < 2) {
							for (code in map) {
								// Lazy-add the new callback in a way that preserves old ones
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase());
				s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (state === 2) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if (!s.hasContent) {

				// If data is available, append data to url
				if (s.data) {
					cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if (s.cache === false) {
					s.url = rts.test(cacheURL) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace(rts, "$1_=" + nonce++) :

					// Otherwise add one to the end
					cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for (i in { success: 1, error: 1, complete: 1 }) {
				jqXHR[i](s[i]);
			}

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {
					// Propagate exception as error if not done
					if (state < 2) {
						done(-1, e);
						// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Called once
				if (state === 2) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {
			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			var wrap;

			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}

			if (this[0]) {

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap() {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		}
	});

	jQuery.expr.filters.hidden = function (elem) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function (elem) {
		return !jQuery.expr.filters.hidden(elem);
	};

	var r20 = /%20/g,
	    rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {
			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {
					// Treat each array item as a scalar.
					add(prefix, v);
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {
			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {
			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, value) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	};

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest();
		} catch (e) {}
	};

	var xhrId = 0,
	    xhrCallbacks = {},
	    xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if (window.attachEvent) {
		window.attachEvent("onunload", function () {
			for (var key in xhrCallbacks) {
				xhrCallbacks[key]();
			}
		});
	}

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var _callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function send(headers, complete) {
					var i,
					    xhr = options.xhr(),
					    id = ++xhrId;

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					_callback = function callback(type) {
						return function () {
							if (_callback) {
								delete xhrCallbacks[id];
								_callback = xhr.onload = xhr.onerror = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {
									complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status, xhr.statusText);
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = _callback();
					xhr.onerror = _callback("error");

					// Create the abort callback
					_callback = xhrCallbacks[id] = _callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (_callback) {
							throw e;
						}
					}
				},

				abort: function abort() {
					if (_callback) {
						_callback();
					}
				}
			};
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {
		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, _callback2;
			return {
				send: function send(_, complete) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", _callback2 = function callback(evt) {
						script.remove();
						_callback2 = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});
					document.head.appendChild(script[0]);
				},
				abort: function abort() {
					if (_callback2) {
						_callback2();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {
				// Restore preexisting value
				window[callbackName] = overwritten;

				// Save back as free
				if (s[callbackName]) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (!data || typeof data !== "string") {
			return null;
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec(data),
		    scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = jQuery.buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}

		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off >= 0) {
			selector = jQuery.trim(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);
			}).complete(callback && function (jqXHR, status) {
				self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.filters.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	var docElem = window.document.documentElement;

	/**
  * Gets a window from an element
  */
	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function setOffset(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, curOffset);
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function offset(options) {
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var docElem,
			    win,
			    elem = this[0],
			    box = { top: 0, left: 0 },
			    doc = elem && elem.ownerDocument;

			if (!doc) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if (!jQuery.contains(docElem, elem)) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if (_typeof(elem.getBoundingClientRect) !== strundefined) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow(doc);
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent || docElem;

				while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable, null);
			};
		});
	});

	// The number of elements contained in the matched element set
	jQuery.fn.size = function () {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ((typeof noGlobal === "undefined" ? "undefined" : _typeof(noGlobal)) === strundefined) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    function corslite(n, t, o) {
      function e(n) {
        return n >= 200 && 300 > n || 304 === n;
      }function i() {
        void 0 === r.status || e(r.status) ? t.call(r, null, r) : t.call(r, r, null);
      }var l = !1;if ("undefined" == typeof window.XMLHttpRequest) return t(Error("Browser not supported"));if ("undefined" == typeof o) {
        var u = n.match(/^\s*https?:\/\/[^\/]*/);o = u && u[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "");
      }var r = new window.XMLHttpRequest();if (o && !("withCredentials" in r)) {
        r = new window.XDomainRequest();var a = t;t = function t() {
          if (l) a.apply(this, arguments);else {
            var n = this,
                t = arguments;setTimeout(function () {
              a.apply(n, t);
            }, 0);
          }
        };
      }return "onload" in r ? r.onload = i : r.onreadystatechange = function () {
        4 === r.readyState && i();
      }, r.onerror = function (n) {
        t.call(this, n || !0, null), t = function t() {};
      }, r.onprogress = function () {}, r.ontimeout = function (n) {
        t.call(this, n, null), t = function t() {};
      }, r.onabort = function (n) {
        t.call(this, n, null), t = function t() {};
      }, r.open("GET", n, !0), r.send(null), l = !0, r;
    }"undefined" != typeof module && (module.exports = corslite);
  }, {}], 2: [function (require, module, exports) {
    module.exports = Array.isArray || function (r) {
      return "[object Array]" == Object.prototype.toString.call(r);
    };
  }, {}], 3: [function (require, module, exports) {
    !function (t, e, i) {
      var n = t.L,
          o = {};o.version = "0.7.7", "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = o : "function" == "function" && __webpack_require__(3) && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), o.noConflict = function () {
        return t.L = n, this;
      }, t.L = o, o.Util = { extend: function extend(t) {
          var e,
              i,
              n,
              o,
              s = Array.prototype.slice.call(arguments, 1);for (i = 0, n = s.length; n > i; i++) {
            o = s[i] || {};for (e in o) {
              o.hasOwnProperty(e) && (t[e] = o[e]);
            }
          }return t;
        }, bind: function bind(t, e) {
          var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;return function () {
            return t.apply(e, i || arguments);
          };
        }, stamp: function () {
          var t = 0,
              e = "_leaflet_id";return function (i) {
            return i[e] = i[e] || ++t, i[e];
          };
        }(), invokeEach: function invokeEach(t, e, i) {
          var n, o;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
            o = Array.prototype.slice.call(arguments, 3);for (n in t) {
              e.apply(i, [n, t[n]].concat(o));
            }return !0;
          }return !1;
        }, limitExecByInterval: function limitExecByInterval(t, e, i) {
          var n, o;return function s() {
            var a = arguments;return n ? void (o = !0) : (n = !0, setTimeout(function () {
              n = !1, o && (s.apply(i, a), o = !1);
            }, e), void t.apply(i, a));
          };
        }, falseFn: function falseFn() {
          return !1;
        }, formatNum: function formatNum(t, e) {
          var i = Math.pow(10, e || 5);return Math.round(t * i) / i;
        }, trim: function trim(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }, splitWords: function splitWords(t) {
          return o.Util.trim(t).split(/\s+/);
        }, setOptions: function setOptions(t, e) {
          return t.options = o.extend({}, t.options, e), t.options;
        }, getParamString: function getParamString(t, e, i) {
          var n = [];for (var o in t) {
            n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
          }return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&");
        }, template: function template(t, e) {
          return t.replace(/\{ *([\w_]+) *\}/g, function (t, n) {
            var o = e[n];if (o === i) throw new Error("No value provided for variable " + t);return "function" == typeof o && (o = o(e)), o;
          });
        }, isArray: Array.isArray || function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }, emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" }, function () {
        function e(e) {
          var i,
              n,
              o = ["webkit", "moz", "o", "ms"];for (i = 0; i < o.length && !n; i++) {
            n = t[o[i] + e];
          }return n;
        }function i(e) {
          var i = +new Date(),
              o = Math.max(0, 16 - (i - n));return n = i + o, t.setTimeout(e, o);
        }var n = 0,
            s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
            a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
          t.clearTimeout(e);
        };o.Util.requestAnimFrame = function (e, n, a, r) {
          return e = o.bind(e, n), a && s === i ? void e() : s.call(t, e, r);
        }, o.Util.cancelAnimFrame = function (e) {
          e && a.call(t, e);
        };
      }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {}, o.Class.extend = function (t) {
        var e = function e() {
          this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks();
        },
            i = function i() {};i.prototype = this.prototype;var n = new i();n.constructor = e, e.prototype = n;for (var s in this) {
          this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
        }t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = o.extend({}, n.options, t.options)), o.extend(n, t), n._initHooks = [];var a = this;return e.__super__ = a.prototype, n.callInitHooks = function () {
          if (!this._initHooksCalled) {
            a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;for (var t = 0, e = n._initHooks.length; e > t; t++) {
              n._initHooks[t].call(this);
            }
          }
        }, e;
      }, o.Class.include = function (t) {
        o.extend(this.prototype, t);
      }, o.Class.mergeOptions = function (t) {
        o.extend(this.prototype.options, t);
      }, o.Class.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function () {
          this[t].apply(this, e);
        };this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i);
      };var s = "_leaflet_events";o.Mixin = {}, o.Mixin.Events = { addEventListener: function addEventListener(t, e, i) {
          if (o.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;var n,
              a,
              r,
              h,
              l,
              u,
              c,
              d = this[s] = this[s] || {},
              p = i && i !== this && o.stamp(i);for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++) {
            r = { action: e, context: i || this }, h = t[n], p ? (l = h + "_idx", u = l + "_len", c = d[l] = d[l] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(r)) : (d[h] = d[h] || [], d[h].push(r));
          }return this;
        }, hasEventListeners: function hasEventListeners(t) {
          var e = this[s];return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0);
        }, removeEventListener: function removeEventListener(t, e, i) {
          if (!this[s]) return this;if (!t) return this.clearAllEventListeners();if (o.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;var n,
              a,
              r,
              h,
              l,
              u,
              c,
              d,
              p,
              _ = this[s],
              m = i && i !== this && o.stamp(i);for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++) {
            if (r = t[n], u = r + "_idx", c = u + "_len", d = _[u], e) {
              if (h = m && d ? d[m] : _[r]) {
                for (l = h.length - 1; l >= 0; l--) {
                  h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1), p[0].action = o.Util.falseFn);
                }i && d && 0 === h.length && (delete d[m], _[c]--);
              }
            } else delete _[r], delete _[u], delete _[c];
          }return this;
        }, clearAllEventListeners: function clearAllEventListeners() {
          return delete this[s], this;
        }, fireEvent: function fireEvent(t, e) {
          if (!this.hasEventListeners(t)) return this;var i,
              n,
              a,
              r,
              h,
              l = o.Util.extend({}, e, { type: t, target: this }),
              u = this[s];if (u[t]) for (i = u[t].slice(), n = 0, a = i.length; a > n; n++) {
            i[n].action.call(i[n].context, l);
          }r = u[t + "_idx"];for (h in r) {
            if (i = r[h].slice()) for (n = 0, a = i.length; a > n; n++) {
              i[n].action.call(i[n].context, l);
            }
          }return this;
        }, addOneTimeEventListener: function addOneTimeEventListener(t, e, i) {
          if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;var n = o.bind(function () {
            this.removeEventListener(t, e, i).removeEventListener(t, n, i);
          }, this);return this.addEventListener(t, e, i).addEventListener(t, n, i);
        } }, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent, function () {
        var n = "ActiveXObject" in t,
            s = n && !e.addEventListener,
            a = navigator.userAgent.toLowerCase(),
            r = -1 !== a.indexOf("webkit"),
            h = -1 !== a.indexOf("chrome"),
            l = -1 !== a.indexOf("phantom"),
            u = -1 !== a.indexOf("android"),
            c = -1 !== a.search("android [23]"),
            d = -1 !== a.indexOf("gecko"),
            p = (typeof orientation === "undefined" ? "undefined" : _typeof(orientation)) != i + "",
            _ = !t.PointerEvent && t.MSPointerEvent,
            m = t.PointerEvent && t.navigator.pointerEnabled || _,
            f = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
            g = e.documentElement,
            v = n && "transition" in g.style,
            y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix() && !c,
            P = "MozPerspective" in g.style,
            L = "OTransition" in g.style,
            x = !t.L_DISABLE_3D && (v || y || P || L) && !l,
            w = !t.L_NO_TOUCH && !l && (m || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch);o.Browser = { ie: n, ielt9: s, webkit: r, gecko: d && !r && !t.opera && !n, android: u, android23: c, chrome: h, ie3d: v, webkit3d: y, gecko3d: P, opera3d: L, any3d: x, mobile: p, mobileWebkit: p && r, mobileWebkit3d: p && y, mobileOpera: p && t.opera, touch: w, msPointer: _, pointer: m, retina: f };
      }(), o.Point = function (t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }, o.Point.prototype = { clone: function clone() {
          return new o.Point(this.x, this.y);
        }, add: function add(t) {
          return this.clone()._add(o.point(t));
        }, _add: function _add(t) {
          return this.x += t.x, this.y += t.y, this;
        }, subtract: function subtract(t) {
          return this.clone()._subtract(o.point(t));
        }, _subtract: function _subtract(t) {
          return this.x -= t.x, this.y -= t.y, this;
        }, divideBy: function divideBy(t) {
          return this.clone()._divideBy(t);
        }, _divideBy: function _divideBy(t) {
          return this.x /= t, this.y /= t, this;
        }, multiplyBy: function multiplyBy(t) {
          return this.clone()._multiplyBy(t);
        }, _multiplyBy: function _multiplyBy(t) {
          return this.x *= t, this.y *= t, this;
        }, round: function round() {
          return this.clone()._round();
        }, _round: function _round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }, floor: function floor() {
          return this.clone()._floor();
        }, _floor: function _floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }, distanceTo: function distanceTo(t) {
          t = o.point(t);var e = t.x - this.x,
              i = t.y - this.y;return Math.sqrt(e * e + i * i);
        }, equals: function equals(t) {
          return t = o.point(t), t.x === this.x && t.y === this.y;
        }, contains: function contains(t) {
          return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        }, toString: function toString() {
          return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")";
        } }, o.point = function (t, e, n) {
        return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : new o.Point(t, e, n);
      }, o.Bounds = function (t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) {
          this.extend(i[n]);
        }
      }, o.Bounds.prototype = { extend: function extend(t) {
          return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
        }, getCenter: function getCenter(t) {
          return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
        }, getBottomLeft: function getBottomLeft() {
          return new o.Point(this.min.x, this.max.y);
        }, getTopRight: function getTopRight() {
          return new o.Point(this.max.x, this.min.y);
        }, getSize: function getSize() {
          return this.max.subtract(this.min);
        }, contains: function contains(t) {
          var e, i;return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
        }, intersects: function intersects(t) {
          t = o.bounds(t);var e = this.min,
              i = this.max,
              n = t.min,
              s = t.max,
              a = s.x >= e.x && n.x <= i.x,
              r = s.y >= e.y && n.y <= i.y;return a && r;
        }, isValid: function isValid() {
          return !(!this.min || !this.max);
        } }, o.bounds = function (t, e) {
        return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e);
      }, o.Transformation = function (t, e, i, n) {
        this._a = t, this._b = e, this._c = i, this._d = n;
      }, o.Transformation.prototype = { transform: function transform(t, e) {
          return this._transform(t.clone(), e);
        }, _transform: function _transform(t, e) {
          return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
        }, untransform: function untransform(t, e) {
          return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
        } }, o.DomUtil = { get: function get(t) {
          return "string" == typeof t ? e.getElementById(t) : t;
        }, getStyle: function getStyle(t, i) {
          var n = t.style[i];if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
            var o = e.defaultView.getComputedStyle(t, null);n = o ? o[i] : null;
          }return "auto" === n ? null : n;
        }, getViewportOffset: function getViewportOffset(t) {
          var i,
              n = 0,
              s = 0,
              a = t,
              r = e.body,
              h = e.documentElement;do {
            if (n += a.offsetTop || 0, s += a.offsetLeft || 0, n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = o.DomUtil.getStyle(a, "position"), a.offsetParent === r && "absolute" === i) break;if ("fixed" === i) {
              n += r.scrollTop || h.scrollTop || 0, s += r.scrollLeft || h.scrollLeft || 0;break;
            }if ("relative" === i && !a.offsetLeft) {
              var l = o.DomUtil.getStyle(a, "width"),
                  u = o.DomUtil.getStyle(a, "max-width"),
                  c = a.getBoundingClientRect();("none" !== l || "none" !== u) && (s += c.left + a.clientLeft), n += c.top + (r.scrollTop || h.scrollTop || 0);break;
            }a = a.offsetParent;
          } while (a);a = t;do {
            if (a === r) break;n -= a.scrollTop || 0, s -= a.scrollLeft || 0, a = a.parentNode;
          } while (a);return new o.Point(s, n);
        }, documentIsLtr: function documentIsLtr() {
          return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr;
        }, create: function create(t, i, n) {
          var o = e.createElement(t);return o.className = i, n && n.appendChild(o), o;
        }, hasClass: function hasClass(t, e) {
          if (t.classList !== i) return t.classList.contains(e);var n = o.DomUtil._getClass(t);return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
        }, addClass: function addClass(t, e) {
          if (t.classList !== i) for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++) {
            t.classList.add(n[s]);
          } else if (!o.DomUtil.hasClass(t, e)) {
            var r = o.DomUtil._getClass(t);o.DomUtil._setClass(t, (r ? r + " " : "") + e);
          }
        }, removeClass: function removeClass(t, e) {
          t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")));
        }, _setClass: function _setClass(t, e) {
          t.className.baseVal === i ? t.className = e : t.className.baseVal = e;
        }, _getClass: function _getClass(t) {
          return t.className.baseVal === i ? t.className : t.className.baseVal;
        }, setOpacity: function setOpacity(t, e) {
          if ("opacity" in t.style) t.style.opacity = e;else if ("filter" in t.style) {
            var i = !1,
                n = "DXImageTransform.Microsoft.Alpha";try {
              i = t.filters.item(n);
            } catch (o) {
              if (1 === e) return;
            }e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
          }
        }, testProp: function testProp(t) {
          for (var i = e.documentElement.style, n = 0; n < t.length; n++) {
            if (t[n] in i) return t[n];
          }return !1;
        }, getTranslateString: function getTranslateString(t) {
          var e = o.Browser.webkit3d,
              i = "translate" + (e ? "3d" : "") + "(",
              n = (e ? ",0" : "") + ")";return i + t.x + "px," + t.y + "px" + n;
        }, getScaleString: function getScaleString(t, e) {
          var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
              n = " scale(" + t + ") ";return i + n;
        }, setPosition: function setPosition(t, e, i) {
          t._leaflet_pos = e, !i && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
        }, getPosition: function getPosition(t) {
          return t._leaflet_pos;
        } }, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend", function () {
        if ("onselectstart" in e) o.extend(o.DomUtil, { disableTextSelection: function disableTextSelection() {
            o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault);
          }, enableTextSelection: function enableTextSelection() {
            o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault);
          } });else {
          var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);o.extend(o.DomUtil, { disableTextSelection: function disableTextSelection() {
              if (i) {
                var t = e.documentElement.style;this._userSelect = t[i], t[i] = "none";
              }
            }, enableTextSelection: function enableTextSelection() {
              i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect);
            } });
        }o.extend(o.DomUtil, { disableImageDrag: function disableImageDrag() {
            o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault);
          }, enableImageDrag: function enableImageDrag() {
            o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault);
          } });
      }(), o.LatLng = function (t, e, n) {
        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n));
      }, o.extend(o.LatLng, { DEG_TO_RAD: Math.PI / 180, RAD_TO_DEG: 180 / Math.PI, MAX_MARGIN: 1e-9 }), o.LatLng.prototype = { equals: function equals(t) {
          if (!t) return !1;t = o.latLng(t);var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));return e <= o.LatLng.MAX_MARGIN;
        }, toString: function toString(t) {
          return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")";
        }, distanceTo: function distanceTo(t) {
          t = o.latLng(t);var e = 6378137,
              i = o.LatLng.DEG_TO_RAD,
              n = (t.lat - this.lat) * i,
              s = (t.lng - this.lng) * i,
              a = this.lat * i,
              r = t.lat * i,
              h = Math.sin(n / 2),
              l = Math.sin(s / 2),
              u = h * h + l * l * Math.cos(a) * Math.cos(r);return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u));
        }, wrap: function wrap(t, e) {
          var i = this.lng;return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new o.LatLng(this.lat, i);
        } }, o.latLng = function (t, e) {
        return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t, e);
      }, o.LatLngBounds = function (t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) {
          this.extend(i[n]);
        }
      }, o.LatLngBounds.prototype = { extend: function extend(t) {
          if (!t) return this;var e = o.latLng(t);return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this;
        }, pad: function pad(t) {
          var e = this._southWest,
              i = this._northEast,
              n = Math.abs(e.lat - i.lat) * t,
              s = Math.abs(e.lng - i.lng) * t;return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s));
        }, getCenter: function getCenter() {
          return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        }, getSouthWest: function getSouthWest() {
          return this._southWest;
        }, getNorthEast: function getNorthEast() {
          return this._northEast;
        }, getNorthWest: function getNorthWest() {
          return new o.LatLng(this.getNorth(), this.getWest());
        }, getSouthEast: function getSouthEast() {
          return new o.LatLng(this.getSouth(), this.getEast());
        }, getWest: function getWest() {
          return this._southWest.lng;
        }, getSouth: function getSouth() {
          return this._southWest.lat;
        }, getEast: function getEast() {
          return this._northEast.lng;
        }, getNorth: function getNorth() {
          return this._northEast.lat;
        }, contains: function contains(t) {
          t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);var e,
              i,
              n = this._southWest,
              s = this._northEast;return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng;
        }, intersects: function intersects(t) {
          t = o.latLngBounds(t);var e = this._southWest,
              i = this._northEast,
              n = t.getSouthWest(),
              s = t.getNorthEast(),
              a = s.lat >= e.lat && n.lat <= i.lat,
              r = s.lng >= e.lng && n.lng <= i.lng;return a && r;
        }, toBBoxString: function toBBoxString() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        }, equals: function equals(t) {
          return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1;
        }, isValid: function isValid() {
          return !(!this._southWest || !this._northEast);
        } }, o.latLngBounds = function (t, e) {
        return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e);
      }, o.Projection = {}, o.Projection.SphericalMercator = { MAX_LATITUDE: 85.0511287798, project: function project(t) {
          var e = o.LatLng.DEG_TO_RAD,
              i = this.MAX_LATITUDE,
              n = Math.max(Math.min(i, t.lat), -i),
              s = t.lng * e,
              a = n * e;return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(s, a);
        }, unproject: function unproject(t) {
          var e = o.LatLng.RAD_TO_DEG,
              i = t.x * e,
              n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;return new o.LatLng(n, i);
        } }, o.Projection.LonLat = { project: function project(t) {
          return new o.Point(t.lng, t.lat);
        }, unproject: function unproject(t) {
          return new o.LatLng(t.y, t.x);
        } }, o.CRS = { latLngToPoint: function latLngToPoint(t, e) {
          var i = this.projection.project(t),
              n = this.scale(e);return this.transformation._transform(i, n);
        }, pointToLatLng: function pointToLatLng(t, e) {
          var i = this.scale(e),
              n = this.transformation.untransform(t, i);return this.projection.unproject(n);
        }, project: function project(t) {
          return this.projection.project(t);
        }, scale: function scale(t) {
          return 256 * Math.pow(2, t);
        }, getSize: function getSize(t) {
          var e = this.scale(t);return o.point(e, e);
        } }, o.CRS.Simple = o.extend({}, o.CRS, { projection: o.Projection.LonLat, transformation: new o.Transformation(1, 0, -1, 0), scale: function scale(t) {
          return Math.pow(2, t);
        } }), o.CRS.EPSG3857 = o.extend({}, o.CRS, { code: "EPSG:3857", projection: o.Projection.SphericalMercator, transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5), project: function project(t) {
          var e = this.projection.project(t),
              i = 6378137;return e.multiplyBy(i);
        } }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, { code: "EPSG:900913" }), o.CRS.EPSG4326 = o.extend({}, o.CRS, { code: "EPSG:4326", projection: o.Projection.LonLat, transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5) }), o.Map = o.Class.extend({ includes: o.Mixin.Events, options: { crs: o.CRS.EPSG3857, fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23, trackResize: !0, markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d }, initialize: function initialize(t, e) {
          e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, { reset: !0 }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers);
        }, setView: function setView(t, e) {
          return e = e === i ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this;
        }, setZoom: function setZoom(t, e) {
          return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = this._limitZoom(t), this);
        }, zoomIn: function zoomIn(t, e) {
          return this.setZoom(this._zoom + (t || 1), e);
        }, zoomOut: function zoomOut(t, e) {
          return this.setZoom(this._zoom - (t || 1), e);
        }, setZoomAround: function setZoomAround(t, e, i) {
          var n = this.getZoomScale(e),
              s = this.getSize().divideBy(2),
              a = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
              r = a.subtract(s).multiplyBy(1 - 1 / n),
              h = this.containerPointToLatLng(s.add(r));return this.setView(h, e, { zoom: i });
        }, fitBounds: function fitBounds(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
              n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
              s = this.getBoundsZoom(t, !1, i.add(n));s = e.maxZoom ? Math.min(e.maxZoom, s) : s;var a = n.subtract(i).divideBy(2),
              r = this.project(t.getSouthWest(), s),
              h = this.project(t.getNorthEast(), s),
              l = this.unproject(r.add(h).divideBy(2).add(a), s);return this.setView(l, s, e);
        }, fitWorld: function fitWorld(t) {
          return this.fitBounds([[-90, -180], [90, 180]], t);
        }, panTo: function panTo(t, e) {
          return this.setView(t, this._zoom, { pan: e });
        }, panBy: function panBy(t) {
          return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend");
        }, setMaxBounds: function setMaxBounds(t) {
          return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this);
        }, panInsideBounds: function panInsideBounds(t, e) {
          var i = this.getCenter(),
              n = this._limitCenter(i, this._zoom, t);return i.equals(n) ? this : this.panTo(n, e);
        }, addLayer: function addLayer(t) {
          var e = o.stamp(t);return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this);
        }, removeLayer: function removeLayer(t) {
          var e = o.stamp(t);return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", { layer: t }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this;
        }, hasLayer: function hasLayer(t) {
          return t ? o.stamp(t) in this._layers : !1;
        }, eachLayer: function eachLayer(t, e) {
          for (var i in this._layers) {
            t.call(e, this._layers[i]);
          }return this;
        }, invalidateSize: function invalidateSize(t) {
          if (!this._loaded) return this;t = o.extend({ animate: !1, pan: !0 }, t === !0 ? { animate: !0 } : t);var e = this.getSize();this._sizeChanged = !0, this._initialCenter = null;var i = this.getSize(),
              n = e.divideBy(2).round(),
              s = i.divideBy(2).round(),
              a = n.subtract(s);return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: e, newSize: i })) : this;
        }, addHandler: function addHandler(t, e) {
          if (!e) return this;var i = this[t] = new e(this);return this._handlers.push(i), this.options[t] && i.enable(), this;
        }, remove: function remove() {
          this._loaded && this.fire("unload"), this._initEvents("off");try {
            delete this._container._leaflet;
          } catch (t) {
            this._container._leaflet = i;
          }return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this;
        }, getCenter: function getCenter() {
          return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
        }, getZoom: function getZoom() {
          return this._zoom;
        }, getBounds: function getBounds() {
          var t = this.getPixelBounds(),
              e = this.unproject(t.getBottomLeft()),
              i = this.unproject(t.getTopRight());return new o.LatLngBounds(e, i);
        }, getMinZoom: function getMinZoom() {
          return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom;
        }, getMaxZoom: function getMaxZoom() {
          return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        }, getBoundsZoom: function getBoundsZoom(t, e, i) {
          t = o.latLngBounds(t);var n,
              s = this.getMinZoom() - (e ? 1 : 0),
              a = this.getMaxZoom(),
              r = this.getSize(),
              h = t.getNorthWest(),
              l = t.getSouthEast(),
              u = !0;i = o.point(i || [0, 0]);do {
            s++, n = this.project(l, s).subtract(this.project(h, s)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(n);
          } while (u && a >= s);return u && e ? null : e ? s : s - 1;
        }, getSize: function getSize() {
          return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone();
        }, getPixelBounds: function getPixelBounds() {
          var t = this._getTopLeftPoint();return new o.Bounds(t, t.add(this.getSize()));
        }, getPixelOrigin: function getPixelOrigin() {
          return this._checkIfLoaded(), this._initialTopLeftPoint;
        }, getPanes: function getPanes() {
          return this._panes;
        }, getContainer: function getContainer() {
          return this._container;
        }, getZoomScale: function getZoomScale(t) {
          var e = this.options.crs;return e.scale(t) / e.scale(this._zoom);
        }, getScaleZoom: function getScaleZoom(t) {
          return this._zoom + Math.log(t) / Math.LN2;
        }, project: function project(t, e) {
          return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e);
        }, unproject: function unproject(t, e) {
          return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e);
        }, layerPointToLatLng: function layerPointToLatLng(t) {
          var e = o.point(t).add(this.getPixelOrigin());return this.unproject(e);
        }, latLngToLayerPoint: function latLngToLayerPoint(t) {
          var e = this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin());
        }, containerPointToLayerPoint: function containerPointToLayerPoint(t) {
          return o.point(t).subtract(this._getMapPanePos());
        }, layerPointToContainerPoint: function layerPointToContainerPoint(t) {
          return o.point(t).add(this._getMapPanePos());
        }, containerPointToLatLng: function containerPointToLatLng(t) {
          var e = this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e);
        }, latLngToContainerPoint: function latLngToContainerPoint(t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)));
        }, mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
          return o.DomEvent.getMousePosition(t, this._container);
        }, mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        }, mouseEventToLatLng: function mouseEventToLatLng(t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        }, _initContainer: function _initContainer(t) {
          var e = this._container = o.DomUtil.get(t);if (!e) throw new Error("Map container not found.");if (e._leaflet) throw new Error("Map container is already initialized.");e._leaflet = !0;
        }, _initLayout: function _initLayout() {
          var t = this._container;o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));var e = o.DomUtil.getStyle(t, "position");"absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        }, _initPanes: function _initPanes() {
          var t = this._panes = {};this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");var e = " leaflet-zoom-hide";this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e));
        }, _createPane: function _createPane(t, e) {
          return o.DomUtil.create("div", t, e || this._panes.objectsPane);
        }, _clearPanes: function _clearPanes() {
          this._container.removeChild(this._mapPane);
        }, _addLayers: function _addLayers(t) {
          t = t ? o.Util.isArray(t) ? t : [t] : [];for (var e = 0, i = t.length; i > e; e++) {
            this.addLayer(t[e]);
          }
        }, _resetView: function _resetView(t, e, i, n) {
          var s = this._zoom !== e;n || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;var a = !this._loaded;this._loaded = !0, this.fire("viewreset", { hard: !i }), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (s || n) && this.fire("zoomend"), this.fire("moveend", { hard: !i });
        }, _rawPanBy: function _rawPanBy(t) {
          o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t));
        }, _getZoomSpan: function _getZoomSpan() {
          return this.getMaxZoom() - this.getMinZoom();
        }, _updateZoomLevels: function _updateZoomLevels() {
          var t,
              e = 1 / 0,
              n = -(1 / 0),
              o = this._getZoomSpan();for (t in this._zoomBoundLayers) {
            var s = this._zoomBoundLayers[t];isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (n = Math.max(n, s.options.maxZoom));
          }t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange");
        }, _panInsideMaxBounds: function _panInsideMaxBounds() {
          this.panInsideBounds(this.options.maxBounds);
        }, _checkIfLoaded: function _checkIfLoaded() {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        }, _initEvents: function _initEvents(e) {
          if (o.DomEvent) {
            e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);var i,
                n,
                s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];for (i = 0, n = s.length; n > i; i++) {
              o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
            }this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this);
          }
        }, _onResize: function _onResize() {
          o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this, !1, this._container);
        }, _onMouseClick: function _onMouseClick(t) {
          !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t));
        }, _fireMouseEvent: function _fireMouseEvent(t) {
          if (this._loaded && !o.DomEvent._skipped(t)) {
            var e = t.type;if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
              "contextmenu" === e && o.DomEvent.preventDefault(t);var i = this.mouseEventToContainerPoint(t),
                  n = this.containerPointToLayerPoint(i),
                  s = this.layerPointToLatLng(n);this.fire(e, { latlng: s, layerPoint: n, containerPoint: i, originalEvent: t });
            }
          }
        }, _onTileLayerLoad: function _onTileLayerLoad() {
          this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload");
        }, _clearHandlers: function _clearHandlers() {
          for (var t = 0, e = this._handlers.length; e > t; t++) {
            this._handlers[t].disable();
          }
        }, whenReady: function whenReady(t, e) {
          return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this;
        }, _layerAdd: function _layerAdd(t) {
          t.onAdd(this), this.fire("layeradd", { layer: t });
        }, _getMapPanePos: function _getMapPanePos() {
          return o.DomUtil.getPosition(this._mapPane);
        }, _moved: function _moved() {
          var t = this._getMapPanePos();return t && !t.equals([0, 0]);
        }, _getTopLeftPoint: function _getTopLeftPoint() {
          return this.getPixelOrigin().subtract(this._getMapPanePos());
        }, _getNewTopLeftPoint: function _getNewTopLeftPoint(t, e) {
          var i = this.getSize()._divideBy(2);return this.project(t, e)._subtract(i)._round();
        }, _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, e, i) {
          var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());return this.project(t, e)._subtract(n);
        }, _getCenterLayerPoint: function _getCenterLayerPoint() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        }, _getCenterOffset: function _getCenterOffset(t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        }, _limitCenter: function _limitCenter(t, e, i) {
          if (!i) return t;var n = this.project(t, e),
              s = this.getSize().divideBy(2),
              a = new o.Bounds(n.subtract(s), n.add(s)),
              r = this._getBoundsOffset(a, i, e);return this.unproject(n.add(r), e);
        }, _limitOffset: function _limitOffset(t, e) {
          if (!e) return t;var i = this.getPixelBounds(),
              n = new o.Bounds(i.min.add(t), i.max.add(t));return t.add(this._getBoundsOffset(n, e));
        }, _getBoundsOffset: function _getBoundsOffset(t, e, i) {
          var n = this.project(e.getNorthWest(), i).subtract(t.min),
              s = this.project(e.getSouthEast(), i).subtract(t.max),
              a = this._rebound(n.x, -s.x),
              r = this._rebound(n.y, -s.y);return new o.Point(a, r);
        }, _rebound: function _rebound(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        }, _limitZoom: function _limitZoom(t) {
          var e = this.getMinZoom(),
              i = this.getMaxZoom();return Math.max(e, Math.min(i, t));
        } }), o.map = function (t, e) {
        return new o.Map(t, e);
      }, o.Projection.Mercator = { MAX_LATITUDE: 85.0840591556, R_MINOR: 6356752.314245179, R_MAJOR: 6378137, project: function project(t) {
          var e = o.LatLng.DEG_TO_RAD,
              i = this.MAX_LATITUDE,
              n = Math.max(Math.min(i, t.lat), -i),
              s = this.R_MAJOR,
              a = this.R_MINOR,
              r = t.lng * e * s,
              h = n * e,
              l = a / s,
              u = Math.sqrt(1 - l * l),
              c = u * Math.sin(h);c = Math.pow((1 - c) / (1 + c), .5 * u);var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;return h = -s * Math.log(d), new o.Point(r, h);
        }, unproject: function unproject(t) {
          for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(_) > d && --p > 0;) {
            e = h * Math.sin(u), _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 * h)) - u, u += _;
          }return new o.LatLng(u * i, a);
        } }, o.CRS.EPSG3395 = o.extend({}, o.CRS, { code: "EPSG:3395", projection: o.Projection.Mercator,
        transformation: function () {
          var t = o.Projection.Mercator,
              e = t.R_MAJOR,
              i = .5 / (Math.PI * e);return new o.Transformation(i, .5, -i, .5);
        }() }), o.TileLayer = o.Class.extend({ includes: o.Mixin.Events, options: { minZoom: 0, maxZoom: 18, tileSize: 256, subdomains: "abc", errorTileUrl: "", attribution: "", zoomOffset: 0, opacity: 1, unloadInvisibleTiles: o.Browser.mobile, updateWhenIdle: o.Browser.mobile }, initialize: function initialize(t, e) {
          e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;var i = this.options.subdomains;"string" == typeof i && (this.options.subdomains = i.split(""));
        }, onAdd: function onAdd(t) {
          this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({ viewreset: this._reset, moveend: this._update }, this), this._animated && t.on({ zoomanim: this._animateZoom, zoomend: this._endZoomAnim }, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update();
        }, addTo: function addTo(t) {
          return t.addLayer(this), this;
        }, onRemove: function onRemove(t) {
          this._container.parentNode.removeChild(this._container), t.off({ viewreset: this._reset, moveend: this._update }, this), this._animated && t.off({ zoomanim: this._animateZoom, zoomend: this._endZoomAnim }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null;
        }, bringToFront: function bringToFront() {
          var t = this._map._panes.tilePane;return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this;
        }, bringToBack: function bringToBack() {
          var t = this._map._panes.tilePane;return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this;
        }, getAttribution: function getAttribution() {
          return this.options.attribution;
        }, getContainer: function getContainer() {
          return this._container;
        }, setOpacity: function setOpacity(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        }, setZIndex: function setZIndex(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        }, setUrl: function setUrl(t, e) {
          return this._url = t, e || this.redraw(), this;
        }, redraw: function redraw() {
          return this._map && (this._reset({ hard: !0 }), this._update()), this;
        }, _updateZIndex: function _updateZIndex() {
          this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex);
        }, _setAutoZIndex: function _setAutoZIndex(t, e) {
          var i,
              n,
              o,
              s = t.children,
              a = -e(1 / 0, -(1 / 0));for (n = 0, o = s.length; o > n; n++) {
            s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
          }this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1);
        }, _updateOpacity: function _updateOpacity() {
          var t,
              e = this._tiles;if (o.Browser.ielt9) for (t in e) {
            o.DomUtil.setOpacity(e[t], this.options.opacity);
          } else o.DomUtil.setOpacity(this._container, this.options.opacity);
        }, _initContainer: function _initContainer() {
          var t = this._map._panes.tilePane;if (!this._container) {
            if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
              var e = "leaflet-tile-container";this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container);
            } else this._tileContainer = this._container;t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity();
          }
        }, _reset: function _reset(t) {
          for (var e in this._tiles) {
            this.fire("tileunload", { tile: this._tiles[e] });
          }this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer();
        }, _getTileSize: function _getTileSize() {
          var t = this._map,
              e = t.getZoom() + this.options.zoomOffset,
              i = this.options.maxNativeZoom,
              n = this.options.tileSize;return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n;
        }, _update: function _update() {
          if (this._map) {
            var t = this._map,
                e = t.getPixelBounds(),
                i = t.getZoom(),
                n = this._getTileSize();if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
              var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(s);
            }
          }
        }, _addTilesFromCenterOut: function _addTilesFromCenterOut(t) {
          var i,
              n,
              s,
              a = [],
              r = t.getCenter();for (i = t.min.y; i <= t.max.y; i++) {
            for (n = t.min.x; n <= t.max.x; n++) {
              s = new o.Point(n, i), this._tileShouldBeLoaded(s) && a.push(s);
            }
          }var h = a.length;if (0 !== h) {
            a.sort(function (t, e) {
              return t.distanceTo(r) - e.distanceTo(r);
            });var l = e.createDocumentFragment();for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += h, n = 0; h > n; n++) {
              this._addTile(a[n], l);
            }this._tileContainer.appendChild(l);
          }
        }, _tileShouldBeLoaded: function _tileShouldBeLoaded(t) {
          if (t.x + ":" + t.y in this._tiles) return !1;var e = this.options;if (!e.continuousWorld) {
            var i = this._getWrapTileNum();if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1;
          }if (e.bounds) {
            var n = this._getTileSize(),
                o = t.multiplyBy(n),
                s = o.add([n, n]),
                a = this._map.unproject(o),
                r = this._map.unproject(s);if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1;
          }return !0;
        }, _removeOtherTiles: function _removeOtherTiles(t) {
          var e, i, n, o;for (o in this._tiles) {
            e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o);
          }
        }, _removeTile: function _removeTile(t) {
          var e = this._tiles[t];this.fire("tileunload", { tile: e, url: e.src }), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t];
        }, _addTile: function _addTile(t, e) {
          var i = this._getTilePos(t),
              n = this._getTile();o.DomUtil.setPosition(n, i, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n);
        }, _getZoomForUrl: function _getZoomForUrl() {
          var t = this.options,
              e = this._map.getZoom();return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e;
        }, _getTilePos: function _getTilePos(t) {
          var e = this._map.getPixelOrigin(),
              i = this._getTileSize();return t.multiplyBy(i).subtract(e);
        }, getTileUrl: function getTileUrl(t) {
          return o.Util.template(this._url, o.extend({ s: this._getSubdomain(t), z: t.z, x: t.x, y: t.y }, this.options));
        }, _getWrapTileNum: function _getWrapTileNum() {
          var t = this._map.options.crs,
              e = t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor();
        }, _adjustTilePoint: function _adjustTilePoint(t) {
          var e = this._getWrapTileNum();this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl();
        }, _getSubdomain: function _getSubdomain(t) {
          var e = Math.abs(t.x + t.y) % this.options.subdomains.length;return this.options.subdomains[e];
        }, _getTile: function _getTile() {
          if (this.options.reuseTiles && this._unusedTiles.length > 0) {
            var t = this._unusedTiles.pop();return this._resetTile(t), t;
          }return this._createTile();
        }, _resetTile: function _resetTile() {}, _createTile: function _createTile() {
          var t = o.DomUtil.create("img", "leaflet-tile");return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t;
        }, _loadTile: function _loadTile(t, e) {
          t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", { tile: t, url: t.src });
        }, _tileLoaded: function _tileLoaded() {
          this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)));
        }, _tileOnLoad: function _tileOnLoad() {
          var t = this._layer;this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", { tile: this, url: this.src })), t._tileLoaded();
        }, _tileOnError: function _tileOnError() {
          var t = this._layer;t.fire("tileerror", { tile: this, url: this.src });var e = t.options.errorTileUrl;e && (this.src = e), t._tileLoaded();
        } }), o.tileLayer = function (t, e) {
        return new o.TileLayer(t, e);
      }, o.TileLayer.WMS = o.TileLayer.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", version: "1.1.1", layers: "", styles: "", format: "image/jpeg", transparent: !1 }, initialize: function initialize(t, e) {
          this._url = t;var i = o.extend({}, this.defaultWmsParams),
              n = e.tileSize || this.options.tileSize;e.detectRetina && o.Browser.retina ? i.width = i.height = 2 * n : i.width = i.height = n;for (var s in e) {
            this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
          }this.wmsParams = i, o.setOptions(this, e);
        }, onAdd: function onAdd(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);var e = this._wmsVersion >= 1.3 ? "crs" : "srs";this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t);
        }, getTileUrl: function getTileUrl(t) {
          var e = this._map,
              i = this.options.tileSize,
              n = t.multiplyBy(i),
              s = n.add([i, i]),
              a = this._crs.project(e.unproject(n, t.z)),
              r = this._crs.project(e.unproject(s, t.z)),
              h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x, a.y].join(","),
              l = o.Util.template(this._url, { s: this._getSubdomain(t) });return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h;
        }, setParams: function setParams(t, e) {
          return o.extend(this.wmsParams, t), e || this.redraw(), this;
        } }), o.tileLayer.wms = function (t, e) {
        return new o.TileLayer.WMS(t, e);
      }, o.TileLayer.Canvas = o.TileLayer.extend({ options: { async: !1 }, initialize: function initialize(t) {
          o.setOptions(this, t);
        }, redraw: function redraw() {
          this._map && (this._reset({ hard: !0 }), this._update());for (var t in this._tiles) {
            this._redrawTile(this._tiles[t]);
          }return this;
        }, _redrawTile: function _redrawTile(t) {
          this.drawTile(t, t._tilePoint, this._map._zoom);
        }, _createTile: function _createTile() {
          var t = o.DomUtil.create("canvas", "leaflet-tile");return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t;
        }, _loadTile: function _loadTile(t, e) {
          t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t);
        }, drawTile: function drawTile() {}, tileDrawn: function tileDrawn(t) {
          this._tileOnLoad.call(t);
        } }), o.tileLayer.canvas = function (t) {
        return new o.TileLayer.Canvas(t);
      }, o.ImageOverlay = o.Class.extend({ includes: o.Mixin.Events, options: { opacity: 1 }, initialize: function initialize(t, e, i) {
          this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i);
        }, onAdd: function onAdd(t) {
          this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset();
        }, onRemove: function onRemove(t) {
          t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this);
        }, addTo: function addTo(t) {
          return t.addLayer(this), this;
        }, setOpacity: function setOpacity(t) {
          return this.options.opacity = t, this._updateOpacity(), this;
        }, bringToFront: function bringToFront() {
          return this._image && this._map._panes.overlayPane.appendChild(this._image), this;
        }, bringToBack: function bringToBack() {
          var t = this._map._panes.overlayPane;return this._image && t.insertBefore(this._image, t.firstChild), this;
        }, setUrl: function setUrl(t) {
          this._url = t, this._image.src = this._url;
        }, getAttribution: function getAttribution() {
          return this.options.attribution;
        }, _initImage: function _initImage() {
          this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, { galleryimg: "no", onselectstart: o.Util.falseFn, onmousemove: o.Util.falseFn, onload: o.bind(this._onImageLoad, this), src: this._url });
        }, _animateZoom: function _animateZoom(t) {
          var e = this._map,
              i = this._image,
              n = e.getZoomScale(t.zoom),
              s = this._bounds.getNorthWest(),
              a = this._bounds.getSouthEast(),
              r = e._latLngToNewLayerPoint(s, t.zoom, t.center),
              h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r),
              l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") ";
        }, _reset: function _reset() {
          var t = this._image,
              e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px";
        }, _onImageLoad: function _onImageLoad() {
          this.fire("load");
        }, _updateOpacity: function _updateOpacity() {
          o.DomUtil.setOpacity(this._image, this.options.opacity);
        } }), o.imageOverlay = function (t, e, i) {
        return new o.ImageOverlay(t, e, i);
      }, o.Icon = o.Class.extend({ options: { className: "" }, initialize: function initialize(t) {
          o.setOptions(this, t);
        }, createIcon: function createIcon(t) {
          return this._createIcon("icon", t);
        }, createShadow: function createShadow(t) {
          return this._createIcon("shadow", t);
        }, _createIcon: function _createIcon(t, e) {
          var i = this._getIconUrl(t);if (!i) {
            if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");return null;
          }var n;return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n;
        }, _setIconStyles: function _setIconStyles(t, e) {
          var i,
              n = this.options,
              s = o.point(n[e + "Size"]);i = "shadow" === e ? o.point(n.shadowAnchor || n.iconAnchor) : o.point(n.iconAnchor), !i && s && (i = s.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
        }, _createImg: function _createImg(t, i) {
          return i = i || e.createElement("img"), i.src = t, i;
        }, _getIconUrl: function _getIconUrl(t) {
          return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"];
        } }), o.icon = function (t) {
        return new o.Icon(t);
      }, o.Icon.Default = o.Icon.extend({ options: { iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] }, _getIconUrl: function _getIconUrl(t) {
          var e = t + "Url";if (this.options[e]) return this.options[e];o.Browser.retina && "icon" === t && (t += "-2x");var i = o.Icon.Default.imagePath;if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i + "/marker-" + t + ".png";
        } }), o.Icon.Default.imagePath = function () {
        var t,
            i,
            n,
            o,
            s,
            a = e.getElementsByTagName("script"),
            r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for (t = 0, i = a.length; i > t; t++) {
          if (n = a[t].src, o = n.match(r)) return s = n.split(r)[0], (s ? s + "/" : "") + "images";
        }
      }(), o.Marker = o.Class.extend({ includes: o.Mixin.Events, options: { icon: new o.Icon.Default(), title: "", alt: "", clickable: !0, draggable: !1, keyboard: !0, zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250 }, initialize: function initialize(t, e) {
          o.setOptions(this, e), this._latlng = o.latLng(t);
        }, onAdd: function onAdd(t) {
          this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this);
        }, addTo: function addTo(t) {
          return t.addLayer(this), this;
        }, onRemove: function onRemove(t) {
          this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({ viewreset: this.update, zoomanim: this._animateZoom }, this), this._map = null;
        }, getLatLng: function getLatLng() {
          return this._latlng;
        }, setLatLng: function setLatLng(t) {
          return this._latlng = o.latLng(t), this.update(), this.fire("move", { latlng: this._latlng });
        }, setZIndexOffset: function setZIndexOffset(t) {
          return this.options.zIndexOffset = t, this.update(), this;
        }, setIcon: function setIcon(t) {
          return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this;
        }, update: function update() {
          return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng).round()), this;
        }, _initIcon: function _initIcon() {
          var t = this.options,
              e = this._map,
              i = e.options.zoomAnimation && e.options.markerZoomAnimation,
              n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
              s = t.icon.createIcon(this._icon),
              a = !1;s !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (s.title = t.title), t.alt && (s.alt = t.alt)), o.DomUtil.addClass(s, n), t.keyboard && (s.tabIndex = "0"), this._icon = s, this._initInteraction(), t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex, this);var r = t.icon.createShadow(this._shadow),
              h = !1;r !== this._shadow && (this._removeShadow(), h = !0), r && o.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();var l = this._map._panes;a && l.markerPane.appendChild(this._icon), r && h && l.shadowPane.appendChild(this._shadow);
        }, _removeIcon: function _removeIcon() {
          this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null;
        }, _removeShadow: function _removeShadow() {
          this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null;
        }, _setPos: function _setPos(t) {
          o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        }, _updateZIndex: function _updateZIndex(t) {
          this._icon.style.zIndex = this._zIndex + t;
        }, _animateZoom: function _animateZoom(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();this._setPos(e);
        }, _initInteraction: function _initInteraction() {
          if (this.options.clickable) {
            var t = this._icon,
                e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(t, "keypress", this._onKeyPress, this);for (var i = 0; i < e.length; i++) {
              o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
            }o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable());
          }
        }, _onMouseClick: function _onMouseClick(t) {
          var e = this.dragging && this.dragging.moved();(this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, { originalEvent: t, latlng: this._latlng });
        }, _onKeyPress: function _onKeyPress(t) {
          13 === t.keyCode && this.fire("click", { originalEvent: t, latlng: this._latlng });
        }, _fireMouseEvent: function _fireMouseEvent(t) {
          this.fire(t.type, { originalEvent: t, latlng: this._latlng }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t);
        }, setOpacity: function setOpacity(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        }, _updateOpacity: function _updateOpacity() {
          o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity);
        }, _bringToFront: function _bringToFront() {
          this._updateZIndex(this.options.riseOffset);
        }, _resetZIndex: function _resetZIndex() {
          this._updateZIndex(0);
        } }), o.marker = function (t, e) {
        return new o.Marker(t, e);
      }, o.DivIcon = o.Icon.extend({ options: { iconSize: [12, 12], className: "leaflet-div-icon", html: !1 }, createIcon: function createIcon(t) {
          var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
              n = this.options;return n.html !== !1 ? i.innerHTML = n.html : i.innerHTML = "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i;
        }, createShadow: function createShadow() {
          return null;
        } }), o.divIcon = function (t) {
        return new o.DivIcon(t);
      }, o.Map.mergeOptions({ closePopupOnClick: !0 }), o.Popup = o.Class.extend({ includes: o.Mixin.Events, options: { minWidth: 50, maxWidth: 300, autoPan: !0, closeButton: !0, offset: [0, 7], autoPanPadding: [5, 5], keepInView: !1, className: "", zoomAnimation: !0 }, initialize: function initialize(t, e) {
          o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1;
        }, onAdd: function onAdd(t) {
          this._map = t, this._container || this._initLayout();var e = t.options.fadeAnimation;e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", { popup: this }), this._source && this._source.fire("popupopen", { popup: this });
        }, addTo: function addTo(t) {
          return t.addLayer(this), this;
        }, openOn: function openOn(t) {
          return t.openPopup(this), this;
        }, onRemove: function onRemove(t) {
          t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", { popup: this }), this._source && this._source.fire("popupclose", { popup: this });
        }, getLatLng: function getLatLng() {
          return this._latlng;
        }, setLatLng: function setLatLng(t) {
          return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this;
        }, getContent: function getContent() {
          return this._content;
        }, setContent: function setContent(t) {
          return this._content = t, this.update(), this;
        }, update: function update() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        }, _getEvents: function _getEvents() {
          var t = { viewreset: this._updatePosition };return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        }, _close: function _close() {
          this._map && this._map.closePopup(this);
        }, _initLayout: function _initLayout() {
          var t,
              e = "leaflet-popup",
              i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
              n = this._container = o.DomUtil.create("div", i);this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent.disableScrollPropagation(this._contentNode), o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer);
        }, _updateContent: function _updateContent() {
          if (this._content) {
            if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;else {
              for (; this._contentNode.hasChildNodes();) {
                this._contentNode.removeChild(this._contentNode.firstChild);
              }this._contentNode.appendChild(this._content);
            }this.fire("contentupdate");
          }
        }, _updateLayout: function _updateLayout() {
          var t = this._contentNode,
              e = t.style;e.width = "", e.whiteSpace = "nowrap";var i = t.offsetWidth;i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";var n = t.offsetHeight,
              s = this.options.maxHeight,
              a = "leaflet-popup-scrolled";s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth;
        }, _updatePosition: function _updatePosition() {
          if (this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng),
                e = this._animated,
                i = o.point(this.options.offset);e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px";
          }
        }, _zoomAnimation: function _zoomAnimation(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);o.DomUtil.setPosition(this._container, e);
        }, _adjustPan: function _adjustPan() {
          if (this.options.autoPan) {
            var t = this._map,
                e = this._container.offsetHeight,
                i = this._containerWidth,
                n = new o.Point(this._containerLeft, -e - this._containerBottom);this._animated && n._add(o.DomUtil.getPosition(this._container));var s = t.layerPointToContainerPoint(n),
                a = o.point(this.options.autoPanPadding),
                r = o.point(this.options.autoPanPaddingTopLeft || a),
                h = o.point(this.options.autoPanPaddingBottomRight || a),
                l = t.getSize(),
                u = 0,
                c = 0;s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c]);
          }
        }, _onCloseButtonClick: function _onCloseButtonClick(t) {
          this._close(), o.DomEvent.stop(t);
        } }), o.popup = function (t, e) {
        return new o.Popup(t, e);
      }, o.Map.include({ openPopup: function openPopup(t, e, i) {
          if (this.closePopup(), !(t instanceof o.Popup)) {
            var n = t;t = new o.Popup(i).setLatLng(e).setContent(n);
          }return t._isOpen = !0, this._popup = t, this.addLayer(t);
        }, closePopup: function closePopup(t) {
          return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this;
        } }), o.Marker.include({ openPopup: function openPopup() {
          return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this;
        }, closePopup: function closePopup() {
          return this._popup && this._popup._close(), this;
        }, togglePopup: function togglePopup() {
          return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this;
        }, bindPopup: function bindPopup(t, e) {
          var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);return i = i.add(o.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = o.extend({ offset: i }, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t, t._source = this) : this._popup = new o.Popup(e, this).setContent(t), this;
        }, setPopupContent: function setPopupContent(t) {
          return this._popup && this._popup.setContent(t), this;
        }, unbindPopup: function unbindPopup() {
          return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this;
        }, getPopup: function getPopup() {
          return this._popup;
        }, _movePopup: function _movePopup(t) {
          this._popup.setLatLng(t.latlng);
        } }), o.LayerGroup = o.Class.extend({ initialize: function initialize(t) {
          this._layers = {};var e, i;if (t) for (e = 0, i = t.length; i > e; e++) {
            this.addLayer(t[e]);
          }
        }, addLayer: function addLayer(t) {
          var e = this.getLayerId(t);return this._layers[e] = t, this._map && this._map.addLayer(t), this;
        }, removeLayer: function removeLayer(t) {
          var e = t in this._layers ? t : this.getLayerId(t);return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
        }, hasLayer: function hasLayer(t) {
          return t ? t in this._layers || this.getLayerId(t) in this._layers : !1;
        }, clearLayers: function clearLayers() {
          return this.eachLayer(this.removeLayer, this), this;
        }, invoke: function invoke(t) {
          var e,
              i,
              n = Array.prototype.slice.call(arguments, 1);for (e in this._layers) {
            i = this._layers[e], i[t] && i[t].apply(i, n);
          }return this;
        }, onAdd: function onAdd(t) {
          this._map = t, this.eachLayer(t.addLayer, t);
        }, onRemove: function onRemove(t) {
          this.eachLayer(t.removeLayer, t), this._map = null;
        }, addTo: function addTo(t) {
          return t.addLayer(this), this;
        }, eachLayer: function eachLayer(t, e) {
          for (var i in this._layers) {
            t.call(e, this._layers[i]);
          }return this;
        }, getLayer: function getLayer(t) {
          return this._layers[t];
        }, getLayers: function getLayers() {
          var t = [];for (var e in this._layers) {
            t.push(this._layers[e]);
          }return t;
        }, setZIndex: function setZIndex(t) {
          return this.invoke("setZIndex", t);
        }, getLayerId: function getLayerId(t) {
          return o.stamp(t);
        } }), o.layerGroup = function (t) {
        return new o.LayerGroup(t);
      }, o.FeatureGroup = o.LayerGroup.extend({ includes: o.Mixin.Events, statics: { EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose" }, addLayer: function addLayer(t) {
          return this.hasLayer(t) ? this : ("on" in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", { layer: t }));
        }, removeLayer: function removeLayer(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), "off" in t && t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", { layer: t })) : this;
        }, bindPopup: function bindPopup(t, e) {
          return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e);
        }, openPopup: function openPopup(t) {
          for (var e in this._layers) {
            this._layers[e].openPopup(t);break;
          }return this;
        }, setStyle: function setStyle(t) {
          return this.invoke("setStyle", t);
        }, bringToFront: function bringToFront() {
          return this.invoke("bringToFront");
        }, bringToBack: function bringToBack() {
          return this.invoke("bringToBack");
        }, getBounds: function getBounds() {
          var t = new o.LatLngBounds();return this.eachLayer(function (e) {
            t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds());
          }), t;
        }, _propagateEvent: function _propagateEvent(t) {
          t = o.extend({ layer: t.target, target: this }, t), this.fire(t.type, t);
        } }), o.featureGroup = function (t) {
        return new o.FeatureGroup(t);
      }, o.Path = o.Class.extend({ includes: [o.Mixin.Events], statics: { CLIP_PADDING: function () {
            var e = o.Browser.mobile ? 1280 : 2e3,
                i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;return Math.max(0, Math.min(.5, i));
          }() }, options: { stroke: !0, color: "#0033ff", dashArray: null, lineCap: null, lineJoin: null, weight: 5, opacity: .5, fill: !1, fillColor: null, fillOpacity: .2, clickable: !0 }, initialize: function initialize(t) {
          o.setOptions(this, t);
        }, onAdd: function onAdd(t) {
          this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({ viewreset: this.projectLatlngs, moveend: this._updatePath }, this);
        }, addTo: function addTo(t) {
          return t.addLayer(this), this;
        }, onRemove: function onRemove(t) {
          t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({ viewreset: this.projectLatlngs, moveend: this._updatePath }, this);
        }, projectLatlngs: function projectLatlngs() {}, setStyle: function setStyle(t) {
          return o.setOptions(this, t), this._container && this._updateStyle(), this;
        }, redraw: function redraw() {
          return this._map && (this.projectLatlngs(), this._updatePath()), this;
        } }), o.Map.include({ _updatePathViewport: function _updatePathViewport() {
          var t = o.Path.CLIP_PADDING,
              e = this.getSize(),
              i = o.DomUtil.getPosition(this._mapPane),
              n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
              s = n.add(e.multiplyBy(1 + 2 * t)._round());this._pathViewport = new o.Bounds(n, s);
        } }), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({ statics: { SVG: o.Browser.svg }, bringToFront: function bringToFront() {
          var t = this._map._pathRoot,
              e = this._container;return e && t.lastChild !== e && t.appendChild(e), this;
        }, bringToBack: function bringToBack() {
          var t = this._map._pathRoot,
              e = this._container,
              i = t.firstChild;return e && i !== e && t.insertBefore(e, i), this;
        }, getPathString: function getPathString() {}, _createElement: function _createElement(t) {
          return e.createElementNS(o.Path.SVG_NS, t);
        }, _initElements: function _initElements() {
          this._map._initPathRoot(), this._initPath(), this._initStyle();
        }, _initPath: function _initPath() {
          this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path);
        }, _initStyle: function _initStyle() {
          this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle();
        }, _updateStyle: function _updateStyle() {
          this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none");
        }, _updatePath: function _updatePath() {
          var t = this.getPathString();t || (t = "M0 0"), this._path.setAttribute("d", t);
        }, _initEvents: function _initEvents() {
          if (this.options.clickable) {
            (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) {
              o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this);
            }
          }
        }, _onMouseClick: function _onMouseClick(t) {
          this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t);
        }, _fireMouseEvent: function _fireMouseEvent(t) {
          if (this._map && this.hasEventListeners(t.type)) {
            var e = this._map,
                i = e.mouseEventToContainerPoint(t),
                n = e.containerPointToLayerPoint(i),
                s = e.layerPointToLatLng(n);this.fire(t.type, { latlng: s, layerPoint: n, containerPoint: i, originalEvent: t }), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t);
          }
        } }), o.Map.include({ _initPathRoot: function _initPathRoot() {
          this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({ zoomanim: this._animatePathZoom, zoomend: this._endPathZoom })) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport());
        }, _animatePathZoom: function _animatePathZoom(t) {
          var e = this.getZoomScale(t.zoom),
              i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0;
        }, _endPathZoom: function _endPathZoom() {
          this._pathZooming = !1;
        }, _updateSvgViewport: function _updateSvgViewport() {
          if (!this._pathZooming) {
            this._updatePathViewport();var t = this._pathViewport,
                e = t.min,
                i = t.max,
                n = i.x - e.x,
                s = i.y - e.y,
                a = this._pathRoot,
                r = this._panes.overlayPane;o.Browser.mobileWebkit && r.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute("height", s), a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")), o.Browser.mobileWebkit && r.appendChild(a);
          }
        } }), o.Path.include({ bindPopup: function bindPopup(t, e) {
          return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this;
        }, unbindPopup: function unbindPopup() {
          return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this;
        }, openPopup: function openPopup(t) {
          return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({ latlng: t })), this;
        }, closePopup: function closePopup() {
          return this._popup && this._popup._close(), this;
        }, _openPopup: function _openPopup(t) {
          this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup);
        } }), o.Browser.vml = !o.Browser.svg && function () {
        try {
          var t = e.createElement("div");t.innerHTML = '<v:shape adj="1"/>';var i = t.firstChild;return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
        } catch (n) {
          return !1;
        }
      }(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({ statics: { VML: !0, CLIP_PADDING: .02 }, _createElement: function () {
          try {
            return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
              return e.createElement("<lvml:" + t + ' class="lvml">');
            };
          } catch (t) {
            return function (t) {
              return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
            };
          }
        }(), _initPath: function _initPath() {
          var t = this._container = this._createElement("shape");o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t);
        }, _initStyle: function _initStyle() {
          this._updateStyle();
        }, _updateStyle: function _updateStyle() {
          var t = this._stroke,
              e = this._fill,
              i = this.options,
              n = this._container;n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, i.dashArray ? t.dashStyle = o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : t.dashStyle = "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null);
        }, _updatePath: function _updatePath() {
          var t = this._container.style;t.display = "none", this._path.v = this.getPathString() + " ", t.display = "";
        } }), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : { _initPathRoot: function _initPathRoot() {
          if (!this._pathRoot) {
            var t = this._pathRoot = e.createElement("div");t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport();
          }
        } }), o.Browser.canvas = function () {
        return !!e.createElement("canvas").getContext;
      }(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({ statics: { CANVAS: !0, SVG: !1 }, redraw: function redraw() {
          return this._map && (this.projectLatlngs(), this._requestUpdate()), this;
        }, setStyle: function setStyle(t) {
          return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this;
        }, onRemove: function onRemove(t) {
          t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null;
        }, _requestUpdate: function _requestUpdate() {
          this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map));
        }, _fireMapMoveEnd: function _fireMapMoveEnd() {
          o.Path._updateRequest = null, this.fire("moveend");
        }, _initElements: function _initElements() {
          this._map._initPathRoot(), this._ctx = this._map._canvasCtx;
        }, _updateStyle: function _updateStyle() {
          var t = this.options;t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color), t.lineCap && (this._ctx.lineCap = t.lineCap), t.lineJoin && (this._ctx.lineJoin = t.lineJoin);
        }, _drawPath: function _drawPath() {
          var t, e, i, n, s, a;for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
            for (e = 0, n = this._parts[t].length; n > e; e++) {
              s = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](s.x, s.y);
            }this instanceof o.Polygon && this._ctx.closePath();
          }
        }, _checkIfEmpty: function _checkIfEmpty() {
          return !this._parts.length;
        }, _updatePath: function _updatePath() {
          if (!this._checkIfEmpty()) {
            var t = this._ctx,
                e = this.options;this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule || "evenodd")), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore();
          }
        }, _initEvents: function _initEvents() {
          this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click dblclick contextmenu", this._fireMouseEvent, this));
        }, _fireMouseEvent: function _fireMouseEvent(t) {
          this._containsPoint(t.layerPoint) && this.fire(t.type, t);
        }, _onMouseMove: function _onMouseMove(t) {
          this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)));
        } }), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : { _initPathRoot: function _initPathRoot() {
          var t,
              i = this._pathRoot;i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport());
        }, _updateCanvasViewport: function _updateCanvasViewport() {
          if (!this._pathZooming) {
            this._updatePathViewport();var t = this._pathViewport,
                e = t.min,
                i = t.max.subtract(e),
                n = this._pathRoot;o.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y);
          }
        } }), o.LineUtil = { simplify: function simplify(t, e) {
          if (!e || !t.length) return t.slice();var i = e * e;return t = this._reducePoints(t, i), t = this._simplifyDP(t, i);
        }, pointToSegmentDistance: function pointToSegmentDistance(t, e, i) {
          return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0));
        }, closestPointOnSegment: function closestPointOnSegment(t, e, i) {
          return this._sqClosestPointOnSegment(t, e, i);
        }, _simplifyDP: function _simplifyDP(t, e) {
          var n = t.length,
              o = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != i + "" ? Uint8Array : Array,
              s = new o(n);s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);var a,
              r = [];for (a = 0; n > a; a++) {
            s[a] && r.push(t[a]);
          }return r;
        }, _simplifyDPStep: function _simplifyDPStep(t, e, i, n, o) {
          var s,
              a,
              r,
              h = 0;for (a = n + 1; o - 1 >= a; a++) {
            r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a, h = r);
          }h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o));
        }, _reducePoints: function _reducePoints(t, e) {
          for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) {
            this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
          }return s - 1 > o && i.push(t[s - 1]), i;
        }, clipSegment: function clipSegment(t, e, i, n) {
          var o,
              s,
              a,
              r = n ? this._lastCode : this._getBitCode(t, i),
              h = this._getBitCode(e, i);for (this._lastCode = h;;) {
            if (!(r | h)) return [t, e];if (r & h) return !1;o = r || h, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, h = a);
          }
        }, _getEdgeIntersection: function _getEdgeIntersection(t, e, i, n) {
          var s = e.x - t.x,
              a = e.y - t.y,
              r = n.min,
              h = n.max;return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a, r.y) : 2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x, t.y + a * (r.x - t.x) / s) : void 0;
        }, _getBitCode: function _getBitCode(t, e) {
          var i = 0;return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
        }, _sqDist: function _sqDist(t, e) {
          var i = e.x - t.x,
              n = e.y - t.y;return i * i + n * n;
        }, _sqClosestPointOnSegment: function _sqClosestPointOnSegment(t, e, i, n) {
          var s,
              a = e.x,
              r = e.y,
              h = i.x - a,
              l = i.y - r,
              u = h * h + l * l;return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s, r += l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r);
        } }, o.Polyline = o.Path.extend({ initialize: function initialize(t, e) {
          o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t);
        }, options: { smoothFactor: 1, noClip: !1 }, projectLatlngs: function projectLatlngs() {
          this._originalPoints = [];for (var t = 0, e = this._latlngs.length; e > t; t++) {
            this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t]);
          }
        }, getPathString: function getPathString() {
          for (var t = 0, e = this._parts.length, i = ""; e > t; t++) {
            i += this._getPathPartStr(this._parts[t]);
          }return i;
        }, getLatLngs: function getLatLngs() {
          return this._latlngs;
        }, setLatLngs: function setLatLngs(t) {
          return this._latlngs = this._convertLatLngs(t), this.redraw();
        }, addLatLng: function addLatLng(t) {
          return this._latlngs.push(o.latLng(t)), this.redraw();
        }, spliceLatLngs: function spliceLatLngs() {
          var t = [].splice.apply(this._latlngs, arguments);return this._convertLatLngs(this._latlngs, !0), this.redraw(), t;
        }, closestLayerPoint: function closestLayerPoint(t) {
          for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++) {
            for (var l = s[r], u = 1, c = l.length; c > u; u++) {
              e = l[u - 1], i = l[u];var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);n > d && (n = d, a = o.LineUtil._sqClosestPointOnSegment(t, e, i));
            }
          }return a && (a.distance = Math.sqrt(n)), a;
        }, getBounds: function getBounds() {
          return new o.LatLngBounds(this.getLatLngs());
        }, _convertLatLngs: function _convertLatLngs(t, e) {
          var i,
              n,
              s = e ? t : [];for (i = 0, n = t.length; n > i; i++) {
            if (o.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;s[i] = o.latLng(t[i]);
          }return s;
        }, _initEvents: function _initEvents() {
          o.Path.prototype._initEvents.call(this);
        }, _getPathPartStr: function _getPathPartStr(t) {
          for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++) {
            e = t[n], i && e._round(), a += (n ? "L" : "M") + e.x + " " + e.y;
          }return a;
        }, _clipPoints: function _clipPoints() {
          var t,
              e,
              i,
              n = this._originalPoints,
              s = n.length;if (this.options.noClip) return void (this._parts = [n]);this._parts = [];var a = this._parts,
              r = this._map._pathViewport,
              h = o.LineUtil;for (t = 0, e = 0; s - 1 > t; t++) {
            i = h.clipSegment(n[t], n[t + 1], r, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++));
          }
        }, _simplifyPoints: function _simplifyPoints() {
          for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++) {
            t[i] = e.simplify(t[i], this.options.smoothFactor);
          }
        }, _updatePath: function _updatePath() {
          this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this));
        } }), o.polyline = function (t, e) {
        return new o.Polyline(t, e);
      }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e) {
        var i,
            n,
            s,
            a,
            r,
            h,
            l,
            u,
            c,
            d = [1, 4, 2, 8],
            p = o.LineUtil;for (n = 0, l = t.length; l > n; n++) {
          t[n]._code = p._getBitCode(t[n], e);
        }for (a = 0; 4 > a; a++) {
          for (u = d[a], i = [], n = 0, l = t.length, s = l - 1; l > n; s = n++) {
            r = t[n], h = t[s], r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
          }t = i;
        }return t;
      }, o.Polygon = o.Polyline.extend({ options: { fill: !0 }, initialize: function initialize(t, e) {
          o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t);
        }, _initWithHoles: function _initWithHoles(t) {
          var e, i, n;if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0]) for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) {
            n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
          }t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop();
        }, projectLatlngs: function projectLatlngs() {
          if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
            var t, e, i, n;for (t = 0, i = this._holes.length; i > t; t++) {
              for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) {
                this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e]);
              }
            }
          }
        }, setLatLngs: function setLatLngs(t) {
          return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t);
        }, _clipPoints: function _clipPoints() {
          var t = this._originalPoints,
              e = [];if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
            for (var i = 0, n = this._parts.length; n > i; i++) {
              var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);s.length && e.push(s);
            }this._parts = e;
          }
        }, _getPathPartStr: function _getPathPartStr(t) {
          var e = o.Polyline.prototype._getPathPartStr.call(this, t);return e + (o.Browser.svg ? "z" : "x");
        } }), o.polygon = function (t, e) {
        return new o.Polygon(t, e);
      }, function () {
        function t(t) {
          return o.FeatureGroup.extend({ initialize: function initialize(t, e) {
              this._layers = {}, this._options = e, this.setLatLngs(t);
            }, setLatLngs: function setLatLngs(e) {
              var i = 0,
                  n = e.length;for (this.eachLayer(function (t) {
                n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t);
              }, this); n > i;) {
                this.addLayer(new t(e[i++], this._options));
              }return this;
            }, getLatLngs: function getLatLngs() {
              var t = [];return this.eachLayer(function (e) {
                t.push(e.getLatLngs());
              }), t;
            } });
        }o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function (t, e) {
          return new o.MultiPolyline(t, e);
        }, o.multiPolygon = function (t, e) {
          return new o.MultiPolygon(t, e);
        };
      }(), o.Rectangle = o.Polygon.extend({ initialize: function initialize(t, e) {
          o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        }, setBounds: function setBounds(t) {
          this.setLatLngs(this._boundsToLatLngs(t));
        }, _boundsToLatLngs: function _boundsToLatLngs(t) {
          return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
        } }), o.rectangle = function (t, e) {
        return new o.Rectangle(t, e);
      }, o.Circle = o.Path.extend({ initialize: function initialize(t, e, i) {
          o.Path.prototype.initialize.call(this, i), this._latlng = o.latLng(t), this._mRadius = e;
        }, options: { fill: !0 }, setLatLng: function setLatLng(t) {
          return this._latlng = o.latLng(t), this.redraw();
        }, setRadius: function setRadius(t) {
          return this._mRadius = t, this.redraw();
        }, projectLatlngs: function projectLatlngs() {
          var t = this._getLngRadius(),
              e = this._latlng,
              i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1);
        }, getBounds: function getBounds() {
          var t = this._getLngRadius(),
              e = this._mRadius / 40075017 * 360,
              i = this._latlng;return new o.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t]);
        }, getLatLng: function getLatLng() {
          return this._latlng;
        }, getPathString: function getPathString() {
          var t = this._point,
              e = this._radius;return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600");
        }, getRadius: function getRadius() {
          return this._mRadius;
        }, _getLatRadius: function _getLatRadius() {
          return this._mRadius / 40075017 * 360;
        }, _getLngRadius: function _getLngRadius() {
          return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat);
        }, _checkIfEmpty: function _checkIfEmpty() {
          if (!this._map) return !1;var t = this._map._pathViewport,
              e = this._radius,
              i = this._point;return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y;
        } }), o.circle = function (t, e, i) {
        return new o.Circle(t, e, i);
      }, o.CircleMarker = o.Circle.extend({ options: { radius: 10, weight: 2 }, initialize: function initialize(t, e) {
          o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius;
        }, projectLatlngs: function projectLatlngs() {
          this._point = this._map.latLngToLayerPoint(this._latlng);
        }, _updateStyle: function _updateStyle() {
          o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius);
        }, setLatLng: function setLatLng(t) {
          return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this;
        }, setRadius: function setRadius(t) {
          return this.options.radius = this._radius = t, this.redraw();
        }, getRadius: function getRadius() {
          return this._radius;
        } }), o.circleMarker = function (t, e) {
        return new o.CircleMarker(t, e);
      }, o.Polyline.include(o.Path.CANVAS ? { _containsPoint: function _containsPoint(t, e) {
          var i,
              n,
              s,
              a,
              r,
              h,
              l,
              u = this.options.weight / 2;for (o.Browser.touch && (u += 10), i = 0, a = this._parts.length; a > i; i++) {
            for (l = this._parts[i], n = 0, r = l.length, s = r - 1; r > n; s = n++) {
              if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]), u >= h)) return !0;
            }
          }return !1;
        } } : {}), o.Polygon.include(o.Path.CANVAS ? { _containsPoint: function _containsPoint(t) {
          var e,
              i,
              n,
              s,
              a,
              r,
              h,
              l,
              u = !1;if (o.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;for (s = 0, h = this._parts.length; h > s; s++) {
            for (e = this._parts[s], a = 0, l = e.length, r = l - 1; l > a; r = a++) {
              i = e[a], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
            }
          }return u;
        } } : {}), o.Circle.include(o.Path.CANVAS ? { _drawPath: function _drawPath() {
          var t = this._point;this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1);
        }, _containsPoint: function _containsPoint(t) {
          var e = this._point,
              i = this.options.stroke ? this.options.weight / 2 : 0;return t.distanceTo(e) <= this._radius + i;
        } } : {}), o.CircleMarker.include(o.Path.CANVAS ? { _updateStyle: function _updateStyle() {
          o.Path.prototype._updateStyle.call(this);
        } } : {}), o.GeoJSON = o.FeatureGroup.extend({ initialize: function initialize(t, e) {
          o.setOptions(this, e), this._layers = {}, t && this.addData(t);
        }, addData: function addData(t) {
          var e,
              i,
              n,
              s = o.Util.isArray(t) ? t : t.features;if (s) {
            for (e = 0, i = s.length; i > e; e++) {
              n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(s[e]);
            }return this;
          }var a = this.options;if (!a.filter || a.filter(t)) {
            var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);return r.feature = o.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), a.onEachFeature && a.onEachFeature(t, r), this.addLayer(r);
          }
        }, resetStyle: function resetStyle(t) {
          var e = this.options.style;e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e));
        }, setStyle: function setStyle(t) {
          this.eachLayer(function (e) {
            this._setLayerStyle(e, t);
          }, this);
        }, _setLayerStyle: function _setLayerStyle(t, e) {
          "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e);
        } }), o.extend(o.GeoJSON, { geometryToLayer: function geometryToLayer(t, e, i, n) {
          var s,
              a,
              r,
              h,
              l = "Feature" === t.type ? t.geometry : t,
              u = l.coordinates,
              c = [];switch (i = i || this.coordsToLatLng, l.type) {case "Point":
              return s = i(u), e ? e(t, s) : new o.Marker(s);case "MultiPoint":
              for (r = 0, h = u.length; h > r; r++) {
                s = i(u[r]), c.push(e ? e(t, s) : new o.Marker(s));
              }return new o.FeatureGroup(c);case "LineString":
              return a = this.coordsToLatLngs(u, 0, i), new o.Polyline(a, n);case "Polygon":
              if (2 === u.length && !u[1].length) throw new Error("Invalid GeoJSON object.");return a = this.coordsToLatLngs(u, 1, i), new o.Polygon(a, n);case "MultiLineString":
              return a = this.coordsToLatLngs(u, 1, i), new o.MultiPolyline(a, n);case "MultiPolygon":
              return a = this.coordsToLatLngs(u, 2, i), new o.MultiPolygon(a, n);case "GeometryCollection":
              for (r = 0, h = l.geometries.length; h > r; r++) {
                c.push(this.geometryToLayer({ geometry: l.geometries[r], type: "Feature", properties: t.properties }, e, i, n));
              }return new o.FeatureGroup(c);default:
              throw new Error("Invalid GeoJSON object.");}
        }, coordsToLatLng: function coordsToLatLng(t) {
          return new o.LatLng(t[1], t[0], t[2]);
        }, coordsToLatLngs: function coordsToLatLngs(t, e, i) {
          var n,
              o,
              s,
              a = [];for (o = 0, s = t.length; s > o; o++) {
            n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
          }return a;
        }, latLngToCoords: function latLngToCoords(t) {
          var e = [t.lng, t.lat];return t.alt !== i && e.push(t.alt), e;
        }, latLngsToCoords: function latLngsToCoords(t) {
          for (var e = [], i = 0, n = t.length; n > i; i++) {
            e.push(o.GeoJSON.latLngToCoords(t[i]));
          }return e;
        }, getFeature: function getFeature(t, e) {
          return t.feature ? o.extend({}, t.feature, { geometry: e }) : o.GeoJSON.asFeature(e);
        }, asFeature: function asFeature(t) {
          return "Feature" === t.type ? t : { type: "Feature", properties: {}, geometry: t };
        } });var a = { toGeoJSON: function toGeoJSON() {
          return o.GeoJSON.getFeature(this, { type: "Point", coordinates: o.GeoJSON.latLngToCoords(this.getLatLng()) });
        } };o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({ toGeoJSON: function toGeoJSON() {
          return o.GeoJSON.getFeature(this, { type: "LineString", coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs()) });
        } }), o.Polygon.include({ toGeoJSON: function toGeoJSON() {
          var t,
              e,
              i,
              n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];if (n[0].push(n[0][0]), this._holes) for (t = 0, e = this._holes.length; e > t; t++) {
            i = o.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
          }return o.GeoJSON.getFeature(this, { type: "Polygon", coordinates: n });
        } }), function () {
        function t(t) {
          return function () {
            var e = [];return this.eachLayer(function (t) {
              e.push(t.toGeoJSON().geometry.coordinates);
            }), o.GeoJSON.getFeature(this, { type: t, coordinates: e });
          };
        }o.MultiPolyline.include({ toGeoJSON: t("MultiLineString") }), o.MultiPolygon.include({ toGeoJSON: t("MultiPolygon") }), o.LayerGroup.include({ toGeoJSON: function toGeoJSON() {
            var e,
                i = this.feature && this.feature.geometry,
                n = [];if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);var s = i && "GeometryCollection" === i.type;return this.eachLayer(function (t) {
              t.toGeoJSON && (e = t.toGeoJSON(), n.push(s ? e.geometry : o.GeoJSON.asFeature(e)));
            }), s ? o.GeoJSON.getFeature(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n };
          } });
      }(), o.geoJson = function (t, e) {
        return new o.GeoJSON(t, e);
      }, o.DomEvent = { addListener: function addListener(t, e, i, n) {
          var s,
              a,
              r,
              h = o.stamp(i),
              l = "_leaflet_" + e + h;return t[l] ? this : (s = function s(e) {
            return i.call(n || t, e || o.DomEvent._getEvent());
          }, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s, r = "mouseenter" === e ? "mouseover" : "mouseout", s = function s(e) {
            return o.DomEvent._checkMouse(t, e) ? a(e) : void 0;
          }, t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s, s = function s(t) {
            return o.DomEvent._filterClick(t, a);
          }, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent" in t && t.attachEvent("on" + e, s), t[l] = s, this));
        }, removeListener: function removeListener(t, e, i) {
          var n = o.stamp(i),
              s = "_leaflet_" + e + n,
              a = t[s];return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[s] = null, this) : this;
        }, stopPropagation: function stopPropagation(t) {
          return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this;
        }, disableScrollPropagation: function disableScrollPropagation(t) {
          var e = o.DomEvent.stopPropagation;return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e);
        }, disableClickPropagation: function disableClickPropagation(t) {
          for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--) {
            o.DomEvent.on(t, o.Draggable.START[i], e);
          }return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e);
        }, preventDefault: function preventDefault(t) {
          return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
        }, stop: function stop(t) {
          return o.DomEvent.preventDefault(t).stopPropagation(t);
        }, getMousePosition: function getMousePosition(t, e) {
          if (!e) return new o.Point(t.clientX, t.clientY);var i = e.getBoundingClientRect();return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop);
        }, getWheelDelta: function getWheelDelta(t) {
          var e = 0;return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e;
        }, _skipEvents: {}, _fakeStop: function _fakeStop(t) {
          o.DomEvent._skipEvents[t.type] = !0;
        }, _skipped: function _skipped(t) {
          var e = this._skipEvents[t.type];return this._skipEvents[t.type] = !1, e;
        }, _checkMouse: function _checkMouse(t, e) {
          var i = e.relatedTarget;if (!i) return !0;try {
            for (; i && i !== t;) {
              i = i.parentNode;
            }
          } catch (n) {
            return !1;
          }return i !== t;
        }, _getEvent: function _getEvent() {
          var e = t.event;if (!e) for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);) {
            i = i.caller;
          }return e;
        }, _filterClick: function _filterClick(t, e) {
          var i = t.timeStamp || t.originalEvent.timeStamp,
              n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, e(t));
        } }, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({ includes: o.Mixin.Events, statics: { START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"], END: { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" }, MOVE: { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" } }, initialize: function initialize(t, e) {
          this._element = t, this._dragStartTarget = e || t;
        }, enable: function enable() {
          if (!this._enabled) {
            for (var t = o.Draggable.START.length - 1; t >= 0; t--) {
              o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
            }this._enabled = !0;
          }
        }, disable: function disable() {
          if (this._enabled) {
            for (var t = o.Draggable.START.length - 1; t >= 0; t--) {
              o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
            }this._enabled = !1, this._moved = !1;
          }
        }, _onDown: function _onDown(t) {
          if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (o.DomEvent.stopPropagation(t), !o.Draggable._disabled && (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), !this._moving))) {
            var i = t.touches ? t.touches[0] : t;this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this);
          }
        }, _onMove: function _onMove(t) {
          if (t.touches && t.touches.length > 1) return void (this._moved = !0);var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
              n = new o.Point(i.clientX, i.clientY),
              s = n.subtract(this._startPoint);(s.x || s.y) && (o.Browser.touch && Math.abs(s.x) + Math.abs(s.y) < 3 || (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)));
        }, _updatePosition: function _updatePosition() {
          this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag");
        }, _onUp: function _onUp() {
          o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);for (var t in o.Draggable.MOVE) {
            o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove).off(e, o.Draggable.END[t], this._onUp);
          }o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), this._moving = !1;
        } }), o.Handler = o.Class.extend({ initialize: function initialize(t) {
          this._map = t;
        }, enable: function enable() {
          this._enabled || (this._enabled = !0, this.addHooks());
        }, disable: function disable() {
          this._enabled && (this._enabled = !1, this.removeHooks());
        }, enabled: function enabled() {
          return !!this._enabled;
        } }), o.Map.mergeOptions({ dragging: !0, inertia: !o.Browser.android23, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, inertiaThreshold: o.Browser.touch ? 32 : 18, easeLinearity: .25, worldCopyJump: !1 }), o.Map.Drag = o.Handler.extend({ addHooks: function addHooks() {
          if (!this._draggable) {
            var t = this._map;this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this));
          }this._draggable.enable();
        }, removeHooks: function removeHooks() {
          this._draggable.disable();
        }, moved: function moved() {
          return this._draggable && this._draggable._moved;
        }, _onDragStart: function _onDragStart() {
          var t = this._map;t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
        }, _onDrag: function _onDrag() {
          if (this._map.options.inertia) {
            var t = this._lastTime = +new Date(),
                e = this._lastPos = this._draggable._newPos;this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift());
          }this._map.fire("move").fire("drag");
        }, _onViewReset: function _onViewReset() {
          var t = this._map.getSize()._divideBy(2),
              e = this._map.latLngToLayerPoint([0, 0]);this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x;
        }, _onPreDrag: function _onPreDrag() {
          var t = this._worldWidth,
              e = Math.round(t / 2),
              i = this._initialWorldOffset,
              n = this._draggable._newPos.x,
              o = (n - e + i) % t + e - i,
              s = (n + e + i) % t - e - i,
              a = Math.abs(o + i) < Math.abs(s + i) ? o : s;this._draggable._newPos.x = a;
        }, _onDragEnd: function _onDragEnd(t) {
          var e = this._map,
              i = e.options,
              n = +new Date() - this._lastTime,
              s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];if (e.fire("dragend", t), s) e.fire("moveend");else {
            var a = this._lastPos.subtract(this._positions[0]),
                r = (this._lastTime + n - this._times[0]) / 1e3,
                h = i.easeLinearity,
                l = a.multiplyBy(h / r),
                u = l.distanceTo([0, 0]),
                c = Math.min(i.inertiaMaxSpeed, u),
                d = l.multiplyBy(c / u),
                p = c / (i.inertiaDeceleration * h),
                _ = d.multiplyBy(-p / 2).round();_.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function () {
              e.panBy(_, { duration: p, easeLinearity: h, noMoveStart: !0 });
            })) : e.fire("moveend");
          }
        } }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({ doubleClickZoom: !0 }), o.Map.DoubleClickZoom = o.Handler.extend({ addHooks: function addHooks() {
          this._map.on("dblclick", this._onDoubleClick, this);
        }, removeHooks: function removeHooks() {
          this._map.off("dblclick", this._onDoubleClick, this);
        }, _onDoubleClick: function _onDoubleClick(t) {
          var e = this._map,
              i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);"center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i);
        } }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({ scrollWheelZoom: !0 }), o.Map.ScrollWheelZoom = o.Handler.extend({ addHooks: function addHooks() {
          o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0;
        }, removeHooks: function removeHooks() {
          o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault);
        }, _onWheelScroll: function _onWheelScroll(t) {
          var e = o.DomEvent.getWheelDelta(t);this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());var i = Math.max(40 - (+new Date() - this._startTime), 0);clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), i), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t);
        }, _performZoom: function _performZoom() {
          var t = this._map,
              e = this._delta,
              i = t.getZoom();e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e));
        } }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, { _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart", _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend", addDoubleTapListener: function addDoubleTapListener(t, i, n) {
          function s(t) {
            var e;if (o.Browser.pointer ? (_.push(t.pointerId), e = _.length) : e = t.touches.length, !(e > 1)) {
              var i = Date.now(),
                  n = i - (r || i);h = t.touches ? t.touches[0] : t, l = n > 0 && u >= n, r = i;
            }
          }function a(t) {
            if (o.Browser.pointer) {
              var e = _.indexOf(t.pointerId);if (-1 === e) return;_.splice(e, 1);
            }if (l) {
              if (o.Browser.pointer) {
                var n,
                    s = {};for (var a in h) {
                  n = h[a], "function" == typeof n ? s[a] = n.bind(h) : s[a] = n;
                }h = s;
              }h.type = "dblclick", i(h), r = null;
            }
          }var r,
              h,
              l = !1,
              u = 250,
              c = "_leaflet_",
              d = this._touchstart,
              p = this._touchend,
              _ = [];t[c + d + n] = s, t[c + p + n] = a;var m = o.Browser.pointer ? e.documentElement : t;return t.addEventListener(d, s, !1), m.addEventListener(p, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1), this;
        }, removeDoubleTapListener: function removeDoubleTapListener(t, i) {
          var n = "_leaflet_";return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this;
        } }), o.extend(o.DomEvent, { POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown", POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove", POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup", POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel", _pointers: [], _pointerDocumentListener: !1, addPointerListener: function addPointerListener(t, e, i, n) {
          switch (e) {case "touchstart":
              return this.addPointerListenerStart(t, e, i, n);
            case "touchend":
              return this.addPointerListenerEnd(t, e, i, n);case "touchmove":
              return this.addPointerListenerMove(t, e, i, n);default:
              throw "Unknown touch event type";}
        }, addPointerListenerStart: function addPointerListenerStart(t, i, n, s) {
          var a = "_leaflet_",
              r = this._pointers,
              h = function h(t) {
            "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && o.DomEvent.preventDefault(t);for (var e = !1, i = 0; i < r.length; i++) {
              if (r[i].pointerId === t.pointerId) {
                e = !0;break;
              }
            }e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], n(t);
          };if (t[a + "touchstart" + s] = h, t.addEventListener(this.POINTER_DOWN, h, !1), !this._pointerDocumentListener) {
            var l = function l(t) {
              for (var e = 0; e < r.length; e++) {
                if (r[e].pointerId === t.pointerId) {
                  r.splice(e, 1);break;
                }
              }
            };e.documentElement.addEventListener(this.POINTER_UP, l, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, l, !1), this._pointerDocumentListener = !0;
          }return this;
        }, addPointerListenerMove: function addPointerListenerMove(t, e, i, n) {
          function o(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
              for (var e = 0; e < a.length; e++) {
                if (a[e].pointerId === t.pointerId) {
                  a[e] = t;break;
                }
              }t.touches = a.slice(), t.changedTouches = [t], i(t);
            }
          }var s = "_leaflet_",
              a = this._pointers;return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this;
        }, addPointerListenerEnd: function addPointerListenerEnd(t, e, i, n) {
          var o = "_leaflet_",
              s = this._pointers,
              a = function a(t) {
            for (var e = 0; e < s.length; e++) {
              if (s[e].pointerId === t.pointerId) {
                s.splice(e, 1);break;
              }
            }t.touches = s.slice(), t.changedTouches = [t], i(t);
          };return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this;
        }, removePointerListener: function removePointerListener(t, e, i) {
          var n = "_leaflet_",
              o = t[n + e + i];switch (e) {case "touchstart":
              t.removeEventListener(this.POINTER_DOWN, o, !1);break;case "touchmove":
              t.removeEventListener(this.POINTER_MOVE, o, !1);break;case "touchend":
              t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1);}return this;
        } }), o.Map.mergeOptions({ touchZoom: o.Browser.touch && !o.Browser.android23, bounceAtZoomLimits: !0 }), o.Map.TouchZoom = o.Handler.extend({ addHooks: function addHooks() {
          o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this);
        }, removeHooks: function removeHooks() {
          o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this);
        }, _onTouchStart: function _onTouchStart(t) {
          var i = this._map;if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
            var n = i.mouseEventToLayerPoint(t.touches[0]),
                s = i.mouseEventToLayerPoint(t.touches[1]),
                a = i._getCenterLayerPoint();this._startCenter = n.add(s)._divideBy(2), this._startDist = n.distanceTo(s), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t);
          }
        }, _onTouchMove: function _onTouchMove(t) {
          var e = this._map;if (t.touches && 2 === t.touches.length && this._zooming) {
            var i = e.mouseEventToLayerPoint(t.touches[0]),
                n = e.mouseEventToLayerPoint(t.touches[1]);this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t));
          }
        }, _updateOnMove: function _updateOnMove() {
          var t = this._map,
              e = this._getScaleOrigin(),
              i = t.layerPointToLatLng(e),
              n = t.getScaleZoom(this._scale);t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0);
        }, _onTouchEnd: function _onTouchEnd() {
          if (!this._moved || !this._zooming) return void (this._zooming = !1);var t = this._map;this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);var i = this._getScaleOrigin(),
              n = t.layerPointToLatLng(i),
              s = t.getZoom(),
              a = t.getScaleZoom(this._scale) - s,
              r = a > 0 ? Math.ceil(a) : Math.floor(a),
              h = t._limitZoom(s + r),
              l = t.getZoomScale(h) / this._scale;t._animateZoom(n, h, i, l);
        }, _getScaleOrigin: function _getScaleOrigin() {
          var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t);
        } }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({ tap: !0, tapTolerance: 15 }), o.Map.Tap = o.Handler.extend({ addHooks: function addHooks() {
          o.DomEvent.on(this._map._container, "touchstart", this._onDown, this);
        }, removeHooks: function removeHooks() {
          o.DomEvent.off(this._map._container, "touchstart", this._onDown, this);
        }, _onDown: function _onDown(t) {
          if (t.touches) {
            if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);var i = t.touches[0],
                n = i.target;this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
              this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
            }, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this);
          }
        }, _onUp: function _onUp(t) {
          if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
            var i = t.changedTouches[0],
                n = i.target;n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", i);
          }
        }, _isTapValid: function _isTapValid() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        }, _onMove: function _onMove(t) {
          var e = t.touches[0];this._newPos = new o.Point(e.clientX, e.clientY);
        }, _simulateEvent: function _simulateEvent(i, n) {
          var o = e.createEvent("MouseEvents");o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o);
        } }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({ boxZoom: !0 }), o.Map.BoxZoom = o.Handler.extend({ initialize: function initialize(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1;
        }, addHooks: function addHooks() {
          o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this);
        }, removeHooks: function removeHooks() {
          o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1;
        }, moved: function moved() {
          return this._moved;
        }, _onMouseDown: function _onMouseDown(t) {
          return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this));
        }, _onMouseMove: function _onMouseMove(t) {
          this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));var e = this._startLayerPoint,
              i = this._box,
              n = this._map.mouseEventToLayerPoint(t),
              s = n.subtract(e),
              a = new o.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));o.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(s.y) - 4) + "px";
        }, _finish: function _finish() {
          this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown);
        }, _onMouseUp: function _onMouseUp(t) {
          this._finish();var e = this._map,
              i = e.mouseEventToLayerPoint(t);if (!this._startLayerPoint.equals(i)) {
            var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));e.fitBounds(n), e.fire("boxzoomend", { boxZoomBounds: n });
          }
        }, _onKeyDown: function _onKeyDown(t) {
          27 === t.keyCode && this._finish();
        } }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({ keyboard: !0, keyboardPanOffset: 80, keyboardZoomOffset: 1 }), o.Map.Keyboard = o.Handler.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 173] }, initialize: function initialize(t) {
          this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset);
        }, addHooks: function addHooks() {
          var t = this._map._container;-1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this);
        }, removeHooks: function removeHooks() {
          this._removeHooks();var t = this._map._container;o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this);
        }, _onMouseDown: function _onMouseDown() {
          if (!this._focused) {
            var i = e.body,
                n = e.documentElement,
                o = i.scrollTop || n.scrollTop,
                s = i.scrollLeft || n.scrollLeft;this._map._container.focus(), t.scrollTo(s, o);
          }
        }, _onFocus: function _onFocus() {
          this._focused = !0, this._map.fire("focus");
        }, _onBlur: function _onBlur() {
          this._focused = !1, this._map.fire("blur");
        }, _setPanOffset: function _setPanOffset(t) {
          var e,
              i,
              n = this._panKeys = {},
              o = this.keyCodes;for (e = 0, i = o.left.length; i > e; e++) {
            n[o.left[e]] = [-1 * t, 0];
          }for (e = 0, i = o.right.length; i > e; e++) {
            n[o.right[e]] = [t, 0];
          }for (e = 0, i = o.down.length; i > e; e++) {
            n[o.down[e]] = [0, t];
          }for (e = 0, i = o.up.length; i > e; e++) {
            n[o.up[e]] = [0, -1 * t];
          }
        }, _setZoomOffset: function _setZoomOffset(t) {
          var e,
              i,
              n = this._zoomKeys = {},
              o = this.keyCodes;for (e = 0, i = o.zoomIn.length; i > e; e++) {
            n[o.zoomIn[e]] = t;
          }for (e = 0, i = o.zoomOut.length; i > e; e++) {
            n[o.zoomOut[e]] = -t;
          }
        }, _addHooks: function _addHooks() {
          o.DomEvent.on(e, "keydown", this._onKeyDown, this);
        }, _removeHooks: function _removeHooks() {
          o.DomEvent.off(e, "keydown", this._onKeyDown, this);
        }, _onKeyDown: function _onKeyDown(t) {
          var e = t.keyCode,
              i = this._map;if (e in this._panKeys) {
            if (i._panAnim && i._panAnim._inProgress) return;i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds);
          } else {
            if (!(e in this._zoomKeys)) return;i.setZoom(i.getZoom() + this._zoomKeys[e]);
          }o.DomEvent.stop(t);
        } }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({ initialize: function initialize(t) {
          this._marker = t;
        }, addHooks: function addHooks() {
          var t = this._marker._icon;this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable");
        }, removeHooks: function removeHooks() {
          this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable");
        }, moved: function moved() {
          return this._draggable && this._draggable._moved;
        }, _onDragStart: function _onDragStart() {
          this._marker.closePopup().fire("movestart").fire("dragstart");
        }, _onDrag: function _onDrag() {
          var t = this._marker,
              e = t._shadow,
              i = o.DomUtil.getPosition(t._icon),
              n = t._map.layerPointToLatLng(i);e && o.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", { latlng: n }).fire("drag");
        }, _onDragEnd: function _onDragEnd(t) {
          this._marker.fire("moveend").fire("dragend", t);
        } }), o.Control = o.Class.extend({ options: { position: "topright" }, initialize: function initialize(t) {
          o.setOptions(this, t);
        }, getPosition: function getPosition() {
          return this.options.position;
        }, setPosition: function setPosition(t) {
          var e = this._map;return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
        }, getContainer: function getContainer() {
          return this._container;
        }, addTo: function addTo(t) {
          this._map = t;var e = this._container = this.onAdd(t),
              i = this.getPosition(),
              n = t._controlCorners[i];return o.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this;
        }, removeFrom: function removeFrom(t) {
          var e = this.getPosition(),
              i = t._controlCorners[e];return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this;
        }, _refocusOnMap: function _refocusOnMap() {
          this._map && this._map.getContainer().focus();
        } }), o.control = function (t) {
        return new o.Control(t);
      }, o.Map.include({ addControl: function addControl(t) {
          return t.addTo(this), this;
        }, removeControl: function removeControl(t) {
          return t.removeFrom(this), this;
        }, _initControlPos: function _initControlPos() {
          function t(t, s) {
            var a = i + t + " " + i + s;e[t + s] = o.DomUtil.create("div", a, n);
          }var e = this._controlCorners = {},
              i = "leaflet-",
              n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
        }, _clearControlPos: function _clearControlPos() {
          this._container.removeChild(this._controlContainer);
        } }), o.Control.Zoom = o.Control.extend({ options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "-", zoomOutTitle: "Zoom out" }, onAdd: function onAdd(t) {
          var e = "leaflet-control-zoom",
              i = o.DomUtil.create("div", e + " leaflet-bar");return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
        }, onRemove: function onRemove(t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        }, _zoomIn: function _zoomIn(t) {
          this._map.zoomIn(t.shiftKey ? 3 : 1);
        }, _zoomOut: function _zoomOut(t) {
          this._map.zoomOut(t.shiftKey ? 3 : 1);
        }, _createButton: function _createButton(t, e, i, n, s, a) {
          var r = o.DomUtil.create("a", i, n);r.innerHTML = t, r.href = "#", r.title = e;var h = o.DomEvent.stopPropagation;return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault).on(r, "click", s, a).on(r, "click", this._refocusOnMap, a), r;
        }, _updateDisabled: function _updateDisabled() {
          var t = this._map,
              e = "leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e);
        } }), o.Map.mergeOptions({ zoomControl: !0 }), o.Map.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new o.Control.Zoom(), this.addControl(this.zoomControl));
      }), o.control.zoom = function (t) {
        return new o.Control.Zoom(t);
      }, o.Control.Attribution = o.Control.extend({ options: { position: "bottomright", prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' }, initialize: function initialize(t) {
          o.setOptions(this, t), this._attributions = {};
        }, onAdd: function onAdd(t) {
          this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container);for (var e in t._layers) {
            t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
          }return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container;
        }, onRemove: function onRemove(t) {
          t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove);
        }, setPrefix: function setPrefix(t) {
          return this.options.prefix = t, this._update(), this;
        }, addAttribution: function addAttribution(t) {
          return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0;
        }, removeAttribution: function removeAttribution(t) {
          return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0;
        }, _update: function _update() {
          if (this._map) {
            var t = [];for (var e in this._attributions) {
              this._attributions[e] && t.push(e);
            }var i = [];this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ");
          }
        }, _onLayerAdd: function _onLayerAdd(t) {
          t.layer.getAttribution && this.addAttribution(t.layer.getAttribution());
        }, _onLayerRemove: function _onLayerRemove(t) {
          t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution());
        } }), o.Map.mergeOptions({ attributionControl: !0 }), o.Map.addInitHook(function () {
        this.options.attributionControl && (this.attributionControl = new o.Control.Attribution().addTo(this));
      }), o.control.attribution = function (t) {
        return new o.Control.Attribution(t);
      }, o.Control.Scale = o.Control.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0, updateWhenIdle: !1 }, onAdd: function onAdd(t) {
          this._map = t;var e = "leaflet-control-scale",
              i = o.DomUtil.create("div", e),
              n = this.options;return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
        }, onRemove: function onRemove(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        }, _addScales: function _addScales(t, e, i) {
          t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", i));
        }, _update: function _update() {
          var t = this._map.getBounds(),
              e = t.getCenter().lat,
              i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
              n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
              o = this._map.getSize(),
              s = this.options,
              a = 0;o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a);
        }, _updateScales: function _updateScales(t, e) {
          t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e);
        }, _updateMetric: function _updateMetric(t) {
          var e = this._getRoundNum(t);this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km";
        }, _updateImperial: function _updateImperial(t) {
          var e,
              i,
              n,
              o = 3.2808399 * t,
              s = this._iScale;o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft");
        }, _getScaleWidth: function _getScaleWidth(t) {
          return Math.round(this.options.maxWidth * t) - 10;
        }, _getRoundNum: function _getRoundNum(t) {
          var e = Math.pow(10, (Math.floor(t) + "").length - 1),
              i = t / e;return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
        } }), o.control.scale = function (t) {
        return new o.Control.Scale(t);
      }, o.Control.Layers = o.Control.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0 }, initialize: function initialize(t, e, i) {
          o.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;for (var n in t) {
            this._addLayer(t[n], n);
          }for (n in e) {
            this._addLayer(e[n], n, !0);
          }
        }, onAdd: function onAdd(t) {
          return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container;
        }, onRemove: function onRemove(t) {
          t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this);
        }, addBaseLayer: function addBaseLayer(t, e) {
          return this._addLayer(t, e), this._update(), this;
        }, addOverlay: function addOverlay(t, e) {
          return this._addLayer(t, e, !0), this._update(), this;
        }, removeLayer: function removeLayer(t) {
          var e = o.stamp(t);return delete this._layers[e], this._update(), this;
        }, _initLayout: function _initLayout() {
          var t = "leaflet-control-layers",
              e = this._container = o.DomUtil.create("div", t);e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i = this._form = o.DomUtil.create("form", t + "-list");if (this.options.collapsed) {
            o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);n.href = "#", n.title = "Layers", o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click", this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this), o.DomEvent.on(i, "click", function () {
              setTimeout(o.bind(this._onInputClick, this), 0);
            }, this), this._map.on("click", this._collapse, this);
          } else this._expand();this._baseLayersList = o.DomUtil.create("div", t + "-base", i), this._separator = o.DomUtil.create("div", t + "-separator", i), this._overlaysList = o.DomUtil.create("div", t + "-overlays", i), e.appendChild(i);
        }, _addLayer: function _addLayer(t, e, i) {
          var n = o.stamp(t);this._layers[n] = { layer: t, name: e, overlay: i }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex));
        }, _update: function _update() {
          if (this._container) {
            this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";var t,
                e,
                i = !1,
                n = !1;for (t in this._layers) {
              e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
            }this._separator.style.display = n && i ? "" : "none";
          }
        }, _onLayerChange: function _onLayerChange(t) {
          var e = this._layers[o.stamp(t.layer)];if (e) {
            this._handlingClick || this._update();var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;i && this._map.fire(i, e);
          }
        }, _createRadioElement: function _createRadioElement(t, i) {
          var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';i && (n += ' checked="checked"'), n += "/>";var o = e.createElement("div");return o.innerHTML = n, o.firstChild;
        }, _addItem: function _addItem(t) {
          var i,
              n = e.createElement("label"),
              s = this._map.hasLayer(t.layer);t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);var a = e.createElement("span");a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);var r = t.overlay ? this._overlaysList : this._baseLayersList;return r.appendChild(n), n;
        }, _onInputClick: function _onInputClick() {
          var t,
              e,
              i,
              n = this._form.getElementsByTagName("input"),
              o = n.length;for (this._handlingClick = !0, t = 0; o > t; t++) {
            e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
          }this._handlingClick = !1, this._refocusOnMap();
        }, _expand: function _expand() {
          o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded");
        }, _collapse: function _collapse() {
          this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "");
        } }), o.control.layers = function (t, e, i) {
        return new o.Control.Layers(t, e, i);
      }, o.PosAnimation = o.Class.extend({ includes: o.Mixin.Events, run: function run(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50);
        }, stop: function stop() {
          this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth));
        }, _onStep: function _onStep() {
          var t = this._getPos();return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd();
        }, _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/, _getPos: function _getPos() {
          var e,
              i,
              n,
              s = this._el,
              a = t.getComputedStyle(s);if (o.Browser.any3d) {
            if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe), !n) return;e = parseFloat(n[1]), i = parseFloat(n[2]);
          } else e = parseFloat(a.left), i = parseFloat(a.top);return new o.Point(e, i, !0);
        }, _onTransitionEnd: function _onTransitionEnd() {
          o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"));
        } }), o.Map.include({ setView: function setView(t, e, n) {
          if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
            n.animate !== i && (n.zoom = o.extend({ animate: n.animate }, n.zoom), n.pan = o.extend({ animate: n.animate }, n.pan));var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);if (s) return clearTimeout(this._sizeTimer), this;
          }return this._resetView(t, e), this;
        }, panBy: function panBy(t, e) {
          if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this;if (this._panAnim || (this._panAnim = new o.PosAnimation(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
            o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");var i = this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity);
          } else this._rawPanBy(t), this.fire("move").fire("moveend");return this;
        }, _onPanTransitionStep: function _onPanTransitionStep() {
          this.fire("move");
        }, _onPanTransitionEnd: function _onPanTransitionEnd() {
          o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        }, _tryAnimatedPan: function _tryAnimatedPan(t, e) {
          var i = this._getCenterOffset(t)._floor();return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1;
        } }), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({ run: function run(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
        }, stop: function stop() {
          this._inProgress && (this._step(), this._complete());
        }, _animate: function _animate() {
          this._animId = o.Util.requestAnimFrame(this._animate, this), this._step();
        }, _step: function _step() {
          var t = +new Date() - this._startTime,
              e = 1e3 * this._duration;e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete());
        }, _runFrame: function _runFrame(t) {
          var e = this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el, e), this.fire("step");
        }, _complete: function _complete() {
          o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end");
        }, _easeOut: function _easeOut(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        } }), o.Map.mergeOptions({ zoomAnimation: !0, zoomAnimationThreshold: 4 }), o.DomUtil.TRANSITION && o.Map.addInitHook(function () {
        this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
      }), o.Map.include(o.DomUtil.TRANSITION ? { _catchTransitionEnd: function _catchTransitionEnd(t) {
          this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        }, _nothingToAnimate: function _nothingToAnimate() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        }, _tryAnimatedZoom: function _tryAnimatedZoom(t, e, i) {
          if (this._animatingZoom) return !0;if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;var n = this.getZoomScale(e),
              o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
              s = this._getCenterLayerPoint()._add(o);return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1;
        }, _animateZoom: function _animateZoom(t, e, i, n, s, a, r) {
          r || (this._animatingZoom = !0), o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), o.Util.requestAnimFrame(function () {
            this.fire("zoomanim", { center: t, zoom: e, origin: i, scale: n, delta: s, backwards: a }), setTimeout(o.bind(this._onZoomTransitionEnd, this), 250);
          }, this);
        }, _onZoomTransitionEnd: function _onZoomTransitionEnd() {
          this._animatingZoom && (this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), o.Util.requestAnimFrame(function () {
            this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !1);
          }, this));
        } } : {}), o.TileLayer.include({ _animateZoom: function _animateZoom(t) {
          this._animating || (this._animating = !0, this._prepareBgBuffer());var e = this._bgBuffer,
              i = o.DomUtil.TRANSFORM,
              n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i],
              s = o.DomUtil.getScaleString(t.scale, t.origin);e.style[i] = t.backwards ? s + " " + n : n + " " + s;
        }, _endZoomAnim: function _endZoomAnim() {
          var t = this._tileContainer,
              e = this._bgBuffer;t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth);var i = this._map.getZoom();(i > this.options.maxZoom || i < this.options.minZoom) && this._clearBgBuffer(), this._animating = !1;
        }, _clearBgBuffer: function _clearBgBuffer() {
          var t = this._map;!t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "");
        }, _prepareBgBuffer: function _prepareBgBuffer() {
          var t = this._tileContainer,
              e = this._bgBuffer,
              i = this._getLoadedTilesPercentage(e),
              n = this._getLoadedTilesPercentage(t);return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer));
        }, _getLoadedTilesPercentage: function _getLoadedTilesPercentage(t) {
          var e,
              i,
              n = t.getElementsByTagName("img"),
              o = 0;for (e = 0, i = n.length; i > e; e++) {
            n[e].complete && o++;
          }return o / i;
        }, _stopLoadingImages: function _stopLoadingImages(t) {
          var e,
              i,
              n,
              s = Array.prototype.slice.call(t.getElementsByTagName("img"));for (e = 0, i = s.length; i > e; e++) {
            n = s[e], n.complete || (n.onload = o.Util.falseFn, n.onerror = o.Util.falseFn, n.src = o.Util.emptyImageUrl, n.parentNode.removeChild(n));
          }
        } }), o.Map.include({ _defaultLocateOptions: { watch: !1, setView: !1, maxZoom: 1 / 0, timeout: 1e4, maximumAge: 0, enableHighAccuracy: !1 }, locate: function locate(t) {
          if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;var e = o.bind(this._handleGeolocationResponse, this),
              i = o.bind(this._handleGeolocationError, this);return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
        }, stopLocate: function stopLocate() {
          return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        }, _handleGeolocationError: function _handleGeolocationError(t) {
          var e = t.code,
              i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: e, message: "Geolocation error: " + i + "." });
        }, _handleGeolocationResponse: function _handleGeolocationResponse(t) {
          var e = t.coords.latitude,
              i = t.coords.longitude,
              n = new o.LatLng(e, i),
              s = 180 * t.coords.accuracy / 40075017,
              a = s / Math.cos(o.LatLng.DEG_TO_RAD * e),
              r = o.latLngBounds([e - s, i - a], [e + s, i + a]),
              h = this._locateOptions;if (h.setView) {
            var l = Math.min(this.getBoundsZoom(r), h.maxZoom);this.setView(n, l);
          }var u = { latlng: n, bounds: r, timestamp: t.timestamp };for (var c in t.coords) {
            "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
          }this.fire("locationfound", u);
        } });
    }(window, document);
  }, {}], 4: [function (require, module, exports) {
    !function (e, t) {
      "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && exports && "string" != typeof exports.nodeName ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e.Mustache = {}, t(e.Mustache));
    }(this, function (e) {
      function t(e) {
        return "function" == typeof e;
      }function n(e) {
        return g(e) ? "array" : typeof e === "undefined" ? "undefined" : _typeof(e);
      }function r(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }function i(e, t) {
        return null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && t in e;
      }function o(e, t) {
        return v.call(e, t);
      }function s(e) {
        return !o(w, e);
      }function a(e) {
        return String(e).replace(/[&<>"'`=\/]/g, function (e) {
          return y[e];
        });
      }function u(t, n) {
        function i() {
          if (w && !y) for (; v.length;) {
            delete d[v.pop()];
          } else v = [];w = !1, y = !1;
        }function o(e) {
          if ("string" == typeof e && (e = e.split(k, 2)), !g(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);a = new RegExp(r(e[0]) + "\\s*"), u = new RegExp("\\s*" + r(e[1])), h = new RegExp("\\s*" + r("}" + e[1]));
        }if (!t) return [];var a,
            u,
            h,
            f = [],
            d = [],
            v = [],
            w = !1,
            y = !1;o(n || e.tags);for (var U, T, j, S, V, C, A = new l(t); !A.eos();) {
          if (U = A.pos, j = A.scanUntil(a)) for (var I = 0, R = j.length; R > I; ++I) {
            S = j.charAt(I), s(S) ? v.push(d.length) : y = !0, d.push(["text", S, U, U + 1]), U += 1, "\n" === S && i();
          }if (!A.scan(a)) break;if (w = !0, T = A.scan(E) || "name", A.scan(x), "=" === T ? (j = A.scanUntil(b), A.scan(b), A.scanUntil(u)) : "{" === T ? (j = A.scanUntil(h), A.scan(m), A.scanUntil(u), T = "&") : j = A.scanUntil(u), !A.scan(u)) throw new Error("Unclosed tag at " + A.pos);if (V = [T, j, U, A.pos], d.push(V), "#" === T || "^" === T) f.push(V);else if ("/" === T) {
            if (C = f.pop(), !C) throw new Error('Unopened section "' + j + '" at ' + U);if (C[1] !== j) throw new Error('Unclosed section "' + C[1] + '" at ' + U);
          } else "name" === T || "{" === T || "&" === T ? y = !0 : "=" === T && o(j);
        }if (C = f.pop()) throw new Error('Unclosed section "' + C[1] + '" at ' + A.pos);return p(c(d));
      }function c(e) {
        for (var t, n, r = [], i = 0, o = e.length; o > i; ++i) {
          t = e[i], t && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
        }return r;
      }function p(e) {
        for (var t, n, r = [], i = r, o = [], s = 0, a = e.length; a > s; ++s) {
          switch (t = e[s], t[0]) {case "#":case "^":
              i.push(t), o.push(t), i = t[4] = [];break;case "/":
              n = o.pop(), n[5] = t[2], i = o.length > 0 ? o[o.length - 1][4] : r;break;default:
              i.push(t);}
        }return r;
      }function l(e) {
        this.string = e, this.tail = e, this.pos = 0;
      }function h(e, t) {
        this.view = e, this.cache = { ".": this.view }, this.parent = t;
      }function f() {
        this.cache = {};
      }var d = Object.prototype.toString,
          g = Array.isArray || function (e) {
        return "[object Array]" === d.call(e);
      },
          v = RegExp.prototype.test,
          w = /\S/,
          y = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" },
          x = /\s*/,
          k = /\s+/,
          b = /\s*=/,
          m = /\s*\}/,
          E = /#|\^|\/|>|\{|&|=|!/;l.prototype.eos = function () {
        return "" === this.tail;
      }, l.prototype.scan = function (e) {
        var t = this.tail.match(e);if (!t || 0 !== t.index) return "";var n = t[0];return this.tail = this.tail.substring(n.length), this.pos += n.length, n;
      }, l.prototype.scanUntil = function (e) {
        var t,
            n = this.tail.search(e);switch (n) {case -1:
            t = this.tail, this.tail = "";break;case 0:
            t = "";break;default:
            t = this.tail.substring(0, n), this.tail = this.tail.substring(n);}return this.pos += t.length, t;
      }, h.prototype.push = function (e) {
        return new h(e, this);
      }, h.prototype.lookup = function (e) {
        var n,
            r = this.cache;if (r.hasOwnProperty(e)) n = r[e];else {
          for (var o, s, a = this, u = !1; a;) {
            if (e.indexOf(".") > 0) for (n = a.view, o = e.split("."), s = 0; null != n && s < o.length;) {
              s === o.length - 1 && (u = i(n, o[s])), n = n[o[s++]];
            } else n = a.view[e], u = i(a.view, e);if (u) break;a = a.parent;
          }r[e] = n;
        }return t(n) && (n = n.call(this.view)), n;
      }, f.prototype.clearCache = function () {
        this.cache = {};
      }, f.prototype.parse = function (e, t) {
        var n = this.cache,
            r = n[e];return null == r && (r = n[e] = u(e, t)), r;
      }, f.prototype.render = function (e, t, n) {
        var r = this.parse(e),
            i = t instanceof h ? t : new h(t);return this.renderTokens(r, i, n, e);
      }, f.prototype.renderTokens = function (e, t, n, r) {
        for (var i, o, s, a = "", u = 0, c = e.length; c > u; ++u) {
          s = void 0, i = e[u], o = i[0], "#" === o ? s = this.renderSection(i, t, n, r) : "^" === o ? s = this.renderInverted(i, t, n, r) : ">" === o ? s = this.renderPartial(i, t, n, r) : "&" === o ? s = this.unescapedValue(i, t) : "name" === o ? s = this.escapedValue(i, t) : "text" === o && (s = this.rawValue(i)), void 0 !== s && (a += s);
        }return a;
      }, f.prototype.renderSection = function (e, n, r, i) {
        function o(e) {
          return s.render(e, n, r);
        }var s = this,
            a = "",
            u = n.lookup(e[1]);if (u) {
          if (g(u)) for (var c = 0, p = u.length; p > c; ++c) {
            a += this.renderTokens(e[4], n.push(u[c]), r, i);
          } else if ("object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) || "string" == typeof u || "number" == typeof u) a += this.renderTokens(e[4], n.push(u), r, i);else if (t(u)) {
            if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");u = u.call(n.view, i.slice(e[3], e[5]), o), null != u && (a += u);
          } else a += this.renderTokens(e[4], n, r, i);return a;
        }
      }, f.prototype.renderInverted = function (e, t, n, r) {
        var i = t.lookup(e[1]);return !i || g(i) && 0 === i.length ? this.renderTokens(e[4], t, n, r) : void 0;
      }, f.prototype.renderPartial = function (e, n, r) {
        if (r) {
          var i = t(r) ? r(e[1]) : r[e[1]];return null != i ? this.renderTokens(this.parse(i), n, r, i) : void 0;
        }
      }, f.prototype.unescapedValue = function (e, t) {
        var n = t.lookup(e[1]);return null != n ? n : void 0;
      }, f.prototype.escapedValue = function (t, n) {
        var r = n.lookup(t[1]);return null != r ? e.escape(r) : void 0;
      }, f.prototype.rawValue = function (e) {
        return e[1];
      }, e.name = "mustache.js", e.version = "2.2.1", e.tags = ["{{", "}}"];var U = new f();e.clearCache = function () {
        return U.clearCache();
      }, e.parse = function (e, t) {
        return U.parse(e, t);
      }, e.render = function (e, t, r) {
        if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');return U.render(e, t, r);
      }, e.to_html = function (n, r, i, o) {
        var s = e.render(n, r, i);return t(o) ? void o(s) : s;
      }, e.escape = a, e.Scanner = l, e.Context = h, e.Writer = f;
    });
  }, {}], 5: [function (require, module, exports) {
    function cleanUrl(t) {
      "use strict";
      return (/^https?/.test(t.getScheme()) ? t.toString() : /^mailto?/.test(t.getScheme()) ? t.toString() : "data" == t.getScheme() && /^image/.test(t.getPath()) ? t.toString() : void 0
      );
    }function cleanId(t) {
      return t;
    }var html_sanitize = require("./sanitizer-bundle.js");module.exports = function (t) {
      return t ? html_sanitize(t, cleanUrl, cleanId) : "";
    };
  }, { "./sanitizer-bundle.js": 6 }], 6: [function (require, module, exports) {
    var URI = function () {
      function e(e) {
        var t = ("" + e).match(p);return t ? new s(c(t[1]), c(t[2]), c(t[3]), c(t[4]), c(t[5]), c(t[6]), c(t[7])) : null;
      }function t(e, t, o, i, l, c, m) {
        var u = new s(n(e, d), n(t, d), a(o), i > 0 ? i.toString() : null, n(l, f), null, a(m));return c && ("string" == typeof c ? u.setRawQuery(c.replace(/[^?&=0-9A-Za-z_\-~.%]/g, r)) : u.setAllParameters(c)), u;
      }function a(e) {
        return "string" == typeof e ? encodeURIComponent(e) : null;
      }function n(e, t) {
        return "string" == typeof e ? encodeURI(e).replace(t, r) : null;
      }function r(e) {
        var t = e.charCodeAt(0);return "%" + "0123456789ABCDEF".charAt(t >> 4 & 15) + "0123456789ABCDEF".charAt(15 & t);
      }function o(e) {
        return e.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/");
      }function i(e) {
        if (null === e) return null;for (var t, a = o(e), n = u; (t = a.replace(n, "$1")) != a; a = t) {}return a;
      }function l(e, t) {
        var a = e.clone(),
            n = t.hasScheme();n ? a.setRawScheme(t.getRawScheme()) : n = t.hasCredentials(), n ? a.setRawCredentials(t.getRawCredentials()) : n = t.hasDomain(), n ? a.setRawDomain(t.getRawDomain()) : n = t.hasPort();var r = t.getRawPath(),
            o = i(r);if (n) a.setPort(t.getPort()), o = o && o.replace(h, "");else if (n = !!r) {
          if (47 !== o.charCodeAt(0)) {
            var l = i(a.getRawPath() || "").replace(h, ""),
                s = l.lastIndexOf("/") + 1;o = i((s ? l.substring(0, s) : "") + i(r)).replace(h, "");
          }
        } else o = o && o.replace(h, ""), o !== r && a.setRawPath(o);return n ? a.setRawPath(o) : n = t.hasQuery(), n ? a.setRawQuery(t.getRawQuery()) : n = t.hasFragment(), n && a.setRawFragment(t.getRawFragment()), a;
      }function s(e, t, a, n, r, o, i) {
        this.scheme_ = e, this.credentials_ = t, this.domain_ = a, this.port_ = n, this.path_ = r, this.query_ = o, this.fragment_ = i, this.paramCache_ = null;
      }function c(e) {
        return "string" == typeof e && e.length > 0 ? e : null;
      }var m = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
          u = new RegExp(m),
          h = /^(?:\.\.\/)*(?:\.\.$)?/;s.prototype.toString = function () {
        var e = [];return null !== this.scheme_ && e.push(this.scheme_, ":"), null !== this.domain_ && (e.push("//"), null !== this.credentials_ && e.push(this.credentials_, "@"), e.push(this.domain_), null !== this.port_ && e.push(":", this.port_.toString())), null !== this.path_ && e.push(this.path_), null !== this.query_ && e.push("?", this.query_), null !== this.fragment_ && e.push("#", this.fragment_), e.join("");
      }, s.prototype.clone = function () {
        return new s(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_);
      }, s.prototype.getScheme = function () {
        return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase();
      }, s.prototype.getRawScheme = function () {
        return this.scheme_;
      }, s.prototype.setScheme = function (e) {
        return this.scheme_ = n(e, d), this;
      }, s.prototype.setRawScheme = function (e) {
        return this.scheme_ = e ? e : null, this;
      }, s.prototype.hasScheme = function () {
        return null !== this.scheme_;
      }, s.prototype.getCredentials = function () {
        return this.credentials_ && decodeURIComponent(this.credentials_);
      }, s.prototype.getRawCredentials = function () {
        return this.credentials_;
      }, s.prototype.setCredentials = function (e) {
        return this.credentials_ = n(e, d), this;
      }, s.prototype.setRawCredentials = function (e) {
        return this.credentials_ = e ? e : null, this;
      }, s.prototype.hasCredentials = function () {
        return null !== this.credentials_;
      }, s.prototype.getDomain = function () {
        return this.domain_ && decodeURIComponent(this.domain_);
      }, s.prototype.getRawDomain = function () {
        return this.domain_;
      }, s.prototype.setDomain = function (e) {
        return this.setRawDomain(e && encodeURIComponent(e));
      }, s.prototype.setRawDomain = function (e) {
        return this.domain_ = e ? e : null, this.setRawPath(this.path_);
      }, s.prototype.hasDomain = function () {
        return null !== this.domain_;
      }, s.prototype.getPort = function () {
        return this.port_ && decodeURIComponent(this.port_);
      }, s.prototype.setPort = function (e) {
        if (e) {
          if (e = Number(e), e !== (65535 & e)) throw new Error("Bad port number " + e);this.port_ = "" + e;
        } else this.port_ = null;return this;
      }, s.prototype.hasPort = function () {
        return null !== this.port_;
      }, s.prototype.getPath = function () {
        return this.path_ && decodeURIComponent(this.path_);
      }, s.prototype.getRawPath = function () {
        return this.path_;
      }, s.prototype.setPath = function (e) {
        return this.setRawPath(n(e, f));
      }, s.prototype.setRawPath = function (e) {
        return e ? (e = String(e), this.path_ = !this.domain_ || /^\//.test(e) ? e : "/" + e) : this.path_ = null, this;
      }, s.prototype.hasPath = function () {
        return null !== this.path_;
      }, s.prototype.getQuery = function () {
        return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ");
      }, s.prototype.getRawQuery = function () {
        return this.query_;
      }, s.prototype.setQuery = function (e) {
        return this.paramCache_ = null, this.query_ = a(e), this;
      }, s.prototype.setRawQuery = function (e) {
        return this.paramCache_ = null, this.query_ = e ? e : null, this;
      }, s.prototype.hasQuery = function () {
        return null !== this.query_;
      }, s.prototype.setAllParameters = function (e) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && !(e instanceof Array) && (e instanceof Object || "[object Array]" !== Object.prototype.toString.call(e))) {
          var t = [],
              a = -1;for (var n in e) {
            var r = e[n];"string" == typeof r && (t[++a] = n, t[++a] = r);
          }e = t;
        }this.paramCache_ = null;for (var o = [], i = "", l = 0; l < e.length;) {
          var n = e[l++],
              r = e[l++];o.push(i, encodeURIComponent(n.toString())), i = "&", r && o.push("=", encodeURIComponent(r.toString()));
        }return this.query_ = o.join(""), this;
      }, s.prototype.checkParameterCache_ = function () {
        if (!this.paramCache_) {
          var e = this.query_;if (e) {
            for (var t = e.split(/[&\?]/), a = [], n = -1, r = 0; r < t.length; ++r) {
              var o = t[r].match(/^([^=]*)(?:=(.*))?$/);a[++n] = decodeURIComponent(o[1]).replace(/\+/g, " "), a[++n] = decodeURIComponent(o[2] || "").replace(/\+/g, " ");
            }this.paramCache_ = a;
          } else this.paramCache_ = [];
        }
      }, s.prototype.setParameterValues = function (e, t) {
        "string" == typeof t && (t = [t]), this.checkParameterCache_();for (var a = 0, n = this.paramCache_, r = [], o = 0; o < n.length; o += 2) {
          e === n[o] ? a < t.length && r.push(e, t[a++]) : r.push(n[o], n[o + 1]);
        }for (; a < t.length;) {
          r.push(e, t[a++]);
        }return this.setAllParameters(r), this;
      }, s.prototype.removeParameter = function (e) {
        return this.setParameterValues(e, []);
      }, s.prototype.getAllParameters = function () {
        return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length);
      }, s.prototype.getParameterValues = function (e) {
        this.checkParameterCache_();for (var t = [], a = 0; a < this.paramCache_.length; a += 2) {
          e === this.paramCache_[a] && t.push(this.paramCache_[a + 1]);
        }return t;
      }, s.prototype.getParameterMap = function (e) {
        this.checkParameterCache_();for (var t = {}, a = 0; a < this.paramCache_.length; a += 2) {
          var n = this.paramCache_[a++],
              r = this.paramCache_[a++];n in t ? t[n].push(r) : t[n] = [r];
        }return t;
      }, s.prototype.getParameterValue = function (e) {
        this.checkParameterCache_();for (var t = 0; t < this.paramCache_.length; t += 2) {
          if (e === this.paramCache_[t]) return this.paramCache_[t + 1];
        }return null;
      }, s.prototype.getFragment = function () {
        return this.fragment_ && decodeURIComponent(this.fragment_);
      }, s.prototype.getRawFragment = function () {
        return this.fragment_;
      }, s.prototype.setFragment = function (e) {
        return this.fragment_ = e ? encodeURIComponent(e) : null, this;
      }, s.prototype.setRawFragment = function (e) {
        return this.fragment_ = e ? e : null, this;
      }, s.prototype.hasFragment = function () {
        return null !== this.fragment_;
      };var p = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
          d = /[#\/\?@]/g,
          f = /[\#\?]/g;return s.parse = e, s.create = t, s.resolve = l, s.collapse_dots = i, s.utils = { mimeTypeOf: function mimeTypeOf(t) {
          var a = e(t);return (/\.html$/.test(a.getPath()) ? "text/html" : "application/javascript"
          );
        }, resolve: function resolve(t, a) {
          return t ? l(e(t), e(a)).toString() : "" + a;
        } }, s;
    }(),
        html4 = {};if (html4.atype = { NONE: 0, URI: 1, URI_FRAGMENT: 11, SCRIPT: 2, STYLE: 3, HTML: 12, ID: 4, IDREF: 5, IDREFS: 6, GLOBAL_NAME: 7, LOCAL_NAME: 8, CLASSES: 9, FRAME_TARGET: 10, MEDIA_QUERY: 13 }, html4.atype = html4.atype, html4.ATTRIBS = { "*::class": 9, "*::dir": 0, "*::draggable": 0, "*::hidden": 0, "*::id": 4, "*::inert": 0, "*::itemprop": 0, "*::itemref": 6, "*::itemscope": 0, "*::lang": 0, "*::onblur": 2, "*::onchange": 2, "*::onclick": 2, "*::ondblclick": 2, "*::onfocus": 2, "*::onkeydown": 2, "*::onkeypress": 2, "*::onkeyup": 2, "*::onload": 2, "*::onmousedown": 2, "*::onmousemove": 2, "*::onmouseout": 2, "*::onmouseover": 2, "*::onmouseup": 2, "*::onreset": 2, "*::onscroll": 2, "*::onselect": 2, "*::onsubmit": 2, "*::onunload": 2, "*::spellcheck": 0, "*::style": 3, "*::title": 0, "*::translate": 0, "a::accesskey": 0, "a::coords": 0, "a::href": 1, "a::hreflang": 0, "a::name": 7, "a::onblur": 2, "a::onfocus": 2, "a::shape": 0, "a::tabindex": 0, "a::target": 10, "a::type": 0, "area::accesskey": 0, "area::alt": 0, "area::coords": 0, "area::href": 1, "area::nohref": 0, "area::onblur": 2, "area::onfocus": 2, "area::shape": 0, "area::tabindex": 0, "area::target": 10, "audio::controls": 0, "audio::loop": 0, "audio::mediagroup": 5, "audio::muted": 0, "audio::preload": 0, "bdo::dir": 0, "blockquote::cite": 1, "br::clear": 0, "button::accesskey": 0, "button::disabled": 0, "button::name": 8, "button::onblur": 2, "button::onfocus": 2, "button::tabindex": 0, "button::type": 0, "button::value": 0, "canvas::height": 0, "canvas::width": 0, "caption::align": 0, "col::align": 0, "col::char": 0, "col::charoff": 0, "col::span": 0, "col::valign": 0, "col::width": 0, "colgroup::align": 0, "colgroup::char": 0, "colgroup::charoff": 0, "colgroup::span": 0, "colgroup::valign": 0, "colgroup::width": 0, "command::checked": 0, "command::command": 5, "command::disabled": 0, "command::icon": 1, "command::label": 0, "command::radiogroup": 0, "command::type": 0, "data::value": 0, "del::cite": 1, "del::datetime": 0, "details::open": 0, "dir::compact": 0, "div::align": 0, "dl::compact": 0, "fieldset::disabled": 0, "font::color": 0, "font::face": 0, "font::size": 0, "form::accept": 0, "form::action": 1, "form::autocomplete": 0, "form::enctype": 0, "form::method": 0, "form::name": 7, "form::novalidate": 0, "form::onreset": 2, "form::onsubmit": 2, "form::target": 10, "h1::align": 0, "h2::align": 0, "h3::align": 0, "h4::align": 0, "h5::align": 0, "h6::align": 0, "hr::align": 0, "hr::noshade": 0, "hr::size": 0, "hr::width": 0, "iframe::align": 0, "iframe::frameborder": 0, "iframe::height": 0, "iframe::marginheight": 0, "iframe::marginwidth": 0, "iframe::width": 0, "img::align": 0, "img::alt": 0, "img::border": 0, "img::height": 0, "img::hspace": 0, "img::ismap": 0, "img::name": 7, "img::src": 1, "img::usemap": 11, "img::vspace": 0, "img::width": 0, "input::accept": 0, "input::accesskey": 0, "input::align": 0, "input::alt": 0, "input::autocomplete": 0, "input::checked": 0, "input::disabled": 0, "input::inputmode": 0, "input::ismap": 0, "input::list": 5, "input::max": 0, "input::maxlength": 0, "input::min": 0, "input::multiple": 0, "input::name": 8, "input::onblur": 2, "input::onchange": 2, "input::onfocus": 2, "input::onselect": 2, "input::placeholder": 0, "input::readonly": 0, "input::required": 0, "input::size": 0, "input::src": 1, "input::step": 0, "input::tabindex": 0, "input::type": 0, "input::usemap": 11, "input::value": 0, "ins::cite": 1, "ins::datetime": 0, "label::accesskey": 0, "label::for": 5, "label::onblur": 2, "label::onfocus": 2, "legend::accesskey": 0, "legend::align": 0, "li::type": 0, "li::value": 0, "map::name": 7, "menu::compact": 0, "menu::label": 0, "menu::type": 0, "meter::high": 0, "meter::low": 0, "meter::max": 0, "meter::min": 0, "meter::value": 0, "ol::compact": 0, "ol::reversed": 0, "ol::start": 0, "ol::type": 0, "optgroup::disabled": 0, "optgroup::label": 0, "option::disabled": 0, "option::label": 0, "option::selected": 0, "option::value": 0, "output::for": 6, "output::name": 8, "p::align": 0, "pre::width": 0, "progress::max": 0, "progress::min": 0, "progress::value": 0, "q::cite": 1, "select::autocomplete": 0, "select::disabled": 0, "select::multiple": 0, "select::name": 8, "select::onblur": 2, "select::onchange": 2, "select::onfocus": 2, "select::required": 0, "select::size": 0, "select::tabindex": 0, "source::type": 0, "table::align": 0, "table::bgcolor": 0, "table::border": 0, "table::cellpadding": 0, "table::cellspacing": 0, "table::frame": 0, "table::rules": 0, "table::summary": 0, "table::width": 0, "tbody::align": 0, "tbody::char": 0, "tbody::charoff": 0, "tbody::valign": 0, "td::abbr": 0, "td::align": 0, "td::axis": 0, "td::bgcolor": 0, "td::char": 0, "td::charoff": 0, "td::colspan": 0, "td::headers": 6, "td::height": 0, "td::nowrap": 0, "td::rowspan": 0, "td::scope": 0, "td::valign": 0, "td::width": 0, "textarea::accesskey": 0, "textarea::autocomplete": 0, "textarea::cols": 0, "textarea::disabled": 0, "textarea::inputmode": 0, "textarea::name": 8, "textarea::onblur": 2, "textarea::onchange": 2, "textarea::onfocus": 2, "textarea::onselect": 2, "textarea::placeholder": 0, "textarea::readonly": 0, "textarea::required": 0, "textarea::rows": 0, "textarea::tabindex": 0, "textarea::wrap": 0, "tfoot::align": 0, "tfoot::char": 0, "tfoot::charoff": 0, "tfoot::valign": 0, "th::abbr": 0, "th::align": 0, "th::axis": 0, "th::bgcolor": 0, "th::char": 0, "th::charoff": 0, "th::colspan": 0, "th::headers": 6, "th::height": 0, "th::nowrap": 0, "th::rowspan": 0, "th::scope": 0, "th::valign": 0, "th::width": 0, "thead::align": 0, "thead::char": 0, "thead::charoff": 0, "thead::valign": 0, "tr::align": 0, "tr::bgcolor": 0, "tr::char": 0, "tr::charoff": 0, "tr::valign": 0, "track::default": 0, "track::kind": 0, "track::label": 0, "track::srclang": 0, "ul::compact": 0, "ul::type": 0, "video::controls": 0, "video::height": 0, "video::loop": 0, "video::mediagroup": 5, "video::muted": 0, "video::poster": 1, "video::preload": 0, "video::width": 0 }, html4.ATTRIBS = html4.ATTRIBS, html4.eflags = { OPTIONAL_ENDTAG: 1, EMPTY: 2, CDATA: 4, RCDATA: 8, UNSAFE: 16, FOLDABLE: 32, SCRIPT: 64, STYLE: 128, VIRTUALIZED: 256 }, html4.eflags = html4.eflags, html4.ELEMENTS = { a: 0, abbr: 0, acronym: 0, address: 0, applet: 272, area: 2, article: 0, aside: 0, audio: 0, b: 0, base: 274, basefont: 274, bdi: 0, bdo: 0, big: 0, blockquote: 0, body: 305, br: 2, button: 0, canvas: 0, caption: 0, center: 0, cite: 0, code: 0, col: 2, colgroup: 1, command: 2, data: 0, datalist: 0, dd: 1, del: 0, details: 0, dfn: 0, dialog: 272, dir: 0, div: 0, dl: 0, dt: 1, em: 0, fieldset: 0, figcaption: 0, figure: 0, font: 0, footer: 0, form: 0, frame: 274, frameset: 272, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, head: 305, header: 0, hgroup: 0, hr: 2, html: 305, i: 0, iframe: 16, img: 2, input: 2, ins: 0, isindex: 274, kbd: 0, keygen: 274, label: 0, legend: 0, li: 1, link: 274, map: 0, mark: 0, menu: 0, meta: 274, meter: 0, nav: 0, nobr: 0, noembed: 276, noframes: 276, noscript: 276, object: 272, ol: 0, optgroup: 0, option: 1, output: 0, p: 1, param: 274, pre: 0, progress: 0, q: 0, s: 0, samp: 0, script: 84, section: 0, select: 0, small: 0, source: 2, span: 0, strike: 0, strong: 0, style: 148, sub: 0, summary: 0, sup: 0, table: 0, tbody: 1, td: 1, textarea: 8, tfoot: 1, th: 1, thead: 1, time: 0, title: 280, tr: 1, track: 2, tt: 0, u: 0, ul: 0, "var": 0, video: 0, wbr: 2 }, html4.ELEMENTS = html4.ELEMENTS, html4.ELEMENT_DOM_INTERFACES = { a: "HTMLAnchorElement", abbr: "HTMLElement", acronym: "HTMLElement", address: "HTMLElement", applet: "HTMLAppletElement", area: "HTMLAreaElement", article: "HTMLElement", aside: "HTMLElement", audio: "HTMLAudioElement", b: "HTMLElement", base: "HTMLBaseElement", basefont: "HTMLBaseFontElement", bdi: "HTMLElement", bdo: "HTMLElement", big: "HTMLElement", blockquote: "HTMLQuoteElement", body: "HTMLBodyElement", br: "HTMLBRElement", button: "HTMLButtonElement", canvas: "HTMLCanvasElement", caption: "HTMLTableCaptionElement", center: "HTMLElement", cite: "HTMLElement", code: "HTMLElement", col: "HTMLTableColElement", colgroup: "HTMLTableColElement", command: "HTMLCommandElement", data: "HTMLElement", datalist: "HTMLDataListElement", dd: "HTMLElement", del: "HTMLModElement", details: "HTMLDetailsElement", dfn: "HTMLElement", dialog: "HTMLDialogElement", dir: "HTMLDirectoryElement", div: "HTMLDivElement", dl: "HTMLDListElement", dt: "HTMLElement", em: "HTMLElement", fieldset: "HTMLFieldSetElement", figcaption: "HTMLElement", figure: "HTMLElement", font: "HTMLFontElement", footer: "HTMLElement", form: "HTMLFormElement", frame: "HTMLFrameElement", frameset: "HTMLFrameSetElement", h1: "HTMLHeadingElement", h2: "HTMLHeadingElement", h3: "HTMLHeadingElement", h4: "HTMLHeadingElement", h5: "HTMLHeadingElement", h6: "HTMLHeadingElement", head: "HTMLHeadElement", header: "HTMLElement", hgroup: "HTMLElement", hr: "HTMLHRElement", html: "HTMLHtmlElement", i: "HTMLElement", iframe: "HTMLIFrameElement", img: "HTMLImageElement", input: "HTMLInputElement", ins: "HTMLModElement", isindex: "HTMLUnknownElement", kbd: "HTMLElement", keygen: "HTMLKeygenElement", label: "HTMLLabelElement", legend: "HTMLLegendElement", li: "HTMLLIElement", link: "HTMLLinkElement", map: "HTMLMapElement", mark: "HTMLElement", menu: "HTMLMenuElement", meta: "HTMLMetaElement", meter: "HTMLMeterElement", nav: "HTMLElement", nobr: "HTMLElement", noembed: "HTMLElement", noframes: "HTMLElement", noscript: "HTMLElement", object: "HTMLObjectElement", ol: "HTMLOListElement", optgroup: "HTMLOptGroupElement", option: "HTMLOptionElement", output: "HTMLOutputElement", p: "HTMLParagraphElement", param: "HTMLParamElement", pre: "HTMLPreElement", progress: "HTMLProgressElement", q: "HTMLQuoteElement", s: "HTMLElement", samp: "HTMLElement", script: "HTMLScriptElement", section: "HTMLElement", select: "HTMLSelectElement", small: "HTMLElement", source: "HTMLSourceElement", span: "HTMLSpanElement", strike: "HTMLElement", strong: "HTMLElement", style: "HTMLStyleElement", sub: "HTMLElement", summary: "HTMLElement", sup: "HTMLElement", table: "HTMLTableElement", tbody: "HTMLTableSectionElement", td: "HTMLTableDataCellElement", textarea: "HTMLTextAreaElement", tfoot: "HTMLTableSectionElement", th: "HTMLTableHeaderCellElement", thead: "HTMLTableSectionElement", time: "HTMLTimeElement", title: "HTMLTitleElement", tr: "HTMLTableRowElement", track: "HTMLTrackElement", tt: "HTMLElement", u: "HTMLElement", ul: "HTMLUListElement", "var": "HTMLElement", video: "HTMLVideoElement", wbr: "HTMLElement" }, html4.ELEMENT_DOM_INTERFACES = html4.ELEMENT_DOM_INTERFACES, html4.ueffects = { NOT_LOADED: 0, SAME_DOCUMENT: 1, NEW_DOCUMENT: 2 }, html4.ueffects = html4.ueffects, html4.URIEFFECTS = { "a::href": 2, "area::href": 2, "blockquote::cite": 0, "command::icon": 1, "del::cite": 0, "form::action": 2, "img::src": 1, "input::src": 1, "ins::cite": 0, "q::cite": 0, "video::poster": 1 }, html4.URIEFFECTS = html4.URIEFFECTS, html4.ltypes = { UNSANDBOXED: 2, SANDBOXED: 1, DATA: 0 }, html4.ltypes = html4.ltypes, html4.LOADERTYPES = { "a::href": 2, "area::href": 2, "blockquote::cite": 2, "command::icon": 1, "del::cite": 2, "form::action": 2, "img::src": 1, "input::src": 1, "ins::cite": 2, "q::cite": 2, "video::poster": 1 }, html4.LOADERTYPES = html4.LOADERTYPES, "i" !== "I".toLowerCase()) throw "I/i problem";var html = function (e) {
      function t(e) {
        if (S.hasOwnProperty(e)) return S[e];var t = e.match(P);if (t) return String.fromCharCode(parseInt(t[1], 10));if (t = e.match(D)) return String.fromCharCode(parseInt(t[1], 16));if (I && k.test(e)) {
          I.innerHTML = "&" + e + ";";var a = I.textContent;return S[e] = a, a;
        }return "&" + e + ";";
      }function a(e, a) {
        return t(a);
      }function n(e) {
        return e.replace(x, "");
      }function r(e) {
        return e.replace(N, a);
      }function o(e) {
        return ("" + e).replace(F, "&amp;").replace(B, "&lt;").replace(q, "&gt;").replace(z, "&#34;");
      }function i(e) {
        return e.replace(U, "&amp;$1").replace(B, "&lt;").replace(q, "&gt;");
      }function l(e) {
        var t = { cdata: e.cdata || e.cdata, comment: e.comment || e.comment, endDoc: e.endDoc || e.endDoc, endTag: e.endTag || e.endTag, pcdata: e.pcdata || e.pcdata, rcdata: e.rcdata || e.rcdata, startDoc: e.startDoc || e.startDoc, startTag: e.startTag || e.startTag };return function (e, a) {
          return s(e, t, a);
        };
      }function s(e, t, a) {
        var n = u(e),
            r = { noMoreGT: !1, noMoreEndComments: !1 };m(t, n, 0, r, a);
      }function c(e, t, a, n, r) {
        return function () {
          m(e, t, a, n, r);
        };
      }function m(t, a, n, r, o) {
        try {
          t.startDoc && 0 == n && t.startDoc(o);for (var i, l, s, m = n, u = a.length; u > m;) {
            var f = a[m++],
                g = a[m];switch (f) {case "&":
                O.test(g) ? (t.pcdata && t.pcdata("&" + g, o, Y, c(t, a, m, r, o)), m++) : t.pcdata && t.pcdata("&amp;", o, Y, c(t, a, m, r, o));break;case "</":
                (i = /^([-\w:]+)[^\'\"]*/.exec(g)) ? i[0].length === g.length && ">" === a[m + 1] ? (m += 2, s = i[1].toLowerCase(), t.endTag && t.endTag(s, o, Y, c(t, a, m, r, o))) : m = h(a, m, t, o, Y, r) : t.pcdata && t.pcdata("&lt;/", o, Y, c(t, a, m, r, o));break;case "<":
                if (i = /^([-\w:]+)\s*\/?/.exec(g)) {
                  if (i[0].length === g.length && ">" === a[m + 1]) {
                    m += 2, s = i[1].toLowerCase(), t.startTag && t.startTag(s, [], o, Y, c(t, a, m, r, o));var E = e.ELEMENTS[s];if (E & j) {
                      var T = { name: s, next: m, eflags: E };m = d(a, T, t, o, Y, r);
                    }
                  } else m = p(a, m, t, o, Y, r);
                } else t.pcdata && t.pcdata("&lt;", o, Y, c(t, a, m, r, o));break;case "<!--":
                if (!r.noMoreEndComments) {
                  for (l = m + 1; u > l && (">" !== a[l] || !/--$/.test(a[l - 1])); l++) {}if (u > l) {
                    if (t.comment) {
                      var L = a.slice(m, l).join("");t.comment(L.substr(0, L.length - 2), o, Y, c(t, a, l + 1, r, o));
                    }m = l + 1;
                  } else r.noMoreEndComments = !0;
                }r.noMoreEndComments && t.pcdata && t.pcdata("&lt;!--", o, Y, c(t, a, m, r, o));break;case "<!":
                if (/^\w/.test(g)) {
                  if (!r.noMoreGT) {
                    for (l = m + 1; u > l && ">" !== a[l]; l++) {}u > l ? m = l + 1 : r.noMoreGT = !0;
                  }r.noMoreGT && t.pcdata && t.pcdata("&lt;!", o, Y, c(t, a, m, r, o));
                } else t.pcdata && t.pcdata("&lt;!", o, Y, c(t, a, m, r, o));break;case "<?":
                if (!r.noMoreGT) {
                  for (l = m + 1; u > l && ">" !== a[l]; l++) {}u > l ? m = l + 1 : r.noMoreGT = !0;
                }r.noMoreGT && t.pcdata && t.pcdata("&lt;?", o, Y, c(t, a, m, r, o));break;case ">":
                t.pcdata && t.pcdata("&gt;", o, Y, c(t, a, m, r, o));break;case "":
                break;default:
                t.pcdata && t.pcdata(f, o, Y, c(t, a, m, r, o));}
          }t.endDoc && t.endDoc(o);
        } catch (M) {
          if (M !== Y) throw M;
        }
      }function u(e) {
        var t = /(<\/|<\!--|<[!?]|[&<>])/g;if (e += "", $) return e.split(t);for (var a, n = [], r = 0; null !== (a = t.exec(e));) {
          n.push(e.substring(r, a.index)), n.push(a[0]), r = a.index + a[0].length;
        }return n.push(e.substring(r)), n;
      }function h(e, t, a, n, r, o) {
        var i = f(e, t);return i ? (a.endTag && a.endTag(i.name, n, r, c(a, e, t, o, n)), i.next) : e.length;
      }function p(e, t, a, n, r, o) {
        var i = f(e, t);return i ? (a.startTag && a.startTag(i.name, i.attrs, n, r, c(a, e, i.next, o, n)), i.eflags & j ? d(e, i, a, n, r, o) : i.next) : e.length;
      }function d(t, a, n, r, o, l) {
        var s = t.length;Q.hasOwnProperty(a.name) || (Q[a.name] = new RegExp("^" + a.name + "(?:[\\s\\/]|$)", "i"));for (var m = Q[a.name], u = a.next, h = a.next + 1; s > h && ("</" !== t[h - 1] || !m.test(t[h])); h++) {}s > h && (h -= 1);var p = t.slice(u, h).join("");if (a.eflags & e.eflags.CDATA) n.cdata && n.cdata(p, r, o, c(n, t, h, l, r));else {
          if (!(a.eflags & e.eflags.RCDATA)) throw new Error("bug");n.rcdata && n.rcdata(i(p), r, o, c(n, t, h, l, r));
        }return h;
      }function f(t, a) {
        var n = /^([-\w:]+)/.exec(t[a]),
            r = {};r.name = n[1].toLowerCase(), r.eflags = e.ELEMENTS[r.name];for (var o = t[a].substr(n[0].length), i = a + 1, l = t.length; l > i && ">" !== t[i]; i++) {
          o += t[i];
        }if (i >= l) return void 0;for (var s = []; "" !== o;) {
          if (n = G.exec(o)) {
            if (n[4] && !n[5] || n[6] && !n[7]) {
              for (var c = n[4] || n[6], m = !1, u = [o, t[i++]]; l > i; i++) {
                if (m) {
                  if (">" === t[i]) break;
                } else 0 <= t[i].indexOf(c) && (m = !0);u.push(t[i]);
              }if (i >= l) break;o = u.join("");continue;
            }var h = n[1].toLowerCase(),
                p = n[2] ? g(n[3]) : "";s.push(h, p), o = o.substr(n[0].length);
          } else o = o.replace(/^[\s\S][^a-z\s]*/, "");
        }return r.attrs = s, r.next = i + 1, r;
      }function g(e) {
        var t = e.charCodeAt(0);return (34 === t || 39 === t) && (e = e.substr(1, e.length - 2)), r(n(e));
      }function E(t) {
        var a,
            n,
            r = function r(e, t) {
          n || t.push(e);
        };return l({ startDoc: function startDoc(e) {
            a = [], n = !1;
          }, startTag: function startTag(r, i, l) {
            if (!n && e.ELEMENTS.hasOwnProperty(r)) {
              var s = e.ELEMENTS[r];if (!(s & e.eflags.FOLDABLE)) {
                var c = t(r, i);if (!c) return void (n = !(s & e.eflags.EMPTY));if ("object" != (typeof c === "undefined" ? "undefined" : _typeof(c))) throw new Error("tagPolicy did not return object (old API?)");if (!("attribs" in c)) throw new Error("tagPolicy gave no attribs");i = c.attribs;var m, u;if ("tagName" in c ? (u = c.tagName, m = e.ELEMENTS[u]) : (u = r, m = s), s & e.eflags.OPTIONAL_ENDTAG) {
                  var h = a[a.length - 1];!h || h.orig !== r || h.rep === u && r === u || l.push("</", h.rep, ">");
                }s & e.eflags.EMPTY || a.push({ orig: r, rep: u }), l.push("<", u);for (var p = 0, d = i.length; d > p; p += 2) {
                  var f = i[p],
                      g = i[p + 1];null !== g && void 0 !== g && l.push(" ", f, '="', o(g), '"');
                }l.push(">"), s & e.eflags.EMPTY && !(m & e.eflags.EMPTY) && l.push("</", u, ">");
              }
            }
          }, endTag: function endTag(t, r) {
            if (n) return void (n = !1);if (e.ELEMENTS.hasOwnProperty(t)) {
              var o = e.ELEMENTS[t];if (!(o & (e.eflags.EMPTY | e.eflags.FOLDABLE))) {
                var i;if (o & e.eflags.OPTIONAL_ENDTAG) for (i = a.length; --i >= 0;) {
                  var l = a[i].orig;if (l === t) break;if (!(e.ELEMENTS[l] & e.eflags.OPTIONAL_ENDTAG)) return;
                } else for (i = a.length; --i >= 0 && a[i].orig !== t;) {}if (0 > i) return;for (var s = a.length; --s > i;) {
                  var c = a[s].rep;e.ELEMENTS[c] & e.eflags.OPTIONAL_ENDTAG || r.push("</", c, ">");
                }i < a.length && (t = a[i].rep), a.length = i, r.push("</", t, ">");
              }
            }
          }, pcdata: r, rcdata: r, cdata: r, endDoc: function endDoc(e) {
            for (; a.length; a.length--) {
              e.push("</", a[a.length - 1].rep, ">");
            }
          } });
      }function T(e, t, a, n, r) {
        if (!r) return null;try {
          var o = URI.parse("" + e);if (o && (!o.hasScheme() || V.test(o.getScheme()))) {
            var i = r(o, t, a, n);return i ? i.toString() : null;
          }
        } catch (l) {
          return null;
        }return null;
      }function L(e, t, a, n, r) {
        if (a || e(t + " removed", { change: "removed", tagName: t }), n !== r) {
          var o = "changed";n && !r ? o = "removed" : !n && r && (o = "added"), e(t + "." + a + " " + o, { change: o, tagName: t, attribName: a, oldValue: n, newValue: r });
        }
      }function M(e, t, a) {
        var n;return n = t + "::" + a, e.hasOwnProperty(n) ? e[n] : (n = "*::" + a, e.hasOwnProperty(n) ? e[n] : void 0);
      }function b(t, a) {
        return M(e.LOADERTYPES, t, a);
      }function y(t, a) {
        return M(e.URIEFFECTS, t, a);
      }function v(t, a, n, r, o) {
        for (var i = 0; i < a.length; i += 2) {
          var l,
              s = a[i],
              c = a[i + 1],
              m = c,
              u = null;if (l = t + "::" + s, (e.ATTRIBS.hasOwnProperty(l) || (l = "*::" + s, e.ATTRIBS.hasOwnProperty(l))) && (u = e.ATTRIBS[l]), null !== u) switch (u) {case e.atype.NONE:
              break;case e.atype.SCRIPT:
              c = null, o && L(o, t, s, m, c);break;case e.atype.STYLE:
              if ("undefined" == typeof A) {
                c = null, o && L(o, t, s, m, c);break;
              }var h = [];A(c, { declaration: function declaration(t, a) {
                  var r = t.toLowerCase(),
                      o = C[r];o && (R(r, o, a, n ? function (t) {
                    return T(t, e.ueffects.SAME_DOCUMENT, e.ltypes.SANDBOXED, { TYPE: "CSS", CSS_PROP: r }, n);
                  } : null), h.push(t + ": " + a.join(" ")));
                } }), c = h.length > 0 ? h.join(" ; ") : null, o && L(o, t, s, m, c);break;case e.atype.ID:case e.atype.IDREF:case e.atype.IDREFS:case e.atype.GLOBAL_NAME:case e.atype.LOCAL_NAME:case e.atype.CLASSES:
              c = r ? r(c) : c, o && L(o, t, s, m, c);break;case e.atype.URI:
              c = T(c, y(t, s), b(t, s), { TYPE: "MARKUP", XML_ATTR: s, XML_TAG: t }, n), o && L(o, t, s, m, c);break;case e.atype.URI_FRAGMENT:
              c && "#" === c.charAt(0) ? (c = c.substring(1), c = r ? r(c) : c, null !== c && void 0 !== c && (c = "#" + c)) : c = null, o && L(o, t, s, m, c);break;default:
              c = null, o && L(o, t, s, m, c);} else c = null, o && L(o, t, s, m, c);a[i + 1] = c;
        }return a;
      }function H(t, a, n) {
        return function (r, o) {
          return e.ELEMENTS[r] & e.eflags.UNSAFE ? void (n && L(n, r, void 0, void 0, void 0)) : { attribs: v(r, o, t, a, n) };
        };
      }function _(e, t) {
        var a = [];return E(t)(e, a), a.join("");
      }function w(e, t, a, n) {
        var r = H(t, a, n);return _(e, r);
      }var A, R, C;"undefined" != typeof window && (A = window.parseCssDeclarations, R = window.sanitizeCssProperty, C = window.cssSchema);var S = { lt: "<", LT: "<", gt: ">", GT: ">", amp: "&", AMP: "&", quot: '"', apos: "'", nbsp: " " },
          P = /^#(\d+)$/,
          D = /^#x([0-9A-Fa-f]+)$/,
          k = /^[A-Za-z][A-za-z0-9]+$/,
          I = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null,
          x = /\0/g,
          N = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
          O = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
          F = /&/g,
          U = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
          B = /[<]/g,
          q = />/g,
          z = /\"/g,
          G = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
          $ = 3 === "a,b".split(/(,)/).length,
          j = e.eflags.CDATA | e.eflags.RCDATA,
          Y = {},
          Q = {},
          V = /^(?:https?|mailto|data)$/i,
          X = {};return X.escapeAttrib = X.escapeAttrib = o, X.makeHtmlSanitizer = X.makeHtmlSanitizer = E, X.makeSaxParser = X.makeSaxParser = l, X.makeTagPolicy = X.makeTagPolicy = H, X.normalizeRCData = X.normalizeRCData = i, X.sanitize = X.sanitize = w, X.sanitizeAttribs = X.sanitizeAttribs = v, X.sanitizeWithPolicy = X.sanitizeWithPolicy = _, X.unescapeEntities = X.unescapeEntities = r, X;
    }(html4),
        html_sanitize = html.sanitize;html4.ATTRIBS["*::style"] = 0, html4.ELEMENTS.style = 0, html4.ATTRIBS["a::target"] = 0, html4.ELEMENTS.video = 0, html4.ATTRIBS["video::src"] = 0, html4.ATTRIBS["video::poster"] = 0, html4.ATTRIBS["video::controls"] = 0, html4.ELEMENTS.audio = 0, html4.ATTRIBS["audio::src"] = 0, html4.ATTRIBS["video::autoplay"] = 0, html4.ATTRIBS["video::controls"] = 0, "undefined" != typeof module && (module.exports = html_sanitize);
  }, {}], 7: [function (require, module, exports) {
    module.exports = { "author": "Mapbox", "name": "mapbox.js", "description": "mapbox javascript api", "version": "2.4.0", "homepage": "http://mapbox.com/", "repository": { "type": "git", "url": "git://github.com/mapbox/mapbox.js.git" }, "main": "src/index.js", "dependencies": { "corslite": "0.0.6", "isarray": "0.0.1", "leaflet": "0.7.7", "mustache": "2.2.1", "sanitize-caja": "0.1.3" }, "scripts": { "test": "eslint --no-eslintrc -c .eslintrc src && mocha-phantomjs test/index.html" }, "license": "BSD-3-Clause", "devDependencies": { "browserify": "^13.0.0", "clean-css": "~2.0.7", "eslint": "^0.23.0", "expect.js": "0.3.1", "happen": "0.1.3", "leaflet-fullscreen": "0.0.4", "leaflet-hash": "0.2.1", "marked": "~0.3.0", "minifyify": "^6.1.0", "minimist": "0.0.5", "mocha": "2.4.5", "mocha-phantomjs": "4.0.2", "sinon": "1.10.2" }, "optionalDependencies": {}, "engines": { "node": "*" } };
  }, {}], 8: [function (require, module, exports) {
    "use strict";
    module.exports = { HTTP_URL: "http://a.tiles.mapbox.com/v4", HTTPS_URL: "https://a.tiles.mapbox.com/v4", FORCE_HTTPS: !1, REQUIRE_ACCESS_TOKEN: !0 };
  }, {}], 9: [function (require, module, exports) {
    "use strict";
    var util = require("./util"),
        format_url = require("./format_url"),
        request = require("./request"),
        marker = require("./marker"),
        simplestyle = require("./simplestyle"),
        FeatureLayer = L.FeatureGroup.extend({ options: { filter: function filter() {
          return !0;
        }, sanitizer: require("sanitize-caja"), style: simplestyle.style, popupOptions: { closeButton: !1 } }, initialize: function initialize(e, t) {
        L.setOptions(this, t), this._layers = {}, "string" == typeof e ? util.idUrl(e, this) : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && this.setGeoJSON(e);
      }, setGeoJSON: function setGeoJSON(e) {
        return this._geojson = e, this.clearLayers(), this._initialize(e), this;
      }, getGeoJSON: function getGeoJSON() {
        return this._geojson;
      }, loadURL: function loadURL(e) {
        return this._request && "abort" in this._request && this._request.abort(), this._request = request(e, L.bind(function (t, i) {
          this._request = null, t && "abort" !== t.type ? (util.log("could not load features at " + e), this.fire("error", { error: t })) : i && (this.setGeoJSON(i), this.fire("ready"));
        }, this)), this;
      }, loadID: function loadID(e) {
        return this.loadURL(format_url("/v4/" + e + "/features.json", this.options.accessToken));
      }, setFilter: function setFilter(e) {
        return this.options.filter = e, this._geojson && (this.clearLayers(), this._initialize(this._geojson)), this;
      }, getFilter: function getFilter() {
        return this.options.filter;
      }, _initialize: function _initialize(e) {
        var t,
            i,
            r = L.Util.isArray(e) ? e : e.features;if (r) for (t = 0, i = r.length; i > t; t++) {
          (r[t].geometries || r[t].geometry || r[t].features) && this._initialize(r[t]);
        } else if (this.options.filter(e)) {
          var s = { accessToken: this.options.accessToken },
              o = this.options.pointToLayer || function (e, t) {
            return marker.style(e, t, s);
          },
              n = L.GeoJSON.geometryToLayer(e, o),
              u = marker.createPopup(e, this.options.sanitizer),
              a = this.options.style,
              l = a === simplestyle.style;!(a && "setStyle" in n) || l && (n instanceof L.Circle || n instanceof L.CircleMarker) || ("function" == typeof a && (a = a(e)), n.setStyle(a)), n.feature = e, u && n.bindPopup(u, this.options.popupOptions), this.addLayer(n);
        }
      } });module.exports.FeatureLayer = FeatureLayer, module.exports.featureLayer = function (e, t) {
      return new FeatureLayer(e, t);
    };
  }, { "./format_url": 11, "./marker": 25, "./request": 26, "./simplestyle": 28, "./util": 31, "sanitize-caja": 5 }], 10: [function (require, module, exports) {
    "use strict";
    var Feedback = L.Class.extend({ includes: L.Mixin.Events, data: {}, record: function record(e) {
        L.extend(this.data, e), this.fire("change");
      } });module.exports = new Feedback();
  }, {}], 11: [function (require, module, exports) {
    "use strict";
    var config = require("./config"),
        version = require("../package.json").version;module.exports = function (e, o) {
      if (o = o || L.mapbox.accessToken, !o && config.REQUIRE_ACCESS_TOKEN) throw new Error("An API access token is required to use Mapbox.js. See https://www.mapbox.com/mapbox.js/api/v" + version + "/api-access-tokens/");var t = "https:" === document.location.protocol || config.FORCE_HTTPS ? config.HTTPS_URL : config.HTTP_URL;if (t = t.replace(/\/v4$/, ""), t += e, config.REQUIRE_ACCESS_TOKEN) {
        if ("s" === o[0]) throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v" + version + "/api-access-tokens/");t += -1 !== t.indexOf("?") ? "&access_token=" : "?access_token=", t += o;
      }return t;
    }, module.exports.tileJSON = function (e, o) {
      if (0 === e.indexOf("mapbox://styles")) throw new Error("Styles created with Mapbox Studio need to be used with L.mapbox.styleLayer, not L.mapbox.tileLayer");if (-1 !== e.indexOf("/")) return e;var t = module.exports("/v4/" + e + ".json", o);return 0 === t.indexOf("https") && (t += "&secure"), t;
    }, module.exports.style = function (e, o) {
      if (-1 === e.indexOf("mapbox://styles/")) throw new Error("Incorrectly formatted Mapbox style at " + e);var t = e.split("mapbox://styles/")[1],
          s = module.exports("/styles/v1/" + t, o).replace("http://", "https://");return s;
    };
  }, { "../package.json": 7, "./config": 8 }], 12: [function (require, module, exports) {
    "use strict";
    var isArray = require("isarray"),
        util = require("./util"),
        format_url = require("./format_url"),
        feedback = require("./feedback"),
        request = require("./request");module.exports = function (e, t) {
      function r(e, t) {
        var r = Math.pow(10, t);return e.lat = Math.round(e.lat * r) / r, e.lng = Math.round(e.lng * r) / r, e;
      }t || (t = {});var n = {};return util.strict(e, "string"), -1 === e.indexOf("/") && (e = format_url("/geocoding/v5/" + e + "/{query}.json", t.accessToken, 5)), n.getURL = function () {
        return e;
      }, n.queryURL = function (e) {
        var t = !(isArray(e) || "string" == typeof e),
            u = t ? e.query : e;if (isArray(u)) {
          for (var o = [], i = 0; i < u.length; i++) {
            o[i] = encodeURIComponent(u[i]);
          }u = o.join(";");
        } else u = encodeURIComponent(u);feedback.record({ geocoding: u });var a = L.Util.template(n.getURL(), { query: u });if (t) {
          if (e.types && (a += isArray(e.types) ? "&types=" + e.types.join() : "&types=" + e.types), e.country && (a += isArray(e.country) ? "&country=" + e.country.join() : "&country=" + e.country), e.proximity) {
            var l = r(L.latLng(e.proximity), 3);a += "&proximity=" + l.lng + "," + l.lat;
          }"boolean" == typeof e.autocomplete && (a += "&autocomplete=" + e.autocomplete);
        }return a;
      }, n.query = function (e, t) {
        return util.strict(t, "function"), request(n.queryURL(e), function (e, r) {
          if (r && (r.length || r.features)) {
            var n = { results: r };r.features && r.features.length && (n.latlng = [r.features[0].center[1], r.features[0].center[0]], r.features[0].bbox && (n.bounds = r.features[0].bbox, n.lbounds = util.lbounds(n.bounds))), t(null, n);
          } else t(e || !0);
        }), n;
      }, n.reverseQuery = function (e, t) {
        function u(e) {
          var t;return t = void 0 !== e.lat && void 0 !== e.lng ? L.latLng(e.lat, e.lng) : void 0 !== e.lat && void 0 !== e.lon ? L.latLng(e.lat, e.lon) : L.latLng(e[1], e[0]), t = r(t, 5), t.lng + "," + t.lat;
        }var o = "";if (e.length && e[0].length) {
          for (var i = 0, a = []; i < e.length; i++) {
            a.push(u(e[i]));
          }o = a.join(";");
        } else o = u(e);return request(n.queryURL(o), function (e, r) {
          t(e, r);
        }), n;
      }, n;
    };
  }, { "./feedback": 10, "./format_url": 11, "./request": 26, "./util": 31, "isarray": 2 }], 13: [function (require, module, exports) {
    "use strict";
    var geocoder = require("./geocoder"),
        util = require("./util"),
        GeocoderControl = L.Control.extend({ includes: L.Mixin.Events, options: { proximity: !0, position: "topleft", pointZoom: 16, keepOpen: !1, autocomplete: !1, queryOptions: {} }, initialize: function initialize(t, e) {
        L.Util.setOptions(this, e), this.setURL(t), this._updateSubmit = L.bind(this._updateSubmit, this), this._updateAutocomplete = L.bind(this._updateAutocomplete, this), this._chooseResult = L.bind(this._chooseResult, this);
      }, setURL: function setURL(t) {
        return this.geocoder = geocoder(t, { accessToken: this.options.accessToken }), this;
      }, getURL: function getURL() {
        return this.geocoder.getURL();
      }, setID: function setID(t) {
        return this.setURL(t);
      }, setTileJSON: function setTileJSON(t) {
        return this.setURL(t.geocoder);
      }, _toggle: function _toggle(t) {
        t && L.DomEvent.stop(t), L.DomUtil.hasClass(this._container, "active") ? (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur()) : (L.DomUtil.addClass(this._container, "active"), this._input.focus(), this._input.select());
      }, _closeIfOpen: function _closeIfOpen() {
        L.DomUtil.hasClass(this._container, "active") && !this.options.keepOpen && (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur());
      }, onAdd: function onAdd(t) {
        var e = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),
            i = L.DomUtil.create("a", "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder", e),
            o = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-results", e),
            s = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-wrap", e),
            n = L.DomUtil.create("form", "leaflet-control-mapbox-geocoder-form", s),
            r = L.DomUtil.create("input", "", n);return i.href = "#", i.innerHTML = "&nbsp;", r.type = "text", r.setAttribute("placeholder", "Search"), L.DomEvent.addListener(n, "submit", this._geocode, this), L.DomEvent.addListener(r, "keyup", this._autocomplete, this), L.DomEvent.disableClickPropagation(e), this._map = t, this._results = o, this._input = r, this._form = n, this.options.keepOpen ? L.DomUtil.addClass(e, "active") : (this._map.on("click", this._closeIfOpen, this), L.DomEvent.addListener(i, "click", this._toggle, this)), e;
      }, _updateSubmit: function _updateSubmit(t, e) {
        if (L.DomUtil.removeClass(this._container, "searching"), this._results.innerHTML = "", t || !e) this.fire("error", { error: t });else {
          var i = [];e.results && e.results.features && (i = e.results.features), 1 === i.length ? (this.fire("autoselect", { feature: i[0] }), this.fire("found", { results: e.results }), this._chooseResult(i[0]), this._closeIfOpen()) : i.length > 1 ? (this.fire("found", { results: e.results }), this._displayResults(i)) : (this.fire("notfound"), this._displayResults(i));
        }
      }, _updateAutocomplete: function _updateAutocomplete(t, e) {
        if (this._results.innerHTML = "", t || !e) this.fire("error", { error: t });else {
          var i = [];e.results && e.results.features && (i = e.results.features), i.length ? this.fire("found", { results: e.results }) : this.fire("notfound"), this._displayResults(i);
        }
      }, _displayResults: function _displayResults(t) {
        for (var e = 0, i = Math.min(t.length, 5); i > e; e++) {
          var o = t[e],
              s = o.place_name;if (s.length) {
            var n = L.DomUtil.create("a", "", this._results),
                r = "innerText" in n ? "innerText" : "textContent";n[r] = s, n.setAttribute("title", s), n.href = "#", L.bind(function (t) {
              L.DomEvent.addListener(n, "click", function (e) {
                this._chooseResult(t), L.DomEvent.stop(e), this.fire("select", { feature: t });
              }, this);
            }, this)(o);
          }
        }if (t.length > 5) {
          var l = L.DomUtil.create("span", "", this._results);l.innerHTML = "Top 5 of " + t.length + "  results";
        }
      }, _chooseResult: function _chooseResult(t) {
        t.bbox ? this._map.fitBounds(util.lbounds(t.bbox)) : t.center && this._map.setView([t.center[1], t.center[0]], void 0 === this._map.getZoom() ? this.options.pointZoom : Math.max(this._map.getZoom(), this.options.pointZoom));
      }, _geocode: function _geocode(t) {
        return L.DomEvent.preventDefault(t), "" === this._input.value ? this._updateSubmit() : (L.DomUtil.addClass(this._container, "searching"), void this.geocoder.query(L.Util.extend({ query: this._input.value, proximity: this.options.proximity ? this._map.getCenter() : !1 }, this.options.queryOptions), this._updateSubmit));
      }, _autocomplete: function _autocomplete() {
        return this.options.autocomplete ? "" === this._input.value ? this._updateAutocomplete() : void this.geocoder.query(L.Util.extend({ query: this._input.value, proximity: this.options.proximity ? this._map.getCenter() : !1 }, this.options.queryOptions), this._updateAutocomplete) : void 0;
      } });module.exports.GeocoderControl = GeocoderControl, module.exports.geocoderControl = function (t, e) {
      return new GeocoderControl(t, e);
    };
  }, { "./geocoder": 12, "./util": 31 }], 14: [function (require, module, exports) {
    "use strict";
    function utfDecode(t) {
      return t >= 93 && t--, t >= 35 && t--, t - 32;
    }module.exports = function (t) {
      return function (e, r) {
        if (t) {
          var u = utfDecode(t.grid[r].charCodeAt(e)),
              n = t.keys[u];return t.data[n];
        }
      };
    };
  }, {}], 15: [function (require, module, exports) {
    "use strict";
    var util = require("./util"),
        Mustache = require("mustache"),
        GridControl = L.Control.extend({ options: { pinnable: !0, follow: !1, sanitizer: require("sanitize-caja"), touchTeaser: !0, location: !0 }, _currentContent: "", _pinned: !1, initialize: function initialize(t, o) {
        L.Util.setOptions(this, o), util.strict_instance(t, L.Class, "L.mapbox.gridLayer"), this._layer = t;
      }, setTemplate: function setTemplate(t) {
        return util.strict(t, "string"), this.options.template = t, this;
      }, _template: function _template(t, o) {
        if (o) {
          var i = this.options.template || this._layer.getTileJSON().template;if (i) {
            var e = {};return e["__" + t + "__"] = !0, this.options.sanitizer(Mustache.to_html(i, L.extend(e, o)));
          }
        }
      }, _show: function _show(t, o) {
        t !== this._currentContent && (this._currentContent = t, this.options.follow ? (this._popup.setContent(t).setLatLng(o.latLng), this._map._popup !== this._popup && this._popup.openOn(this._map)) : (this._container.style.display = "block", this._contentWrapper.innerHTML = t));
      }, hide: function hide() {
        return this._pinned = !1, this._currentContent = "", this._map.closePopup(), this._container.style.display = "none", this._contentWrapper.innerHTML = "", L.DomUtil.removeClass(this._container, "closable"), this;
      }, _mouseover: function _mouseover(t) {
        if (t.data ? L.DomUtil.addClass(this._map._container, "map-clickable") : L.DomUtil.removeClass(this._map._container, "map-clickable"), !this._pinned) {
          var o = this._template("teaser", t.data);o ? this._show(o, t) : this.hide();
        }
      }, _mousemove: function _mousemove(t) {
        this._pinned || this.options.follow && this._popup.setLatLng(t.latLng);
      }, _navigateTo: function _navigateTo(t) {
        window.top.location.href = t;
      }, _click: function _click(t) {
        var o = this._template("location", t.data);if (this.options.location && o && 0 === o.search(/^https?:/)) return this._navigateTo(this._template("location", t.data));if (this.options.pinnable) {
          var i = this._template("full", t.data);!i && this.options.touchTeaser && L.Browser.touch && (i = this._template("teaser", t.data)), i ? (L.DomUtil.addClass(this._container, "closable"), this._pinned = !0, this._show(i, t)) : this._pinned && (L.DomUtil.removeClass(this._container, "closable"), this._pinned = !1, this.hide());
        }
      }, _onPopupClose: function _onPopupClose() {
        this._currentContent = null, this._pinned = !1;
      }, _createClosebutton: function _createClosebutton(t, o) {
        var i = L.DomUtil.create("a", "close", t);return i.innerHTML = "close", i.href = "#", i.title = "close", L.DomEvent.on(i, "click", L.DomEvent.stopPropagation).on(i, "mousedown", L.DomEvent.stopPropagation).on(i, "dblclick", L.DomEvent.stopPropagation).on(i, "click", L.DomEvent.preventDefault).on(i, "click", o, this), i;
      }, onAdd: function onAdd(t) {
        this._map = t;var o = "leaflet-control-grid map-tooltip",
            i = L.DomUtil.create("div", o),
            e = L.DomUtil.create("div", "map-tooltip-content");return i.style.display = "none", this._createClosebutton(i, this.hide), i.appendChild(e), this._contentWrapper = e, this._popup = new L.Popup({ autoPan: !1, closeOnClick: !1 }), t.on("popupclose", this._onPopupClose, this), L.DomEvent.disableClickPropagation(i).addListener(i, "mousewheel", L.DomEvent.stopPropagation), this._layer.on("mouseover", this._mouseover, this).on("mousemove", this._mousemove, this).on("click", this._click, this), i;
      }, onRemove: function onRemove(t) {
        t.off("popupclose", this._onPopupClose, this), this._layer.off("mouseover", this._mouseover, this).off("mousemove", this._mousemove, this).off("click", this._click, this);
      } });module.exports.GridControl = GridControl, module.exports.gridControl = function (t, o) {
      return new GridControl(t, o);
    };
  }, { "./util": 31, "mustache": 4, "sanitize-caja": 5 }], 16: [function (require, module, exports) {
    "use strict";
    var util = require("./util"),
        request = require("./request"),
        grid = require("./grid"),
        GridLayer = L.Class.extend({ includes: [L.Mixin.Events, require("./load_tilejson")], options: { template: function template() {
          return "";
        } }, _mouseOn: null, _tilejson: {}, _cache: {}, initialize: function initialize(t, i) {
        L.Util.setOptions(this, i), this._loadTileJSON(t);
      }, _setTileJSON: function _setTileJSON(t) {
        return util.strict(t, "object"), L.extend(this.options, { grids: t.grids, minZoom: t.minzoom, maxZoom: t.maxzoom, bounds: t.bounds && util.lbounds(t.bounds) }), this._tilejson = t, this._cache = {}, this._update(), this;
      }, getTileJSON: function getTileJSON() {
        return this._tilejson;
      }, active: function active() {
        return !!(this._map && this.options.grids && this.options.grids.length);
      }, addTo: function addTo(t) {
        return t.addLayer(this), this;
      }, onAdd: function onAdd(t) {
        this._map = t, this._update(), this._map.on("click", this._click, this).on("mousemove", this._move, this).on("moveend", this._update, this);
      }, onRemove: function onRemove() {
        this._map.off("click", this._click, this).off("mousemove", this._move, this).off("moveend", this._update, this);
      }, getData: function getData(t, i) {
        if (this.active()) {
          var e = this._map,
              o = e.project(t.wrap()),
              s = 256,
              n = 4,
              a = Math.floor(o.x / s),
              h = Math.floor(o.y / s),
              r = e.options.crs.scale(e.getZoom()) / s;return a = (a + r) % r, h = (h + r) % r, this._getTile(e.getZoom(), a, h, function (t) {
            var e = Math.floor((o.x - a * s) / n),
                r = Math.floor((o.y - h * s) / n);i(t(e, r));
          }), this;
        }
      }, _click: function _click(t) {
        this.getData(t.latlng, L.bind(function (i) {
          this.fire("click", { latLng: t.latlng, data: i });
        }, this));
      }, _move: function _move(t) {
        this.getData(t.latlng, L.bind(function (i) {
          i !== this._mouseOn ? (this._mouseOn && this.fire("mouseout", { latLng: t.latlng, data: this._mouseOn }), this.fire("mouseover", { latLng: t.latlng, data: i }), this._mouseOn = i) : this.fire("mousemove", { latLng: t.latlng, data: i });
        }, this));
      }, _getTileURL: function _getTileURL(t) {
        var i = this.options.grids,
            e = (t.x + t.y) % i.length,
            o = i[e];return L.Util.template(o, t);
      }, _update: function _update() {
        if (this.active()) {
          var t = this._map.getPixelBounds(),
              i = this._map.getZoom(),
              e = 256;if (!(i > this.options.maxZoom || i < this.options.minZoom)) for (var o = L.bounds(t.min.divideBy(e)._floor(), t.max.divideBy(e)._floor()), s = this._map.options.crs.scale(i) / e, n = o.min.x; n <= o.max.x; n++) {
            for (var a = o.min.y; a <= o.max.y; a++) {
              this._getTile(i, (n % s + s) % s, (a % s + s) % s);
            }
          }
        }
      }, _getTile: function _getTile(t, i, e, o) {
        var s = t + "_" + i + "_" + e,
            n = L.point(i, e);if (n.z = t, this._tileShouldBeLoaded(n)) {
          if (s in this._cache) {
            if (!o) return;return void ("function" == typeof this._cache[s] ? o(this._cache[s]) : this._cache[s].push(o));
          }this._cache[s] = [], o && this._cache[s].push(o), request(this._getTileURL(n), L.bind(function (t, i) {
            var e = this._cache[s];this._cache[s] = grid(i);for (var o = 0; o < e.length; ++o) {
              e[o](this._cache[s]);
            }
          }, this));
        }
      }, _tileShouldBeLoaded: function _tileShouldBeLoaded(t) {
        if (t.z > this.options.maxZoom || t.z < this.options.minZoom) return !1;if (this.options.bounds) {
          var i = 256,
              e = t.multiplyBy(i),
              o = e.add(new L.Point(i, i)),
              s = this._map.unproject(e),
              n = this._map.unproject(o),
              a = new L.LatLngBounds([s, n]);if (!this.options.bounds.intersects(a)) return !1;
        }return !0;
      } });module.exports.GridLayer = GridLayer, module.exports.gridLayer = function (t, i) {
      return new GridLayer(t, i);
    };
  }, { "./grid": 14, "./load_tilejson": 21, "./request": 26, "./util": 31 }], 17: [function (require, module, exports) {
    "use strict";
    var leaflet = require("./leaflet");require("./mapbox"), module.exports = leaflet;
  }, { "./leaflet": 19, "./mapbox": 23 }], 18: [function (require, module, exports) {
    "use strict";
    var InfoControl = L.Control.extend({ options: { position: "bottomright", sanitizer: require("sanitize-caja") }, initialize: function initialize(t) {
        L.setOptions(this, t), this._info = {}, console.warn("infoControl has been deprecated and will be removed in mapbox.js v3.0.0. Use the default attribution control instead, which is now responsive.");
      }, onAdd: function onAdd(t) {
        this._container = L.DomUtil.create("div", "mapbox-control-info mapbox-small"), this._content = L.DomUtil.create("div", "map-info-container", this._container);var i = L.DomUtil.create("a", "mapbox-info-toggle mapbox-icon mapbox-icon-info", this._container);i.href = "#", L.DomEvent.addListener(i, "click", this._showInfo, this), L.DomEvent.disableClickPropagation(this._container);for (var n in t._layers) {
          t._layers[n].getAttribution && this.addInfo(t._layers[n].getAttribution());
        }return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container;
      }, onRemove: function onRemove(t) {
        t.off("layeradd", this._onLayerAdd, this).off("layerremove", this._onLayerRemove, this);
      }, addInfo: function addInfo(t) {
        return t ? (this._info[t] || (this._info[t] = 0), this._info[t] = !0, this._update()) : this;
      }, removeInfo: function removeInfo(t) {
        return t ? (this._info[t] && (this._info[t] = !1), this._update()) : this;
      }, _showInfo: function _showInfo(t) {
        return L.DomEvent.preventDefault(t), this._active === !0 ? this._hidecontent() : (L.DomUtil.addClass(this._container, "active"), this._active = !0, void this._update());
      }, _hidecontent: function _hidecontent() {
        this._content.innerHTML = "", this._active = !1, L.DomUtil.removeClass(this._container, "active");
      }, _update: function _update() {
        if (!this._map) return this;this._content.innerHTML = "";var t = "none",
            i = [];for (var n in this._info) {
          this._info.hasOwnProperty(n) && this._info[n] && (i.push(this.options.sanitizer(n)), t = "block");
        }return this._content.innerHTML += i.join(" | "), this._container.style.display = t, this;
      }, _onLayerAdd: function _onLayerAdd(t) {
        t.layer.getAttribution && t.layer.getAttribution() ? this.addInfo(t.layer.getAttribution()) : "on" in t.layer && t.layer.getAttribution && t.layer.on("ready", L.bind(function () {
          this.addInfo(t.layer.getAttribution());
        }, this));
      }, _onLayerRemove: function _onLayerRemove(t) {
        t.layer.getAttribution && this.removeInfo(t.layer.getAttribution());
      } });module.exports.InfoControl = InfoControl, module.exports.infoControl = function (t) {
      return new InfoControl(t);
    };
  }, { "sanitize-caja": 5 }], 19: [function (require, module, exports) {
    module.exports = window.L = require("leaflet/dist/leaflet-src");
  }, { "leaflet/dist/leaflet-src": 3 }], 20: [function (require, module, exports) {
    "use strict";
    var LegendControl = L.Control.extend({ options: { position: "bottomright", sanitizer: require("sanitize-caja") }, initialize: function initialize(e) {
        L.setOptions(this, e), this._legends = {};
      }, onAdd: function onAdd() {
        return this._container = L.DomUtil.create("div", "map-legends wax-legends"), L.DomEvent.disableClickPropagation(this._container), this._update(), this._container;
      }, addLegend: function addLegend(e) {
        return e ? (this._legends[e] || (this._legends[e] = 0), this._legends[e]++, this._update()) : this;
      }, removeLegend: function removeLegend(e) {
        return e ? (this._legends[e] && this._legends[e]--, this._update()) : this;
      }, _update: function _update() {
        if (!this._map) return this;this._container.innerHTML = "";var e = "none";for (var t in this._legends) {
          if (this._legends.hasOwnProperty(t) && this._legends[t]) {
            var n = L.DomUtil.create("div", "map-legend wax-legend", this._container);n.innerHTML = this.options.sanitizer(t), e = "block";
          }
        }return this._container.style.display = e, this;
      } });module.exports.LegendControl = LegendControl, module.exports.legendControl = function (e) {
      return new LegendControl(e);
    };
  }, { "sanitize-caja": 5 }], 21: [function (require, module, exports) {
    "use strict";
    var request = require("./request"),
        format_url = require("./format_url"),
        util = require("./util");module.exports = { _loadTileJSON: function _loadTileJSON(e) {
        "string" == typeof e ? (e = format_url.tileJSON(e, this.options && this.options.accessToken), request(e, L.bind(function (t, r) {
          t ? (util.log("could not load TileJSON at " + e), this.fire("error", { error: t })) : r && (this._setTileJSON(r), this.fire("ready"));
        }, this))) : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && this._setTileJSON(e);
      } };
  }, { "./format_url": 11, "./request": 26, "./util": 31 }], 22: [function (require, module, exports) {
    "use strict";
    function withAccessToken(t, o) {
      return !o || t.accessToken ? t : L.extend({ accessToken: o }, t);
    }var tileLayer = require("./tile_layer").tileLayer,
        featureLayer = require("./feature_layer").featureLayer,
        gridLayer = require("./grid_layer").gridLayer,
        gridControl = require("./grid_control").gridControl,
        infoControl = require("./info_control").infoControl,
        shareControl = require("./share_control").shareControl,
        legendControl = require("./legend_control").legendControl,
        mapboxLogoControl = require("./mapbox_logo").mapboxLogoControl,
        feedback = require("./feedback"),
        LMap = L.Map.extend({ includes: [require("./load_tilejson")], options: { tileLayer: {}, featureLayer: {}, gridLayer: {}, legendControl: {}, gridControl: {}, infoControl: !1, shareControl: !1, sanitizer: require("sanitize-caja") }, _tilejson: {}, initialize: function initialize(t, o, e) {
        if (L.Map.prototype.initialize.call(this, t, L.extend({}, L.Map.prototype.options, e)), this.attributionControl) {
          this.attributionControl.setPrefix("");var i = this.options.attributionControl.compact;(i || i !== !1 && this._container.offsetWidth <= 640) && L.DomUtil.addClass(this.attributionControl._container, "leaflet-compact-attribution"), void 0 === i && this.on("resize", function () {
            this._container.offsetWidth > 640 ? L.DomUtil.removeClass(this.attributionControl._container, "leaflet-compact-attribution") : L.DomUtil.addClass(this.attributionControl._container, "leaflet-compact-attribution");
          });
        }this.options.tileLayer && (this.tileLayer = tileLayer(void 0, withAccessToken(this.options.tileLayer, this.options.accessToken)), this.addLayer(this.tileLayer)), this.options.featureLayer && (this.featureLayer = featureLayer(void 0, withAccessToken(this.options.featureLayer, this.options.accessToken)), this.addLayer(this.featureLayer)), this.options.gridLayer && (this.gridLayer = gridLayer(void 0, withAccessToken(this.options.gridLayer, this.options.accessToken)), this.addLayer(this.gridLayer)), this.options.gridLayer && this.options.gridControl && (this.gridControl = gridControl(this.gridLayer, this.options.gridControl), this.addControl(this.gridControl)), this.options.infoControl && (this.infoControl = infoControl(this.options.infoControl), this.addControl(this.infoControl)), this.options.legendControl && (this.legendControl = legendControl(this.options.legendControl), this.addControl(this.legendControl)), this.options.shareControl && (this.shareControl = shareControl(void 0, withAccessToken(this.options.shareControl, this.options.accessToken)), this.addControl(this.shareControl)), this._mapboxLogoControl = mapboxLogoControl(this.options.mapboxLogoControl), this.addControl(this._mapboxLogoControl), this._loadTileJSON(o), this.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this).on("moveend", this._updateMapFeedbackLink, this), this.whenReady(function () {
          feedback.on("change", this._updateMapFeedbackLink, this);
        }), this.on("unload", function () {
          feedback.off("change", this._updateMapFeedbackLink, this);
        });
      }, _setTileJSON: function _setTileJSON(t) {
        return this._tilejson = t, this._initialize(t), this;
      }, getTileJSON: function getTileJSON() {
        return this._tilejson;
      }, _initialize: function _initialize(t) {
        if (this.tileLayer && (this.tileLayer._setTileJSON(t), this._updateLayer(this.tileLayer)), this.featureLayer && !this.featureLayer.getGeoJSON() && t.data && t.data[0] && this.featureLayer.loadURL(t.data[0]), this.gridLayer && (this.gridLayer._setTileJSON(t), this._updateLayer(this.gridLayer)), this.infoControl && t.attribution && (this.infoControl.addInfo(this.options.sanitizer(t.attribution)), this._updateMapFeedbackLink()), this.legendControl && t.legend && this.legendControl.addLegend(t.legend), this.shareControl && this.shareControl._setTileJSON(t), this._mapboxLogoControl._setTileJSON(t), !this._loaded && t.center) {
          var o = void 0 !== this.getZoom() ? this.getZoom() : t.center[2],
              e = L.latLng(t.center[1], t.center[0]);this.setView(e, o);
        }
      }, _updateMapFeedbackLink: function _updateMapFeedbackLink() {
        if (this._controlContainer.getElementsByClassName) {
          var t = this._controlContainer.getElementsByClassName("mapbox-improve-map");if (t.length && this._loaded) {
            var o = this.getCenter().wrap(),
                e = this._tilejson || {},
                i = e.id || "",
                n = "#" + i + "/" + o.lng.toFixed(3) + "/" + o.lat.toFixed(3) + "/" + this.getZoom();for (var r in feedback.data) {
              n += "/" + r + "=" + feedback.data[r];
            }for (var a = 0; a < t.length; a++) {
              t[a].hash = n;
            }
          }
        }
      }, _onLayerAdd: function _onLayerAdd(t) {
        "on" in t.layer && t.layer.on("ready", this._onLayerReady, this), window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0);
      }, _onLayerRemove: function _onLayerRemove(t) {
        "on" in t.layer && t.layer.off("ready", this._onLayerReady, this), window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0);
      }, _onLayerReady: function _onLayerReady(t) {
        this._updateLayer(t.target);
      }, _updateLayer: function _updateLayer(t) {
        t.options && (this.infoControl && this._loaded && this.infoControl.addInfo(t.options.infoControl), this.attributionControl && this._loaded && t.getAttribution && this.attributionControl.addAttribution(t.getAttribution()), L.stamp(t) in this._zoomBoundLayers || !t.options.maxZoom && !t.options.minZoom || (this._zoomBoundLayers[L.stamp(t)] = t), this._updateMapFeedbackLink(), this._updateZoomLevels());
      } });module.exports.Map = LMap, module.exports.map = function (t, o, e) {
      return new LMap(t, o, e);
    };
  }, { "./feature_layer": 9, "./feedback": 10, "./grid_control": 15, "./grid_layer": 16, "./info_control": 18, "./legend_control": 20, "./load_tilejson": 21, "./mapbox_logo": 24, "./share_control": 27, "./tile_layer": 30, "sanitize-caja": 5 }], 23: [function (require, module, exports) {
    "use strict";
    var geocoderControl = require("./geocoder_control"),
        gridControl = require("./grid_control"),
        featureLayer = require("./feature_layer"),
        legendControl = require("./legend_control"),
        shareControl = require("./share_control"),
        tileLayer = require("./tile_layer"),
        infoControl = require("./info_control"),
        map = require("./map"),
        gridLayer = require("./grid_layer"),
        styleLayer = require("./style_layer");L.mapbox = module.exports = { VERSION: require("../package.json").version, geocoder: require("./geocoder"), marker: require("./marker"), simplestyle: require("./simplestyle"), tileLayer: tileLayer.tileLayer, TileLayer: tileLayer.TileLayer, styleLayer: styleLayer.styleLayer, StyleLayer: styleLayer.StyleLayer, infoControl: infoControl.infoControl, InfoControl: infoControl.InfoControl, shareControl: shareControl.shareControl, ShareControl: shareControl.ShareControl, legendControl: legendControl.legendControl, LegendControl: legendControl.LegendControl, geocoderControl: geocoderControl.geocoderControl, GeocoderControl: geocoderControl.GeocoderControl, gridControl: gridControl.gridControl, GridControl: gridControl.GridControl, gridLayer: gridLayer.gridLayer, GridLayer: gridLayer.GridLayer, featureLayer: featureLayer.featureLayer, FeatureLayer: featureLayer.FeatureLayer, map: map.map, Map: map.Map, config: require("./config"), sanitize: require("sanitize-caja"), template: require("mustache").to_html, feedback: require("./feedback") }, window.L.Icon.Default.imagePath = ("https:" === document.location.protocol || "http:" === document.location.protocol ? "" : "https:") + "//api.tiles.mapbox.com/mapbox.js/v" + require("../package.json").version + "/images";
  }, { "../package.json": 7, "./config": 8, "./feature_layer": 9, "./feedback": 10, "./geocoder": 12, "./geocoder_control": 13, "./grid_control": 15, "./grid_layer": 16, "./info_control": 18, "./legend_control": 20, "./map": 22, "./marker": 25, "./share_control": 27, "./simplestyle": 28, "./style_layer": 29, "./tile_layer": 30, "mustache": 4, "sanitize-caja": 5 }], 24: [function (require, module, exports) {
    "use strict";
    var MapboxLogoControl = L.Control.extend({ options: { position: "bottomleft" }, initialize: function initialize(o) {
        L.setOptions(this, o);
      }, onAdd: function onAdd() {
        return this._container = L.DomUtil.create("div", "mapbox-logo"), this._container;
      }, _setTileJSON: function _setTileJSON(o) {
        o.mapbox_logo && L.DomUtil.addClass(this._container, "mapbox-logo-true");
      } });module.exports.MapboxLogoControl = MapboxLogoControl, module.exports.mapboxLogoControl = function (o) {
      return new MapboxLogoControl(o);
    };
  }, {}], 25: [function (require, module, exports) {
    "use strict";
    function icon(r, e) {
      r = r || {};var i = { small: [20, 50], medium: [30, 70], large: [35, 90] },
          t = r["marker-size"] || "medium",
          o = "marker-symbol" in r && "" !== r["marker-symbol"] ? "-" + r["marker-symbol"] : "",
          s = (r["marker-color"] || "7e7e7e").replace("#", "");return L.icon({ iconUrl: format_url("/v4/marker/pin-" + t.charAt(0) + o + "+" + s + (L.Browser.retina ? "@2x" : "") + ".png", e && e.accessToken), iconSize: i[t], iconAnchor: [i[t][0] / 2, i[t][1] / 2], popupAnchor: [0, -i[t][1] / 2] });
    }function style(r, e, i) {
      return L.marker(e, { icon: icon(r.properties, i), title: util.strip_tags(sanitize(r.properties && r.properties.title || "")) });
    }function createPopup(r, e) {
      if (!r || !r.properties) return "";var i = "";return r.properties.title && (i += '<div class="marker-title">' + r.properties.title + "</div>"), r.properties.description && (i += '<div class="marker-description">' + r.properties.description + "</div>"), (e || sanitize)(i);
    }var format_url = require("./format_url"),
        util = require("./util"),
        sanitize = require("sanitize-caja");module.exports = { icon: icon, style: style, createPopup: createPopup };
  }, { "./format_url": 11, "./util": 31, "sanitize-caja": 5 }], 26: [function (require, module, exports) {
    "use strict";
    var corslite = require("corslite"),
        strict = require("./util").strict,
        config = require("./config"),
        protocol = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;module.exports = function (t, o) {
      function r(t, r) {
        !t && r && (r = JSON.parse(r.responseText)), o(t, r);
      }return strict(t, "string"), strict(o, "function"), t = t.replace(protocol, function (t, o) {
        return "withCredentials" in new window.XMLHttpRequest() ? "https:" === o || "https:" === document.location.protocol || config.FORCE_HTTPS ? "https:" : "http:" : document.location.protocol;
      }), corslite(t, r);
    };
  }, { "./config": 8, "./util": 31, "corslite": 1 }], 27: [function (require, module, exports) {
    "use strict";
    var format_url = require("./format_url"),
        ShareControl = L.Control.extend({ includes: [require("./load_tilejson")], options: { position: "topleft", url: "" }, initialize: function initialize(t, e) {
        L.setOptions(this, e), this._loadTileJSON(t);
      }, _setTileJSON: function _setTileJSON(t) {
        this._tilejson = t;
      }, onAdd: function onAdd(t) {
        this._map = t;var e = L.DomUtil.create("div", "leaflet-control-mapbox-share leaflet-bar"),
            o = L.DomUtil.create("a", "mapbox-share mapbox-icon mapbox-icon-share", e);return o.href = "#", this._modal = L.DomUtil.create("div", "mapbox-modal", this._map._container), this._mask = L.DomUtil.create("div", "mapbox-modal-mask", this._modal), this._content = L.DomUtil.create("div", "mapbox-modal-content", this._modal), L.DomEvent.addListener(o, "click", this._shareClick, this), L.DomEvent.disableClickPropagation(e), this._map.on("mousedown", this._clickOut, this), e;
      }, _clickOut: function _clickOut(t) {
        return this._sharing ? (L.DomEvent.preventDefault(t), L.DomUtil.removeClass(this._modal, "active"), this._content.innerHTML = "", void (this._sharing = null)) : void 0;
      }, _shareClick: function _shareClick(t) {
        function e(t, e, o) {
          var i = document.createElement("a");return i.setAttribute("class", t), i.setAttribute("href", e), i.setAttribute("target", "_blank"), o = document.createTextNode(o), i.appendChild(o), i;
        }if (L.DomEvent.stop(t), this._sharing) return this._clickOut(t);var o = this._tilejson || this._map._tilejson || {},
            i = encodeURIComponent(this.options.url || o.webpage || window.location),
            a = encodeURIComponent(o.name),
            n = format_url("/v4/" + o.id + "/" + this._map.getCenter().lng + "," + this._map.getCenter().lat + "," + this._map.getZoom() + "/600x600.png", this.options.accessToken),
            r = format_url("/v4/" + o.id + ".html", this.options.accessToken),
            s = "//twitter.com/intent/tweet?status=" + a + " " + i,
            l = "//www.facebook.com/sharer.php?u=" + i + "&t=" + a,
            m = "//www.pinterest.com/pin/create/button/?url=" + i + "&media=" + n + "&description=" + a,
            c = '<iframe width="100%" height="500px" frameBorder="0" src="' + r + '"></iframe>',
            h = "Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";L.DomUtil.addClass(this._modal, "active"), this._sharing = L.DomUtil.create("div", "mapbox-modal-body", this._content);var p = e("mapbox-button mapbox-button-icon mapbox-icon-twitter", s, "Twitter"),
            d = e("mapbox-button mapbox-button-icon mapbox-icon-facebook", l, "Facebook"),
            u = e("mapbox-button mapbox-button-icon mapbox-icon-pinterest", m, "Pinterest"),
            b = document.createElement("h3"),
            _ = document.createTextNode("Share this map");b.appendChild(_);var v = document.createElement("div");v.setAttribute("class", "mapbox-share-buttons"), v.appendChild(d), v.appendChild(p), v.appendChild(u), this._sharing.appendChild(b), this._sharing.appendChild(v);var x = L.DomUtil.create("input", "mapbox-embed", this._sharing);x.type = "text", x.value = c;var f = L.DomUtil.create("label", "mapbox-embed-description", this._sharing);f.innerHTML = h;var g = L.DomUtil.create("a", "leaflet-popup-close-button", this._sharing);g.href = "#", L.DomEvent.disableClickPropagation(this._sharing), L.DomEvent.addListener(g, "click", this._clickOut, this), L.DomEvent.addListener(x, "click", function (t) {
          t.target.focus(), t.target.select();
        });
      } });module.exports.ShareControl = ShareControl, module.exports.shareControl = function (t, e) {
      return new ShareControl(t, e);
    };
  }, { "./format_url": 11, "./load_tilejson": 21 }], 28: [function (require, module, exports) {
    "use strict";
    function fallback(t, l) {
      var i = {};for (var r in l) {
        void 0 === t[r] ? i[r] = l[r] : i[r] = t[r];
      }return i;
    }function remap(t) {
      for (var l = {}, i = 0; i < mapping.length; i++) {
        l[mapping[i][1]] = t[mapping[i][0]];
      }return l;
    }function style(t) {
      return remap(fallback(t.properties || {}, defaults));
    }var defaults = { stroke: "#555555", "stroke-width": 2, "stroke-opacity": 1, fill: "#555555", "fill-opacity": .5 },
        mapping = [["stroke", "color"], ["stroke-width", "weight"], ["stroke-opacity", "opacity"], ["fill", "fillColor"], ["fill-opacity", "fillOpacity"]];module.exports = { style: style, defaults: defaults };
  }, {}], 29: [function (require, module, exports) {
    "use strict";
    var util = require("./util"),
        format_url = require("./format_url"),
        request = require("./request"),
        StyleLayer = L.TileLayer.extend({ options: { sanitizer: require("sanitize-caja") }, initialize: function initialize(t, i) {
        L.TileLayer.prototype.initialize.call(this, void 0, i), this.options.tiles = this._formatTileURL(t), this.options.tileSize = 512, this.options.zoomOffset = -1, this.options.tms = !1, this._getAttribution(t);
      }, _getAttribution: function _getAttribution(t) {
        var i = format_url.style(t, this.options && this.options.accessToken);request(i, L.bind(function (e, r) {
          e && (util.log("could not load Mapbox style at " + i), this.fire("error", { error: e }));var o = [];for (var s in r.sources) {
            var l = r.sources[s].url.split("mapbox://")[1];o.push(l);
          }request(format_url.tileJSON(o.join(), this.options.accessToken), L.bind(function (i, e) {
            i ? (util.log("could not load TileJSON at " + t), this.fire("error", { error: i })) : e && (util.strict(e, "object"), this.options.attribution = this.options.sanitizer(e.attribution), this._tilejson = e, this.fire("ready"));
          }, this));
        }, this));
      }, setUrl: null, _formatTileURL: function _formatTileURL(t) {
        var i = L.Browser.retina ? "@2x" : "";if ("string" == typeof t) {
          -1 === t.indexOf("mapbox://styles/") && (util.log("Incorrectly formatted Mapbox style at " + t), this.fire("error"));var e = t.split("mapbox://styles/")[1];return format_url("/styles/v1/" + e + "/tiles/{z}/{x}/{y}" + i, this.options.accessToken);
        }return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? format_url("/styles/v1/" + t.owner + "/" + t.id + "/tiles/{z}/{x}/{y}" + i, this.options.accessToken) : void 0;
      }, getTileUrl: function getTileUrl(t) {
        var i = L.Util.template(this.options.tiles, t);return i;
      } });module.exports.StyleLayer = StyleLayer, module.exports.styleLayer = function (t, i) {
      return new StyleLayer(t, i);
    };
  }, { "./format_url": 11, "./request": 26, "./util": 31, "sanitize-caja": 5 }], 30: [function (require, module, exports) {
    "use strict";
    var util = require("./util"),
        formatPattern = /\.((?:png|jpg)\d*)(?=$|\?)/,
        TileLayer = L.TileLayer.extend({ includes: [require("./load_tilejson")], options: { sanitizer: require("sanitize-caja") }, formats: ["png", "jpg", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"], scalePrefix: "@2x.", initialize: function initialize(t, i) {
        L.TileLayer.prototype.initialize.call(this, void 0, i), this._tilejson = {}, i && i.format && util.strict_oneof(i.format, this.formats), this._loadTileJSON(t);
      }, setFormat: function setFormat(t) {
        return util.strict(t, "string"), this.options.format = t, this.redraw(), this;
      }, setUrl: null, _setTileJSON: function _setTileJSON(t) {
        return util.strict(t, "object"), this.options.format = this.options.format || t.tiles[0].match(formatPattern)[1], L.extend(this.options, { tiles: t.tiles, attribution: this.options.sanitizer(t.attribution), minZoom: t.minzoom || 0, maxZoom: t.maxzoom || 18, tms: "tms" === t.scheme, bounds: t.bounds && util.lbounds(t.bounds) }), this._tilejson = t, this.redraw(), this;
      }, getTileJSON: function getTileJSON() {
        return this._tilejson;
      }, getTileUrl: function getTileUrl(t) {
        var i = this.options.tiles,
            e = Math.floor(Math.abs(t.x + t.y) % i.length),
            o = i[e],
            r = L.Util.template(o, t);return r ? r.replace(formatPattern, (L.Browser.retina ? this.scalePrefix : ".") + this.options.format) : r;
      }, _update: function _update() {
        this.options.tiles && L.TileLayer.prototype._update.call(this);
      } });module.exports.TileLayer = TileLayer, module.exports.tileLayer = function (t, i) {
      return new TileLayer(t, i);
    };
  }, { "./load_tilejson": 21, "./util": 31, "sanitize-caja": 5 }], 31: [function (require, module, exports) {
    "use strict";
    function contains(n, t) {
      if (!t || !t.length) return !1;for (var r = 0; r < t.length; r++) {
        if (t[r] === n) return !0;
      }return !1;
    }module.exports = { idUrl: function idUrl(n, t) {
        -1 === n.indexOf("/") ? t.loadID(n) : t.loadURL(n);
      }, log: function log(n) {
        "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && "function" == typeof console.error && console.error(n);
      }, strict: function strict(n, t) {
        if ((typeof n === "undefined" ? "undefined" : _typeof(n)) !== t) throw new Error("Invalid argument: " + t + " expected");
      }, strict_instance: function strict_instance(n, t, r) {
        if (!(n instanceof t)) throw new Error("Invalid argument: " + r + " expected");
      }, strict_oneof: function strict_oneof(n, t) {
        if (!contains(n, t)) throw new Error("Invalid argument: " + n + " given, valid values are " + t.join(", "));
      }, strip_tags: function strip_tags(n) {
        return n.replace(/<[^<]+>/g, "");
      }, lbounds: function lbounds(n) {
        return new L.LatLngBounds([[n[1], n[0]], [n[3], n[2]]]);
      } };
  }, {}] }, {}, [17]);

//# sourceMappingURL=mapbox.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(2);
//Set up our custom linked GEOJSON
function Marker(lat, long, url, symbol, title, id) {
  this.geometry = {};
  this.properties = {};
  this.geometry.coordinates = [lat, long];
  this.geometry.type = 'Point';
  this.properties.id = id;
  this.properties['marker-color'] = '#505050';
  this.properties['marker-size'] = 'medium';
  this.properties['marker-symbol'] = symbol;
  this.properties.title = title;
  this.type = 'Feature';
}
var makemap = function makemap(zoom) {
  L.mapbox.accessToken = 'pk.eyJ1Ijoid2prYW1vdml0Y2giLCJhIjoiNnExWENJMCJ9.tASAod7myUnI3wIfRKKlxA';
  var map = L.mapbox.map('map').setView([43, 14.9], zoom);
  //disable map movement
  map.touchZoom.disable();
  map.dragging.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  // disable tap handler, if present.
  if (map.tap) map.tap.disable();
  //manually remove the zoom buttons
  $(".leaflet-bar").remove();
  $(".leaflet-right").remove();
  L.mapbox.styleLayer('mapbox://styles/wjkamovitch/citaeut15000f2ipgey6e5p2v').addTo(map);
  // Return the map
  return map;
};

// Given a screen size, return a zoom level for mapbox.
var adaptivezoom = function adaptivezoom(size) {
  if (size <= 589) return 1;else if (size <= 1190) return 2;
  return 3;
};

function checkWidth() {
  var windowSize = $(window).width();
  if (!$('#map').length) {
    //Escape if map container doesn't load
    return false;
  }

  //Change the zoom level of the initial map load based on screen size
  var zoom = adaptivezoom(windowSize);
  map = makemap(zoom);

  var NewOriental = new Marker(112.938814, 28.228209, "NewOriental", 'commercial', 'New Oriental', '3togyyo6');
  var MediaMath = new Marker(-71.253956, 42.376727, 'MediaMath', 'commercial', 'Media Math', 'lnxos0eb');
  var NKIDP = new Marker(-77.029716, 38.8953, 'NKIDP', 'commercial', 'North Korean International Documentation Project', 'xzsjc9cn');
  var PKU = new Marker(116.305611, 39.987755, 'PKU', 'college', 'Peking University', 'xu37qi6o');
  var GWU = new Marker(-77.046272, 38.899798, 'GWU', 'college', 'George Washington University', '0l5qibch');
  var SOAS = new Marker(-0.12889623641967773, 51.52204224896724, 'SOAS', 'college', 'School of Oriental and African Studies', 'xdtpyk00');
  var geoJson = {
    type: 'FeatureCollection',
    features: [NewOriental, MediaMath, NKIDP, PKU, GWU, SOAS]
  };
  // Make the GeoJSON linkable in the same window
  map.featureLayer.setGeoJSON(geoJson);
  map.featureLayer.on('click', function (e) {
    e.layer.unbindPopup();
    window.open(e.layer.feature.properties.url, '_self');
  });
  iss(map);
  return map;
}
//Update zoom and recenter as window is resized
var newsize = function newsize(map) {
  return function () {
    var windowSize = $(window).width();
    var zoomLevel = adaptivezoom(windowSize);
    map.setView([43, 14.9], zoomLevel);
  };
};

var iss = function iss(map) {
  var myIcon = L.icon({
    iconUrl: '/img/rocket.png',
    iconSize: [30, 30]
  });
  var issMarker = L.marker([-20, -20], { icon: myIcon, title: "ISS" }).addTo(map);
  //now get the ISS Location
  setInterval(function () {
    $.ajax({
      url: "http://api.open-notify.org/iss-now.json",
      success: function success(data) {
        issMarker.setLatLng([data.iss_position.latitude, data.iss_position.longitude]);
      },
      dataType: "jsonp"
    });
  }, 2000);
};

$(document).ready(function () {
  var map = checkWidth();
  $(window).resize(newsize(map));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=mapbox.bundle.js.map