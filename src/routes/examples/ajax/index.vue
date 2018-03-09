<template>
<div class="row">
  <div class="col-md-24">
    <ui-portlet class="light bordered">
      <template slot="header">
          <div class="caption font-green-seagreen">
            <i class="icon-settings font-green-sharp"></i>
            <span class="caption-subject">修改账户信息</span>
            <!-- <span class="caption-helper">这里放Portlet二级标题</span> -->
          </div>
          <div class="actions">
            <button class="btn default btn-xs purple-stripe"><i
                class="fa fa-repeat"></i> 刷新
            </button>
            <button class="btn default btn-xs red-stripe"><i class="fa fa-download"></i>
              导出数据
            </button>
            <ui-portlet-fullscreen-btn></ui-portlet-fullscreen-btn>
          </div>
      </template>
      <template slot="body">
          <div class="clearfix">
            <h4>Ajax请求分页</h4>
            <table class="table table-bordered">
              <tbody>
              <tr v-for="(item, index) in sampleData.items" class="text-middle">
                <td>{{index}}</td>
                <td>{{item.title}}</td>
              </tr>
              </tbody>
            </table>
            <div class="margin-t-1x pull-right">
              <ui-pagination :total="sampleData.total" @pageChange="fetchData"></ui-pagination>
            </div>
          </div>      
        </template>
    </ui-portlet>
  </div>
</div>
</template>
<script>
import Pagination from '../../../components/ui-pagination/index.vue'
import Portlet from '../../../components/ui-portlet/index.vue'
import sampleService from '../../../services/sample-service'
export default {
  components: {
    [Pagination.name]: Pagination,
    [Portlet.name]: Portlet
  },
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
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
<style scoped lang="scss">
</style>
