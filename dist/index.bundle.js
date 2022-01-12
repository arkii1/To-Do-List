/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-colour: rgb(82, 150, 165);\n    --background-highlight-colour: rgb(130, 221, 240);\n    --board-colour: rgb(246, 194, 139);\n    --board-highlight-colour: rgb(252, 215, 173);\n    --board-contrast-colour: rgb(165, 117, 72);\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    color: white;\n    \n    margin: 0px;\n\n    background-color: var(--background-colour);\n\n    display: flex;\n    flex-direction: column;\n    gap: 0px;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    height: 95vh;\n    width: 100vw;\n\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n\n    background: var(--background-colour);\n}\n\n.board {\n    margin: 10vh 20vw;\n    margin-bottom: 5vh;\n\n    flex: 1 0 auto;\n    display: flex;\n\n\n    background:var(--board-contrast-colourcolour);\n    border-radius: 10px;\n    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);\n}\n\n.sideBar {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n\n    background: var(--board-colour);\n    border: solid var(--board-contrast-colour) 1px;\n    border-right: none;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.timeDiv {\n    height: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: content;\n    gap: 25px;\n\n    background: var(--board-colour);\n    border-bottom: solid var(--board-contrast-colour) 1px;\n    border-top-left-radius: 10px;\n}\n\n.projectDiv {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n    padding-top: 20px;\n\n    background: var(--board-colour);\n    border-bottom: solid var(--board-contrast-colour) 1px;\n    border-bottom-left-radius: 10px;\n}\n\n.sideBarRow {\n    width: auto;\n    height: auto;\n\n    display: flex;\n    justify-content: left;\n    align-items: center;\n\n}\n\nbutton {\n    flex: 1 0 auto;\n    height: 24px;\n    width: 96px;\n\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    border-radius: 5px;\n    color: var(--board-contrast-colour);\n    font-size: 20px;\n    transition: 0.1s;\n    text-overflow: clip ellipsis;\n}\n\nbutton:hover {\n    transform: scale(1.2);\n    color: black;\n}\n\ntable {\n    color: var(--board-contrast-colour);\n    text-align: start;\n}\nth {\n    text-align: start;\n}\n\n\n.taskList {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n\n    background: var(--board-colour);\n    border: solid var(--board-contrast-colour) 1px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.taskDiv {\n    flex: 1 0 auto;\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\n.buttons {\n    display: flex;\n    margin-top: 0;\n    align-items: center;\n    justify-content: center;\n    gap: 0px;\n    margin-bottom: 4vh;\n}\n\n#create-project,\n#create-task {\n    flex: .1 0 auto;\n    color: white;\n}\n\n#footer {\n    height: 5vh;\n    width: 100vw;\n    text-align: center;\n\n    background: var(--background-colour);\n}\n \n.project-modal {\n    background-color: var(--background-colour);\n\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 400px;\n    width: 600px;\n    max-width: 80%;\n    padding: 30px 50px;\n    border-radius: 5px;\n    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);\n\n    display: flex;\n    flex-direction: column;\n    gap: 0px;\n    justify-content: start;\n    align-items: center;\n\n    opacity: 0;\n    pointer-events: none;\n}\n\n.modal-row {\n    display: flex;\n    \n}\n\n.modal-close-button {\n    position: fixed;\n    top: 1%;\n    right: 1%;\n\n    height: 20px;\n    width: 20px;\n\n    color: white;\n    transition: 0.1s;\n}\n\n.project-modal.show {\n    opacity: 1;\n    pointer-events: auto;\n}\n\nform {\n    display:flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: flex-start;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;IACtC,iDAAiD;IACjD,kCAAkC;IAClC,4CAA4C;IAC5C,0CAA0C;AAC9C;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,YAAY;;IAEZ,WAAW;;IAEX,0CAA0C;;IAE1C,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;;IAEZ,cAAc;IACd,aAAa;IACb,sBAAsB;;IAEtB,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;;IAElB,cAAc;IACd,aAAa;;;IAGb,6CAA6C;IAC7C,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;;IAEtB,+BAA+B;IAC/B,8CAA8C;IAC9C,kBAAkB;IAClB,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,SAAS;;IAET,+BAA+B;IAC/B,qDAAqD;IACrD,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;IACT,iBAAiB;;IAEjB,+BAA+B;IAC/B,qDAAqD;IACrD,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;;AAEvB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;;IAEX,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,mCAAmC;IACnC,eAAe;IACf,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;;;AAGA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;;IAEtB,+BAA+B;IAC/B,8CAA8C;IAC9C,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,aAAa;;IAEb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;;IAElB,oCAAoC;AACxC;;AAEA;IACI,0CAA0C;;IAE1C,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,8CAA8C;;IAE9C,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,sBAAsB;IACtB,mBAAmB;;IAEnB,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,SAAS;;IAET,YAAY;IACZ,WAAW;;IAEX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;AAC3B","sourcesContent":[":root {\n    --background-colour: rgb(82, 150, 165);\n    --background-highlight-colour: rgb(130, 221, 240);\n    --board-colour: rgb(246, 194, 139);\n    --board-highlight-colour: rgb(252, 215, 173);\n    --board-contrast-colour: rgb(165, 117, 72);\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    color: white;\n    \n    margin: 0px;\n\n    background-color: var(--background-colour);\n\n    display: flex;\n    flex-direction: column;\n    gap: 0px;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    height: 95vh;\n    width: 100vw;\n\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n\n    background: var(--background-colour);\n}\n\n.board {\n    margin: 10vh 20vw;\n    margin-bottom: 5vh;\n\n    flex: 1 0 auto;\n    display: flex;\n\n\n    background:var(--board-contrast-colourcolour);\n    border-radius: 10px;\n    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);\n}\n\n.sideBar {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n\n    background: var(--board-colour);\n    border: solid var(--board-contrast-colour) 1px;\n    border-right: none;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.timeDiv {\n    height: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: content;\n    gap: 25px;\n\n    background: var(--board-colour);\n    border-bottom: solid var(--board-contrast-colour) 1px;\n    border-top-left-radius: 10px;\n}\n\n.projectDiv {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n    padding-top: 20px;\n\n    background: var(--board-colour);\n    border-bottom: solid var(--board-contrast-colour) 1px;\n    border-bottom-left-radius: 10px;\n}\n\n.sideBarRow {\n    width: auto;\n    height: auto;\n\n    display: flex;\n    justify-content: left;\n    align-items: center;\n\n}\n\nbutton {\n    flex: 1 0 auto;\n    height: 24px;\n    width: 96px;\n\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    border-radius: 5px;\n    color: var(--board-contrast-colour);\n    font-size: 20px;\n    transition: 0.1s;\n    text-overflow: clip ellipsis;\n}\n\nbutton:hover {\n    transform: scale(1.2);\n    color: black;\n}\n\ntable {\n    color: var(--board-contrast-colour);\n    text-align: start;\n}\nth {\n    text-align: start;\n}\n\n\n.taskList {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n\n    background: var(--board-colour);\n    border: solid var(--board-contrast-colour) 1px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.taskDiv {\n    flex: 1 0 auto;\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\n.buttons {\n    display: flex;\n    margin-top: 0;\n    align-items: center;\n    justify-content: center;\n    gap: 0px;\n    margin-bottom: 4vh;\n}\n\n#create-project,\n#create-task {\n    flex: .1 0 auto;\n    color: white;\n}\n\n#footer {\n    height: 5vh;\n    width: 100vw;\n    text-align: center;\n\n    background: var(--background-colour);\n}\n \n.project-modal {\n    background-color: var(--background-colour);\n\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 400px;\n    width: 600px;\n    max-width: 80%;\n    padding: 30px 50px;\n    border-radius: 5px;\n    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);\n\n    display: flex;\n    flex-direction: column;\n    gap: 0px;\n    justify-content: start;\n    align-items: center;\n\n    opacity: 0;\n    pointer-events: none;\n}\n\n.modal-row {\n    display: flex;\n    \n}\n\n.modal-close-button {\n    position: fixed;\n    top: 1%;\n    right: 1%;\n\n    height: 20px;\n    width: 20px;\n\n    color: white;\n    transition: 0.1s;\n}\n\n.project-modal.show {\n    opacity: 1;\n    pointer-events: auto;\n}\n\nform {\n    display:flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: flex-start;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
function project(title, id) {
    const getTitle = () => { return title; }
    const getId = () => { return id; }

    const setTitle = (newTitle) => { this.title = newTitle; }
    const setId = (newId) => { this.id = newId };

    return {
        getTitle,               setTitle,
        getId,                  setId
    }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
function task(title, complete, dueDate, priority, description) {
    const getTitle = () => { return title; }
    const getComplete = () => { return complete; }
    const getDueDate = () => { return dueDate; }
    const getPriority = () => { return priority; }
    const getDescription = () => { return description; }

    const setTitle = (newTitle) => { this.title = newTitle; }
    const setComplete = (newComplete) => { this.complete = newComplete; }
    const setDueDate = (newDueDate) => { this.dueDate = newDueDate; }
    const setPriority = (newPriority) => { this.priority = newPriority; }
    const setDescription = (newDescription) => { this.description = newDescription; }


    return {
        getTitle,               setTitle,
        getComplete,            setComplete,
        getDueDate,             setDueDate,
        getPriority,            setPriority,
        getDescription,         setDescription
    }

}

/***/ }),

/***/ "./src/uiUpdater.js":
/*!**************************!*\
  !*** ./src/uiUpdater.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initUIFramework": () => (/* binding */ initUIFramework),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTable": () => (/* binding */ renderTable)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function initUIFramework() {
        const content = createDiv(undefined, 'content');
        document.body.appendChild(content);

        const board = createDiv('board');
        content.appendChild(board);

        const sideBar = createDiv('sideBar');
        board.appendChild(sideBar);

        const timeDiv = createDiv('timeDiv');
        sideBar.appendChild(timeDiv);

        const taskList = createDiv('taskList', 'taskList');
        board.appendChild(taskList);

        const footer = createDiv(undefined, 'footer', 'Copyright &copy Tommy Mapp');
        document.body.appendChild(footer);


        initTableUI(taskList);
        initCreateButtonsUI(content);
        initTimeButtonsUI(timeDiv);
        initProjectBarUI(sideBar);
        initModals();


    function initProjectBarUI(sideBar) {
        const projectDiv = createDiv('projectDiv', 'projectDiv');
        sideBar.appendChild(projectDiv);
    }

    function initTimeButtonsUI(timeDiv) {
        const allButton = createButton('allButton', 'All');
        const allDiv = createDiv('sideBarRow');
        allDiv.appendChild(allButton);
        timeDiv.appendChild(allDiv);

        const dayButton = createButton('dayButton', 'Day');
        const dayDiv = createDiv('sideBarRow');
        dayDiv.appendChild(dayButton);
        timeDiv.appendChild(dayDiv);

        const weekButton = createButton('weekButton', 'Week');
        const weekDiv = createDiv('sideBarRow');
        weekDiv.appendChild(weekButton);
        timeDiv.appendChild(weekDiv);

        const monthButton = createButton('monthButton', 'Month');
        const monthDiv = createDiv('sideBarRow');
        monthDiv.appendChild(monthButton);
        timeDiv.appendChild(monthDiv);
    }

    function initCreateButtonsUI(content) {
        const createButtonsDiv = createDiv('buttons');
        const projectButton = createButton('create-project', 'Create New Project');
        projectButton.addEventListener("click", openCreateProjectForm);
        const taskButton = createButton('create-task', 'Create New Task');
        createButtonsDiv.appendChild(projectButton);
        createButtonsDiv.appendChild(taskButton);
        content.appendChild(createButtonsDiv);
    }

    function initModals() {
        const projectModalDiv = createDiv('project-modal', 'project-modal-container');
        const topDiv = document.createElement('div');
        topDiv.classList.add('modal-row');
        projectModalDiv.appendChild(topDiv);
        const projectHeader = document.createElement('h1');
        projectHeader.innerHTML = 'Create A New Project!';
        topDiv.append(projectHeader);
        const projectCloseButton = createButton('project-close', '&times', 'modal-close-button');
        projectCloseButton.addEventListener('click', closeProjectForm);
        topDiv.append(projectCloseButton);


        const formDiv = document.createElement('div');
        formDiv.classList.add('modal-row');
        const form = document.createElement('form');
        const pTitleLabel = document.createElement('label');
        pTitleLabel.setAttribute("for", "project-title");
        pTitleLabel.innerHTML = 'Project Title';
        const pTitleInput = document.createElement('input');
        pTitleInput.setAttribute('id','project-title');
        pTitleInput.name = 'project-title';
        pTitleInput.type = "text";
        const pSubmitInput = document.createElement('input');
        pSubmitInput.type = "submit";
        pSubmitInput.value = "Submit";
        pSubmitInput.addEventListener('click', submitProjectForm());
        form.appendChild(pTitleLabel);
        form.appendChild(pTitleInput);
        form.appendChild(pSubmitInput);
        formDiv.appendChild(form);
        projectModalDiv.appendChild(formDiv);
        document.body.append(projectModalDiv);
    }

    function initTableUI(taskList) {
        let table = document.createElement('table');
        table.classList.add('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        tbody.setAttribute('id', 'tableBody');

        table.appendChild(thead);
        table.appendChild(tbody);

        let tableRow = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Complete";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Task";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Due Date";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Proirity";

        tableRow.appendChild(heading_1);
        tableRow.appendChild(heading_2);
        tableRow.appendChild(heading_3);
        tableRow.appendChild(heading_4);
        thead.appendChild(tableRow);

        taskList.appendChild(table);
    }

}

function submitProjectForm(){
    if(document.getElementById('project-title')){
        const newTitle = document.getElementById('project-title').value;
        console.log(newTitle);
    }
    else console.error("nulllllll");
}

function renderProjects(projects) {
    const projectDiv = document.getElementById('projectDiv');

    for (let i = 0; i < projects.length; i++) {
        const d = createDiv('sideBarRow');
        d.appendChild(createButton(projects[i].getId(), projects[i].getTitle()));
        projectDiv.appendChild(d);
    }
}

function renderTable(tasks) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const htmlTask = `
        <tr>
            <td><input type="checkbox" name="complete" value=${task.getComplete()}></td>
            <td>${task.getTitle()}</td>
            <td>${task.getDueDate()}</td>
            <td>${task.getPriority()}</td>
            <td><button class="details" onclick="openDetails()">Details</button></td>
            <td><button class="edit" onclick="editTask()">Edit</button></td>
            <td><button class="delete" onclick="deleteTask()">Delete</button></td>
        </tr>
        `;
        tableBody.insertAdjacentHTML("afterbegin", htmlTask);
    }
}

function openDetails() {
    console.log('openDetails()');
}

function editTask() {
    console.log("editTask()");
}

function deleteTask() {
    console.log("deleteTask()");
}

function openCreateProjectForm() {
    const modalContainer = document.getElementById('project-modal-container');
    modalContainer.classList.add('show');
}

function closeProjectForm() {
    const modalContainer = document.getElementById('project-modal-container');
    modalContainer.classList.remove('show');
}

function openCreateTaskForm() {

}

//Class names passed as array if more than one, if want no id pass variable as ''. Maybe a way to make it so I don't need to pass first param to pass second?
function createDiv(classNames = undefined, idName = undefined, text = undefined) {
    const div = document.createElement('div');

    if(idName !== undefined){
        div.setAttribute('id', idName);
    }

    if(typeof classNames === 'string'){
        div.classList.add(classNames);
    }
    else if(classNames !== undefined && classNames.length > 0)
    {
        for (let i = 0; i < classNames.length; i++) {
            div.classList.add(classNames[i]);
        }
    }

    if(typeof text === 'string'){
        div.innerHTML = text;
    }

    return div;
}

function createButton(idName = undefined, text = undefined, classNames = undefined) {
    const button = document.createElement('button');

    if(idName !== undefined){
        button.setAttribute('id', idName);
    }

    if(typeof classNames === 'string'){
        button.classList.add(classNames);
    }
    else if(classNames !== undefined && classNames.length > 0)
    {
        for (let i = 0; i < classNames.length; i++) {
            button.classList.add(classNames[i]);
        }
    }

    if(typeof text === 'string'){
        button.innerHTML = text;
    }

    return button;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _uiUpdater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiUpdater */ "./src/uiUpdater.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");





// probably wanna use something different to an array
let t = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])('New Task', false, '25/11/1997', 'HIGH', 'This is a task description');
let t2 = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])('New Task 2', true, '25/11/1997', 'HIGH', 'This is a task description');
let t3 = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])('New Task 3', false, '25/11/1997', 'HIGH', 'This is a task description');

let taskArray = [t, t2, t3,];

let p1 = (0,_project__WEBPACK_IMPORTED_MODULE_3__["default"])('Project 1', 'project-1');
let p2 = (0,_project__WEBPACK_IMPORTED_MODULE_3__["default"])('Project 2', 'project-2');
let p3 = (0,_project__WEBPACK_IMPORTED_MODULE_3__["default"])('Project 3', 'project-3');

let pArray = [p1, p2, p3];

(0,_uiUpdater__WEBPACK_IMPORTED_MODULE_1__.initUIFramework)(); 
(0,_uiUpdater__WEBPACK_IMPORTED_MODULE_1__.renderTable)(taskArray);
(0,_uiUpdater__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(pArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDdUQ7QUFDbEQ7QUFDTTs7QUFFL0I7QUFDQSxRQUFRLGlEQUFJO0FBQ1osU0FBUyxpREFBSTtBQUNiLFNBQVMsaURBQUk7O0FBRWI7O0FBRUEsU0FBUyxvREFBTztBQUNoQixTQUFTLG9EQUFPO0FBQ2hCLFNBQVMsb0RBQU87O0FBRWhCOztBQUVBLDJEQUFlO0FBQ2YsdURBQVc7QUFDWCwwREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VpVXBkYXRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3VyOiByZ2IoODIsIDE1MCwgMTY1KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWhpZ2hsaWdodC1jb2xvdXI6IHJnYigxMzAsIDIyMSwgMjQwKTtcXG4gICAgLS1ib2FyZC1jb2xvdXI6IHJnYigyNDYsIDE5NCwgMTM5KTtcXG4gICAgLS1ib2FyZC1oaWdobGlnaHQtY29sb3VyOiByZ2IoMjUyLCAyMTUsIDE3Myk7XFxuICAgIC0tYm9hcmQtY29udHJhc3QtY29sb3VyOiByZ2IoMTY1LCAxMTcsIDcyKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG91cik7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIG1hcmdpbjogMTB2aCAyMHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuXFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWJvYXJkLWNvbnRyYXN0LWNvbG91cmNvbG91cik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5zaWRlQmFyIHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvYXJkLWNvbG91cik7XFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tYm9hcmQtY29udHJhc3QtY29sb3VyKSAxcHg7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRpbWVEaXYge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNvbnRlbnQ7XFxuICAgIGdhcDogMjVweDtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9hcmQtY29sb3VyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tYm9hcmQtY29udHJhc3QtY29sb3VyKSAxcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9hcmQtY29sb3VyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tYm9hcmQtY29udHJhc3QtY29sb3VyKSAxcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zaWRlQmFyUm93IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogOTZweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2FyZC1jb250cmFzdC1jb2xvdXIpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXAgZWxsaXBzaXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2FyZC1jb250cmFzdC1jb2xvdXIpO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxudGgge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuXFxuLnRhc2tMaXN0IHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvYXJkLWNvbG91cik7XFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tYm9hcmQtY29udHJhc3QtY29sb3VyKSAxcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2tEaXYge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0dmg7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdCxcXG4jY3JlYXRlLXRhc2sge1xcbiAgICBmbGV4OiAuMSAwIGF1dG87XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbn1cXG4gXFxuLnByb2plY3QtbW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG91cik7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG59XFxuXFxuLm1vZGFsLWNsb3NlLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxJTtcXG4gICAgcmlnaHQ6IDElO1xcblxcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLnNob3cge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsaURBQWlEO0lBQ2pELGtDQUFrQztJQUNsQyw0Q0FBNEM7SUFDNUMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixZQUFZOztJQUVaLFdBQVc7O0lBRVgsMENBQTBDOztJQUUxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7O0lBRVosY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGNBQWM7SUFDZCxhQUFhOzs7SUFHYiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QiwrQkFBK0I7SUFDL0IsOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixTQUFTOztJQUVULCtCQUErQjtJQUMvQixxREFBcUQ7SUFDckQsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCOztJQUVqQiwrQkFBK0I7SUFDL0IscURBQXFEO0lBQ3JELCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5Qyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7O0lBRWIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMENBQTBDOztJQUUxQyxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4Q0FBOEM7O0lBRTlDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUzs7SUFFVCxZQUFZO0lBQ1osV0FBVzs7SUFFWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvdXI6IHJnYig4MiwgMTUwLCAxNjUpO1xcbiAgICAtLWJhY2tncm91bmQtaGlnaGxpZ2h0LWNvbG91cjogcmdiKDEzMCwgMjIxLCAyNDApO1xcbiAgICAtLWJvYXJkLWNvbG91cjogcmdiKDI0NiwgMTk0LCAxMzkpO1xcbiAgICAtLWJvYXJkLWhpZ2hsaWdodC1jb2xvdXI6IHJnYigyNTIsIDIxNSwgMTczKTtcXG4gICAgLS1ib2FyZC1jb250cmFzdC1jb2xvdXI6IHJnYigxNjUsIDExNywgNzIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG91cik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDk1dmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgbWFyZ2luOiAxMHZoIDIwdnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG5cXG4gICAgZmxleDogMSAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tYm9hcmQtY29udHJhc3QtY29sb3VyY29sb3VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9hcmQtY29sb3VyKTtcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1ib2FyZC1jb250cmFzdC1jb2xvdXIpIDFweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udGltZURpdiB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY29udGVudDtcXG4gICAgZ2FwOiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2FyZC1jb2xvdXIpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1ib2FyZC1jb250cmFzdC1jb2xvdXIpIDFweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2FyZC1jb2xvdXIpO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1ib2FyZC1jb250cmFzdC1jb2xvdXIpIDFweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNpZGVCYXJSb3cge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiA5NnB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWJvYXJkLWNvbnRyYXN0LWNvbG91cik7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcCBlbGxpcHNpcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWJvYXJkLWNvbnRyYXN0LWNvbG91cik7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG50aCB7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5cXG4udGFza0xpc3Qge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9hcmQtY29sb3VyKTtcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1ib2FyZC1jb250cmFzdC1jb2xvdXIpIDFweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udGFza0RpdiB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDR2aDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LFxcbiNjcmVhdGUtdGFzayB7XFxuICAgIGZsZXg6IC4xIDAgYXV0bztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG91cik7XFxufVxcbiBcXG4ucHJvamVjdC1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1vZGFsLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbn1cXG5cXG4ubW9kYWwtY2xvc2UtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDElO1xcbiAgICByaWdodDogMSU7XFxuXFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuLnByb2plY3QtbW9kYWwuc2hvdyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0KHRpdGxlLCBpZCkge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4geyByZXR1cm4gdGl0bGU7IH1cbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHsgcmV0dXJuIGlkOyB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4geyB0aGlzLnRpdGxlID0gbmV3VGl0bGU7IH1cbiAgICBjb25zdCBzZXRJZCA9IChuZXdJZCkgPT4geyB0aGlzLmlkID0gbmV3SWQgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLCAgICAgICAgICAgICAgIHNldFRpdGxlLFxuICAgICAgICBnZXRJZCwgICAgICAgICAgICAgICAgICBzZXRJZFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrKHRpdGxlLCBjb21wbGV0ZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7IHJldHVybiB0aXRsZTsgfVxuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4geyByZXR1cm4gY29tcGxldGU7IH1cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4geyByZXR1cm4gZHVlRGF0ZTsgfVxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4geyByZXR1cm4gcHJpb3JpdHk7IH1cbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHsgcmV0dXJuIGRlc2NyaXB0aW9uOyB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4geyB0aGlzLnRpdGxlID0gbmV3VGl0bGU7IH1cbiAgICBjb25zdCBzZXRDb21wbGV0ZSA9IChuZXdDb21wbGV0ZSkgPT4geyB0aGlzLmNvbXBsZXRlID0gbmV3Q29tcGxldGU7IH1cbiAgICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHsgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTsgfVxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7IHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTsgfVxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjsgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSwgICAgICAgICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgZ2V0Q29tcGxldGUsICAgICAgICAgICAgc2V0Q29tcGxldGUsXG4gICAgICAgIGdldER1ZURhdGUsICAgICAgICAgICAgIHNldER1ZURhdGUsXG4gICAgICAgIGdldFByaW9yaXR5LCAgICAgICAgICAgIHNldFByaW9yaXR5LFxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgICAgICAgICBzZXREZXNjcmlwdGlvblxuICAgIH1cblxufSIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVSUZyYW1ld29yaygpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNyZWF0ZURpdih1bmRlZmluZWQsICdjb250ZW50Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAgICAgY29uc3QgYm9hcmQgPSBjcmVhdGVEaXYoJ2JvYXJkJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gICAgICAgIGNvbnN0IHNpZGVCYXIgPSBjcmVhdGVEaXYoJ3NpZGVCYXInKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5cbiAgICAgICAgY29uc3QgdGltZURpdiA9IGNyZWF0ZURpdigndGltZURpdicpO1xuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHRpbWVEaXYpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlRGl2KCd0YXNrTGlzdCcsICd0YXNrTGlzdCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRGl2KHVuZGVmaW5lZCwgJ2Zvb3RlcicsICdDb3B5cmlnaHQgJmNvcHkgVG9tbXkgTWFwcCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cblxuICAgICAgICBpbml0VGFibGVVSSh0YXNrTGlzdCk7XG4gICAgICAgIGluaXRDcmVhdGVCdXR0b25zVUkoY29udGVudCk7XG4gICAgICAgIGluaXRUaW1lQnV0dG9uc1VJKHRpbWVEaXYpO1xuICAgICAgICBpbml0UHJvamVjdEJhclVJKHNpZGVCYXIpO1xuICAgICAgICBpbml0TW9kYWxzKCk7XG5cblxuICAgIGZ1bmN0aW9uIGluaXRQcm9qZWN0QmFyVUkoc2lkZUJhcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRGl2KCdwcm9qZWN0RGl2JywgJ3Byb2plY3REaXYnKTtcbiAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0VGltZUJ1dHRvbnNVSSh0aW1lRGl2KSB7XG4gICAgICAgIGNvbnN0IGFsbEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYWxsQnV0dG9uJywgJ0FsbCcpO1xuICAgICAgICBjb25zdCBhbGxEaXYgPSBjcmVhdGVEaXYoJ3NpZGVCYXJSb3cnKTtcbiAgICAgICAgYWxsRGl2LmFwcGVuZENoaWxkKGFsbEJ1dHRvbik7XG4gICAgICAgIHRpbWVEaXYuYXBwZW5kQ2hpbGQoYWxsRGl2KTtcblxuICAgICAgICBjb25zdCBkYXlCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2RheUJ1dHRvbicsICdEYXknKTtcbiAgICAgICAgY29uc3QgZGF5RGl2ID0gY3JlYXRlRGl2KCdzaWRlQmFyUm93Jyk7XG4gICAgICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXlCdXR0b24pO1xuICAgICAgICB0aW1lRGl2LmFwcGVuZENoaWxkKGRheURpdik7XG5cbiAgICAgICAgY29uc3Qgd2Vla0J1dHRvbiA9IGNyZWF0ZUJ1dHRvbignd2Vla0J1dHRvbicsICdXZWVrJyk7XG4gICAgICAgIGNvbnN0IHdlZWtEaXYgPSBjcmVhdGVEaXYoJ3NpZGVCYXJSb3cnKTtcbiAgICAgICAgd2Vla0Rpdi5hcHBlbmRDaGlsZCh3ZWVrQnV0dG9uKTtcbiAgICAgICAgdGltZURpdi5hcHBlbmRDaGlsZCh3ZWVrRGl2KTtcblxuICAgICAgICBjb25zdCBtb250aEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignbW9udGhCdXR0b24nLCAnTW9udGgnKTtcbiAgICAgICAgY29uc3QgbW9udGhEaXYgPSBjcmVhdGVEaXYoJ3NpZGVCYXJSb3cnKTtcbiAgICAgICAgbW9udGhEaXYuYXBwZW5kQ2hpbGQobW9udGhCdXR0b24pO1xuICAgICAgICB0aW1lRGl2LmFwcGVuZENoaWxkKG1vbnRoRGl2KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0Q3JlYXRlQnV0dG9uc1VJKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uc0RpdiA9IGNyZWF0ZURpdignYnV0dG9ucycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdjcmVhdGUtcHJvamVjdCcsICdDcmVhdGUgTmV3IFByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkNyZWF0ZVByb2plY3RGb3JtKTtcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGNyZWF0ZUJ1dHRvbignY3JlYXRlLXRhc2snLCAnQ3JlYXRlIE5ldyBUYXNrJyk7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uc0Rpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdE1vZGFscygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsRGl2ID0gY3JlYXRlRGl2KCdwcm9qZWN0LW1vZGFsJywgJ3Byb2plY3QtbW9kYWwtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtcm93Jyk7XG4gICAgICAgIHByb2plY3RNb2RhbERpdi5hcHBlbmRDaGlsZCh0b3BEaXYpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSAnQ3JlYXRlIEEgTmV3IFByb2plY3QhJztcbiAgICAgICAgdG9wRGl2LmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcbiAgICAgICAgY29uc3QgcHJvamVjdENsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdwcm9qZWN0LWNsb3NlJywgJyZ0aW1lcycsICdtb2RhbC1jbG9zZS1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0Rm9ybSk7XG4gICAgICAgIHRvcERpdi5hcHBlbmQocHJvamVjdENsb3NlQnV0dG9uKTtcblxuXG4gICAgICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1yb3cnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBwVGl0bGVMYWJlbC5pbm5lckhUTUwgPSAnUHJvamVjdCBUaXRsZSc7XG4gICAgICAgIGNvbnN0IHBUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgcFRpdGxlSW5wdXQubmFtZSA9ICdwcm9qZWN0LXRpdGxlJztcbiAgICAgICAgcFRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBjb25zdCBwU3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwU3VibWl0SW5wdXQudHlwZSA9IFwic3VibWl0XCI7XG4gICAgICAgIHBTdWJtaXRJbnB1dC52YWx1ZSA9IFwiU3VibWl0XCI7XG4gICAgICAgIHBTdWJtaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFByb2plY3RGb3JtKCkpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHBUaXRsZUxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwVGl0bGVJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocFN1Ym1pdElucHV0KTtcbiAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgcHJvamVjdE1vZGFsRGl2LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChwcm9qZWN0TW9kYWxEaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRUYWJsZVVJKHRhc2tMaXN0KSB7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3RhYmxlJyk7XG4gICAgICAgIGxldCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgICAgIGxldCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRib2R5LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFibGVCb2R5Jyk7XG5cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XG5cbiAgICAgICAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgbGV0IGhlYWRpbmdfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgIGhlYWRpbmdfMS5pbm5lckhUTUwgPSBcIkNvbXBsZXRlXCI7XG4gICAgICAgIGxldCBoZWFkaW5nXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICBoZWFkaW5nXzIuaW5uZXJIVE1MID0gXCJUYXNrXCI7XG4gICAgICAgIGxldCBoZWFkaW5nXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICBoZWFkaW5nXzMuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgICAgICBsZXQgaGVhZGluZ180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgaGVhZGluZ180LmlubmVySFRNTCA9IFwiUHJvaXJpdHlcIjtcblxuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChoZWFkaW5nXzEpO1xuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChoZWFkaW5nXzIpO1xuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChoZWFkaW5nXzMpO1xuICAgICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChoZWFkaW5nXzQpO1xuICAgICAgICB0aGVhZC5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG5cbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0Rm9ybSgpe1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykpe1xuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RpdGxlKTtcbiAgICB9XG4gICAgZWxzZSBjb25zb2xlLmVycm9yKFwibnVsbGxsbGxsXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZCA9IGNyZWF0ZURpdignc2lkZUJhclJvdycpO1xuICAgICAgICBkLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihwcm9qZWN0c1tpXS5nZXRJZCgpLCBwcm9qZWN0c1tpXS5nZXRUaXRsZSgpKSk7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFibGUodGFza3MpIHtcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGVCb2R5Jyk7XG4gICAgdGFibGVCb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza3NbaV07XG4gICAgICAgIGNvbnN0IGh0bWxUYXNrID0gYFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb21wbGV0ZVwiIHZhbHVlPSR7dGFzay5nZXRDb21wbGV0ZSgpfT48L3RkPlxuICAgICAgICAgICAgPHRkPiR7dGFzay5nZXRUaXRsZSgpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+JHt0YXNrLmdldER1ZURhdGUoKX08L3RkPlxuICAgICAgICAgICAgPHRkPiR7dGFzay5nZXRQcmlvcml0eSgpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImRldGFpbHNcIiBvbmNsaWNrPVwib3BlbkRldGFpbHMoKVwiPkRldGFpbHM8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJlZGl0XCIgb25jbGljaz1cImVkaXRUYXNrKClcIj5FZGl0PC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCIgb25jbGljaz1cImRlbGV0ZVRhc2soKVwiPkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIGA7XG4gICAgICAgIHRhYmxlQm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWxUYXNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5EZXRhaWxzKCkge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuRGV0YWlscygpJyk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZWRpdFRhc2soKVwiKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzaygpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVRhc2soKVwiKTtcbn1cblxuZnVuY3Rpb24gb3BlbkNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwtY29udGFpbmVyJyk7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwtY29udGFpbmVyJyk7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xufVxuXG5mdW5jdGlvbiBvcGVuQ3JlYXRlVGFza0Zvcm0oKSB7XG5cbn1cblxuLy9DbGFzcyBuYW1lcyBwYXNzZWQgYXMgYXJyYXkgaWYgbW9yZSB0aGFuIG9uZSwgaWYgd2FudCBubyBpZCBwYXNzIHZhcmlhYmxlIGFzICcnLiBNYXliZSBhIHdheSB0byBtYWtlIGl0IHNvIEkgZG9uJ3QgbmVlZCB0byBwYXNzIGZpcnN0IHBhcmFtIHRvIHBhc3Mgc2Vjb25kP1xuZnVuY3Rpb24gY3JlYXRlRGl2KGNsYXNzTmFtZXMgPSB1bmRlZmluZWQsIGlkTmFtZSA9IHVuZGVmaW5lZCwgdGV4dCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYoaWROYW1lICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIGNsYXNzTmFtZXMgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoY2xhc3NOYW1lcyAhPT0gdW5kZWZpbmVkICYmIGNsYXNzTmFtZXMubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oaWROYW1lID0gdW5kZWZpbmVkLCB0ZXh0ID0gdW5kZWZpbmVkLCBjbGFzc05hbWVzID0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBpZihpZE5hbWUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgY2xhc3NOYW1lcyA9PT0gJ3N0cmluZycpe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcbiAgICB9XG4gICAgZWxzZSBpZihjbGFzc05hbWVzICE9PSB1bmRlZmluZWQgJiYgY2xhc3NOYW1lcy5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJyl7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBpbml0VUlGcmFtZXdvcmssIHJlbmRlclRhYmxlLCByZW5kZXJQcm9qZWN0cyB9ICBmcm9tICcuL3VpVXBkYXRlcidcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzaydcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcblxuLy8gcHJvYmFibHkgd2FubmEgdXNlIHNvbWV0aGluZyBkaWZmZXJlbnQgdG8gYW4gYXJyYXlcbmxldCB0ID0gdGFzaygnTmV3IFRhc2snLCBmYWxzZSwgJzI1LzExLzE5OTcnLCAnSElHSCcsICdUaGlzIGlzIGEgdGFzayBkZXNjcmlwdGlvbicpO1xubGV0IHQyID0gdGFzaygnTmV3IFRhc2sgMicsIHRydWUsICcyNS8xMS8xOTk3JywgJ0hJR0gnLCAnVGhpcyBpcyBhIHRhc2sgZGVzY3JpcHRpb24nKTtcbmxldCB0MyA9IHRhc2soJ05ldyBUYXNrIDMnLCBmYWxzZSwgJzI1LzExLzE5OTcnLCAnSElHSCcsICdUaGlzIGlzIGEgdGFzayBkZXNjcmlwdGlvbicpO1xuXG5sZXQgdGFza0FycmF5ID0gW3QsIHQyLCB0MyxdO1xuXG5sZXQgcDEgPSBwcm9qZWN0KCdQcm9qZWN0IDEnLCAncHJvamVjdC0xJyk7XG5sZXQgcDIgPSBwcm9qZWN0KCdQcm9qZWN0IDInLCAncHJvamVjdC0yJyk7XG5sZXQgcDMgPSBwcm9qZWN0KCdQcm9qZWN0IDMnLCAncHJvamVjdC0zJyk7XG5cbmxldCBwQXJyYXkgPSBbcDEsIHAyLCBwM107XG5cbmluaXRVSUZyYW1ld29yaygpOyBcbnJlbmRlclRhYmxlKHRhc2tBcnJheSk7XG5yZW5kZXJQcm9qZWN0cyhwQXJyYXkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9