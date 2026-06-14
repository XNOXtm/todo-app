/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0px;
    padding: 0px;
}

body {
    background-color: #fed4b0;
    overflow: hidden;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

ul {
    list-style: none;
}

button {
    border: none;
    cursor: pointer;
}
button:focus {
    outline: none;
}

main, #content-header, .todo {
    display: flex;
    flex-direction: row;
}

header {
    padding: 0.5em 1em;
    color: #dd4a3d;
    font-family: "Black Ops One", system-ui;
    letter-spacing: 2px;
    font-size: 1.5em;
}

#sidebar {
    background-color: #fef0e4;
    height: 100vh;
    width: 15vw;
    padding: 1em;
}
#sidebar-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
}

#add-project {
    width: 100%;
}
#add-project, #add-todo {
    padding: 1em 1.5em;
    background-color: #f15243;
    border-radius: 10px;
    color: white;
    font-weight: bold;
}

#add-project:hover,
#add-todo:hover {
    background-color: #f02c1a;
}

#add-project:active,
#add-todo:active {
    background-color: #ef7368;
}

.project {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    border-left: 2px solid #f15243;
}
.active-project,
.project:hover {
    background-color: #fce4d0 ;
}

.delete-project {
    background-color: #fef0e4;
    color: #fef0e4 ;
    font-weight: bold;
}
.active-project .delete-project,
.project:hover .delete-project {
    background-color: #fce4d0 ;
    color: #fce4d0 ;
    color: rgb(50, 50, 50);
}

#content {
    background-color: #fcfaf8 ;
    height: 100vh;
    width: 100%;
    padding: 20px;
}

#content-header {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.project-heading {
    font-size: 1.8em;
}

.todo, .todoDone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 8px 5px 8px 15px;
}

.todo {
    border: 2px solid #feb270;
}

.todoDone {
    border: 2px solid #cfcdcb;
    background-color: #f1f0ee;
}
.todoDone .title,
.todoDone .due-date {
    color: rgb(182, 180, 180);
    
}
.todoDone .checkbox,
.todoDone .editBtn {
    background-color: #f1f0ee;
    color: rgb(148, 148, 148);
}
.todoDone .description {
    color: rgb(204, 202, 202);
}

.todoDone:hover,
.todoDone:hover .checkbox,
.todoDone:hover .todo-priority,
.todoDone:hover .editBtn{
    background-color: #e7e5e3;
}

.todo:hover {
    background-color: #fef0e4;
}

.todo:hover .checkbox,
.todo:hover .todo-priority,
.todo:hover .editBtn {
    background-color: #fef0e4;
}

.checkbox,
.editBtn {
    background-color: #fcfaf8;
    padding-right: 5px;
    font-size: 20px ;
}

.title {
    font-weight: bold;
}

.todo-contents {
    display: flex;
    align-items: center;
}

.title ,
.description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 8px 0 8px;
}


.description {
    color: rgb(148, 148, 148);
    overflow-wrap: break-word;
    min-width: 0;
    width: 25vw;
}
.due-date {
    margin: 0 8px 0 8px;
}

.todo-priority {
    padding: 2px 5px;
    border-radius: 3px;
    font-weight: 100;
    background-color: #fcfaf8;
    cursor: default;
}

.todoDone .todo-priority,
.todoDone .priority-high,
.todoDone .priority-mid,
.todoDone .priority-low {
    border: 2px solid #cfcdcb;
    background-color: #f1f0ee;
    color: #cfcdcb;
}


.priority-high {
    border: 2px solid red;
    color: red;
}
.priority-mid {
    border: 2px solid orange;
    color: orange;
}
.priority-low {
    border: 2px solid green;
    color: green;
}

.delete-todo {
    margin-left: 8px;
    border-radius: 3px;
    background-color: #f02c1a;
    padding: 3px 8px;
    color: white;
}

.delete-todo:hover {
    background-color: #eb675b;
}
.delete-todo:active {
    background-color: #e81603;
}

.editBtn {
    margin-left: 18px;
    padding: 0;
}

.material-symbols-outlined {
    font-size: 20px;
}

#project-form-container,
#todo-form-container,
#todo-edit-container {
    position: fixed;
    inset: 0;
    
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
}


form {
    background-color: white;
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
}

form h2 {
    margin-bottom: 2rem;
}

label,
radio-container p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
}

input,
textarea {
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid #feb270;
    margin-bottom: 2rem;
}

#project-form input,
#todoTitle,
textarea {
    width: 400px;
}

input:focus,
textarea:focus {
    outline: none;
    box-shadow: 0 0 2px 3px #fbddc3;
}

.date-radio {
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.date-container{
    display: flex;
    flex-direction: column;
}

.radio-container label {
    margin-right: 10px;
}

.radios {
    display: flex;
    align-items: center;
}
.radios label {
    margin: 5px 12px 5px 0;
}

.radios input[type="radio"] {
    accent-color: #ec493a;
    cursor: pointer;
    transform: scale(1.2);
    margin: 8px
}
.radios input[type="radio"]:focus {
    box-shadow: none;
}

#project-form-btns,
#todo-form-btns,
#todo-edit-btns {
    margin-top: 1.5rem;
    display: flex;
    justify-content: end;
    align-items: center;
}

.cancelbtn, .submitbtn {
    padding: 10px 15px;
    font-weight: bold;
    font-size: 1rem;
    margin-right: 12px;
    border-radius: 8px;
}

.cancelbtn {
    background-color: #fff8f1;
    border: 1px solid #f9e9da;
}
.cancelbtn:hover {
    background-color: #f9e9da;
}

.submitbtn {
    background-color: #ec493a;
    color: white;
}
.submitbtn:hover {
    background-color: #d93b2c;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    background-color: #fed4b0;\n    overflow: hidden;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\nul {\n    list-style: none;\n}\n\nbutton {\n    border: none;\n    cursor: pointer;\n}\nbutton:focus {\n    outline: none;\n}\n\nmain, #content-header, .todo {\n    display: flex;\n    flex-direction: row;\n}\n\nheader {\n    padding: 0.5em 1em;\n    color: #dd4a3d;\n    font-family: \"Black Ops One\", system-ui;\n    letter-spacing: 2px;\n    font-size: 1.5em;\n}\n\n#sidebar {\n    background-color: #fef0e4;\n    height: 100vh;\n    width: 15vw;\n    padding: 1em;\n}\n#sidebar-btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px 0px;\n}\n\n#add-project {\n    width: 100%;\n}\n#add-project, #add-todo {\n    padding: 1em 1.5em;\n    background-color: #f15243;\n    border-radius: 10px;\n    color: white;\n    font-weight: bold;\n}\n\n#add-project:hover,\n#add-todo:hover {\n    background-color: #f02c1a;\n}\n\n#add-project:active,\n#add-todo:active {\n    background-color: #ef7368;\n}\n\n.project {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 10px;\n    border-radius: 5px;\n    margin-bottom: 5px;\n    border-left: 2px solid #f15243;\n}\n.active-project,\n.project:hover {\n    background-color: #fce4d0 ;\n}\n\n.delete-project {\n    background-color: #fef0e4;\n    color: #fef0e4 ;\n    font-weight: bold;\n}\n.active-project .delete-project,\n.project:hover .delete-project {\n    background-color: #fce4d0 ;\n    color: #fce4d0 ;\n    color: rgb(50, 50, 50);\n}\n\n#content {\n    background-color: #fcfaf8 ;\n    height: 100vh;\n    width: 100%;\n    padding: 20px;\n}\n\n#content-header {\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 30px;\n}\n\n.project-heading {\n    font-size: 1.8em;\n}\n\n.todo, .todoDone {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 70vw;\n    border-radius: 8px;\n    margin-bottom: 10px;\n    padding: 8px 5px 8px 15px;\n}\n\n.todo {\n    border: 2px solid #feb270;\n}\n\n.todoDone {\n    border: 2px solid #cfcdcb;\n    background-color: #f1f0ee;\n}\n.todoDone .title,\n.todoDone .due-date {\n    color: rgb(182, 180, 180);\n    \n}\n.todoDone .checkbox,\n.todoDone .editBtn {\n    background-color: #f1f0ee;\n    color: rgb(148, 148, 148);\n}\n.todoDone .description {\n    color: rgb(204, 202, 202);\n}\n\n.todoDone:hover,\n.todoDone:hover .checkbox,\n.todoDone:hover .todo-priority,\n.todoDone:hover .editBtn{\n    background-color: #e7e5e3;\n}\n\n.todo:hover {\n    background-color: #fef0e4;\n}\n\n.todo:hover .checkbox,\n.todo:hover .todo-priority,\n.todo:hover .editBtn {\n    background-color: #fef0e4;\n}\n\n.checkbox,\n.editBtn {\n    background-color: #fcfaf8;\n    padding-right: 5px;\n    font-size: 20px ;\n}\n\n.title {\n    font-weight: bold;\n}\n\n.todo-contents {\n    display: flex;\n    align-items: center;\n}\n\n.title ,\n.description {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0 8px 0 8px;\n}\n\n\n.description {\n    color: rgb(148, 148, 148);\n    overflow-wrap: break-word;\n    min-width: 0;\n    width: 25vw;\n}\n.due-date {\n    margin: 0 8px 0 8px;\n}\n\n.todo-priority {\n    padding: 2px 5px;\n    border-radius: 3px;\n    font-weight: 100;\n    background-color: #fcfaf8;\n    cursor: default;\n}\n\n.todoDone .todo-priority,\n.todoDone .priority-high,\n.todoDone .priority-mid,\n.todoDone .priority-low {\n    border: 2px solid #cfcdcb;\n    background-color: #f1f0ee;\n    color: #cfcdcb;\n}\n\n\n.priority-high {\n    border: 2px solid red;\n    color: red;\n}\n.priority-mid {\n    border: 2px solid orange;\n    color: orange;\n}\n.priority-low {\n    border: 2px solid green;\n    color: green;\n}\n\n.delete-todo {\n    margin-left: 8px;\n    border-radius: 3px;\n    background-color: #f02c1a;\n    padding: 3px 8px;\n    color: white;\n}\n\n.delete-todo:hover {\n    background-color: #eb675b;\n}\n.delete-todo:active {\n    background-color: #e81603;\n}\n\n.editBtn {\n    margin-left: 18px;\n    padding: 0;\n}\n\n.material-symbols-outlined {\n    font-size: 20px;\n}\n\n#project-form-container,\n#todo-form-container,\n#todo-edit-container {\n    position: fixed;\n    inset: 0;\n    \n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(5px);\n}\n\n\nform {\n    background-color: white;\n    border-radius: 15px;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n}\n\nform h2 {\n    margin-bottom: 2rem;\n}\n\nlabel,\nradio-container p {\n    font-size: 0.9em;\n    margin-bottom: 0.5rem;\n}\n\ninput,\ntextarea {\n    padding: 10px 15px;\n    border-radius: 10px;\n    border: 1px solid #feb270;\n    margin-bottom: 2rem;\n}\n\n#project-form input,\n#todoTitle,\ntextarea {\n    width: 400px;\n}\n\ninput:focus,\ntextarea:focus {\n    outline: none;\n    box-shadow: 0 0 2px 3px #fbddc3;\n}\n\n.date-radio {\n    display: flex;\n    justify-content: space-between;\n    align-items: start;\n}\n\n.date-container{\n    display: flex;\n    flex-direction: column;\n}\n\n.radio-container label {\n    margin-right: 10px;\n}\n\n.radios {\n    display: flex;\n    align-items: center;\n}\n.radios label {\n    margin: 5px 12px 5px 0;\n}\n\n.radios input[type=\"radio\"] {\n    accent-color: #ec493a;\n    cursor: pointer;\n    transform: scale(1.2);\n    margin: 8px\n}\n.radios input[type=\"radio\"]:focus {\n    box-shadow: none;\n}\n\n#project-form-btns,\n#todo-form-btns,\n#todo-edit-btns {\n    margin-top: 1.5rem;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n}\n\n.cancelbtn, .submitbtn {\n    padding: 10px 15px;\n    font-weight: bold;\n    font-size: 1rem;\n    margin-right: 12px;\n    border-radius: 8px;\n}\n\n.cancelbtn {\n    background-color: #fff8f1;\n    border: 1px solid #f9e9da;\n}\n.cancelbtn:hover {\n    background-color: #f9e9da;\n}\n\n.submitbtn {\n    background-color: #ec493a;\n    color: white;\n}\n.submitbtn:hover {\n    background-color: #d93b2c;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./src/models/project.js"
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/models/todo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/models/storage.js");



class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.id = crypto.randomUUID();
    }

    todoList = []

    addTodo(title, description, dueDate, priority) {
        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority);
        this.todoList.push(todo);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
    }
    
    deleteTodo(id) {
        let updated_todoList = this.todoList.filter(task => id !== task.id);
        this.todoList = updated_todoList;
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
        return this.todoList;
    }

}

/***/ },

/***/ "./src/models/project_list.js"
/*!************************************!*\
  !*** ./src/models/project_list.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/models/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/models/storage.js");



let projectList = [];

// const project = addProject("Kitchen");
// const project1 = addProject("College");
// project.addTodo(
//         "Dishes",
//         "wash in dishes in the sink",
//         "2026-06-09",
//         "high"
// );
// project.addTodo(
//         "Wash veggies", 
//         "wash the vegetables", 
//         "2026-06-09", 
//         "low"
// );
// project1.addTodo(
//         "ESE Study", 
//         "Study for the exams", 
//         "2026-06-09", 
//         "high"
// );
// project1.addTodo(
//         "Record Completion",
//         "Finish up the record writing", 
//         "2026-06-09", 
//         "mid"
// );

function addProject(projectTitle) {
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectTitle);
        projectList.push(project);
        
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
        
        return project;
};

function deleteProject(id) {
        let updated_projectList = projectList.filter(task => id !== task.id);
        projectList = updated_projectList;

        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
        
        return projectList;
};



/***/ },

/***/ "./src/models/storage.js"
/*!*******************************!*\
  !*** ./src/models/storage.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
/* harmony import */ var _project_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_list.js */ "./src/models/project_list.js");


function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(_project_list_js__WEBPACK_IMPORTED_MODULE_0__.projectList));
}

function loadProjects() {
    // localStorage.clear();
    const savedProjects = JSON.parse(localStorage.getItem('projects'));

    if (savedProjects) {
        for (let project of savedProjects) {
            const newProject = (0,_project_list_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(project.projectTitle);
            for (let todo of project.todoList){
                newProject.addTodo(todo.title, todo.description, todo.dueDate, todo.priority)
                console.log(todo.isDone)
            }
    
        }
    }

}

/***/ },

/***/ "./src/models/todo.js"
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
        this.id = crypto.randomUUID();
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }
}

/***/ },

/***/ "./src/ui/project-ui.js"
/*!******************************!*\
  !*** ./src/ui/project-ui.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var _models_project_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project_list.js */ "./src/models/project_list.js");
/* harmony import */ var _todo_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-ui.js */ "./src/ui/todo-ui.js");



function closeForm() {
    document.querySelector("#project-form-container").style.display = "none";
}

function openForm() {
    document.querySelector("#project-form-container").style.display = "flex";
}

function removeProject(projectId) {
    (0,_models_project_list_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectId);
    renderProject();
}

let activeProjectId = null;

function renderProject() {
    const projectSection = document.getElementById("project-list");
    projectSection.innerHTML = '';

    for (let project of _models_project_list_js__WEBPACK_IMPORTED_MODULE_0__.projectList) {
        const projectElement =document.createElement('li');
        projectElement.classList.add('project', 'project-default');
        
        const projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.textContent = project.projectTitle;
        projectElement.append(projectName);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-project');
        deleteBtn.textContent = "X";
        projectElement.append(deleteBtn);

        if (project.id === activeProjectId) {
            projectElement.classList.remove('project-default')
            projectElement.classList.add('active-project')
        }

        projectSection.append(projectElement);

        deleteBtn.addEventListener("click", (event) => {
            removeProject(project.id);
        });

        projectElement.addEventListener("click", (event) => {
            activeProjectId = project.id;
            renderProject();
            (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
        })

    };

}

const cancelBtn = document.querySelector("#cancelProject");
cancelBtn.addEventListener("click", closeForm);

const createProjectBtn = document.querySelector("#add-project");
createProjectBtn.addEventListener("click", openForm);


const projectForm = document.getElementById("project-form");
projectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    (0,_models_project_list_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(data.projectName);
    renderProject();
    closeForm();

    event.target.reset();
})



/***/ },

/***/ "./src/ui/todo-ui.js"
/*!***************************!*\
  !*** ./src/ui/todo-ui.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openProject)
/* harmony export */ });
/* harmony import */ var _models_project_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project_list.js */ "./src/models/project_list.js");
/* harmony import */ var _models_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/storage.js */ "./src/models/storage.js");
/* harmony import */ var _project_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-ui.js */ "./src/ui/project-ui.js");




function openForm() {
    document.querySelector("#todo-form-container").style.display = "flex";
}
function closeForm() {
    document.querySelector("#todo-form-container").style.display = "none";
}

function closeEditForm() {
    document.querySelector("#todo-edit-container").style.display = "none";
}
function openEditForm(todo,project) {
    document.querySelector("#todo-edit-container").style.display = "flex";
    document.getElementById('editTitle').value = todo.title;
    document.getElementById('editDescription').value = todo.description;
    document.getElementById('editDueDate').value = todo.dueDate;

    if (todo.priority === 'high') {
        document.getElementById('editHigh').checked = true;
    } else if (todo.priority === 'mid') {
        document.getElementById('editMid').checked = true;
    } else {
        document.getElementById('editLow').checked = true;
    };

    editTodoForm(todo,project)
}

function editTodoForm(todo,project) {
    const editForm = document.getElementById('edit-form');
    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        todo.title = data.editTitle;
        todo.description = data.editDescription;
        todo.dueDate = data.editDueDate;
        todo.priority = data.priority;
        (0,_models_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
        renderTodo(project);
        closeEditForm();
    })
}

function addTodoFrom(project) {
    const todoForm = document.getElementById('todo-form');
    todoForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        project.addTodo(data.todoTitle, data.todoDescription, data.dueDate, data.priority);
        renderTodo(project);
        closeForm();
        
        event.target.reset();
        renderTodo(project);
    })
}

function openProject(project) {
    const contentHeader = document.getElementById("content-header");
    contentHeader.innerHTML = '';
    
    const projectHeading = document.createElement('div');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = project.projectTitle;
    contentHeader.append(projectHeading);
    
    const addTodoBtn = document.createElement('button');
    addTodoBtn.id = "add-todo";
    addTodoBtn.textContent = "+ Add Todo";
    contentHeader.append(addTodoBtn);
    addTodoBtn.addEventListener("click", openForm);
    addTodoFrom(project)
    renderTodo(project);
}

function renderTodo(project) {
    const todoList = project.todoList;
    const todoSection = document.getElementById("todo-list");
    todoSection.innerHTML = '';

    for (let todo of todoList) {
        const todoElement = document.createElement('li');
        todoElement.classList.add('todo');
        
        const todoDiv1 = document.createElement('div');
        todoDiv1.classList.add('todo-contents');
        
        const todoButton = document.createElement('button');
        todoButton.classList.add('checkbox');
        todoButton.textContent = "○";
        todoDiv1.append(todoButton);
        
        const todoTitle = document.createElement('div');
        todoTitle.classList.add('title');
        todoTitle.textContent = todo.title;
        todoDiv1.append(todoTitle);
        todoElement.append(todoDiv1);
        
        const todoDescription = document.createElement('div');
        todoDescription.classList.add('description');
        todoDescription.textContent = todo.description;
        todoElement.append(todoDescription);
        
        const todoDiv2 = document.createElement('div');
        todoDiv2.classList.add('todo-contents');
        

        const todoPriorityStatus = document.createElement('button');
        todoPriorityStatus.classList.add('todo-priority');
        if (todo.priority == "high") {
            todoPriorityStatus.classList.add('priority-high');
            todoPriorityStatus.textContent = "High";
        } else if (todo.priority == "mid") {
            todoPriorityStatus.classList.add('priority-mid');
            todoPriorityStatus.textContent = "Mid";
        } else {
            todoPriorityStatus.classList.add('priority-low');
            todoPriorityStatus.textContent = "Low";
        }
        todoDiv2.append(todoPriorityStatus);


        const todoDueDate = document.createElement('div');
        todoDueDate.classList.add('due-date');
        todoDueDate.textContent = todo.dueDate;
        todoDiv2.append(todoDueDate);
        const deleteTodoBtn = document.createElement('button');
        deleteTodoBtn.classList.add('delete-todo');
        deleteTodoBtn.textContent = "Delete";
        todoDiv2.append(deleteTodoBtn);

        const editBtn = document.createElement('button');
        const editBtnIcon = document.createElement('span')
        editBtnIcon.classList.add('material-symbols-outlined');
        editBtnIcon.textContent = "Edit"
        editBtn.append(editBtnIcon)
        editBtn.classList.add('editBtn');
        todoDiv2.append(editBtn);
        todoElement.append(todoDiv2);
        
        todoSection.append(todoElement);
        
        todoButton.addEventListener("click", ()=> {
            todo.toggleDone();
            (0,_models_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
            renderTodo(project);
        });

        if (todo.isDone) {
            todoButton.textContent = "●";
            todoTitle.style.textDecoration = "line-through";
            todoElement.classList.remove('todo')
            todoElement.classList.add('todoDone')
        }else {
            todoButton.textContent = "○";
            todoElement.classList.add('todo');
        }

        editBtn.addEventListener('click', ()=> {
            openEditForm(todo,project)
        });

        deleteTodoBtn.addEventListener('click', () => {
            project.deleteTodo(todo.id);
            renderTodo(project);
        })
    }
}

const closeTodoFrom = document.querySelector('#cancelTask');
closeTodoFrom.addEventListener('click', closeForm);
const closeEditFrom = document.querySelector('#cancelEdit');
closeEditFrom.addEventListener('click', closeEditForm);







/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ui_project_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/project-ui.js */ "./src/ui/project-ui.js");
/* harmony import */ var _ui_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/todo-ui.js */ "./src/ui/todo-ui.js");
/* harmony import */ var _models_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/storage.js */ "./src/models/storage.js");






(0,_models_storage_js__WEBPACK_IMPORTED_MODULE_3__.loadProjects)();
(0,_ui_project_ui_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFFBQVEsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRUFBWTtBQUN4QjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztVQ3BMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSxtQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ007QUFDSDtBQUNzQjtBQUNJOztBQUVuRCxnRUFBWTtBQUNaLDZEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2RlbHMvcHJvamVjdF9saXN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGVscy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpL3Byb2plY3QtdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWkvdG9kby11aS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkNGIwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxubWFpbiwgI2NvbnRlbnQtaGVhZGVyLCAudG9kbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBjb2xvcjogI2RkNGEzZDtcbiAgICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIHN5c3RlbS11aTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbiNzaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMGU0O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgcGFkZGluZzogMWVtO1xufVxuI3NpZGViYXItYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuI2FkZC1wcm9qZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiNhZGQtcHJvamVjdCwgI2FkZC10b2RvIHtcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNTI0MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2FkZC1wcm9qZWN0OmhvdmVyLFxuI2FkZC10b2RvOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAyYzFhO1xufVxuXG4jYWRkLXByb2plY3Q6YWN0aXZlLFxuI2FkZC10b2RvOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNzM2ODtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2YxNTI0Mztcbn1cbi5hY3RpdmUtcHJvamVjdCxcbi5wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNGQwIDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMGU0O1xuICAgIGNvbG9yOiAjZmVmMGU0IDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hY3RpdmUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QsXG4ucHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZDAgO1xuICAgIGNvbG9yOiAjZmNlNGQwIDtcbiAgICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xufVxuXG4jY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmOCA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jY29udGVudC1oZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5wcm9qZWN0LWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbi50b2RvLCAudG9kb0RvbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDVweCA4cHggMTVweDtcbn1cblxuLnRvZG8ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZWIyNzA7XG59XG5cbi50b2RvRG9uZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NmY2RjYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGVlO1xufVxuLnRvZG9Eb25lIC50aXRsZSxcbi50b2RvRG9uZSAuZHVlLWRhdGUge1xuICAgIGNvbG9yOiByZ2IoMTgyLCAxODAsIDE4MCk7XG4gICAgXG59XG4udG9kb0RvbmUgLmNoZWNrYm94LFxuLnRvZG9Eb25lIC5lZGl0QnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGVlO1xuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XG59XG4udG9kb0RvbmUgLmRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogcmdiKDIwNCwgMjAyLCAyMDIpO1xufVxuXG4udG9kb0RvbmU6aG92ZXIsXG4udG9kb0RvbmU6aG92ZXIgLmNoZWNrYm94LFxuLnRvZG9Eb25lOmhvdmVyIC50b2RvLXByaW9yaXR5LFxuLnRvZG9Eb25lOmhvdmVyIC5lZGl0QnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U1ZTM7XG59XG5cbi50b2RvOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMGU0O1xufVxuXG4udG9kbzpob3ZlciAuY2hlY2tib3gsXG4udG9kbzpob3ZlciAudG9kby1wcmlvcml0eSxcbi50b2RvOmhvdmVyIC5lZGl0QnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMGU0O1xufVxuXG4uY2hlY2tib3gsXG4uZWRpdEJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmODtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4IDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRvZG8tY29udGVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlICxcbi5kZXNjcmlwdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbjogMCA4cHggMCA4cHg7XG59XG5cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAyNXZ3O1xufVxuLmR1ZS1kYXRlIHtcbiAgICBtYXJnaW46IDAgOHB4IDAgOHB4O1xufVxuXG4udG9kby1wcmlvcml0eSB7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWY4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnRvZG9Eb25lIC50b2RvLXByaW9yaXR5LFxuLnRvZG9Eb25lIC5wcmlvcml0eS1oaWdoLFxuLnRvZG9Eb25lIC5wcmlvcml0eS1taWQsXG4udG9kb0RvbmUgLnByaW9yaXR5LWxvdyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NmY2RjYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMGVlO1xuICAgIGNvbG9yOiAjY2ZjZGNiO1xufVxuXG5cbi5wcmlvcml0eS1oaWdoIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5wcmlvcml0eS1taWQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuLnByaW9yaXR5LWxvdyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uZGVsZXRlLXRvZG8ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDJjMWE7XG4gICAgcGFkZGluZzogM3B4IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxldGUtdG9kbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViNjc1Yjtcbn1cbi5kZWxldGUtdG9kbzphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODE2MDM7XG59XG5cbi5lZGl0QnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lcixcbiN0b2RvLWZvcm0tY29udGFpbmVyLFxuI3RvZG8tZWRpdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBpbnNldDogMDtcbiAgICBcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG5cbmZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0gaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbmxhYmVsLFxucmFkaW8tY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmViMjcwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbiNwcm9qZWN0LWZvcm0gaW5wdXQsXG4jdG9kb1RpdGxlLFxudGV4dGFyZWEge1xuICAgIHdpZHRoOiA0MDBweDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDNweCAjZmJkZGMzO1xufVxuXG4uZGF0ZS1yYWRpbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uZGF0ZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucmFkaW8tY29udGFpbmVyIGxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yYWRpb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yYWRpb3MgbGFiZWwge1xuICAgIG1hcmdpbjogNXB4IDEycHggNXB4IDA7XG59XG5cbi5yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBhY2NlbnQtY29sb3I6ICNlYzQ5M2E7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBtYXJnaW46IDhweFxufVxuLnJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiNwcm9qZWN0LWZvcm0tYnRucyxcbiN0b2RvLWZvcm0tYnRucyxcbiN0b2RvLWVkaXQtYnRucyB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhbmNlbGJ0biwgLnN1Ym1pdGJ0biB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uY2FuY2VsYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGYxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWU5ZGE7XG59XG4uY2FuY2VsYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllOWRhO1xufVxuXG4uc3VibWl0YnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM0OTNhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdWJtaXRidG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTNiMmM7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5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MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkNGIwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5tYWluLCAjY29udGVudC1oZWFkZXIsIC50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICBjb2xvcjogI2RkNGEzZDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCbGFjayBPcHMgT25lXFxcIiwgc3lzdGVtLXVpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWYwZTQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcbiNzaWRlYmFyLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2FkZC1wcm9qZWN0LCAjYWRkLXRvZG8ge1xcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTUyNDM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4jYWRkLXRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAyYzFhO1xcbn1cXG5cXG4jYWRkLXByb2plY3Q6YWN0aXZlLFxcbiNhZGQtdG9kbzphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3MzY4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmMTUyNDM7XFxufVxcbi5hY3RpdmUtcHJvamVjdCxcXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZDAgO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMGU0O1xcbiAgICBjb2xvcjogI2ZlZjBlNCA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWN0aXZlLXByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LFxcbi5wcm9qZWN0OmhvdmVyIC5kZWxldGUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U0ZDAgO1xcbiAgICBjb2xvcjogI2ZjZTRkMCA7XFxuICAgIGNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmOCA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jY29udGVudC1oZWFkZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4udG9kbywgLnRvZG9Eb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA4cHggNXB4IDhweCAxNXB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZWIyNzA7XFxufVxcblxcbi50b2RvRG9uZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjZmNkY2I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZWU7XFxufVxcbi50b2RvRG9uZSAudGl0bGUsXFxuLnRvZG9Eb25lIC5kdWUtZGF0ZSB7XFxuICAgIGNvbG9yOiByZ2IoMTgyLCAxODAsIDE4MCk7XFxuICAgIFxcbn1cXG4udG9kb0RvbmUgLmNoZWNrYm94LFxcbi50b2RvRG9uZSAuZWRpdEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZWU7XFxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XFxufVxcbi50b2RvRG9uZSAuZGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogcmdiKDIwNCwgMjAyLCAyMDIpO1xcbn1cXG5cXG4udG9kb0RvbmU6aG92ZXIsXFxuLnRvZG9Eb25lOmhvdmVyIC5jaGVja2JveCxcXG4udG9kb0RvbmU6aG92ZXIgLnRvZG8tcHJpb3JpdHksXFxuLnRvZG9Eb25lOmhvdmVyIC5lZGl0QnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNWUzO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWYwZTQ7XFxufVxcblxcbi50b2RvOmhvdmVyIC5jaGVja2JveCxcXG4udG9kbzpob3ZlciAudG9kby1wcmlvcml0eSxcXG4udG9kbzpob3ZlciAuZWRpdEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWYwZTQ7XFxufVxcblxcbi5jaGVja2JveCxcXG4uZWRpdEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZjg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4IDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvLWNvbnRlbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlICxcXG4uZGVzY3JpcHRpb24ge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAwIDhweCAwIDhweDtcXG59XFxuXFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICB3aWR0aDogMjV2dztcXG59XFxuLmR1ZS1kYXRlIHtcXG4gICAgbWFyZ2luOiAwIDhweCAwIDhweDtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZjg7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnRvZG9Eb25lIC50b2RvLXByaW9yaXR5LFxcbi50b2RvRG9uZSAucHJpb3JpdHktaGlnaCxcXG4udG9kb0RvbmUgLnByaW9yaXR5LW1pZCxcXG4udG9kb0RvbmUgLnByaW9yaXR5LWxvdyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjZmNkY2I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZWU7XFxuICAgIGNvbG9yOiAjY2ZjZGNiO1xcbn1cXG5cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLnByaW9yaXR5LW1pZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG59XFxuLnByaW9yaXR5LWxvdyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5kZWxldGUtdG9kbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwMmMxYTtcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI2NzViO1xcbn1cXG4uZGVsZXRlLXRvZG86YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTYwMztcXG59XFxuXFxuLmVkaXRCdG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMThweDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyLFxcbiN0b2RvLWZvcm0tY29udGFpbmVyLFxcbiN0b2RvLWVkaXQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG5cXG5mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0gaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5sYWJlbCxcXG5yYWRpby1jb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZWIyNzA7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gaW5wdXQsXFxuI3RvZG9UaXRsZSxcXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDNweCAjZmJkZGMzO1xcbn1cXG5cXG4uZGF0ZS1yYWRpbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yYWRpby1jb250YWluZXIgbGFiZWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5yYWRpb3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmFkaW9zIGxhYmVsIHtcXG4gICAgbWFyZ2luOiA1cHggMTJweCA1cHggMDtcXG59XFxuXFxuLnJhZGlvcyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYWNjZW50LWNvbG9yOiAjZWM0OTNhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgbWFyZ2luOiA4cHhcXG59XFxuLnJhZGlvcyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zLFxcbiN0b2RvLWZvcm0tYnRucyxcXG4jdG9kby1lZGl0LWJ0bnMge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FuY2VsYnRuLCAuc3VibWl0YnRuIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNhbmNlbGJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZjE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWU5ZGE7XFxufVxcbi5jYW5jZWxidG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjllOWRhO1xcbn1cXG5cXG4uc3VibWl0YnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjNDkzYTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uc3VibWl0YnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5M2IyYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCB7IHNhdmVQcm9qZWN0cyB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgICAgICB0aGlzLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICB9XG5cbiAgICB0b2RvTGlzdCA9IFtdXG5cbiAgICBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGVUb2RvKGlkKSB7XG4gICAgICAgIGxldCB1cGRhdGVkX3RvZG9MaXN0ID0gdGhpcy50b2RvTGlzdC5maWx0ZXIodGFzayA9PiBpZCAhPT0gdGFzay5pZCk7XG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSB1cGRhdGVkX3RvZG9MaXN0O1xuICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0xpc3Q7XG4gICAgfVxuXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5leHBvcnQgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbi8vIGNvbnN0IHByb2plY3QgPSBhZGRQcm9qZWN0KFwiS2l0Y2hlblwiKTtcbi8vIGNvbnN0IHByb2plY3QxID0gYWRkUHJvamVjdChcIkNvbGxlZ2VcIik7XG4vLyBwcm9qZWN0LmFkZFRvZG8oXG4vLyAgICAgICAgIFwiRGlzaGVzXCIsXG4vLyAgICAgICAgIFwid2FzaCBpbiBkaXNoZXMgaW4gdGhlIHNpbmtcIixcbi8vICAgICAgICAgXCIyMDI2LTA2LTA5XCIsXG4vLyAgICAgICAgIFwiaGlnaFwiXG4vLyApO1xuLy8gcHJvamVjdC5hZGRUb2RvKFxuLy8gICAgICAgICBcIldhc2ggdmVnZ2llc1wiLCBcbi8vICAgICAgICAgXCJ3YXNoIHRoZSB2ZWdldGFibGVzXCIsIFxuLy8gICAgICAgICBcIjIwMjYtMDYtMDlcIiwgXG4vLyAgICAgICAgIFwibG93XCJcbi8vICk7XG4vLyBwcm9qZWN0MS5hZGRUb2RvKFxuLy8gICAgICAgICBcIkVTRSBTdHVkeVwiLCBcbi8vICAgICAgICAgXCJTdHVkeSBmb3IgdGhlIGV4YW1zXCIsIFxuLy8gICAgICAgICBcIjIwMjYtMDYtMDlcIiwgXG4vLyAgICAgICAgIFwiaGlnaFwiXG4vLyApO1xuLy8gcHJvamVjdDEuYWRkVG9kbyhcbi8vICAgICAgICAgXCJSZWNvcmQgQ29tcGxldGlvblwiLFxuLy8gICAgICAgICBcIkZpbmlzaCB1cCB0aGUgcmVjb3JkIHdyaXRpbmdcIiwgXG4vLyAgICAgICAgIFwiMjAyNi0wNi0wOVwiLCBcbi8vICAgICAgICAgXCJtaWRcIlxuLy8gKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgICAgIGxldCB1cGRhdGVkX3Byb2plY3RMaXN0ID0gcHJvamVjdExpc3QuZmlsdGVyKHRhc2sgPT4gaWQgIT09IHRhc2suaWQpO1xuICAgICAgICBwcm9qZWN0TGlzdCA9IHVwZGF0ZWRfcHJvamVjdExpc3Q7XG5cbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7XG59O1xuXG4iLCJpbXBvcnQgeyBhZGRQcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RfbGlzdC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXG4gICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gYWRkUHJvamVjdChwcm9qZWN0LnByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9kb0xpc3Qpe1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuYWRkVG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZURhdGUsIHRvZG8ucHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kby5pc0RvbmUpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIH1cblxuICAgIHRvZ2dsZURvbmUoKSB7XG4gICAgICAgIHRoaXMuaXNEb25lID0gIXRoaXMuaXNEb25lO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCwgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdF9saXN0LmpzXCI7XG5pbXBvcnQgb3BlblByb2plY3QgZnJvbSBcIi4vdG9kby11aS5qc1wiO1xuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcmVuZGVyUHJvamVjdCgpO1xufVxuXG5sZXQgYWN0aXZlUHJvamVjdElkID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgIHByb2plY3RTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdwcm9qZWN0LWRlZmF1bHQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmQocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmQoZGVsZXRlQnRuKTtcblxuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gYWN0aXZlUHJvamVjdElkKSB7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LWRlZmF1bHQnKVxuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKHByb2plY3RFbGVtZW50KTtcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QoKTtcbiAgICAgICAgICAgIG9wZW5Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KVxuXG4gICAgfTtcblxufVxuXG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFByb2plY3RcIik7XG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkZvcm0pO1xuXG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XG5cbiAgICBhZGRQcm9qZWN0KGRhdGEucHJvamVjdE5hbWUpO1xuICAgIHJlbmRlclByb2plY3QoKTtcbiAgICBjbG9zZUZvcm0oKTtcblxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xufSlcblxuIiwiaW1wb3J0IHsgcHJvamVjdExpc3QsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RfbGlzdC5qc1wiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzIH0gZnJvbSBcIi4uL21vZGVscy9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LXVpLmpzXCI7XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1mb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWZvcm0tY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0Rm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZWRpdC1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuZnVuY3Rpb24gb3BlbkVkaXRGb3JtKHRvZG8scHJvamVjdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1lZGl0LWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUaXRsZScpLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdERlc2NyaXB0aW9uJykudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RHVlRGF0ZScpLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuXG4gICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEhpZ2gnKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdtaWQnKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0TWlkJykuY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRMb3cnKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgZWRpdFRvZG9Gb3JtKHRvZG8scHJvamVjdClcbn1cblxuZnVuY3Rpb24gZWRpdFRvZG9Gb3JtKHRvZG8scHJvamVjdCkge1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZm9ybScpO1xuICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XG5cbiAgICAgICAgdG9kby50aXRsZSA9IGRhdGEuZWRpdFRpdGxlO1xuICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGF0YS5lZGl0RGVzY3JpcHRpb247XG4gICAgICAgIHRvZG8uZHVlRGF0ZSA9IGRhdGEuZWRpdER1ZURhdGU7XG4gICAgICAgIHRvZG8ucHJpb3JpdHkgPSBkYXRhLnByaW9yaXR5O1xuICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICAgICAgcmVuZGVyVG9kbyhwcm9qZWN0KTtcbiAgICAgICAgY2xvc2VFZGl0Rm9ybSgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Gcm9tKHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCk9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LmFkZFRvZG8oZGF0YS50b2RvVGl0bGUsIGRhdGEudG9kb0Rlc2NyaXB0aW9uLCBkYXRhLmR1ZURhdGUsIGRhdGEucHJpb3JpdHkpO1xuICAgICAgICByZW5kZXJUb2RvKHByb2plY3QpO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgICAgICByZW5kZXJUb2RvKHByb2plY3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5Qcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWhlYWRlclwiKTtcbiAgICBjb250ZW50SGVhZGVyLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkaW5nJyk7XG4gICAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBjb250ZW50SGVhZGVyLmFwcGVuZChwcm9qZWN0SGVhZGluZyk7XG4gICAgXG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRvZG9CdG4uaWQgPSBcImFkZC10b2RvXCI7XG4gICAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVG9kb1wiO1xuICAgIGNvbnRlbnRIZWFkZXIuYXBwZW5kKGFkZFRvZG9CdG4pO1xuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Gb3JtKTtcbiAgICBhZGRUb2RvRnJvbShwcm9qZWN0KVxuICAgIHJlbmRlclRvZG8ocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG8ocHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdC50b2RvTGlzdDtcbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0XCIpO1xuICAgIHRvZG9TZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgdG9kbyBvZiB0b2RvTGlzdCkge1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9EaXYxLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudHMnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCLil4tcIjtcbiAgICAgICAgdG9kb0RpdjEuYXBwZW5kKHRvZG9CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0b2RvRGl2MS5hcHBlbmQodG9kb1RpdGxlKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kKHRvZG9EaXYxKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2RvRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRGl2Mi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnRzJyk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvUHJpb3JpdHlTdGF0dXMuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xuICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PSBcImhpZ2hcIikge1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gnKTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eVN0YXR1cy50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gXCJtaWRcIikge1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1pZCcpO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5U3RhdHVzLnRleHRDb250ZW50ID0gXCJNaWRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sb3cnKTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eVN0YXR1cy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0RpdjIuYXBwZW5kKHRvZG9Qcmlvcml0eVN0YXR1cyk7XG5cblxuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgdG9kb0RpdjIuYXBwZW5kKHRvZG9EdWVEYXRlKTtcbiAgICAgICAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgICAgIGRlbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICB0b2RvRGl2Mi5hcHBlbmQoZGVsZXRlVG9kb0J0bik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBlZGl0QnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBlZGl0QnRuSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgICAgIGVkaXRCdG5JY29uLnRleHRDb250ZW50ID0gXCJFZGl0XCJcbiAgICAgICAgZWRpdEJ0bi5hcHBlbmQoZWRpdEJ0bkljb24pXG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdEJ0bicpO1xuICAgICAgICB0b2RvRGl2Mi5hcHBlbmQoZWRpdEJ0bik7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZCh0b2RvRGl2Mik7XG4gICAgICAgIFxuICAgICAgICB0b2RvU2VjdGlvbi5hcHBlbmQodG9kb0VsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgICAgICAgICB0b2RvLnRvZ2dsZURvbmUoKTtcbiAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgICAgICAgICAgcmVuZGVyVG9kbyhwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRvZG8uaXNEb25lKSB7XG4gICAgICAgICAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCLil49cIjtcbiAgICAgICAgICAgIHRvZG9UaXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2RvJylcbiAgICAgICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9Eb25lJylcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwi4peLXCI7XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICBvcGVuRWRpdEZvcm0odG9kbyxwcm9qZWN0KVxuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG8uaWQpO1xuICAgICAgICAgICAgcmVuZGVyVG9kbyhwcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IGNsb3NlVG9kb0Zyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsVGFzaycpO1xuY2xvc2VUb2RvRnJvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XG5jb25zdCBjbG9zZUVkaXRGcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbEVkaXQnKTtcbmNsb3NlRWRpdEZyb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUVkaXRGb3JtKTtcblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi91aS9wcm9qZWN0LXVpLmpzXCI7XG5pbXBvcnQgXCIuL3VpL3RvZG8tdWkuanNcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0IGZyb20gXCIuL3VpL3Byb2plY3QtdWkuanNcIjtcbmltcG9ydCB7IGxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL21vZGVscy9zdG9yYWdlLmpzXCI7XG5cbmxvYWRQcm9qZWN0cygpO1xucmVuZGVyUHJvamVjdCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=