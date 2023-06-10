/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ (() => {

eval("let circWrap = document.querySelector(\".circle-wrapper\");\r\nlet halfWidth = window.innerWidth / 2;\r\nlet halfHeight = window.innerHeight / 2;\r\nlet mouseDown = false;\r\n\r\ncircWrap.addEventListener(\"mousedown\", (event) => {\r\n  mouseDown = true;\r\n});\r\n\r\ncircWrap.addEventListener(\"mousemove\", (event) => {\r\n  if (mouseDown) {\r\n    dragElement(event);\r\n  }\r\n});\r\n\r\ncircWrap.addEventListener(\"mouseup\", (event) => {\r\n  mouseDown = false;\r\n});\r\n\r\ncircWrap.addEventListener(\"mouseleave\", (event) => {\r\n  mouseDown = false;\r\n});\r\n\r\nfunction dragElement(event) {\r\n  console.log(circWrap);\r\n  circWrap.style.transform = `translate(${event.clientX - halfWidth}px, ${\r\n    event.clientY - halfHeight\r\n  }px)`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/drag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/drag.js"]();
/******/ 	
/******/ })()
;