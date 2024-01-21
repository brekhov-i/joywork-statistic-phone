export default Vue.component('sp-dropdown', {
  props: [
   'options',
   'title',
   'icon',
   'value',
   'is-search'
  ],
  emits: [
   'selected'
  ],
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
  data: function(){
    return {
      isOpenList: false,
      selectedItem: this.value,
      filteredList: [],
      input: ""
    }
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.$emit('selected', item);
      this.isOpenList = !this.isOpenList;
    },
    filterList(input) {
      this.filteredList = this.options.filter(el => el.title.toUpperCase().includes(input.target.value ? input.target.value.toUpperCase() : ''))
    }
  },
  watch: {
    value: function(val) {
      this.input = val.title;
    },
    isOpenList: function(val) {
      if(val) {
        this.$refs.dropdown.classList.add('dropdown--openList')
        this.$refs.dropdownList.classList.add('dropdown__list--open')
        const top = this.$refs.dropdownList.getBoundingClientRect().top + this.$refs.dropdownList.getBoundingClientRect().height;


        if(top > window.innerHeight + 50 && !this.$refs.dropdownList.classList.contains('dropdown__list--top')) {
          this.$refs.dropdownList.classList.add('dropdown__list--top')
          this.$refs.dropdown.classList.add('dropdown--listTop')
        }
      } else {
        this.$refs.dropdown.classList.remove('dropdown--openList')
        this.$refs.dropdownList.classList.remove('dropdown__list--open')
      }
    }
  },
  mounted: function () {
    if(this.value) this.input = this.value.title;
    this.filteredList = this.options;
    document.addEventListener('click', e => {
      if(!e.composedPath().includes(this.$refs.dropdown)) this.isOpenList = false
    })
  }
})