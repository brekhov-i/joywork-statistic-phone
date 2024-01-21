export default Vue.component('sp-dropdown', {
  props: [
   'options',
   'title',
   'icon',
   'value'
  ],
  emits: [
   'selected'
  ],
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
  data: function(){
    return {
      isOpenList: false,
      selectedItem: this.value,
    }
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
      if(!e.composedPath().includes(this.$refs.dropdown)) this.isOpenList = false
    })
  }
})