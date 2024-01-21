
export default Vue.component('sp-table', {
  props: [
   'data',
   'count'
  ],
  emits: [

  ],
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
      fields: [
        {
          name: 'date',
          title: 'Дата и время звонка'
        },
        {
          name: 'phoneInput',
          title: 'Телефон, кто звонил'
        },
        {
          name: 'phoneOn',
          title: 'Номер, на который был звонок'
        },
        {
          name: 'name',
          title: 'Имя сотрудника, кто принял звонок'
        },
        {
          name: 'status',
          title: 'Статус (пропущенный, состоявшийся)'
        },
        {
          name: 'duration',
          title: 'Длительность звонка'
        },
        {
          name: 'record',
          title: 'Запись звонка'
        },
        {
          name: 'operator',
          title: 'Оператор связи'
        },
      ],
      pressed: false,
      startX: 0,
      x: 0,
      clientX: 0
    }
  },
  methods: {
    getPhoneInput(data) {
      return data.name ? data.name : data.phone
    },
    formatDuration(time) {
      const data = moment.duration(time, 'seconds')._data

      let str = ""

      if(data.hours > 0) {
        str += `${data.hours} ч. `
      }
      if(data.minutes) {
        str += `${data.minutes} мин. `
      }

      str += `${data.seconds} сек.`

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
      if(!this.pressed || event.clientX === this.clientX) return;
      event.preventDefault();

      this.x = event.offsetX;
      this.clientX = event.clientX;

      console.log(event.offsetX)

      console.log(this.x - this.startX)

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
  },
  watch: {
    count: function(val) {
      console.log(this.$refs.tableWrapper.getBoundingClientRect().height)
      this.$refs.table.style.height = `${this.$refs.tableWrapper.getBoundingClientRect().height + 36.5}px`
    }
  },
  mounted() {
    console.log(this.$refs.tableWrapper.getBoundingClientRect().height)
    this.$refs.table.style.height = `${this.$refs.tableWrapper.getBoundingClientRect().height + 36.5}px`
  }
})