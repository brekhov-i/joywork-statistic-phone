/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/button.js":
/*!*************************************!*\
  !*** ./src/js/components/button.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('sp-button', {
  props: ['color'],
  emits: [],
  template: `
    <button 
      class="button"
      :class="getClass"
    >
        <slot />
    </button>
  `,
  data: function () {
    return {};
  },
  computed: {
    getClass: function () {
      return this.color ? `button--${this.color}` : 'button--primary';
    }
  }
}));

/***/ }),

/***/ "./src/js/components/checkbox.js":
/*!***************************************!*\
  !*** ./src/js/components/checkbox.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('sp-checkbox', {
  props: ['positionlabel', 'title', 'id'],
  emits: ['check'],
  template: `
    <label 
      class="checkbox"
      :class="classObj"
      :for="getId"
     >
        <span class="checkbox__label">{{ title }}</span>
        <input type="checkbox" class="checkbox__input" v-model="check" :id="getId" @change="$emit('check', check)">
        <div class="checkbox__dot">
            <div class="dot"></div>
        </div> 
    </label>
  `,
  data: function () {
    return {
      check: false
    };
  },
  computed: {
    classObj: function () {
      return this.positionlabel ? `checkbox--${this.positionlabel}` : 'checkbox--left';
    },
    getId: function () {
      return this.id ? `checkbox${this.id}` : 'checkbox';
    }
  },
  methods: {}
}));

/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('sp-dropdown', {
  props: ['options', 'title', 'icon', 'value'],
  emits: ['selected'],
  template: `
    <div 
      class="dropdown"
      :class="{
        'dropdown--openList': isOpenList 
      }"
      ref="dropdown"
    >
        <div class="dropdown__label" v-if="title">{{ title }}</div>
        <div class="input dropdown__input" @click="isOpenList = !isOpenList">
            {{ selectedItem.title }}
            <div class="dropdown__input-icon">
                <slot name="icon" /> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" v-if="!this.$slots.icon">
                  <path d="M15.375 7.875H0.625C0.279813 7.875 0 8.15481 0 8.5C0 8.84519 0.279813 9.125 0.625 9.125H15.375C15.7202 9.125 16 8.84519 16 8.5C16 8.15481 15.7202 7.875 15.375 7.875Z" fill="#9E9E9E"/>
                  <path d="M15.375 2.875H0.625C0.279813 2.875 0 3.15481 0 3.5C0 3.84519 0.279813 4.125 0.625 4.125H15.375C15.7202 4.125 16 3.84519 16 3.5C16 3.15481 15.7202 2.875 15.375 2.875Z" fill="#9E9E9E"/>
                  <path d="M15.375 12.875H0.625C0.279813 12.875 0 13.1548 0 13.5C0 13.8452 0.279813 14.125 0.625 14.125H15.375C15.7202 14.125 16 13.8452 16 13.5C16 13.1548 15.7202 12.875 15.375 12.875Z" fill="#9E9E9E"/>
                </svg>
            </div>
        </div>
        <ul 
          class="dropdown__list"
          :class="{
            'dropdown__list--open': isOpenList
          }"
        >
            <li 
              class="list-item" 
              v-for="item in options" 
              :key="item.value"
              @click="selectItem(item)"
              :class="{
                'list-item--active': item.value === selectedItem.value
              }"
            >{{ item.title }}</li>
        </ul>
    </div>
  `,
  data: function () {
    return {
      isOpenList: false,
      selectedItem: this.value
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.$emit('selected', item);
      this.isOpenList = !this.isOpenList;
    }
  },
  mounted: function () {
    document.addEventListener('click', e => {
      if (!e.composedPath().includes(this.$refs.dropdown)) this.isOpenList = false;
    });
  }
}));

/***/ }),

/***/ "./src/js/components/input.js":
/*!************************************!*\
  !*** ./src/js/components/input.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Vue.use(VueMask.VueMaskPlugin);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('sp-input', {
  props: ['title', 'mask', 'value'],
  emits: ['input'],
  template: `
    <div class="sp-input">
        <div class="sp-input__label">{{ title }}</div>
        <input type="text" class="input sp-input__field" v-model="inputV" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (___) ___ - __ - __" @input="onInput(inputV)">
    </div>
  `,
  data: function () {
    return {
      inputV: ""
    };
  },
  computed: {
    valueInput: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    onInput(value) {
      const numberPattern = /\d+/g;
      const val = '+' + value.match(numberPattern).join('');
      this.$emit('input', val);
    }
  }
}));

/***/ }),

/***/ "./src/js/components/table.js":
/*!************************************!*\
  !*** ./src/js/components/table.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('sp-table', {
  props: ['data'],
  emits: [],
  template: `
    <div class="table">
      <div class="table__wrapper">
        <div class="table__head">
            <div class="table__row">
                <div class="table__col" v-for="field in fields" :key="field.name">{{ field.title }}</div>
            </div>
        </div>
        <div class="table__body">
            <div class="table__row" v-for="item in data" :key="item.id">
                <div class="table__col" v-for="col in fields" :key="col.name">
                  <template v-if="col.name === 'phoneInput'">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="item.type === 'input'">
                      <path d="M12.3594 6.01561H4.01625L6.16437 3.86749C6.26109 3.77737 6.33866 3.66869 6.39246 3.54794C6.44626 3.4272 6.47519 3.29685 6.47752 3.16467C6.47986 3.0325 6.45554 2.90121 6.40603 2.77864C6.35652 2.65607 6.28284 2.54472 6.18936 2.45125C6.09589 2.35778 5.98454 2.28409 5.86197 2.23458C5.7394 2.18507 5.60811 2.16075 5.47594 2.16309C5.34376 2.16542 5.21342 2.19435 5.09267 2.24815C4.97192 2.30195 4.86324 2.37952 4.77312 2.47624L0.951561 6.2978C0.857455 6.38882 0.78277 6.49797 0.732015 6.61866C0.681259 6.73935 0.655485 6.86907 0.656248 6.99999C0.655252 7.13035 0.680278 7.25961 0.72986 7.38018C0.779441 7.50075 0.852582 7.61022 0.944998 7.70217L4.77312 11.5303C4.86324 11.627 4.97192 11.7046 5.09267 11.7584C5.21342 11.8122 5.34376 11.8411 5.47594 11.8435C5.60811 11.8458 5.7394 11.8215 5.86197 11.772C5.98454 11.7225 6.09589 11.6488 6.18936 11.5553C6.28284 11.4618 6.35652 11.3505 6.40603 11.2279C6.45554 11.1053 6.47986 10.974 6.47752 10.8419C6.47519 10.7097 6.44626 10.5793 6.39246 10.4586C6.33866 10.3378 6.26109 10.2292 6.16437 10.1391L4.01625 7.98436H12.3594C12.6204 7.98436 12.8708 7.88065 13.0554 7.69605C13.24 7.51144 13.3437 7.26106 13.3437 6.99999C13.3437 6.73891 13.24 6.48854 13.0554 6.30393C12.8708 6.11932 12.6204 6.01561 12.3594 6.01561Z" fill="#4CAF50"/>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                      <path d="M1.64063 7.98439L9.98375 7.98439L7.83563 10.1325C7.73891 10.2226 7.66134 10.3313 7.60754 10.4521C7.55374 10.5728 7.52481 10.7032 7.52248 10.8353C7.52014 10.9675 7.54446 11.0988 7.59397 11.2214C7.64348 11.3439 7.71716 11.4553 7.81064 11.5487C7.90411 11.6422 8.01546 11.7159 8.13803 11.7654C8.2606 11.8149 8.39189 11.8392 8.52406 11.8369C8.65624 11.8346 8.78658 11.8057 8.90733 11.7518C9.02808 11.698 9.13676 11.6205 9.22688 11.5238L13.0484 7.7022C13.1425 7.61118 13.2172 7.50203 13.268 7.38134C13.3187 7.26065 13.3445 7.13093 13.3438 7.00001C13.3447 6.86965 13.3197 6.74039 13.2701 6.61982C13.2206 6.49925 13.1474 6.38978 13.055 6.29783L9.22688 2.4697C9.13676 2.37299 9.02808 2.29541 8.90733 2.24161C8.78658 2.18781 8.65624 2.15888 8.52406 2.15655C8.39189 2.15422 8.2606 2.17853 8.13803 2.22804C8.01546 2.27755 7.90411 2.35124 7.81064 2.44471C7.71716 2.53819 7.64348 2.64953 7.59397 2.7721C7.54446 2.89467 7.52014 3.02596 7.52248 3.15814C7.52481 3.29031 7.55374 3.42066 7.60754 3.54141C7.66134 3.66216 7.73891 3.77083 7.83563 3.86095L9.98375 6.01564L1.64063 6.01564C1.37955 6.01564 1.12918 6.11935 0.944569 6.30395C0.759963 6.48856 0.656252 6.73894 0.656252 7.00001C0.656252 7.26109 0.759963 7.51146 0.944569 7.69607C1.12918 7.88068 1.37955 7.98439 1.64063 7.98439Z" fill="#FF3838"/>
                    </svg>
                    <span>{{ getPhoneInput(item) }}</span>
                  </template>
                  <template v-else-if="col.name === 'status'">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="item[col.name].name === 'answered'">
                      <path d="M16.5336 13.14C16.0419 12.7277 13.1586 10.9018 12.6793 10.9856C12.4543 11.0256 12.2822 11.2174 11.8215 11.7669C11.6085 12.0374 11.3745 12.2908 11.1217 12.5246C10.6587 12.4128 10.2105 12.2466 9.78638 12.0296C8.12322 11.2199 6.77961 9.87589 5.97038 8.2125C5.75338 7.78841 5.58723 7.34018 5.47538 6.87712C5.70922 6.62439 5.96256 6.39042 6.23306 6.17738C6.78206 5.71669 6.97444 5.54569 7.01438 5.31956C7.09819 4.83919 5.27063 1.95694 4.86 1.46531C4.68788 1.26169 4.5315 1.125 4.33125 1.125C3.75075 1.125 1.125 4.37175 1.125 4.7925C1.125 4.82681 1.18125 8.20688 5.45006 12.5499C9.79313 16.8188 13.1732 16.875 13.2075 16.875C13.6283 16.875 16.875 14.2492 16.875 13.6687C16.875 13.4685 16.7383 13.3121 16.5336 13.14Z" fill="#4CAF50"/>
                      <path d="M12.9375 8.4375H14.0625C14.0612 7.24444 13.5866 6.10062 12.743 5.257C11.8994 4.41338 10.7556 3.93884 9.5625 3.9375V5.0625C10.4573 5.06339 11.3153 5.41926 11.948 6.052C12.5807 6.68474 12.9366 7.54267 12.9375 8.4375Z" fill="#4CAF50"/>
                      <path d="M15.75 8.4375H16.875C16.8728 6.49879 16.1016 4.64012 14.7308 3.26925C13.3599 1.89837 11.5012 1.12723 9.5625 1.125V2.25C11.2029 2.25194 12.7756 2.90445 13.9356 4.06441C15.0955 5.22438 15.7481 6.79707 15.75 8.4375Z" fill="#4CAF50"/>
                    </svg>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                      <path d="M16.5336 13.14C16.0419 12.7277 13.1586 10.9018 12.6793 10.9856C12.4543 11.0256 12.2822 11.2174 11.8215 11.7669C11.6085 12.0374 11.3745 12.2908 11.1217 12.5246C10.6587 12.4128 10.2105 12.2466 9.78638 12.0296C8.12322 11.2199 6.77961 9.87589 5.97038 8.2125C5.75338 7.78841 5.58723 7.34018 5.47538 6.87712C5.70922 6.62439 5.96256 6.39042 6.23306 6.17738C6.78206 5.71669 6.97444 5.54569 7.01438 5.31956C7.09819 4.83919 5.27063 1.95694 4.86 1.46531C4.68788 1.26169 4.5315 1.125 4.33125 1.125C3.75075 1.125 1.125 4.37175 1.125 4.7925C1.125 4.82681 1.18125 8.20688 5.45006 12.5499C9.79313 16.8188 13.1732 16.875 13.2075 16.875C13.6283 16.875 16.875 14.2492 16.875 13.6687C16.875 13.4685 16.7383 13.3121 16.5336 13.14Z" fill="#FF3838"/>
                      <path d="M10.5227 8.2727L12.6562 6.13914L14.7898 8.2727L15.5852 7.47733L13.4516 5.34376L15.5852 3.2102L14.7898 2.41483L12.6562 4.54839L10.5227 2.41483L9.72729 3.2102L11.8609 5.34376L9.72729 7.47733L10.5227 8.2727Z" fill="#FF3838"/>
                    </svg>
                    {{ item[col.name].title }}
                  </template>
                  <template v-else-if="col.name === 'duration'">{{ formatDuration(item[col.name]) }}</template>
                  <template v-else-if="col.name === 'record'"></template>
                  <template v-else>{{ item[col.name] }}</template>
                </div>
            </div>
        </div>
      </div>
    </div>
  `,
  data: function () {
    return {
      fields: [{
        name: 'date',
        title: 'Дата и время звонка'
      }, {
        name: 'phoneInput',
        title: 'Телефон, кто звонил'
      }, {
        name: 'phoneOn',
        title: 'Номер, на который был звонок'
      }, {
        name: 'name',
        title: 'Имя сотрудника, кто принял звонок'
      }, {
        name: 'status',
        title: 'Статус (пропущенный, состоявшийся)'
      }, {
        name: 'duration',
        title: 'Длительность звонка'
      }, {
        name: 'record',
        title: 'Запись звонка'
      }, {
        name: 'operator',
        title: 'Оператор связи'
      }]
    };
  },
  methods: {
    getPhoneInput(data) {
      return data.name ? data.name : data.phone;
    },
    formatDuration(time) {
      const data = moment.duration(time, 'seconds')._data;
      let str = "";
      if (data.hours > 0) {
        str += `${data.hours} ч. `;
      }
      if (data.minutes) {
        str += `${data.minutes} мин. `;
      }
      str += `${data.seconds} сек.`;
      return str;
    }
  }
}));

/***/ }),

/***/ "./src/js/locale/Language.js":
/*!***********************************!*\
  !*** ./src/js/locale/Language.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Language)
/* harmony export */ });
class Language {
  constructor(language, months, monthsAbbr, days) {
    this.language = language;
    this.months = months;
    this.monthsAbbr = monthsAbbr;
    this.days = days;
    this.rtl = false;
    this.ymd = false;
    this.yearSuffix = '';
  }
  get language() {
    return this._language;
  }
  set language(language) {
    if (typeof language !== 'string') {
      throw new TypeError('Language must be a string');
    }
    this._language = language;
  }
  get months() {
    return this._months;
  }
  set months(months) {
    if (months.length !== 12) {
      throw new RangeError(`There must be 12 months for ${this.language} language`);
    }
    this._months = months;
  }
  get monthsAbbr() {
    return this._monthsAbbr;
  }
  set monthsAbbr(monthsAbbr) {
    if (monthsAbbr.length !== 12) {
      throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`);
    }
    this._monthsAbbr = monthsAbbr;
  }
  get days() {
    return this._days;
  }
  set days(days) {
    if (days.length !== 7) {
      throw new RangeError(`There must be 7 days for ${this.language} language`);
    }
    this._days = days;
  }
}
// eslint-disable-next-line
;

/***/ }),

/***/ "./src/js/locale/ru.js":
/*!*****************************!*\
  !*** ./src/js/locale/ru.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Language_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language.js */ "./src/js/locale/Language.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _Language_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Russian', ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'], ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'], ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']));

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
/******/ 			// no module.id needed
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
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dropdown.js */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input.js */ "./src/js/components/input.js");
/* harmony import */ var _components_checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkbox.js */ "./src/js/components/checkbox.js");
/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button.js */ "./src/js/components/button.js");
/* harmony import */ var _components_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table.js */ "./src/js/components/table.js");
/* harmony import */ var _locale_ru_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale/ru.js */ "./src/js/locale/ru.js");






const paginate = Vue.component('paginate', VuejsPaginate);
const table = Vue.component('sp-table', _components_table_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.use(Vuetable);
new Vue({
  el: "#app",
  data: {
    datePickerLang: _locale_ru_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    period: {
      selected: {
        title: 'Сегодня',
        value: 'today'
      },
      options: [{
        title: 'Сегодня',
        value: 'today'
      }, {
        title: 'Вчера',
        value: 'yesterday'
      }, {
        title: 'Позавчера',
        value: 'beforeYesterday'
      }, {
        title: 'Неделю назад',
        value: 'a_week_ago'
      }]
    },
    responsibleOptions: [],
    incomingOptions: [],
    durationOptions: [],
    statusOptions: [],
    count: {
      countV: {
        title: '10',
        value: 10
      },
      countOptions: [{
        title: '10',
        value: 10
      }, {
        title: '20',
        value: 20
      }, {
        title: '50',
        value: 50
      }, {
        title: '100',
        value: 100
      }]
    },
    page: 1,
    dataTable: [{
      id: '689933',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689934',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689935',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689936',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689937',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689938',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689939',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689940',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689941',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689942',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689943',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689944',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689945',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689946',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689947',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689948',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689949',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689950',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689951',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689952',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689953',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689954',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689955',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689956',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689957',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689958',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689959',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689960',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }, {
      id: '689961',
      date: 1705662199000,
      name: 'Константинов Константин Константинович',
      status: {
        name: 'answered',
        title: 'Отвечен'
      },
      type: 'input',
      duration: 5076,
      record: null,
      operator: 'megafon',
      phoneInput: 'Константинов Константин Константинович',
      phone: '+79999999999',
      phoneOn: '+79289999999'
    }],
    date: {
      start: new Date(),
      end: new Date()
    },
    filteredData: [],
    filters: {
      date: {
        start: new Date(),
        end: new Date()
      },
      status: {
        title: '',
        value: ''
      },
      duration: {
        title: '',
        value: ''
      },
      incoming: {
        title: '',
        value: ''
      },
      responsible: {
        title: '',
        value: ''
      },
      isRecord: false,
      phoneOn: "",
      phoneInput: ""
    }
  },
  components: {
    'sp-dropdown': _components_dropdown_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'sp-input': _components_input_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    'sp-checkbox': _components_checkbox_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    'sp-button': _components_button_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    'date-picker': vuejsDatepicker,
    'paginate': paginate,
    'sp-table': table
  },
  computed: {
    viewDataTable() {
      const arr = [...this.dataTable];
      return arr.splice((this.page - 1) * this.count.countV.value, this.count.countV.value);
    },
    countPage() {
      return Math.ceil(this.dataTable.length / this.count.countV.value);
    }
  },
  methods: {
    customFormatter(date) {
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return date.toLocaleDateString('ru-RU', options);
    },
    setNewPage(page) {
      this.page = page;
    },
    choosePeriod(period) {
      if (period.value === 'today') {
        this.filters.date.start = moment().hour(0).minute(0).second(0)._d;
        this.filters.date.end = moment().day(1).hour(0).minute(0).second(0)._d;
      }
      if (period.value === 'yesterday') {
        this.filters.date.start = moment().day(-1).hour(0).minute(0).second(0)._d;
        this.filters.date.end = moment().day(0).hour(0).minute(0).second(0)._d;
      }
      if (period.value === 'beforeYesterday') {
        this.filters.date.start = moment().day(-2).hour(0).minute(0).second(0)._d;
        this.filters.date.end = moment().day(-1).hour(0).minute(0).second(0)._d;
      }
      if (period.value === 'a_week_ago') {
        this.filters.date.start = moment().day(-7).hour(0).minute(0).second(0)._d;
        this.filters.date.end = moment().day(0).hour(0).minute(0).second(0)._d;
      }
    },
    viewFilteredDataTable() {
      const arr = this.dataTable.filter(el => {});
    }
  },
  mounted() {
    this.filteredData = this.dataTable;
    this.choosePeriod(this.period.selected);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxFQUFFO01BQ3hFO0lBQ0YsQ0FBQztJQUNEQyxxQkFBcUJBLENBQUEsRUFBRztNQUV0QixNQUFNaEIsR0FBRyxHQUFHLElBQUksQ0FBQ25CLFNBQVMsQ0FBQ29DLE1BQU0sQ0FBRWpELEVBQUUsSUFBSyxDQUUxQyxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7RUFDRDVELE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ29GLFlBQVksR0FBRyxJQUFJLENBQUNYLFNBQVM7SUFDbEMsSUFBSSxDQUFDOEIsWUFBWSxDQUFDLElBQUksQ0FBQ3pDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO0VBQ3pDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvanMvY29tcG9uZW50cy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2NvbXBvbmVudHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL3NyYy9qcy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvanMvY29tcG9uZW50cy90YWJsZS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2xvY2FsZS9MYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2xvY2FsZS9ydS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgVnVlLmNvbXBvbmVudCgnc3AtYnV0dG9uJywge1xuICBwcm9wczogW1xuICAgJ2NvbG9yJ1xuICBdLFxuICBlbWl0czogW10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBcbiAgICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgIDpjbGFzcz1cImdldENsYXNzXCJcbiAgICA+XG4gICAgICAgIDxzbG90IC8+XG4gICAgPC9idXR0b24+XG4gIGAsXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBnZXRDbGFzczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sb3IgPyBgYnV0dG9uLS0ke3RoaXMuY29sb3J9YCA6ICdidXR0b24tLXByaW1hcnknXG4gICAgfVxuICB9XG59KSIsImV4cG9ydCBkZWZhdWx0IFZ1ZS5jb21wb25lbnQoJ3NwLWNoZWNrYm94Jywge1xuICBwcm9wczogW1xuICAgICdwb3NpdGlvbmxhYmVsJyxcbiAgICAndGl0bGUnLFxuICAgICdpZCdcbiAgXSxcbiAgZW1pdHM6IFtcbiAgICdjaGVjaydcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgXG4gICAgICBjbGFzcz1cImNoZWNrYm94XCJcbiAgICAgIDpjbGFzcz1cImNsYXNzT2JqXCJcbiAgICAgIDpmb3I9XCJnZXRJZFwiXG4gICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveF9fbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hfX2lucHV0XCIgdi1tb2RlbD1cImNoZWNrXCIgOmlkPVwiZ2V0SWRcIiBAY2hhbmdlPVwiJGVtaXQoJ2NoZWNrJywgY2hlY2spXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveF9fZG90XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2xhYmVsPlxuICBgLFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoZWNrOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc09iajogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25sYWJlbCA/IGBjaGVja2JveC0tJHt0aGlzLnBvc2l0aW9ubGFiZWx9YCA6ICdjaGVja2JveC0tbGVmdCdcbiAgICB9LFxuICAgIGdldElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZCA/IGBjaGVja2JveCR7dGhpcy5pZH1gIDogJ2NoZWNrYm94J1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge31cbn0pIiwiZXhwb3J0IGRlZmF1bHQgVnVlLmNvbXBvbmVudCgnc3AtZHJvcGRvd24nLCB7XG4gIHByb3BzOiBbXG4gICAnb3B0aW9ucycsXG4gICAndGl0bGUnLFxuICAgJ2ljb24nLFxuICAgJ3ZhbHVlJ1xuICBdLFxuICBlbWl0czogW1xuICAgJ3NlbGVjdGVkJ1xuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgXG4gICAgICBjbGFzcz1cImRyb3Bkb3duXCJcbiAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgJ2Ryb3Bkb3duLS1vcGVuTGlzdCc6IGlzT3Blbkxpc3QgXG4gICAgICB9XCJcbiAgICAgIHJlZj1cImRyb3Bkb3duXCJcbiAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bl9fbGFiZWxcIiB2LWlmPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQgZHJvcGRvd25fX2lucHV0XCIgQGNsaWNrPVwiaXNPcGVuTGlzdCA9ICFpc09wZW5MaXN0XCI+XG4gICAgICAgICAgICB7eyBzZWxlY3RlZEl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bl9faW5wdXQtaWNvblwiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpY29uXCIgLz4gXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNiAxN1wiIGZpbGw9XCJub25lXCIgdi1pZj1cIiF0aGlzLiRzbG90cy5pY29uXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjM3NSA3Ljg3NUgwLjYyNUMwLjI3OTgxMyA3Ljg3NSAwIDguMTU0ODEgMCA4LjVDMCA4Ljg0NTE5IDAuMjc5ODEzIDkuMTI1IDAuNjI1IDkuMTI1SDE1LjM3NUMxNS43MjAyIDkuMTI1IDE2IDguODQ1MTkgMTYgOC41QzE2IDguMTU0ODEgMTUuNzIwMiA3Ljg3NSAxNS4zNzUgNy44NzVaXCIgZmlsbD1cIiM5RTlFOUVcIi8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjM3NSAyLjg3NUgwLjYyNUMwLjI3OTgxMyAyLjg3NSAwIDMuMTU0ODEgMCAzLjVDMCAzLjg0NTE5IDAuMjc5ODEzIDQuMTI1IDAuNjI1IDQuMTI1SDE1LjM3NUMxNS43MjAyIDQuMTI1IDE2IDMuODQ1MTkgMTYgMy41QzE2IDMuMTU0ODEgMTUuNzIwMiAyLjg3NSAxNS4zNzUgMi44NzVaXCIgZmlsbD1cIiM5RTlFOUVcIi8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjM3NSAxMi44NzVIMC42MjVDMC4yNzk4MTMgMTIuODc1IDAgMTMuMTU0OCAwIDEzLjVDMCAxMy44NDUyIDAuMjc5ODEzIDE0LjEyNSAwLjYyNSAxNC4xMjVIMTUuMzc1QzE1LjcyMDIgMTQuMTI1IDE2IDEzLjg0NTIgMTYgMTMuNUMxNiAxMy4xNTQ4IDE1LjcyMDIgMTIuODc1IDE1LjM3NSAxMi44NzVaXCIgZmlsbD1cIiM5RTlFOUVcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBcbiAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duX19saXN0XCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnZHJvcGRvd25fX2xpc3QtLW9wZW4nOiBpc09wZW5MaXN0XG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxsaSBcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWl0ZW1cIiBcbiAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIG9wdGlvbnNcIiBcbiAgICAgICAgICAgICAgOmtleT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RJdGVtKGl0ZW0pXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdsaXN0LWl0ZW0tLWFjdGl2ZSc6IGl0ZW0udmFsdWUgPT09IHNlbGVjdGVkSXRlbS52YWx1ZVxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID57eyBpdGVtLnRpdGxlIH19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPcGVuTGlzdDogZmFsc2UsXG4gICAgICBzZWxlY3RlZEl0ZW06IHRoaXMudmFsdWUsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2VsZWN0SXRlbShpdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3RlZCcsIGl0ZW0pO1xuICAgICAgdGhpcy5pc09wZW5MaXN0ID0gIXRoaXMuaXNPcGVuTGlzdDtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgaWYoIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy4kcmVmcy5kcm9wZG93bikpIHRoaXMuaXNPcGVuTGlzdCA9IGZhbHNlXG4gICAgfSlcbiAgfVxufSkiLCJWdWUudXNlKFZ1ZU1hc2suVnVlTWFza1BsdWdpbik7XG5leHBvcnQgZGVmYXVsdCBWdWUuY29tcG9uZW50KCdzcC1pbnB1dCcsIHtcbiAgcHJvcHM6IFtcbiAgICd0aXRsZScsXG4gICAnbWFzaycsXG4gICAndmFsdWUnXG4gIF0sXG4gIGVtaXRzOiBbXG4gICAnaW5wdXQnXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNwLWlucHV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcC1pbnB1dF9fbGFiZWxcIj57eyB0aXRsZSB9fTwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNwLWlucHV0X19maWVsZFwiIHYtbW9kZWw9XCJpbnB1dFZcIiB2LW1hc2s9XCInKzcgKCMjIykgIyMjLSMjLSMjJ1wiIHBsYWNlaG9sZGVyPVwiKzcgKF9fXykgX19fIC0gX18gLSBfX1wiIEBpbnB1dD1cIm9uSW5wdXQoaW5wdXRWKVwiPlxuICAgIDwvZGl2PlxuICBgLFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0VjogXCJcIlxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB2YWx1ZUlucHV0OiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JbnB1dCh2YWx1ZSkge1xuICAgICAgY29uc3QgbnVtYmVyUGF0dGVybiA9IC9cXGQrL2c7XG4gICAgICBjb25zdCB2YWwgPSAnKycgKyB2YWx1ZS5tYXRjaCggbnVtYmVyUGF0dGVybiApLmpvaW4oJycpO1xuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWwpO1xuICAgIH1cbiAgfVxufSkiLCJcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5jb21wb25lbnQoJ3NwLXRhYmxlJywge1xuICBwcm9wczogW1xuICAgJ2RhdGEnXG4gIF0sXG4gIGVtaXRzOiBbXG5cbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2hlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19jb2xcIiB2LWZvcj1cImZpZWxkIGluIGZpZWxkc1wiIDprZXk9XCJmaWVsZC5uYW1lXCI+e3sgZmllbGQudGl0bGUgfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvd1wiIHYtZm9yPVwiaXRlbSBpbiBkYXRhXCIgOmtleT1cIml0ZW0uaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2NvbFwiIHYtZm9yPVwiY29sIGluIGZpZWxkc1wiIDprZXk9XCJjb2wubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjb2wubmFtZSA9PT0gJ3Bob25lSW5wdXQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxNCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHYtaWY9XCJpdGVtLnR5cGUgPT09ICdpbnB1dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjM1OTQgNi4wMTU2MUg0LjAxNjI1TDYuMTY0MzcgMy44Njc0OUM2LjI2MTA5IDMuNzc3MzcgNi4zMzg2NiAzLjY2ODY5IDYuMzkyNDYgMy41NDc5NEM2LjQ0NjI2IDMuNDI3MiA2LjQ3NTE5IDMuMjk2ODUgNi40Nzc1MiAzLjE2NDY3QzYuNDc5ODYgMy4wMzI1IDYuNDU1NTQgMi45MDEyMSA2LjQwNjAzIDIuNzc4NjRDNi4zNTY1MiAyLjY1NjA3IDYuMjgyODQgMi41NDQ3MiA2LjE4OTM2IDIuNDUxMjVDNi4wOTU4OSAyLjM1Nzc4IDUuOTg0NTQgMi4yODQwOSA1Ljg2MTk3IDIuMjM0NThDNS43Mzk0IDIuMTg1MDcgNS42MDgxMSAyLjE2MDc1IDUuNDc1OTQgMi4xNjMwOUM1LjM0Mzc2IDIuMTY1NDIgNS4yMTM0MiAyLjE5NDM1IDUuMDkyNjcgMi4yNDgxNUM0Ljk3MTkyIDIuMzAxOTUgNC44NjMyNCAyLjM3OTUyIDQuNzczMTIgMi40NzYyNEwwLjk1MTU2MSA2LjI5NzhDMC44NTc0NTUgNi4zODg4MiAwLjc4Mjc3IDYuNDk3OTcgMC43MzIwMTUgNi42MTg2NkMwLjY4MTI1OSA2LjczOTM1IDAuNjU1NDg1IDYuODY5MDcgMC42NTYyNDggNi45OTk5OUMwLjY1NTI1MiA3LjEzMDM1IDAuNjgwMjc4IDcuMjU5NjEgMC43Mjk4NiA3LjM4MDE4QzAuNzc5NDQxIDcuNTAwNzUgMC44NTI1ODIgNy42MTAyMiAwLjk0NDk5OCA3LjcwMjE3TDQuNzczMTIgMTEuNTMwM0M0Ljg2MzI0IDExLjYyNyA0Ljk3MTkyIDExLjcwNDYgNS4wOTI2NyAxMS43NTg0QzUuMjEzNDIgMTEuODEyMiA1LjM0Mzc2IDExLjg0MTEgNS40NzU5NCAxMS44NDM1QzUuNjA4MTEgMTEuODQ1OCA1LjczOTQgMTEuODIxNSA1Ljg2MTk3IDExLjc3MkM1Ljk4NDU0IDExLjcyMjUgNi4wOTU4OSAxMS42NDg4IDYuMTg5MzYgMTEuNTU1M0M2LjI4Mjg0IDExLjQ2MTggNi4zNTY1MiAxMS4zNTA1IDYuNDA2MDMgMTEuMjI3OUM2LjQ1NTU0IDExLjEwNTMgNi40Nzk4NiAxMC45NzQgNi40Nzc1MiAxMC44NDE5QzYuNDc1MTkgMTAuNzA5NyA2LjQ0NjI2IDEwLjU3OTMgNi4zOTI0NiAxMC40NTg2QzYuMzM4NjYgMTAuMzM3OCA2LjI2MTA5IDEwLjIyOTIgNi4xNjQzNyAxMC4xMzkxTDQuMDE2MjUgNy45ODQzNkgxMi4zNTk0QzEyLjYyMDQgNy45ODQzNiAxMi44NzA4IDcuODgwNjUgMTMuMDU1NCA3LjY5NjA1QzEzLjI0IDcuNTExNDQgMTMuMzQzNyA3LjI2MTA2IDEzLjM0MzcgNi45OTk5OUMxMy4zNDM3IDYuNzM4OTEgMTMuMjQgNi40ODg1NCAxMy4wNTU0IDYuMzAzOTNDMTIuODcwOCA2LjExOTMyIDEyLjYyMDQgNi4wMTU2MSAxMi4zNTk0IDYuMDE1NjFaXCIgZmlsbD1cIiM0Q0FGNTBcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xLjY0MDYzIDcuOTg0MzlMOS45ODM3NSA3Ljk4NDM5TDcuODM1NjMgMTAuMTMyNUM3LjczODkxIDEwLjIyMjYgNy42NjEzNCAxMC4zMzEzIDcuNjA3NTQgMTAuNDUyMUM3LjU1Mzc0IDEwLjU3MjggNy41MjQ4MSAxMC43MDMyIDcuNTIyNDggMTAuODM1M0M3LjUyMDE0IDEwLjk2NzUgNy41NDQ0NiAxMS4wOTg4IDcuNTkzOTcgMTEuMjIxNEM3LjY0MzQ4IDExLjM0MzkgNy43MTcxNiAxMS40NTUzIDcuODEwNjQgMTEuNTQ4N0M3LjkwNDExIDExLjY0MjIgOC4wMTU0NiAxMS43MTU5IDguMTM4MDMgMTEuNzY1NEM4LjI2MDYgMTEuODE0OSA4LjM5MTg5IDExLjgzOTIgOC41MjQwNiAxMS44MzY5QzguNjU2MjQgMTEuODM0NiA4Ljc4NjU4IDExLjgwNTcgOC45MDczMyAxMS43NTE4QzkuMDI4MDggMTEuNjk4IDkuMTM2NzYgMTEuNjIwNSA5LjIyNjg4IDExLjUyMzhMMTMuMDQ4NCA3LjcwMjJDMTMuMTQyNSA3LjYxMTE4IDEzLjIxNzIgNy41MDIwMyAxMy4yNjggNy4zODEzNEMxMy4zMTg3IDcuMjYwNjUgMTMuMzQ0NSA3LjEzMDkzIDEzLjM0MzggNy4wMDAwMUMxMy4zNDQ3IDYuODY5NjUgMTMuMzE5NyA2Ljc0MDM5IDEzLjI3MDEgNi42MTk4MkMxMy4yMjA2IDYuNDk5MjUgMTMuMTQ3NCA2LjM4OTc4IDEzLjA1NSA2LjI5NzgzTDkuMjI2ODggMi40Njk3QzkuMTM2NzYgMi4zNzI5OSA5LjAyODA4IDIuMjk1NDEgOC45MDczMyAyLjI0MTYxQzguNzg2NTggMi4xODc4MSA4LjY1NjI0IDIuMTU4ODggOC41MjQwNiAyLjE1NjU1QzguMzkxODkgMi4xNTQyMiA4LjI2MDYgMi4xNzg1MyA4LjEzODAzIDIuMjI4MDRDOC4wMTU0NiAyLjI3NzU1IDcuOTA0MTEgMi4zNTEyNCA3LjgxMDY0IDIuNDQ0NzFDNy43MTcxNiAyLjUzODE5IDcuNjQzNDggMi42NDk1MyA3LjU5Mzk3IDIuNzcyMUM3LjU0NDQ2IDIuODk0NjcgNy41MjAxNCAzLjAyNTk2IDcuNTIyNDggMy4xNTgxNEM3LjUyNDgxIDMuMjkwMzEgNy41NTM3NCAzLjQyMDY2IDcuNjA3NTQgMy41NDE0MUM3LjY2MTM0IDMuNjYyMTYgNy43Mzg5MSAzLjc3MDgzIDcuODM1NjMgMy44NjA5NUw5Ljk4Mzc1IDYuMDE1NjRMMS42NDA2MyA2LjAxNTY0QzEuMzc5NTUgNi4wMTU2NCAxLjEyOTE4IDYuMTE5MzUgMC45NDQ1NjkgNi4zMDM5NUMwLjc1OTk2MyA2LjQ4ODU2IDAuNjU2MjUyIDYuNzM4OTQgMC42NTYyNTIgNy4wMDAwMUMwLjY1NjI1MiA3LjI2MTA5IDAuNzU5OTYzIDcuNTExNDYgMC45NDQ1NjkgNy42OTYwN0MxLjEyOTE4IDcuODgwNjggMS4zNzk1NSA3Ljk4NDM5IDEuNjQwNjMgNy45ODQzOVpcIiBmaWxsPVwiI0ZGMzgzOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGdldFBob25lSW5wdXQoaXRlbSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImNvbC5uYW1lID09PSAnc3RhdHVzJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2LWlmPVwiaXRlbVtjb2wubmFtZV0ubmFtZSA9PT0gJ2Fuc3dlcmVkJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuNTMzNiAxMy4xNEMxNi4wNDE5IDEyLjcyNzcgMTMuMTU4NiAxMC45MDE4IDEyLjY3OTMgMTAuOTg1NkMxMi40NTQzIDExLjAyNTYgMTIuMjgyMiAxMS4yMTc0IDExLjgyMTUgMTEuNzY2OUMxMS42MDg1IDEyLjAzNzQgMTEuMzc0NSAxMi4yOTA4IDExLjEyMTcgMTIuNTI0NkMxMC42NTg3IDEyLjQxMjggMTAuMjEwNSAxMi4yNDY2IDkuNzg2MzggMTIuMDI5NkM4LjEyMzIyIDExLjIxOTkgNi43Nzk2MSA5Ljg3NTg5IDUuOTcwMzggOC4yMTI1QzUuNzUzMzggNy43ODg0MSA1LjU4NzIzIDcuMzQwMTggNS40NzUzOCA2Ljg3NzEyQzUuNzA5MjIgNi42MjQzOSA1Ljk2MjU2IDYuMzkwNDIgNi4yMzMwNiA2LjE3NzM4QzYuNzgyMDYgNS43MTY2OSA2Ljk3NDQ0IDUuNTQ1NjkgNy4wMTQzOCA1LjMxOTU2QzcuMDk4MTkgNC44MzkxOSA1LjI3MDYzIDEuOTU2OTQgNC44NiAxLjQ2NTMxQzQuNjg3ODggMS4yNjE2OSA0LjUzMTUgMS4xMjUgNC4zMzEyNSAxLjEyNUMzLjc1MDc1IDEuMTI1IDEuMTI1IDQuMzcxNzUgMS4xMjUgNC43OTI1QzEuMTI1IDQuODI2ODEgMS4xODEyNSA4LjIwNjg4IDUuNDUwMDYgMTIuNTQ5OUM5Ljc5MzEzIDE2LjgxODggMTMuMTczMiAxNi44NzUgMTMuMjA3NSAxNi44NzVDMTMuNjI4MyAxNi44NzUgMTYuODc1IDE0LjI0OTIgMTYuODc1IDEzLjY2ODdDMTYuODc1IDEzLjQ2ODUgMTYuNzM4MyAxMy4zMTIxIDE2LjUzMzYgMTMuMTRaXCIgZmlsbD1cIiM0Q0FGNTBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi45Mzc1IDguNDM3NUgxNC4wNjI1QzE0LjA2MTIgNy4yNDQ0NCAxMy41ODY2IDYuMTAwNjIgMTIuNzQzIDUuMjU3QzExLjg5OTQgNC40MTMzOCAxMC43NTU2IDMuOTM4ODQgOS41NjI1IDMuOTM3NVY1LjA2MjVDMTAuNDU3MyA1LjA2MzM5IDExLjMxNTMgNS40MTkyNiAxMS45NDggNi4wNTJDMTIuNTgwNyA2LjY4NDc0IDEyLjkzNjYgNy41NDI2NyAxMi45Mzc1IDguNDM3NVpcIiBmaWxsPVwiIzRDQUY1MFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1Ljc1IDguNDM3NUgxNi44NzVDMTYuODcyOCA2LjQ5ODc5IDE2LjEwMTYgNC42NDAxMiAxNC43MzA4IDMuMjY5MjVDMTMuMzU5OSAxLjg5ODM3IDExLjUwMTIgMS4xMjcyMyA5LjU2MjUgMS4xMjVWMi4yNUMxMS4yMDI5IDIuMjUxOTQgMTIuNzc1NiAyLjkwNDQ1IDEzLjkzNTYgNC4wNjQ0MUMxNS4wOTU1IDUuMjI0MzggMTUuNzQ4MSA2Ljc5NzA3IDE1Ljc1IDguNDM3NVpcIiBmaWxsPVwiIzRDQUY1MFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2LjUzMzYgMTMuMTRDMTYuMDQxOSAxMi43Mjc3IDEzLjE1ODYgMTAuOTAxOCAxMi42NzkzIDEwLjk4NTZDMTIuNDU0MyAxMS4wMjU2IDEyLjI4MjIgMTEuMjE3NCAxMS44MjE1IDExLjc2NjlDMTEuNjA4NSAxMi4wMzc0IDExLjM3NDUgMTIuMjkwOCAxMS4xMjE3IDEyLjUyNDZDMTAuNjU4NyAxMi40MTI4IDEwLjIxMDUgMTIuMjQ2NiA5Ljc4NjM4IDEyLjAyOTZDOC4xMjMyMiAxMS4yMTk5IDYuNzc5NjEgOS44NzU4OSA1Ljk3MDM4IDguMjEyNUM1Ljc1MzM4IDcuNzg4NDEgNS41ODcyMyA3LjM0MDE4IDUuNDc1MzggNi44NzcxMkM1LjcwOTIyIDYuNjI0MzkgNS45NjI1NiA2LjM5MDQyIDYuMjMzMDYgNi4xNzczOEM2Ljc4MjA2IDUuNzE2NjkgNi45NzQ0NCA1LjU0NTY5IDcuMDE0MzggNS4zMTk1NkM3LjA5ODE5IDQuODM5MTkgNS4yNzA2MyAxLjk1Njk0IDQuODYgMS40NjUzMUM0LjY4Nzg4IDEuMjYxNjkgNC41MzE1IDEuMTI1IDQuMzMxMjUgMS4xMjVDMy43NTA3NSAxLjEyNSAxLjEyNSA0LjM3MTc1IDEuMTI1IDQuNzkyNUMxLjEyNSA0LjgyNjgxIDEuMTgxMjUgOC4yMDY4OCA1LjQ1MDA2IDEyLjU0OTlDOS43OTMxMyAxNi44MTg4IDEzLjE3MzIgMTYuODc1IDEzLjIwNzUgMTYuODc1QzEzLjYyODMgMTYuODc1IDE2Ljg3NSAxNC4yNDkyIDE2Ljg3NSAxMy42Njg3QzE2Ljg3NSAxMy40Njg1IDE2LjczODMgMTMuMzEyMSAxNi41MzM2IDEzLjE0WlwiIGZpbGw9XCIjRkYzODM4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNTIyNyA4LjI3MjdMMTIuNjU2MiA2LjEzOTE0TDE0Ljc4OTggOC4yNzI3TDE1LjU4NTIgNy40NzczM0wxMy40NTE2IDUuMzQzNzZMMTUuNTg1MiAzLjIxMDJMMTQuNzg5OCAyLjQxNDgzTDEyLjY1NjIgNC41NDgzOUwxMC41MjI3IDIuNDE0ODNMOS43MjcyOSAzLjIxMDJMMTEuODYwOSA1LjM0Mzc2TDkuNzI3MjkgNy40NzczM0wxMC41MjI3IDguMjcyN1pcIiBmaWxsPVwiI0ZGMzgzOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW1bY29sLm5hbWVdLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImNvbC5uYW1lID09PSAnZHVyYXRpb24nXCI+e3sgZm9ybWF0RHVyYXRpb24oaXRlbVtjb2wubmFtZV0pIH19PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJjb2wubmFtZSA9PT0gJ3JlY29yZCdcIj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyBpdGVtW2NvbC5uYW1lXSB9fTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICB0aXRsZTogJ9CU0LDRgtCwINC4INCy0YDQtdC80Y8g0LfQstC+0L3QutCwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3Bob25lSW5wdXQnLFxuICAgICAgICAgIHRpdGxlOiAn0KLQtdC70LXRhNC+0L0sINC60YLQviDQt9Cy0L7QvdC40LsnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncGhvbmVPbicsXG4gICAgICAgICAgdGl0bGU6ICfQndC+0LzQtdGALCDQvdCwINC60L7RgtC+0YDRi9C5INCx0YvQuyDQt9Cy0L7QvdC+0LonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgdGl0bGU6ICfQmNC80Y8g0YHQvtGC0YDRg9C00L3QuNC60LAsINC60YLQviDQv9GA0LjQvdGP0Lsg0LfQstC+0L3QvtC6J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3N0YXR1cycsXG4gICAgICAgICAgdGl0bGU6ICfQodGC0LDRgtGD0YEgKNC/0YDQvtC/0YPRidC10L3QvdGL0LksINGB0L7RgdGC0L7Rj9Cy0YjQuNC50YHRjyknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgICAgICAgIHRpdGxlOiAn0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMINC30LLQvtC90LrQsCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdyZWNvcmQnLFxuICAgICAgICAgIHRpdGxlOiAn0JfQsNC/0LjRgdGMINC30LLQvtC90LrQsCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvcGVyYXRvcicsXG4gICAgICAgICAgdGl0bGU6ICfQntC/0LXRgNCw0YLQvtGAINGB0LLRj9C30LgnXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldFBob25lSW5wdXQoZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGEubmFtZSA/IGRhdGEubmFtZSA6IGRhdGEucGhvbmVcbiAgICB9LFxuICAgIGZvcm1hdER1cmF0aW9uKHRpbWUpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBtb21lbnQuZHVyYXRpb24odGltZSwgJ3NlY29uZHMnKS5fZGF0YVxuXG4gICAgICBsZXQgc3RyID0gXCJcIlxuXG4gICAgICBpZihkYXRhLmhvdXJzID4gMCkge1xuICAgICAgICBzdHIgKz0gYCR7ZGF0YS5ob3Vyc30g0YcuIGBcbiAgICAgIH1cbiAgICAgIGlmKGRhdGEubWludXRlcykge1xuICAgICAgICBzdHIgKz0gYCR7ZGF0YS5taW51dGVzfSDQvNC40L0uIGBcbiAgICAgIH1cblxuICAgICAgc3RyICs9IGAke2RhdGEuc2Vjb25kc30g0YHQtdC6LmBcblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH0sXG59KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlIHtcbiAgY29uc3RydWN0b3IgKGxhbmd1YWdlLCBtb250aHMsIG1vbnRoc0FiYnIsIGRheXMpIHtcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2VcbiAgICB0aGlzLm1vbnRocyA9IG1vbnRoc1xuICAgIHRoaXMubW9udGhzQWJiciA9IG1vbnRoc0FiYnJcbiAgICB0aGlzLmRheXMgPSBkYXlzXG4gICAgdGhpcy5ydGwgPSBmYWxzZVxuICAgIHRoaXMueW1kID0gZmFsc2VcbiAgICB0aGlzLnllYXJTdWZmaXggPSAnJ1xuICB9XG5cbiAgZ2V0IGxhbmd1YWdlICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VcbiAgfVxuXG4gIHNldCBsYW5ndWFnZSAobGFuZ3VhZ2UpIHtcbiAgICBpZiAodHlwZW9mIGxhbmd1YWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTGFuZ3VhZ2UgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2VcbiAgfVxuXG4gIGdldCBtb250aHMgKCkge1xuICAgIHJldHVybiB0aGlzLl9tb250aHNcbiAgfVxuXG4gIHNldCBtb250aHMgKG1vbnRocykge1xuICAgIGlmIChtb250aHMubGVuZ3RoICE9PSAxMikge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFRoZXJlIG11c3QgYmUgMTIgbW9udGhzIGZvciAke3RoaXMubGFuZ3VhZ2V9IGxhbmd1YWdlYClcbiAgICB9XG4gICAgdGhpcy5fbW9udGhzID0gbW9udGhzXG4gIH1cblxuICBnZXQgbW9udGhzQWJiciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc0FiYnJcbiAgfVxuXG4gIHNldCBtb250aHNBYmJyIChtb250aHNBYmJyKSB7XG4gICAgaWYgKG1vbnRoc0FiYnIubGVuZ3RoICE9PSAxMikge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFRoZXJlIG11c3QgYmUgMTIgYWJicmV2aWF0ZWQgbW9udGhzIGZvciAke3RoaXMubGFuZ3VhZ2V9IGxhbmd1YWdlYClcbiAgICB9XG4gICAgdGhpcy5fbW9udGhzQWJiciA9IG1vbnRoc0FiYnJcbiAgfVxuXG4gIGdldCBkYXlzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF5c1xuICB9XG5cbiAgc2V0IGRheXMgKGRheXMpIHtcbiAgICBpZiAoZGF5cy5sZW5ndGggIT09IDcpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBUaGVyZSBtdXN0IGJlIDcgZGF5cyBmb3IgJHt0aGlzLmxhbmd1YWdlfSBsYW5ndWFnZWApXG4gICAgfVxuICAgIHRoaXMuX2RheXMgPSBkYXlzXG4gIH1cbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuOyIsImltcG9ydCBMYW5ndWFnZSBmcm9tICcuL0xhbmd1YWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgTGFuZ3VhZ2UoXG4gJ1J1c3NpYW4nLFxuIFsn0K/QvdCy0LDRgNGMJywgJ9Ck0LXQstGA0LDQu9GMJywgJ9Cc0LDRgNGCJywgJ9CQ0L/RgNC10LvRjCcsICfQnNCw0LknLCAn0JjRjtC90YwnLCAn0JjRjtC70YwnLCAn0JDQstCz0YPRgdGCJywgJ9Ch0LXQvdGC0Y/QsdGA0YwnLCAn0J7QutGC0Y/QsdGA0YwnLCAn0J3QvtGP0LHRgNGMJywgJ9CU0LXQutCw0LHRgNGMJ10sXG4gWyfQr9C90LInLCAn0KTQtdCy0YAnLCAn0JzQsNGA0YInLCAn0JDQv9GAJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LMnLCAn0KHQtdC90YInLCAn0J7QutGCJywgJ9Cd0L7Rj9CxJywgJ9CU0LXQuiddLFxuIFsn0JLRgScsICfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsSddXG4pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTcERyb3Bkb3duIGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcGRvd24uanNcIjtcclxuaW1wb3J0IFNwSW5wdXQgZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC5qc1wiO1xyXG5pbXBvcnQgU3BDaGVja2JveCBmcm9tIFwiLi9jb21wb25lbnRzL2NoZWNrYm94LmpzXCI7XHJcbmltcG9ydCBTcEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgU3BUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlLmpzXCJcclxuaW1wb3J0IHJ1IGZyb20gXCIuL2xvY2FsZS9ydS5qc1wiO1xyXG5cclxuY29uc3QgcGFnaW5hdGUgPSBWdWUuY29tcG9uZW50KCdwYWdpbmF0ZScsIFZ1ZWpzUGFnaW5hdGUpXHJcbmNvbnN0IHRhYmxlID0gVnVlLmNvbXBvbmVudCgnc3AtdGFibGUnLCBTcFRhYmxlKVxyXG5WdWUudXNlKFZ1ZXRhYmxlKVxyXG5cclxubmV3IFZ1ZSh7XHJcbiAgZWw6IFwiI2FwcFwiLFxyXG4gIGRhdGE6IHtcclxuICAgIGRhdGVQaWNrZXJMYW5nOiBydSxcclxuICAgIHBlcmlvZDoge1xyXG4gICAgICBzZWxlY3RlZDoge3RpdGxlOiAn0KHQtdCz0L7QtNC90Y8nLCB2YWx1ZTogJ3RvZGF5J30sXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7dGl0bGU6ICfQodC10LPQvtC00L3RjycsIHZhbHVlOiAndG9kYXknfSxcclxuICAgICAgICB7dGl0bGU6ICfQktGH0LXRgNCwJywgdmFsdWU6ICd5ZXN0ZXJkYXknfSxcclxuICAgICAgICB7dGl0bGU6ICfQn9C+0LfQsNCy0YfQtdGA0LAnLCB2YWx1ZTogJ2JlZm9yZVllc3RlcmRheSd9LFxyXG4gICAgICAgIHt0aXRsZTogJ9Cd0LXQtNC10LvRjiDQvdCw0LfQsNC0JywgdmFsdWU6ICdhX3dlZWtfYWdvJ30sXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICByZXNwb25zaWJsZU9wdGlvbnM6IFtdLFxyXG4gICAgaW5jb21pbmdPcHRpb25zOiBbXSxcclxuICAgIGR1cmF0aW9uT3B0aW9uczogW10sXHJcbiAgICBzdGF0dXNPcHRpb25zOiBbXSxcclxuICAgIGNvdW50OiB7XHJcbiAgICAgIGNvdW50Vjoge3RpdGxlOiAnMTAnLCB2YWx1ZTogMTAgfSxcclxuICAgICAgY291bnRPcHRpb25zOiBbXHJcbiAgICAgICAge3RpdGxlOiAnMTAnLCB2YWx1ZTogMTAgfSxcclxuICAgICAgICB7dGl0bGU6ICcyMCcsIHZhbHVlOiAyMCB9LFxyXG4gICAgICAgIHt0aXRsZTogJzUwJywgdmFsdWU6IDUwIH0sXHJcbiAgICAgICAge3RpdGxlOiAnMTAwJywgdmFsdWU6IDEwMCB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgcGFnZTogMSxcclxuICAgIGRhdGFUYWJsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5MzMnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5MzQnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5MzUnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5MzYnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5MzcnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5MzgnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5MzknLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDAnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDEnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDInLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDMnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDQnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDUnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDYnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDcnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICc2ODk5NDgnLFxyXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXHJcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcclxuICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXHJcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTA3NixcclxuICAgICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcclxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcclxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xyXG4gICAgICB9LHtcclxuICAgICAgICBpZDogJzY4OTk0OScsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1MCcsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1MScsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1MicsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1MycsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1NCcsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1NScsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1NicsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1NycsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1OCcsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk1OScsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk2MCcsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzY4OTk2MScsXHJcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcclxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxyXG4gICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcclxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxyXG4gICAgICAgIHJlY29yZDogbnVsbCxcclxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxyXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxyXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIGVuZDogbmV3IERhdGUoKVxyXG4gICAgfSxcclxuICAgIGZpbHRlcmVkRGF0YTogW10sXHJcbiAgICBmaWx0ZXJzOiB7XHJcbiAgICAgIGRhdGU6IHtcclxuICAgICAgICBzdGFydDogbmV3IERhdGUoKSxcclxuICAgICAgICBlbmQ6IG5ldyBEYXRlKClcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiB7dGl0bGU6ICcnLCB2YWx1ZTogJyd9LFxyXG4gICAgICBkdXJhdGlvbjoge3RpdGxlOiAnJywgdmFsdWU6ICcnfSxcclxuICAgICAgaW5jb21pbmc6IHt0aXRsZTogJycsIHZhbHVlOiAnJ30sXHJcbiAgICAgIHJlc3BvbnNpYmxlOiB7dGl0bGU6ICcnLCB2YWx1ZTogJyd9LFxyXG4gICAgICBpc1JlY29yZDogZmFsc2UsXHJcbiAgICAgIHBob25lT246IFwiXCIsXHJcbiAgICAgIHBob25lSW5wdXQ6IFwiXCIsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAnc3AtZHJvcGRvd24nOiBTcERyb3Bkb3duLFxyXG4gICAgJ3NwLWlucHV0JzogU3BJbnB1dCxcclxuICAgICdzcC1jaGVja2JveCc6IFNwQ2hlY2tib3gsXHJcbiAgICAnc3AtYnV0dG9uJzogU3BCdXR0b24sXHJcbiAgICAnZGF0ZS1waWNrZXInOiB2dWVqc0RhdGVwaWNrZXIsXHJcbiAgICAncGFnaW5hdGUnOiBwYWdpbmF0ZSxcclxuICAgICdzcC10YWJsZSc6IHRhYmxlXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdmlld0RhdGFUYWJsZSgpIHtcclxuICAgICAgY29uc3QgYXJyID0gWy4uLnRoaXMuZGF0YVRhYmxlXVxyXG4gICAgICByZXR1cm4gYXJyLnNwbGljZSgodGhpcy5wYWdlIC0gMSkgKiB0aGlzLmNvdW50LmNvdW50Vi52YWx1ZSwgdGhpcy5jb3VudC5jb3VudFYudmFsdWUpXHJcbiAgICB9LFxyXG4gICAgY291bnRQYWdlKCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuZGF0YVRhYmxlLmxlbmd0aCAvIHRoaXMuY291bnQuY291bnRWLnZhbHVlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGN1c3RvbUZvcm1hdHRlcihkYXRlKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygncnUtUlUnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBzZXROZXdQYWdlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZVxyXG4gICAgfSxcclxuICAgIGNob29zZVBlcmlvZChwZXJpb2QpIHtcclxuICAgICAgaWYocGVyaW9kLnZhbHVlID09PSAndG9kYXknKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLmRhdGUuc3RhcnQgPSBtb21lbnQoKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcclxuICAgICAgICB0aGlzLmZpbHRlcnMuZGF0ZS5lbmQgPSBtb21lbnQoKS5kYXkoMSkuaG91cigwKS5taW51dGUoMCkuc2Vjb25kKDApLl9kXHJcbiAgICAgIH1cclxuICAgICAgaWYocGVyaW9kLnZhbHVlID09PSAneWVzdGVyZGF5Jykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5kYXRlLnN0YXJ0ID0gbW9tZW50KCkuZGF5KC0xKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcclxuICAgICAgICB0aGlzLmZpbHRlcnMuZGF0ZS5lbmQgPSBtb21lbnQoKS5kYXkoMCkuaG91cigwKS5taW51dGUoMCkuc2Vjb25kKDApLl9kXHJcbiAgICAgIH1cclxuICAgICAgaWYocGVyaW9kLnZhbHVlID09PSAnYmVmb3JlWWVzdGVyZGF5Jykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5kYXRlLnN0YXJ0ID0gbW9tZW50KCkuZGF5KC0yKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcclxuICAgICAgICB0aGlzLmZpbHRlcnMuZGF0ZS5lbmQgPSBtb21lbnQoKS5kYXkoLTEpLmhvdXIoMCkubWludXRlKDApLnNlY29uZCgwKS5fZFxyXG4gICAgICB9XHJcbiAgICAgIGlmKHBlcmlvZC52YWx1ZSA9PT0gJ2Ffd2Vla19hZ28nKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLmRhdGUuc3RhcnQgPSBtb21lbnQoKS5kYXkoLTcpLmhvdXIoMCkubWludXRlKDApLnNlY29uZCgwKS5fZFxyXG4gICAgICAgIHRoaXMuZmlsdGVycy5kYXRlLmVuZCA9IG1vbWVudCgpLmRheSgwKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHZpZXdGaWx0ZXJlZERhdGFUYWJsZSgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGFyciA9IHRoaXMuZGF0YVRhYmxlLmZpbHRlcigoZWwpID0+IHtcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmRhdGFUYWJsZVxyXG4gICAgdGhpcy5jaG9vc2VQZXJpb2QodGhpcy5wZXJpb2Quc2VsZWN0ZWQpXHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImVtaXRzIiwidGVtcGxhdGUiLCJkYXRhIiwiY29tcHV0ZWQiLCJnZXRDbGFzcyIsImNvbG9yIiwiY2hlY2siLCJjbGFzc09iaiIsInBvc2l0aW9ubGFiZWwiLCJnZXRJZCIsImlkIiwibWV0aG9kcyIsImlzT3Blbkxpc3QiLCJzZWxlY3RlZEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdEl0ZW0iLCJpdGVtIiwiJGVtaXQiLCJtb3VudGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbXBvc2VkUGF0aCIsImluY2x1ZGVzIiwiJHJlZnMiLCJkcm9wZG93biIsInVzZSIsIlZ1ZU1hc2siLCJWdWVNYXNrUGx1Z2luIiwiaW5wdXRWIiwidmFsdWVJbnB1dCIsImdldCIsInNldCIsIm9uSW5wdXQiLCJudW1iZXJQYXR0ZXJuIiwidmFsIiwibWF0Y2giLCJqb2luIiwiZmllbGRzIiwibmFtZSIsInRpdGxlIiwiZ2V0UGhvbmVJbnB1dCIsInBob25lIiwiZm9ybWF0RHVyYXRpb24iLCJ0aW1lIiwibW9tZW50IiwiZHVyYXRpb24iLCJfZGF0YSIsInN0ciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJMYW5ndWFnZSIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJtb250aHMiLCJtb250aHNBYmJyIiwiZGF5cyIsInJ0bCIsInltZCIsInllYXJTdWZmaXgiLCJfbGFuZ3VhZ2UiLCJUeXBlRXJyb3IiLCJfbW9udGhzIiwibGVuZ3RoIiwiUmFuZ2VFcnJvciIsIl9tb250aHNBYmJyIiwiX2RheXMiLCJTcERyb3Bkb3duIiwiU3BJbnB1dCIsIlNwQ2hlY2tib3giLCJTcEJ1dHRvbiIsIlNwVGFibGUiLCJydSIsInBhZ2luYXRlIiwiVnVlanNQYWdpbmF0ZSIsInRhYmxlIiwiVnVldGFibGUiLCJlbCIsImRhdGVQaWNrZXJMYW5nIiwicGVyaW9kIiwic2VsZWN0ZWQiLCJvcHRpb25zIiwicmVzcG9uc2libGVPcHRpb25zIiwiaW5jb21pbmdPcHRpb25zIiwiZHVyYXRpb25PcHRpb25zIiwic3RhdHVzT3B0aW9ucyIsImNvdW50IiwiY291bnRWIiwiY291bnRPcHRpb25zIiwicGFnZSIsImRhdGFUYWJsZSIsImRhdGUiLCJzdGF0dXMiLCJ0eXBlIiwicmVjb3JkIiwib3BlcmF0b3IiLCJwaG9uZUlucHV0IiwicGhvbmVPbiIsInN0YXJ0IiwiRGF0ZSIsImVuZCIsImZpbHRlcmVkRGF0YSIsImZpbHRlcnMiLCJpbmNvbWluZyIsInJlc3BvbnNpYmxlIiwiaXNSZWNvcmQiLCJjb21wb25lbnRzIiwidnVlanNEYXRlcGlja2VyIiwidmlld0RhdGFUYWJsZSIsImFyciIsInNwbGljZSIsImNvdW50UGFnZSIsIk1hdGgiLCJjZWlsIiwiY3VzdG9tRm9ybWF0dGVyIiwieWVhciIsIm1vbnRoIiwiZGF5IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2V0TmV3UGFnZSIsImNob29zZVBlcmlvZCIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJfZCIsInZpZXdGaWx0ZXJlZERhdGFUYWJsZSIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=