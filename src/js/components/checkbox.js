export default Vue.component('sp-checkbox', {
  props: [
    'positionlabel',
    'title',
    'id'
  ],
  emits: [
   'check'
  ],
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
    }
  },
  computed: {
    classObj: function () {
      return this.positionlabel ? `checkbox--${this.positionlabel}` : 'checkbox--left'
    },
    getId: function () {
      return this.id ? `checkbox${this.id}` : 'checkbox'
    }
  },
  methods: {}
})