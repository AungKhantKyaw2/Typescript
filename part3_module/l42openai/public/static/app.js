/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src-client/app.ts":
/*!***************************!*\
  !*** ./src-client/app.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\nconst sendbtn = document.getElementById(\"send-btn\");\nconst userinput = document.getElementById(\"userinput\");\nconst displaybox = document.getElementById(\"displaybox\");\nconst clearhistory = document.getElementById(\"clear-history\");\nconst spinner = document.getElementById(\"loading-spinner\");\nlet lastMessageDiv = null;\nlet isNewInput = true;\nfunction wsURL(pathname) {\n    const isLocal = window.location.hostname === \"localhost\" || window.location.hostname === \"127.0.0.1\";\n    if (isLocal)\n        return `ws://localhost:9000${pathname}`;\n    return `${window.location.protocol === \"https:\" ? \"wss\" : \"ws\"}://${window.location.hostname}${pathname}`;\n}\nconst ws = new WebSocket(wsURL('/wstext'));\nws.onopen = function () {\n    console.log(\"WebSocket connection established\");\n};\nws.onerror = () => { spinner.style.display = \"none\"; };\nws.onclose = () => { spinner.style.display = \"none\"; };\nws.onmessage = (event) => {\n    const message = String(event.data);\n    if (displaybox.querySelector(\"small\"))\n        displaybox.innerHTML = \"\";\n    spinner.style.display = \"none\";\n};\nsendbtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    const input = userinput.value.trim();\n    if (!input)\n        return;\n    if (displaybox.querySelector(\"small\"))\n        displaybox.innerHTML = \"\";\n    const userDiv = document.createElement(\"div\");\n    userDiv.className = \"p-3 ms-3 chat-message user-input\";\n    userDiv.textContent = input;\n    displaybox.appendChild(userDiv);\n    ws.send(input);\n    saveToLocal('user-input', input);\n    userinput.value = \"\";\n    userinput.focus();\n    lastMessageDiv = null;\n    isNewInput = true;\n    spinner.style.display = \"block\";\n});\nwindow.onload = () => {\n    const stored = JSON.parse(localStorage.getItem(\"chathistory\") || \"[]\");\n    if (stored.length === 0)\n        return;\n    displaybox.innerHTML = \"\";\n    let curRole = null;\n    let curContent = \"\";\n    stored.forEach((item) => {\n        if (item.role === curRole)\n            curContent += item.content;\n        else {\n            if (curRole)\n                appendMessage(curRole, curContent);\n            curRole = item.role;\n            curContent = item.content;\n        }\n    });\n};\nfunction appendMessage(role, content) {\n    const newdiv = document.createElement(\"div\");\n    newdiv.className = \"p-3 ms-3 chate-message\" + role;\n    newdiv.textContent = content;\n    displaybox.appendChild(newdiv);\n}\nfunction saveToLocal(role, content) {\n    let arr = JSON.parse(localStorage.getItem(\"chathistory\") || \"[]\");\n    arr.push({ role: role, content: content });\n    localStorage.setItem(\"chathistory\", JSON.stringify(arr));\n}\nclearhistory.addEventListener('click', () => {\n    localStorage.removeItem(\"chathistory\");\n    location.reload();\n});\n\n\n\n//# sourceURL=webpack://l36contactappexercise/./src-client/app.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src-client/app.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;