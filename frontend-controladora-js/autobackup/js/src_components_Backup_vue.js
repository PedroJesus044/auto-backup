/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend_controladora_js"] = self["webpackChunkfrontend_controladora_js"] || []).push([["src_components_Backup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_BackupDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/BackupDataService */ \"./src/services/BackupDataService.js\");\n/* harmony import */ var _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/CodigoDataService */ \"./src/services/CodigoDataService.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"backup-view\",\n  data() {\n    return {\n      id_backup: null,\n      no_bloque: null,\n      currentTutorial: null,\n      blockList: null,\n      message: '',\n      auxBackupId: null,\n      auxNoBloque: null,\n      currentBlock: [],\n      new_line_array: [],\n      new_line_block: null,\n      x: 0,\n      y: 0\n    };\n  },\n  methods: {\n    scrollToItem(id) {\n      const targetItem = document.getElementById(id);\n      targetItem.scrollIntoView();\n    },\n    setActive(id) {\n      console.log('Holi :)', id);\n    },\n    updateLinea(linea) {\n      _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update(linea.id, linea).then(response => {\n        console.log(response.data);\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    setParalelBlock(bloque) {\n      var data = {\n        id_backup: bloque.codigo[0].id_backup,\n        no_bloque: bloque.codigo[0].no_bloque,\n        paralelo: bloque.codigo[0].paralelo\n      };\n      _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateParallelism(data).then(response => {\n        console.log(response.data);\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    async newLine(id_backup, no_bloque, index) {\n      console.log(id_backup, no_bloque, this.new_line_array[index]);\n      var data = {\n        id_backup: id_backup,\n        no_linea: null,\n        linea: this.new_line_array[index],\n        run_as_sudo: 0,\n        paralelo: 0,\n        no_bloque: no_bloque,\n        fault_tolerant: 0\n      };\n      await _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addLinea(data).then(response => {\n        console.log(response.data);\n        this.new_line_array[index] = \"\";\n        this.retreiveBlocks(this.$route.params.id);\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    newBlockAndLine(id_backup) {\n      console.log(id_backup, this.new_line_block);\n      var argumento = {\n        id_backup: id_backup,\n        linea: this.new_line_block\n      };\n      _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addBloque(argumento).then(response => {\n        console.log(\"Response del codigosdataservice.addBlk\");\n        console.log(response.data);\n        this.new_line_block = \"\";\n        this.scrollToItem('bottom');\n        this.retreiveBlocks(this.$route.params.id);\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    savePos() {\n      this.x = window.scrollX;\n      this.y = window.scrollY;\n    },\n    gotoPos() {\n      console.log(this.x, this.y);\n      window.scrollTo(this.x, this.y);\n    },\n    async deleteLine(id) {\n      //let el = document.getElementById('cuadro').lastElementChild;\n      console.log('Borranding: ', id);\n      await _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete(id).then(response => {\n        console.log(response.data);\n      }).catch(e => {\n        console.log(e);\n      });\n      this.retreiveBlocks(this.id_backup);\n      //el.scrollIntoView({behavior: 'smooth'});\n    },\n    async retreiveLinesOfBlock(id_backup, no_bloque) {\n      return await new Promise((resolve, reject) => {\n        _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findLinesOfBlock(id_backup, no_bloque).then(response => {\n          resolve(response.data);\n        }).catch(e => {\n          reject(e);\n        });\n      });\n    },\n    async retreiveBlocks(id_backup) {\n      await _services_CodigoDataService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findDifferentBackupBlocks(id_backup).then(async response => {\n        this.blockList = response.data;\n        for (let i in this.blockList) {\n          let aux = await this.retreiveLinesOfBlock(this.id_backup, this.blockList[i].distinct_bloques);\n          this.blockList[i].codigo = aux;\n        }\n        console.log(this.blockList);\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    getTutorial(id) {\n      _services_BackupDataService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(id).then(response => {\n        this.currentTutorial = response.data;\n        console.log(response.data);\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    updatePublished(status) {\n      var data = {\n        id: this.currentTutorial.id,\n        title: this.currentTutorial.title,\n        description: this.currentTutorial.description,\n        published: status\n      };\n      _services_BackupDataService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update(this.currentTutorial.id, data).then(response => {\n        console.log(response.data);\n        this.currentTutorial.published = status;\n        this.message = 'The status was updated successfully!';\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    updateTutorial() {\n      _services_BackupDataService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update(this.currentTutorial.id, this.currentTutorial).then(response => {\n        console.log(response.data);\n        this.message = 'The tutorial was updated successfully!';\n      }).catch(e => {\n        console.log(e);\n      });\n    },\n    deleteTutorial() {\n      _services_BackupDataService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(this.currentTutorial.id).then(response => {\n        console.log(response.data);\n        this.$router.push({\n          name: \"tutorials\"\n        });\n      }).catch(e => {\n        console.log(e);\n      });\n    }\n  },\n  async mounted() {\n    this.message = '';\n    this.id_backup = this.$route.params.id;\n    await this.retreiveBlocks(this.$route.params.id);\n    this.getTutorial(this.$route.params.id);\n  }\n});\n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=template&id=975b2a1c":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=template&id=975b2a1c ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  key: 0,\n  class: \"edit-form\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, \"Code lines\", -1 /* HOISTED */);\nconst _hoisted_3 = [_hoisted_2];\nconst _hoisted_4 = {\n  key: 1\n};\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Autobackup start!\", -1 /* HOISTED */);\nconst _hoisted_7 = [_hoisted_5, _hoisted_6];\nconst _hoisted_8 = {\n  key: 2,\n  class: \"edit-form\"\n};\nconst _hoisted_9 = {\n  class: \"list-group\"\n};\nconst _hoisted_10 = {\n  id: \"cuadro\"\n};\nconst _hoisted_11 = [\"onUpdate:modelValue\", \"onChange\"];\nconst _hoisted_12 = {\n  class: \"row\"\n};\nconst _hoisted_13 = [\"onChange\", \"onUpdate:modelValue\"];\nconst _hoisted_14 = [\"onChange\", \"onUpdate:modelValue\"];\nconst _hoisted_15 = [\"onChange\", \"onUpdate:modelValue\"];\nconst _hoisted_16 = [\"onClick\"];\nconst _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"16\",\n  height: \"16\",\n  fill: \"currentColor\",\n  class: \"bi bi-dash-circle\",\n  viewBox: \"0 0 16 16\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n  d: \"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n  d: \"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8\"\n})], -1 /* HOISTED */);\nconst _hoisted_18 = [_hoisted_17];\nconst _hoisted_19 = [\"onUpdate:modelValue\"];\nconst _hoisted_20 = {\n  class: \"list-group-item\"\n};\nconst _hoisted_21 = {\n  class: \"input-group\"\n};\nconst _hoisted_22 = [\"onKeypress\", \"onUpdate:modelValue\"];\nconst _hoisted_23 = {\n  class: \"pb-5\"\n};\nconst _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Añadir bloque:\")], -1 /* HOISTED */);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$data.currentTutorial ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [..._hoisted_3])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_4, [..._hoisted_7])), $data.blockList ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.blockList, (bloque, index) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      class: \"list-group-item\",\n      key: index\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Block: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(bloque.distinct_bloques), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"   \"), bloque.codigo ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"input\", {\n      key: 0,\n      \"onUpdate:modelValue\": $event => bloque.codigo[0].paralelo = $event,\n      type: \"checkbox\",\n      onChange: $event => $options.setParalelBlock(bloque)\n    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_11)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, bloque.codigo[0].paralelo]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(bloque.codigo, (codigo, index2) => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n        class: \"list-group-item\",\n        key: index2\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n        onChange: $event => $options.updateLinea(codigo),\n        type: \"checkbox\",\n        \"onUpdate:modelValue\": $event => codigo.fault_tolerant = $event,\n        style: {\n          \"accent-color\": \"orange\"\n        }\n      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, codigo.fault_tolerant]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"   \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n        onChange: $event => $options.updateLinea(codigo),\n        type: \"checkbox\",\n        \"onUpdate:modelValue\": $event => codigo.run_as_sudo = $event\n      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, codigo.run_as_sudo]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"   \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n        onChange: $event => $options.updateLinea(codigo),\n        class: \"contform-rol col\",\n        type: \"text\",\n        \"onUpdate:modelValue\": $event => codigo.linea = $event\n      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, codigo.linea]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"   \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n        type: \"button\",\n        class: \"btn btn-danger col\",\n        onClick: $event => $options.deleteLine(codigo.id)\n      }, [..._hoisted_18], 8 /* PROPS */, _hoisted_16)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n        type: \"hidden\",\n        \"onUpdate:modelValue\": $event => codigo.id = $event\n      }, null, 8 /* PROPS */, _hoisted_19), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, codigo.id]])])]);\n    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n      onKeypress: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => $options.newLine(this.id_backup, bloque.distinct_bloques, index), [\"enter\"]),\n      \"onUpdate:modelValue\": $event => $data.new_line_array[index] = $event,\n      type: \"text\",\n      class: \"form-control\",\n      placeholder: \"+ Añadir\",\n      \"aria-label\": \"Username\",\n      \"aria-describedby\": \"basic-addon1\"\n    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_22), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.new_line_array[index]]])])])])]);\n  }), 128 /* KEYED_FRAGMENT */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    id: \"add-bloque\",\n    onKeypress: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => $options.newBlockAndLine(this.id_backup), [\"enter\"])),\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.new_line_block = $event),\n    type: \"text\",\n    class: \"form-control\",\n    placeholder: \"+ Añadir\",\n    \"aria-label\": \"Username\",\n    \"aria-describedby\": \"basic-addon1\"\n  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.new_line_block]])])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/services/BackupDataService.js":
/*!*******************************************!*\
  !*** ./src/services/BackupDataService.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-common */ \"./src/http-common.js\");\n\nclass TutorialDataService {\n  getAll() {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/backups\");\n  }\n  get(id) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/backups/${id}`);\n  }\n  create(data) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/backups\", data);\n  }\n  update(id, data) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(`/backups/${id}`, data);\n  }\n  delete(id) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(`/backups/${id}`);\n  }\n  deleteAll() {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(`/tutorials`);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (new TutorialDataService());\n\n//# sourceURL=webpack://frontend-controladora-js/./src/services/BackupDataService.js?");

/***/ }),

/***/ "./src/services/CodigoDataService.js":
/*!*******************************************!*\
  !*** ./src/services/CodigoDataService.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-common */ \"./src/http-common.js\");\n\nclass TutorialDataService {\n  getAll() {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/backups\");\n  }\n  get(id) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/backups/${id}`);\n  }\n  create(data) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/backups\", data);\n  }\n  update(id, data) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(`/codigos/${id}`, data);\n  }\n  delete(id) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(`/codigos/${id}`);\n  }\n  deleteAll() {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(`/tutorials`);\n  }\n  findByTitle(title) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/tutorials?title=${title}`);\n  }\n  findDifferentBackupBlocks(id) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/codigos/diffblocksbkpid?id_backup=${id}`);\n  }\n  findLinesOfBlock(id_backup, no_bloque) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/codigos/codebackupblock?id_backup=${id_backup}&no_bloque=${no_bloque}`);\n  }\n  addLinea(data) {\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/codigos/addlinetospecificblock\", data);\n  }\n  addBloque(data) {\n    console.log(data);\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/codigos/addlinetospecificbackup`, data);\n  }\n  updateParallelism(data) {\n    console.log(data);\n    return _http_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(`/codigos/updateparallelism`, data);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (new TutorialDataService());\n\n//# sourceURL=webpack://frontend-controladora-js/./src/services/CodigoDataService.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.edit-form {\\n    max-width: 100%;\\n    margin: auto;\\n}\\n  \", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/Backup.vue":
/*!***********************************!*\
  !*** ./src/components/Backup.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Backup_vue_vue_type_template_id_975b2a1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Backup.vue?vue&type=template&id=975b2a1c */ \"./src/components/Backup.vue?vue&type=template&id=975b2a1c\");\n/* harmony import */ var _Backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backup.vue?vue&type=script&lang=js */ \"./src/components/Backup.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Backup_vue_vue_type_style_index_0_id_975b2a1c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css */ \"./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Backup_vue_vue_type_template_id_975b2a1c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/Backup.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?");

/***/ }),

/***/ "./src/components/Backup.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Backup.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backup.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?");

/***/ }),

/***/ "./src/components/Backup.vue?vue&type=template&id=975b2a1c":
/*!*****************************************************************!*\
  !*** ./src/components/Backup.vue?vue&type=template&id=975b2a1c ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_template_id_975b2a1c__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_template_id_975b2a1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backup.vue?vue&type=template&id=975b2a1c */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=template&id=975b2a1c\");\n\n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?");

/***/ }),

/***/ "./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css":
/*!*******************************************************************************!*\
  !*** ./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_style_index_0_id_975b2a1c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_style_index_0_id_975b2a1c_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_style_index_0_id_975b2a1c_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_style_index_0_id_975b2a1c_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backup_vue_vue_type_style_index_0_id_975b2a1c_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Backup.vue?vue&type=style&index=0&id=975b2a1c&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"59191c01\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://frontend-controladora-js/./src/components/Backup.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ })

}]);