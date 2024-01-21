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
  props: ['options', 'title', 'icon', 'value', 'is-search'],
  emits: ['selected'],
  template: `
    <div 
      class="dropdown"
      ref="dropdown"
    >
        <div class="dropdown__label" v-if="title">{{ title }}</div>
        <div class="input dropdown__input" @click="!isSearch ? isOpenList = !isOpenList : ''">
            <input type="text" v-if="isSearch" v-model="input" @input="filterList($event)" @focus="isOpenList = true">
            <template v-if="!isSearch">{{ input }}</template>
            <div class="dropdown__input-icon" @click="isSearch ? isOpenList = !isOpenList : ''">
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
          ref="dropdownList"
        >
            <li 
              class="list-item" 
              v-for="item in filteredList" 
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
      selectedItem: this.value,
      filteredList: [],
      input: ""
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.$emit('selected', item);
      this.isOpenList = !this.isOpenList;
    },
    filterList(input) {
      this.filteredList = this.options.filter(el => el.title.toUpperCase().includes(input.target.value ? input.target.value.toUpperCase() : ''));
    }
  },
  watch: {
    value: function (val) {
      this.input = val.title;
    },
    isOpenList: function (val) {
      if (val) {
        this.$refs.dropdown.classList.add('dropdown--openList');
        this.$refs.dropdownList.classList.add('dropdown__list--open');
        const top = this.$refs.dropdownList.getBoundingClientRect().top + this.$refs.dropdownList.getBoundingClientRect().height;
        if (top > window.innerHeight + 50 && !this.$refs.dropdownList.classList.contains('dropdown__list--top')) {
          this.$refs.dropdownList.classList.add('dropdown__list--top');
          this.$refs.dropdown.classList.add('dropdown--listTop');
        }
      } else {
        this.$refs.dropdown.classList.remove('dropdown--openList');
        this.$refs.dropdownList.classList.remove('dropdown__list--open');
      }
    }
  },
  mounted: function () {
    if (this.value) this.input = this.value.title;
    this.filteredList = this.options;
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
    <div 
        class="table" 
        ref="table"
        @mousedown="onMouseDownHandler($event)"
        @mouseenter="onMouseEnterHandler($event)"
        @mouseup="onMouseUpHandler($event)"
        @mousemove="onMouseMoveHandler($event)"
        @mouseleave="onMouseLeaveHandler($event)"
    >
      <div class="table__wrapper" ref="tableWrapper">
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
                    <a :href="'tel:'+item.phone">{{ getPhoneInput(item) }}</a>
                  </template>
                  <template v-else-if="col.name === 'phoneOn'"><a :href="'tel:'+item.phoneOn">{{ item.phoneOn }}</a></template>
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
                  <template v-else-if="col.name === 'record'">
                    <div class="row">
                      <button>
                          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.9163 2.00154C3.41895 1.97107 3.00008 2.39684 3 2.93294V15.0659C3.0001 15.7595 3.67842 16.2105 4.25485 15.9002L15.5211 9.83377C15.8146 9.67563 16 9.35267 16 8.99941C16 8.64616 15.8146 8.32319 15.5211 8.16506L4.25485 2.09858C4.14931 2.04178 4.03411 2.00876 3.9163 2.00154Z" fill="#4CAF50"/>
                          </svg>
                      </button>
                      <a href="#" download>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.37225 2.11425C7.25 2.35425 7.25 2.66925 7.25 3.3V8.25H6.35225C5.69 8.25 5.3585 8.25 5.20175 8.382C5.13449 8.43854 5.08141 8.51005 5.04676 8.5908C5.01212 8.67155 4.99687 8.75929 5.00225 8.847C5.015 9.0525 5.24375 9.29175 5.7005 9.771L8.849 13.0717C9.0755 13.3102 9.18875 13.4288 9.3215 13.473C9.43733 13.5118 9.56267 13.5118 9.6785 13.473C9.81125 13.4288 9.9245 13.3102 10.151 13.0717L13.2995 9.77175C13.757 9.29175 13.985 9.05175 13.997 8.847C14.0025 8.75936 13.9873 8.67165 13.9528 8.59091C13.9183 8.51016 13.8654 8.43861 13.7983 8.382C13.6415 8.25 13.3108 8.25 12.6478 8.25H11.75V3.3C11.75 2.67 11.75 2.355 11.627 2.11425C11.5193 1.90249 11.3473 1.73027 11.1357 1.62225C10.8958 1.5 10.5808 1.5 9.95 1.5H9.05C8.42 1.5 8.105 1.5 7.86425 1.62225C7.65238 1.73014 7.48014 1.90238 7.37225 2.11425ZM4.25 15.75C4.25 15.9489 4.32902 16.1397 4.46967 16.2803C4.61032 16.421 4.80109 16.5 5 16.5H14C14.1989 16.5 14.3897 16.421 14.5303 16.2803C14.671 16.1397 14.75 15.9489 14.75 15.75C14.75 15.5511 14.671 15.3603 14.5303 15.2197C14.3897 15.079 14.1989 15 14 15H5C4.80109 15 4.61032 15.079 4.46967 15.2197C4.32902 15.3603 4.25 15.5511 4.25 15.75Z" fill="#4CAF50"/>
                        </svg>
                      </a>
                    </div>
                  </template>
                  <template v-else-if="col.name === 'name'"><a href="#">{{ item.name }}</a></template>
                    
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
      }],
      pressed: false,
      startX: 0,
      x: 0,
      clientX: 0
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
    },
    onMouseLeaveHandler() {
      this.pressed = false;
      this.$refs.table.style.cursor = "default";
    },
    onMouseDownHandler(event) {
      this.pressed = true;
      this.startX = event.offsetX - this.$refs.tableWrapper.offsetLeft;
      this.$refs.table.style.cursor = "grabbing";
    },
    onMouseEnterHandler(event) {
      this.$refs.table.style.cursor = "grab";
    },
    onMouseUpHandler(event) {
      this.$refs.table.style.cursor = "grab";
      this.pressed = false;
    },
    onMouseMoveHandler(event) {
      if (!this.pressed || event.clientX === this.clientX) return;
      event.preventDefault();
      this.x = event.offsetX;
      this.clientX = event.clientX;
      console.log(event.offsetX);
      console.log(this.x - this.startX);
      this.$refs.tableWrapper.style.left = `${this.x - this.startX}px`;
      this.checkBoundary();
    },
    checkBoundary() {
      let outer = this.$refs.table.getBoundingClientRect();
      let inner = this.$refs.tableWrapper.getBoundingClientRect();
      if (parseInt(this.$refs.tableWrapper.style.left) > 0) {
        this.$refs.tableWrapper.style.left = "0px";
      }
      if (inner.right < outer.right) {
        this.$refs.tableWrapper.style.left = `-${inner.width - outer.width}px`;
      }
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
    responsibleOptions: [{
      title: 'Александр',
      value: 'alexander'
    }, {
      title: 'Николай',
      value: 'nikolay'
    }, {
      title: 'Мария',
      value: 'maria'
    }, {
      title: 'Олег',
      value: 'oleg'
    }],
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
        name: 'rejected',
        title: 'Не отвечен'
      },
      type: 'outgoing',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsSUFBSyxDQUUxQyxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7RUFDRG1CLE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ3NHLFlBQVksR0FBRyxJQUFJLENBQUNYLFNBQVM7SUFDbEMsSUFBSSxDQUFDOEIsWUFBWSxDQUFDLElBQUksQ0FBQ3hDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO0VBQ3pDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvanMvY29tcG9uZW50cy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2NvbXBvbmVudHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL3NyYy9qcy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvLi9zcmMvanMvY29tcG9uZW50cy90YWJsZS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2xvY2FsZS9MYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlLy4vc3JjL2pzL2xvY2FsZS9ydS5qcyIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2d1bHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ndWxwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3VscC10ZW1wbGF0ZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgVnVlLmNvbXBvbmVudCgnc3AtYnV0dG9uJywge1xuICBwcm9wczogW1xuICAgJ2NvbG9yJ1xuICBdLFxuICBlbWl0czogW10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBcbiAgICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgIDpjbGFzcz1cImdldENsYXNzXCJcbiAgICA+XG4gICAgICAgIDxzbG90IC8+XG4gICAgPC9idXR0b24+XG4gIGAsXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBnZXRDbGFzczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sb3IgPyBgYnV0dG9uLS0ke3RoaXMuY29sb3J9YCA6ICdidXR0b24tLXByaW1hcnknXG4gICAgfVxuICB9XG59KSIsImV4cG9ydCBkZWZhdWx0IFZ1ZS5jb21wb25lbnQoJ3NwLWNoZWNrYm94Jywge1xuICBwcm9wczogW1xuICAgICdwb3NpdGlvbmxhYmVsJyxcbiAgICAndGl0bGUnLFxuICAgICdpZCdcbiAgXSxcbiAgZW1pdHM6IFtcbiAgICdjaGVjaydcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgXG4gICAgICBjbGFzcz1cImNoZWNrYm94XCJcbiAgICAgIDpjbGFzcz1cImNsYXNzT2JqXCJcbiAgICAgIDpmb3I9XCJnZXRJZFwiXG4gICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveF9fbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hfX2lucHV0XCIgdi1tb2RlbD1cImNoZWNrXCIgOmlkPVwiZ2V0SWRcIiBAY2hhbmdlPVwiJGVtaXQoJ2NoZWNrJywgY2hlY2spXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveF9fZG90XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2xhYmVsPlxuICBgLFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoZWNrOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc09iajogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25sYWJlbCA/IGBjaGVja2JveC0tJHt0aGlzLnBvc2l0aW9ubGFiZWx9YCA6ICdjaGVja2JveC0tbGVmdCdcbiAgICB9LFxuICAgIGdldElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZCA/IGBjaGVja2JveCR7dGhpcy5pZH1gIDogJ2NoZWNrYm94J1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge31cbn0pIiwiZXhwb3J0IGRlZmF1bHQgVnVlLmNvbXBvbmVudCgnc3AtZHJvcGRvd24nLCB7XG4gIHByb3BzOiBbXG4gICAnb3B0aW9ucycsXG4gICAndGl0bGUnLFxuICAgJ2ljb24nLFxuICAgJ3ZhbHVlJyxcbiAgICdpcy1zZWFyY2gnXG4gIF0sXG4gIGVtaXRzOiBbXG4gICAnc2VsZWN0ZWQnXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBcbiAgICAgIGNsYXNzPVwiZHJvcGRvd25cIlxuICAgICAgcmVmPVwiZHJvcGRvd25cIlxuICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duX19sYWJlbFwiIHYtaWY9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dCBkcm9wZG93bl9faW5wdXRcIiBAY2xpY2s9XCIhaXNTZWFyY2ggPyBpc09wZW5MaXN0ID0gIWlzT3Blbkxpc3QgOiAnJ1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1pZj1cImlzU2VhcmNoXCIgdi1tb2RlbD1cImlucHV0XCIgQGlucHV0PVwiZmlsdGVyTGlzdCgkZXZlbnQpXCIgQGZvY3VzPVwiaXNPcGVuTGlzdCA9IHRydWVcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIWlzU2VhcmNoXCI+e3sgaW5wdXQgfX08L3RlbXBsYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duX19pbnB1dC1pY29uXCIgQGNsaWNrPVwiaXNTZWFyY2ggPyBpc09wZW5MaXN0ID0gIWlzT3Blbkxpc3QgOiAnJ1wiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpY29uXCIgLz4gXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNiAxN1wiIGZpbGw9XCJub25lXCIgdi1pZj1cIiF0aGlzLiRzbG90cy5pY29uXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjM3NSA3Ljg3NUgwLjYyNUMwLjI3OTgxMyA3Ljg3NSAwIDguMTU0ODEgMCA4LjVDMCA4Ljg0NTE5IDAuMjc5ODEzIDkuMTI1IDAuNjI1IDkuMTI1SDE1LjM3NUMxNS43MjAyIDkuMTI1IDE2IDguODQ1MTkgMTYgOC41QzE2IDguMTU0ODEgMTUuNzIwMiA3Ljg3NSAxNS4zNzUgNy44NzVaXCIgZmlsbD1cIiM5RTlFOUVcIi8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjM3NSAyLjg3NUgwLjYyNUMwLjI3OTgxMyAyLjg3NSAwIDMuMTU0ODEgMCAzLjVDMCAzLjg0NTE5IDAuMjc5ODEzIDQuMTI1IDAuNjI1IDQuMTI1SDE1LjM3NUMxNS43MjAyIDQuMTI1IDE2IDMuODQ1MTkgMTYgMy41QzE2IDMuMTU0ODEgMTUuNzIwMiAyLjg3NSAxNS4zNzUgMi44NzVaXCIgZmlsbD1cIiM5RTlFOUVcIi8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjM3NSAxMi44NzVIMC42MjVDMC4yNzk4MTMgMTIuODc1IDAgMTMuMTU0OCAwIDEzLjVDMCAxMy44NDUyIDAuMjc5ODEzIDE0LjEyNSAwLjYyNSAxNC4xMjVIMTUuMzc1QzE1LjcyMDIgMTQuMTI1IDE2IDEzLjg0NTIgMTYgMTMuNUMxNiAxMy4xNTQ4IDE1LjcyMDIgMTIuODc1IDE1LjM3NSAxMi44NzVaXCIgZmlsbD1cIiM5RTlFOUVcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBcbiAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duX19saXN0XCJcbiAgICAgICAgICByZWY9XCJkcm9wZG93bkxpc3RcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bGkgXG4gICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1pdGVtXCIgXG4gICAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBmaWx0ZXJlZExpc3RcIiBcbiAgICAgICAgICAgICAgOmtleT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RJdGVtKGl0ZW0pXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdsaXN0LWl0ZW0tLWFjdGl2ZSc6IGl0ZW0udmFsdWUgPT09IHNlbGVjdGVkSXRlbS52YWx1ZVxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID57eyBpdGVtLnRpdGxlIH19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPcGVuTGlzdDogZmFsc2UsXG4gICAgICBzZWxlY3RlZEl0ZW06IHRoaXMudmFsdWUsXG4gICAgICBmaWx0ZXJlZExpc3Q6IFtdLFxuICAgICAgaW5wdXQ6IFwiXCJcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZWxlY3RJdGVtKGl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdGVkJywgaXRlbSk7XG4gICAgICB0aGlzLmlzT3Blbkxpc3QgPSAhdGhpcy5pc09wZW5MaXN0O1xuICAgIH0sXG4gICAgZmlsdGVyTGlzdChpbnB1dCkge1xuICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGVsID0+IGVsLnRpdGxlLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXQudGFyZ2V0LnZhbHVlID8gaW5wdXQudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkgOiAnJykpXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB2YWwudGl0bGU7XG4gICAgfSxcbiAgICBpc09wZW5MaXN0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmKHZhbCkge1xuICAgICAgICB0aGlzLiRyZWZzLmRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLS1vcGVuTGlzdCcpXG4gICAgICAgIHRoaXMuJHJlZnMuZHJvcGRvd25MaXN0LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duX19saXN0LS1vcGVuJylcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy4kcmVmcy5kcm9wZG93bkxpc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy4kcmVmcy5kcm9wZG93bkxpc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG5cbiAgICAgICAgaWYodG9wID4gd2luZG93LmlubmVySGVpZ2h0ICsgNTAgJiYgIXRoaXMuJHJlZnMuZHJvcGRvd25MaXN0LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd25fX2xpc3QtLXRvcCcpKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5kcm9wZG93bkxpc3QuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25fX2xpc3QtLXRvcCcpXG4gICAgICAgICAgdGhpcy4kcmVmcy5kcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi0tbGlzdFRvcCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHJlZnMuZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tLW9wZW5MaXN0JylcbiAgICAgICAgdGhpcy4kcmVmcy5kcm9wZG93bkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX2xpc3QtLW9wZW4nKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMudmFsdWUpIHRoaXMuaW5wdXQgPSB0aGlzLnZhbHVlLnRpdGxlO1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5vcHRpb25zO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZighZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLiRyZWZzLmRyb3Bkb3duKSkgdGhpcy5pc09wZW5MaXN0ID0gZmFsc2VcbiAgICB9KVxuICB9XG59KSIsIlZ1ZS51c2UoVnVlTWFzay5WdWVNYXNrUGx1Z2luKTtcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5jb21wb25lbnQoJ3NwLWlucHV0Jywge1xuICBwcm9wczogW1xuICAgJ3RpdGxlJyxcbiAgICdtYXNrJyxcbiAgICd2YWx1ZSdcbiAgXSxcbiAgZW1pdHM6IFtcbiAgICdpbnB1dCdcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic3AtaW5wdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwLWlucHV0X19sYWJlbFwiPnt7IHRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgc3AtaW5wdXRfX2ZpZWxkXCIgdi1tb2RlbD1cImlucHV0VlwiIHYtbWFzaz1cIicrNyAoIyMjKSAjIyMtIyMtIyMnXCIgcGxhY2Vob2xkZXI9XCIrNyAoX19fKSBfX18gLSBfXyAtIF9fXCIgQGlucHV0PVwib25JbnB1dChpbnB1dFYpXCI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRWOiBcIlwiXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHZhbHVlSW5wdXQ6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbklucHV0KHZhbHVlKSB7XG4gICAgICBjb25zdCBudW1iZXJQYXR0ZXJuID0gL1xcZCsvZztcbiAgICAgIGNvbnN0IHZhbCA9ICcrJyArIHZhbHVlLm1hdGNoKCBudW1iZXJQYXR0ZXJuICkuam9pbignJyk7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbCk7XG4gICAgfVxuICB9XG59KSIsIlxuZXhwb3J0IGRlZmF1bHQgVnVlLmNvbXBvbmVudCgnc3AtdGFibGUnLCB7XG4gIHByb3BzOiBbXG4gICAnZGF0YSdcbiAgXSxcbiAgZW1pdHM6IFtcblxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgXG4gICAgICAgIGNsYXNzPVwidGFibGVcIiBcbiAgICAgICAgcmVmPVwidGFibGVcIlxuICAgICAgICBAbW91c2Vkb3duPVwib25Nb3VzZURvd25IYW5kbGVyKCRldmVudClcIlxuICAgICAgICBAbW91c2VlbnRlcj1cIm9uTW91c2VFbnRlckhhbmRsZXIoJGV2ZW50KVwiXG4gICAgICAgIEBtb3VzZXVwPVwib25Nb3VzZVVwSGFuZGxlcigkZXZlbnQpXCJcbiAgICAgICAgQG1vdXNlbW92ZT1cIm9uTW91c2VNb3ZlSGFuZGxlcigkZXZlbnQpXCJcbiAgICAgICAgQG1vdXNlbGVhdmU9XCJvbk1vdXNlTGVhdmVIYW5kbGVyKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fd3JhcHBlclwiIHJlZj1cInRhYmxlV3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2hlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19jb2xcIiB2LWZvcj1cImZpZWxkIGluIGZpZWxkc1wiIDprZXk9XCJmaWVsZC5uYW1lXCI+e3sgZmllbGQudGl0bGUgfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvd1wiIHYtZm9yPVwiaXRlbSBpbiBkYXRhXCIgOmtleT1cIml0ZW0uaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2NvbFwiIHYtZm9yPVwiY29sIGluIGZpZWxkc1wiIDprZXk9XCJjb2wubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjb2wubmFtZSA9PT0gJ3Bob25lSW5wdXQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxNCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHYtaWY9XCJpdGVtLnR5cGUgPT09ICdpbnB1dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjM1OTQgNi4wMTU2MUg0LjAxNjI1TDYuMTY0MzcgMy44Njc0OUM2LjI2MTA5IDMuNzc3MzcgNi4zMzg2NiAzLjY2ODY5IDYuMzkyNDYgMy41NDc5NEM2LjQ0NjI2IDMuNDI3MiA2LjQ3NTE5IDMuMjk2ODUgNi40Nzc1MiAzLjE2NDY3QzYuNDc5ODYgMy4wMzI1IDYuNDU1NTQgMi45MDEyMSA2LjQwNjAzIDIuNzc4NjRDNi4zNTY1MiAyLjY1NjA3IDYuMjgyODQgMi41NDQ3MiA2LjE4OTM2IDIuNDUxMjVDNi4wOTU4OSAyLjM1Nzc4IDUuOTg0NTQgMi4yODQwOSA1Ljg2MTk3IDIuMjM0NThDNS43Mzk0IDIuMTg1MDcgNS42MDgxMSAyLjE2MDc1IDUuNDc1OTQgMi4xNjMwOUM1LjM0Mzc2IDIuMTY1NDIgNS4yMTM0MiAyLjE5NDM1IDUuMDkyNjcgMi4yNDgxNUM0Ljk3MTkyIDIuMzAxOTUgNC44NjMyNCAyLjM3OTUyIDQuNzczMTIgMi40NzYyNEwwLjk1MTU2MSA2LjI5NzhDMC44NTc0NTUgNi4zODg4MiAwLjc4Mjc3IDYuNDk3OTcgMC43MzIwMTUgNi42MTg2NkMwLjY4MTI1OSA2LjczOTM1IDAuNjU1NDg1IDYuODY5MDcgMC42NTYyNDggNi45OTk5OUMwLjY1NTI1MiA3LjEzMDM1IDAuNjgwMjc4IDcuMjU5NjEgMC43Mjk4NiA3LjM4MDE4QzAuNzc5NDQxIDcuNTAwNzUgMC44NTI1ODIgNy42MTAyMiAwLjk0NDk5OCA3LjcwMjE3TDQuNzczMTIgMTEuNTMwM0M0Ljg2MzI0IDExLjYyNyA0Ljk3MTkyIDExLjcwNDYgNS4wOTI2NyAxMS43NTg0QzUuMjEzNDIgMTEuODEyMiA1LjM0Mzc2IDExLjg0MTEgNS40NzU5NCAxMS44NDM1QzUuNjA4MTEgMTEuODQ1OCA1LjczOTQgMTEuODIxNSA1Ljg2MTk3IDExLjc3MkM1Ljk4NDU0IDExLjcyMjUgNi4wOTU4OSAxMS42NDg4IDYuMTg5MzYgMTEuNTU1M0M2LjI4Mjg0IDExLjQ2MTggNi4zNTY1MiAxMS4zNTA1IDYuNDA2MDMgMTEuMjI3OUM2LjQ1NTU0IDExLjEwNTMgNi40Nzk4NiAxMC45NzQgNi40Nzc1MiAxMC44NDE5QzYuNDc1MTkgMTAuNzA5NyA2LjQ0NjI2IDEwLjU3OTMgNi4zOTI0NiAxMC40NTg2QzYuMzM4NjYgMTAuMzM3OCA2LjI2MTA5IDEwLjIyOTIgNi4xNjQzNyAxMC4xMzkxTDQuMDE2MjUgNy45ODQzNkgxMi4zNTk0QzEyLjYyMDQgNy45ODQzNiAxMi44NzA4IDcuODgwNjUgMTMuMDU1NCA3LjY5NjA1QzEzLjI0IDcuNTExNDQgMTMuMzQzNyA3LjI2MTA2IDEzLjM0MzcgNi45OTk5OUMxMy4zNDM3IDYuNzM4OTEgMTMuMjQgNi40ODg1NCAxMy4wNTU0IDYuMzAzOTNDMTIuODcwOCA2LjExOTMyIDEyLjYyMDQgNi4wMTU2MSAxMi4zNTk0IDYuMDE1NjFaXCIgZmlsbD1cIiM0Q0FGNTBcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xLjY0MDYzIDcuOTg0MzlMOS45ODM3NSA3Ljk4NDM5TDcuODM1NjMgMTAuMTMyNUM3LjczODkxIDEwLjIyMjYgNy42NjEzNCAxMC4zMzEzIDcuNjA3NTQgMTAuNDUyMUM3LjU1Mzc0IDEwLjU3MjggNy41MjQ4MSAxMC43MDMyIDcuNTIyNDggMTAuODM1M0M3LjUyMDE0IDEwLjk2NzUgNy41NDQ0NiAxMS4wOTg4IDcuNTkzOTcgMTEuMjIxNEM3LjY0MzQ4IDExLjM0MzkgNy43MTcxNiAxMS40NTUzIDcuODEwNjQgMTEuNTQ4N0M3LjkwNDExIDExLjY0MjIgOC4wMTU0NiAxMS43MTU5IDguMTM4MDMgMTEuNzY1NEM4LjI2MDYgMTEuODE0OSA4LjM5MTg5IDExLjgzOTIgOC41MjQwNiAxMS44MzY5QzguNjU2MjQgMTEuODM0NiA4Ljc4NjU4IDExLjgwNTcgOC45MDczMyAxMS43NTE4QzkuMDI4MDggMTEuNjk4IDkuMTM2NzYgMTEuNjIwNSA5LjIyNjg4IDExLjUyMzhMMTMuMDQ4NCA3LjcwMjJDMTMuMTQyNSA3LjYxMTE4IDEzLjIxNzIgNy41MDIwMyAxMy4yNjggNy4zODEzNEMxMy4zMTg3IDcuMjYwNjUgMTMuMzQ0NSA3LjEzMDkzIDEzLjM0MzggNy4wMDAwMUMxMy4zNDQ3IDYuODY5NjUgMTMuMzE5NyA2Ljc0MDM5IDEzLjI3MDEgNi42MTk4MkMxMy4yMjA2IDYuNDk5MjUgMTMuMTQ3NCA2LjM4OTc4IDEzLjA1NSA2LjI5NzgzTDkuMjI2ODggMi40Njk3QzkuMTM2NzYgMi4zNzI5OSA5LjAyODA4IDIuMjk1NDEgOC45MDczMyAyLjI0MTYxQzguNzg2NTggMi4xODc4MSA4LjY1NjI0IDIuMTU4ODggOC41MjQwNiAyLjE1NjU1QzguMzkxODkgMi4xNTQyMiA4LjI2MDYgMi4xNzg1MyA4LjEzODAzIDIuMjI4MDRDOC4wMTU0NiAyLjI3NzU1IDcuOTA0MTEgMi4zNTEyNCA3LjgxMDY0IDIuNDQ0NzFDNy43MTcxNiAyLjUzODE5IDcuNjQzNDggMi42NDk1MyA3LjU5Mzk3IDIuNzcyMUM3LjU0NDQ2IDIuODk0NjcgNy41MjAxNCAzLjAyNTk2IDcuNTIyNDggMy4xNTgxNEM3LjUyNDgxIDMuMjkwMzEgNy41NTM3NCAzLjQyMDY2IDcuNjA3NTQgMy41NDE0MUM3LjY2MTM0IDMuNjYyMTYgNy43Mzg5MSAzLjc3MDgzIDcuODM1NjMgMy44NjA5NUw5Ljk4Mzc1IDYuMDE1NjRMMS42NDA2MyA2LjAxNTY0QzEuMzc5NTUgNi4wMTU2NCAxLjEyOTE4IDYuMTE5MzUgMC45NDQ1NjkgNi4zMDM5NUMwLjc1OTk2MyA2LjQ4ODU2IDAuNjU2MjUyIDYuNzM4OTQgMC42NTYyNTIgNy4wMDAwMUMwLjY1NjI1MiA3LjI2MTA5IDAuNzU5OTYzIDcuNTExNDYgMC45NDQ1NjkgNy42OTYwN0MxLjEyOTE4IDcuODgwNjggMS4zNzk1NSA3Ljk4NDM5IDEuNjQwNjMgNy45ODQzOVpcIiBmaWxsPVwiI0ZGMzgzOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJ3RlbDonK2l0ZW0ucGhvbmVcIj57eyBnZXRQaG9uZUlucHV0KGl0ZW0pIH19PC9hPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJjb2wubmFtZSA9PT0gJ3Bob25lT24nXCI+PGEgOmhyZWY9XCIndGVsOicraXRlbS5waG9uZU9uXCI+e3sgaXRlbS5waG9uZU9uIH19PC9hPjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiY29sLm5hbWUgPT09ICdzdGF0dXMnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHYtaWY9XCJpdGVtW2NvbC5uYW1lXS5uYW1lID09PSAnYW5zd2VyZWQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNi41MzM2IDEzLjE0QzE2LjA0MTkgMTIuNzI3NyAxMy4xNTg2IDEwLjkwMTggMTIuNjc5MyAxMC45ODU2QzEyLjQ1NDMgMTEuMDI1NiAxMi4yODIyIDExLjIxNzQgMTEuODIxNSAxMS43NjY5QzExLjYwODUgMTIuMDM3NCAxMS4zNzQ1IDEyLjI5MDggMTEuMTIxNyAxMi41MjQ2QzEwLjY1ODcgMTIuNDEyOCAxMC4yMTA1IDEyLjI0NjYgOS43ODYzOCAxMi4wMjk2QzguMTIzMjIgMTEuMjE5OSA2Ljc3OTYxIDkuODc1ODkgNS45NzAzOCA4LjIxMjVDNS43NTMzOCA3Ljc4ODQxIDUuNTg3MjMgNy4zNDAxOCA1LjQ3NTM4IDYuODc3MTJDNS43MDkyMiA2LjYyNDM5IDUuOTYyNTYgNi4zOTA0MiA2LjIzMzA2IDYuMTc3MzhDNi43ODIwNiA1LjcxNjY5IDYuOTc0NDQgNS41NDU2OSA3LjAxNDM4IDUuMzE5NTZDNy4wOTgxOSA0LjgzOTE5IDUuMjcwNjMgMS45NTY5NCA0Ljg2IDEuNDY1MzFDNC42ODc4OCAxLjI2MTY5IDQuNTMxNSAxLjEyNSA0LjMzMTI1IDEuMTI1QzMuNzUwNzUgMS4xMjUgMS4xMjUgNC4zNzE3NSAxLjEyNSA0Ljc5MjVDMS4xMjUgNC44MjY4MSAxLjE4MTI1IDguMjA2ODggNS40NTAwNiAxMi41NDk5QzkuNzkzMTMgMTYuODE4OCAxMy4xNzMyIDE2Ljg3NSAxMy4yMDc1IDE2Ljg3NUMxMy42MjgzIDE2Ljg3NSAxNi44NzUgMTQuMjQ5MiAxNi44NzUgMTMuNjY4N0MxNi44NzUgMTMuNDY4NSAxNi43MzgzIDEzLjMxMjEgMTYuNTMzNiAxMy4xNFpcIiBmaWxsPVwiIzRDQUY1MFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjkzNzUgOC40Mzc1SDE0LjA2MjVDMTQuMDYxMiA3LjI0NDQ0IDEzLjU4NjYgNi4xMDA2MiAxMi43NDMgNS4yNTdDMTEuODk5NCA0LjQxMzM4IDEwLjc1NTYgMy45Mzg4NCA5LjU2MjUgMy45Mzc1VjUuMDYyNUMxMC40NTczIDUuMDYzMzkgMTEuMzE1MyA1LjQxOTI2IDExLjk0OCA2LjA1MkMxMi41ODA3IDYuNjg0NzQgMTIuOTM2NiA3LjU0MjY3IDEyLjkzNzUgOC40Mzc1WlwiIGZpbGw9XCIjNENBRjUwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNzUgOC40Mzc1SDE2Ljg3NUMxNi44NzI4IDYuNDk4NzkgMTYuMTAxNiA0LjY0MDEyIDE0LjczMDggMy4yNjkyNUMxMy4zNTk5IDEuODk4MzcgMTEuNTAxMiAxLjEyNzIzIDkuNTYyNSAxLjEyNVYyLjI1QzExLjIwMjkgMi4yNTE5NCAxMi43NzU2IDIuOTA0NDUgMTMuOTM1NiA0LjA2NDQxQzE1LjA5NTUgNS4yMjQzOCAxNS43NDgxIDYuNzk3MDcgMTUuNzUgOC40Mzc1WlwiIGZpbGw9XCIjNENBRjUwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuNTMzNiAxMy4xNEMxNi4wNDE5IDEyLjcyNzcgMTMuMTU4NiAxMC45MDE4IDEyLjY3OTMgMTAuOTg1NkMxMi40NTQzIDExLjAyNTYgMTIuMjgyMiAxMS4yMTc0IDExLjgyMTUgMTEuNzY2OUMxMS42MDg1IDEyLjAzNzQgMTEuMzc0NSAxMi4yOTA4IDExLjEyMTcgMTIuNTI0NkMxMC42NTg3IDEyLjQxMjggMTAuMjEwNSAxMi4yNDY2IDkuNzg2MzggMTIuMDI5NkM4LjEyMzIyIDExLjIxOTkgNi43Nzk2MSA5Ljg3NTg5IDUuOTcwMzggOC4yMTI1QzUuNzUzMzggNy43ODg0MSA1LjU4NzIzIDcuMzQwMTggNS40NzUzOCA2Ljg3NzEyQzUuNzA5MjIgNi42MjQzOSA1Ljk2MjU2IDYuMzkwNDIgNi4yMzMwNiA2LjE3NzM4QzYuNzgyMDYgNS43MTY2OSA2Ljk3NDQ0IDUuNTQ1NjkgNy4wMTQzOCA1LjMxOTU2QzcuMDk4MTkgNC44MzkxOSA1LjI3MDYzIDEuOTU2OTQgNC44NiAxLjQ2NTMxQzQuNjg3ODggMS4yNjE2OSA0LjUzMTUgMS4xMjUgNC4zMzEyNSAxLjEyNUMzLjc1MDc1IDEuMTI1IDEuMTI1IDQuMzcxNzUgMS4xMjUgNC43OTI1QzEuMTI1IDQuODI2ODEgMS4xODEyNSA4LjIwNjg4IDUuNDUwMDYgMTIuNTQ5OUM5Ljc5MzEzIDE2LjgxODggMTMuMTczMiAxNi44NzUgMTMuMjA3NSAxNi44NzVDMTMuNjI4MyAxNi44NzUgMTYuODc1IDE0LjI0OTIgMTYuODc1IDEzLjY2ODdDMTYuODc1IDEzLjQ2ODUgMTYuNzM4MyAxMy4zMTIxIDE2LjUzMzYgMTMuMTRaXCIgZmlsbD1cIiNGRjM4MzhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMC41MjI3IDguMjcyN0wxMi42NTYyIDYuMTM5MTRMMTQuNzg5OCA4LjI3MjdMMTUuNTg1MiA3LjQ3NzMzTDEzLjQ1MTYgNS4zNDM3NkwxNS41ODUyIDMuMjEwMkwxNC43ODk4IDIuNDE0ODNMMTIuNjU2MiA0LjU0ODM5TDEwLjUyMjcgMi40MTQ4M0w5LjcyNzI5IDMuMjEwMkwxMS44NjA5IDUuMzQzNzZMOS43MjcyOSA3LjQ3NzMzTDEwLjUyMjcgOC4yNzI3WlwiIGZpbGw9XCIjRkYzODM4XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbVtjb2wubmFtZV0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiY29sLm5hbWUgPT09ICdkdXJhdGlvbidcIj57eyBmb3JtYXREdXJhdGlvbihpdGVtW2NvbC5uYW1lXSkgfX08L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImNvbC5uYW1lID09PSAncmVjb3JkJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE5XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE5IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuOTE2MyAyLjAwMTU0QzMuNDE4OTUgMS45NzEwNyAzLjAwMDA4IDIuMzk2ODQgMyAyLjkzMjk0VjE1LjA2NTlDMy4wMDAxIDE1Ljc1OTUgMy42Nzg0MiAxNi4yMTA1IDQuMjU0ODUgMTUuOTAwMkwxNS41MjExIDkuODMzNzdDMTUuODE0NiA5LjY3NTYzIDE2IDkuMzUyNjcgMTYgOC45OTk0MUMxNiA4LjY0NjE2IDE1LjgxNDYgOC4zMjMxOSAxNS41MjExIDguMTY1MDZMNC4yNTQ4NSAyLjA5ODU4QzQuMTQ5MzEgMi4wNDE3OCA0LjAzNDExIDIuMDA4NzYgMy45MTYzIDIuMDAxNTRaXCIgZmlsbD1cIiM0Q0FGNTBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZG93bmxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTlcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTkgMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcuMzcyMjUgMi4xMTQyNUM3LjI1IDIuMzU0MjUgNy4yNSAyLjY2OTI1IDcuMjUgMy4zVjguMjVINi4zNTIyNUM1LjY5IDguMjUgNS4zNTg1IDguMjUgNS4yMDE3NSA4LjM4MkM1LjEzNDQ5IDguNDM4NTQgNS4wODE0MSA4LjUxMDA1IDUuMDQ2NzYgOC41OTA4QzUuMDEyMTIgOC42NzE1NSA0Ljk5Njg3IDguNzU5MjkgNS4wMDIyNSA4Ljg0N0M1LjAxNSA5LjA1MjUgNS4yNDM3NSA5LjI5MTc1IDUuNzAwNSA5Ljc3MUw4Ljg0OSAxMy4wNzE3QzkuMDc1NSAxMy4zMTAyIDkuMTg4NzUgMTMuNDI4OCA5LjMyMTUgMTMuNDczQzkuNDM3MzMgMTMuNTExOCA5LjU2MjY3IDEzLjUxMTggOS42Nzg1IDEzLjQ3M0M5LjgxMTI1IDEzLjQyODggOS45MjQ1IDEzLjMxMDIgMTAuMTUxIDEzLjA3MTdMMTMuMjk5NSA5Ljc3MTc1QzEzLjc1NyA5LjI5MTc1IDEzLjk4NSA5LjA1MTc1IDEzLjk5NyA4Ljg0N0MxNC4wMDI1IDguNzU5MzYgMTMuOTg3MyA4LjY3MTY1IDEzLjk1MjggOC41OTA5MUMxMy45MTgzIDguNTEwMTYgMTMuODY1NCA4LjQzODYxIDEzLjc5ODMgOC4zODJDMTMuNjQxNSA4LjI1IDEzLjMxMDggOC4yNSAxMi42NDc4IDguMjVIMTEuNzVWMy4zQzExLjc1IDIuNjcgMTEuNzUgMi4zNTUgMTEuNjI3IDIuMTE0MjVDMTEuNTE5MyAxLjkwMjQ5IDExLjM0NzMgMS43MzAyNyAxMS4xMzU3IDEuNjIyMjVDMTAuODk1OCAxLjUgMTAuNTgwOCAxLjUgOS45NSAxLjVIOS4wNUM4LjQyIDEuNSA4LjEwNSAxLjUgNy44NjQyNSAxLjYyMjI1QzcuNjUyMzggMS43MzAxNCA3LjQ4MDE0IDEuOTAyMzggNy4zNzIyNSAyLjExNDI1Wk00LjI1IDE1Ljc1QzQuMjUgMTUuOTQ4OSA0LjMyOTAyIDE2LjEzOTcgNC40Njk2NyAxNi4yODAzQzQuNjEwMzIgMTYuNDIxIDQuODAxMDkgMTYuNSA1IDE2LjVIMTRDMTQuMTk4OSAxNi41IDE0LjM4OTcgMTYuNDIxIDE0LjUzMDMgMTYuMjgwM0MxNC42NzEgMTYuMTM5NyAxNC43NSAxNS45NDg5IDE0Ljc1IDE1Ljc1QzE0Ljc1IDE1LjU1MTEgMTQuNjcxIDE1LjM2MDMgMTQuNTMwMyAxNS4yMTk3QzE0LjM4OTcgMTUuMDc5IDE0LjE5ODkgMTUgMTQgMTVINUM0LjgwMTA5IDE1IDQuNjEwMzIgMTUuMDc5IDQuNDY5NjcgMTUuMjE5N0M0LjMyOTAyIDE1LjM2MDMgNC4yNSAxNS41NTExIDQuMjUgMTUuNzVaXCIgZmlsbD1cIiM0Q0FGNTBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJjb2wubmFtZSA9PT0gJ25hbWUnXCI+PGEgaHJlZj1cIiNcIj57eyBpdGVtLm5hbWUgfX08L2E+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IGl0ZW1bY29sLm5hbWVdIH19PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2RhdGUnLFxuICAgICAgICAgIHRpdGxlOiAn0JTQsNGC0LAg0Lgg0LLRgNC10LzRjyDQt9Cy0L7QvdC60LAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncGhvbmVJbnB1dCcsXG4gICAgICAgICAgdGl0bGU6ICfQotC10LvQtdGE0L7QvSwg0LrRgtC+INC30LLQvtC90LjQuydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwaG9uZU9uJyxcbiAgICAgICAgICB0aXRsZTogJ9Cd0L7QvNC10YAsINC90LAg0LrQvtGC0L7RgNGL0Lkg0LHRi9C7INC30LLQvtC90L7QuidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICB0aXRsZTogJ9CY0LzRjyDRgdC+0YLRgNGD0LTQvdC40LrQsCwg0LrRgtC+INC/0YDQuNC90Y/QuyDQt9Cy0L7QvdC+0LonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnc3RhdHVzJyxcbiAgICAgICAgICB0aXRsZTogJ9Ch0YLQsNGC0YPRgSAo0L/RgNC+0L/Rg9GJ0LXQvdC90YvQuSwg0YHQvtGB0YLQvtGP0LLRiNC40LnRgdGPKSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdkdXJhdGlvbicsXG4gICAgICAgICAgdGl0bGU6ICfQlNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LfQstC+0L3QutCwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3JlY29yZCcsXG4gICAgICAgICAgdGl0bGU6ICfQl9Cw0L/QuNGB0Ywg0LfQstC+0L3QutCwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29wZXJhdG9yJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0L/QtdGA0LDRgtC+0YAg0YHQstGP0LfQuCdcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgIHN0YXJ0WDogMCxcbiAgICAgIHg6IDAsXG4gICAgICBjbGllbnRYOiAwXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0UGhvbmVJbnB1dChkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YS5uYW1lID8gZGF0YS5uYW1lIDogZGF0YS5waG9uZVxuICAgIH0sXG4gICAgZm9ybWF0RHVyYXRpb24odGltZSkge1xuICAgICAgY29uc3QgZGF0YSA9IG1vbWVudC5kdXJhdGlvbih0aW1lLCAnc2Vjb25kcycpLl9kYXRhXG5cbiAgICAgIGxldCBzdHIgPSBcIlwiXG5cbiAgICAgIGlmKGRhdGEuaG91cnMgPiAwKSB7XG4gICAgICAgIHN0ciArPSBgJHtkYXRhLmhvdXJzfSDRhy4gYFxuICAgICAgfVxuICAgICAgaWYoZGF0YS5taW51dGVzKSB7XG4gICAgICAgIHN0ciArPSBgJHtkYXRhLm1pbnV0ZXN9INC80LjQvS4gYFxuICAgICAgfVxuXG4gICAgICBzdHIgKz0gYCR7ZGF0YS5zZWNvbmRzfSDRgdC10LouYFxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG4gICAgb25Nb3VzZUxlYXZlSGFuZGxlcigpIHtcbiAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kcmVmcy50YWJsZS5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICB9LFxuICAgIG9uTW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICAgICAgdGhpcy5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhcnRYID0gZXZlbnQub2Zmc2V0WCAtIHRoaXMuJHJlZnMudGFibGVXcmFwcGVyLm9mZnNldExlZnQ7XG4gICAgICB0aGlzLiRyZWZzLnRhYmxlLnN0eWxlLmN1cnNvciA9IFwiZ3JhYmJpbmdcIjtcblxuICAgIH0sXG4gICAgb25Nb3VzZUVudGVySGFuZGxlcihldmVudCkge1xuICAgICAgdGhpcy4kcmVmcy50YWJsZS5zdHlsZS5jdXJzb3IgPSBcImdyYWJcIjtcbiAgICB9LFxuICAgIG9uTW91c2VVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIHRoaXMuJHJlZnMudGFibGUuc3R5bGUuY3Vyc29yID0gXCJncmFiXCI7XG4gICAgICB0aGlzLnByZXNzZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uTW91c2VNb3ZlSGFuZGxlcihldmVudCkge1xuICAgICAgaWYoIXRoaXMucHJlc3NlZCB8fCBldmVudC5jbGllbnRYID09PSB0aGlzLmNsaWVudFgpIHJldHVybjtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMueCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgICB0aGlzLmNsaWVudFggPSBldmVudC5jbGllbnRYO1xuXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5vZmZzZXRYKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnggLSB0aGlzLnN0YXJ0WClcblxuICAgICAgdGhpcy4kcmVmcy50YWJsZVdyYXBwZXIuc3R5bGUubGVmdCA9IGAke3RoaXMueCAtIHRoaXMuc3RhcnRYfXB4YDtcblxuICAgICAgdGhpcy5jaGVja0JvdW5kYXJ5KCk7XG4gICAgfSxcblxuICAgIGNoZWNrQm91bmRhcnkoKSB7XG4gICAgICBsZXQgb3V0ZXIgPSB0aGlzLiRyZWZzLnRhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IGlubmVyID0gdGhpcy4kcmVmcy50YWJsZVdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChwYXJzZUludCh0aGlzLiRyZWZzLnRhYmxlV3JhcHBlci5zdHlsZS5sZWZ0KSA+IDApIHtcbiAgICAgICAgdGhpcy4kcmVmcy50YWJsZVdyYXBwZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbm5lci5yaWdodCA8IG91dGVyLnJpZ2h0KSB7XG4gICAgICAgIHRoaXMuJHJlZnMudGFibGVXcmFwcGVyLnN0eWxlLmxlZnQgPSBgLSR7aW5uZXIud2lkdGggLSBvdXRlci53aWR0aH1weGA7XG4gICAgICB9XG4gICAgfVxuICB9LFxufSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5ndWFnZSB7XG4gIGNvbnN0cnVjdG9yIChsYW5ndWFnZSwgbW9udGhzLCBtb250aHNBYmJyLCBkYXlzKSB7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlXG4gICAgdGhpcy5tb250aHMgPSBtb250aHNcbiAgICB0aGlzLm1vbnRoc0FiYnIgPSBtb250aHNBYmJyXG4gICAgdGhpcy5kYXlzID0gZGF5c1xuICAgIHRoaXMucnRsID0gZmFsc2VcbiAgICB0aGlzLnltZCA9IGZhbHNlXG4gICAgdGhpcy55ZWFyU3VmZml4ID0gJydcbiAgfVxuXG4gIGdldCBsYW5ndWFnZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlXG4gIH1cblxuICBzZXQgbGFuZ3VhZ2UgKGxhbmd1YWdlKSB7XG4gICAgaWYgKHR5cGVvZiBsYW5ndWFnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xhbmd1YWdlIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICB0aGlzLl9sYW5ndWFnZSA9IGxhbmd1YWdlXG4gIH1cblxuICBnZXQgbW9udGhzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9udGhzXG4gIH1cblxuICBzZXQgbW9udGhzIChtb250aHMpIHtcbiAgICBpZiAobW9udGhzLmxlbmd0aCAhPT0gMTIpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBUaGVyZSBtdXN0IGJlIDEyIG1vbnRocyBmb3IgJHt0aGlzLmxhbmd1YWdlfSBsYW5ndWFnZWApXG4gICAgfVxuICAgIHRoaXMuX21vbnRocyA9IG1vbnRoc1xuICB9XG5cbiAgZ2V0IG1vbnRoc0FiYnIgKCkge1xuICAgIHJldHVybiB0aGlzLl9tb250aHNBYmJyXG4gIH1cblxuICBzZXQgbW9udGhzQWJiciAobW9udGhzQWJicikge1xuICAgIGlmIChtb250aHNBYmJyLmxlbmd0aCAhPT0gMTIpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBUaGVyZSBtdXN0IGJlIDEyIGFiYnJldmlhdGVkIG1vbnRocyBmb3IgJHt0aGlzLmxhbmd1YWdlfSBsYW5ndWFnZWApXG4gICAgfVxuICAgIHRoaXMuX21vbnRoc0FiYnIgPSBtb250aHNBYmJyXG4gIH1cblxuICBnZXQgZGF5cyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheXNcbiAgfVxuXG4gIHNldCBkYXlzIChkYXlzKSB7XG4gICAgaWYgKGRheXMubGVuZ3RoICE9PSA3KSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVGhlcmUgbXVzdCBiZSA3IGRheXMgZm9yICR7dGhpcy5sYW5ndWFnZX0gbGFuZ3VhZ2VgKVxuICAgIH1cbiAgICB0aGlzLl9kYXlzID0gZGF5c1xuICB9XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbjsiLCJpbXBvcnQgTGFuZ3VhZ2UgZnJvbSAnLi9MYW5ndWFnZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgbmV3IExhbmd1YWdlKFxuICdSdXNzaWFuJyxcbiBbJ9Cv0L3QstCw0YDRjCcsICfQpNC10LLRgNCw0LvRjCcsICfQnNCw0YDRgicsICfQkNC/0YDQtdC70YwnLCAn0JzQsNC5JywgJ9CY0Y7QvdGMJywgJ9CY0Y7Qu9GMJywgJ9CQ0LLQs9GD0YHRgicsICfQodC10L3RgtGP0LHRgNGMJywgJ9Ce0LrRgtGP0LHRgNGMJywgJ9Cd0L7Rj9Cx0YDRjCcsICfQlNC10LrQsNCx0YDRjCddLFxuIFsn0K/QvdCyJywgJ9Ck0LXQstGAJywgJ9Cc0LDRgNGCJywgJ9CQ0L/RgCcsICfQnNCw0LknLCAn0JjRjtC90YwnLCAn0JjRjtC70YwnLCAn0JDQstCzJywgJ9Ch0LXQvdGCJywgJ9Ce0LrRgicsICfQndC+0Y/QsScsICfQlNC10LonXSxcbiBbJ9CS0YEnLCAn0J/QvScsICfQktGCJywgJ9Ch0YAnLCAn0KfRgicsICfQn9GCJywgJ9Ch0LEnXVxuKVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU3BEcm9wZG93biBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLmpzXCI7XG5pbXBvcnQgU3BJbnB1dCBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0LmpzXCI7XG5pbXBvcnQgU3BDaGVja2JveCBmcm9tIFwiLi9jb21wb25lbnRzL2NoZWNrYm94LmpzXCI7XG5pbXBvcnQgU3BCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9idXR0b24uanNcIjtcbmltcG9ydCBTcFRhYmxlIGZyb20gXCIuL2NvbXBvbmVudHMvdGFibGUuanNcIlxuaW1wb3J0IHJ1IGZyb20gXCIuL2xvY2FsZS9ydS5qc1wiO1xuXG5jb25zdCBwYWdpbmF0ZSA9IFZ1ZS5jb21wb25lbnQoJ3BhZ2luYXRlJywgVnVlanNQYWdpbmF0ZSlcbmNvbnN0IHRhYmxlID0gVnVlLmNvbXBvbmVudCgnc3AtdGFibGUnLCBTcFRhYmxlKVxuVnVlLnVzZShWdWV0YWJsZSlcblxubmV3IFZ1ZSh7XG4gIGVsOiBcIiNhcHBcIixcbiAgZGF0YToge1xuICAgIGRhdGVQaWNrZXJMYW5nOiBydSxcbiAgICBwZXJpb2Q6IHtcbiAgICAgIHNlbGVjdGVkOiB7dGl0bGU6ICfQodC10LPQvtC00L3RjycsIHZhbHVlOiAndG9kYXknfSxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge3RpdGxlOiAn0KHQtdCz0L7QtNC90Y8nLCB2YWx1ZTogJ3RvZGF5J30sXG4gICAgICAgIHt0aXRsZTogJ9CS0YfQtdGA0LAnLCB2YWx1ZTogJ3llc3RlcmRheSd9LFxuICAgICAgICB7dGl0bGU6ICfQn9C+0LfQsNCy0YfQtdGA0LAnLCB2YWx1ZTogJ2JlZm9yZVllc3RlcmRheSd9LFxuICAgICAgICB7dGl0bGU6ICfQndC10LTQtdC70Y4g0L3QsNC30LDQtCcsIHZhbHVlOiAnYV93ZWVrX2Fnbyd9LFxuICAgICAgXVxuICAgIH0sXG4gICAgcmVzcG9uc2libGVPcHRpb25zOiBbXG4gICAgICB7dGl0bGU6ICfQkNC70LXQutGB0LDQvdC00YAnLCB2YWx1ZTogJ2FsZXhhbmRlcid9LFxuICAgICAge3RpdGxlOiAn0J3QuNC60L7Qu9Cw0LknLCB2YWx1ZTogJ25pa29sYXknfSxcbiAgICAgIHt0aXRsZTogJ9Cc0LDRgNC40Y8nLCB2YWx1ZTogJ21hcmlhJ30sXG4gICAgICB7dGl0bGU6ICfQntC70LXQsycsIHZhbHVlOiAnb2xlZyd9LFxuICAgIF0sXG4gICAgaW5jb21pbmdPcHRpb25zOiBbXSxcbiAgICBkdXJhdGlvbk9wdGlvbnM6IFtdLFxuICAgIHN0YXR1c09wdGlvbnM6IFtdLFxuICAgIGNvdW50OiB7XG4gICAgICBjb3VudFY6IHt0aXRsZTogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgICBjb3VudE9wdGlvbnM6IFtcbiAgICAgICAge3RpdGxlOiAnMTAnLCB2YWx1ZTogMTAgfSxcbiAgICAgICAge3RpdGxlOiAnMjAnLCB2YWx1ZTogMjAgfSxcbiAgICAgICAge3RpdGxlOiAnNTAnLCB2YWx1ZTogNTAgfSxcbiAgICAgICAge3RpdGxlOiAnMTAwJywgdmFsdWU6IDEwMCB9LFxuICAgICAgXVxuICAgIH0sXG4gICAgcGFnZTogMSxcbiAgICBkYXRhVGFibGU6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5MzMnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTM0JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ3JlamVjdGVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Cd0LUg0L7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdvdXRnb2luZycsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTM1JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTkzNicsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5MzcnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTM4JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTkzOScsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5NDAnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTQxJyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTk0MicsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5NDMnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTQ0JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTk0NScsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5NDYnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTQ3JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTk0OCcsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSx7XG4gICAgICAgIGlkOiAnNjg5OTQ5JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTk1MCcsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5NTEnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTUyJyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTk1MycsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5NTQnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTU1JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTk1NicsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5NTcnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTU4JyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzY4OTk1OScsXG4gICAgICAgIGRhdGU6IDE3MDU2NjIxOTkwMDAsXG4gICAgICAgIG5hbWU6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIG5hbWU6ICdhbnN3ZXJlZCcsXG4gICAgICAgICAgdGl0bGU6ICfQntGC0LLQtdGH0LXQvSdcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgZHVyYXRpb246IDUwNzYsXG4gICAgICAgIHJlY29yZDogbnVsbCxcbiAgICAgICAgb3BlcmF0b3I6ICdtZWdhZm9uJyxcbiAgICAgICAgcGhvbmVJbnB1dDogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgcGhvbmU6ICcrNzk5OTk5OTk5OTknLFxuICAgICAgICBwaG9uZU9uOiAnKzc5Mjg5OTk5OTk5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc2ODk5NjAnLFxuICAgICAgICBkYXRlOiAxNzA1NjYyMTk5MDAwLFxuICAgICAgICBuYW1lOiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBuYW1lOiAnYW5zd2VyZWQnLFxuICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRh9C10L0nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDc2LFxuICAgICAgICByZWNvcmQ6IG51bGwsXG4gICAgICAgIG9wZXJhdG9yOiAnbWVnYWZvbicsXG4gICAgICAgIHBob25lSW5wdXQ6ICfQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXG4gICAgICAgIHBob25lOiAnKzc5OTk5OTk5OTk5JyxcbiAgICAgICAgcGhvbmVPbjogJys3OTI4OTk5OTk5OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNjg5OTYxJyxcbiAgICAgICAgZGF0ZTogMTcwNTY2MjE5OTAwMCxcbiAgICAgICAgbmFtZTogJ9Ca0L7QvdGB0YLQsNC90YLQuNC90L7QsiDQmtC+0L3RgdGC0LDQvdGC0LjQvSDQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLQuNGHJyxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgbmFtZTogJ2Fuc3dlcmVkJyxcbiAgICAgICAgICB0aXRsZTogJ9Ce0YLQstC10YfQtdC9J1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBkdXJhdGlvbjogNTA3NixcbiAgICAgICAgcmVjb3JkOiBudWxsLFxuICAgICAgICBvcGVyYXRvcjogJ21lZ2Fmb24nLFxuICAgICAgICBwaG9uZUlucHV0OiAn0JrQvtC90YHRgtCw0L3RgtC40L3QvtCyINCa0L7QvdGB0YLQsNC90YLQuNC9INCa0L7QvdGB0YLQsNC90YLQuNC90L7QstC40YcnLFxuICAgICAgICBwaG9uZTogJys3OTk5OTk5OTk5OScsXG4gICAgICAgIHBob25lT246ICcrNzkyODk5OTk5OTknXG4gICAgICB9LFxuXG4gICAgXSxcbiAgICBkYXRlOiB7XG4gICAgICBzdGFydDogbmV3IERhdGUoKSxcbiAgICAgIGVuZDogbmV3IERhdGUoKVxuICAgIH0sXG4gICAgZmlsdGVyZWREYXRhOiBbXSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBkYXRlOiB7XG4gICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICAgICAgICBlbmQ6IG5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICBzdGF0dXM6IHt0aXRsZTogJycsIHZhbHVlOiAnJ30sXG4gICAgICBkdXJhdGlvbjoge3RpdGxlOiAnJywgdmFsdWU6ICcnfSxcbiAgICAgIGluY29taW5nOiB7dGl0bGU6ICcnLCB2YWx1ZTogJyd9LFxuICAgICAgcmVzcG9uc2libGU6IHt0aXRsZTogJycsIHZhbHVlOiAnJ30sXG4gICAgICBpc1JlY29yZDogZmFsc2UsXG4gICAgICBwaG9uZU9uOiBcIlwiLFxuICAgICAgcGhvbmVJbnB1dDogXCJcIixcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnc3AtZHJvcGRvd24nOiBTcERyb3Bkb3duLFxuICAgICdzcC1pbnB1dCc6IFNwSW5wdXQsXG4gICAgJ3NwLWNoZWNrYm94JzogU3BDaGVja2JveCxcbiAgICAnc3AtYnV0dG9uJzogU3BCdXR0b24sXG4gICAgJ2RhdGUtcGlja2VyJzogdnVlanNEYXRlcGlja2VyLFxuICAgICdwYWdpbmF0ZSc6IHBhZ2luYXRlLFxuICAgICdzcC10YWJsZSc6IHRhYmxlXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdmlld0RhdGFUYWJsZSgpIHtcbiAgICAgIGNvbnN0IGFyciA9IFsuLi50aGlzLmRhdGFUYWJsZV1cbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKCh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMuY291bnQuY291bnRWLnZhbHVlLCB0aGlzLmNvdW50LmNvdW50Vi52YWx1ZSlcbiAgICB9LFxuICAgIGNvdW50UGFnZSgpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5kYXRhVGFibGUubGVuZ3RoIC8gdGhpcy5jb3VudC5jb3VudFYudmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGN1c3RvbUZvcm1hdHRlcihkYXRlKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygncnUtUlUnLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIHNldE5ld1BhZ2UocGFnZSkge1xuICAgICAgdGhpcy5wYWdlID0gcGFnZVxuICAgIH0sXG4gICAgY2hvb3NlUGVyaW9kKHBlcmlvZCkge1xuICAgICAgaWYocGVyaW9kLnZhbHVlID09PSAndG9kYXknKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5kYXRlLnN0YXJ0ID0gbW9tZW50KCkuaG91cigwKS5taW51dGUoMCkuc2Vjb25kKDApLl9kXG4gICAgICAgIHRoaXMuZmlsdGVycy5kYXRlLmVuZCA9IG1vbWVudCgpLmRheSgxKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcbiAgICAgIH1cbiAgICAgIGlmKHBlcmlvZC52YWx1ZSA9PT0gJ3llc3RlcmRheScpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzLmRhdGUuc3RhcnQgPSBtb21lbnQoKS5kYXkoLTEpLmhvdXIoMCkubWludXRlKDApLnNlY29uZCgwKS5fZFxuICAgICAgICB0aGlzLmZpbHRlcnMuZGF0ZS5lbmQgPSBtb21lbnQoKS5kYXkoMCkuaG91cigwKS5taW51dGUoMCkuc2Vjb25kKDApLl9kXG4gICAgICB9XG4gICAgICBpZihwZXJpb2QudmFsdWUgPT09ICdiZWZvcmVZZXN0ZXJkYXknKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5kYXRlLnN0YXJ0ID0gbW9tZW50KCkuZGF5KC0yKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcbiAgICAgICAgdGhpcy5maWx0ZXJzLmRhdGUuZW5kID0gbW9tZW50KCkuZGF5KC0xKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcbiAgICAgIH1cbiAgICAgIGlmKHBlcmlvZC52YWx1ZSA9PT0gJ2Ffd2Vla19hZ28nKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5kYXRlLnN0YXJ0ID0gbW9tZW50KCkuZGF5KC03KS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCkuX2RcbiAgICAgICAgdGhpcy5maWx0ZXJzLmRhdGUuZW5kID0gbW9tZW50KCkuZGF5KDApLmhvdXIoMCkubWludXRlKDApLnNlY29uZCgwKS5fZFxuICAgICAgfVxuICAgIH0sXG4gICAgdmlld0ZpbHRlcmVkRGF0YVRhYmxlKCkge1xuXG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmRhdGFUYWJsZS5maWx0ZXIoKGVsKSA9PiB7XG5cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhVGFibGVcbiAgICB0aGlzLmNob29zZVBlcmlvZCh0aGlzLnBlcmlvZC5zZWxlY3RlZClcbiAgfVxufSkiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJlbWl0cyIsInRlbXBsYXRlIiwiZGF0YSIsImNvbXB1dGVkIiwiZ2V0Q2xhc3MiLCJjb2xvciIsImNoZWNrIiwiY2xhc3NPYmoiLCJwb3NpdGlvbmxhYmVsIiwiZ2V0SWQiLCJpZCIsIm1ldGhvZHMiLCJpc09wZW5MaXN0Iiwic2VsZWN0ZWRJdGVtIiwidmFsdWUiLCJmaWx0ZXJlZExpc3QiLCJpbnB1dCIsInNlbGVjdEl0ZW0iLCJpdGVtIiwiJGVtaXQiLCJmaWx0ZXJMaXN0Iiwib3B0aW9ucyIsImZpbHRlciIsImVsIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwidGFyZ2V0Iiwid2F0Y2giLCJ2YWwiLCIkcmVmcyIsImRyb3Bkb3duIiwiY2xhc3NMaXN0IiwiYWRkIiwiZHJvcGRvd25MaXN0IiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjb250YWlucyIsInJlbW92ZSIsIm1vdW50ZWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29tcG9zZWRQYXRoIiwidXNlIiwiVnVlTWFzayIsIlZ1ZU1hc2tQbHVnaW4iLCJpbnB1dFYiLCJ2YWx1ZUlucHV0IiwiZ2V0Iiwic2V0Iiwib25JbnB1dCIsIm51bWJlclBhdHRlcm4iLCJtYXRjaCIsImpvaW4iLCJmaWVsZHMiLCJuYW1lIiwicHJlc3NlZCIsInN0YXJ0WCIsIngiLCJjbGllbnRYIiwiZ2V0UGhvbmVJbnB1dCIsInBob25lIiwiZm9ybWF0RHVyYXRpb24iLCJ0aW1lIiwibW9tZW50IiwiZHVyYXRpb24iLCJfZGF0YSIsInN0ciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJvbk1vdXNlTGVhdmVIYW5kbGVyIiwidGFibGUiLCJzdHlsZSIsImN1cnNvciIsIm9uTW91c2VEb3duSGFuZGxlciIsImV2ZW50Iiwib2Zmc2V0WCIsInRhYmxlV3JhcHBlciIsIm9mZnNldExlZnQiLCJvbk1vdXNlRW50ZXJIYW5kbGVyIiwib25Nb3VzZVVwSGFuZGxlciIsIm9uTW91c2VNb3ZlSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImxlZnQiLCJjaGVja0JvdW5kYXJ5Iiwib3V0ZXIiLCJpbm5lciIsInBhcnNlSW50IiwicmlnaHQiLCJ3aWR0aCIsIkxhbmd1YWdlIiwiY29uc3RydWN0b3IiLCJsYW5ndWFnZSIsIm1vbnRocyIsIm1vbnRoc0FiYnIiLCJkYXlzIiwicnRsIiwieW1kIiwieWVhclN1ZmZpeCIsIl9sYW5ndWFnZSIsIlR5cGVFcnJvciIsIl9tb250aHMiLCJsZW5ndGgiLCJSYW5nZUVycm9yIiwiX21vbnRoc0FiYnIiLCJfZGF5cyIsIlNwRHJvcGRvd24iLCJTcElucHV0IiwiU3BDaGVja2JveCIsIlNwQnV0dG9uIiwiU3BUYWJsZSIsInJ1IiwicGFnaW5hdGUiLCJWdWVqc1BhZ2luYXRlIiwiVnVldGFibGUiLCJkYXRlUGlja2VyTGFuZyIsInBlcmlvZCIsInNlbGVjdGVkIiwicmVzcG9uc2libGVPcHRpb25zIiwiaW5jb21pbmdPcHRpb25zIiwiZHVyYXRpb25PcHRpb25zIiwic3RhdHVzT3B0aW9ucyIsImNvdW50IiwiY291bnRWIiwiY291bnRPcHRpb25zIiwicGFnZSIsImRhdGFUYWJsZSIsImRhdGUiLCJzdGF0dXMiLCJ0eXBlIiwicmVjb3JkIiwib3BlcmF0b3IiLCJwaG9uZUlucHV0IiwicGhvbmVPbiIsInN0YXJ0IiwiRGF0ZSIsImVuZCIsImZpbHRlcmVkRGF0YSIsImZpbHRlcnMiLCJpbmNvbWluZyIsInJlc3BvbnNpYmxlIiwiaXNSZWNvcmQiLCJjb21wb25lbnRzIiwidnVlanNEYXRlcGlja2VyIiwidmlld0RhdGFUYWJsZSIsImFyciIsInNwbGljZSIsImNvdW50UGFnZSIsIk1hdGgiLCJjZWlsIiwiY3VzdG9tRm9ybWF0dGVyIiwieWVhciIsIm1vbnRoIiwiZGF5IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2V0TmV3UGFnZSIsImNob29zZVBlcmlvZCIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJfZCIsInZpZXdGaWx0ZXJlZERhdGFUYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=