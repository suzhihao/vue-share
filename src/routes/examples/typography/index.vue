<template>
<div class="row">
  <div class="col-md-24">
    这是typography
  </div>
  <div class="col-md-24">
    <h1>H1.测试一下微软雅黑字体</h1>
    <h2>H2.测试一下微软雅黑字体</h2>
    <h3>H3.测试一下微软雅黑字体</h3>
    <h4>H4.测试一下微软雅黑字体</h4>
    <h5>H5.测试一下微软雅黑字体</h5>
    <h6>H6.测试一下微软雅黑字体</h6>
  </div>

  <div class="col-xs-24">
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
    </el-date-picker>
  </div>
  <div class="col-xs-24" style="margin-top:20px;">
    <input type="text" class="form-control">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      value1: ''
    }
  }
}
</script>
