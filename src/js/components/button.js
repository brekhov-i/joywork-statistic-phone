export default Vue.component('sp-button', {
  props: [
   'color'
  ],
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
    return {}
  },
  computed: {
    getClass: function () {
      return this.color ? `button--${this.color}` : 'button--primary'
    }
  }
})