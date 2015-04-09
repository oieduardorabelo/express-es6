require("source-map-support").install();
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireWildcard(_express);
	
	var _Routes = __webpack_require__(2);
	
	var _Routes2 = _interopRequireWildcard(_Routes);
	
	var app = _express2['default']();
	var server = app.listen(3000, function () {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('App listening at http://%s:%s', host, port);
	});
	
	app.use('/', _Routes2['default'].home);
	// app.use('/about', Routes.about)
	// app.use('/articles', Routes.articles)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireWildcard(_express);
	
	'use strict';
	
	var router = _express2['default'].Router();
	
	router.use(function timeLog(req, res, next) {
	  console.log('Time: ', Date.now());
	  next();
	});
	
	router.get('/', function (req, res) {
	  res.send('Birds home page');
	});
	
	router.get('/about', function (req, res) {
	  res.send('About birds');
	});
	
	exports['default'] = {
	  home: router
	};
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=app.output.js.map