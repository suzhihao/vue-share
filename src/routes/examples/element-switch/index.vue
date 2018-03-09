<template>
<div class="row">
  <br/>
  <div class="col-md-24">
    <p>基本用法</p>
    <br/>
    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    {{value2}}
    <br/><br/>
    <p>文字描述</p>
    <br/>
    <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费">
    </el-switch>
    <br/><br/>
    <el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
    </el-switch>
    <br/>
    <p>扩展的 value 类型</p>
    <br/>
    <el-tooltip :content="'Switch value: ' + value5" placement="top">
      <el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0">
      </el-switch>
    </el-tooltip>
    <br/><br/>
    <p>禁用状态</p>
    <br/>
    <el-switch v-model="value6" disabled>
    </el-switch>
    <el-switch v-model="value7" disabled>
    </el-switch>
    <br/>
    <br/>
    <p>event事件: change：switch 状态发生变化时的回调函数</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: '100',
      value6: true,
      value7: false
    }
  }
}
</script>
