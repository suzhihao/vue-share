<template>
<div class="row">
  <div class="col-md-24">
    <h3>基础用法</h3>
    <el-tooltip content="Top center" placement="top">
      <button type="button" class="btn btn-primary">Primary</button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
      <button type="button" class="btn btn-primary">Primary</button>
    </el-tooltip>
    <br/>
    <h3>更多 Content</h3>
    <p>展示多行文本或者是设置文本内容的格式</p>
    <br/>
    <el-tooltip placement="top">
      <div slot="content">多行信息<br/>第二行信息</div>
      <button type="button" class="btn btn-primary">Top center</button>
    </el-tooltip>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {}
}
</script>
