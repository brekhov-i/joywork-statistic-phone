Vue.use(VueMask.VueMaskPlugin);
export default Vue.component('sp-input', {
  props: [
   'title',
   'mask',
   'value'
  ],
  emits: [
   'input'
  ],
  template: `
    <div class="sp-input">
        <div class="sp-input__label">{{ title }}</div>
        <input type="text" class="input sp-input__field" v-model="inputV" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (___) ___ - __ - __" @input="onInput(inputV)">
    </div>
  `,
  data: function () {
    return {
      inputV: ""
    }
  },
  computed: {
    valueInput: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    onInput(value) {
      const numberPattern = /\d+/g;
      const val = '+' + value.match( numberPattern ).join('');
      this.$emit('input', val);
    }
  }
})