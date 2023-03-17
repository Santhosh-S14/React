/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\My learning\\React\\react-course-projects\\indecision-app\\node_modules\\react\\index.js'");

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(34);

var _utils2 = _interopRequireDefault(_utils);

var _person = __webpack_require__(35);

var _person2 = _interopRequireDefault(_person);

var _validator = __webpack_require__(36);

var _validator2 = _interopRequireDefault(_validator);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(87);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app.js is running!!!');

//named exports
console.log((0, _utils.square)(4));
console.log((0, _utils.add)(100, 23));

//default export
console.log((0, _utils2.default)(100, 23));

//another example to test
console.log("Is Adult: ", (0, _person.isAdult)(18));
console.log("Can Drink: ", (0, _person.canDrink)(21));
console.log("Is Senior: ", (0, _person2.default)(64));

console.log("Verify email: ", _validator2.default.isEmail('test@gmail.com'));

var template = _react2.default.createElement(
  'p',
  null,
  'THIS IS JSX FROM WEBPACK'
);
_reactDom2.default.render(template, document.getElementById('app'));

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
console.log('utils.js is running!');

var square = function square(x) {
  return x * x;
};

var add = function add(a, b) {
  return a + b;
};

var subtract = function subtract(a, b) {
  return a - b;
};

exports.square = square;
exports.add = add;
exports.default = subtract;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var isAdult = function isAdult(x) {
    return x >= 18;
};

var canDrink = function canDrink(y) {
    return y >= 21;
};

var isSenior = function isSenior(z) {
    return z >= 65;
};

exports.isAdult = isAdult;
exports.canDrink = canDrink;
exports.default = isSenior;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\My learning\\React\\react-course-projects\\indecision-app\\node_modules\\validator\\index.js'");

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\My learning\\React\\react-course-projects\\indecision-app\\node_modules\\react-dom\\index.js'");

/***/ })

/******/ });