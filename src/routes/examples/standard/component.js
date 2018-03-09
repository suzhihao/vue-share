import sampleService from '../../../services/sample-service'
import uiService from '../../../core/ui-service'

export default {
  data() {
    return {
      sampleData: {}
    }
  },

  computed: {},
  methods: {
    fetchData(page) {
      sampleService
        .loadSampleDataByPage(page || 1)
        .then(data => {
          this.sampleData = data.data
        })
        .catch(() => {})
    },
    handleDelete(item) {
      console.log(item) // eslint-disable-line
      uiService.bootbox.confirm('你确定删除该项?', result => {
        console.log(result) // eslint-disable-line
      })
    }
  },
  created() {
    this.fetchData()
  }
}
