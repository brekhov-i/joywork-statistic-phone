import SpDropdown from "./components/dropdown.js";
import SpInput from "./components/input.js";
import SpCheckbox from "./components/checkbox.js";
import SpButton from "./components/button.js";
import SpTable from "./components/table.js"
import ru from "./locale/ru.js";

const paginate = Vue.component('paginate', VuejsPaginate)
const table = Vue.component('sp-table', SpTable)
Vue.use(Vuetable)

new Vue({
  el: "#app",
  data: {
    datePickerLang: ru,
    period: {
      selected: {title: 'Сегодня', value: 'today'},
      options: [
        {title: 'Сегодня', value: 'today'},
        {title: 'Вчера', value: 'yesterday'},
        {title: 'Позавчера', value: 'beforeYesterday'},
        {title: 'Неделю назад', value: 'a_week_ago'},
      ]
    },
    responsibleOptions: [
      {title: 'Александр', value: 'alexander'},
      {title: 'Николай', value: 'nikolay'},
      {title: 'Мария', value: 'maria'},
      {title: 'Олег', value: 'oleg'},
    ],
    incomingOptions: [],
    durationOptions: [],
    statusOptions: [],
    count: {
      countV: {title: '10', value: 10 },
      countOptions: [
        {title: '10', value: 10 },
        {title: '20', value: 20 },
        {title: '50', value: 50 },
        {title: '100', value: 100 },
      ]
    },
    page: 1,
    dataTable: [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },{
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },

    ],
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
      status: {title: '', value: ''},
      duration: {title: '', value: ''},
      incoming: {title: '', value: ''},
      responsible: {title: '', value: ''},
      isRecord: false,
      phoneOn: "",
      phoneInput: "",
    }
  },
  components: {
    'sp-dropdown': SpDropdown,
    'sp-input': SpInput,
    'sp-checkbox': SpCheckbox,
    'sp-button': SpButton,
    'date-picker': vuejsDatepicker,
    'paginate': paginate,
    'sp-table': table
  },
  computed: {
    viewDataTable() {
      const arr = [...this.dataTable]
      return arr.splice((this.page - 1) * this.count.countV.value, this.count.countV.value)
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
        day: "numeric",
      };
      return date.toLocaleDateString('ru-RU', options);
    },
    setNewPage(page) {
      this.page = page
    },
    choosePeriod(period) {
      if(period.value === 'today') {
        this.filters.date.start = moment().hour(0).minute(0).second(0)._d
        this.filters.date.end = moment().day(1).hour(0).minute(0).second(0)._d
      }
      if(period.value === 'yesterday') {
        this.filters.date.start = moment().day(-1).hour(0).minute(0).second(0)._d
        this.filters.date.end = moment().day(0).hour(0).minute(0).second(0)._d
      }
      if(period.value === 'beforeYesterday') {
        this.filters.date.start = moment().day(-2).hour(0).minute(0).second(0)._d
        this.filters.date.end = moment().day(-1).hour(0).minute(0).second(0)._d
      }
      if(period.value === 'a_week_ago') {
        this.filters.date.start = moment().day(-7).hour(0).minute(0).second(0)._d
        this.filters.date.end = moment().day(0).hour(0).minute(0).second(0)._d
      }
    },
    viewFilteredDataTable() {

      const arr = this.dataTable.filter((el) => {

      })
    }
  },
  mounted() {
    this.filteredData = this.dataTable
    this.choosePeriod(this.period.selected)
  }
})