<template>
<div class="row">
  <div class="col-md-12">
    <h4>使用.sync修饰符</h4>
    <table class="table table-bordered">
      <tbody>
        <tr v-for="item in list" class="text-middle">
          <td>{{item}}</td>
          <td>{{item}}</td>
        </tr>
      </tbody>
    </table>
    <div class="margin-t-1x pull-right">
      <ui-pagination :page.sync="page" :total="500" :pagesInPage="pagesInPage" :showGoto="true"></ui-pagination>
    </div>
  </div>
  <div class="col-md-12">
    <h4>使用pageChange自定义事件</h4>
    <table class="table table-bordered">
      <tbody>
        <tr v-for="item in list2" class="text-middle">
          <td>{{item}}</td>
          <td>{{item}}</td>
        </tr>
      </tbody>
    </table>
    <div class="margin-t-1x pull-right">
      <ui-pagination :page="page2" :total="500" :pagesInPage="pagesInPage" @pageChange="pageChange" :showGoto="true"></ui-pagination>
    </div>
  </div>
</div>
</template>
<script>
import Pagination from '../../../components/ui-pagination/index.vue'
export default {
  components: {
    [Pagination.name]: Pagination
  },
  data() {
    return {
      page: 1,
      pagesInPage: 10,
      page2: 1
    }
  },
  computed: {
    list() {
      let list = []
      let start = (this.page - 1) * this.pagesInPage
      let end = this.page * this.pagesInPage
      for (let i = start; i < end; i++) {
        list.push(i)
      }
      return list
    },
    list2() {
      let list = []
      let start = (this.page2 - 1) * this.pagesInPage
      let end = this.page2 * this.pagesInPage
      for (let i = start; i < end; i++) {
        list.push(i)
      }
      return list
    }
  },
  watch: {
    page(val) {
      console.log(`page changed to ${val}`) // eslint-disable-line
      console.log(this.page) // eslint-disable-line
    }
  },
  methods: {
    pageChange(page) {
      this.page2 = page
    }
  }
}
</script>
